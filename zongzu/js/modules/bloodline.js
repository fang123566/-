// 血脉延绵模块 - 流觞曲水谱系树交互

// 家族数据
const familyData = {
  name: "汪氏宗族",
  children: [
    {
      name: "汪华",
      year: "唐",
      period: "586–649年",
      description: "汪氏家族巅峰人物，第44世祖。隋末起兵占据歙、宣、杭、睦、婺、饶六州，号称「吴王」。唐武德四年归唐，封「越国公」，执掌禁军，深得唐太宗信任。历朝十一次加封，宋徽宗赐「忠显」庙额，民间尊为「汪公大帝」，誉为「古徽州第一伟人」。",
      children: [
        {
          name: "汪建",
          year: "唐",
          period: "隋唐之际",
          description: "汪华长子，字子尚，第45世祖。生有六子，长子汪处修迁居旌德新建，其余五子迁往四川眉山。是徽州汪氏建公支派始祖。",
          children: [
            {
              name: "汪处修",
              year: "宋",
              period: "宋代",
              description: "汪建长子，第46世祖。迁居旌德新建，是建公支派在安徽旌德的开基祖，开一方宗族之基。",
              children: [
                {
                  name: "汪璟",
                  year: "宋",
                  period: "宋代",
                  description: "汪氏支系先祖，汪处修脉系传承人，具体生平有待考证，承续旌德一支香火。"
                }
              ]
            },
            {
              name: "汪权修",
              year: "宋",
              period: "宋代",
              description: "与汪处修同辈，汪建之子，汪氏建公支派族人，为宗族另一重要支脉之祖。"
            }
          ]
        },
        {
          name: "汪道安",
          year: "唐",
          period: "唐代",
          description: "汪华第七子汪爽的后裔，唐宣宗时由歙县慈菰迁居婺源，是婺源汪氏开基祖，后裔散居休宁、婺源二邑间，绵延数百年。",
          children: [
            {
              name: "汪道昆",
              year: "明",
              period: "1525–1593年",
              description: "明代徽州府歙县人，字伯玉，号南明。嘉靖二十六年进士，授义乌知县，与戚继光募义乌兵破倭寇，官至兵部左侍郎，与王世贞并称「两司马」。为「后五子」之一，著有《太函集》《大雅堂杂剧》等，曾作《黄鹤楼记》传世。",
              children: [
                {
                  name: "汪仲淹",
                  year: "明",
                  period: "明代",
                  description: "即汪道贯，字仲淹，汪道昆之弟。工词赋，通篆籀真行。督学吴公路称之「小司马」，与从弟汪道会并称「二仲」，著有《汪次公集》。"
                }
              ]
            },
            {
              name: "汪中",
              year: "清",
              period: "1744–1794年",
              description: "清代江苏江都人，字容甫。出身孤贫，勤奋好学，乾隆四十二年拔贡生。为学私淑顾炎武，是清代第一流学者，著有《述学》6卷、《广陵通典》10卷，在经学、小学、诸子学等方面均有卓见。",
              children: [
                {
                  name: "汪喜孙",
                  year: "清",
                  period: "清代",
                  description: "汪中之子，一名喜荀，字孟慈。嘉庆十二年举人，出补河南怀庆府知府。整理父亲遗稿编成《述学》6卷本，著有《大戴礼记补》《且住庵诗文稿》等。"
                }
              ]
            },
            {
              name: "汪大燮",
              year: "现代",
              period: "1859–1929年",
              description: "晚清至民国外交官、政治家，浙江钱塘人，先世由安徽黟县宏村迁居钱塘。举人出身，历任驻英公使、邮传部左侍郎等职。民国后任教育、交通、外交等部总长，1917年一度代理国务总理，在五四运动、国民外交中有重要影响。",
              children: [
                {
                  name: "汪世铭",
                  year: "现代",
                  period: "1896–1977年",
                  description: "安徽桐城人，又名汪心渠。清华学校毕业后留学美国弗吉尼亚军校、哥伦比亚大学。曾任东北军团长、湖南大学教授、国民政府军委会外事局少将局长。1949年作为特邀代表出席中国人民政治协商会议，后任政务院参事、第一至三届全国人大代表。"
                }
              ]
            }
          ]
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

// 朝代颜色映射（模块级，供 filterNodesByYear 复用）
const dynastyColors = {
  '唐': { fill: 'rgba(192,57,43,0.13)', stroke: '#C0392B', text: '#7B1A10' },
  '宋': { fill: 'rgba(46,107,158,0.12)', stroke: '#2E6B9E', text: '#1A4A7B' },
  '元': { fill: 'rgba(123,94,58,0.13)', stroke: '#7B5E3A', text: '#4A3010' },
  '明': { fill: 'rgba(46,125,91,0.13)', stroke: '#2E7D5B', text: '#1A5A3A' },
  '清': { fill: 'rgba(107,78,138,0.13)', stroke: '#6B4E8A', text: '#4A2E6A' },
  '现代': { fill: 'rgba(44,74,110,0.13)', stroke: '#2C4A6E', text: '#1A2E50' }
};
const rootNodeColor = { fill: 'rgba(139,69,19,0.22)', stroke: '#8B4513', text: '#4a1e0a' };

// 初始化血脉延绵模块
function initBloodlineModule() {
  // 初始化谱系树
  initGenealogyTree();
  
  // 初始化时间轴
  initTimeline();
  
  // 初始化家族名人堂
  initHallOfFame();
  
  // 初始化文化传承
  initCulturalInheritance();
}

// 初始化谱系树
function initGenealogyTree() {
  try {
    const treeElement = document.getElementById('genealogyTree');
    if (!treeElement) return;

    d3.select('#genealogyTree').selectAll('*').remove();

    const nW = 84, nH = 38;
    const root = d3.hierarchy(familyData);
    const treeLayout = d3.tree().nodeSize([nH + 18, nW + 32]);
    treeLayout(root);

    let x0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    root.each(d => {
      if (d.x < x0) x0 = d.x;
      if (d.x > x1) x1 = d.x;
      if (d.y > y1) y1 = d.y;
    });
    const pad = { t: 28, r: 58, b: 28, l: 58 };
    const vbW = y1 + pad.l + pad.r;
    const vbH = (x1 - x0) + pad.t + pad.b;

    const svgEl = d3.select('#genealogyTree')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `-${pad.l} ${x0 - pad.t} ${vbW} ${vbH}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // 阴影滤镜
    const defs = svgEl.append('defs');
    const flt = defs.append('filter')
      .attr('id', 'treeShadow')
      .attr('x', '-20%').attr('y', '-20%')
      .attr('width', '140%').attr('height', '140%');
    flt.append('feDropShadow')
      .attr('dx', 0).attr('dy', 2)
      .attr('stdDeviation', 2)
      .attr('flood-color', 'rgba(0,0,0,0.14)');

    const svg = svgEl.append('g');

    // Bezier 连接线（从源矩形右边缘到目标矩形左边缘）
    svg.selectAll('.link')
      .data(root.links())
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', d => {
        const sx = d.source.y + nW / 2;
        const sy = d.source.x;
        const tx = d.target.y - nW / 2;
        const ty = d.target.x;
        const mx = (sx + tx) / 2;
        return `M${sx},${sy} C${mx},${sy} ${mx},${ty} ${tx},${ty}`;
      })
      .style('fill', 'none')
      .style('stroke', d => {
        const c = dynastyColors[d.target.data.year];
        return c ? c.stroke : '#8B4513';
      })
      .style('stroke-width', '1.5px')
      .style('stroke-opacity', 0.5)
      .style('opacity', 0)
      .transition().duration(1200)
      .style('opacity', 1);

    // 节点组
    const node = svg.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`)
      .style('opacity', 0)
      .style('cursor', 'pointer');

    // 节点圆角矩形背景
    node.append('rect')
      .attr('class', 'node-rect')
      .attr('x', -nW / 2)
      .attr('y', -nH / 2)
      .attr('width', nW)
      .attr('height', nH)
      .attr('rx', 8).attr('ry', 8)
      .attr('filter', 'url(#treeShadow)')
      .style('fill', d => {
        if (d.depth === 0) return rootNodeColor.fill;
        const c = dynastyColors[d.data.year];
        return c ? c.fill : 'rgba(139,69,19,0.10)';
      })
      .style('stroke', d => {
        if (d.depth === 0) return rootNodeColor.stroke;
        const c = dynastyColors[d.data.year];
        return c ? c.stroke : '#8B4513';
      })
      .style('stroke-width', d => d.depth === 0 ? '2px' : '1.5px');

    // 姓名文字
    node.append('text')
      .attr('class', 'node-name')
      .attr('dy', d => (d.depth > 0 && d.data.year) ? 0 : 5)
      .attr('x', 0)
      .style('text-anchor', 'middle')
      .style('font', d => d.depth === 0
        ? 'bold 13px "Ma Shan Zheng", "Noto Serif SC", serif'
        : '12px "Noto Serif SC", serif')
      .style('fill', d => {
        if (d.depth === 0) return rootNodeColor.text;
        const c = dynastyColors[d.data.year];
        return c ? c.text : '#333';
      })
      .style('pointer-events', 'none')
      .text(d => d.data.name);

    // 朝代年份小标签
    node.filter(d => d.depth > 0 && d.data.year)
      .append('text')
      .attr('class', 'node-year')
      .attr('dy', 13)
      .attr('x', 0)
      .style('text-anchor', 'middle')
      .style('font-size', '9px')
      .style('fill', d => {
        const c = dynastyColors[d.data.year];
        return c ? c.stroke : '#888';
      })
      .style('opacity', 0.82)
      .style('pointer-events', 'none')
      .text(d => `${d.data.year}代`);

    node.transition().duration(700)
      .delay((d, i) => i * 55)
      .style('opacity', 1);

    // 悬浮提示 + 矩形高亮
    node.on('mouseover', function(event, d) {
      d3.select('body').selectAll('.tree-tooltip').remove();
      if (d.depth > 0 && d.data.description) {
        const dc = dynastyColors[d.data.year] || { stroke: '#8B4513', text: '#4a1e0a' };
        const periodHtml = d.data.period
          ? `<div style="font-size:0.7rem;color:${dc.stroke};letter-spacing:0.06em;margin-bottom:5px;">${d.data.period}</div>`
          : '';
        const dynBadge = d.data.year
          ? `<span style="display:inline-block;padding:1px 7px;border-radius:10px;font-size:0.66rem;background:${dc.stroke};color:#fff;letter-spacing:0.1em;margin-bottom:5px;">${d.data.year}代</span>`
          : '';
        const nodeRect = this.getBoundingClientRect();
        const left = Math.min(nodeRect.right + 10, window.innerWidth - 295);
        const top = Math.max(nodeRect.top - 10, 8);
        d3.select('body').append('div')
          .attr('class', 'tree-tooltip')
          .style('position', 'fixed')
          .style('left', left + 'px')
          .style('top', top + 'px')
          .style('max-width', '278px')
          .style('background', 'rgba(255,252,245,0.98)')
          .style('color', '#3a2a1a')
          .style('padding', '12px 14px')
          .style('border-radius', '8px')
          .style('font-size', '0.78rem')
          .style('line-height', '1.7')
          .style('box-shadow', `0 6px 22px rgba(0,0,0,0.16), 0 0 0 1px ${dc.stroke}44`)
          .style('border', `1px solid ${dc.stroke}55`)
          .style('pointer-events', 'none')
          .style('z-index', '9999')
          .style('opacity', 0)
          .html(`
            ${dynBadge}
            <div style="font-family:'Ma Shan Zheng',cursive;font-size:1rem;color:${dc.stroke};margin-bottom:2px;letter-spacing:0.05em;">${d.data.name}</div>
            ${periodHtml}
            <div style="font-size:0.74rem;color:#5a4030;line-height:1.72;">${d.data.description}</div>
          `)
          .transition().duration(160).style('opacity', 1);
      }
      d3.select(this).select('.node-rect')
        .transition().duration(150)
        .attr('x', -nW / 2 - 3).attr('y', -nH / 2 - 3)
        .attr('width', nW + 6).attr('height', nH + 6)
        .style('stroke-width', '2.5px')
        .style('filter', 'url(#treeShadow) brightness(1.08)');
    }).on('mouseout', function(event, d) {
      d3.select('body').selectAll('.tree-tooltip')
        .transition().duration(120).style('opacity', 0).remove();
      d3.select(this).select('.node-rect')
        .transition().duration(150)
        .attr('x', -nW / 2).attr('y', -nH / 2)
        .attr('width', nW).attr('height', nH)
        .style('stroke-width', d.depth === 0 ? '2px' : '1.5px')
        .style('filter', 'url(#treeShadow)');
    });

    // 缩放/平移行为
    const zoom = d3.zoom()
      .scaleExtent([0.3, 3])
      .on('zoom', e => svg.attr('transform', e.transform));
    svgEl.call(zoom);

    initTreeControls(svgEl, zoom);
    console.log('谱系树初始化完成');
  } catch (error) {
    console.error('初始化谱系树时出错:', error);
  }
}

// 根据年份筛选节点
function filterNodesByYear(year) {
  d3.selectAll('.node').each(function(d) {
    const rect = d3.select(this).select('.node-rect');
    if (d.data.year === year) {
      rect.transition().duration(500)
        .style('fill', 'rgba(212,177,106,0.45)')
        .style('stroke', '#D4B16A')
        .style('stroke-width', '2.5px');
    } else {
      const c = dynastyColors[d.data.year];
      rect.transition().duration(500)
        .style('fill', d.depth === 0 ? rootNodeColor.fill : (c ? c.fill : 'rgba(139,69,19,0.10)'))
        .style('stroke', d.depth === 0 ? rootNodeColor.stroke : (c ? c.stroke : '#8B4513'))
        .style('stroke-width', d.depth === 0 ? '2px' : '1.5px');
    }
  });
}

// 初始化树控制按钮
function initTreeControls(svgEl, zoom) {
  const zoomInBtn = document.getElementById('zoomIn');
  const zoomOutBtn = document.getElementById('zoomOut');
  const resetBtn = document.getElementById('resetView');
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => svgEl.transition().duration(300).call(zoom.scaleBy, 1.4));
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => svgEl.transition().duration(300).call(zoom.scaleBy, 0.7));
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => svgEl.transition().duration(750).call(zoom.transform, d3.zoomIdentity));
  }
}

