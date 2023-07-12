//cubic bezier



const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const fixedPoint = { x: 200, y: 200 }; // Fixed point coordinates (red point)
const radius = 200; // Radius of circular motion
const pointColors = Array.from({ length: 14 }, () => 'black'); // Colors for the points (black)
const pointAngles = Array.from({ length: pointColors.length }, () => 0); // Initial angles for the points
const pointPaths = Array.from({ length: pointColors.length }, () => []); // Array to store the positions of the points

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the fixed point (red)
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(fixedPoint.x, fixedPoint.y, 5, 0, 2 * Math.PI);
  ctx.fill();

  let prevPoint = fixedPoint;

  for (let i = 0; i < pointColors.length; i++) {
    const angle = pointAngles[i];
    const pointRadius = radius / Math.pow(2, i + 1);

    const point = {
      x: prevPoint.x + pointRadius * Math.cos(angle),
      y: prevPoint.y + pointRadius * Math.sin(angle)
    };

    // Store the position of the point in the path array
    pointPaths[i].push({ x: point.x, y: point.y });

    if (i === pointColors.length - 1) {
      // Draw the path for the last point (light blue)
      ctx.strokeStyle = 'lightblue';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(fixedPoint.x, fixedPoint.y);

      // Use cubic Bezier curves for the path
      for (let j = 0; j < pointPaths[i].length - 2; j++) {
        const p0 = pointPaths[i][j];
        const p1 = pointPaths[i][j + 1];
        const p2 = pointPaths[i][j + 2];
        const cp1x = (p0.x + p1.x) / 2;
        const cp1y = (p0.y + p1.y) / 2;
        const cp2x = (p1.x + p2.x) / 2;
        const cp2y = (p1.y + p2.y) / 2;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
      }

      ctx.stroke();
    }

    // Draw the connection line from the previous point to the current point (black)
    if (i !== pointColors.length - 1) {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(prevPoint.x, prevPoint.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    }

    // Draw the current point (black)
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Set the current point as the previous point for the next iteration
    prevPoint = point;

    // Increment angle for the point
    pointAngles[i] += (i + 1) * 0.05;
  }

  requestAnimationFrame(draw);
}

draw();
