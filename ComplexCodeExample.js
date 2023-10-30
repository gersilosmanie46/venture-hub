/*
Filename: ComplexCodeExample.js
Content: This code is a complex example of a data visualization tool using D3.js library.
*/

// Libraries
import * as d3 from 'd3';
import * as lodash from 'lodash';
import * as math from 'mathjs';

// Constants
const WIDTH = 800;
const HEIGHT = 600;
const MARGIN = { top: 50, right: 50, bottom: 50, left: 50 };

// Data
const data = [
  { name: 'Category1', value: 20 },
  { name: 'Category2', value: 50 },
  { name: 'Category3', value: 30 },
  { name: 'Category4', value: 40 },
  { name: 'Category5', value: 70 },
  // ...more data items
];

// Scales
const xScale = d3
  .scaleBand()
  .domain(data.map((d) => d.name))
  .range([MARGIN.left, WIDTH - MARGIN.right])
  .padding(0.1);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, (d) => d.value)])
  .range([HEIGHT - MARGIN.bottom, MARGIN.top]);

// SVG Container
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT);

// Axis
const xAxis = d3.axisBottom(xScale).ticks(data.length);
const yAxis = d3.axisLeft(yScale).ticks(5);

// Draw axes
svg
  .append('g')
  .attr('transform', `translate(0, ${HEIGHT - MARGIN.bottom})`)
  .call(xAxis);

svg
  .append('g')
  .attr('transform', `translate(${MARGIN.left}, 0)`)
  .call(yAxis);

// Bars
svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d) => xScale(d.name))
  .attr('y', (d) => yScale(d.value))
  .attr('width', xScale.bandwidth())
  .attr('height', (d) => HEIGHT - MARGIN.bottom - yScale(d.value))
  .attr('fill', 'steelblue');

// Tooltip
const tooltip = d3
  .select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0);

svg
  .selectAll('rect')
  .on('mouseover', (d) => {
    tooltip
      .transition()
      .duration(200)
      .style('opacity', 0.9)
      .style('left', `${d3.event.pageX}px`)
      .style('top', `${d3.event.pageY - 28}px`);
    tooltip.html(`Value: ${d.value}`);
  })
  .on('mouseout', (d) => {
    tooltip.transition().duration(500).style('opacity', 0);
  });

// Add custom styling
svg
  .selectAll('rect')
  .attr('stroke', 'white')
  .attr('stroke-width', 2)
  .attr('rx', 5)
  .attr('ry', 5);

// Add title
svg
  .append('text')
  .attr('x', WIDTH / 2)
  .attr('y', MARGIN.top / 2)
  .attr('text-anchor', 'middle')
  .style('font-size', '24px')
  .style('font-weight', 'bold')
  .text('Data Visualization');

// Function to update data
function updateData() {
  // ...implement data update logic here
}

// Event listener for data update
document.getElementById('update-button').addEventListener('click', updateData);

// ...more complex code

// End of complex code example.