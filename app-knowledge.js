// ==========================================
// 初始化执行
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 隐藏加载屏幕
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 800);
    });
  }
  
  // 初始化知识点标签
  initKnowledgeTags();
  
  // 初始化页面预加载
  initPagePreload();
});

// ==========================================
// 知识点标签交互
// ==========================================
function initKnowledgeTags() {
  const tags = document.querySelectorAll('.k-tag');
  
  tags.forEach(tag => {
    const fact = tag.dataset.fact;
    if (!fact) return;
    
    // 创建提示气泡
    const tooltip = document.createElement('div');
    tooltip.className = 'knowledge-tooltip';
    tooltip.textContent = fact;
    tag.appendChild(tooltip);
    
    // 点击效果
    tag.addEventListener('click', () => {
      tag.style.transform = 'scale(0.95)';
      setTimeout(() => {
        tag.style.transform = '';
      }, 150);
    });
  });
}

// ==========================================
// 页面跳转优化 - 预加载其他页面
// ==========================================
function initPagePreload() {
  const pages = ['matouqiang.html', 'tianjing.html', 'sandiao.html', 'zongzu.html', 'baohu.html', 'kuawenhua.html'];
  
  // 鼠标悬停在导航按钮上时预加载对应页面
  document.querySelectorAll('.circle-btn').forEach((btn, index) => {
    if (pages[index]) {
      btn.addEventListener('mouseenter', () => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = pages[index];
        document.head.appendChild(link);
      }, { once: true });
    }
  });
}
