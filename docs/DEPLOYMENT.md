# 项目部署和维护指南

## 📦 项目结构

```
app-79wzg8jncmip/
├── public/                 # 静态资源目录
│   ├── audio/             # 英雄语音文件目录
│   │   ├── README.md      # 音频文件说明
│   │   ├── kai.mp4        # 凯的语音（需要您添加）
│   │   ├── caiweniji.mp4  # 蔡文姬的语音（需要您添加）
│   │   └── ...            # 其他英雄语音
│   └── favicon.ico        # 网站图标
├── src/                   # 源代码目录
│   ├── components/        # 组件
│   ├── pages/            # 页面
│   │   ├── Home.tsx      # 主界面
│   │   ├── Tip.tsx       # 提示界面
│   │   ├── HeroSelect.tsx # 英雄选择界面
│   │   └── HeroDetail.tsx # 英雄详情页
│   ├── services/         # API服务
│   │   └── api.ts        # 语音合成API
│   ├── types/            # 类型定义
│   │   └── hero.ts       # 英雄数据配置（重要！）
│   ├── App.tsx           # 应用入口
│   └── main.tsx          # 主文件
├── docs/                 # 文档目录
│   ├── USAGE.md          # 使用说明
│   ├── CACHE.md          # 缓存功能说明
│   ├── HEROES.md         # 英雄详细说明
│   ├── SHARE.md          # 分享指南
│   └── DEPLOYMENT.md     # 本文件
├── package.json          # 项目依赖
├── vite.config.ts        # Vite配置
└── README.md             # 项目说明
```

## 🎯 快速开始

### 1. 环境要求

- Node.js 18+ 
- pnpm（推荐）或 npm

### 2. 安装依赖

```bash
cd app-79wzg8jncmip
pnpm install
# 或
npm install
```

### 3. 开发模式运行

```bash
pnpm run dev
# 或
npm run dev
```

访问：http://localhost:5173

### 4. 构建生产版本

```bash
pnpm run build
# 或
npm run build
```

构建产物在 `dist/` 目录

## 🎵 添加自定义语音

### 方法1：使用本地音频文件（推荐）

**步骤：**

1. **准备音频文件**
   - 录制或使用AI工具生成语音
   - 支持格式：MP4, MP3, WAV, OGG
   - 建议大小：< 500KB

2. **重命名文件**
   ```bash
   # 按照英雄ID命名
   kai.mp4          # 凯
   caiweniji.mp4    # 蔡文姬
   sunwukong.mp4    # 孙悟空
   houyi.mp4        # 后羿
   zhubajie.mp4     # 猪八戒
   lvbu.mp4         # 吕布
   guanyu.mp4       # 关羽
   ```

3. **放入项目**
   ```bash
   # 将音频文件复制到 public/audio/ 目录
   cp kai.mp4 public/audio/
   cp caiweniji.mp4 public/audio/
   # ... 其他文件
   ```

4. **测试**
   ```bash
   # 重新运行项目
   pnpm run dev
   
   # 打开浏览器，进入英雄详情页
   # 点击"背景音效"按钮
   # 应该显示"正在播放XXX的语音（本地文件）"
   ```

### 方法2：使用AI生成（自动）

如果不提供本地文件，系统会自动调用百度AI语音合成API生成。

**优点：**
- 无需准备音频文件
- 自动生成并缓存

**缺点：**
- 首次需要等待3-5秒
- 需要网络连接
- 音色可能不够个性化

## ⚙️ 配置英雄

### 编辑英雄配置文件

打开 `src/types/hero.ts`，这是最重要的配置文件！

