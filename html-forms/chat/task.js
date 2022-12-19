document.querySelector('.chat-widget__side-text').onclick = function(){
document.querySelector('.chat-widget').className = 'chat-widget chat-widget_active';
document.querySelector('.chat-widget__input').focus();
}

document.querySelector('.chat-widget__input').addEventListener('keypress', function(event){
    let messageText = document.querySelector('.chat-widget__input').value;
    let time  = (new Date().getHours()+':'+new Date().getMinutes());
    if (event.key == 'Enter' && messageText != ''){
        const messages = document.querySelector( '.chat-widget__messages' );

messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${messageText}
    </div>
  </div>
`;
document.querySelector('.chat-widget__input').value = '';

let optionalMessages = ['message1', 'message2', 'message3', 'message4', 'message5', 'message6'];
answerMessage = optionalMessages[Math.floor(Math.random() * (optionalMessages.length - 1))];

messages.innerHTML += `
  <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${answerMessage}
    </div>
  </div>
`;
    }
})
