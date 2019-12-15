const pie = (data: any) => ({
  title: {
    text: 'Pie Chart',
    // subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: `Insights <br/>{b} (${data.tooltip || ''}) : {c} ({d}%)`
  },
  toolbox: {
    feature: {
      //   dataZoom: {
      //     yAxisIndex: 'none'
      //   }
      //   restore: {}
      saveAsImage: {
        title: ' '
      }
    }
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    data: data.legendData,
    selected: data.selected
  },
  series: [
    {
      name: 'Pie Chart',
      type: 'pie',
      radius: '55%',
      center: ['40%', '50%'],
      data: data.seriesData,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      roseType: data.roseType,
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: () => Math.random() * 200
    }
  ]
});

export default pie;
