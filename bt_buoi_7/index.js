//bài 1 
document.write('Câu 1: <br>')
let number = 11
document.write('Số cần kiểm tra: ', number + '<br>')
if (number > 0) {
    document.write(number + ' là số nguyên dương <br><br>');
}
else {
    document.write(number + ' là số nguyên âm <br><br>')
}


//bài 2
document.write('Câu 2: <br>')
var numberTwo = 22
document.write('Số cần kiểm tra: ', numberTwo + '<br>')
if (numberTwo == 2) {
    document.write(numberTwo + ' là số nguyên tố <br><br>')
}
else if (numberTwo < 2) {
    document.write(numberTwo + ' không là số nguyên tố <br><br>')
}
else {
    var n = numberTwo / 2
    for (let i = 2; i <= numberTwo / 2; i++) {
        if (numberTwo % i == 0) {
            document.write(numberTwo + ' không là số nguyên tố <br><br>')
            break
        }
        else {
            document.write(numberTwo + ' là số nguyên tố <br><br>')
            break;
        }
    }
}

//bài 3
document.write('Câu 3: <br>')
var numberThree = 23
document.write('Số cần kiểm tra: ', numberThree + '<br>')
if (numberThree % 2 == 0) {
    document.write(numberThree + ' là số chẵn <br><br>')
}
else {
    document.write(numberThree + ' là số lẻ <br><br>');
}

//bài 4
document.write('Câu 4: <br>')
var numberFour = 5
if (numberFour < 0) {
    document.write(numberFour + ' Không có số chính phương')
}
else {
    document.write('Các số chính phương nhỏ hơn hoặc bằng ', numberFour + ': ')
    for (var i = 0; i * i <= numberFour; i++) {
        var n = Math.pow(i, 2)
        document.write(n + ' ')
    }
}

