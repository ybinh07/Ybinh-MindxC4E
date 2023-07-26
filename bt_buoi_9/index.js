const nav=document.getElementsByClassName("Nav")
//console.log(nav.length)  
var content=document.querySelector('.text')
for(let i=0;i<nav.length;i++){
        nav[i].addEventListener("click",function(){
            console.log(nav[i].innerText)
            content.innerText=nav[i].innerText
        })
    }
var board=document.querySelector('.divDash p')
//console.log(board)
var inputElement=document.querySelector('input')
inputElement.onclick=function(e){
    //console.log(e.target.value)
    e.target.value=''
}
inputElement.onchange=function(e){
    board.innerText=e.target.value
}








