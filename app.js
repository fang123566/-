document.addEventListener('DOMContentLoaded', () => {
  // ========== 背景视频自动播放 ==========
  const bg = document.getElementById('bgVideo');
  if (bg) {
    const p = bg.play();
    if (p && p.then) p.catch(() => {});
  }

  // ========== 云粒子效果 ==========
  initCloudParticles();

  // ========== 导航高亮（多页面） ==========
  initNavHighlight();

  // ========== 全景轮播 ==========
  initPanoramaCarousel();

  // ========== 热点交互 ==========
  initHotspots();

  // ========== 画卷卡片交互 ==========
  initScrollCards();

  // ========== 五大景点弹窗 ==========
  initLandmarks();

  // ========== 滚动动画 ==========
  initScrollAnimations();

  // ========== ECharts 图表 ==========
  initCharts();

  // ========== 窗口 resize 处理 ==========
  window.addEventListener('resize', () => {
    Object.values(chartInstances).forEach(c => c && c.resize());
  });
});

// ==========================================
// 云粒子效果
// ==========================================
function initCloudParticles() {
  const canvas = document.getElementById('cloudCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const particles = [];
  const count = 18;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 100 + 50,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.05,
      opacity: Math.random() * 0.12 + 0.04
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x > canvas.width + p.size) p.x = -p.size;
      if (p.x < -p.size) p.x = canvas.width + p.size;
      if (p.y > canvas.height + p.size) p.y = -p.size;
      if (p.y < -p.size) p.y = canvas.height + p.size;

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================
// 导航高亮（多页面跳转）
// ==========================================
function initNavHighlight() {
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  const pageName = currentFile.replace('.html', '') || 'index';
  document.querySelectorAll('.circle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === pageName);
  });
}

// ==========================================
// 全景轮播（箭头点击循环切换）
// ==========================================
function initPanoramaCarousel() {
  const slides = document.querySelectorAll('.panorama-slide');
  const dots = document.querySelectorAll('.panorama-dot');
  const btnLeft = document.getElementById('panLeft');
  const btnRight = document.getElementById('panRight');
  if (!slides.length || !btnLeft || !btnRight) return;

  let current = 0;
  const total = slides.length;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current] && dots[current].classList.remove('active');
    current = (idx % total + total) % total;
    slides[current].classList.add('active');
    dots[current] && dots[current].classList.add('active');
  }

  btnRight.addEventListener('click', (e) => { e.stopPropagation(); goTo(current + 1); });
  btnLeft.addEventListener('click', (e) => { e.stopPropagation(); goTo(current - 1); });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goTo(parseInt(dot.dataset.idx));
    });
  });
}

