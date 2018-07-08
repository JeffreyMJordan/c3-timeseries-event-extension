
document.addEventListener("DOMContentLoaded", () => {
  console.log(c3);
  console.log(d3);
  let chart = c3.generate({
    bindto: "#graph",
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
  });
});
