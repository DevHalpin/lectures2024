const h1 = document.querySelector('h1');
h1.addEventListener('click', (event) => {
  console.log(event);
  alert('h1 clicked');
});

document.addEventListener('mousemove', (event) => console.log(event));

// programmatically click
setTimeout(() => {
  h1.click();
}, 3000);