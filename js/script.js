//travers

const copybtns = document.getElementsByClassName("copy-btn");
for(let copybtn of copybtns){
    copybtn.addEventListener('click',function(){
        const cardCopy = copybtn.parentNode.parentNode.parentNode.children[1].children[4].children[0].innerText
        // console.log(cardCopy)
       const copynumber = document.getElementById('copy-number').innerText;
       const totalCopy = Number(copynumber) + 1;
        document.getElementById('copy-number').innerText = totalCopy
    })
}
let arr = []
const callbtns = document.getElementsByClassName("call-btn")
for(let callbtn of callbtns){
    
    callbtn.addEventListener('click',function(){
       

        const cardTitle = callbtn.parentNode.parentNode.parentNode.children[1].children[0].innerText
        console.log(cardTitle)
        const cardcall = callbtn.parentNode.parentNode.parentNode.children[1].children[4].children[1].innerText
        console.log(cardcall)
        alert('Error')
        const coinContainer = document.getElementById('coin-container').innerText
        const totalCoin = Number(coinContainer) - 20
        
        document.getElementById('coin-container').innerText = totalCoin

        const historyContainer = document.getElementById('call-history-down')
        const div = document.createElement('div')
        div.innerHTML=`
         <div class="bg" style="gap: 5px; margin: 5px; padding: 5px;">
           <div style="">
             <h1>${cardTitle}</h1>
            <p>999</p>
            <p></p>
           </div>
            <div>
            <p style="padding: 5px; margin-top: 50px;">${arr.data}</p>
            </div>
        </div>
        `
        historyContainer.appendChild(div)
          
    })
}

 document.getElementById('clear-container').addEventListener('click',function(){
    document.getElementById('call-history-down').innerHTML = '';
     document.getElementById('copy-number').innerText = 0;
 })






// let arrs =[];

// //function calll
// function getInputValue(value){
//     const addValue = Number(document.getElementById(value).innerText)
//     return addValue
// }

// // set inner text 

// function setInnerText(value){
//     const loveNumber = document.getElementById('love-number')
//     loveNumber.innerText = value
    
// }



// // heart btn er kaj
// document.getElementById('love-btn').addEventListener('click',function(){
//    const newValue = getInputValue('love-number')
//     const total = newValue + 1
//     setInnerText(total)
// })
// document.getElementById('love-btn1').addEventListener('click',function(){
//     const newValue = getInputValue('love-number')
//     const total = newValue + 1
//     document.getElementById('love-number').innerText = total 
// })




// // copy btn er kaj

// document.getElementById('copy-btn1').addEventListener('click',function(){
//     const copyNumber  = parseInt(document.getElementById('copy-number').innerText)
//     const number = parseInt(document.getElementById('number1').innerText)
//     const total = copyNumber + 1;
//     alert('copied the number:'+number)
//     document.getElementById('copy-number').innerText = total;

//     arrs.push({
//         title:'National Emergency Number',
//         data: new Date().toLocaleTimeString(),
//         number:999
//     })
// })
// document.getElementById('copy-btn2').addEventListener('click',function(){
//     const copyNumber  = parseInt(document.getElementById('copy-number').innerText)
//     const number = parseInt(document.getElementById('number2').innerText)
//     const total = copyNumber + 1;
//     alert('copied the number:'+number)
//     document.getElementById('copy-number').innerText = total;

//       arrs.push({
//         title:'National Emergency Number',
//         data:new Date().toLocaleTimeString(),
//         number:222
//     })
// })




// // call history btn

// document.getElementById('call-btn').addEventListener('click',function(){
//     const callhistorydownContainer = document.getElementById('call-history-down')
//     callhistorydownContainer.innerText=''
//     for(const arr of arrs){
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <div class="gay-parent ">
//           <div>
//             <h1>${arr.title}</h1>
//             <p>${arr.number}</p>
            
//         </div>
//         <div>
//             <h1>${arr.data}</h1>
//         </div>
//       </div>
//         `
//         callhistorydownContainer.appendChild(div)
//     }
// })
// document.getElementById('call-btn1').addEventListener('click',function(){
//     const callhistorydownContainer = document.getElementById('call-history-down')
//     callhistorydownContainer.innerText=''
//     for(const arr of arrs){
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <div class="gay-parent ">
//           <div>
//             <h1>${arr.title}</h1>
//             <p>${arr.number}</p>
            
//         </div>
//         <div>
//             <h1>${arr.data}</h1>
//         </div>
//       </div>
//         `
//         callhistorydownContainer.appendChild(div)
//     }
// })

