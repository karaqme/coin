let tg = window.Telegram;

if (tg!= undefined) {
  if (tg.WebApp!= undefined) {
    tg.WebApp.onReady(() => {
      const initData = tg.WebApp.initData;
      const safe = initData;

      tg.WebApp.backgroundColor = '#000';
      tg.WebApp.headerColor = '#000';
      tg.WebApp.expand();

      const dataCheckString = `auth_date=${initData.auth_date}\nquery_id=${initData.query_id}\nuser=${initData.user}`;
      const secretKey = "7234034998:AAHwu_LN_vuHgQyDUDCOru5WCI704-Wh_dg";
      const hash = initData.hash;

      const crypto = require('crypto-js');
      const hmac = crypto.HmacSHA256(dataCheckString, secretKey);
      const hmacHex = hmac.toString(crypto.enc.Hex);

      if (hmacHex === hash) {
        const userData = initData.user;
        const userId = userData.id;
        const userName = userData.first_name;
        const userUsername = userData.username;
        const userLanguageCode = userData.language_code;
        const userPhoto = userData.photo;

        // Update the HTML elements with user information
        document.getElementById('home1').innerHTML = `
          <p class="xd">Ваш баланс:</p>
          <p class="balance">
            <img src="${userPhoto}" alt="" class="img1">
            25000
          </p>
        `;

        // Add event listeners to the buttons
        document.getElementById('subscribet').addEventListener('click', subscribetg);
        document.getElementById('div1').addEventListener('click', malou1);
        document.getElementById('div2').addEventListener('click', malou2);
        document.getElementById('div3').addEventListener('click', malou3);
      } else {
        console.error("Invalid initData");
      }
    });
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