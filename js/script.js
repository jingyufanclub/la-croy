window.onload = function() {

  const bgImages = ['avocado', 'berry', 'cuke', 'flowers', 'grapefruit', 'peony', 'plain', 'pomelo', 'tangerine']

  function randomize(array) {
    let length = Math.floor(Math.random() * (array.length - 3 + 1)) + 3;
    console.log(length);
    let randomBgImages = [];
    for (let i = 0; i < length; i++){
      image = array.splice(Math.floor(Math.random() * array.length), 1);
    console.log('url("images/' + image.toString() + '.png")')
    randomBgImages.push('url("images/' + image.toString() + '.png")')
    }
    console.log(randomBgImages.toString())
    return randomBgImages.toString()
  }
  document.body.style.backgroundImage = randomize(bgImages);
}
