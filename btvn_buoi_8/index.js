const array = [
    [
        {name: "Hoàng", score: 2},
        {name: "Long", score: 4}
    ],
    [
        {name: "Tú", score: 100},
        {name: "Linh", score: 10}
    ],
    [
        {name: "Ngọc", score: 1}, 
        {name: "Long Lê", score: 9}
    ]
   ]

//bài 1
/*function sortArray(){
var newArr=[]
array.forEach((arr)=>{
    arr.forEach((data)=>{
        //console.log(data);
        newArr.push(data)
    });
});
newArr.sort(function(score1,score2){
    return score1.score-score2.score
});
return newArr
/*let i=0
let j=0
for(i;i<array.length;i++){
    for(j;j<array[i].length;j++){
        console.log(array[i][j])
        newArr.push(array[i][j])
    }
}
return newArr

}
console.log(sortArray())*/

//bài 2
const arrayOfEx2 = [
    ["Bai_01","Bai_02","Bai_03","Bai_04"],
    ["Bai_01","Bai_03"],
    ["Bai_02","Bai_04","Bai_01"],
    ["Bai_04","Bai_02","Bai_03","Bai_01"],
    ["Bai_04","Bai_03","Bai_02","Bai_01"],
    ['Bài_05','Bai_06']

 ]
 function exObject(){
 const arrayFlat = arrayOfEx2.flat()
     console.log(arrayFlat)
 arrayRemoveDoublicates=arrayFlat.filter((element,index,array) =>{
    return array.indexOf(element) === index
 })
 //console.log(arrayRemoveDoublicates)
 const arrayResult=[]
 console.log(arrayRemoveDoublicates.length)
  arrayRemoveDoublicates.map(function(element, index){
    if(index<arrayRemoveDoublicates.length-1){
        arrayResult.push({ [element] : arrayRemoveDoublicates[index+1]})
    }
 })
 return arrayResult
}
console.log(exObject())
 


 

