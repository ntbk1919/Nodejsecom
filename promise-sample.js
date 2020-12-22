// function add(n1,n2,callback){
//     let err=false
//   if(n1==0)  {
// err=true
//   }
//   callback(n1+n2,err)
// }
// function multiply(n1,n2,callback){
//     callback(n1*n2)
// }
// function div(n1,n2,callback){
//     callback(n1/n2)
// }

// add(40,20,(sum,err)=>{
//     if(err)
//     console.log("First no is 0")
//     else{
//     console.log(sum)
//     multiply(sum,sum,(product)=>{
//         console.log(product)
//         div(product,10,(result)=>console.log(result))
//     })
// }
// })

const Promise=require('promise')
console.log(Promise)
function add(n1,n2){
    return new Promise((resolve,reject)=>{
        if(n1==0)
        {reject("n1 is 0")}

        resolve(n1+n2)
    })
}

function multiply(n1,n2){
    return new Promise((resolve,reject)=>{
        if(n1==0)
        reject("n1 is 0")
        resolve(n1*n2)
    })
}
add(10,20).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)
}).then((product)=>console.log(product))

.catch((err)=>{console.log(err)})
