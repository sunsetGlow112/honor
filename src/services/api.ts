import axios from 'axios';

const APP_ID = import.meta.env.VITE_APP_ID;

const apiClient = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'X-App-Id': APP_ID,
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API 请求错误:', error);
    if (error.response?.data?.status === 999) {
      throw new Error(error.response.data.msg);
    }
    return Promise.reject(error);
  }
);

export interface TTSTaskResponse {
  status: number;
  msg: string;
  data: {
    log_id: number;
    task_id: string;
    task_status: string;
  };
}

export interface TTSResultResponse {
  status: number;
  msg: string;
  data: {
    log_id: number;
    tasks_info: Array<{
      task_id: string;
      task_status: string;
      task_result?: {
        speech_url: string;
      };
    }>;
  };
}

const api = {
  // 创建语音合成任务
  createTTSTask: (text: string[]): Promise<TTSTaskResponse> =>
    apiClient.post('/api/miaoda/runtime/apicenter/source/proxy/ttslongnY1YrenyAFtHN3S38sQFYZ', {
      text,
      format: 'mp3-16k',
      voice: 3,
      speed: 5,
      pitch: 5,
      volume: 8,
      break: 500,
    }),

  // 查询语音合成任务结果
  getTTSResult: (taskIds: string[]): Promise<TTSResultResponse> =>
    apiClient.post('/api/miaoda/runtime/apicenter/source/proxy/ttsqueryu4r6kyb4kbPKv3ECNYA', {
      task_ids: taskIds,
    }),
};

export default api;
