let tg = window.Telegram;
if (tg != undefined) {
  if (tg.WebApp != undefined && tg.WebApp.initData != undefined) {
    let safe = tg.WebApp.initData;
    tg.WebApp.backgroundColor = '#000';
    tg.WebApp.headerColor = '#000';
    tg.WebApp.expand();
    tg.WebApp.enableClosingConfirmation();
  }
}