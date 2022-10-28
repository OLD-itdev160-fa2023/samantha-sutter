// Array to store messages
var messages = [];

// Message Type look-up object. Similar to enum. 
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

// Seed Data
var data = [
    {
        type: messageType.out,
        user: 'Bob',
        message: 'Hey, you wanna go get tacobell?'
    },
    {
        type: messageType.in,
        user: 'Dan',
        message: 'Hey Bob! No, I hate tacobell.'
    },
    {
        type: messageType.out,
        user: 'Bob',
        message: "Lets go I don't care about your feelings!"
    },
    {
        type: messageType.in,
        user: 'Dan',
        message: 'That is fair.'
    }
];

// Message Constructor Function
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

// Function To Create & Return an element for the supplied message
function createMessageElement(message) {
    // Create text element for the message
    var messageText = document.createTextNode(message.user + ': ' + message.message);
    
    // Create the element & add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    // Add a class using the message type
    messageEl.className = message.type;

    return messageEl;
}

// Button click event-handler to add new message
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    // Determine message type & set message variables accordingly
    switch (event.target.id) {
        case 'send-button':
            user = 'Bob';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Dan';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown
            break;
    }

    // Create new message
    if (messageInput.value != '') {
        // Construct a message & add it to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        // Create message element
        var el = createMessageElement(message);

        // Add the message element to the DOM
        messageContainerEl.appendChild(el);

        // Reset Input
        messageInput.value = '';
    }
}
    // Load seed data from data array above
    function loadSeedData() {
        for (var i = 0; i < data.length; i++) {
            var message = new Message(data[i].type, data[i].user, data[i].message);
            messages.push(message);
        }

        // Load view with pre-loaded messages
        var messagesContainerEl = document.getElementById('message-container');

        for (var i = 0; i < messages.length; i++) {
            var message = messages[i];
            var el = createMessageElement(message)

            messagesContainerEl.appendChild(el);
        }
}

    var init = function() {
        // Wire event handlers
        document.getElementById('send-button').onclick = addMessageHandler;
        document.getElementById('reply-button').onclick = addMessageHandler;

        // Load seed data from data array
        loadSeedData();
}

    init();