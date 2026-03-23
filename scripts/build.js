const fs = require('fs');
const path = require('path');

// 获取根目录
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// 递归复制函数
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 创建dist目录
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 复制HTML文件
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
  fs.copyFileSync(path.join(rootDir, file), path.join(distDir, file));
});

// 复制CSS和JS文件
const staticFiles = ['styles.css', 'app.js'];
staticFiles.forEach(file => {
  const src = path.join(rootDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
  }
});

// 复制public、素材和zongzu文件夹
const dirsToCopy = ['public', '素材', 'zongzu'];
dirsToCopy.forEach(dir => {
  const src = path.join(rootDir, dir);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(distDir, dir));
  }
});

// 修复路径：仅替换已知目录名后的反斜杠为正斜杠（兼容 Linux/Vercel）
// 只处理 素材\ zongzu\ public\ 等实际文件路径，不触碰 \n \t 等 JS 转义字符
function fixPathsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const fixed = content
      .replace(/素材\\/g, '素材/')
      .replace(/zongzu\\/g, 'zongzu/')
      .replace(/public\\/g, 'public/')
      .replace(/三雕\\/g, '三雕/')
      .replace(/宗族\\/g, '宗族/')
      .replace(/天井与保护补充素材\\/g, '天井与保护补充素材/')
      .replace(/马头墙页面\\/g, '马头墙页面/');
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log('Fixed paths in:', path.relative(distDir, filePath));
    }
  } catch (e) {
    // skip binary files
  }
}

function fixPathsInDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      fixPathsInDir(fullPath);
    } else if (/\.(html|js|css)$/i.test(entry.name)) {
      fixPathsInFile(fullPath);
    }
  }
}

fixPathsInDir(distDir);

console.log('Build completed successfully!');
console.log('Files copied to dist/');
