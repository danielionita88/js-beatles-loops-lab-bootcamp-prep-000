// add solution here
function theBeatlesPlay(musicians,instruments) {
  var cantareti = [];
  for (let i = 0; i < musicians.length; i++) {
    cantareti.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return cantareti;
}

function johnLennonFacts(facts) {
  var newfacts=[];
  var i = 0;
  while (i < facts.length){
    newfacts.push(facts[i] + "!!!");
    i++;
  }
  return newfacts;
}

function iLoveTheBeatles(int) {
  var array=[];
  var i=0;
  do {array.push('I love the Beatles!');
  i++;}
}