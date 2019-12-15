const bubble = ({ legends, series }: any) => ({
  legend: {
    type: 'scroll',
    // orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    selected: legends.reduce(
      (o: any, name: string) => ({ ...o, [name]: false }),
      {}
    ),
    data: legends
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },

  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    // data: legends,
    scale: true
  },
  series
});

export default bubble;
