window.onload = function() {

  const images = ['avocado', 'berry', 'cuke', 'flowers', 'grapefruit', 'peony', 'plain', 'pomelo', 'tangerine']

  const colors = ['#fff4f4','#ffffff','#ff0000','#d4fc79','#c2e9fb','#cfd9df','#d9ded8','#96fbc4']

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const newButton = document.querySelector('#new-button')
  const downloadButton = document.querySelector('#download-button')

  function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
  };

  const resizeCanvas = debounce(function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }, 66);

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);

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

  function draw() {
    let numberOfItems =  Math.floor(Math.random() * (images.length - 4 + 1)) + 4;
    let selectedImages = shuffle(images).slice(0, numberOfItems);
    let imageUrls = selectedImages.map(img => "images/" + img.toString() + ".png");
    let bgColor = shuffle(colors)[0];
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageUrls.length; i++) {
      let img = new Image();
      img.src = imageUrls[i];
      img.onload = function() {
        let pattern = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }

  newButton.addEventListener('click', function () {
    window.location.reload()
  })

  downloadButton.addEventListener('click', function () {
    canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
  })

}
