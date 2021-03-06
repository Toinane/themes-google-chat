/*
NAME: Super Notification
DESCRIPTION: This plugin allows you to have notifications as long as you have not read the message received from the person desired.
VERSION: 1.0
AUTHOR: Toinane
*/

const __name = 'Gladys'; /* Name of the user you want receive notifications */
const __message = 'Tu as reçu un message de Gladys'; /* The message in notifications */
const __delay = 5000; /* the delay between each notification */

(function() {
  const regex = new RegExp(__name, 'gmi');

  setInterval(function() {
    let items = document.querySelectorAll('.IL9EXe');
    for(let item of items) {
      if(regex.exec(item.innerHTML)) {
        if(/0&nbsp;notification/gmi.exec(item.innerHTML)) {
        } else {
          new Notification(__message);
        }
      }
    }
  }, __delay)
})()
