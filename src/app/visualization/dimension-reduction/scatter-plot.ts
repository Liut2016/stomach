import { carsTSNE } from '../shared/cars';
export class ScatterPlot {
    target: HTMLElement;
    svgWidth = 800;
    svgHeight = 500;
    margin = {
        top: 60,
        bottom: 80,
        left: 80,
        right: 150
    };
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    constructor(target: HTMLElement) {
        this.target = target;
    }
    render() {
    const carsTSNEMatrix = [];
    const values = carsTSNE.split(',');
        for (let index = 0; index < values.length / 2; index++) {
          carsTSNEMatrix.push(index, [+(values[index * 2]), +values[index * 2 + 1]]);
        }
    console.log(carsTSNEMatrix);

    const  xMax = d3.max(carsTSNEMatrix, (d) => {
        return d[1]; });
    const  yMax = d3.max(carsTSNEMatrix, (d) => {
        return d[2]; });
    const  xMin = d3.min(carsTSNEMatrix, (d) => {
        return d[1]; });
    const  yMin = d3.min(carsTSNEMatrix, (d) => {
        return d[2]; });
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
        .attr('class' , 'axis')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(xAxis);
    const gY = svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + 0 + ',' + 0 + ')')
        .call(yAxis);
    // append some dummy data
    const circles = svg
        .selectAll('circle')
        .data(carsTSNEMatrix)
        .enter()
        .append('circle')
        .attr('cx', d => {
            return xAxisScale(d[1]); })
        .attr('cy', d => {
            return yAxisScale(d[2]); })
        .attr('r', 3.5);

   const lasso = d3.lasso()
        .closePathSelect(true)
        .closePathDistance(100)
        .items(circles)
        .targetArea(svg)
        .on('start', lasso_start)
        .on('draw', lasso_draw)
        .on('end', lasso_end);
svg.call(lasso);

function lasso_start() {
    lasso.items()
        .attr('r', 3.5) // reset size
        .classed('not_possible', true)
        .classed('selected', false);
}

function lasso_draw() {
    // Style the possible dots
    lasso.possibleItems()
        .classed('not_possible', false)
        .classed('possible', true);

    // Style the not possible dot
    lasso.notPossibleItems()
        .classed('not_possible', true)
        .classed('possible', false);
}

function lasso_end() {
    // Reset the color of all dots
    lasso.items()
        .classed('not_possible', false)
        .classed('possible' , false);

    // Style the selected dots
    lasso.selectedItems()
        .classed('selected', true)
        .attr('r', 7);

    // Reset the style of the not selected dots
    lasso.notSelectedItems()
        .attr('r', 3.5);
    const d_brushed =  d3.selectAll('.selected').data();
    console.log(d_brushed);

}
    }
}