function initHallOfFame() {
  console.log('initHallOfFame 开始执行');
  const hallOfFameCards = document.querySelectorAll('.hall-of-fame-card');
  console.log('找到家族名人堂卡片数量:', hallOfFameCards.length);
  let tooltip = document.querySelector('.hall-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.className = 'hall-tooltip';
    tooltip.style.cssText = 'position:fixed;z-index:9999;width:600px;padding:0;border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,0.35),0 0 0 1px rgba(184,134,11,0.25);pointer-events:none;display:none;overflow:hidden;';
    document.body.appendChild(tooltip);
    console.log('hall-tooltip 元素已创建');
  }
  hallOfFameCards.forEach(card => {
    const personKey = card.getAttribute('data-person');
    const data = personData[personKey];
    console.log('处理卡片:', personKey, '数据:', data ? '有' : '无');
    if (!data) return;
    card.addEventListener('mouseenter', function(e) {
      console.log('mouseenter:', data.title);
      const imgHtml = data.image ? `<div style="width:260px;flex-shrink:0;position:relative;overflow:hidden;border-radius:16px 0 0 16px;"><img src="${data.image}" alt="${data.title}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>` : '';
      tooltip.innerHTML = `<div style="display:flex;align-items:stretch;height:340px;width:620px;background:#faf7f2;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);overflow:hidden;">${imgHtml}<div style="padding:28px 32px;flex:1;min-width:0;overflow-y:auto;background:linear-gradient(135deg,#faf7f2 0%,#f5f0e8 100%);"><div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;"><div style="width:3px;height:28px;background:linear-gradient(to bottom,#8B4513,#D4A017);border-radius:2px;"></div><div style="font-family:'Ma Shan Zheng',cursive;font-size:1.4rem;color:#5a2d0c;letter-spacing:0.08em;">${data.title}</div></div><div style="font-size:0.9rem;line-height:2;color:#4a3a2a;text-indent:2em;">${data.text.replace(/\n/g, '<br>')}</div></div></div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = Math.min(e.clientX + 18, window.innerWidth - 650) + 'px';
      tooltip.style.top = Math.max(e.clientY - 170, 8) + 'px';
      console.log('tooltip 已显示');
    });
    card.addEventListener('mouseleave', function() {
      tooltip.style.display = 'none';
      console.log('tooltip 已隐藏');
    });
  });
  console.log('initHallOfFame 执行完毕');
}

// 初始化文化传承
function initCulturalInheritance() {
const items = document.querySelectorAll('.inheritance-item');
let tooltip = document.querySelector('.inheritance-tooltip');
if (!tooltip) {
tooltip = document.createElement('div');
tooltip.className = 'inheritance-tooltip';
tooltip.style.cssText = 'position:fixed;z-index:9999;max-width:360px;background:rgba(30,20,10,0.94);color:#f5ecd4;border-radius:8px;font-size:0.82rem;line-height:1.6;box-shadow:0 8px 28px rgba(0,0,0,0.4);pointer-events:none;display:none;border:1px solid rgba(212,177,106,0.3);overflow:hidden;';
document.body.appendChild(tooltip);
}
items.forEach(item => {
item.style.cursor = 'pointer';
const img = item.querySelector('.inheritance-icon img');
const titleEl = item.querySelector('h5');
const descEl = item.querySelector('p');
item.addEventListener('mouseenter', function(e) {
const imgSrc = img ? img.src : '';
const titleText = titleEl ? titleEl.textContent : '';
const imgHtml = imgSrc ? `<img src="${imgSrc}" alt="${titleText}" style="width:200px;height:auto;max-height:280px;object-fit:cover;display:block;border-radius:8px;">` : '';
tooltip.innerHTML = `<div style="padding:0;">${imgHtml}</div>`;
tooltip.style.display = 'block';
tooltip.style.left = Math.min(e.clientX + 18, window.innerWidth - 240) + 'px';
tooltip.style.top = Math.max(e.clientY - 80, 8) + 'px';
});
item.addEventListener('mouseleave', function() {
tooltip.style.display = 'none';
});
item.addEventListener('click', function() {
this.classList.toggle('expanded');
});
});
}

// 时间轴点击处理函数
function handleTimelineClick(year) {
  console.log('时间轴点击处理函数被调用:', year);
  const timelinePoints = document.querySelectorAll('.timeline-point-v');
  const timelineInfo = document.getElementById('timelineInfo');
  
  // 移除所有点的active类并清除内联背景（防止残留）
  timelinePoints.forEach(p => { p.classList.remove('active'); p.style.background = ''; });
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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBloodlineModule);
} else {
  initBloodlineModule();
}

// 同时保留 window.load 作为备用
window.addEventListener('load', function() {
  console.log('window.load 触发，重新检查初始化状态');
  const hallOfFameCards = document.querySelectorAll('.hall-of-fame-card');
  const inheritanceItems = document.querySelectorAll('.inheritance-item');
  console.log('家族名人堂卡片数:', hallOfFameCards.length);
  console.log('文化传承项目数:', inheritanceItems.length);
  if (hallOfFameCards.length > 0 && !document.querySelector('.hall-tooltip')) {
    console.log('重新初始化家族名人堂');
    initHallOfFame();
  }
  if (inheritanceItems.length > 0 && !document.querySelector('.inheritance-tooltip')) {
    console.log('重新初始化文化传承');
    initCulturalInheritance();
  }
});