export class MapCity {
    target: HTMLElement;
    pointsMatrix;
    svgWidth = 320;
    svgHeight = 550;
    margin = {
        top: 10,
        bottom: 20,
        left: 40,
        right: 40
    };
    width = this.svgWidth - this.margin.left - this.margin.right;
    height = this.svgHeight - this.margin.top - this.margin.bottom;
    constructor(target: HTMLElement , pointsMatrix) {
        this.target = target;
        this.pointsMatrix = pointsMatrix;
    }
    render() {
        const partyColours = ['#154360', '#1F618D', '#2980B9', '#7FB3D5', '#D4E6F1', '#EAF2F8'];
        const width = this.width, height = this.height;
        const pointsMatrix = this.pointsMatrix;
        const legendVal = d3.scaleOrdinal()
                .domain(['>1000', '200-1000', '50-200', '10-50', '0-10', '0'])
                .range(partyColours);
        const svg = d3.select(this.target).append('svg')
                      .attr('width', this.svgWidth)
                      .attr('height', this.svgHeight);
        const legend = svg
                      .selectAll('.legend')
                      .data(legendVal.domain())
                      .enter().append('g')
                      .attr('class', 'legend')
                      .attr('transform', (d, i) => {
                              return 'translate(' + (this.width - 10) + ',' + i * 15 + ')';
                          });
              legend.append('rect')
                      .attr('x', 0)
                      .attr('y', 0)
                      .attr('width', 10)
                      .attr('height', 10)
                      .style('fill', (d, i ) => {
                        return partyColours[i]; });
              legend.append('text')
                      .attr('x', 20)
                      .attr('y', 10)
                      .text((d) => {
                        return d; })
                      .style('text-anchor', 'start')
                      .style('fill', 'black')
                      .style('font-size', 15);
        function getGeoJSONWithResults(csv, geojson) {
          const newGeojson = {type: 'FeatureCollection', features: []};
          let count = 0;
          geojson.features.forEach((feature) => {
            csv.forEach(element => {
              if (feature.properties.name === element.x) {
                count ++;
                const number = defineColor(element.y);
                newGeojson.features.push({
                  type: 'Feature',
                  geometry: feature.geometry,
                  properties: { name: element.x, number: element.y, fill: partyColours[number] }
                });
              }
            });
            if (count === 0) {
              newGeojson.features.push({
                type: 'Feature',
                geometry: feature.geometry,
                properties: { name: feature.properties.name, number: 0, fill: partyColours[5] }
              });
            } else {
              count = 0;
            }
          });
          return newGeojson;
        }
        function update(geojson) {
          const projection = d3.geoMercator()
            .center([108, 37])
            .scale(2400)
            .translate([width / 2, height / 2]);
          const geoGenerator = d3.geoPath()
            .projection(projection);
          svg.selectAll('path')
            .data(geojson.features)
            .enter()
            .append('path')
            .attr('d', geoGenerator)
            .style('fill', function(d) {
              return d.properties.fill;
            })
            .attr('stroke', 'white')
            .append('title')
            .text(d => {
              return d.properties.name + ': ' + d.properties.number; });
        }
        function defineColor(data) {
           if (data >= 1000) {
             return 0;
           } else if (data >= 200 && data < 1000) {
            return 1;
           } else if ( data >= 50 && data < 200) {
             return 2;
           } else if (data >= 10 && data < 50) {
             return 3;
           } else if (data > 0 && data < 10) {
             return 4;
           } else {
             return 5;
           }
        }
        d3.json('/assets/data/shan3xi.json', function(err, geojson) {
          geojson = getGeoJSONWithResults(pointsMatrix, geojson);
          update(geojson);
        });
    }
}

