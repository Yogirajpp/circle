const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const fixedPoint = { x: 200, y: 200 }; // Fixed point coordinates (red point)
const radius = 100; // Radius of circular motion
let blueAngle = 0; // Angle for blue point
let greenAngle = 0; // Angle for green point
let orangeAngle = 0; // Angle for orange point
let yellowAngle = 0; // Angle for yellow point
let pinkAngle = 0; // Angle for pink point
const greenPath = []; // Array to store the positions of the green point
const yellowPath = []; // Array to store the positions of the yellow point
const bluePath = []; // Array to store the positions of the blue line
const orangePath = []; // Array to store the positions of the orange point
const pinkPath = []; // Array to store the positions of the pink point

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Move the blue point in a circular motion around the fixed point (red point)
  const bluePoint = {
    x: fixedPoint.x + (radius / 2) * Math.cos(blueAngle),
    y: fixedPoint.y + (radius / 2) * Math.sin(blueAngle)
  };

  // Calculate the position of the green point
  const greenPoint = {
    x: bluePoint.x + (radius / 4) * Math.cos(greenAngle),
    y: bluePoint.y + (radius / 4) * Math.sin(greenAngle)
  };

  // Calculate the position of the yellow point
  const yellowPoint = {
    x: greenPoint.x + (radius / 8) * Math.cos(yellowAngle),
    y: greenPoint.y + (radius / 8) * Math.sin(yellowAngle)
  };

  // Calculate the position of the orange point
  const orangePoint = {
    x: yellowPoint.x + ((radius / 8) / 2) * Math.cos(orangeAngle),
    y: yellowPoint.y + ((radius / 8) / 2) * Math.sin(orangeAngle)
  };

  // Calculate the position of the pink point
  const pinkPoint = {
    x: orangePoint.x + ((radius / 8) / 2) * Math.cos(pinkAngle),
    y: orangePoint.y + ((radius / 8) / 2) * Math.sin(pinkAngle)
  };

  // Store the position of the green point in the path array
  greenPath.push({ x: greenPoint.x, y: greenPoint.y });

  // Store the position of the yellow point in the path array
  yellowPath.push({ x: yellowPoint.x, y: yellowPoint.y });

  // Store the position of the blue point in the path array
  bluePath.push({ x: bluePoint.x, y: bluePoint.y });

  // Store the position of the orange point in the path array
  orangePath.push({ x: orangePoint.x, y: orangePoint.y });

  // Store the position of the pink point in the path array
  pinkPath.push({ x: pinkPoint.x, y: pinkPoint.y });

  // Draw the path of the green point
  ctx.strokeStyle = 'lightgreen';
  ctx.beginPath();
  ctx.moveTo(greenPath[0].x, greenPath[0].y);
  for (let i = 1; i < greenPath.length; i++) {
    ctx.lineTo(greenPath[i].x, greenPath[i].y);
  }
  ctx.stroke();

  // Draw the path of the yellow point
  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(yellowPath[0].x, yellowPath[0].y);
  for (let i = 1; i < yellowPath.length; i++) {
    ctx.lineTo(yellowPath[i].x, yellowPath[i].y);
  }
  ctx.stroke();

  // Draw the path of the blue line
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(bluePath[0].x, bluePath[0].y);
  for (let i = 1; i < bluePath.length; i++) {
    ctx.lineTo(bluePath[i].x, bluePath[i].y);
  }
  ctx.stroke();

  // Draw the path of the orange point
  ctx.strokeStyle = 'orange';
  ctx.beginPath();
  ctx.moveTo(orangePath[0].x, orangePath[0].y);
  for (let i = 1; i < orangePath.length; i++) {
    ctx.lineTo(orangePath[i].x, orangePath[i].y);
  }
  ctx.stroke();

  // Draw the path of the pink point
  ctx.strokeStyle = 'pink';
  ctx.beginPath();
  ctx.moveTo(pinkPath[0].x, pinkPath[0].y);
  for (let i = 1; i < pinkPath.length; i++) {
    ctx.lineTo(pinkPath[i].x, pinkPath[i].y);
  }
  ctx.stroke();

  // Draw a line connecting the red and blue points
  ctx.beginPath();
  ctx.moveTo(fixedPoint.x, fixedPoint.y);
  ctx.lineTo(bluePoint.x, bluePoint.y);
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  // Draw a line connecting the blue and green points
  ctx.beginPath();
  ctx.moveTo(bluePoint.x, bluePoint.y);
  ctx.lineTo(greenPoint.x, greenPoint.y);
  ctx.strokeStyle = 'green';
  ctx.stroke();

  // Draw a line connecting the green and yellow points
  ctx.beginPath();
  ctx.moveTo(greenPoint.x, greenPoint.y);
  ctx.lineTo(yellowPoint.x, yellowPoint.y);
  ctx.strokeStyle = 'green';
  ctx.stroke();

  // Draw a line connecting the yellow and orange points
  ctx.beginPath();
  ctx.moveTo(yellowPoint.x, yellowPoint.y);
  ctx.lineTo(orangePoint.x, orangePoint.y);
  ctx.strokeStyle = 'orange';
  ctx.stroke();

  // Draw a line connecting the orange and pink points
  ctx.beginPath();
  ctx.moveTo(orangePoint.x, orangePoint.y);
  ctx.lineTo(pinkPoint.x, pinkPoint.y);
  ctx.strokeStyle = 'pink';
  ctx.stroke();

  // Draw the red point
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(fixedPoint.x, fixedPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();

    // Draw the blue point
  ctx.fillStyle = 'blue';
  ctx.beginPath();
  ctx.arc(bluePoint.x, bluePoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the green point
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.arc(greenPoint.x, greenPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the yellow point
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(yellowPoint.x, yellowPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the orange point
  ctx.fillStyle = 'orange';
  ctx.beginPath();
  ctx.arc(orangePoint.x, orangePoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the pink point
  ctx.fillStyle = 'pink';
  ctx.beginPath();
  ctx.arc(pinkPoint.x, pinkPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Draw the path of the green point
  ctx.strokeStyle = 'lightgreen';
  ctx.beginPath();
  ctx.moveTo(greenPath[0].x, greenPath[0].y);
  for (let i = 1; i < greenPath.length; i++) {
    ctx.lineTo(greenPath[i].x, greenPath[i].y);
  }
  ctx.stroke();

  // Draw the path of the yellow point
  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(yellowPath[0].x, yellowPath[0].y);
  for (let i = 1; i < yellowPath.length; i++) {
    ctx.lineTo(yellowPath[i].x, yellowPath[i].y);
  }
  ctx.stroke();

  // Draw the path of the blue line
  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(bluePath[0].x, bluePath[0].y);
  for (let i = 1; i < bluePath.length; i++) {
    ctx.lineTo(bluePath[i].x, bluePath[i].y);
  }
  ctx.stroke();

  // Draw the path of the orange point
  ctx.strokeStyle = 'orange';
  ctx.beginPath();
  ctx.moveTo(orangePath[0].x, orangePath[0].y);
  for (let i = 1; i < orangePath.length; i++) {
    ctx.lineTo(orangePath[i].x, orangePath[i].y);
  }
  ctx.stroke();

  // Draw the path of the pink point
  ctx.strokeStyle = 'pink';
  ctx.beginPath();
  ctx.moveTo(pinkPath[0].x, pinkPath[0].y);
  for (let i = 1; i < pinkPath.length; i++) {
    ctx.lineTo(pinkPath[i].x, pinkPath[i].y);
  }
  ctx.stroke();

  blueAngle += 0.01; // Increment angle for blue point
  greenAngle += 0.02; // Increment angle for green point
  orangeAngle += 0.04; // Increment angle for orange point
  yellowAngle += 0.03; // Increment angle for yellow point
  pinkAngle += 0.05; // Increment angle for pink point

  requestAnimationFrame(draw);
}

draw();
