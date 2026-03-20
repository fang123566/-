// 血脉延绵 - 水墨生长谱系树
class GenealogyTree {
  constructor(container) {
    this.container = container;
    this.data = null;
    this.tree = null;
    this.root = null;
    this.svg = null;
    this.tooltip = null;
  }

  init(data) {
    this.data = data;
    this.createTree();
    this.createTooltip();
    this.renderTree();
  }

  createTree() {
    const width = this.container.clientWidth;
    const height = 500;
    
    this.tree = d3.tree().size([height - 80, width - 160]);
    this.root = d3.hierarchy(this.data);
    this.tree(this.root);

    this.svg = d3.select(this.container).append("svg")
      .attr("width", "100%")
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(80,40)");
  }

  createTooltip() {
    this.tooltip = d3.select(this.container).append("div")
      .attr("class", "antique-tooltip")
      .style("opacity", "0")
      .style("pointer-events", "none");
  }

  renderTree() {
    // 绘制连接线
    const link = this.svg.selectAll(".link")
      .data(this.root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x))
      .style("stroke", "#8B451333")
      .style("stroke-width", d => d.target.depth === 0 ? 2 : 1.5)
      .style("stroke-dasharray", d => d.target.children ? "" : "5,5")
      .style("opacity", "0")
      .transition()
      .duration(1000)
      .style("opacity", "1");