// ==========================================
// 热点交互（首页全景图）
// ==========================================
function initHotspots() {
  const tips = {
    matouqiang: {
      title: '马头墙',
      desc: '徽派建筑标志性元素。阶梯状山墙高出屋面，不仅造型优美如昂首骏马，更具备防火隔断功能，能有效阻止火势在密集民居间蔓延。'
    },
    yueshao: {
      title: '月沼',
      desc: '宏村"牛胃"——村中心半月形水塘，明永乐年间开凿。四周古宅环抱，倒映粉墙黛瓦，是宏村最具标志性的风水景观与公共空间。'
    },
    nanhu: {
      title: '南湖',
      desc: '宏村"牛肚"——村南大型人工湖，明万历年间拓建。湖面如镜，南湖书院临水而立，画桥横跨其上，是宏村山水画卷的点睛之笔。'
    },
    shuizhen: {
      title: '水圳',
      desc: '宏村"牛肠"——全长约1200米的人工水渠，引西溪水穿村而过。水圳经过家家户户门前，集饮用、洗涤、消防、灌溉功能于一体，是古代生态智慧的典范。'
    },
    chengzhitang: {
      title: '承志堂',
      desc: '清末盐商汪定贵宅邸，被誉为"民间故宫"。占地2100㎡，拥有七进院落、九个天井，其木雕装饰极尽精巧，"百子闹元宵"等作品堪称徽雕艺术巅峰。'
    },
    gushu: {
      title: '古树·牛角',
      desc: '村口两棵500年古树——红杨与银杏，形如牛角，是宏村"牛形"布局的起点。古树见证村落近千年兴衰，也是宏村风水格局的重要组成部分。'
    }
  };

  const panorama = document.getElementById('panorama');
  const hottip = document.getElementById('hottip');
  if (!panorama || !hottip) return;

  panorama.addEventListener('mouseover', (e) => {
    const h = e.target.closest('.hotspot');
    if (!h) return;
    const data = tips[h.dataset.key];
    if (!data) return;

    hottip.innerHTML = `<h4>${data.title}</h4><p>${data.desc}</p>`;
    hottip.style.display = 'block';
    hottip.setAttribute('aria-hidden', 'false');

    const left = parseFloat(h.style.left);
    const top = parseFloat(h.style.top);
    // 避免提示框超出右侧
    hottip.style.left = (left > 60 ? left - 25 : left + 4) + '%';
    hottip.style.top = Math.max(top - 14, 2) + '%';
  });

  panorama.addEventListener('mouseout', (e) => {
    if (e.target.closest('.hotspot')) {
      hottip.style.display = 'none';
      hottip.setAttribute('aria-hidden', 'true');
    }
  });
}

