// JavaScript functionality for the chat app

// Add a new chat to the chat list in the left pane
function addNewChat(chatName) {
    const chatList = document.querySelector('.chat-list');
    const newChat = document.createElement('div');
    newChat.classList.add('chat');
    newChat.textContent = chatName;
    chatList.appendChild(newChat);
}

// Handle the "New Chat" button click event
const newChatButton = document.querySelector('.new-chat-button');
newChatButton.addEventListener('click', () => {
    const chatName = prompt('Enter the chat name:');
    if (chatName) {
        addNewChat(chatName);
    }
});

 //Handle the "Hide Left Pane" button click event
// const hidePaneButton = document.querySelector('.hide-pane-button');
// const leftPane = document.querySelector('.left-pane');
// hidePaneButton.addEventListener('click', () => {
//     leftPane.style.display = 'none';
 //});

// Handle sending a message
const sendButton = document.querySelector('.send-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.querySelector('.chat-messages');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = messageText;
        chatMessages.appendChild(message);
        messageInput.value = '';
    }
});
