let arrs =[];

//function calll
function getInputValue(value){
    const addValue = Number(document.getElementById(value).innerText)
    return addValue
}

// set inner text 

function setInnerText(value){
    const loveNumber = document.getElementById('love-number')
    loveNumber.innerText = value
    
}



// heart btn er kaj
document.getElementById('love-btn').addEventListener('click',function(){
   const newValue = getInputValue('love-number')
    const total = newValue + 1
    setInnerText(total)
})
document.getElementById('love-btn1').addEventListener('click',function(){
    const newValue = getInputValue('love-number')
    const total = newValue + 1
    document.getElementById('love-number').innerText = total 
})




// copy btn er kaj

document.getElementById('copy-btn1').addEventListener('click',function(){
    const copyNumber  = parseInt(document.getElementById('copy-number').innerText)
    const number = parseInt(document.getElementById('number1').innerText)
    const total = copyNumber + 1;
    alert('copied the number:'+number)
    document.getElementById('copy-number').innerText = total;

    arrs.push({
        title:'National Emergency Number',
        data: new Date().toLocaleTimeString(),
        number:999
    })
})
document.getElementById('copy-btn2').addEventListener('click',function(){
    const copyNumber  = parseInt(document.getElementById('copy-number').innerText)
    const number = parseInt(document.getElementById('number2').innerText)
    const total = copyNumber + 1;
    alert('copied the number:'+number)
    document.getElementById('copy-number').innerText = total;

      arrs.push({
        title:'National Emergency Number',
        data:new Date().toLocaleTimeString(),
        number:222
    })
})




// call history btn

document.getElementById('call-btn').addEventListener('click',function(){
    const callhistorydownContainer = document.getElementById('call-history-down')
    callhistorydownContainer.innerText=''
    for(const arr of arrs){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="gay-parent ">
          <div>
            <h1>${arr.title}</h1>
            <p>${arr.number}</p>
            
        </div>
        <div>
            <h1>${arr.data}</h1>
        </div>
      </div>
        `
        callhistorydownContainer.appendChild(div)
    }
})
document.getElementById('call-btn1').addEventListener('click',function(){
    const callhistorydownContainer = document.getElementById('call-history-down')
    callhistorydownContainer.innerText=''
    for(const arr of arrs){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="gay-parent ">
          <div>
            <h1>${arr.title}</h1>
            <p>${arr.number}</p>
            
        </div>
        <div>
            <h1>${arr.data}</h1>
        </div>
      </div>
        `
        callhistorydownContainer.appendChild(div)
    }
})

