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
  localAudioFile?: string;
  cachedAudioUrl?: string;
}

export const heroes: Hero[] = [
  {
    id: 'kai',
    name: '凯',
    localAudioFile: 'kai.mp4',
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
    localAudioFile: 'caiweniji.mp4',
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
  {
    id: 'sunwukong',
    name: '孙悟空',
    localAudioFile: 'sunwukong.mp4',
    voiceText: [
      '歌唱一首《孤勇者》',
      '爱你孤身走暗巷，爱你不跪的模样',
      '爱你对峙过绝望，不肯哭一场',
      '爱你破烂的衣裳，却敢堵命运的枪',
      '爱你和我那么像，缺口都一样',
      '去吗？配吗？这褴褛的披风',
      '战吗？战啊！以最卑微的梦',
      '致那黑夜中的呜咽与怒吼，谁说站在光里的才算英雄',
    ],
    detailImage: 'https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79xputnp22v4.png',
    voiceConfig: {
      voice: 1,
      speed: 5,
      pitch: 4,
      volume: 9,
    },
  },
  {
    id: 'houyi',
    name: '后羿',
    localAudioFile: 'houyi.mp4',
    voiceText: [
      '走猫步',
      '绕全班过道用猫步走一圈，',
      '停顿三次，并摆三个搞笑',
      '的造型。',
    ],
    detailImage: 'https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79xqcd1kxudc.png',
    voiceConfig: {
      voice: 1,
      speed: 5,
      pitch: 5,
      volume: 9,
    },
  },
  {
    id: 'zhubajie',
    name: '猪八戒',
    localAudioFile: 'zhubajie.mp4',
    voiceText: [
      '四小天鹅',
      '请找到你的小伙伴，并像',
      '图片一样手挽手上台一起',
      '跳一段四小天鹅。',
    ],
    detailImage: 'https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79xqqe5hx5og.png',
    voiceConfig: {
      voice: 1,
      speed: 5,
      pitch: 6,
      volume: 9,
    },
  },
  {
    id: 'lvbu',
    name: '吕布',
    localAudioFile: 'lvbu.mp4',
    voiceText: [
      '来跳舞吧',
      '请拉上你两个好朋友',
      '上台来表演这一段舞蹈。',
    ],
    detailImage: 'https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79xr3jowt24g.png',
    voiceConfig: {
      voice: 1,
      speed: 5,
      pitch: 4,
      volume: 9,
    },
  },
  {
    id: 'guanyu',
    name: '关羽',
    localAudioFile: 'guanyu.mp4',
    voiceText: [
      '表演一段才艺',
      '请上台表演一段你最拿手的才艺，',
      '可以是唱歌、跳舞、讲笑话等。',
    ],
    detailImage: 'https://miaoda-conversation-file.cdn.bcebos.com/user-79ww43jdlwcg/conv-79wzg8jncmio/20251102/file-79xr3jowt24g.png',
    voiceConfig: {
      voice: 1,
      speed: 5,
      pitch: 3,
      volume: 9,
    },
  },
];
