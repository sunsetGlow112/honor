import { useNavigate } from 'react-router-dom';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function HeroSelect() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAudioClick = () => {
    toast({
      title: '背景音效',
      description: '背景音乐功能',
    });
  };

  // 英雄头像的位置映射（根据image-3.png中的布局）
  const heroPositions = [
    { id: 'kai', style: { top: '32%', left: '18%' } },
    { id: 'caiweniji', style: { top: '32%', left: '28%' } },
    { id: 'sunwukong', style: { top: '32%', left: '38%' } },
    { id: 'houyi', style: { top: '32%', left: '48%' } },
    { id: 'zhubajie', style: { top: '32%', left: '58%' } },
    { id: 'lvbu', style: { top: '45%', left: '18%' } },
    { id: 'guanyu', style: { top: '45%', left: '28%' } },
    { id: 'hero8', style: { top: '45%', left: '38%' } },
    { id: 'hero9', style: { top: '45%', left: '48%' } },
    { id: 'hero10', style: { top: '45%', left: '58%' } },
    { id: 'hero11', style: { top: '58%', left: '18%' } },
    { id: 'hero12', style: { top: '58%', left: '28%' } },
    { id: 'hero13', style: { top: '58%', left: '38%' } },
    { id: 'hero14', style: { top: '58%', left: '48%' } },
    { id: 'hero15', style: { top: '58%', left: '58%' } },
  ];

  const handleHeroClick = (heroId: string) => {
    // 已开放的英雄列表
    const availableHeroes = ['kai', 'caiweniji', 'sunwukong', 'houyi', 'zhubajie', 'lvbu', 'guanyu'];
    
    if (availableHeroes.includes(heroId)) {
      navigate(`/hero-detail/${heroId}`);
    } else {
      toast({
        title: '提示',
        description: '该英雄暂未开放',
      });
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79x1r3udnl6o.png)',
      }}
    >
      {/* 背景音效按钮 */}
      <Button
        onClick={handleAudioClick}
        className="absolute top-[12%] left-[8%] bg-secondary/80 hover:bg-secondary border-2 border-primary"
        size="lg"
      >
        <Volume2 className="mr-2 h-5 w-5" />
        背景音效
      </Button>

      {/* 英雄头像点击区域 */}
      {heroPositions.map((hero) => (
        <button
          key={hero.id}
          type="button"
          onClick={() => handleHeroClick(hero.id)}
          className="absolute w-[8%] h-[11%] rounded-full cursor-pointer hover:ring-4 hover:ring-primary transition-all"
          style={hero.style}
          aria-label={`选择${hero.id}`}
        />
      ))}
    </div>
  );
}
