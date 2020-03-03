var colour;

var creature;

var adj;

var verb;

var story;

alert('Let’s make a story together!');

colour = prompt('A colour (orange, indigo, etc.)');

creature = prompt('A creature (dragon, moth, etc.)');

adj = prompt('An adjective (beautiful, super, etc.)');

verb = prompt('A past tense verb (ran, burped, etc.)');

story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\n\nEnter the letter below:');

switch (story) {
  case 'a' :
    document.write(`After snacking on ${adj} treats, the ${colour} bellied ${creature} ${verb} for hours.`);
    break;

  case 'b' :
    document.write(`Amelia ${verb} through the ${adj} ${colour} nebula escaping the space ${creature}.`);
    break;

  case 'c' :
    document.write(`Jackson chose his ${adj}, ${colour} ${creature} card and ${verb} it to the table knowing he won.`);
    break;
}
