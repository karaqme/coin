let balance = parseInt(localStorage.getItem('balance')) || 500;
let schet = document.getElementById('schet');
let schetValue = parseInt(schet.textContent.split('/')[1]);
let timer = null;

function addBalance() {
  if (balance > 0) {
    balance++;
    schetValue = Math.max(schetValue - 1, 0);
    updateBalance();
  }
}

function updateBalance() {
  document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
  schet.innerHTML = schetValue + '/500';
  localStorage.setItem('balance', balance);
}

function startTimer() {
  timer = setInterval(() => {
    if (schetValue < 500) {
      schetValue++;
      updateBalance();
    } else if (schetValue = 499) {
      schetValue++;
      updateBalance();
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

document.querySelector('.moneta').addEventListener('click', addBalance);
startTimer();

updateBalance(); // initial update



let home1 = document.getElementById('home1');
let home2 = document.getElementById('home2');
let home3 = document.getElementById('home3');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let spanhome = document.getElementById('spanhome');
let spanearn = document.getElementById('spanearn');
let spanfriend = document.getElementById('spanfriend');

function malou2() {
  home1.style.display = 'none';
  home3.style.display = 'none';
  home2.style.display = 'block';
  div1.style.background = 'black';
  div3.style.background = 'black';
  div2.style.background = 'rgb(36, 36, 48)';
  spanearn.style.color = 'white';
  spanhome.style.color = '#ababab';
  spanfriend.style.color = '#ababab';
}

function malou1() {
  home2.style.display = 'none';
  home3.style.display = 'none';
  home1.style.display = 'block';
  div1.style.background = 'rgb(36, 36, 48)';
  div3.style.background = 'black';
  div2.style.background = 'black';
  spanearn.style.color = '#ababab';
  spanhome.style.color = 'white';
  spanfriend.style.color = '#ababab';
}

function malou3() {
  home1.style.display = 'none';
  home2.style.display = 'none';
  home3.style.display = 'block';
  div1.style.background = 'black';
  div3.style.background = 'rgb(36, 36, 48)';
  div2.style.background = 'black';
  spanearn.style.color = '#ababab';
  spanhome.style.color = '#ababab';
  spanfriend.style.color = 'white';
}

let h3 = document.getElementById('h3');
let h4 = document.getElementById('h4');

function myr1() {
  h3.innerHTML = '✔️';
  balance += 5000;
  updateBalance(); // Update the balance display
}

function myr2() {
  h4.innerHTML = '✔️';
  balance += 5000;
  updateBalance(); // Update the balance display
}

let bonusxd = document.getElementById('bonusxd')
function bonus() {
  bonusxd.style.display = 'none';
}