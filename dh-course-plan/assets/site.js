/* globals fetch $ */
fetch('assets/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    runSite(data);
  });

function randomItem (xs) {
  return xs[Math.floor(Math.random() * xs.length)];
}

function makeId (id) {
  return id.replace(/[^0-9A-Za-z]/g, '-').toLowerCase();
}

function runSite (data) {
  const outputElement = $('#output');
  Object.keys(data).forEach(function (key) {
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
  });

  function generateCoursePlan () {
    Object.keys(data).forEach(function (key) {
      const content = randomItem(data[key]);
      $('#' + makeId(key)).html(content);
    });
  }
  $('#generator').on('click', generateCoursePlan);
}
