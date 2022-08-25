let a = 30;
let b = 0;

let waitingData = new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
        Resolve(30)
    },2000)
})

waitingData.then((Data)=>{
    console.log(a+Data)
})

// or //

// waitingData.then((Data)=>{
//     b=Data;
//     console.log(a+b)
// })
