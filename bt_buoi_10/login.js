const userName=document.getElementById("userName")
const userPassword=document.getElementById("userPassword")
const loginButton=document.getElementById("loginButton")
const USER_NAME='ybinh';
const PASS_WORD='230704'
//console.log(local)
let userValue=''
let passValue=''
userName.addEventListener("change",function(event){
    userValue= event.target.value
})
userPassword.addEventListener("change",function(event){
    passValue= event.target.value
})

loginButton.addEventListener("click",function(){
    //console.log(userValue, passValue)
    if(userValue===USER_NAME && passValue===PASS_WORD){
        localStorage.setItem("login",true)
        window.location.href ="/bt_buoi_10/index.html"
        
    }else{
        alert('Đăng nhập không thành công')
    }
})

