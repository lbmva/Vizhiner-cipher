
function encrypt() {
    var message = document.getElementById("message").value;
    var key = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/ig, "");
    var encryptedMessage = "";
    
    // Введен ли ключ
    if (key.length === 0) {
      alert("Ключ должен содержать хотя бы одну букву!");
      return;
    }
    for (var i = 0; i < message.length; i++) {
      var char = message[i];
      var keyIndex = i % key.length;
      
      if (!char.match(/[a-z]/i)) {
        encryptedMessage += char;
        continue;
      }
      
      var charCode = message.charCodeAt(i);
      var keyLetter = key.charCodeAt(keyIndex) - 97;
      
      // шифруем
      if (charCode >= 65 && charCode <= 90) { // Заглавные буквы
        encryptedMessage += String.fromCharCode(((charCode - 65 + keyLetter) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Прописные буквы
        encryptedMessage += String.fromCharCode(((charCode - 97 + keyLetter) % 26) + 97);
      }
    }
    
    document.getElementById("result").innerText = "Зашифрованное сообщение:\n" + encryptedMessage;
  }
  
  function decrypt() {
    var message = document.getElementById("message").value;
    var key = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/ig, "");
    var decryptedMessage = "";
    

    if (key.length === 0) {
      alert("Ключ должен содержать хотя бы одну букву!");
      return;
    }
    
    for (var i = 0; i < message.length; i++) {
      var char = message[i];
      var keyIndex = i % key.length;
      
  
      if (!char.match(/[a-z]/i)) {
        decryptedMessage += char;
        continue;
      }
      
      var charCode = message.charCodeAt(i);
      var keyLetter = key.charCodeAt(keyIndex) - 97;
      
      // расшифровка
      if (charCode >= 65 && charCode <= 90) { // Заглавные буквы
        decryptedMessage += String.fromCharCode(((charCode - 65 - keyLetter + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Прописные буквы
        decryptedMessage += String.fromCharCode(((charCode - 97 - keyLetter + 26) % 26) + 97);
      }
    }
    
    document.getElementById("result").innerText = "Расшифрованное сообщение:\n" + decryptedMessage;
  }