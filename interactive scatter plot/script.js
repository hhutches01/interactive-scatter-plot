const dataset = [
  {height: 160.3, weight: 58.1},
  {height: 170.2, weight: 69.9},
  {height: 175.8, weight: 70.4},
  {height: 180.1, weight: 76.3},
  {height: 185.4, weight: 81.6},
  {height: 190.7, weight: 84.2},
  {height: 195.5, weight: 92.1},
  {height: 157.3, weight: 58.4},
  {height: 162.1, weight: 60.2},
  {height: 167.8, weight: 64.5},
  {height: 174.4, weight: 72.3},
  {height: 182.6, weight: 79.2},
  {height: 189.2, weight: 86.1},
  {height: 194.8, weight: 90.0},
  {height: 155.0, weight: 54.3},
  {height: 163.2, weight: 63.9},
  {height: 171.8, weight: 69.2},
  {height: 178.6, weight: 74.5},
  {height: 184.3, weight: 81.1},
  {height: 192.1, weight: 86.9},
  {height: 196.0, weight: 94.5},
  {height: 159.8, weight: 59.4},
  {height: 164.7, weight: 67.8},
  {height: 169.3, weight: 68.7},
  {height: 177.2, weight: 73.8},
  {height: 186.9, weight: 82.3},
  {height: 191.4, weight: 87.1},
  {height: 193.1, weight: 99.4},
  {height: 200.2, weight: 75.0},
  {height: 145.5, weight: 80.5},
  {height: 161.9, weight: 57.3},
  {height: 166.2, weight: 62.5},
  {height: 173.6, weight: 70.1},
  {height: 176.3, weight: 71.8},
  {height: 183.2, weight: 78.6},
  {height: 188.4, weight: 83.3},
  {height: 197.9, weight: 93.6},
  {height: 154.6, weight: 53.1},
  {height: 165.4, weight: 61.2},
  {height: 170.6, weight: 65.1},
  {height: 179.5, weight: 74.4},
  {height: 186.2, weight: 80.0},
  {height: 192.9, weight: 87.7},
  {height: 199.1, weight: 93.8},
  {height: 156.3, weight: 52.8},
  {height: 163.5, weight: 62.3},
  {height: 172.1, weight: 67.7},
  {height: 178.9, weight: 75.6},
  {height: 185.1, weight: 79.8},
  {height: 191.8, weight: 83.2},
  {height: 198.5, weight: 97.3},
  {height: 160.4, weight: 57.6},
  {height: 164.9, weight: 66.4},
  {height: 169.4, weight: 68.9},
  {height: 177.3, weight: 74.7},
  {height: 187.0, weight: 81.5},
  {height: 191.5, weight: 89.3},
  {height: 195.2, weight: 100.1},
  {height: 158.7, weight: 58.0},
  {height: 161.8, weight: 64.1},
  {height: 174.0, weight: 68.6},
  {height: 181.1, weight: 77.9},
  {height: 187.9, weight: 82.7},
  {height: 190.3, weight: 91.6},
  {height: 198.8, weight: 98.7},
  {height: 159.5, weight: 57.2},
  {height: 165.0, weight: 65.5},
  {height: 168.2, weight: 71.0},
  {height: 175.7, weight: 75.3},
  {height: 184.5, weight: 82.8},
  {height: 189.7, weight: 88.5},
  {height: 196.7, weight: 95.2}
];





const width = 600;
const height = 600;
const margin = {top: 40, right: 40, bottom: 40, left: 40};

const xScale = (value) => {
  const domain = [150, 200];
  const range = [margin.left, width - margin.right];
  return ((value - domain[0]) / (domain[1] - domain[0])) * (range[1] - range[0]) + range[0];
};

const yScale = (value) => {
  const domain = [50, 100];
  const range = [height - margin.bottom, margin.top];
  return ((value - domain[0]) / (domain[1] - domain[0])) * (range[1] - range[0]) + range[0];
};

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);

dataset.forEach((data) => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", xScale(data.height));
  circle.setAttribute("cy", yScale(data.weight));
  circle.setAttribute("r", 5);
  circle.setAttribute("fill", "steelblue");
  svg.appendChild(circle);
});

document.getElementById("scatterplot").appendChild(svg);

// Adding axis labels
const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
title.textContent = "Height vs Weight Scatterplot";
title.setAttribute("x", width / 2);
title.setAttribute("y", margin.top / 2);
title.setAttribute("text-anchor", "middle");
title.setAttribute("font-weight", "bold");
svg.appendChild(title);

const xAxisLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
xAxisLabel.textContent = "Height (cm)";
xAxisLabel.setAttribute("x", width / 2);
xAxisLabel.setAttribute("y", height - 10);
xAxisLabel.setAttribute("text-anchor", "middle");
svg.appendChild(xAxisLabel);

const yAxisLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
yAxisLabel.textContent = "Weight (kg)";
yAxisLabel.setAttribute("x", -height / 2);
yAxisLabel.setAttribute("y", 15);
yAxisLabel.setAttribute("text-anchor", "middle");
yAxisLabel.setAttribute("transform", "rotate(-90)");
svg.appendChild(yAxisLabel);

// ...

// Add x-axis lines
for (let i = 150; i <= 200; i += 10) {
  const xLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xLine.setAttribute("x1", xScale(i));
  xLine.setAttribute("y1", yScale(50));
  xLine.setAttribute("x2", xScale(i));
  xLine.setAttribute("y2", yScale(100));
  xLine.setAttribute("stroke", "#ccc");
  xLine.setAttribute("stroke-dasharray", "2,2");
  svg.appendChild(xLine);
}

// Add y-axis lines
for (let i = 50; i <= 100; i += 10) {
  const yLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yLine.setAttribute("x1", xScale(150));
  yLine.setAttribute("y1", yScale(i));
  yLine.setAttribute("x2", xScale(200));
  yLine.setAttribute("y2", yScale(i));
  yLine.setAttribute("stroke", "#ccc");
  yLine.setAttribute("stroke-dasharray", "2,2");
  svg.appendChild(yLine);
}

// ...

// Add interactivity through tooltips
// ...

// Add interactivity through tooltips and highlighting
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

dataset.forEach((data, index) => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", xScale(data.height));
  circle.setAttribute("cy", yScale(data.weight));
  circle.setAttribute("r", 5);
  circle.setAttribute("fill", "steelblue");
  circle.setAttribute("data-index", index);
  svg.appendChild(circle);

  // Highlight the circle on click
  circle.addEventListener("click", (event) => {
    const dataIndex = event.target.getAttribute("data-index");
    const dataPoint = dataset[dataIndex];

    if (event.target.getAttribute("stroke") === "red") {
      event.target.setAttribute("stroke", "none");
      event.target.setAttribute("stroke-width", 0);
    } else {
      event.target.setAttribute("stroke", "red");
      event.target.setAttribute("stroke-width", 2);
    }
  });

  circle.addEventListener("mouseover", (event) => {
    const dataIndex = event.target.getAttribute("data-index");
    const dataPoint = dataset[dataIndex];

    tooltip.innerHTML = `Height: ${dataPoint.height} cm<br>Weight: ${dataPoint.weight} kg`;
    tooltip.style.display = "block";
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
  });

  circle.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });
});

// ...



