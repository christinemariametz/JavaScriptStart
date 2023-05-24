let number = function(busStops) {
let leftpeople = 0;
for(let i = 0; i < busStops.length; i++) {
// 1. nimm anzahl leute im bus
// addiere leute die einsteigen
// subtrahiere leute die aussteigen
leftpeople += busStops[i][0] -= busStops[i][1];

}
return leftpeople;
}


  console.log(number([[10,0],[3,5],[5,8]]),5);
  console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
  console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
  console.log(number([[0,0]]),0);