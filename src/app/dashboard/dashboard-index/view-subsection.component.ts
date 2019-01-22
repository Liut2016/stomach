export class ViewSubsection {
    target: HTMLElement;
    pointsMatrix;
    svgWidth = 580;
    svgHeight = 350;
    margin = {
        top: 5,
        bottom: 50,
        left: 50,
        right: 100
    };
    svg;
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    constructor(target: HTMLElement, pointsMatrix ) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
    }
    setData(newMatrix) {
        this.pointsMatrix = newMatrix;
    }
    render() {
        const data = this.pointsMatrix;
        this.svg = d3.select(this.target).append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        const xAxisScale = d3.scaleLinear()
            .rangeRound([0, this.width])
            .domain([0 , 100]);
        const yAxisScale = d3.scaleLinear()
            .rangeRound([this.height, 0])
            .domain([0, d3.max(data, d => d.y)]);
        // create axis objects
        const xAxis = d3.axisBottom(xAxisScale);
        const yAxis = d3.axisLeft(yAxisScale);
        const gX = this.svg.append('g')
            .attr('class' , 'axis1')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(xAxis);
        this.svg.append('text')
            .attr('x', this.width)
            .attr('y', this.height + 40)
            .style('text-anchor', 'end')
            .attr('class', 'textXclass')
            .text('年龄');
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
        this.svg.selectAll('bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => xAxisScale(d.x))
            .attr('y', (d) => yAxisScale(d.y))
            .attr('width', 40)
            .attr('height', (d) => this.height - yAxisScale(d.y))
            .on('mouseover', function() { tooltip.style('display', null); })
            .on('mouseout', function() { tooltip.style('display', 'none'); })
            .on('mousemove', function(d) {
                const xPosition = d3.mouse(this)[0] - 15;
                const yPosition = d3.mouse(this)[1] - 25;
                tooltip.attr('transform', 'translate(' + xPosition + ',' + yPosition + ')');
                tooltip.select('text').text(d.y);
            });
        const tooltip = this.svg.append('g')
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

}
