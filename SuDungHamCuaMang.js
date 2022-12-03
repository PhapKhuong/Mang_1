function jointStr()
    {
        let myColor = ["Red", "Green", "White", "Black"];
        let str = myColor.join();
        document.getElementById("result1").innerText = str;
    }

function insertDash()
    {
        let numStr = document.getElementById("numbers").value;
        let len = numStr.length;
        let mod1, mod2;
        let str = numStr[0];

        for (i = 1; i <= len - 1; i++)
            {
                mod1 = parseInt(numStr[i-1]) % 2;
                mod2 = parseInt(numStr[i]) % 2;
                if (mod1 === 0 && mod2 === 0) str += '-' + numStr[i];
                else str += numStr[i];
            }
        document.getElementById('result2').innerText = str;
    }

function toUpperLower()
    {
        let firstStr = document.getElementById('abc').value;
        let lastStr = '';
        let len = firstStr.length;

        for (i = 0; i < len; i++)
            {
                if (firstStr[i] === firstStr[i].toUpperCase()) lastStr += firstStr[i].toLowerCase();
                else lastStr += firstStr[i].toUpperCase();
            }
        document.getElementById('result3').innerText = lastStr;
    }