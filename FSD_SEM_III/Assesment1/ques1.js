const EventEmitter=require('events');

class SessionManager extends EventEmitter{
    constructor(){
        super();
        this.on('greet',(username)=>{
            console.log(`Hello, ${username}! Welcome.`);
        });
        this.on('exit',(code)=>{
            console.log(`Session closed with code ${code}. Goodbye!`);
        });
        this.once('greet',()=>{
            console.log('First login of the day!');
        });
    }

    trigger(command,...args){
        if(command==='greet'||command==='exit')
            this.emit(command,...args);
        else
            console.log(`Unknown event: ${command}`);
    }
}

const session=new SessionManager();

session.on('error',(err)=>{
    console.log(`Error: ${err.message}`);
});

session.trigger('greet','Uddhav');
session.trigger('greet','Rahul');
session.trigger('greet','Aman');

console.log(`Current greet listener count: ${session.listenerCount('greet')}`);

session.trigger('exit',0);
session.trigger('login');

session.emit('error',new Error('Something went wrong in the session'));