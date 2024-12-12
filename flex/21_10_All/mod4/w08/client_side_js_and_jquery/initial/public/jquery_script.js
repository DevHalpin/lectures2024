const myFunction = () => {
    const h1 = $('h1');
    console.log(h1)
    h1.on('click', (event) => {
        console.log(event)
        h1.addClass('red');
    })
}

$(document).ready(() => {
const node = $('li');
console.log(node);
node.on('click', (event) => {
    console.log(event)
})

const li = $('<li>').text('Hello World!');
console.log(li);
$('#main-list').append(li);
$('h1').fadeOut('5000');
$('h1').fadeIn('1000');
$('#main-list').hide();
$('#main-list').slideDown('5000');
myFunction();

});