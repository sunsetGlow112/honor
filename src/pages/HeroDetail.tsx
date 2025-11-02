import { useNavigate, useParams } from 'react-router-dom';
import { Volume2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { heroes } from '@/types/hero';
import { useState, useRef, useEffect } from 'react';
import api from '@/services/api';

export default function HeroDetail() {
  const navigate = useNavigate();
  const { heroId } = useParams<{ heroId: string }>();
  const { toast } = useToast();
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const hero = heroes.find((h) => h.id === heroId);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  if (!hero) {
    return (
      <div className="min-h-screen w-full bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">英雄未找到</h1>
          <Button onClick={() => navigate('/hero-select')}>返回选择</Button>
        </div>
      </div>
    );
  }

  const handleBackClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    navigate('/hero-select');
  };

  const handleAudioClick = async () => {
    if (audioUrl && audioRef.current) {
      audioRef.current.play();
      toast({
        title: '播放语音',
        description: `正在播放${hero.name}的语音`,
      });
      return;
    }

    setIsLoadingAudio(true);
    try {
      const taskResponse = await api.createTTSTask(hero.voiceText, hero.voiceConfig);

      if (taskResponse.status !== 0) {
        throw new Error(taskResponse.msg || '创建语音任务失败');
      }

      const taskId = taskResponse.data.task_id;
      let attempts = 0;
      const maxAttempts = 20;

      const checkResult = async (): Promise<void> => {
        if (attempts >= maxAttempts) {
          throw new Error('语音生成超时，请稍后重试');
        }

        attempts++;
        const resultResponse = await api.getTTSResult([taskId]);

        if (resultResponse.status !== 0) {
          throw new Error(resultResponse.msg || '查询语音结果失败');
        }

        const taskInfo = resultResponse.data.tasks_info[0];
        if (!taskInfo) {
          throw new Error('未找到任务信息');
        }

        if (taskInfo.task_status === 'Success' && taskInfo.task_result?.speech_url) {
          const url = taskInfo.task_result.speech_url;
          setAudioUrl(url);

          const audio = new Audio(url);
          audioRef.current = audio;
          audio.play();

          toast({
            title: '播放语音',
            description: `正在播放${hero.name}的语音`,
          });
        } else if (taskInfo.task_status === 'Failed') {
          throw new Error('语音生成失败');
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          await checkResult();
        }
      };

      await checkResult();
    } catch (error) {
      console.error('语音生成错误:', error);
      toast({
        title: '错误',
        description: error instanceof Error ? error.message : '语音生成失败，请稍后重试',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingAudio(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${hero.detailImage})`,
      }}
    >
      {/* 返回首页按钮 */}
      <Button
        onClick={handleBackClick}
        className="absolute top-[8%] right-[8%] bg-secondary/80 hover:bg-secondary border-2 border-primary text-lg px-8 py-6"
        size="lg"
      >
        返回首页
      </Button>

      {/* 背景音效按钮 */}
      <Button
        onClick={handleAudioClick}
        disabled={isLoadingAudio}
        className="absolute top-[30%] left-[15%] bg-secondary/80 hover:bg-secondary border-2 border-primary text-lg px-8 py-6"
        size="lg"
      >
        {isLoadingAudio ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            生成中...
          </>
        ) : (
          <>
            <Volume2 className="mr-2 h-5 w-5" />
            背景音效
          </>
        )}
      </Button>
    </div>
  );
}
