// 血脉延绵模块 - 流觞曲水谱系树交互

// 家族数据
const familyData = {
  name: "汪氏宗族",
  children: [
    {
      name: "汪华",
      year: "唐",
      description: "徽州汪氏始祖，唐初名将，封越国公",
      children: [
        {
          name: "汪建",
          year: "唐",
          description: "汪华长子，继承父业",
          children: [
            {
              name: "汪处修",
              year: "宋",
              description: "宋代官员",
              children: [
                {
                  name: "汪叔詹",
                  year: "宋",
                  description: "宋代学者"
                }
              ]
            }
          ]
        },
        {
          name: "汪璨",
          year: "唐",
          description: "汪华次子",
          children: [
            {
              name: "汪道安",
              year: "宋",
              description: "宋代商人"
            }
          ]
        }
      ]
    },
    {
      name: "汪道昆",
      year: "明",
      description: "明代文学家，戏曲家，徽商代表",
      children: [
        {
          name: "汪仲淹",
          year: "明",
          description: "明代官员"
        }
      ]
    },
    {
      name: "汪中",
      year: "清",
      description: "清代学者，骈文家，扬州学派代表",
      children: [
        {
          name: "汪喜孙",
          year: "清",
          description: "清代学者"
        }
      ]
    },
    {
      name: "汪大燮",
      year: "现代",
      description: "近代政治家，外交家，民国总理",
      children: [
        {
          name: "汪世铭",
          year: "现代",
          description: "现代企业家"
        }
      ]
    }
  ]
};

// 时间轴数据
const timelineData = [
  {
    year: "唐",
    period: "618-907",
    info: "汪华（586-649），徽州汪氏始祖，唐初名将，封越国公。为徽州地区的稳定和发展做出了重要贡献，被后世徽州人视为保护神。"
  },
  {
    year: "宋",
    period: "960-1279",
    info: "宋代汪氏宗族开始大规模发展，汪处修、汪叔詹等族人在政治、学术领域取得显著成就，为宗族的繁荣奠定了基础。"
  },
  {
    year: "元",
    period: "1271-1368",
    info: "元代汪氏宗族在徽州地区继续发展，尽管社会动荡，但宗族凝聚力增强，为明代的繁荣做准备。"
  },
  {
    year: "明",
    period: "1368-1644",
    info: "明代汪氏宗族达到鼎盛时期，汪道昆等族人在文学、军事、商业领域都有突出贡献，徽商文化与宗族精神深度融合。"
  },
  {
    year: "清",
    period: "1644-1912",
    info: "清代汪氏宗族继续发展，汪中等学者在学术领域取得重要成就，宗族文化更加成熟，族谱编纂更加完善。"
  },
  {
    year: "现代",
    period: "1912-至今",
    info: "现代汪氏宗族在新的社会环境下继续传承和发展，汪大燮等族人在政治、经济领域为国家和社会做出了重要贡献。"
  }
];

