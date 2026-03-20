// 宗族聚居与建筑布局 - 村落生长动画
class VillageAnimation {
  constructor(container) {
    this.container = container;
    this.elements = [];
    this.isAnimating = false;
  }

  init() {
    this.createVillageElements();
    this.startAnimation();
  }

  createVillageElements() {
    // 祠堂（核心）
    const ancestralHall = this.createElement('祠堂', 50, 50, 'ancestral-hall');
    
    // 支祠（次核心）
    const branchHalls = [
      this.createElement('支祠1', 30, 30, 'branch-hall'),
      this.createElement('支祠2', 70, 30, 'branch-hall'),
      this.createElement('支祠3', 30, 70, 'branch-hall'),
      this.createElement('支祠4', 70, 70, 'branch-hall')
    ];

    // 民居（节点）
    const houses = [
      this.createElement('民居1', 20, 20, 'house'),
      this.createElement('民居2', 80, 20, 'house'),
      this.createElement('民居3', 20, 80, 'house'),
      this.createElement('民居4', 80, 80, 'house'),
      this.createElement('民居5', 40, 15, 'house'),
      this.createElement('民居6', 60, 15, 'house'),
      this.createElement('民居7', 15, 40, 'house'),
      this.createElement('民居8', 85, 40, 'house'),
      this.createElement('民居9', 40, 85, 'house'),
      this.createElement('民居10', 60, 85, 'house'),
      this.createElement('民居11', 15, 60, 'house'),
      this.createElement('民居12', 85, 60, 'house')
    ];

    // 水系
    const water = this.createElement('水系', 50, 90, 'water');

    // 巷弄
    const lanes = [
      this.createElement('巷弄1', 50, 20, 'lane'),
      this.createElement('巷弄2', 50, 80, 'lane'),
      this.createElement('巷弄3', 20, 50, 'lane'),
      this.createElement('巷弄4', 80, 50, 'lane')
    ];

    this.elements = [ancestralHall, ...branchHalls, ...houses, water, ...lanes];
  }

  createElement(name, x, y, type) {
    const element = document.createElement('div');
    element.className = `village-element ${type}`;
    element.style.left = `${x}%`;
    element.style.top = `${y}%`;
    element.style.transform = `translate(-50%, -50%) scale(0.8)`;
    element.innerHTML = `
      <div style="width: 40px; height: 40px; background: #8B4513; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-family: var(--font-title);">${name.charAt(0)}</div>
      <div style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; white-space: nowrap; color: var(--primary-text);">${name}</div>
    `;
    this.container.appendChild(element);
    return element;
  }

  startAnimation() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    // 动画顺序：祠堂 → 支祠 → 民居 → 水系 → 巷弄
    const sequence = [
      { elements: [this.elements[0]], delay: 0 }, // 祠堂
      { elements: this.elements.slice(1, 5), delay: 1000 }, // 支祠
      { elements: this.elements.slice(5, 17), delay: 2000 }, // 民居
      { elements: [this.elements[17]], delay: 2500 }, // 水系
      { elements: this.elements.slice(18), delay: 2800 } // 巷弄
    ];

    sequence.forEach(({ elements, delay }) => {
      setTimeout(() => {
        elements.forEach(element => {
          element.classList.add('visible');
        });
      }, delay);
    });

    // 3秒后动画完成
    setTimeout(() => {
      this.isAnimating = false;
    }, 3000);
  }

  reset() {
    this.elements.forEach(element => {
      element.classList.remove('visible');
    });
    this.isAnimating = false;
    setTimeout(() => {
      this.startAnimation();
    }, 500);
  }
}

// 初始化村落生长动画
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.village-animation');
  if (container) {
    const animation = new VillageAnimation(container);
    animation.init();
  }
});