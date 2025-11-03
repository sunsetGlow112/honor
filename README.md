# Welcome to Your Miaoda Project
Miaoda Application Link URL
    URL:https://www.miaoda.cn/projects/app-79wzg8jncmip

# 王者荣耀英雄互动小游戏

一款基于王者荣耀英雄形象的互动展示类小游戏，支持英雄语音播放和互动挑战。

## ✨ 特色功能

### 🎮 游戏玩法
- **多界面流程**：主界面 → 提示界面 → 英雄选择 → 英雄详情
- **英雄互动**：点击英雄头像进入专属详情页
- **语音播放**：每个英雄都有独特的语音内容

### 🎤 智能语音系统
- **三级语音来源**：
  1. 本地音频文件（优先）
  2. localStorage缓存（次选）
  3. AI实时生成（备选）
- **自动缓存**：首次生成后自动保存，下次秒开
- **灵活配置**：支持自定义录音或AI模仿

### 🎨 精美设计
- **王者荣耀风格**：深蓝色+金色配色
- **游戏原画背景**：使用官方高清素材
- **响应式布局**：完美适配PC和移动端

## 🚀 快速开始

### 安装依赖
```bash
pnpm install
# 或
npm install
```

### 开发模式
```bash
pnpm run dev
# 或
npm run dev
```
访问：http://localhost:5173

### 构建生产版本
```bash
pnpm run build
# 或
npm run build
```

## 🎵 添加自定义语音

### 方法1：使用本地音频文件（推荐）

1. 准备音频文件（MP4/MP3/WAV格式）
2. 按英雄ID命名：`kai.mp4`, `caiweniji.mp4` 等
3. 放入 `public/audio/` 目录
4. 刷新页面即可使用

详细说明：`public/audio/README.md`

### 方法2：使用AI生成（自动）

不提供本地文件时，系统自动调用百度AI语音合成API生成。

## 📁 项目结构

```
app-79wzg8jncmip/
├── public/
│   └── audio/              # 英雄语音文件目录 ⭐
│       ├── README.md       # 音频配置说明
│       ├── kai.mp4         # 凯的语音（需添加）
│       └── ...
├── src/
│   ├── pages/              # 页面组件
│   ├── types/
│   │   └── hero.ts         # 英雄配置文件 ⭐
│   ├── services/
│   │   └── api.ts          # API服务
│   └── routes.tsx          # 路由配置
├── docs/                   # 文档目录
│   ├── DEPLOYMENT.md       # 部署指南 ⭐
│   ├── USAGE.md            # 使用说明
│   └── ...
└── CHANGELOG.md            # 更新日志
```

⭐ 标记的是重要配置文件

## ⚙️ 配置英雄

编辑 `src/types/hero.ts` 文件：

```typescript
export const heroes: Hero[] = [
  {
    id: 'kai',                    // 英雄ID
    name: '凯',                   // 英雄名称
    localAudioFile: 'kai.mp4',   // 本地音频文件名
    voiceText: ['...'],          // AI生成的文本
    detailImage: 'https://...',  // 详情页背景图
    voiceConfig: {               // AI音色配置
      voice: 1,      // 1=男声, 4=女声
      speed: 5,      // 语速
      pitch: 3,      // 音调
      volume: 9,     // 音量
    },
  },
];
```

## 🎯 已开放英雄

| 序号 | 英雄名称 | 挑战内容 | 音频文件 |
|------|---------|---------|---------|
| 1 | 凯 | 绕口令挑战 | `kai.mp4` |
| 2 | 蔡文姬 | 表情包模仿 | `caiweniji.mp4` |
| 3 | 孙悟空 | 演唱《孤勇者》 | `sunwukong.mp4` |
| 4 | 后羿 | 走猫步挑战 | `houyi.mp4` |
| 5 | 猪八戒 | 四小天鹅舞蹈 | `zhubajie.mp4` |
| 6 | 吕布 | 跳舞挑战 | `lvbu.mp4` |
| 7 | 关羽 | 才艺表演 | `guanyu.mp4` |

## 📚 完整文档

- **部署指南**：`docs/DEPLOYMENT.md` - 部署和维护完整指南 ⭐
- **使用说明**：`docs/USAGE.md` - 游戏玩法和功能介绍
- **音频配置**：`public/audio/README.md` - 音频文件配置说明
- **缓存功能**：`docs/CACHE.md` - 语音缓存技术说明
- **英雄说明**：`docs/HEROES.md` - 所有英雄详细信息

## 🚀 快速部署

### Vercel（推荐）
```bash
npm install -g vercel
vercel
```

详细部署指南：`docs/DEPLOYMENT.md`

## 🛠️ 技术栈

Vite、TypeScript、React、Tailwind CSS、shadcn/ui、百度AI语音合成

## 🎮 使用场景

- 课堂互动活动
- 朋友聚会游戏
- 普通话练习工具
- 团队建设活动
- 王者荣耀粉丝娱乐

## 📝 更新日志

查看 `CHANGELOG.md` 了解版本更新历史。

---

**开始您的王者荣耀英雄互动之旅！** 🎮✨
