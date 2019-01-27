process.stdout.write('prompt > ');
let cmd;
const pwd=require('/Users/ami/fullstack/node-shelll/pwd.js');
const ls=require('/Users/ami/fullstack/node-shelll/ls.js');
const cat=require('/Users/ami/fullstack/node-shelll/cat.js');

process.stdin.on('data',(data)=>{
    const cmd=data.toString().trim();
    if(cmd==='pwd') {
        pwd();
    }
    else if (cmd==='ls'){
        ls();
    }
    else if (cmd.includes('cat ')){
        let newcmd=cmd.split(' ');
        cat(newcmd[1]);
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
    
});

