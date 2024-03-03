//     “a project developed by MuratAlpTR”

const SteamChatBot = require('node-steam-chat-bot');

// Initialize the chat bot
const myBot = new SteamChatBot('username', 'password');

// Load triggers (customize as needed)
myBot.loadTriggers([
  {
    name: 'logTrigger',
    type: 'LogTrigger',
    options: {
      roomNames: ['room1', 'room2'], // Specify chat room names
    },
  },
]);

// Log in
myBot.login();

// Handle events (e.g., chat messages, typing, etc.)
myBot.on('chat_message', (sender, text, own) => {
  if (text.toLowerCase() === 'ping') {
    myBot.sendChatMessage(sender, 'pong');
  }
});

// When done, log off gracefully
// myBot.logoff();

//     “a project developed by MuratAlpTR”
