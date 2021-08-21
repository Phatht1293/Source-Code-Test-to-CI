let colors = [
    '#00aefd',
    '#ffa400',
    '#07a787',
    '#ff7870',
    'black',
    'pink',
    'yellow',
    '#e74c3c',
    '#2979ff',
  ];

  const buttonRandom = document.querySelector('.btn');
 

  buttonRandom.addEventListener('click', function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById('show').innerHTML=""
    document.getElementById('show').innerHTML+=randomColor
  });

  const copybtn = document.querySelector('.btn_copy');

 