// 名人数据
const personData = {
  wanghua: {
    title: "汪华 - 徽州汪氏始祖",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20portrait%20of%20Wang%20Hua%2C%20Tang%20Dynasty%20general%2C%20Huizhou%20style%2C%20ink%20painting%20style%2C%20high%20quality",
    text: "汪华（586年-649年），字国辅，歙州歙县（今安徽歙县）人。隋末唐初地方割据势力首领，唐代大臣。\n\n隋末天下大乱，汪华起兵占据歙州，后又攻占宣州、杭州、睦州、婺州、饶州，建立吴国，自称吴王。武德四年（621年），汪华归附唐朝，被封为越国公。\n\n汪华为徽州地区的稳定和发展做出了重要贡献，他兴修水利，发展农业，促进商业，使徽州成为当时的富庶之地。他还重视教育，培养人才，为徽州文化的发展奠定了基础。\n\n汪华去世后，被后世徽州人视为保护神，尊称其为\"汪公大帝\"，在徽州各地建立了许多汪公庙，每年都有隆重的祭祀活动。"
  },
  wangdaokun: {
    title: "汪道昆 - 明代文学家",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20portrait%20of%20Wang%20Daokun%2C%20Ming%20Dynasty%20literary%20figure%2C%20Huizhou%20style%2C%20ink%20painting%20style%2C%20high%20quality",
    text: "汪道昆（1525年-1593年），字伯玉，号太函，徽州歙县人。明代文学家、戏曲家、军事将领。\n\n汪道昆是明代嘉靖年间的进士，曾任福建巡抚、兵部左侍郎等职。他在任期间，多次击败倭寇，为东南沿海的安定做出了贡献。\n\n汪道昆是明代文坛的重要人物，与王世贞、李攀龙等并称\"后七子\"。他的文学作品题材广泛，包括诗歌、散文、戏曲等，风格豪放洒脱，富有感染力。\n\n汪道昆还是徽商的代表人物，他积极推动徽州商业的发展，同时重视教育，在家乡建立了许多书院和学校，为徽州文化的繁荣做出了重要贡献。"
  },
  wangzhong: {
    title: "汪中 - 清代学者",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20portrait%20of%20Wang%20Zhong%2C%20Qing%20Dynasty%20scholar%2C%20Huizhou%20style%2C%20ink%20painting%20style%2C%20high%20quality",
    text: "汪中（1744年-1794年），字容甫，徽州歙县人。清代学者、骈文家，扬州学派的代表人物。\n\n汪中出身贫寒，但勤奋好学，精通经史子集，尤其擅长骈文写作。他的骈文作品辞藻华丽，结构严谨，情感真挚，被称为\"清代骈文第一人\"。\n\n汪中对儒家经典有深入的研究，他的学术思想主张实事求是，反对空谈义理，对后来的乾嘉学派产生了重要影响。\n\n汪中还积极参与社会公益事业，在家乡设立义学，资助贫困学子，为徽州教育的发展做出了贡献。他的一生虽然短暂，但留下了丰富的学术遗产，对中国传统文化的传承和发展产生了深远的影响。"
  },
  wangdaxie: {
    title: "汪大燮 - 近代政治家",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20portrait%20of%20Wang%20Daxie%2C%20modern%20politician%2C%20Huizhou%20style%2C%20ink%20painting%20style%2C%20high%20quality",
    text: "汪大燮（1860年-1929年），字伯唐，徽州歙县人。近代政治家、外交家，民国时期重要人物。\n\n汪大燮是光绪年间的进士，曾任清政府驻英、日公使，外务部尚书等职。他在外交领域有着丰富的经验，为中国的外交事业做出了重要贡献。\n\n民国时期，汪大燮曾任国务总理，积极参与国家政治事务，为国家的稳定和发展做出了努力。他还重视教育和文化事业，积极推动中国近代化进程。\n\n汪大燮是近代汪氏宗族的杰出代表，他的成就不仅为宗族增添了荣耀，也为国家和社会做出了重要贡献，体现了汪氏宗族的家国情怀。"
  }
};

// 初始化血脉延绵模块
function initBloodlineModule() {
  // 初始化谱系树
  initGenealogyTree();
  
  // 初始化时间轴
  initTimeline();
  
  // 初始化家族名人堂
  initHallOfFame();
}

