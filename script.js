let balance = parseInt(document.querySelector('.balance').textContent.replace(/[^0-9]/g, ''));
let schet = document.getElementById('schet');
let schetValue = parseInt(schet.textContent.split('/')[1]);

function updateBalance() {
    schetValue++;
    document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
    schet.innerHTML = schetValue + '/500';
}

let intervalId = null;
setInterval(function() {
    if (schetValue < 500) {
        updateBalance();
    } else {
        clearInterval(intervalId);
    }
}, 1000); // update every 1000ms (1 second)

document.querySelector('.img2').addEventListener('click', function() {
    schetValue--;
    schet.innerHTML = schetValue + '/500';
});

updateBalance(); // initial update


let home1 = document.getElementById('home1')
let home2 = document.getElementById('home2')
let home3 = document.getElementById('home3')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')

function malou2() {
    home1.style.display = 'none';
    home3.style.display = 'none';
    home2.style.display = 'block';
    div1.style.background = 'black';
    div3.style.background = 'black';
    div2.style.background = 'rgb(36, 36, 48)';
}
function malou1() {
    home2.style.display = 'none';
    home3.style.display = 'none';
    home1.style.display = 'block';
    div1.style.background = 'rgb(36, 36, 48)';
    div3.style.background = 'black';
    div2.style.background = 'black';
}
function malou3() {
    home1.style.display = 'none';
    home2.style.display = 'none';
    home3.style.display = 'block';
    div1.style.background = 'black';
    div3.style.background = 'rgb(36, 36, 48)';
    div2.style.background = 'black';
}
