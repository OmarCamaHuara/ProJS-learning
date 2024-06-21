const EventEmitter = require('events');
const { measureMemory } = require('vm');

class ChatRoom extends EventEmitter {
    join(user) {
        if(!user) {
            throw new Error('User is requiredto join the chat room');
        }
        console.log(`${user} join the chat room`);
        this.emit('join', user);
    }

    leave(user){
        if(!user) {
            throw new Error('User is required to leave the chat room');
        }
        console.log(`${user} left the chat room`);
        this.emit('leave', user);
    }

    sendMessage(user, message) {
        if(!user || !message) {
            throw new Error('User and message are requerid to send a message')
        }
        console.log(`${user} sent a message: ${message}`);
        this.emit('message', user, message);
    }
}

const chatRoom = new ChatRoom();

chatRoom.on("join", (user) => {
    console.log(`Welcome ${user}!`)
});

chatRoom.on('leave', (user) => {
    console.log(`${user} has left the chat room`)
})

chatRoom.on("message", (user, message) => {
    console.log(`New message from ${user}: ${message}`)
});

chatRoom.join("John")
chatRoom.join("Mariana")
chatRoom.sendMessage("John", "Hola Mariana, que tal?")
chatRoom.sendMessage("Mariana", "Hello John, fine taks")
chatRoom.leave("Mariana")
chatRoom.sendMessage("John", "Mariana where are you!!")
chatRoom.leave("John")