// ==========================================
// 五大景点弹窗
// ==========================================
function initLandmarks() {
  const data = {
    nanhu: {
      title: '南湖',
      img: '素材/南湖.png',
      text: '位于宏村南端，始建于明万历三十五年（1607年），因村落人口繁衍、月沼蓄水不足，村民将百亩良田凿深砌岸，仿西湖平湖秋月式样建成弓形人工湖，成为宏村牛形水系中的"牛肚"。湖面总面积约18000平方米，湖堤分上下层，设有通舟画桥，承接月沼来水并用于农田灌溉，兼具调蓄水量与水体自净功能。湖周粉墙黛瓦倒映其中，堤岸古树垂柳、夏荷摇曳，清代诗人汪彤雯曾留下"无边细雨湿春泥，隔雾时闻小鸟啼"的诗句。清嘉庆年间浙江名士吴锡麟赞其"游迹之盛堪比浙江西湖"，故有"黄山脚下小西湖"之称。1986年重建画桥恢复通行，经典影片《卧虎藏龙》曾在此取景，更添诗意江湖的韵味。'
    },
    yuezhao: {
      title: '月沼',
      img: '素材/月沼.png',
      text: '亦称半月塘，位于宏村中心，开凿于明永乐年间（1403-1424年），是宏村水系的核心枢纽，形似"牛胃"。相传宏村76世祖汪思齐发现一眼常年不竭的涌泉，在引水绕村时特意岔开支流，引入村中天然井泉处，经众人挖扩而成。这道完美的半月弧线饱含"花未全开月未圆"的中式美学意境，寄托了汪氏先人对子孙盈满则亏的告诫。塘面水平如镜，四周青石铺地，鳞次栉比的粉墙黛瓦倒映其中，与重云堆垛的晴空共相影涵。月沼四周形成一条并不宽绰的青石板路，成为游人和村人共享的亲水空间，村民浣衣洗菜、闲坐谈天的日常场景与摄影爱好者捕捉晨昏光影的镜头交织，构成宏村最具生活气息的画卷。'
    },
    chengzhitang: {
      title: '承志堂',
      img: '素材/承志堂.png',
      text: '位于宏村核心区，建于清咸丰五年至宣统三年（1855-1911年），为清末大盐商汪定贵的私家住宅，是宏村现存规模最大、保存最完整的民居建筑，素有"民间故宫"之誉。建筑坐北朝南略偏西，占地1339平方米，建筑面积1153.7平方米，共有175根木柱、9个天井、7座楼阁、大小房间60余间。整栋建筑布局分为三条纵路，轿厅、前厅、后堂居中，东侧设书房、吞云轩及排山阁，西侧为管家房、丫头房及厨房，饮水有井、养鱼有塘、娱乐有内房、储粮有仓、养花有园、读书有书房，功能分区之完备令人惊叹。建筑装饰集徽州"三雕"艺术之大成，中门上方阁楼护板上的"百子闹元宵"图、前厅横梁上的"唐肃宗宴官"图、以及"渔樵耕读""九族共荣"等木雕，人物众多、层次繁复、人不同面、面不同神，堪称徽派工艺的传世之作。'
    },
    nanhushuyuan: {
      title: '南湖书院',
      img: '素材/南湖书院.png',
      text: '位于南湖北畔湖弦部正中，清嘉庆十九年（1814年）由村人汪以文、汪授甲、汪家驹首出巨资倡建，将明末分布于南湖周边的六所私塾（时称"倚湖六院"）合并而成，因汪以文亲为监导、付艰辛最多，故又名"以文家塾"，并由93岁翰林侍讲梁同书题写匾额。书院占地约6000平方米，坐北朝南，由志道堂、文昌阁、启蒙阁、会文阁、望湖楼和祗园六部分组成。"志道堂"为先生讲学之所，"文昌阁"奉设孔子牌位供学子瞻仰，"启蒙阁"乃启蒙孩读书之处，"会文阁"供阅览经史子集，"望湖楼"为先生观景休息之地，卷棚式屋顶楼窗面临南湖，上挂"湖光山色"横匾，为清代黟县县令罗尹孚所题。书院大门面临南湖，正面高墙用水磨砖砌成双柱三楼贴壁牌坊，三层门罩飞檐、砖雕精细。南湖书院为宏村汪氏培养了一批又一批贤能后人，如清末内阁中书汪康年、民国代理国务总理汪大燮、徽商巨富汪定贵等均曾在此受启蒙教育。'
    },
    shurentang: {
      title: '树人堂',
      img: '素材/树人堂.png',
      text: '位于宏村茶行弄01号，建于清同治元年（1862年），为清代敕授奉政大夫汪星聚不满官场腐败、辞官归隐后所建，取"百业须精，儿女当教"之意命名。建筑坐北朝南，背靠水圳，宅基呈六边形，取"六合大顺"之意，占地263.67平方米，建筑面积452.94平方米。外设八字门楼内置悬枋栏板，采用"客人大门进大门出"的无后门设计，隐喻建造者光明磊落的为官之道。正厅堂木雕以"文王访贤""舜耕历山"等儒家题材为主，东西过厢扇门上雕有"渔樵耕读""福禄寿禧"人物图，窗栏板博古图案融合道教元素，暗含进退之道。厅堂东侧利用有限空地建一小鱼塘，活水长流，置长条石设盆景，小巧玲珑。正屋南侧设廊式小书房，天花彩绘牡丹与蝴蝶，飞金走彩，寄托了对后代美满归宿的期许。树人堂规模虽不及豪商巨贾之宅，却以繁复细腻的木雕和独特的建筑理念，成为中小型徽派民居的典范之作。'
    }
  };

  const overlay = document.getElementById('landmarkOverlay');
  const closeBtn = document.getElementById('landmarkClose');
  const imgEl = document.getElementById('landmarkImg');
  const titleEl = document.getElementById('landmarkTitle');
  const textEl = document.getElementById('landmarkText');
  if (!overlay) return;

  document.querySelectorAll('.landmark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = data[btn.dataset.landmark];
      if (!d) return;
      imgEl.src = d.img;
      imgEl.alt = d.title;
      titleEl.textContent = d.title;
      textEl.textContent = d.text;
      overlay.classList.add('show');
    });
  });

  closeBtn.addEventListener('click', () => overlay.classList.remove('show'));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('show');
  });
}

