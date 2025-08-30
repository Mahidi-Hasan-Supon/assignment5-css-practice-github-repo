// heart btn er kaj
document.getElementById('love-btn').addEventListener('click',function(){
    const number = Number(document.getElementById('love-number').innerText)
    const total = number + 1
    document.getElementById('love-number').innerText = total 
})
document.getElementById('love-btn1').addEventListener('click',function(){
    const number = Number(document.getElementById('love-number').innerText)
    const total = number + 1
    document.getElementById('love-number').innerText = total 
})




// copy btn er kaj

document.getElementById('copy-btn1').addEventListener('click',function(){
    const copyNumber  = parseInt(document.getElementById('copy-number').innerText)
    const number = parseInt(document.getElementById('number1').innerText)
    const total = copyNumber + 1;
    alert('copied the number:'+number)
    document.getElementById('copy-number').innerText = total;
})
document.getElementById('copy-btn2').addEventListener('click',function(){
    const copyNumber  = parseInt(document.getElementById('copy-number').innerText)
    const number = parseInt(document.getElementById('number2').innerText)
    const total = copyNumber + 1;
    alert('copied the number:'+number)
    document.getElementById('copy-number').innerText = total;
})

