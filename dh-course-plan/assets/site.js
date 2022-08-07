/* globals fetch R $ */
fetch('assets/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    runSite(data);
  });

const randomItem = R.curry(function (xs) {
  return xs[Math.floor(Math.random() * xs.length)];
});

const makeId = R.curry(function (id) {
  return id.replace(/[^0-9A-Za-z]/g, '-').toLowerCase();
});

function runSite (data) {
  const outputElement = $('#output');
  R.pipe(
    R.keys,
    R.forEach(function (key) {
      const planElement = $('<div/>');
      planElement.addClass('plan');

      const labelElement = $('<div/>');
      labelElement.addClass('plan__label');
      labelElement.html(key + ':');

      const itemElement = $('<div/>');
      itemElement.addClass('plan__item');
      itemElement.attr('id', makeId(key));

      labelElement.appendTo(planElement);
      itemElement.appendTo(planElement);
      planElement.appendTo(outputElement);
    })
  )(data);
  function generateCoursePlan () {
    R.pipe(
      R.keys,
      R.forEach(function (key) {
        const content = randomItem(data[key]);
        $('#' + makeId(key)).html(content);
      })
    )(data);
  }
  $('#generator').on('click', generateCoursePlan);
}
