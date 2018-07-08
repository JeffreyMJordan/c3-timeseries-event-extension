
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


  function ended(){
    console.log("ended");
  }

  function clicked(){
    console.log("clicked");
  }

  function dragged(){
    console.log("dragged");
  }
});
