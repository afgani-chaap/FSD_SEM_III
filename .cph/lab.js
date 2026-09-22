const fs=require("fs");
fs.writeFile("example.txt","hello world",(err)=>{
    if(err) throw err;
    console.log("file created");

fs.readFile('example.txt','utf8',(err,data)=>{
    console.log('File content:', data );
});
fs.writeFile('example.txt','this is the updarted content',(err)=>{
    if(err) throw err;
    console.log('file overwritten (updated)!');
});
fs.appendFile('example.txt','\nThis line was added.', (err)=>{
    if(err) throw err;
    console.log('file updated(appended)!');
});
fs.unlink('example.txt', (err)=>{
    if (err) throw err;
    console.log('file deleted!');
});
});

// console.log('1:Start (sync)');
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