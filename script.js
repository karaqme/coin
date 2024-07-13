let tg = window.Telegram;
if (tg != undefined) {
  if (tg.WebApp != undefined && tg.WebApp.initData != undefined) {
    let safe = tg.WebApp.initData;
    tg.WebApp.curtainSwipeEnabled = false;
    tg.WebApp.curtainOffset = 100; // or any other value
    tg.WebApp.backgroundColor = '#000';
    tg.WebApp.headerColor = '#000';
    tg.WebApp.expand();
  }
}

let userData = {};

function storeUserData(key, value) {
  userData[key] = value;
  localStorage.setItem('user_data', JSON.stringify(userData));
}

function getUserData(key) {
  const storedData = localStorage.getItem('user_data');
  if (storedData) {
    userData = JSON.parse(storedData);
    return userData[key];
  } else {
    return null;
  }
}

let balance = parseInt(document.querySelector('.balance').textContent.replace(/[^0-9]/g, ''));
let schet = document.getElementById('schet');
let schetValue = parseInt(schet.textContent.split('/')[1]);

function addBalance() {
  if (balance > 0) {
    balance++;
    schetValue = Math.max(schetValue - 1, 0);
    storeUserData('balance', balance);
    updateBalance();
  }
}

function updateBalance() {
  document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
  schet.innerHTML = schetValue + '/500';
}

function startTimer() {
  timer = setInterval(() => {
    if (schetValue < 500) {
      schetValue++;
      storeUserData('balance', balance - 1);
      updateBalance();
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

document.querySelector('.moneta').addEventListener('click', addBalance);
startTimer();

updateBalance();

let home1 = document.getElementById('home1');
let home2 = document.getElementById('home2');
let home3 = document.getElementById('home3');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');

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
}

let h3 = document.getElementById('h3');
let h4 = document.getElementById('h4');

function myr1() {
  h3.innerHTML = '✔️';
  balance += 5000;
}
function myr2() {
  h4.innerHTML = '✔️';
  balance += 5000;
}