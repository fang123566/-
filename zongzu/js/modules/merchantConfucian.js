// 贾而好儒模块 - 墨块演化图表

// 确保DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 检查echarts是否加载
  if (typeof echarts === 'undefined') {
    console.warn('ECharts library not loaded');
    return;
  }

  // 初始化徽商发展趋势图表
  const merchantChartElement = document.getElementById('merchantChart');
  if (merchantChartElement) {
    const merchantChart = echarts.init(merchantChartElement);
    const merchantOption = {
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

    // 添加chart-visible类使图表显示
    merchantChartElement.classList.add('chart-visible');

    // 响应式调整
    window.addEventListener('resize', function() {
      merchantChart.resize();
    });
  }

  // 初始化徽商经营范围分布图表
  const merchantDistributionChartElement = document.getElementById('merchantDistributionChart');
  if (merchantDistributionChartElement) {
    const merchantDistributionChart = echarts.init(merchantDistributionChartElement);
    const merchantDistributionOption = {
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
          name: '经营范围',
          type: 'pie',
          radius: '60%',
          data: [
            { value: 30, name: '盐业' },
            { value: 20, name: '茶叶' },
            { value: 15, name: '木材' },
            { value: 15, name: '典当' },
            { value: 10, name: '丝绸' },
            { value: 10, name: '其他' }
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
              const colors = ['#8B4513', '#A0522D', '#CD853F', '#D2B48C', '#DEB887', '#F5DEB3'];
              return colors[params.dataIndex];
            }
          },
          label: {
            fontFamily: 'Noto Serif SC, serif'
          }
        }
      ]
    };
    merchantDistributionChart.setOption(merchantDistributionOption);

    // 添加chart-visible类使图表显示
    merchantDistributionChartElement.classList.add('chart-visible');

    // 响应式调整
    window.addEventListener('resize', function() {
      merchantDistributionChart.resize();
    });
  }

  // 初始化风水要素重要性图表
  const fengshuiElementsChartElement = document.getElementById('fengshuiElementsChart');
  if (fengshuiElementsChartElement) {
    const fengshuiElementsChart = echarts.init(fengshuiElementsChartElement);
    const fengshuiElementsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          fontFamily: 'Noto Serif SC, serif'
        }
      },
      yAxis: {
        type: 'category',
        data: ['案山', '水口', '道路', '朝向', '环水', '枕山'],
        axisLabel: {
          fontFamily: 'Noto Serif SC, serif'
        }
      },
      series: [
        {
          name: '重要性',
          type: 'bar',
          data: [75, 85, 60, 90, 95, 100],
          itemStyle: {
            color: function(params) {
              const colors = ['#4A6F8C', '#5A7F9C', '#6A8FAF', '#7AA0C2', '#8AB1D5', '#9BC2E8'];
              return colors[params.dataIndex];
            }
          },
          label: {
            show: true,
            position: 'right',
            fontFamily: 'Noto Serif SC, serif'
          }
        }
      ]
    };
    fengshuiElementsChart.setOption(fengshuiElementsOption);

    // 添加chart-visible类使图表显示
    fengshuiElementsChartElement.classList.add('chart-visible');

    // 响应式调整
    window.addEventListener('resize', function() {
      fengshuiElementsChart.resize();
    });
  }

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
});
