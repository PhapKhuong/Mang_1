function dicEV()
    {
        let arr_Eng = ['information', 'data', 'source code', 'add', 'confirm', 'computer', 'keyboard', 'mouse', 'research', 'picture'];
        let arr_Vi = ['thông tin', 'dữ liệu', 'mã nguồn', 'thêm', 'đồng ý', 'máy tính', 'bàn phím', 'chuột', 'nghiên cứu', 'bức tranh'];
        let newWord = document.getElementById('word').value;
        let mean;

        for (i = 0; i <= arr_Eng.length - 1; i++)
            {
                if (arr_Eng[i] === newWord)
                    {
                        mean = arr_Vi[i];
                        document.getElementById('result').innerText = 'Nghĩa của từ là: ' + mean;
                        break;
                    }
                if (!mean) document.getElementById('result').innerText = "Không tìm thấy từ mới";
            }
    }