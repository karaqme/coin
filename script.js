let balance = parseInt(document.querySelector('.balance').textContent.replace(/[^0-9]/g, ''));
function addBalance() {
    balance++;
    document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
}