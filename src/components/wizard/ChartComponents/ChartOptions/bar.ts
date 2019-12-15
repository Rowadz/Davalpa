const labelOption = {
  normal: {
    show: true,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {
        textBorderColor: '#fff'
      }
    }
  }
};
const bar = ({ legends, xAxis, series, selected }: any) => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    type: 'scroll',
    data: legends,
    selected
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      // mark: { show: true },
      // dataView: { show: true, readOnly: false },
      // magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
      // restore: { show: true },
      saveAsImage: { show: true, title: ' ' }
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: xAxis
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series
});

export default bar;