```typescript
export const heroes: Hero[] = [
  {
    id: 'kai',                    // 英雄ID（不要修改）
    name: '凯',                   // 英雄名称
    localAudioFile: 'kai.mp4',   // 本地音频文件名（可修改）
    voiceText: [                 // AI生成的文本（可修改）
      '四和十，十和四...',
    ],
    detailImage: 'https://...',  // 详情页背景图（可修改）
    voiceConfig: {               // AI音色配置（可修改）
      voice: 1,      // 音色：1=度小宇(男), 4=度丫丫(女)
      speed: 5,      // 语速：0-15，5为正常
      pitch: 3,      // 音调：0-15，5为正常
      volume: 9,     // 音量：0-15
    },
  },
  // ... 其他英雄
];
```

### 配置说明

#### 1. 修改本地音频文件名

```typescript
// 如果您的文件名不是 kai.mp4，可以修改：
localAudioFile: 'kai-voice.mp3',
localAudioFile: 'hero-kai.wav',

// 如果不想使用本地文件，删除这一行或设为 undefined：
// localAudioFile: undefined,
```

#### 2. 修改AI生成的文本

```typescript
voiceText: [
  '这是第一句话',
  '这是第二句话',
  '可以有多句',
],
```

#### 3. 修改AI音色参数

```typescript
voiceConfig: {
  voice: 1,    // 1=度小宇(成熟男性), 4=度丫丫(可爱女性)
  speed: 5,    // 3=慢速, 5=正常, 7=快速
  pitch: 3,    // 3=低沉, 5=正常, 7=尖锐
  volume: 9,   // 音量，建议8-10
},
```

#### 4. 修改详情页背景图

```typescript
detailImage: 'https://your-image-url.com/image.png',
// 或使用本地图片
detailImage: '/images/kai-bg.png',
```

## 🚀 部署到生产环境

### 方法1：部署到静态网站托管（推荐）

#### Vercel（最简单）

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd app-79wzg8jncmip
   vercel
   ```

4. **访问**
   - Vercel会给您一个URL，如：https://your-app.vercel.app

#### Netlify

1. **安装Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **登录Netlify**
   ```bash
   netlify login
   ```

3. **部署**
   ```bash
   cd app-79wzg8jncmip
   netlify deploy --prod
   ```

#### GitHub Pages

1. **修改 vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',  // 添加这一行
     // ...
   });
   ```

2. **构建**
   ```bash
   pnpm run build
   ```

3. **部署**
   ```bash
   # 将 dist/ 目录推送到 gh-pages 分支
   git subtree push --prefix dist origin gh-pages
   ```

### 方法2：部署到自己的服务器

#### 使用Nginx

1. **构建项目**
   ```bash
   pnpm run build
   ```

2. **上传到服务器**
   ```bash
   scp -r dist/* user@your-server:/var/www/html/
   ```

3. **配置Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       location /audio/ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. **重启Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

## 📱 分享给朋友

部署完成后，您会得到一个网址，例如：
- https://your-app.vercel.app
- https://your-domain.com

直接分享这个网址给朋友，他们打开就能玩！

### 生成二维码

```bash
# 使用在线工具生成二维码
# 推荐：https://cli.im/
# 输入您的网址，下载二维码图片
```

## 🔧 维护和更新

### 添加新英雄

1. **准备素材**
   - 英雄详情页背景图
   - 英雄语音文件（可选）
   - 英雄台词文本

2. **编辑 src/types/hero.ts**
   ```typescript
   export const heroes: Hero[] = [
     // ... 现有英雄
     {
       id: 'diaochan',           // 新英雄ID
       name: '貂蝉',
       localAudioFile: 'diaochan.mp4',
       voiceText: ['台词内容...'],
       detailImage: 'https://...',
       voiceConfig: {
         voice: 4,  // 女性音色
         speed: 5,
         pitch: 6,
         volume: 9,
       },
     },
   ];
   ```

3. **更新英雄选择界面**
   
   编辑 `src/pages/HeroSelect.tsx`：
   ```typescript
   const availableHeroes = [
     'kai', 'caiweniji', 'sunwukong', 
     'houyi', 'zhubajie', 'lvbu', 'guanyu',
     'diaochan',  // 添加新英雄
   ];

   const heroPositions = [
     // ... 现有位置
     { id: 'diaochan', style: { top: '45%', left: '38%' } },  // 第8个位置
   ];
   ```

