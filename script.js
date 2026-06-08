const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function sendMessage() {
    const message = messageInput.value.trim();

    if (message === "") return;

    const sentMessage = document.createElement("div");
    sentMessage.classList.add("message", "sent");
    sentMessage.textContent = message;

    chatBox.appendChild(sentMessage);

    messageInput.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
    
    setTimeout(() => {
        const reply = document.createElement("div");
        reply.classList.add("message", "received");
        reply.textContent = "You said: " + message;

        chatBox.appendChild(reply);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
