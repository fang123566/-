// 贾而好儒模块 - 墨块演化图表

// 确保DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 初始化宗族建设投资比例图表
  const clanChart = echarts.init(document.getElementById('clanChart'));
  const clanOption = {
    title: {
      text: '宗族建设投资比例',
      left: 'center',
      textStyle: {
        fontFamily: 'Ma Shan Zheng, cursive',
        color: '#8B4513'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        fontFamily: 'Noto Serif SC, serif',
        color: '#333333'
      }
    },
    series: [
      {
        name: '投资比例',
        type: 'pie',
        radius: '70%',
        center: ['50%', '60%'],
        data: [
          { value: 35, name: '祠堂建设' },
          { value: 25, name: '族谱修撰' },
          { value: 20, name: '宗族教育' },
          { value: 15, name: '族田购置' },
          { value: 5, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        itemStyle: {
          color: function(params) {
            const colors = ['#8B4513', '#4A6F8C', '#D4B16A', '#707070', '#C0392B'];
            return colors[params.dataIndex];
          }
        }
      }
    ]
  };
  clanChart.setOption(clanOption);

  // 初始化教育投资比例图表
  const educationChart = echarts.init(document.getElementById('educationChart'));
  const educationOption = {
    title: {
      text: '教育投资比例',
      left: 'center',
      textStyle: {
        fontFamily: 'Ma Shan Zheng, cursive',
        color: '#8B4513'
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        fontFamily: 'Noto Serif SC, serif',
        color: '#333333'
      }
    },
    series: [
      {
        name: '投资比例',
        type: 'pie',
        radius: '70%',
        center: ['50%', '60%'],
        data: [
          { value: 40, name: '书院建设' },
          { value: 30, name: '科举资助' },
          { value: 15, name: '藏书购置' },
          { value: 10, name: '教师聘请' },
          { value: 5, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        itemStyle: {
          color: function(params) {
            const colors = ['#4A6F8C', '#D4B16A', '#8B4513', '#707070', '#C0392B'];
            return colors[params.dataIndex];
          }
        }
      }
    ]
  };
  educationChart.setOption(educationOption);

  // 初始化徽商发展趋势图表
  const merchantChart = echarts.init(document.getElementById('merchantChart'));
  const merchantOption = {
    title: {
      text: '徽商发展趋势',
      left: 'center',
      textStyle: {
        fontFamily: 'Ma Shan Zheng, cursive',
        color: '#8B4513'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['商业规模', '文化影响力'],
      textStyle: {
        fontFamily: 'Noto Serif SC, serif',
        color: '#333333'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['唐代', '宋代', '元代', '明代', '清代', '现代'],
      axisLabel: {
        fontFamily: 'Noto Serif SC, serif'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontFamily: 'Noto Serif SC, serif'
      }
    },
    series: [
      {
        name: '商业规模',
        type: 'line',
        stack: 'Total',
        data: [10, 30, 40, 80, 100, 60],
        lineStyle: {
          color: '#8B4513'
        },
        itemStyle: {
          color: '#8B4513'
        }
      },
      {
        name: '文化影响力',
        type: 'line',
        stack: 'Total',
        data: [5, 20, 30, 70, 90, 80],
        lineStyle: {
          color: '#4A6F8C'
        },
        itemStyle: {
          color: '#4A6F8C'
        }
      }
    ]
  };
  merchantChart.setOption(merchantOption);

  // 儒商平衡滑块
  const merchantSlider = document.getElementById('merchantSlider');
  const sliderValue = document.getElementById('sliderValue');

  if (merchantSlider && sliderValue) {
    merchantSlider.addEventListener('input', function() {
      const value = this.value;
      sliderValue.textContent = `平衡状态: ${value}%`;
      
      // 可以根据滑块值动态调整图表
      updateCharts(value);
    });
  }

  // 根据滑块值更新图表
  function updateCharts(value) {
    // 这里可以添加根据滑块值更新图表的逻辑
    // 例如调整饼图的比例或折线图的趋势
  }

  // 添加chart-visible类使图表显示
  document.getElementById('clanChart').classList.add('chart-visible');
  document.getElementById('educationChart').classList.add('chart-visible');
  document.getElementById('merchantChart').classList.add('chart-visible');

  // 响应式调整
  window.addEventListener('resize', function() {
    clanChart.resize();
    educationChart.resize();
    merchantChart.resize();
  });
});