    // 绘制节点
    const node = this.svg.selectAll(".node")
      .data(this.root.descendants())
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.y},${d.x})`)
      .style("opacity", "0")
      .transition()
      .duration(500)
      .delay((d, i) => i * 100)
      .style("opacity", "1")
      .on("click", (event, d) => this.toggleNode(d))
      .on("mouseover", (event, d) => this.showTooltip(event, d))
      .on("mouseout", () => this.hideTooltip());

    // 添加节点圆圈（印章样式）
    node.append("circle")
      .attr("r", 0)
      .style("fill", d => d.depth === 0 ? "#C0392B" : "#333333")
      .style("stroke", "#F8F5F0")
      .style("stroke-width", 2)
      .transition()
      .duration(300)
      .attr("r", d => d.depth === 0 ? 8 : 6);

    // 添加节点文本
    node.append("text")
      .attr("dy", ".31em")
      .attr("x", d => d.children || d._children ? -15 : 10)
      .style("text-anchor", d => d.children || d._children ? "end" : "start")
      .style("font-size", d => d.depth === 0 ? "14px" : "12px")
      .style("font-weight", d => d.depth === 0 ? "bold" : "normal")
      .style("fill", d => d.depth === 0 ? "#C0392B" : "#333333")
      .style("font-family", "var(--font-title)")
      .text(d => d.data.name)
      .style("opacity", "0")
      .transition()
      .duration(300)
      .delay(200)
      .style("opacity", "1");

    // 添加展开/折叠指示器
    node.filter(d => d.children || d._children)
      .append("path")
      .attr("d", d => d.children ? "M -8 0 L 0 -6 L 8 0" : "M -8 0 L 0 6 L 8 0")
      .attr("transform", d => `translate(${d.children ? -18 : 12}, 0)`)
      .style("fill", "none")
      .style("stroke", "#8B4513")
      .style("stroke-width", 1.5)
      .style("opacity", "0")
      .transition()
      .duration(300)
      .delay(300)
      .style("opacity", "1");
  }

  toggleNode(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    this.updateTree(d);
  }

  updateTree(source) {
    const treeData = this.tree(this.root);

    // 更新连接线
    const linkUpdate = this.svg.selectAll(".link")
      .data(treeData.links());

    linkUpdate.enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal().x(d => source.y).y(d => source.x))
      .style("stroke", "#8B451333")
      .style("stroke-width", d => d.target.depth === 0 ? 2 : 1.5)
      .style("stroke-dasharray", d => d.target.children ? "" : "5,5")
      .transition()
      .duration(300)
      .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x));

    linkUpdate
      .transition()
      .duration(300)
      .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x));

    linkUpdate.exit()
      .transition()
      .duration(300)
      .attr("d", d3.linkHorizontal().x(d => source.y).y(d => source.x))
      .remove();

    // 更新节点
    const nodeUpdate = this.svg.selectAll(".node")
      .data(treeData.descendants());

    const nodeEnter = nodeUpdate.enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${source.y},${source.x})`)
      .on("click", (event, d) => this.toggleNode(d))
      .on("mouseover", (event, d) => this.showTooltip(event, d))
      .on("mouseout", () => this.hideTooltip());

    nodeEnter.append("circle")
      .attr("r", 0)
      .style("fill", d => d.depth === 0 ? "#C0392B" : "#333333")
      .style("stroke", "#F8F5F0")
      .style("stroke-width", 2)
      .transition()
      .duration(300)
      .attr("r", d => d.depth === 0 ? 8 : 6);

    nodeEnter.append("text")
      .attr("dy", ".31em")
      .attr("x", d => d.children || d._children ? -15 : 10)
      .style("text-anchor", d => d.children || d._children ? "end" : "start")
      .style("font-size", d => d.depth === 0 ? "14px" : "12px")
      .style("font-weight", d => d.depth === 0 ? "bold" : "normal")
      .style("fill", d => d.depth === 0 ? "#C0392B" : "#333333")
      .style("font-family", "var(--font-title)")
      .text(d => d.data.name)
      .style("opacity", "0")
      .transition()
      .duration(300)
      .style("opacity", "1");

    nodeEnter.filter(d => d.children || d._children)
      .append("path")
      .attr("d", d => d.children ? "M -8 0 L 0 -6 L 8 0" : "M -8 0 L 0 6 L 8 0")
      .attr("transform", d => `translate(${d.children ? -18 : 12}, 0)`)
      .style("fill", "none")
      .style("stroke", "#8B4513")
      .style("stroke-width", 1.5)
      .style("opacity", "0")
      .transition()
      .duration(300)
      .style("opacity", "1");

    nodeUpdate
      .transition()
      .duration(300)
      .attr("transform", d => `translate(${d.y},${d.x})`);

    nodeUpdate.select("circle")
      .transition()
      .duration(300)
      .style("fill", d => d.children || d._children ? "#C0392B" : "#333333");

    nodeUpdate.select("path")
      .transition()
      .duration(300)
      .attr("d", d => d.children ? "M -8 0 L 0 -6 L 8 0" : "M -8 0 L 0 6 L 8 0")
      .attr("transform", d => `translate(${d.children ? -18 : 12}, 0)`);

    nodeUpdate.exit()
      .transition()
      .duration(300)
      .attr("transform", d => `translate(${source.y},${source.x})`)
      .remove();

    nodeUpdate.exit().select("circle")
      .transition()
      .duration(300)
      .attr("r", 0);

    nodeUpdate.exit().select("text")
      .transition()
      .duration(300)
      .style("opacity", 0);
  }

  showTooltip(event, d) {
    this.tooltip.transition()
      .duration(200)
      .style("opacity", 1);
    this.tooltip.html(`<strong>${d.data.name}</strong><br>${d.data.description || '无详细信息'}`)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY - 28) + "px");

    // 高亮当前节点
    d3.select(event.currentTarget).select("circle")
      .transition()
      .duration(200)
      .attr("r", d.depth === 0 ? 10 : 8)
      .style("fill", "#D4B16A");
  }

  hideTooltip() {
    this.tooltip.transition()
      .duration(500)
      .style("opacity", 0);

    // 恢复节点样式
    this.svg.selectAll(".node circle")
      .transition()
      .duration(200)
      .attr("r", d => d.depth === 0 ? 8 : 6)
      .style("fill", d => d.depth === 0 ? "#C0392B" : "#333333");
  }
}

// 时空轴联动
class TimeAxis {
  constructor(container) {
    this.container = container;
    this.periods = [
      { name: '唐代', year: '618-907', color: '#8B4513' },
      { name: '宋代', year: '960-1279', color: '#4A6F8C' },
      { name: '明代', year: '1368-1644', color: '#D4B16A' },
      { name: '清代', year: '1644-1912', color: '#707070' }
    ];
  }

  init() {
    this.createTimeAxis();
  }

