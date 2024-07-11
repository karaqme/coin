let tg      = window.Telegram;
  
if(tg != undefined){
  if (tg.WebApp != undefined && tg.WebApp.initData != undefined){
   
  let safe    = tg.WebApp.initData;
  
  tg.WebApp.backgroundColor = '#000';
  tg.WebApp.headerColor = '#000';
  tg.WebApp.expand(); 

  }    
}


let balance = parseInt(document.querySelector('.balance').textContent.replace(/[^0-9]/g, ''));
let schet = document.getElementById('schet');
let schetValue = parseInt(schet.textContent.split('/')[1]);
let timer = null;

function addBalance() {
    if (balance > 0) {
      balance++;
      schetValue = Math.max(schetValue - 1, 0); // ensure schetValue doesn't go below 0
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
      updateBalance();
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

document.querySelector('.moneta').addEventListener('click', addBalance);
startTimer();

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

let subscribet = document.getElementById('subscribet')

function subscribetg() {
  subscribet.style.background = 'lime';
  subscribet.style.color = 'black';
}