// 初始化谱系树
function initGenealogyTree() {
  try {
    console.log('开始初始化谱系树');
    const treeElement = document.getElementById('genealogyTree');
    if (!treeElement) {
      console.error('未找到genealogyTree元素');
      return;
    }
    
    const width = treeElement.clientWidth || 800;
    const height = treeElement.clientHeight || 600;
    
    console.log('谱系树容器尺寸:', width, 'x', height);
    
    // 清除现有内容
    d3.select('#genealogyTree').selectAll('*').remove();
    
    // 创建SVG容器
    const svg = d3.select('#genealogyTree')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(50, 50)`);
    
    console.log('SVG容器创建成功');
    
    // 创建树布局
    const tree = d3.tree()
      .size([height - 100, width - 100]);
    
    // 创建层次结构
    const root = d3.hierarchy(familyData);
    
    // 计算节点位置
    tree(root);
    
    console.log('节点位置计算完成，节点数量:', root.descendants().length);
    
    // 创建连接线
    const link = svg.selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x))
      .style('stroke', '#8B4513')
      .style('stroke-width', '1.5px')
      .style('fill', 'none')
      .style('stroke-dasharray', '10,5')
      .style('stroke-dashoffset', '100')
      .style('opacity', 0);
    
    // 创建节点
    const node = svg.selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`)
      .style('opacity', 0);
    
    // 添加节点圆圈
    node.append('circle')
      .attr('r', 10)
      .attr('class', 'node-circle')
      .style('fill', '#8B4513')
      .style('stroke', '#F8F5F0')
      .style('stroke-width', '2px');
    
    // 添加节点文本
    node.append('text')
      .attr('dy', 4)
      .attr('x', d => d.children ? -15 : 15)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .style('font', '12px "Noto Serif SC"')
      .style('fill', '#333333')
      .text(d => d.data.name);
    
    // 添加节点描述
    node.append('text')
      .attr('dy', 20)
      .attr('x', d => d.children ? -15 : 15)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .style('font-size', '10px')
      .style('fill', '#666')
      .text(d => d.data.description);
    
    // 添加年份标签
    node.append('text')
      .attr('dy', 35)
      .attr('x', d => d.children ? -15 : 15)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .style('font-size', '8px')
      .style('fill', '#999')
      .text(d => d.data.year);
    
    console.log('节点和连接线创建完成');
    
    // 动画效果
    setTimeout(() => {
      console.log('开始动画效果');
      // 连接线动画
      link.transition()
        .duration(2000)
        .style('opacity', 1)
        .style('stroke-dashoffset', '0');
      
      // 节点动画
      node.transition()
        .duration(1000)
        .style('opacity', 1);
    }, 500);
    
    // 节点点击事件
    node.on('click', function(event, d) {
      // 切换展开/折叠状态
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      
      // 重新绘制
      updateTree(svg, tree, root);
    });
    
    // 添加工具提示
    node.on('mouseover', function(event, d) {
      const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px')
        .style('opacity', 0);
      
      tooltip.transition()
        .duration(200)
        .style('opacity', 0.9);
      
      tooltip.html(`
        <div style="font-weight: bold;">${d.data.name}</div>
        <div>${d.data.description}</div>
        <div style="font-size: 0.8rem; color: #ccc;">${d.data.year}</div>
      `);
    })
    .on('mouseout', function() {
      d3.select('.tooltip').remove();
    });
    
    // 初始化树控制按钮
    initTreeControls(svg, tree, root);
    console.log('谱系树初始化完成');
  } catch (error) {
    console.error('初始化谱系树时出错:', error);
  }
}

