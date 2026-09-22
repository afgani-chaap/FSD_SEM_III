const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`hello, ${name}! welcome to node js.`);
});

myEmitter.on("exit", () => {
    console.log("application closed.");
});

myEmitter.emit("greet", "farm");
myEmitter.emit("exit");