// 家风族规卷轴 - 古法卷轴动画
class FamilyRulesScroll {
  constructor(container) {
    this.container = container;
    this.content = container.querySelector('.scroll-content');
    this.button = container.querySelector('button[onclick="toggleScroll()"]');
    this.isOpen = false;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    if (this.button) {
      this.button.addEventListener('click', () => this.toggleScroll());
    }

    // 添加族规诵读按钮
    this.addReadButtons();

    // 添加族规认同功能
    this.addAgreeFunctionality();
  }

  toggleScroll() {
    if (this.isOpen) {
      this.closeScroll();
    } else {
      this.openScroll();
    }
  }

  openScroll() {
    // 播放卷轴展开音效
    this.playSound('scroll-open.mp3');

    // 展开动画
    this.content.style.maxHeight = '2000px';
    this.content.style.opacity = '1';
    this.content.style.transform = 'translateY(0)';
    this.content.style.transition = 'max-height 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease, transform 0.8s ease';

    // 文字逐行显示动画
    this.animateText();

    this.button.textContent = '收起卷轴';
    this.isOpen = true;
  }

  closeScroll() {
    // 播放卷轴收起音效
    this.playSound('scroll-close.mp3');

    // 文字逐行消失动画
    this.fadeOutText();

    // 收起动画
    setTimeout(() => {
      this.content.style.maxHeight = '0px';
      this.content.style.opacity = '0';
      this.content.style.transform = 'translateY(20px)';

      // 卷轴收起后添加盖章动画
      setTimeout(() => {
        this.addStampAnimation();
      }, 500);

      this.button.textContent = '展开卷轴';
      this.isOpen = false;
    }, 500);
  }

  animateText() {
    const paragraphs = this.content.querySelectorAll('p');
    paragraphs.forEach((paragraph, index) => {
      paragraph.style.opacity = '0';
      paragraph.style.transform = 'translateX(20px)';
      paragraph.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

      setTimeout(() => {
        paragraph.style.opacity = '1';
        paragraph.style.transform = 'translateX(0)';
      }, index * 100 + 500);
    });
  }

