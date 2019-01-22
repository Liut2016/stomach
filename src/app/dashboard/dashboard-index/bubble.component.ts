export class Bubble {
    target: HTMLElement;
    pointsMatrix;
    flag;
    svgWidth = 580;
    svgHeight = 350;
    margin = {
        top: 5,
        bottom: 50,
        left: 50,
        right: 100
    };
    svg;
    tooltip;
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    constructor(target: HTMLElement, pointsMatrix) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
    }
    setData(newMatrix) {
        this.pointsMatrix = newMatrix;
    }
    render() {
        console.log(this.SortXAxis(this.pointsMatrix));
        this.svg = d3.select(this.target).append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        const xAxisScale = d3.scaleLinear()
            .domain([0, d3.max(this.pointsMatrix.map(d => d.x))])
            .range([0, this.width]);
        const yAxisScale = d3.scaleLinear()
            .rangeRound([this.height, 0])
            .domain([0, d3.max(this.pointsMatrix, d => d.y)]);
        // create axis objects
        const xAxis = d3.axisBottom(xAxisScale);
        const yAxis = d3.axisLeft(yAxisScale);
        const gX = this.svg.append('g')
            .attr('class' , 'axis1')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(xAxis);
        this.svg.append('text')
            .attr('x', this.width + 20)
            .attr('y', this.height + 10)
            .attr('class', 'textXclass')
            .text('住院天数');
        const gY = this.svg.append('g')
            .attr('class', 'axis2')
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')')
            .call(yAxis);
        this.svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .attr('class', 'textYclass')
            .text('患者人数');
        const valueline = d3.line()
            .x( d => {
                return xAxisScale(d.x); })
            .y( d => {
                return yAxisScale(d.y);
            });
        this.svg.append('path')
            .data([this.SortXAxis(this.pointsMatrix)])
            .attr('class', 'line')
            .attr('d', valueline);
        const circles = this.svg
            .selectAll('circle')
            .data(this.pointsMatrix)
            .enter()
            .append('circle')
            .attr('class', 'non_brushed')
            .attr('cx', (d) => {
                return xAxisScale(d.x); })
            .attr('cy', (d) => {
                return yAxisScale(d.y); })
            .attr('r', (d) => {
                return 3;
            })
            .attr('fill', 'steelblue' )
            .on('mouseover', function() { tooltip.style('display', null); })
            .on('mouseout', function() { tooltip.style('display', 'none'); })
            .on('mousemove', function(d) {
                const xPosition = d3.mouse(this)[0] - 15;
                const yPosition = d3.mouse(this)[1] - 25;
                tooltip.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')');
                tooltip.select('text').text(d.x + '天' + ': ' + d.y +  '人');
            });
         const tooltip = this.svg.append('g')
            .attr('class', 'tooltip')
            .style('display', 'none');
          tooltip.append('circle')
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

    SortXAxis(data) {
        for (let i = 0 ; i < data.length; i ++ ) {
               for (let j = i ; j < data.length ; j ++) {
                   if ( data[j].x < data[i].x) {
                   const temp = data[i];
                   data [i] = data [j];
                   data [j] = temp;
               }
        }
    }
    return data;
}
}
