document.write('Câu 1: <br>')
var arrA =["Apple","Strawberry","Banana"]
//cau a
arrA.splice(2,0,"Rose","Tulip")
//cau b
document.write('Cau a: <br>',arrA+'<br><br>')
let arrB =["Apple_Version1","Strawberry_Version1","Banana_Version1"]
let arrC =arrA.concat(arrB)
document.write('Cau b: <br>',arrC+'<br><br>')
//cau c
arrC.splice(2,1)
document.write('Cau c: <br>',arrC)
//cau d
let arrD=[{
    name: "Ybinh",
    age: 10
},
{
    name: "Pnhi",
    age: 11
},
{
    name: "Nanh",
    age: 12
},
{
    name: "Pchinh",
    age: 13 
},
{
    name: "THieu",
    age: 14
}
]

function arrNewName(){
    const arrNew=arrD.map(x =>x.name)
    return arrNew
}
document.write('<br><br>Cau d: <br>')
document.write(arrNewName()+'<br>')

function arrSumAge(){
    const arrAge=arrD.map(x=>x.age)
    let i=0
    let sum=0
    document.write('Tuổi: ',arrAge+'<br>')
    while(i<arrAge.length){
        sum+=arrAge[i]
        i++
    }
    return sum/5
}
document.write('Tổng trung bình tuổi: ',arrSumAge()+'<br><br>')
//bài 2
 
document.write('Câu 2<br>')
const myInfo=[
    {
    name:"yến bình",
    info:[ 
        {birth: {
            day: 23,
            month:7
        }},
        {age: {
            year: 2004,
            old: 18
        }},
        {fullname:{
            lastName: " Nguyễn Thị",
            firstName: "Yến Bình"
        }
    }     
    ]
}
]

arrIn=(myInfo[0].info)
function takeMyInfo(){
    let i=0
    for(i;i<arrIn.length;i++){
        arrIn[0]=Object.assign(arrIn[0],arrIn[i])
    }
    return arrIn[0].birth.day+' '+ arrIn[0].birth.month+' '+
    arrIn[0].age.year +' ' + arrIn[0].age.old + arrIn[0].fullname.lastName+' '+
    arrIn[0].fullname.firstName
}
console.log(takeMyInfo())
