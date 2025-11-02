export interface VoiceConfig {
  voice: number;
  speed: number;
  pitch: number;
  volume: number;
}

export interface Hero {
  id: string;
  name: string;
  voiceText: string[];
  detailImage: string;
  voiceConfig: VoiceConfig;
}

export const heroes: Hero[] = [
  {
    id: 'kai',
    name: '凯',
    voiceText: [
      '四和十，十和四，十四和四十，四十和十四。',
      '说好四和十得靠舌头和牙齿：谁说四十是"细席"，他的舌头没用力；',
      '谁说十四是"适时"，他的舌头没伸直。',
      '认真学，常练习，十四、四十、四十四。',
    ],
    detailImage: 'https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79x33rxtob9c.png',
    voiceConfig: {
      voice: 1,
      speed: 5,
      pitch: 3,
      volume: 9,
    },
  },
  {
    id: 'caiweniji',
    name: '蔡文姬',
    voiceText: [
      '请模仿穿边这个表情包。',
      '老师拍照留念。',
    ],
    detailImage: 'https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79x6ho2k6ccg.png',
    voiceConfig: {
      voice: 4,
      speed: 5,
      pitch: 7,
      volume: 9,
    },
  },
];