  fadeOutText() {
    const paragraphs = this.content.querySelectorAll('p');
    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        paragraph.style.opacity = '0';
        paragraph.style.transform = 'translateX(-20px)';
      }, (paragraphs.length - index - 1) * 50);
    });
  }

  addStampAnimation() {
    // 创建印章元素
    const stamp = document.createElement('div');
    stamp.style.position = 'absolute';
    stamp.style.top = '20px';
    stamp.style.right = '40px';
    stamp.style.width = '80px';
    stamp.style.height = '80px';
    stamp.style.border = '2px solid #C0392B';
    stamp.style.borderRadius = '4px';
    stamp.style.display = 'flex';
    stamp.style.alignItems = 'center';
    stamp.style.justifyContent = 'center';
    stamp.style.fontFamily = 'var(--font-title)';
    stamp.style.color = '#C0392B';
    stamp.style.fontSize = '1.2rem';
    stamp.style.transform = 'rotate(15deg) scale(0)';
    stamp.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    stamp.textContent = '汪氏家训';

    this.container.appendChild(stamp);

    // 盖章动画
    setTimeout(() => {
      stamp.style.transform = 'rotate(15deg) scale(1)';
    }, 100);

    // 移除印章
    setTimeout(() => {
      stamp.style.transform = 'rotate(15deg) scale(0)';
      setTimeout(() => {
        stamp.remove();
      }, 500);
    }, 2000);
  }

  addReadButtons() {
    const ruleTitles = this.content.querySelectorAll('.rule-title');
    ruleTitles.forEach((title, index) => {
      const button = document.createElement('button');
      button.className = 'read-button';
      button.style.position = 'absolute';
      button.style.right = '20px';
      button.style.top = '50%';
      button.style.transform = 'translateY(-50%)';
      button.style.width = '30px';
      button.style.height = '30px';
      button.style.background = 'var(--primary-redwood)';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.borderRadius = '50%';
      button.style.cursor = 'pointer';
      button.style.display = 'flex';
      button.style.alignItems = 'center';
      button.style.justifyContent = 'center';
      button.style.fontSize = '12px';
      button.style.transition = 'all 0.3s ease';
      button.innerHTML = '🔊';
      button.title = '诵读族规';

      // 找到对应的段落容器
      const parent = title.parentElement;
      parent.style.position = 'relative';
      parent.appendChild(button);

      button.addEventListener('click', () => {
        this.readRule(index + 1);
      });

      button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-50%) scale(1.1)';
        button.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.3)';
      });

      button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(-50%) scale(1)';
        button.style.boxShadow = 'none';
      });
    });
  }

  addAgreeFunctionality() {
    const paragraphs = this.content.querySelectorAll('p:not(.rule-title)');
    paragraphs.forEach((paragraph, index) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'agree-checkbox';
      checkbox.style.position = 'absolute';
      checkbox.style.left = '-30px';
      checkbox.style.top = '50%';
      checkbox.style.transform = 'translateY(-50%)';
      checkbox.style.width = '16px';
      checkbox.style.height = '16px';
      checkbox.style.cursor = 'pointer';

      const parent = paragraph.parentElement;
      parent.style.position = 'relative';
      parent.style.paddingLeft = '30px';
      parent.insertBefore(checkbox, paragraph);

      checkbox.addEventListener('change', () => {
        this.updateAgreedRules();
      });
    });

    // 添加生成个性化家训按钮
    this.addGenerateButton();
  }

  addGenerateButton() {
    const button = document.createElement('button');
    button.className = 'generate-button';
    button.style.display = 'block';
    button.style.margin = '30px auto 0';
    button.style.padding = '10px 20px';
    button.style.background = 'var(--secondary-blue)';
    button.style.color = 'white';
    button.style.border = '1px solid var(--border-ink)';
    button.style.borderRadius = '8px';
    button.style.fontFamily = 'var(--font-title)';
    button.style.cursor = 'pointer';
    button.style.transition = 'all 0.3s ease';
    button.textContent = '生成个性化家训卷轴';

    this.content.appendChild(button);

    button.addEventListener('click', () => {
      this.generatePersonalizedScroll();
    });

    button.addEventListener('mouseover', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 4px 12px rgba(74, 111, 140, 0.3)';
    });

    button.addEventListener('mouseout', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = 'none';
    });
  }

  readRule(ruleNumber) {
    // 播放徽州方言诵读族规
    this.playSound(`rule-${ruleNumber}.mp3`);

    // 高亮对应族规文字
    const ruleTitles = this.content.querySelectorAll('.rule-title');
    const targetTitle = ruleTitles[ruleNumber - 1];
    if (targetTitle) {
      const parent = targetTitle.parentElement;
      const paragraphs = parent.querySelectorAll('p');
      paragraphs.forEach(p => {
        p.style.color = 'var(--secondary-yellow)';
        p.style.transition = 'color 0.3s ease';
      });

      // 3秒后恢复颜色
      setTimeout(() => {
        paragraphs.forEach(p => {
          p.style.color = 'var(--primary-text)';
        });
      }, 3000);
    }
  }

  updateAgreedRules() {
    const checkboxes = document.querySelectorAll('.agree-checkbox');
    const agreedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    console.log(`已认同 ${agreedCount} 条族规`);
  }

  generatePersonalizedScroll() {
    const checkboxes = document.querySelectorAll('.agree-checkbox');
    const agreedRules = [];

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const parent = checkbox.parentElement;
        const ruleTitle = parent.querySelector('.rule-title');
        const ruleContent = parent.querySelector('p:not(.rule-title)');
        if (ruleTitle && ruleContent) {
          agreedRules.push({
            title: ruleTitle.textContent,
            content: ruleContent.textContent
          });
        }
      }
    });

    if (agreedRules.length === 0) {
      alert('请至少认同一条族规');
      return;
    }

    // 创建个性化家训卷轴
    this.createPersonalizedScroll(agreedRules);
  }

  createPersonalizedScroll(rules) {
    // 创建弹窗
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';
    modal.style.animation = 'fadeIn 0.5s ease';

    // 卷轴内容
    const scroll = document.createElement('div');
    scroll.style.background = '#fdfaf0';
    scroll.style.borderLeft = '15px solid #8c6b48';
    scroll.style.borderRight = '15px solid #8c6b48';
    scroll.style.padding = '50px';
    scroll.style.maxWidth = '800px';
    scroll.style.maxHeight = '80vh';
    scroll.style.overflowY = 'auto';
    scroll.style.position = 'relative';
    scroll.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';

    // 卷轴标题
    const title = document.createElement('h3');
    title.style.fontFamily = 'var(--font-title)';
    title.style.color = 'var(--primary-redwood)';
    title.style.textAlign = 'center';
    title.style.marginBottom = '30px';
    title.style.fontSize = '1.8rem';
    title.textContent = '个性化家训卷轴';

    // 印章装饰
    const stamp = document.createElement('div');
    stamp.style.position = 'absolute';
    stamp.style.top = '20px';
    stamp.style.right = '40px';
    stamp.style.width = '100px';
    stamp.style.height = '100px';
    stamp.style.border = '2px solid #C0392B';
    stamp.style.borderRadius = '4px';
    stamp.style.display = 'flex';
    stamp.style.alignItems = 'center';
    stamp.style.justifyContent = 'center';
    stamp.style.fontFamily = 'var(--font-title)';
    stamp.style.color = '#C0392B';
    stamp.style.fontSize = '1.5rem';
    stamp.style.transform = 'rotate(15deg)';
    stamp.textContent = '汪氏家训';

    // 族规内容
    const content = document.createElement('div');
    content.style.columnCount = '2';
    content.style.columnRule = '1px solid rgba(212, 177, 106, 0.15)';
    content.style.fontFamily = 'var(--font-note)';
    content.style.lineHeight = '2.2';
    content.style.textAlign = 'justify';
    content.style.color = 'var(--primary-text)';

    rules.forEach(rule => {
      const ruleDiv = document.createElement('div');
      ruleDiv.style.marginBottom = '30px';
      ruleDiv.innerHTML = `
        <div style="font-family: var(--font-title); color: var(--primary-redwood); font-size: 1.2rem; margin-bottom: 12px; text-align: center; font-weight: 700;">${rule.title}</div>
        <div style="text-indent: 2em;">${rule.content}</div>
      `;
      content.appendChild(ruleDiv);
    });

    // 底部装饰
    const footer = document.createElement('div');
    footer.style.marginTop = '40px';
    footer.style.textAlign = 'center';
    footer.style.fontFamily = 'var(--font-note)';
    footer.style.color = 'var(--secondary-gray)';
    footer.style.fontSize = '0.9rem';
    footer.textContent = '大清乾隆年间 汪氏宗族立';

    // 关闭按钮
    const closeButton = document.createElement('button');
    closeButton.style.display = 'block';
    closeButton.style.margin = '20px auto 0';
    closeButton.style.padding = '10px 20px';
    closeButton.style.background = 'var(--primary-redwood)';
    closeButton.style.color = 'white';
    closeButton.style.border = '1px solid var(--border-ink)';
    closeButton.style.borderRadius = '8px';
    closeButton.style.fontFamily = 'var(--font-title)';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'all 0.3s ease';
    closeButton.textContent = '关闭';

    closeButton.addEventListener('click', () => {
      modal.remove();
    });

    // 截图提示
    const tip = document.createElement('div');
    tip.style.marginTop = '10px';
    tip.style.textAlign = 'center';
    tip.style.fontFamily = 'var(--font-note)';
    tip.style.color = 'var(--secondary-gray)';
    tip.style.fontSize = '0.8rem';
    tip.textContent = '提示：可使用截图工具保存此个性化家训';

    // 组装卷轴
    scroll.appendChild(title);
    scroll.appendChild(stamp);
    scroll.appendChild(content);
    scroll.appendChild(footer);
    scroll.appendChild(closeButton);
    scroll.appendChild(tip);
    modal.appendChild(scroll);
    document.body.appendChild(modal);

    // 点击背景关闭
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  playSound(soundName) {
    // 模拟音频播放功能
    console.log(`播放${soundName}音效`);
    // 添加播放动画效果
    const buttons = document.querySelectorAll('.read-button');
    buttons.forEach(button => {
      if (button.innerHTML === '🔊') {
        button.innerHTML = '▶';
        setTimeout(() => {
          button.innerHTML = '🔊';
        }, 2000);
      }
    });
    // 显示播放提示
    this.showPlayTip();
  }

  showPlayTip() {
    // 创建提示元素
    const tip = document.createElement('div');
    tip.style.position = 'fixed';
    tip.style.top = '50%';
    tip.style.left = '50%';
    tip.style.transform = 'translate(-50%, -50%)';
    tip.style.background = 'rgba(0, 0, 0, 0.8)';
    tip.style.color = 'white';
    tip.style.padding = '15px 20px';
    tip.style.borderRadius = '8px';
    tip.style.fontFamily = 'var(--font-title)';
    tip.style.fontSize = '1rem';
    tip.style.zIndex = '1000';
    tip.style.animation = 'fadeIn 0.3s ease';
    tip.textContent = '族规诵读中...';

    document.body.appendChild(tip);

    // 2秒后移除提示
    setTimeout(() => {
      tip.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        tip.remove();
      }, 300);
    }, 2000);
  }
}

// 初始化家风族规卷轴模块
document.addEventListener('DOMContentLoaded', function() {
  const scrollBox = document.querySelector('.scroll-box');
  if (scrollBox) {
    const familyRulesScroll = new FamilyRulesScroll(scrollBox);
    familyRulesScroll.init();
  }
});

// 全局函数，用于卷轴展开/收起
function toggleScroll() {
  const scrollBox = document.querySelector('.scroll-box');
  if (scrollBox) {
    const familyRulesScroll = new FamilyRulesScroll(scrollBox);
    familyRulesScroll.toggleScroll();
  }
}