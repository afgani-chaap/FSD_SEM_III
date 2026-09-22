console.log('1:Start (sync)');
// setTimeout(() =>{
//     console.log('2: inside setTimeout (macrotask - runs LAST)');
// });

// Promise.resolve().then(()=>{
//     console.log('3. inside Promise.then (microtask - runs before settimeout)');

// });
// fs.readFile(__filename,()=>{
//     console.log('4. inside fs.readfile callback (i/o - runs with microtask)');
// });
// console.log('5 : end(sync)');
// console.log('1:Start (sync)');
// setTimeout(() =>{
//     console.log('2: inside setTimeout (macrotask - runs LAST)');
// });    