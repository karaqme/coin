function addBalance(event) {
    if (event.target.classList.contains('img2')) {
        event.preventDefault();
        balance++;
        document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
    }
}