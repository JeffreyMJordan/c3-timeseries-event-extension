
document.addEventListener("DOMContentLoaded", () => {
  let chart = c3.generate({
    bindto: "#graph",
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
  });
  let svg = d3.select("#graph");
  svg
    .append("rect")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight)
    .attr("fill", "transparent")
    .style("pointer-events", "all")
    .call(d3.drag()
    .on("start", clicked)
    .on("drag", dragged)
    .on("end", ended));

  let currentRec;
  let startX; 

  function ended(){
    console.log("ended");
  }

  function clicked(){
    let height = document.getElementsByClassName("c3-axis-x")[0].getBoundingClientRect().y - 5;
    startX = d3.event.x;
    currentRec = svg.append("rect")
      .attr("y", 0)
      .attr("x", d3.event.x)
      .attr("height", height)
      .attr("fill", "transparent")
      .attr("stroke", "black");
  }

  function dragged(){
    currentRec.attr("width", d3.event.x - startX);
  }
});
