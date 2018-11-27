import { ScatterDimPlot } from './scatter-plot-dim';
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

const x = d3.scaleLinear()
.range([padding / 2, size - padding / 2]);

const y = d3.scaleLinear()
.range([size - padding / 2, padding / 2]);

const xAxis = d3.axisBottom()
.scale(x)
.ticks(6);

const yAxis = d3.axisLeft()
.scale(y)
.ticks(6);

const color = d3.scaleOrdinal(d3.schemeCategory10);

d3.json('/assets/data/cars.json', function(error, data) {
    if (error) { throw error; }

  const domainByTrait = {};
   const traits = d3.keys(data[0]).filter(function(d) { return d !== 'Name'
                  && d !== 'Year' && d !== 'Origin' && d !== 'Miles_per_Gallon' && d !== 'Cylinders'; }),
    n = traits.length;
  console.log(traits);
  console.log(n);

    traits.forEach(function(trait) {
    domainByTrait[trait] = d3.extent(data, function(d) { return d[trait]; });
    });
xAxis.tickSize(size * n);
yAxis.tickSize(-size * n);

const brush = d3.brush()
  .on('start', brushstart)
  .on('brush', brushmove)
  .on('end', brushend)
  .extent([[0, 0], [size, size]]);

const svg = d3.select('#drResult')
  .attr('width', size * n + padding)
  .attr('height', size * n + padding)
  .attr('transform', 'translate(' + padding + ',' + padding / 2 + ')');

svg.selectAll('.x.axis')
  .data(traits)
  .enter().append('g')
  .attr('class', 'x axis')
  .attr('transform', function(d, i) { return 'translate(' + (n - i - 1) * size + ',0)'; })
  .each(function(d) { x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

svg.selectAll('.y.axis')
  .data(traits)
.enter().append('g')
  .attr('class', 'y axis')
  .attr('transform', function(d, i) { return 'translate(0,' + i * size + ')'; })
  .each(function(d) { y.domain(domainByTrait[d]); d3.select(this).call(yAxis); });

const cell = svg.selectAll('.cell')
  .data(cross(traits, traits))
.enter().append('g')
  .attr('class', 'cell')
  .attr('transform', function(d) { return 'translate(' + (n - d.i - 1) * size + ',' + d.j * size + ')'; })
  .each(plot);

// Titles for the diagonal.
cell.filter(function(d) { return d.i === d.j; }).append('text')
  .attr('x', padding)
  .attr('y', padding)
  .attr('dy', '.71em')
  .text(function(d) { return d.x; });

cell.call(brush);

function plot(p) {
const cell1 = d3.select(this);

x.domain(domainByTrait[p.x]);
y.domain(domainByTrait[p.y]);

cell1.append('rect')
    .attr('class', 'frame')
    .attr('x', padding / 2)
    .attr('y', padding / 2)
    .attr('width', size - padding)
    .attr('height', size - padding);

cell1.selectAll('circle')
    .data(data)
  .enter().append('circle')
    .attr('cx', function(d) { return x(d[p.x]); })
    .attr('cy', function(d) { return y(d[p.y]); })
    .attr('r', 4)
    .style('fill', function(d) { return color(d.species); });
}

 let brushCell;

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
const e = d3.brushSelection(this);
console.log(e);
svg.selectAll('circle').classed('hidden', function(d) {
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
const e = d3.brushSelection(this);
if (e === null) {
    svg.selectAll('.hidden').classed('hidden', false);
  }
}
});

function cross(a, b) {
const c = [], n = a.length, m = b.length;
for ( let i = -1; ++i < n;) {
 for (let j = -1; ++j < m;) {
     c.push({x: a[i], i: i, y: b[j], j: j});
 }
}
return c;
}
    }
}
