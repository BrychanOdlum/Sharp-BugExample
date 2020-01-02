const Fs = require('fs');
const Sharp = require('sharp');

const width = 1750;
const height = 250;

Sharp('cockapoo.jpg')
  .resize({ width, height, fit: 'cover', withoutEnlargement: true })
  .toFile('cockapoo2.jpg');
