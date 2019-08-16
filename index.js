// add solution here
function theBeatlesPlay(musicians,instruments) {
  var cantareti = [];
  for (let i = 0; i < musicians.length; i++) {
    cantareti.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return cantareti;
}

function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length){
    arr.push(arr[i] + "!!!");
    i++;
  }
  return arr;
}