/**
 * 扫描 HTML 文件中的中文文本，找出 i18n.js 中缺失的翻译条目
 */
const fs = require('fs');
const path = require('path');

// 加载 i18n.js 中的所有词典
const i18nContent = fs.readFileSync(path.join(__dirname, '..', 'i18n.js'), 'utf8');

// 提取所有中文 key
const keyRegex = /'([^']*[\u4e00-\u9fff][^']*)'\s*:/g;
const allKeys = new Set();
let m;
while ((m = keyRegex.exec(i18nContent)) !== null) {
  allKeys.add(m[1].replace(/\s+/g, ' ').trim());
}

// 要扫描的页面
const pages = ['sandiao.html', 'zongzu.html', 'baohu.html', 'tianjing.html'];

// 从 HTML 中提取可见的中文文本
function extractChineseTexts(html) {
  const texts = new Set();
  
  // 移除 <script> 和 <style> 块
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  
  // 提取标签之间的文本内容
  const textRegex = />([^<]+)</g;
  let match;
  while ((match = textRegex.exec(cleaned)) !== null) {
    const text = match[1].replace(/\s+/g, ' ').trim();
    // 只要包含中文字符
    if (/[\u4e00-\u9fff]/.test(text) && text.length >= 2) {
      texts.add(text);
    }
  }
  
  // 提取 alt, title, placeholder, aria-label 属性中的中文
  const attrRegex = /(?:alt|title|placeholder|aria-label)\s*=\s*"([^"]*[\u4e00-\u9fff][^"]*)"/gi;
  while ((match = attrRegex.exec(cleaned)) !== null) {
    const text = match[1].replace(/\s+/g, ' ').trim();
    if (text.length >= 2) {
      texts.add(text);
    }
  }
  
  return texts;
}

// 分析每个页面
pages.forEach(pageName => {
  const filePath = path.join(__dirname, '..', pageName);
  if (!fs.existsSync(filePath)) {
    console.log(`\n❌ 文件不存在: ${pageName}`);
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf8');
  const chineseTexts = extractChineseTexts(html);
  
  const missing = [];
  chineseTexts.forEach(text => {
    if (!allKeys.has(text)) {
      // 过滤掉纯数字+中文单位、很短的文字、CSS值等
      if (text.length < 2) return;
      if (/^[\d\s.%]+$/.test(text)) return;
      // 排除已有的近似匹配（部分文字可能是块级元素子元素）
      missing.push(text);
    }
  });
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`📄 ${pageName} — 共 ${chineseTexts.size} 条中文, 缺失 ${missing.length} 条`);
  console.log('='.repeat(60));
  
  // 按长度排序，短的可能更是 UI 元素
  missing.sort((a, b) => a.length - b.length);
  
  missing.forEach(text => {
    // 截断显示过长的文本
    const display = text.length > 80 ? text.substring(0, 80) + '...' : text;
    console.log(`  ❌ "${display}"`);
  });
});
