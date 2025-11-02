# 快速开始指南

## 🎯 5分钟上手

### 第一步：获取项目

您已经有了项目代码包！

### 第二步：安装依赖

打开终端（Terminal），进入项目目录：

```bash
cd app-79wzg8jncmip
pnpm install
```

如果没有pnpm，使用npm：

```bash
npm install
```

### 第三步：运行项目

```bash
pnpm run dev
```

或

```bash
npm run dev
```

### 第四步：打开浏览器

访问：http://localhost:5173

🎉 恭喜！游戏已经运行起来了！

## 🎵 添加自定义语音（可选）

### 最简单的方法

1. **准备音频文件**
   - 录制或使用AI工具生成语音
   - 文件格式：MP4、MP3、WAV都可以

2. **重命名文件**
   ```
   kai.mp4          # 凯
   caiweniji.mp4    # 蔡文姬
   sunwukong.mp4    # 孙悟空
   houyi.mp4        # 后羿
   zhubajie.mp4     # 猪八戒
   lvbu.mp4         # 吕布
   guanyu.mp4       # 关羽
   ```

3. **放入项目**
   - 将文件复制到 `public/audio/` 目录
   - 就这么简单！

4. **测试**
   - 刷新浏览器
   - 进入英雄详情页
   - 点击"背景音效"按钮
   - 应该显示"正在播放XXX的语音（本地文件）"

### 如果不添加音频文件会怎样？

没关系！系统会自动使用AI生成语音。

## ⚙️ 修改英雄配置（可选）

### 修改英雄台词

打开 `src/types/hero.ts` 文件，找到对应英雄：

```typescript
{
  id: 'kai',
  name: '凯',
  voiceText: [
    '这里是台词第一句',
    '这里是台词第二句',
    // 可以有多句
  ],
  // ...
}
```

### 修改音频文件名

如果您的文件名不是 `kai.mp4`：

```typescript
{
  id: 'kai',
  name: '凯',
  localAudioFile: 'my-kai-voice.mp3',  // 改成您的文件名
  // ...
}
```

### 修改AI音色

```typescript
{
  id: 'kai',
  name: '凯',
  voiceConfig: {
    voice: 1,    // 1=男声, 4=女声
    speed: 5,    // 3=慢, 5=正常, 7=快
    pitch: 3,    // 3=低沉, 5=正常, 7=尖锐
    volume: 9,   // 音量 0-15
  },
  // ...
}
```

## 🚀 部署到网上

### 最简单的方法：Vercel

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录**
   ```bash
   vercel login
   ```
   按提示登录您的账号

3. **部署**
   ```bash
   vercel
   ```
   按提示操作，几分钟后就能得到一个网址！

4. **分享**
   - 复制Vercel给您的网址
   - 发送给朋友
   - 他们打开就能玩！

### 生成二维码

1. 访问：https://cli.im/
2. 输入您的网址
3. 下载二维码图片
4. 分享给朋友扫码

## 📱 在手机上测试

### 方法1：使用局域网地址

运行项目后，终端会显示：

```
Local:   http://localhost:5173
Network: http://192.168.1.100:5173
```

在手机浏览器输入 Network 地址即可访问。

### 方法2：部署后访问

部署到Vercel后，直接用手机浏览器打开网址。

## 🔧 常见问题

### 问题1：npm install 很慢

**解决方法：**

使用国内镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### 问题2：端口被占用

**错误信息：**
```
Port 5173 is already in use
```

**解决方法：**

指定其他端口：

```bash
pnpm run dev -- --port 3000
```

### 问题3：音频文件不播放

**检查清单：**
- [ ] 文件名是否正确（区分大小写）
- [ ] 文件是否在 `public/audio/` 目录
- [ ] 文件格式是否正确（MP4/MP3/WAV）

### 问题4：修改代码后没有效果

**解决方法：**

1. 保存文件（Ctrl+S 或 Cmd+S）
2. 刷新浏览器（F5 或 Cmd+R）
3. 如果还不行，重启开发服务器：
   - 按 Ctrl+C 停止
   - 重新运行 `pnpm run dev`

## 📚 下一步

### 学习更多

- **完整部署指南**：`docs/DEPLOYMENT.md`
- **使用说明**：`docs/USAGE.md`
- **音频配置详解**：`public/audio/README.md`

### 添加更多英雄

1. 准备英雄素材（背景图、语音）
2. 编辑 `src/types/hero.ts` 添加配置
3. 更新 `src/pages/HeroSelect.tsx` 添加位置
4. 测试并部署

详细步骤：`docs/DEPLOYMENT.md` 的"添加新英雄"章节

### 自定义样式

1. 修改配色：编辑 `src/index.css`
2. 修改布局：编辑对应的页面文件
3. 添加动画：使用Tailwind CSS动画类

## 💡 小贴士

### 开发技巧

1. **使用热重载**
   - 修改代码后自动刷新
   - 无需手动刷新浏览器

2. **查看控制台**
   - 按 F12 打开开发者工具
   - 查看错误信息和日志

3. **使用Git管理**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

### 性能优化

1. **压缩音频文件**
   - 使用在线工具压缩
   - 建议文件大小 < 500KB

2. **使用CDN**
   - 将音频文件上传到CDN
   - 修改配置使用CDN地址

3. **启用缓存**
   - 系统已自动启用localStorage缓存
   - 无需额外配置

## 🎉 完成！

现在您已经掌握了基本使用方法！

如有问题，查看完整文档：
- `README.md` - 项目概览
- `docs/DEPLOYMENT.md` - 完整部署指南
- `docs/USAGE.md` - 详细使用说明

---

**祝您使用愉快！** 🚀✨
