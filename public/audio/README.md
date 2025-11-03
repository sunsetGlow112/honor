# Welcome to Your Miaoda Project
Miaoda Application Link URL
    URL:https://www.miaoda.cn/projects/app-79wzg8jncmip

# 英雄语音文件目录

## 📁 目录说明

此目录用于存放英雄的自定义语音文件。如果您想使用自己录制或AI模仿的声音，请将音频文件放在这里。

## 📝 文件命名规则

音频文件必须按照以下规则命名：

```
{英雄ID}.mp4
```

### 已开放英雄的文件名

| 英雄名称 | 文件名 | 说明 |
|---------|--------|------|
| 凯 | `kai.mp4` | 绕口令挑战 |
| 蔡文姬 | `caiweniji.mp4` | 表情包模仿 |
| 孙悟空 | `sunwukong.mp4` | 演唱《孤勇者》 |
| 后羿 | `houyi.mp4` | 走猫步挑战 |
| 猪八戒 | `zhubajie.mp4` | 四小天鹅舞蹈 |
| 吕布 | `lvbu.mp4` | 跳舞挑战 |
| 关羽 | `guanyu.mp4` | 才艺表演 |

## 🎵 支持的音频格式

- **推荐格式**: MP4 (AAC编码)
- **其他支持**: MP3, WAV, OGG

虽然文件名使用`.mp4`后缀，但实际上可以使用任何浏览器支持的音频格式。

## 🔄 工作流程

### 1. 优先级顺序

系统会按以下顺序查找和使用语音：

```
1. 本地音频文件 (public/audio/{英雄ID}.mp4)
   ↓ 如果不存在
2. localStorage缓存 (之前AI生成的)
   ↓ 如果不存在
3. AI实时生成 (百度语音合成API)
```

### 2. 使用本地音频

**步骤：**
1. 准备音频文件（录制或AI生成）
2. 重命名为对应的英雄ID（如 `kai.mp4`）
3. 将文件放入 `public/audio/` 目录
4. 刷新网页，点击"背景音效"按钮
5. 系统会自动使用本地文件

### 3. 使用AI生成

**步骤：**
1. 不放置本地音频文件
2. 点击"背景音效"按钮
3. 系统自动调用AI生成语音
4. 生成的URL会缓存到浏览器

## 📋 示例：添加凯的自定义语音

### 方法1：使用录音

```bash
# 1. 录制音频（使用手机或录音软件）
# 2. 转换为MP4格式（如果需要）
# 3. 重命名
mv my-recording.mp4 kai.mp4

# 4. 复制到项目
cp kai.mp4 /path/to/project/public/audio/
```

### 方法2：使用AI模仿

如果您使用其他AI工具（如讯飞、腾讯云等）生成了语音：

```bash
# 1. 下载生成的音频文件
# 2. 重命名为英雄ID
mv generated-voice.mp3 kai.mp4

# 3. 复制到项目
cp kai.mp4 /path/to/project/public/audio/
```

## 🎤 录制建议

### 音频质量要求
- **采样率**: 16kHz 或更高
- **比特率**: 64kbps 或更高
- **声道**: 单声道或立体声
- **时长**: 建议10-30秒

### 录制内容
请按照英雄的台词内容录制：

**凯的台词：**
```
四和十，十和四，十四和四十，四十和十四。
说好四和十得靠舌头和牙齿：谁说四十是"细席"，他的舌头没用力；
谁说十四是"适时"，他的舌头没伸直。
认真学，常练习，十四、四十、四十四。
```

**蔡文姬的台词：**
```
请模仿穿边这个表情包。
老师拍照留念。
```

（其他英雄台词请参考 `docs/HEROES.md`）

## 🔧 配置说明

### 在代码中配置

如果您想修改英雄的音频文件名或路径，请编辑：

```typescript
// src/types/hero.ts

export const heroes: Hero[] = [
  {
    id: 'kai',
    name: '凯',
    localAudioFile: 'kai.mp4',  // 修改这里
    // ...
  },
  // ...
];
```

### 使用不同的音频格式

```typescript
// 使用MP3格式
localAudioFile: 'kai.mp3',

// 使用WAV格式
localAudioFile: 'kai.wav',

// 使用OGG格式
localAudioFile: 'kai.ogg',
```

## 🚀 部署注意事项

### 开发环境
- 文件路径: `public/audio/`
- 访问URL: `http://localhost:5173/audio/kai.mp4`

### 生产环境
- 构建后，`public/` 目录的内容会被复制到 `dist/`
- 访问URL: `https://your-domain.com/audio/kai.mp4`
- 确保音频文件在构建时被包含

## 📊 文件大小建议

为了优化加载速度，建议控制音频文件大小：

| 时长 | MP4 (AAC) | MP3 | 建议 |
|------|-----------|-----|------|
| 10秒 | ~100KB | ~120KB | ✅ 最佳 |
| 20秒 | ~200KB | ~240KB | ✅ 推荐 |
| 30秒 | ~300KB | ~360KB | ⚠️ 可接受 |
| 60秒 | ~600KB | ~720KB | ❌ 过大 |

## 🔍 故障排查

### 问题1：本地文件不播放

**检查清单：**
- [ ] 文件名是否正确（区分大小写）
- [ ] 文件是否在 `public/audio/` 目录
- [ ] 文件格式是否被浏览器支持
- [ ] 浏览器控制台是否有错误信息

**解决方法：**
```bash
# 检查文件是否存在
ls -la public/audio/

# 检查文件权限
chmod 644 public/audio/*.mp4
```

### 问题2：AI生成也不工作

**可能原因：**
- 网络连接问题
- API配额用完
- 浏览器缓存问题

**解决方法：**
1. 检查网络连接
2. 清除浏览器缓存
3. 查看浏览器控制台错误信息

## 💡 最佳实践

### 1. 混合使用
- 重要英雄使用自定义录音（如凯、蔡文姬）
- 其他英雄使用AI生成

### 2. 批量处理
```bash
# 批量转换音频格式
for file in *.wav; do
  ffmpeg -i "$file" -c:a aac -b:a 64k "${file%.wav}.mp4"
done

# 批量重命名
mv hero1.mp4 kai.mp4
mv hero2.mp4 caiweniji.mp4
```

### 3. 版本控制
```bash
# 不建议将大音频文件提交到Git
# 在 .gitignore 中添加：
echo "public/audio/*.mp4" >> .gitignore
echo "public/audio/*.mp3" >> .gitignore

# 但保留README
echo "!public/audio/README.md" >> .gitignore
```

## 📞 技术支持

如有问题，请查看：
- 项目文档: `docs/`
- 更新日志: `CHANGELOG.md`
- 英雄配置: `src/types/hero.ts`

---

**祝您配置顺利！** 🎵✨
