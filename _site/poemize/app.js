// https://stackoverflow.com/questions/8435183/generate-a-weighted-random-number
function weightedRand(spec) {
  var i, j, table=[];
  for (i in spec) {
    // The constant 10 below should be computed based on the
    // weights in the spec for a correct and optimal table size.
    // E.g. the spec {0:0.999, 1:0.001} will break this impl.
    for (j=0; j<spec[i]*10; j++) {
      table.push(i);
    }
  }
  return function() {
    return table[Math.floor(Math.random() * table.length)];
  }
}
var getWords = R.split(/\s+/)
var getNumberOfBreaks = weightedRand({
    0:0.8
    , 1: 0.15
    , 2: 0.05
})
var breakString = function() {
    return R.times(R.always('<br>'), getNumberOfBreaks()).join('')
}
var addBreaks = function(word) {
    return word + breakString()
}
var makePoem = function(ev) {
    ev.preventDefault()
    var words = getWords(document.querySelector('#source').value)
    document.querySelector('article').innerHTML = R.compose(
        R.join(' ')
        , R.map(addBreaks)
    )(words)
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#create').addEventListener('click', makePoem)
})
