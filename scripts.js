document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.tzeet-text');
    const charCounter = document.querySelector('.char-counter');
    const sendButton = document.querySelector('.send-button');
  
    textarea.addEventListener('input', function() {
      const maxLength = 140;
      const currentLength = textarea.value.length;
      const remaining = maxLength - currentLength;
  
      if (currentLength === 0) {
        charCounter.style.display = 'none';
      } else {
        charCounter.style.display = 'inline';
        charCounter.textContent = `${remaining} caracteres restantes`;
      }
  
      if (remaining < 40 && remaining >= 0) {
        charCounter.style.color = 'rgb(255, 200, 0)';
      } else if (remaining < 0) {
        charCounter.style.color = 'rgb(255, 0, 0)';
      } else {
        charCounter.style.color = 'rgb(83, 100, 113)';
      }
  
      if (currentLength === 0 || currentLength > maxLength) {
        sendButton.disabled = true;
      } else {
        sendButton.disabled = false;
      }
    });
  });

document.getElementById('tweetButton').addEventListener('click', function() {
    // Abre o modal quando o botão de Tweet for clicado
    const modal = document.getElementById('tzeetModal');
    modal.showModal();
  });
  
  document.querySelector('.send-button').addEventListener('click', function() {
    const modal = document.getElementById('tzeetModal');
    modal.close(); // Fecha o modal após o envio
  });
  


  