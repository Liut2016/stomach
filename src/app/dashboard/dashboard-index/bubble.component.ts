export class Bubble {
    target: HTMLElement;
    pointsMatrix;
    flag;
    svgWidth = 580;
    svgHeight = 350;
    margin = {
        top: 5,
        bottom: 100,
        left: 120,
        right: 100
    };
    svg;
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    constructor(target: HTMLElement, pointsMatrix, flag) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
        this.flag = flag;
    }
    setData(newMatrix) {
        this.pointsMatrix = newMatrix;
    }
    render() {
        this.svg = d3.select(this.target).append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        const xAxisScale = d3
            .scaleBand()
            .rangeRound([0, this.width])
            .padding(0.1)
            .domain(this.pointsMatrix.map(d => d.x));
        const yAxisScale = d3.scaleLinear()
            .rangeRound([this.height, 0])
            .domain([0, d3.max(this.pointsMatrix, d => d.y)]);
        // create axis objects
        const xAxis = d3.axisBottom(xAxisScale);
        const yAxis = d3.axisLeft(yAxisScale);
        if (this.flag === 1) {
        const gX = this.svg.append('g')
            .attr('class' , 'axis1')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(xAxis)
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-65)');
        } else {
            const gX = this.svg.append('g')
            .attr('class' , 'axis1')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(xAxis);
        }
        const gY = this.svg.append('g')
            .attr('class', 'axis2')
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')')
            .call(yAxis);
        this.svg.selectAll('bar')
            .data(this.pointsMatrix)
          .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => xAxisScale(d.x))
            .attr('y', (d) => yAxisScale(d.y))
            .attr('width', xAxisScale.bandwidth())
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
