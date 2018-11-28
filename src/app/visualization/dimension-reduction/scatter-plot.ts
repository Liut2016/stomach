import { carsTSNE } from '../shared/cars';
export class ScatterPlot {

    target: HTMLElement;
    pointsMatrix;
 /*    data = new Array(100).fill(null).map(m => [Math.random(), Math.random()]); */
    svgWidth = 800;
    svgHeight = 500;
    margin = {
        top: 60,
        bottom: 80,
        left: 80,
        right: 150
    };
    lasso = d3.lasso();
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
        const pointsMatrix = this.pointsMatrix;
        const  xMax = d3.max(pointsMatrix, (d) => {
            return d[0]; });
        const  yMax = d3.max(pointsMatrix, (d) => {
            return d[1]; });
        const  xMin = d3.min(pointsMatrix, (d) => {
            return d[0]; });
        const  yMin = d3.min(pointsMatrix, (d) => {
            return d[1]; });
            console.log(xMax, yMax, xMin, yMin);

        const svg = d3.select(this.target)
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
            ;
        const xAxisScale = d3.scaleLinear()
            .domain([xMin, xMax])
            .range([0, this.width]);
        const yAxisScale = d3.scaleLinear()
            .domain([yMin, yMax])
            .range([this.height, 0]);
        // create axis objects
        const xAxis = d3.axisBottom(xAxisScale);
        const yAxis = d3.axisLeft(yAxisScale);
        const gX = svg.append('g')
            .attr('class' , 'axis1')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(xAxis);
        const gY = svg.append('g')
            .attr('class', 'axis2')
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')')
            .call(yAxis);
        // append some dummy data
        const circles = svg
            .selectAll('circle')
            .data(pointsMatrix)
            .enter()
            .append('circle')
            .attr('cx', d => {
                return xAxisScale(d[0]); })
            .attr('cy', d => {
                return yAxisScale(d[1]); })
            .attr('r', 3.5)
            ;


            const lasso_start = () => {
                this.lasso.items()
                    .attr('r', 3.5) // reset size
                    .classed('not_possible', true)
                    .classed('selected', false);
            };

            const lasso_draw = () => {
                // Style the possible dots
                this.lasso.possibleItems()
                    .classed('not_possible', false)
                    .classed('possible', true);

                // Style the not possible dot
                this.lasso.notPossibleItems()
                    .classed('not_possible', true)
                    .classed('possible', false);
            };

            const lasso_end = () => {
                // Reset the color of all dots
                this.lasso.items()
                    .classed('not_possible', false)
                    .classed('possible' , false);

                // Style the selected dots
                this.lasso.selectedItems()
                    .classed('selected', true)
                    .attr('r', 7);

                // Reset the style of the not selected dots
                this.lasso.notSelectedItems()
                    .attr('r', 3.5);
                const d_brushed =  this.lasso.selectedItems().data();
                console.log(d_brushed);
            };
        this.lasso.closePathSelect(true)
            .closePathDistance(100)
            .items(circles)
            .targetArea(svg)
            .on('start', lasso_start)
            .on('draw', lasso_draw)
            .on('end', lasso_end);

            // this.lasso.on('end', () => {console.log('end~!!!'); });
            svg.call(this.lasso);
    }
}
