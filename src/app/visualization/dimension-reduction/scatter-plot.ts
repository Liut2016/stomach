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
    svg;
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    constructor(target: HTMLElement, pointsMatrix) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
    }
    setData(newMatrix) {
        this.pointsMatrix = newMatrix;
    }
    refresh() {
        this.svg.remove();
        this.render();
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

        this.svg = d3.select(this.target).append('svg')
        .attr('width', this.svgWidth)
        .attr('height', this.svgHeight)
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        const svg = this.svg;
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
            .attr('r', 3.5);


        this.lasso.closePathSelect(true)
        .closePathDistance(100)
        .items(circles)
        .targetArea(svg)
        .on('start', () => this.lassoStart())
        .on('draw', () => this.lassoDraw())
        .on('end', () => this.loassEnd());

        svg.call(this.lasso);
    }

    bind(dataProjConf, dimProjConf, isDataProjection) {
        this.lasso
        .on('start', () => this.lassoStart())
        .on('draw', () => this.lassoDraw())
        .on('end', () => {
            this.loassEnd();
            const selectedPoints = this.lasso.selectedItems().data();
            const itemIds = [];
            selectedPoints.forEach(n => itemIds.push(n[2]));
            if (isDataProjection === 1) {
                dataProjConf.indexes = itemIds;
                dimProjConf.indexes = itemIds;
            } else {
                dataProjConf.dimensions = itemIds;
                dimProjConf.dimensions = itemIds;
            }
            console.log(dataProjConf, dimProjConf);
        });
    }

    loassEnd() {
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
    }

    lassoDraw() {
        // Style the possible dots
        this.lasso.possibleItems()
            .classed('not_possible', false)
            .classed('possible', true);

        // Style the not possible dot
        this.lasso.notPossibleItems()
            .classed('not_possible', true)
            .classed('possible', false);
    }

    lassoStart() {
        this.lasso.items()
            .attr('r', 3.5) // reset size
            .classed('not_possible', true)
            .classed('selected', false);
    }
}
