//bài 1
var numberOne = 1
var numberTwo = 2
var sum = numberOne + numberTwo
document.write('Câu 1:' + '<br>')
document.write(numberOne+' '+numberTwo+'<br>')
document.write('Tổng 2 số nguyên: ' + sum + '<br><br>')
//bài 2
var radius = 5
const pi = 3.14
var perimeterOfCircle = 2 * pi * radius
document.write('Câu 2: ' + '<br>')
document.write('Bán kính: ', radius)
document.write('<br>' + 'Chu vi hình tròn: ' + perimeterOfCircle + '<br><br>')

//bài 3
var number = 4
document.write('Câu 3:' + '<br>' + 'Số cần kiểm tra: ' + number + '<br>')
if (number % 2 == 0) {
    document.write('-> ' + number + ' là số chẵn' + '<br><br>');
}
else {
    document.write('-> ' + number + 'là số lẻ' + '<br><br>')
}

//bài4
var firstName = 'Yến';
var lastName = ' Bình';
document.write('Câu 4. ' + '<br>' + firstName + lastName + '<br><br>')

//bài5 
var myName = 'Ybinh'
document.write('Câu 5. ' + '<br>')
document.write('Chuỗi: ', myName + '<br>')
if (myName.indexOf('b') != -1) {
    document.write('-> Chuỗi có chứa kí tự "b" ' + '<br><br>');
}
else {
    document.write('-> Chuỗi không có chứa kí tự "b"' + '<br><br>');
}

//bài6
var myString = 'buồn ngủ quắ huhu'
document.write('Câu 6:' + '<br>')
document.write('Chuỗi: ', myString)
if (myString.length != 0) {
    document.write('<br>' + '-> Không phải chuỗi rỗng' + '<br><br>');
}
else {
    document.write('Là chuỗi rỗng' + '<br><br>');
}

//bài7
var number = -10
document.write('Câu 7:' + '<br>')
document.write('Số cần kiểm tra: ', number + '<br>')
if (number > 0) {
    document.write('-> ' + number + ' là số dương' + '<br><br>');
} else {
    document.write('-> ' + number + ' là số âm' + '<br><br>');
}

//bài8
var myNumber = 8
var yourNumber = -10
var sum = myNumber + yourNumber
var difference= myNumber-(yourNumber)
var product=myNumber/yourNumber
var quotient=myNumber*yourNumber
document.write('Câu 8:' + '<br>')
document.write(myNumber + ' ' + yourNumber + '<br>')
document.write('Tổng: ', sum + '<br>')
document.write('Hiệu: ', difference+'<br>')
document.write('Tích: ',quotient+'<br>')
document.write('Thương: ',product+'<br>')