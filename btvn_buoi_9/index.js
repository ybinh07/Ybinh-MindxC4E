const homeButton = document.getElementsByClassName("li1")[0]
const box1 = document.querySelector('.div1')
const list = document.querySelector('.div1 .divchild')
const li = document.createElement('li')
const search = document.getElementById('search')
const box2 = document.querySelector('.div2 ')
const text = document.querySelector('.div2 .divchild')
var arrayText = []
const arraySucessMetrics = [
    'Monthly Active Users Sending Invites',
    'Invitees per Inviter',
    'Conversion Rate to New User',
    'Conversion Rate to New Guest',
    'Conversion Rate to New Host',
    'Revenue Impact Potential'
]
var display = 1

homeButton.onclick = function () {
    if (display == 1) {
        box1.style.background = '#2F80ED'
        list.textContent = ''
        const listResult = arraySucessMetrics.map(function (element, index, array) {
            const li = document.createElement('li')
            li.innerText = arraySucessMetrics[index]
            list.appendChild(li).style.paddingTop = '40px'
            return list

        })
        display = 0
    } else {
        box1.style.background = 'white'
        display = 1
    }
}
var colors = ['#F4A4A4', '#fff0d6', '#141414']

search.addEventListener('change', function (e) {
    text.innerHTML = e.target.value
    text.style.padding = '40px'
    text.style.color='#2474E5'
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box2.style.background = randomColor
    //console.log(randomColor)
})

