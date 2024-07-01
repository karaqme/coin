let balance = parseInt(document.querySelector('.balance').textContent.replace(/[^0-9]/g, ''));
function addBalance(event) {
    if (event.touches) {
        event.preventDefault();
        for (let i = 0; i < event.touches.length; i++) {
            let touch = event.touches[i];
            if (touch.target.classList.contains('img2')) {
                balance++;
                document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
            }
        }
    }
}