  createTimeAxis() {
    const axis = document.createElement('div');
    axis.className = 'time-axis';
    axis.style.display = 'flex';
    axis.style.justifyContent = 'space-around';
    axis.style.padding = '20px 0';
    axis.style.marginTop = '20px';
    axis.style.borderTop = '1px solid #8B451333';

    this.periods.forEach(period => {
      const periodElement = document.createElement('div');
      periodElement.className = 'time-period';
      periodElement.style.cursor = 'pointer';
      periodElement.style.textAlign = 'center';
      periodElement.style.padding = '10px';
      periodElement.style.borderRadius = '8px';
      periodElement.style.transition = 'all 0.3s ease';
      periodElement.style.border = `1px solid ${period.color}33`;
      periodElement.innerHTML = `
        <div style="font-family: var(--font-title); font-size: 16px; color: ${period.color}; margin-bottom: 5px;">${period.name}</div>
        <div style="font-size: 12px; color: var(--secondary-gray);">${period.year}</div>
      `;

      periodElement.addEventListener('click', () => {
        this.selectPeriod(period);
      });

      axis.appendChild(periodElement);
    });

    this.container.appendChild(axis);
  }

  selectPeriod(period) {
    // 移除其他时期的选中状态
    document.querySelectorAll('.time-period').forEach(el => {
      el.style.background = 'transparent';
      el.style.transform = 'scale(1)';
    });

    // 添加当前时期的选中状态
    const periodElement = Array.from(document.querySelectorAll('.time-period')).find(el => 
      el.querySelector('div').textContent === period.name
    );
    if (periodElement) {
      periodElement.style.background = `${period.color}11`;
      periodElement.style.transform = 'scale(1.05)';
      periodElement.style.boxShadow = `0 4px 12px ${period.color}33`;
    }

    // 触发谱系树筛选
    this.filterGenealogyByPeriod(period.name);
  }

  filterGenealogyByPeriod(period) {
    // 这里可以添加根据时期筛选谱系树的逻辑
    console.log(`筛选${period}时期的族人`);
  }
}

// 初始化血脉延绵模块
document.addEventListener('DOMContentLoaded', function() {
  const treeContainer = document.getElementById('genealogyTree');
  const timeAxisContainer = document.getElementById('genealogy');
  
  if (treeContainer) {
    const data = {
      name: "汪华（始祖）",
      description: "唐代歙州刺史，汪氏家族始祖",
      children: [
        {
          name: "汪建（二世）",
          description: "汪华长子，袭封越国公",
          children: [
            { 
              name: "汪处哲（三世）",
              description: "汪建长子，官至歙州司马"
            },
            { 
              name: "汪处惠（三世）",
              description: "汪建次子，任宣州刺史"
            }
          ]
        },
        {
          name: "汪璨（二世）",
          description: "汪华次子，任左卫将军",
          children: [
            { 
              name: "汪处澄（三世）",
              description: "汪璨长子，任池州刺史"
            },
            { 
              name: "汪处休（三世）",
              description: "汪璨次子，任湖州刺史"
            }
          ]
        },
        {
          name: "汪达（二世）",
          description: "汪华三子，任右卫将军",
          children: [
            { 
              name: "汪处崇（三世）",
              description: "汪达长子，任杭州刺史"
            },
            { 
              name: "汪处恭（三世）",
              description: "汪达次子，任睦州刺史"
            }
          ]
        },
        {
          name: "汪广（二世）",
          description: "汪华四子，任左卫中郎将",
          children: [
            { 
              name: "汪处俭（三世）",
              description: "汪广长子，任婺州刺史"
            },
            { 
              name: "汪处立（三世）",
              description: "汪广次子，任衢州刺史"
            }
          ]
        },
        {
          name: "汪逊（二世）",
          description: "汪华五子，任右卫中郎将",
          children: [
            { 
              name: "汪处易（三世）",
              description: "汪逊长子，任台州刺史"
            },
            { 
              name: "汪处则（三世）",
              description: "汪逊次子，任温州刺史"
            }
          ]
        }
      ]
    };

    const genealogyTree = new GenealogyTree(treeContainer);
    genealogyTree.init(data);

    if (timeAxisContainer) {
      const timeAxis = new TimeAxis(timeAxisContainer);
      timeAxis.init();
    }
  }
});