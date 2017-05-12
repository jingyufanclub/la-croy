window.onload = function() {

  const images = ['avocado', 'berry', 'cuke', 'flowers', 'grapefruit', 'peony', 'plain', 'pomelo', 'tangerine']

  const colors = ['#fff4f4','#ffffff','#d4fc79','#c2e9fb','#cfd9df','#d9ded8','#96fbc4']

  // Fisher-Yates shuffle

  function shuffle(array) {
    let currentIndex = array.length, temp, randomIndex;
    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex--);
      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  let numberOfItems =  Math.floor(Math.random() * (images.length - 4 + 1)) + 4;

  let selectedImages = shuffle(images).slice(0, numberOfItems);

  let imageUrls = selectedImages.map(img => "url('images/" + img.toString() + ".png')").toString();

  let bgColor = shuffle(colors).pop();

  document.body.style.backgroundColor = bgColor;
  document.body.style.backgroundImage = imageUrls;
}
