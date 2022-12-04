function toCount()
    {
        let arrNum = [];
        let count = 0;
        for (i = 0; i <= 9; i++)
            {
                arrNum[i] = +prompt ("Nhập vào một số nguyên thứ " + i);
                if (arrNum[i] >= 10) count += 1;
            }
        document.getElementById('result1').innerText = "Có " + count + " số nguyên lớn hơn hoặc bằng 10."
    }

function findMax()
    {
        let arrNum = [];
        let max;
        let idMax;

        for (i = 0; i <= 9; i++)
            {
                arrNum[i] = +prompt ("Nhập vào một số nguyên thứ " + i);
            }

        max = arrNum[0]; idMax = 0;

        for (i = 1; i <= arrNum.length - 1; i++)
            {
                if (arrNum[i] >= max)
                    {
                        max = arrNum[i];
                        idMax = i;
                    }
            }
        document.getElementById('result2').innerText = "Số nguyên lớn nhất là " + max + ". Có vị trí thứ " + idMax + " trong mảng."
    }

function maxAverage()
    {
        let n = +prompt ("Nhập độ dài của mảng muốn tạo:")
        let arrNum = [];
        let max;
        let sum = 0;

        for (i = 0; i <= n - 1; i++)
            {
                arrNum[i] = +prompt ("Nhập vào một số nguyên thứ " + i);
                sum += arrNum[i];
            }

        max = arrNum[0];

        for (i = 1; i <= n - 1; i++)
            {
                if (arrNum[i] >= max) max = arrNum[i];
            }
        document.getElementById('result3_1').innerText = "Số nguyên lớn nhất là " + max + ".";
        document.getElementById('result3_2').innerText = "Giá trị trung bình của mảng là " + (sum / n) + ".";
    }

function toReverse()
    {
        let n = +prompt ("Nhập độ dài của mảng muốn tạo:")
        let firstArr = [];
        let lastArr = [];

        for (i = 0; i <= n - 1; i++)
            {
                firstArr[i] = prompt ("Nhập vào phần tử thứ " + i);
            }

        lastArr = firstArr.reverse();
        document.getElementById('result4').innerText = "Mảng đảo ngược là: " + lastArr;
    }

function countNegNum()
    {
        let n = +prompt ("Nhập độ dài của mảng muốn tạo:")
        let arr = [];
        let count = 0;

        for (i = 0; i <= n - 1; i++)
            {
                arr[i] = prompt ("Nhập vào phần tử thứ " + i);
                if (parseInt(arr[i]) < 0) count += 1;
            }
        document.getElementById('result5').innerText = "Số phần tử có giá trị âm trong chuỗi là: " + count;
    }

function testNum()
    {
        let v = +prompt('Nhập vào số nguyên V:');
        let numbers = [];
        let t = false;
        
        for (i = 0; i <= 9; i++)
            {
                numbers[i] = +prompt ("Nhập vào phần tử thứ " + i);
            }

        t = numbers.includes(v);

        if (t) document.getElementById('result6').innerText = "V is in the array";
        else document.getElementById('result6').innerText = "V is not in the array";
    }

function testNum2()
    {
        let v = +prompt('Nhập vào số nguyên V:');
        let firstNums = [];
        let lastNums = [];
        let count = 0;
        
        for (i = 0; i <= 9; i++)
            {
                firstNums[i] = +prompt ("Nhập vào phần tử thứ " + i);
                lastNums[i] = firstNums[i];
            }

        for (i = 0; i <= 9; i++)
            {
                if (v === firstNums[i])
                    {
                        count += 1;
                        lastNums.splice(i-count+1, 1);
                        lastNums.push(0);
                    }
            }
        if (count === 0) document.getElementById('result7_1').innerText = "V is not in the array";
        else
            {
                document.getElementById('result7_1').innerText = "V is in the array";
                document.getElementById('result7_2').innerText = "Mảng ban đầu là: " + firstNums;
                document.getElementById('result7_3').innerText = "Mảng sau cùng là: " + lastNums;
            }
    }

function toSort()
    {
        let arrNum = [];
        
        for (i = 0; i <= 9; i++)
            {
                arrNum[i] = +prompt ("Nhập vào phần tử thứ " + i);
            }
        document.getElementById('result8').innerText = arrNum.sort((a, b) => b - a);
    }
