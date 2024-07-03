let balance = parseInt(document.querySelector('.balance').textContent.replace(/[^0-9]/g, ''));
function addBalance() {
    balance++;
    document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
}
let home1 = document.getElementById('home1')
let home2 = document.getElementById('home2')
let home3 = document.getElementById('home3')

function malou2() {
    home1.style.display = 'none';
    home3.style.display = 'none';
    home2.style.display = 'block';
}
function malou1() {
    home2.style.display = 'none';
    home3.style.display = 'none';
    home1.style.display = 'block';
}
function malou3() {
    home1.style.display = 'none';
    home2.style.display = 'none';
    home3.style.display = 'block';
}