// ==========================================
// 画卷卡片：点击展开/收起
// ==========================================
function initScrollCards() {
  document.querySelectorAll('.scroll-card').forEach(card => {
    card.addEventListener('click', () => {
      const wasOpen = card.classList.contains('open');
      // 先收起所有
      document.querySelectorAll('.scroll-card.open').forEach(c => c.classList.remove('open'));
      // 如果当前未展开则展开
      if (!wasOpen) {
        card.classList.add('open');
      }
    });
  });
}

// ==========================================
// 滚动进入动画
// ==========================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-card, .viz-card, .sub-page-header');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Array.from(animatedElements).indexOf(entry.target) % 4;
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        }, delay * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));
}

// ==========================================
// ECharts 图表
// ==========================================
const chartInstances = {};

// 徽派主题配色
const huiColors = ['#8c6b48', '#6b4f33', '#b8956a', '#d4b896', '#9e9e9c', '#5a5a58', '#c4a882', '#a08060'];

function initCharts() {
  initBuildingTypesChart();
  initBuildingEraChart();
  initCulturalValueChart();
  initCarvingsChart();
  initTimelineChart();
  initVisitorsChart();
}

// 1. 建筑类型分布（玫瑰图）
function initBuildingTypesChart() {
  const dom = document.getElementById('chart-building-types');
  if (!dom) return;
  const chart = echarts.init(dom);
  chartInstances.buildingTypes = chart;

  chart.setOption({
    tooltip: { trigger: 'item', formatter: '{b}: {c} 栋 ({d}%)' },
    legend: { bottom: 10, textStyle: { fontFamily: 'Noto Serif SC', color: '#9e9e9c', fontSize: 12 } },
    series: [{
      type: 'pie',
      radius: ['25%', '65%'],
      roseType: 'area',
      center: ['50%', '45%'],
      itemStyle: { borderRadius: 6, borderColor: '#f7f5f0', borderWidth: 2 },
      label: { fontFamily: 'Noto Serif SC', color: '#2d2d2b' },
      data: [
        { value: 87, name: '民居', itemStyle: { color: '#8c6b48' } },
        { value: 12, name: '祠堂', itemStyle: { color: '#6b4f33' } },
        { value: 8, name: '书院', itemStyle: { color: '#b8956a' } },
        { value: 15, name: '店铺', itemStyle: { color: '#d4b896' } },
        { value: 6, name: '桥梁', itemStyle: { color: '#9e9e9c' } },
        { value: 9, name: '其他', itemStyle: { color: '#c4a882' } }
      ]
    }]
  });
}

// 2. 建筑年代分布（柱状图）
function initBuildingEraChart() {
  const dom = document.getElementById('chart-building-era');
  if (!dom) return;
  const chart = echarts.init(dom);
  chartInstances.buildingEra = chart;

  chart.setOption({
    tooltip: { trigger: 'axis', formatter: '{b}<br/>现存建筑: {c} 栋' },
    grid: { left: 60, right: 30, top: 30, bottom: 50 },
    xAxis: {
      type: 'category',
      data: ['南宋', '元代', '明早期', '明中期', '明晚期', '清早期', '清中期', '清晚期', '民国'],
      axisLabel: { fontFamily: 'Noto Serif SC', color: '#9e9e9c', fontSize: 11 },
      axisLine: { lineStyle: { color: 'rgba(140,107,72,0.2)' } }
    },
    yAxis: {
      type: 'value',
      name: '栋数',
      nameTextStyle: { fontFamily: 'Noto Serif SC', color: '#9e9e9c' },
      axisLabel: { color: '#9e9e9c' },
      splitLine: { lineStyle: { color: 'rgba(140,107,72,0.06)' } }
    },
    series: [{
      type: 'bar',
      data: [2, 3, 8, 15, 22, 35, 28, 18, 6],
      barWidth: '50%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#8c6b48' },
          { offset: 1, color: '#d4b896' }
        ]),
        borderRadius: [4, 4, 0, 0]
      },
      emphasis: { itemStyle: { color: '#6b4f33' } }
    }]
  });
}

