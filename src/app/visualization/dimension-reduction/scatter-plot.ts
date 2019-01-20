import { carsTSNE } from '../shared/cars';
export class ScatterPlot {

    target: HTMLElement;
    pointsMatrix;
    dimension;
 /*    data = new Array(100).fill(null).map(m => [Math.random(), Math.random()]); */
    svgWidth = 380;
    svgHeight = 350;
    margin = {
        top: 10,
        bottom: 20,
        left: 25,
        right: 10
    };
    lasso = d3.lasso();
    svg;
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    chartheight = this.height + 10;
    Initiated = false;
    constructor(target: HTMLElement, pointsMatrix, dimension ) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
        this.dimension = dimension;
    }
    setData(newMatrix) {
        this.pointsMatrix = newMatrix;
    }
    refresh() {
        d3.select(this.target).select('svg').remove();
        this.render();
    }
    render() {
        const pointsMatrix = this.pointsMatrix;
        // console.log(pointsMatrix);
        const dimension = this.dimension;
        const zoom = d3.zoom()
            .on('zoom', zoomFunction);
        this.svg = d3.select(this.target).append('svg')
            .attr('width', this.svgWidth)
            .attr('height', this.svgHeight)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        const rect = this.svg.append('rect')
            .attr('class', 'zoom')
            .attr('width', this.width)
            .attr('height', this.height)
            ;
        const objects = this.svg.append('svg')
            .classed('objects', true)
            .attr('width', this.width)
            .attr('height', this.height)
            ;
        const xAxisScale = d3.scaleLinear()
            .domain([0, 1])
            .range([0, this.width]);
        const yAxisScale = d3.scaleLinear()
            .domain([0, 1])
            .range([this.height, 0]);
        // create axis objects
        const xAxis = d3.axisBottom(xAxisScale);
        const yAxis = d3.axisLeft(yAxisScale);
        const gX = this.svg.append('g')
            .attr('class' , 'axis1')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(xAxis);
        const gY = this.svg.append('g')
            .attr('class', 'axis2')
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')')
            .call(yAxis);
        const circles = objects
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
            .targetArea(this.svg)
            .on('start', () => this.lassoStart())
            .on('draw', () => this.lassoDraw())
            .on('end', () => this.loassEnd());

        this.svg.on ('mousedown', () => {
           if (d3.event.ctrlKey) {
               this.svg.call(zoom);
            } else {
                this.svg.call(this.lasso);
            }
        });
        this.svg.call(this.lasso);
        this.svg.call(zoom);

        const text = objects.selectAll('.dimText')
            .data(pointsMatrix)
            .enter()
            .append('text')
            .text(function(d, i) {
                return dimension[i];
            })
            .attr('x', d => {
                return xAxisScale(d[0]) + 15; })
            .attr('y', d => {
                return yAxisScale(d[1]) + 10; })
            .attr('fill', 'royal');

       function zoomFunction() {
           // console.log(event.type);
            const new_xScale = d3.event.transform.rescaleX(xAxisScale);
            const new_yScale = d3.event.transform.rescaleY(yAxisScale);
            // console.log(d3.event.transform);
            // update axes
            gX.call(xAxis.scale(new_xScale));
            gY.call(yAxis.scale(new_yScale));
            // update circle
            circles.attr('transform', d3.event.transform);
            text.attr('transform', d3.event.transform);
}
    }

    bind(dataProjConf, dimProjConf, service,  isDataProjection) {
        this.lasso
        .on('start', () => this.lassoStart())
        .on('draw', () => this.lassoDraw())
        .on('end', () => {
            this.loassEnd();
            const selectedPoints = this.lasso.selectedItems().data();
            const itemIds = [];
            // console.log(selectedPoints);
            selectedPoints.forEach(n => itemIds.push(n[2]));
            if (isDataProjection === 1) {
                dataProjConf.indexes = itemIds;
                dimProjConf.indexes = itemIds;
                service.setSelectedData(itemIds);
            } else {
                dataProjConf.dimensions = itemIds;
                dimProjConf.dimensions = itemIds;
                service.setSelectedDims(service.getDisArr(selectedPoints));
            }
            // console.log(dataProjConf, dimProjConf);
        });
    }

    loassEnd() {
        /* if (d3.event.sourceEvent.which === 3) { */
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
        /* if (this.Initiated) { */
        this.lasso.possibleItems()
            .classed('not_possible', false)
            .classed('possible', true);

        // Style the not possible dot
        this.lasso.notPossibleItems()
            .classed('not_possible', true)
            .classed('possible', false);
}
    lassoStart() {
      /* if (d3.event.sourceEvent.which === 3) { */
        this.Initiated = true;
        // console.log(this.Initiated);
        this.lasso.items()
            .attr('r', 3.5) // reset size
            .classed('not_possible', true)
            .classed('selected', false);
    }
}
