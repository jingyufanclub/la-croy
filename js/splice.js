window.onload = function() {

  const images = ['avocado', 'berry', 'cuke', 'flowers', 'grapefruit', 'peony', 'plain', 'pomelo', 'tangerine']

  function randomize(array) {
    // Choose random integer between two values, inclusive, i.e. minimum 4, maximum number of items in array: Math.floor(Math.random() * (max - min + 1)) + min
    let n = Math.floor(Math.random() * (array.length - 4 + 1)) + 4;

    let randomizedImages = [];

    // Iterate n times and randomly select an item to remove by splicing and put that item into a new array
    while (n) {
      image = array.splice(Math.floor(Math.random() * array.length), 1);
      randomizedImages.push("url('images/" + image.toString() + ".png')");
      n--
    }
    return randomizedImages.toString();
  }
  document.body.style.backgroundImage = randomize(images);
}