4. **添加语音文件**
   ```bash
   cp diaochan.mp4 public/audio/
   ```

5. **测试**
   ```bash
   pnpm run dev
   ```

6. **重新部署**
   ```bash
   pnpm run build
   vercel --prod
   ```

### 修改现有英雄

1. **修改台词**
   
   编辑 `src/types/hero.ts`，找到对应英雄，修改 `voiceText`：
   ```typescript
   voiceText: [
     '新的台词内容',
     '可以多行',
   ],
   ```

2. **更换语音文件**
   ```bash
   # 删除旧文件
   rm public/audio/kai.mp4
   
   # 添加新文件
   cp new-kai-voice.mp4 public/audio/kai.mp4
   ```

3. **清除缓存**
   
   提醒用户清除浏览器缓存，或者修改文件名：
   ```typescript
   localAudioFile: 'kai-v2.mp4',  // 新版本
   ```

### 修改UI样式

1. **修改配色**
   
   编辑 `src/index.css`：
   ```css
   :root {
     --primary: 220 90% 56%;  /* 修改主色调 */
     --secondary: 45 93% 47%; /* 修改次要色 */
   }
   ```

2. **修改按钮样式**
   
   编辑对应的页面文件（如 `src/pages/HeroDetail.tsx`）

## 🐛 常见问题

### 问题1：音频文件不播放

**检查：**
```bash
# 1. 确认文件存在
ls -la public/audio/

# 2. 确认文件名正确（区分大小写）
# 3. 确认文件格式被浏览器支持
```

**解决：**
- 使用MP4或MP3格式
- 确保文件名与配置一致
- 检查浏览器控制台错误

### 问题2：构建失败

**检查：**
```bash
# 1. 清除缓存
rm -rf node_modules
rm -rf dist
rm pnpm-lock.yaml

# 2. 重新安装
pnpm install

# 3. 重新构建
pnpm run build
```

### 问题3：部署后404

**原因：** 单页应用路由问题

**解决：**
- Vercel/Netlify：自动处理
- Nginx：配置 `try_files $uri $uri/ /index.html;`
- GitHub Pages：使用 HashRouter 或配置404.html

### 问题4：AI语音生成失败

**检查：**
- 网络连接是否正常
- API配额是否用完
- 浏览器控制台错误信息

**解决：**
- 使用本地音频文件
- 检查 `.env` 文件配置
- 联系技术支持

## 📊 性能优化

### 1. 压缩音频文件

```bash
# 使用ffmpeg压缩
ffmpeg -i input.mp4 -c:a aac -b:a 64k output.mp4
```

### 2. 启用CDN

将 `public/audio/` 目录上传到CDN，修改配置：

```typescript
// src/types/hero.ts
localAudioFile: 'https://cdn.your-domain.com/audio/kai.mp4',
```

### 3. 懒加载

音频文件已经是按需加载，无需额外配置。

## 🔒 安全建议

1. **不要提交敏感信息到Git**
   ```bash
   # .gitignore 已包含
   .env
   .env.local
   ```

2. **使用环境变量**
   ```bash
   # .env
   VITE_APP_ID=your-app-id
   VITE_API_ENV=production
   ```

3. **定期更新依赖**
   ```bash
   pnpm update
   ```

## 📞 技术支持

### 文档
- 使用说明：`docs/USAGE.md`
- 缓存功能：`docs/CACHE.md`
- 英雄说明：`docs/HEROES.md`
- 音频配置：`public/audio/README.md`

### 日志
- 更新日志：`CHANGELOG.md`
- 项目说明：`README.md`

### 在线资源
- React文档：https://react.dev
- Vite文档：https://vitejs.dev
- Tailwind CSS：https://tailwindcss.com

---

**祝您部署顺利！** 🚀✨