// 3. 文化价值评估（雷达图）
function initCulturalValueChart() {
  const dom = document.getElementById('chart-cultural-value');
  if (!dom) return;
  const chart = echarts.init(dom);
  chartInstances.culturalValue = chart;

  chart.setOption({
    tooltip: {},
    radar: {
      indicator: [
        { name: '历史价值', max: 100 },
        { name: '艺术价值', max: 100 },
        { name: '科学价值', max: 100 },
        { name: '社会价值', max: 100 },
        { name: '生态价值', max: 100 },
        { name: '规划价值', max: 100 }
      ],
      shape: 'polygon',
      splitNumber: 4,
      axisName: { fontFamily: 'Noto Serif SC', color: '#2d2d2b', fontSize: 12 },
      splitLine: { lineStyle: { color: 'rgba(140,107,72,0.1)' } },
      splitArea: { areaStyle: { color: ['rgba(140,107,72,0.02)', 'rgba(140,107,72,0.05)'] } },
      axisLine: { lineStyle: { color: 'rgba(140,107,72,0.15)' } }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [95, 92, 78, 85, 88, 96],
          name: '宏村',
          areaStyle: { color: 'rgba(140, 107, 72, 0.15)' },
          lineStyle: { color: '#8c6b48', width: 2 },
          itemStyle: { color: '#8c6b48' },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          value: [80, 75, 65, 70, 72, 68],
          name: '徽州平均',
          areaStyle: { color: 'rgba(158,158,156,0.08)' },
          lineStyle: { color: '#9e9e9c', width: 1, type: 'dashed' },
          itemStyle: { color: '#9e9e9c' },
          symbol: 'circle',
          symbolSize: 4
        }
      ]
    }],
    legend: {
      bottom: 5,
      textStyle: { fontFamily: 'Noto Serif SC', color: '#9e9e9c', fontSize: 12 }
    }
  });
}

// 4. 三雕工艺统计（环形图）
function initCarvingsChart() {
  const dom = document.getElementById('chart-carvings');
  if (!dom) return;
  const chart = echarts.init(dom);
  chartInstances.carvings = chart;

  const data = [
    { value: 523, name: '木雕' },
    { value: 287, name: '砖雕' },
    { value: 196, name: '石雕' }
  ];

  chart.setOption({
    tooltip: { trigger: 'item', formatter: '{b}: {c} 件 ({d}%)' },
    legend: { bottom: 10, textStyle: { fontFamily: 'Noto Serif SC', color: '#9e9e9c' } },
    series: [
      {
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['50%', '42%'],
        avoidLabelOverlap: true,
        itemStyle: { borderRadius: 8, borderColor: '#f7f5f0', borderWidth: 3 },
        label: {
          show: true,
          formatter: '{b}\n{c} 件',
          fontFamily: 'Noto Serif SC',
          color: '#2d2d2b',
          fontSize: 12,
          lineHeight: 18
        },
        labelLine: { lineStyle: { color: 'rgba(140,107,72,0.3)' } },
        data: data.map((d, i) => ({
          ...d,
          itemStyle: { color: huiColors[i] }
        }))
      },
      {
        type: 'pie',
        radius: ['0%', '30%'],
        center: ['50%', '42%'],
        label: {
          show: true,
          position: 'center',
          formatter: '共计\n{totalStyle|1006 件}',
          rich: {
            totalStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: '#8c6b48',
              lineHeight: 28,
              fontFamily: 'Noto Serif SC'
            }
          },
          fontFamily: 'Noto Serif SC',
          color: '#9e9e9c',
          fontSize: 13
        },
        data: [{ value: 1, itemStyle: { color: 'rgba(140,107,72,0.04)' } }],
        silent: true
      }
    ]
  });
}

