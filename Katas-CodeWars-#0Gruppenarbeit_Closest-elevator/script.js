function elevator(left, right, call) {
  let distanceLeft = Math.abs(left - call);
  let distanceRight = Math.abs(right - call);

  if (distanceLeft === distanceRight) {
    return "right";
  } else if (distanceLeft < distanceRight) {
    return "left";
  } else if (distanceLeft > distanceRight) {
    return "right";
  }
}
  
  
  
  elevator(0, 1, 0); // => "left"
  elevator(0, 1, 1); // => "right"
  elevator(0, 1, 2); // => "right"
  elevator(0, 0, 0); // => "right"
  elevator(0, 2, 1); // => "right"