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
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    constructor(target: HTMLElement, pointsMatrix) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
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
            .data(pointsMatrix)
            .enter()
            .append('circle')
            .attr('cx', d => {
                return xAxisScale(d[0]); })
            .attr('cy', d => {
                return yAxisScale(d[1]); })
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
                const d_brushed =  lasso.selectedItems().data();
                console.log(d_brushed);
            }
    }
}

export class ScatterMatrixPlot {
    target: HTMLElement;
    constructor(target: HTMLElement) {
        this.target = target;
        // this.pointsMatrix = pointsMatrix;
    }
    render() {

const width = 960;
const size = 230;
const padding = 10;

var x = d3.scaleLinear()
.range([padding / 2, size - padding / 2]);

var y = d3.scaleLinear()
.range([size - padding / 2, padding / 2]);

var xAxis = d3.axisBottom()
.scale(x)
.ticks(6);

var yAxis = d3.axisLeft()
.scale(y)
.ticks(6);

var color = d3.scaleOrdinal(d3.schemeCategory10);

d3.csv("/assets/data/flower.csv", function(error, data) {
if (error) throw error;

var domainByTrait = {},
  traits = d3.keys(data[0]).filter(function(d) { return d !== "species"; }),
  n = traits.length;

traits.forEach(function(trait) {
domainByTrait[trait] = d3.extent(data, function(d) { return d[trait]; });
});

xAxis.tickSize(size * n);
yAxis.tickSize(-size * n);

var brush = d3.brush()
  .on("start", brushstart)
  .on("brush", brushmove)
  .on("end", brushend)
  .extent([[0,0],[size,size]]);

var svg = d3.select("#drResult")
  .attr("width", size * n + padding)
  .attr("height", size * n + padding)
.append("g")
  .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

svg.selectAll(".x.axis")
  .data(traits)
.enter().append("g")
  .attr("class", "x axis")
  .attr("transform", function(d, i) { return "translate(" + (n - i - 1) * size + ",0)"; })
  .each(function(d) { x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

svg.selectAll(".y.axis")
  .data(traits)
.enter().append("g")
  .attr("class", "y axis")
  .attr("transform", function(d, i) { return "translate(0," + i * size + ")"; })
  .each(function(d) { y.domain(domainByTrait[d]); d3.select(this).call(yAxis); });

var cell = svg.selectAll(".cell")
  .data(cross(traits, traits))
.enter().append("g")
  .attr("class", "cell")
  .attr("transform", function(d) { return "translate(" + (n - d.i - 1) * size + "," + d.j * size + ")"; })
  .each(plot);

// Titles for the diagonal.
cell.filter(function(d) { return d.i === d.j; }).append("text")
  .attr("x", padding)
  .attr("y", padding)
  .attr("dy", ".71em")
  .text(function(d) { return d.x; });

cell.call(brush);

function plot(p) {
var cell = d3.select(this);

x.domain(domainByTrait[p.x]);
y.domain(domainByTrait[p.y]);

cell.append("rect")
    .attr("class", "frame")
    .attr("x", padding / 2)
    .attr("y", padding / 2)
    .attr("width", size - padding)
    .attr("height", size - padding);

cell.selectAll("circle")
    .data(data)
  .enter().append("circle")
    .attr("cx", function(d) { return x(d[p.x]); })
    .attr("cy", function(d) { return y(d[p.y]); })
    .attr("r", 4)
    .style("fill", function(d) { return color(d.species); });
}

var brushCell;

// Clear the previously-active brush, if any.
function brushstart(p) {
if (brushCell !== this) {
  d3.select(brushCell).call(brush.move, null);
  brushCell = this;
x.domain(domainByTrait[p.x]);
y.domain(domainByTrait[p.y]);
}
}

// Highlight the selected circles.
function brushmove(p) {
var e = d3.brushSelection(this);
svg.selectAll("circle").classed("hidden", function(d) {
  return !e
    ? false
    : (
      e[0][0] > x(+d[p.x]) || x(+d[p.x]) > e[1][0]
      || e[0][1] > y(+d[p.y]) || y(+d[p.y]) > e[1][1]
    );
});
}

// If the brush is empty, select all circles.
function brushend() {
var e = d3.brushSelection(this);
if (e === null) svg.selectAll(".hidden").classed("hidden", false);
}
});

function cross(a, b) {
var c = [], n = a.length, m = b.length, i, j;
for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
return c;
}
    }
}
