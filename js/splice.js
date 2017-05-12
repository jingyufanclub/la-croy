window.onload = function() {

  const bgImages = ['avocado', 'berry', 'cuke', 'flowers', 'grapefruit', 'peony', 'plain', 'pomelo', 'tangerine']

  function randomize(array) {
    // random int between two values, inclusive, i.e. minimum 3, maximum number of items in array: Math.floor(Math.random() * (max - min + 1)) + min
    let length = Math.floor(Math.random() * (array.length - 3 + 1)) + 3;
    console.log(length);

    let randomBgImages = [];

    // iterate randomly selected number of times and each time randomly select an item to remove by splicing and put that item into an array
    while (length) {
      imageName = array.splice(Math.floor(Math.random() * array.length), 1);
      console.log('url("images/' + imageName.toString() + '.png")');
      randomBgImages.push('url("images/' + imageName.toString() + '.png")');
      length--
    }
    console.log(randomBgImages.toString());
    return randomBgImages.toString();
  }
  document.body.style.backgroundImage = randomize(bgImages);
}