// 更新树
function updateTree(svg, tree, root) {
  try {
    console.log('开始更新树');
    // 重新计算节点位置
    tree(root);
    
    // 清除旧的连接线和节点
    svg.selectAll('.link').remove();
    svg.selectAll('.node').remove();
    
    // 创建新的连接线
    const link = svg.selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x))
      .style('stroke', '#8B4513')
      .style('stroke-width', '1.5px')
      .style('fill', 'none')
      .style('stroke-dasharray', '10,5')
      .style('stroke-dashoffset', '100')
      .style('opacity', 0)
      .transition()
      .duration(500)
      .style('opacity', 1)
      .style('stroke-dashoffset', '0');
    
    // 创建新的节点
    const node = svg.selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`)
      .style('opacity', 0)
      .transition()
      .duration(500)
      .style('opacity', 1);
    
    // 添加节点圆圈
    node.append('circle')
      .attr('r', 10)
      .attr('class', 'node-circle')
      .style('fill', '#8B4513')
      .style('stroke', '#F8F5F0')
      .style('stroke-width', '2px');
    
    // 添加节点文本
    node.append('text')
      .attr('dy', 4)
      .attr('x', d => d.children ? -15 : 15)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .style('font', '12px "Noto Serif SC"')
      .style('fill', '#333333')
      .text(d => d.data.name);
    
    // 添加节点描述
    node.append('text')
      .attr('dy', 20)
      .attr('x', d => d.children ? -15 : 15)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .style('font-size', '10px')
      .style('fill', '#666')
      .text(d => d.data.description);
    
    // 添加年份标签
    node.append('text')
      .attr('dy', 35)
      .attr('x', d => d.children ? -15 : 15)
      .style('text-anchor', d => d.children ? 'end' : 'start')
      .style('font-size', '8px')
      .style('fill', '#999')
      .text(d => d.data.year);
    
    // 绑定事件
    node.on('click', function(event, d) {
      // 阻止事件冒泡
      event.stopPropagation();
      // 切换展开/折叠状态
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      updateTree(svg, tree, root);
    })
    .on('mouseover', function(event, d) {
      const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'tooltip')
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px')
        .style('opacity', 0);
      
      tooltip.transition()
        .duration(200)
        .style('opacity', 0.9);
      
      tooltip.html(`
        <div style="font-weight: bold;">${d.data.name}</div>
        <div>${d.data.description}</div>
        <div style="font-size: 0.8rem; color: #ccc;">${d.data.year}</div>
      `);
    })
    .on('mouseout', function() {
      d3.select('.tooltip').remove();
    });
    console.log('树更新完成');
  } catch (error) {
    console.error('更新树时出错:', error);
  }
}

// 初始化树控制按钮
function initTreeControls(svg, tree, root) {
  console.log('初始化树控制按钮');
  
  // 找到树控制容器
  const treeControls = document.querySelector('.tree-controls');
  console.log('找到树控制容器:', treeControls);
  
  if (treeControls) {
    // 绑定放大按钮事件
    const zoomInBtn = treeControls.querySelector('.tree-btn.zoom-in');
    if (zoomInBtn) {
      console.log('找到放大按钮');
      zoomInBtn.addEventListener('click', function() {
        console.log('点击放大按钮');
        const currentTransform = d3.zoomTransform(svg.node());
        svg.transition()
          .duration(300)
          .call(d3.zoom().transform, d3.zoomIdentity.translate(currentTransform.x, currentTransform.y).scale(currentTransform.k * 1.2));
      });
    }
    
    // 绑定缩小按钮事件
    const zoomOutBtn = treeControls.querySelector('.tree-btn.zoom-out');
    if (zoomOutBtn) {
      console.log('找到缩小按钮');
      zoomOutBtn.addEventListener('click', function() {
        console.log('点击缩小按钮');
        const currentTransform = d3.zoomTransform(svg.node());
        svg.transition()
          .duration(300)
          .call(d3.zoom().transform, d3.zoomIdentity.translate(currentTransform.x, currentTransform.y).scale(currentTransform.k / 1.2));
      });
    }
    
    // 绑定重置按钮事件
    const resetBtn = treeControls.querySelector('.tree-btn.reset');
    if (resetBtn) {
      console.log('找到重置按钮');
      resetBtn.addEventListener('click', function() {
        console.log('点击重置按钮');
        svg.transition()
          .duration(300)
          .call(d3.zoom().transform, d3.zoomIdentity.translate(50, 50).scale(1));
      });
    }
    
    // 绑定展开全部按钮事件
    const expandBtn = treeControls.querySelector('.tree-btn.expand');
    if (expandBtn) {
      console.log('找到展开全部按钮');
      expandBtn.addEventListener('click', function() {
        console.log('点击展开全部按钮');
        expandAll(root);
        updateTree(svg, tree, root);
      });
    }
    
    // 绑定收起全部按钮事件
    const collapseBtn = treeControls.querySelector('.tree-btn.collapse');
    if (collapseBtn) {
      console.log('找到收起全部按钮');
      collapseBtn.addEventListener('click', function() {
        console.log('点击收起全部按钮');
        collapseAll(root);
        updateTree(svg, tree, root);
      });
    }
  }
  
  // 添加缩放功能
  svg.call(d3.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', function(event) {
      svg.selectAll('g').attr('transform', event.transform);
    }));
  
  console.log('树控制按钮初始化完成');
}

// 展开所有节点
function expandAll(node) {
  if (node._children) {
    node.children = node._children;
    node._children = null;
  }
  if (node.children) {
    node.children.forEach(expandAll);
  }
}

// 收起所有节点
function collapseAll(node) {
  if (node.children) {
    node._children = node.children;
    node.children = null;
    node._children.forEach(collapseAll);
  }
}

// 初始化时间轴
function initTimeline() {
  console.log('开始初始化时间轴');
  const timelinePoints = document.querySelectorAll('.timeline-point');
  const timelineInfo = document.getElementById('timelineInfo');
  
  console.log('时间轴点数量:', timelinePoints.length);
  console.log('timelineInfo元素:', timelineInfo);
  
  // 默认激活第一个时间点
  if (timelinePoints.length > 0) {
    console.log('默认激活第一个时间点');
    const firstYear = timelinePoints[0].getAttribute('data-year');
    handleTimelineClick(firstYear);
  }
}

// 根据年份筛选节点
function filterNodesByYear(year) {
  // 筛选并高亮对应年份的节点
  d3.selectAll('.node').each(function(d) {
    if (d.data.year === year) {
      d3.select(this).select('circle')
        .transition()
        .duration(500)
        .attr('r', 15)
        .style('fill', '#D4B16A')
        .style('stroke', '#8B4513')
        .style('stroke-width', '3px');
    } else {
      d3.select(this).select('circle')
        .transition()
        .duration(500)
        .attr('r', 10)
        .style('fill', '#8B4513')
        .style('stroke', '#F8F5F0')
        .style('stroke-width', '2px');
    }
  });
}

// 初始化家族名人堂
function initHallOfFame() {
  const hallOfFameCards = document.querySelectorAll('.hall-of-fame-card');
  const modal = document.getElementById('personModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalText = document.getElementById('modalText');
  const closeModal = document.querySelector('.person-modal .close-modal');
  
  // 名人卡片点击事件
  hallOfFameCards.forEach(card => {
    card.addEventListener('click', function() {
      const personId = this.getAttribute('data-person');
      const person = personData[personId];
      
      if (person) {
        modalTitle.textContent = person.title;
        modalImage.src = person.image;
        modalText.textContent = person.text;
        modal.style.display = 'block';
      }
    });
  });
  
  // 关闭模态框
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // 点击模态框外部关闭
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// 文化传承数据
const inheritanceData = {
  genealogy: {
    title: "族谱编纂",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20traditional%20Chinese%20family%20tree%2C%20Huizhou%20style%2C%20ink%20painting%20style%2C%20detailed%20brush%20strokes%2C%20high%20quality",
    text: "汪氏宗族重视族谱编纂，每三十年修订一次，详细记录宗族历史、血脉传承、人物事迹等内容。族谱不仅是家族历史的记录，更是宗族认同的重要载体，通过族谱，族人可以了解自己的祖先和家族历史，增强宗族凝聚力。\n\n汪氏族谱通常包括序、凡例、世系表、人物传、家训、族规等内容，体例严谨，内容丰富。在编纂过程中，族人会邀请族中有学问的人担任编纂官，确保族谱的准确性和权威性。\n\n族谱修成后，会在祠堂举行隆重的颁谱仪式，将族谱分发给各支派保管，确保族谱的传承和保存。"
  },
  ritual: {
    title: "祠堂祭祀",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20Huizhou%20ancestral%20hall%20ritual%2C%20traditional%20Chinese%20ceremony%2C%20ink%20painting%20style%2C%20detailed%20brush%20strokes%2C%20high%20quality",
    text: "祠堂祭祀是汪氏宗族最重要的礼仪活动之一，通常在春节、清明节、中元节等传统节日举行。祭祀活动由族长主持，全体族人参加，通过向祖先牌位敬献祭品、上香、行礼等仪式，表达对祖先的敬意和追思。\n\n祭祀仪式通常包括准备祭品、请神、献祭、读祭文、行礼、分胙等环节，程序严谨，庄严肃穆。通过祭祀活动，族人可以增强对宗族的认同，传承家族价值观，同时也是对年轻一代进行宗族文化教育的重要机会。\n\n除了常规祭祀外，汪氏宗族还会在重大事件时举行特别祭祀，如族谱修成、祠堂修缮完成等，以感谢祖先的庇佑，祈求宗族的繁荣昌盛。"
  },
  education: {
    title: "教育传统",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20traditional%20Chinese%20study%20room%2C%20Huizhou%20style%2C%20ink%20painting%20style%2C%20detailed%20brush%20strokes%2C%20high%20quality",
    text: "汪氏宗族重视教育，早在宋代就开始设立义学，资助贫困学子读书。明清时期 ，随着徽商的崛起，汪氏宗族更加重视教育，纷纷设立书院、私塾，培养族中子弟。\n\n汪氏宗族的教育传统体现在多个方面：一是设立义田，用田租收入资助族中贫困学子；二是制定族规，鼓励子弟读书上进；三是对取得功名的族人进行奖励，如在祠堂立碑表彰等。\n\n这种重视教育的传统，使得汪氏宗族人才辈出，涌现出许多学者、官员、商人等杰出人物，形成了'贾而好儒'的传统，为徽州文化的繁荣做出了重要贡献。"
  },
  "mutual-aid": {
    title: "宗族互助",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand-drawn%20traditional%20Chinese%20family%20gathering%2C%20Huizhou%20style%2C%20ink%20painting%20style%2C%20detailed%20brush%20strokes%2C%20high%20quality",
    text: "汪氏宗族内部建立了完善的互助机制，在族人遇到困难时提供帮助。这种互助精神体现在多个方面：一是经济互助，如设立义田、义仓，资助贫困族人；二是生活互助，如帮助族人操办红白喜事；三是教育互助，如资助贫困学子读书。\n\n宗族互助的核心是'一方有难，八方支援'的精神，通过互助，族人之间的联系更加紧密，宗族的凝聚力和向心力得到增强。这种互助传统不仅在过去发挥了重要作用，在现代社会仍然具有积极意义。\n\n汪氏宗族的互助机制通常由族长和族老负责组织和管理，通过宗族会议制定相关规则，确保互助活动的公平、公正、公开。"
  }
};

// 初始化文化传承
function initCulturalInheritance() {
  const inheritanceItems = document.querySelectorAll('.inheritance-item');
  const modal = document.getElementById('inheritanceModal');
  const modalTitle = document.getElementById('inheritanceModalTitle');
  const modalImage = document.getElementById('inheritanceModalImage');
  const modalText = document.getElementById('inheritanceModalText');
  const closeModal = document.querySelector('.inheritance-modal .close-modal');
  
  // 文化传承项目点击事件
  inheritanceItems.forEach(item => {
    item.addEventListener('click', function() {
      const type = this.getAttribute('data-type');
      const inheritance = inheritanceData[type];
      
      if (inheritance) {
        modalTitle.textContent = inheritance.title;
        modalImage.src = inheritance.image;
        modalText.textContent = inheritance.text;
        modal.style.display = 'block';
      }
    });
  });
  
  // 关闭模态框
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // 点击模态框外部关闭
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// 时间轴点击处理函数
function handleTimelineClick(year) {
  console.log('时间轴点击处理函数被调用:', year);
  const timelinePoints = document.querySelectorAll('.timeline-point');
  const timelineInfo = document.getElementById('timelineInfo');
  
  // 移除所有点的active类
  timelinePoints.forEach(p => p.classList.remove('active'));
  // 添加当前点的active类
  const currentPoint = Array.from(timelinePoints).find(p => p.getAttribute('data-year') === year);
  if (currentPoint) {
    currentPoint.classList.add('active');
  }
  
  // 更新时间轴信息
  const timelineItem = timelineData.find(item => item.year === year);
  if (timelineItem) {
    const title = year === '现代' ? year : `${year}代`;
    timelineInfo.innerHTML = `
      <h5>${title}</h5>
      <p>${timelineItem.info}</p>
    `;
    
    // 根据时间轴筛选节点
    filterNodesByYear(year);
  }
}

// 页面加载完成后初始化
window.addEventListener('load', function() {
  console.log('页面加载完成，初始化血脉延绵模块');
  // 直接执行，不需要延迟
  initBloodlineModule();
  initCulturalInheritance();
  console.log('血脉延绵模块初始化完成');
});