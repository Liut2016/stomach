export class ScatterMatrixPlot {
    target: HTMLElement;
    pointsMatrix;
    public currentDimensions: string[] = ['Acceleration', 'Weight_in_lbs', 'Horsepower', 'Displacement'];
    constructor(target: HTMLElement , pointsMatrix) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
    }
    setDimensions() {
      return this.currentDimensions;
    }

render() {
    const pointsMatrix = this.pointsMatrix;
    console.log(pointsMatrix);
    d3.helper = {};

    /* d3.helper.tooltip = function () {
        let tooltipDiv;
        const bodyNode = d3.select('body').node();

        function tooltip(selection) {
            selection.on('mouseover.tooltip', function (point) {
                // Clean up lost tooltips
                d3.select('body').selectAll('div.tooltip').remove();
                // Append tooltip
                tooltipDiv = d3.select('body')
                    .append('div')
                    .attr('class', 'tooltip');
                const absoluteMousePos = d3.mouse(bodyNode);
                tooltipDiv
                    .style('left', (absoluteMousePos[0] + 10) + 'px')
                    .style('top', (absoluteMousePos[1] - 30) + 'px');

                let line = '';
                _.each(d3.keys(point), function (key, index) {
                    if (index !== d3.keys(point).length - 1) {
                        line += key + ': ' + point[key] + '</br>';
                    } else {
                        line += key + ': ' + point[key];
                    }
                });
                tooltipDiv.html(line);
            })
                .on('mousemove.tooltip', function () {
                    // Move tooltip
                    const absoluteMousePos = d3.mouse(bodyNode);
                    tooltipDiv
                        .style('left', (absoluteMousePos[0] + 10) + 'px')
                        .style('top', absoluteMousePos[1] < 80 ? absoluteMousePos[1] + 10 : (absoluteMousePos[1] - 70) + 'px');
                })
                .on('mouseout.tooltip', function () {
                    // Remove tooltip
                    tooltipDiv.remove();
                });

        }

        tooltip.attr = function (_x) {
            if (!arguments.length) return attrs;
            attrs = _x;
            return this;
        };

        tooltip.style = function (_x) {
            if (!arguments.length) return styles;
            styles = _x;
            return this;
        };

        return tooltip;
    }; */

    const width = 960;
    const size = 230;
    const padding = 10;

     const tooltip = d3.select('body')
                      .append('div')
                      .attr('class', 'tooltip')
                      .style('opacity', 0);
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

    const domainByTrait = {};
    const traits = this.setDimensions(),
    n = traits.length;
    console.log(traits);
    traits.forEach(function(trait) {
      domainByTrait[trait] = d3.extent(pointsMatrix, function(d) { return d[trait]; });
      });
    console.log(domainByTrait);
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
      .append('g')
      .attr('transform', 'translate(' + padding + ',' + padding / 2 + ')');

    svg.selectAll('.x.axis')
      .data(traits)
      .enter()
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', function(d, i) { return 'translate(' + (n - i - 1) * size + ',0)'; })
      .each(function(d) { x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

    svg.selectAll('.y.axis')
      .data(traits)
      .enter()
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', function(d, i) { return 'translate(0,' + i * size + ')'; })
      .each(function(d) { y.domain(domainByTrait[d]); d3.select(this).call(yAxis); });

    const cell = svg.selectAll('.cell')
      .data(cross(traits, traits))
      .enter()
      .append('g')
      .attr('class', 'cell')
      .attr('transform', function(d) { return 'translate(' + (n - d.i - 1) * size + ',' + d.j * size + ')'; })
      ;
      cell.call(brush);
      cell.each(plot);
    // Titles for the diagonal.
    cell.filter(function(d) { return d.i === d.j; }).append('text')
      .attr('x', padding)
      .attr('y', padding)
      .attr('dy', '.71em')
      .text(function(d) { return d.x; });

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
        .data(pointsMatrix)
        .enter()
        .append('circle')
        .attr('cx', function(d) { return x(d[p.x]); })
        .attr('cy', function(d) { return y(d[p.y]); })
        .attr('r', 4)
        .style('fill', function(d) { return color(d.species); })
        .on('mouseover', (d) => {
            tooltip.transition()
            .duration(200)
            .style('opacity', .9);
            tooltip.html('value: ' + d[p.x] + ',' + d[p.y])
            .style('left', (d3.event.pageX) - 60 + 'px')
            .style('top', (d3.event.pageY) + 20 + 'px');
        })
       .on('mouseout', (d) => {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
        })
        ;
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

function cross(a, b) {
  const c = [], l = a.length, m = b.length;
  for ( let i = -1; ++i < l;) {
  for (let j = -1; ++j < m;) {
      c.push({x: a[i], i: i, y: b[j], j: j});
  }
  }
  return c;
}
    }
}
