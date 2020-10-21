import React, {Component} from 'react';
import * as d3 from "d3";

class Demo6 extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3.select("#svg")
    .append("svg")
    .attr("width", 700)
    .attr("height", 500)
    .style("margin-left", 100);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 350 - d * 20)
      .attr("width", 35)
      .attr("height", (d, i) => d * 20)
      .attr("fill", "green")

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 350 - d * 20 - 5)
    }

  render(){
    return (
        <>
          <h3>Demo6</h3>
          <div id="svg" />
        </>
    )
  }
}

export default Demo6;
