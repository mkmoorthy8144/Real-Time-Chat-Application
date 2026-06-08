const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function sendMessage() {
    const message = messageInput.value.trim();

    if (message === "") return;

    // User message
    const sentMessage = document.createElement("div");
    sentMessage.classList.add("message", "sent");
    sentMessage.textContent = message;

    chatBox.appendChild(sentMessage);

    // Clear input
    messageInput.value = "";

    // Auto-scroll
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulated reply
    setTimeout(() => {
        const reply = document.createElement("div");
        reply.classList.add("message", "received");
        reply.textContent = "You said: " + message;

        chatBox.appendChild(reply);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Send button click
sendBtn.addEventListener("click", sendMessage);

// Press Enter to send
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});