// 5. 历史时间轴
function initTimelineChart() {
  const dom = document.getElementById('chart-timeline');
  if (!dom) return;
  const chart = echarts.init(dom);
  chartInstances.timeline = chart;

  const events = [
    { year: 1131, event: '汪氏始建宏村' },
    { year: 1407, event: '永乐年间水系改造' },
    { year: 1430, event: '月沼建成' },
    { year: 1607, event: '南湖开挖完成' },
    { year: 1662, event: '承志堂动工' },
    { year: 1723, event: '南湖书院建成' },
    { year: 1855, event: '太平天国破坏' },
    { year: 1999, event: '申报世界遗产' },
    { year: 2000, event: '列入世界遗产名录' },
    { year: 2011, event: '首批5A景区' }
  ];

  chart.setOption({
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const d = events[params[0].dataIndex];
        return `<b>${d.year} 年</b><br/>${d.event}`;
      }
    },
    grid: { left: 60, right: 40, top: 30, bottom: 50 },
    xAxis: {
      type: 'category',
      data: events.map(e => e.year + ''),
      axisLabel: {
        fontFamily: 'Noto Serif SC',
        color: '#9e9e9c',
        fontSize: 11,
        rotate: 30
      },
      axisLine: { lineStyle: { color: 'rgba(140,107,72,0.2)' } }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      type: 'line',
      data: events.map((_, i) => i + 1),
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: { color: '#8c6b48', width: 3 },
      itemStyle: { color: '#8c6b48', borderColor: '#fff', borderWidth: 2 },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(140, 107, 72, 0.2)' },
          { offset: 1, color: 'rgba(140, 107, 72, 0)' }
        ])
      },
      emphasis: {
        itemStyle: { color: '#6b4f33', borderWidth: 3, shadowBlur: 10, shadowColor: 'rgba(140,107,72,0.3)' },
        label: {
          show: true,
          formatter: (params) => events[params.dataIndex].event,
          fontFamily: 'Noto Serif SC',
          color: '#2d2d2b',
          fontSize: 12,
          backgroundColor: 'rgba(247,245,240,0.95)',
          padding: [4, 8],
          borderRadius: 4
        }
      }
    }]
  });
}

// 6. 游客趋势
function initVisitorsChart() {
  const dom = document.getElementById('chart-visitors');
  if (!dom) return;
  const chart = echarts.init(dom);
  chartInstances.visitors = chart;

  chart.setOption({
    tooltip: { trigger: 'axis', formatter: '{b} 年<br/>游客量: {c} 万人次' },
    grid: { left: 70, right: 30, top: 30, bottom: 50 },
    xAxis: {
      type: 'category',
      data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      axisLabel: { fontFamily: 'Noto Serif SC', color: '#9e9e9c', fontSize: 11 },
      axisLine: { lineStyle: { color: 'rgba(140,107,72,0.2)' } }
    },
    yAxis: {
      type: 'value',
      name: '万人次',
      nameTextStyle: { fontFamily: 'Noto Serif SC', color: '#9e9e9c' },
      axisLabel: { color: '#9e9e9c' },
      splitLine: { lineStyle: { color: 'rgba(140,107,72,0.06)' } }
    },
    series: [
      {
        name: '游客量',
        type: 'bar',
        data: [152, 168, 195, 225, 248, 260, 85, 135, 110, 230, 280],
        barWidth: '45%',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(140, 107, 72, 0.6)' },
            { offset: 1, color: 'rgba(140, 107, 72, 0.15)' }
          ]),
          borderRadius: [3, 3, 0, 0]
        }
      },
      {
        name: '趋势',
        type: 'line',
        data: [152, 168, 195, 225, 248, 260, 85, 135, 110, 230, 280],
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        lineStyle: { color: '#8c6b48', width: 2.5 },
        itemStyle: { color: '#8c6b48', borderColor: '#fff', borderWidth: 2 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(140,107,72,0.12)' },
            { offset: 1, color: 'rgba(140,107,72,0)' }
          ])
        }
      }
    ]
  });
}
