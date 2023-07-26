//navbar and search 
const nav = document.getElementsByClassName("Nav")
const content = document.querySelector(".div2-child-2 .text")
const local = localStorage.getItem("login")
const log = document.getElementById("buttonLog")
const avtLog = document.querySelector(".div2-child-1 .avt")
const proFile = document.querySelector(".div1-child-2")
const searchList = document.querySelector(".searchHistory")
const search = document.querySelector(".div2-child-1 input")
const text = document.querySelector(".divDash p")
const list = document.querySelector('.searchHistory ul')
const arraySearchHistory = []

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", function () {
        content.innerHTML = nav[i].innerHTML
    })
}

search.addEventListener("click", function (e) {
    e.target.value = ''
})

search.addEventListener("click", function () {
    searchList.style.display = 'block'
})

search.addEventListener("change", function (e) {
    text.innerHTML = e.target.value
    if (arraySearchHistory.length < 5 && text.innerHTML !== '') {
        arraySearchHistory.push(text.innerText)
        list.textContent = ""
        const listReusult = arraySearchHistory.map(function (element, index, array) {
            const li = document.createElement('li')
            li.innerText = arraySearchHistory[index]
            list.appendChild(li).style.marginBottom = "15px"
            return list
        
        })
    }
    //console.log(arraySearchHistory)
})

search.onblur = function () {
    searchList.style.display = 'none'
}

if (local) {
    log.style.display = "none"
} else {
    avtLog.style.display = "none"
    proFile.style.display = "none"
    log.onclick = function () {
        window.location.href = "/bt_buoi_10/login.html"
    }
}










