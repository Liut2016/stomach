export class Pie {
    pointMarix;
constructor (pointMarix) {
    this.pointMarix = pointMarix;
}
     /**
      * render
      */
     public render() {
       const pointMarix = this.pointMarix;
       console.log(pointMarix);
       const chart = {
            type: 'PieChart',
              columnNames: ['Task', 'Hours per Day'],
              data: pointMarix,
            options: {
              animation: {
                duration: 250,
                easing: 'ease-in-out',
                startup: true
              }
            }
          };
        return chart;
     }
}

