//bài 1
var age = 17
document.write('Câu 1: <br>')
document.write('Tuổi cần kiểm tra: ', age + '<br>')
if (age < 18) {
    document.write('Bạn chưa đủ tuổi để lái xe <br><br>')
}
else {
    document.write('Bạn đủ tuổi để lái xe <br><br>')
}

//bài 2
document.write('Câu 2: <br>')
var number = -10
document.write('Số cần kiểm tra: ', number + '<br>')
if (number == 0) {
    document.write(' Số nhập vào là số 0 <br><br>')
} else if (number > 0) {
    document.write(number + ' là số dương <br><br>')
} else {
    document.write(number + ' là số âm <br><br>')
}
//bài 3
document.write('Câu 3: <br>')
var n = 15
if (n % 3 == 0 && n % 5 == 0) {
    document.write(n + ' chia hết cho 3 và 5<br><br>')
} else {
    document.write(n + ' không chia hết cho 3 và 5<br><br>')
}
//bài 4
document.write('Câu 4: <br>')
var day = 2
switch (day) {
    case 1:
        day = 'Monday'
        break
    case 2:
        day = 'Tuesday'
        break
    case 3:
        day = 'Wednesday'
        break
    case 4:
        day = 'Thursday'
        break
    case 5:
        day = 'Friday'
        break
    case 6:
        day = 'Saturday'
        break
    case 7:
        day = 'Sunday'
        break
    default:
        day = 'Errol!'

}
document.write(day + '<br><br>')

//bài 5
document.write('Câu 5: <br>')
var numberFive = 5
var sum = 0
document.write('Số nhập vào: ', numberFive + '<br>')
if (numberFive < 0) {
    for (var i = 1; i >= numberFive; i--) {
        sum += i
    }
    document.write('Tổng các số từ 1 đến ' + numberFive + ': ' + sum + '<br><br>')
} else if (numberFive == 0) {
    document.write('Tổng: ', sum + '<br><br>')
}
else {
    for (i = 0; i <= numberFive; i++) {
        sum += i
    }
    document.write('Tổng các số từ 1 đến ' + numberFive + ': ' + sum + '<br><br>')
}

//bài 6
document.write('Câu 6:<br>')
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + '<br>')
}

//bài 7 
document.write('<br> Câu 7: <br>')
document.write('Số chia hết cho 3: ')
for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        document.write(i + ' ')
    }
}
document.write('<br>Số đầu tiên chia hết cho 3: ')
for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        document.write(i + '<br><br>')
        break
    }
}

//bài 8 
document.write('Câu 8<br>')
document.write('for(let i=0;i<100;i++){}')
document.write('<br> Vòng lặp trên lặp 100 lần vì lần lặp đầu là i=0, lần lặp cuối cùng là i=99, i sẽ chạy từ 0->99, từ 0 -> 99 là 100 lần ')

// bài 9 
document.write('<br><br>')
document.write('Câu 9: <br>Vòng lặp while sẽ kiểm tra điều kiện trước, nếu đúng thì mới thực thi, nếu sai thì kết thúc vòng lặp, không thực thi code. <br>')
document.write(' Do while thì thực thi đoạn code trong vòng lặp 1 lần rồi mới kiểm tra điều kiện, nếu điều kiện đúng thì tiếp tục lặp, điều kiện sai thì kết thúc vòng lặp')


