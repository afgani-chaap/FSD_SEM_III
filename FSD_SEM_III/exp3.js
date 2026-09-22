console.log('1: Start(sync)');
setTimeout(() => {
    console.log('2: Inside setTimeout(microtask - timer phase)');
}, 0);
setImmediate(() => {
    console.log('3: Inside setImmediate(microtask - check phase)');
});
process.nextTick(() => {
    console.log('4: Inside process.nextTick(microtask - runs BEFORE setTimeout)');
});
Promise.resolve().then(() => {
    console.log('5: Inside Promise(microtask - runs BEFORE setTimeout)');
});
console.log('6: End(sync)');