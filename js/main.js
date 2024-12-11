const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");






sendBtn.onclick = function () {
    if(messageBar.value.length > 0) {
        let message =          // Message de envoyer par l'utilisateur
            `<div class="chat message">
                <img src="image/userimage.jpg"/>
                <span>
                   ${messageBar.value}
               </span>
            </div>`

        let reponse =              // Reponse de l'IA
            ` <div class="chat response">
               <img src="image/Chatbot.jpg">
               <span>...
               </span>
           </div>`

        messageBox.insertAdjacentHTML("beforeend", message);

        setTimeout(() =>{
            messageBox.insertAdjacentHTML("beforeend", reponse);
        }, 100);
    }
}