let balance = 0; // Initialize balance to 0
let ws; // WebSocket connection

// Connect to the WebSocket server when the page loads
window.addEventListener('load', () => {
  ws = new WebSocket('wss://api.telegram.org:443/federate');
  ws.onmessage = event => {
    if (event.data.startsWith('/')) {
      // Handle incoming messages from the Telegram bot
      const message = JSON.parse(event.data);
      if (message.text === '/start') {
        // Handle start command
        console.log('Bot started');
      } else if (message.text === '/balance') {
        // Handle balance command
        ws.send(`{"action": "get_balance"}`);
      } else if (message.text.startsWith('/add ')) {
        // Handle add command
        const amount = parseInt(message.text.substring(5));
        balance += amount;
        ws.send(`{"action": "update_balance", "balance": ${balance}}`);
      }
    }
  };
  ws.onopen = () => {
    // Send a message to the WebSocket server to get the initial balance
    ws.send(`{"action": "get_balance"}`);
  };
});

// Update the balance when the button is clicked
function addBalance() {
  balance++;
  document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
}

// Update the balance when the WebSocket receives a new balance value
ws.onmessage = event => {
  if (event.data.startsWith('{"action": "update_balance", "balance":')) {
    const newBalance = parseInt(event.data.substring(27));
    balance = newBalance;
    document.querySelector('.balance').innerHTML = '<img src="msg6362875622-76286 (1).png" alt="" class="img1"> ' + balance;
  }
};