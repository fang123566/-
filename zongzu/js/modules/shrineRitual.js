// 祠堂礼制模块 - 第一视角漫游

// 确保DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 祠堂热点交互
  const hotspots = document.querySelectorAll('.shrine-hotspot');
  const infoOverlay = document.getElementById('infoOverlay');
  const infoContent = document.getElementById('infoContent');
  const firstPersonBtn = document.getElementById('firstPersonBtn');
  const firstPersonModal = document.getElementById('firstPersonModal');
  const closeModal = document.querySelector('#firstPersonModal .close-modal');
  const viewImage = document.getElementById('viewImage');
  const viewInfo = document.getElementById('viewInfo');
  const prevView = document.getElementById('prevView');
  const nextView = document.getElementById('nextView');
  
  // 视角数据
  const views = [
    {
      area: '门厅',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20Huizhou%20ancestral%20hall%20entrance%2C%20traditional%20Chinese%20architecture%2C%20ink%20painting%20style',
      info: '门厅是祠堂的入口，象征宗族的门面，通常悬挂堂号匾额，显示宗族身份。',
      img: null // 预加载的图片对象
    },
    {
      area: '天井',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20Huizhou%20traditional%20courtyard%2C%20ancient%20Chinese%20architecture%2C%20ink%20painting%20style',
      info: '天井是祠堂的采光通风空间，也是宗族活动的重要场所，体现了天人合一的理念。',
      img: null
    },
    {
      area: '享堂',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20Huizhou%20ancestral%20hall%20main%20hall%2C%20traditional%20Chinese%20architecture%2C%20ink%20painting%20style',
      info: '享堂是祠堂的核心空间，用于举行祭祀、议事等重大宗族活动，是宗族权力的象征。',
      img: null
    },
    {
      area: '寝堂',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20Huizhou%20ancestral%20hall%20back%20hall%2C%20traditional%20Chinese%20architecture%2C%20ink%20painting%20style',
      info: '寝堂是供奉祖先牌位的地方，是祠堂最神圣的空间，体现了对祖先的尊敬和崇拜。',
      img: null
    },
    {
      area: '东厢',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20Huizhou%20traditional%20study%20room%2C%20ancient%20Chinese%20architecture%2C%20ink%20painting%20style',
      info: '东厢通常用于存放宗族档案、族谱等重要文献，是宗族文化传承的重要场所。',
      img: null
    },
    {
      area: '西厢',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20Huizhou%20traditional%20classroom%2C%20ancient%20Chinese%20architecture%2C%20ink%20painting%20style',
      info: '西厢通常用于宗族子弟读书学习，体现了徽州重视教育的传统。',
      img: null
    }
  ];
  
  // 预加载图片
  function preloadImages() {
    views.forEach(view => {
      view.img = new Image();
      view.img.src = view.image;
    });
  }
  
  // 调用预加载函数
  preloadImages();
  
  let currentViewIndex = 0;
  
  // 热点悬停交互
  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', function() {
      const info = this.getAttribute('data-info');
      infoContent.textContent = info;
      infoOverlay.style.display = 'block';
    });
    
    hotspot.addEventListener('mouseleave', function() {
      infoOverlay.style.display = 'none';
    });
    
    // 热点点击交互
    hotspot.addEventListener('click', function() {
      const area = this.getAttribute('data-area');
      const image = this.getAttribute('data-image');
      const info = this.getAttribute('data-info');
      
      // 找到对应视角
      const viewIndex = views.findIndex(view => view.area === area);
      if (viewIndex !== -1) {
        currentViewIndex = viewIndex;
        updateView();
      }
      
      // 打开模态框
      firstPersonModal.style.display = 'block';
    });
  });
  
  // 第一视角按钮点击
  if (firstPersonBtn) {
    firstPersonBtn.addEventListener('click', function() {
      currentViewIndex = 0;
      updateView();
      firstPersonModal.style.display = 'block';
    });
  }
  
  // 关闭模态框
  if (closeModal) {
    closeModal.addEventListener('click', function() {
      firstPersonModal.style.display = 'none';
    });
  }
  
  // 上一个视角
  if (prevView) {
    prevView.addEventListener('click', function() {
      currentViewIndex = (currentViewIndex - 1 + views.length) % views.length;
      updateView();
    });
  }
  
  // 下一个视角
  if (nextView) {
    nextView.addEventListener('click', function() {
      currentViewIndex = (currentViewIndex + 1) % views.length;
      updateView();
    });
  }
  
  // 更新视角
  function updateView() {
    const currentView = views[currentViewIndex];
    if (viewImage) {
      viewImage.src = currentView.image;
    }
    if (viewInfo) {
      viewInfo.textContent = currentView.info;
    }
    if (document.getElementById('modalTitle')) {
      document.getElementById('modalTitle').textContent = `祠堂第一视角漫游 - ${currentView.area}`;
    }
  }
  
  // 点击模态框外部关闭
  window.addEventListener('click', function(event) {
    if (event.target === firstPersonModal) {
      firstPersonModal.style.display = 'none';
    }
  });
  
  // 礼制对比开关
  const comparisonToggle = document.getElementById('comparisonToggle');
  const comparisonContent = document.getElementById('comparisonContent');
  
  if (comparisonToggle && comparisonContent) {
    comparisonToggle.addEventListener('change', function() {
      if (this.checked) {
        comparisonContent.style.display = 'block';
        comparisonContent.classList.add('visible');
      } else {
        comparisonContent.style.display = 'none';
        comparisonContent.classList.remove('visible');
      }
    });
  }
});
