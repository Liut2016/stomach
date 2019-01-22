export class StackedBar {
    target: HTMLElement;
    pointsMatrix1;
    pointsMatrix2;
    flag;
    svgWidth = 900;
    svgHeight = 610;
    margin = {
        top: 10,
        bottom: 110,
        left: 40,
        right: 100
    };
    stack = d3.stack();
    constructor(target: HTMLElement, pointsMatrix1, pointsMatrix2, flag ) {
        this.target = target;
        this.pointsMatrix1 = pointsMatrix1;
        this.pointsMatrix2 = pointsMatrix2;
        this.flag = flag;
    }
    render() {
        const med = this.flag;
        const width = this.svgWidth - this.margin.left - this.margin.right;
        const height = this.svgHeight - this.margin.top - this.margin.bottom;
        const data = this.buildArray(this.pointsMatrix2, this.pointsMatrix1);
        const rows = this.getSlice(this.pointsMatrix2);
        const cols = this.getSlice(this.pointsMatrix1);
        const dataset = cols.map(function(temp, i) {
            return data.map(function(d, j) {
              function SetStack(ele , number) {
                let count = 0;
                  if (number === 0) {
                    return 0;
                  } else {
                    for (let flag = 0; flag < number; flag++) {
                        count = count + d[flag];
                    }
                    return count;
                  }
              }
              return {x: rows[j], y: d[i], y0: SetStack( data, i)};
            });
          });
        const svg = d3.select(this.target).append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
          const x = d3.scaleBand()
            .domain(dataset[0].map(function(d) { return d.x; }))
            .rangeRound([0, width])
            .padding(0.1);
          const y = d3.scaleLinear()
            .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function( ele) { return ele.y0 + ele.y; });  })])
            .range([height, 0]);
          const colors = d3.schemeCategory20c.slice(0, cols.length);
          // Define and draw axes
          const xAxis = d3.axisBottom(x);
          const yAxis = d3.axisLeft(y);
          svg.append('g')
              .attr('class' , 'axis1')
              .attr('transform', 'translate(0,' + height + ')')
              .call(xAxis)
              .selectAll('text')
              .style('text-anchor', 'end')
              .attr('dx', '-.8em')
              .attr('dy', '.15em')
              .attr('transform', 'rotate(-65)');
          svg.append('g')
              .attr('class', 'axis2')
              .attr('transform', 'translate(' + 0 + ',' + 0 + ')')
              .call(yAxis);
          svg.append('text')
              .attr('x', width + 10)
              .attr('y', height)
              .style('fill', 'black')
              .text('主诊断');
          svg.append('text')
              .attr('transform', 'rotate(-90)')
              .attr('y', 6)
              .attr('dy', '.71em')
              .style('text-anchor', 'end')
              .style('fill', 'black')
              .text('患者人数');
          // Create groups for each series, rects for each segment
          const groups = svg.selectAll('g.cost')
            .data(dataset)
            .enter().append('g')
            .attr('class', 'cost')
            .style('fill', function(d, i) {return colors[i]; });
          const rect = groups.selectAll('rect')
            .data(function(d) { return d; })
            .enter()
            .append('rect')
            .attr('x', function(d) { return x(d.x); })
            .attr('y', function(d) { return y(d.y0 + d.y); })
            .attr('height', function(d) { return y(d.y0) - y(d.y0 + d.y); })
            .attr('width', x.bandwidth())
            .on('mouseover', function() { tooltip.style('display', null); })
            .on('mouseout', function() { tooltip.style('display', 'none'); })
            .on('mousemove', function(d) {
                const xPosition = d3.mouse(this)[0] - 15;
                const yPosition = d3.mouse(this)[1] - 25;
                tooltip.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')');
                tooltip.select('text').text(d.y);
            });
          // Draw legend
          const legend = svg.selectAll('.legend')
            .data(colors)
            .enter().append('g')
            .attr('class', 'legend')
            .attr('transform', function(d, i) { return 'translate(0,' + i * 20 + ')'; });
          legend.append('rect')
            .attr('x', width)
            .attr('width', 18)
            .attr('height', 18)
            .style('fill', function(d, i) {return colors[i]; });
          legend.append('text')
            .attr('x', width + 23)
            .attr('y', 9)
            .attr('dy', '.35em')
            .style('text-anchor', 'start')
            .text(function(d, i) {
              if (med === 0) {
              return cols[i] + '天';
            } else {
              return cols[i] + '人';
            }});
            const tooltip = svg.append('g')
              .attr('class', 'tooltip')
              .style('display', 'none');
            tooltip.append('rect')
              .attr('width', 30)
              .attr('height', 20)
              .attr('fill', 'white')
              .style('opacity', 0.5);
            tooltip.append('text')
              .attr('x', 15)
              .attr('dy', '1.2em')
              .style('text-anchor', 'middle')
              .attr('font-size', '12px')
              .attr('font-weight', 'bold');
            }

 getSlice(data) {
    const newArr = Array.from(new Set(data));
    return newArr;
 }

 buildArray( data1, data2) {
     const rows = this.getSlice(data1);
     const cols = this.getSlice(data2);
     const result = new Array(rows.length);
     let count = 0;
     for (let i = 0; i < rows.length; i++) {
        result[i] = new Array(cols.length);
     }
     for (let i = 0; i < rows.length; i++ ) {
          for (let j = 0; j < cols.length; j++) {
              for (let k = 0; k < data1.length ; k++) {
                  if (data1[k] === rows[i] && data2[k] === cols[j] ) {
                        count ++;
                  }
              }
              result[i][j] = count;
              count = 0;
          }
     }
return result;
 }
}
