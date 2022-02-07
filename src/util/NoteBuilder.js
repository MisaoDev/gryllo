const randomTitle = require('random-title');
const randomSentence = require('random-sentence');
const randomColor = require('random-color');
const Color = require('color');

function getEmptyNote(id) {
  return {
    id: id,
    title: 'New note',
    content: 'Write your note here',
    color: randomColor(0.3, 0.9).hexString(),
  };
}

function getRandomNote(id) {
  return {
    id: id,
    title: randomTitle({ min: 1, max: 4 }),
    content: randomSentence({ min: 5, max: 17 }),
    color: randomColor(0.2, 1).hexString(),
  };
}

export {getEmptyNote, getRandomNote};