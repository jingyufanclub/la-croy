window.onload = function() {

  const images = ['avocado', 'berry', 'cuke', 'flowers', 'grapefruit', 'peony', 'plain', 'pomelo', 'tangerine']

  const colors = ['#fff4f4','#ffffff','#ff0000','#d4fc79','#c2e9fb','#cfd9df','#d9ded8','#96fbc4']

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const scaleFactor = backingScale(ctx);
  ctx.scale(scaleFactor,scaleFactor);
  const newLink = document.querySelector('#new-link')
  const downloadLink = document.querySelector('#download-link')

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

  function backingScale(context) {
    if ('devicePixelRatio' in window) {
      if (window.devicePixelRatio > 1) {
          return window.devicePixelRatio;
      }
    }
  return 1;
}

  const resizeCanvas = debounce(function() {
    if (scaleFactor > 1) {
      let w = window.innerWidth;
      let h = window.innerHeight;

      canvas.width = w * scaleFactor;
      canvas.height = h * scaleFactor;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      draw();
    } else {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    }
  }, 66);

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('orientationchange', resizeCanvas);

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
    let numberOfItems =  Math.floor(Math.random() * (images.length - 4 + 1)) + 4,
        selectedImages = shuffle(images).slice(0, numberOfItems),
        imageUrls = selectedImages.map(img => "images/" + img.toString() + ".png"),
        bgColor = shuffle(colors)[0];

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageUrls.length; i++) {
      let img = new Image();
      img.onload = function() {
        let pattern = ctx.createPattern(this, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      img.src = imageUrls[i];
    }
  }

  newLink.addEventListener('click', function () {
    window.location.reload(true)
  })

  function download(link, filename) {
    link.href = canvas.toDataURL();
    link.download = filename;
  }

  downloadLink.addEventListener('click', function() {
    download(this, 'livelacroix.png')
    }, false)
}
