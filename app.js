var button = document.querySelector('button');
var fact = 0;
button.addEventListener('click', () => {

    if (fact === 1) {
        fact = 0;
        document.querySelector('p').textContent = 'Add Friend';
        document.querySelector('p').style.color = 'rgb(66, 170, 170)';
        document.querySelector('button').textContent = 'Send Request';
    } else {
        fact = 1;
        document.querySelector('p').textContent = 'Friend';
        document.querySelector('p').style.color = 'rgb(66, 170, 113)';
        document.querySelector('button').textContent = 'Remove';
 }


});