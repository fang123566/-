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

// 复制public和素材文件夹
const dirsToCopy = ['public', '素材'];
dirsToCopy.forEach(dir => {
  const src = path.join(rootDir, dir);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(distDir, dir));
  }
});

console.log('Build completed successfully!');
console.log('Files copied to dist/');
