function check() {
    fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        data = JSON.parse(data)
        let tk_number2 = document.getElementById('tracking_number').value;
        for (let i = 0; i < data.length; i++) {
            if (data[i]['number'] == tk_number2) {
                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'มีข้อมูลที่ตรงกัน!'
                })
                break;
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'ไม่มีข้อมูล!'
                })
            }
        }
    });
    
    // $.getJSON('/devphuwarin.github.io/data.json', function (data) {
    //     let tk_number2 = document.getElementById('tracking_number').value;
    //     let chk_number = 'false';
    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i]['number'] == tk_number2) {
    //             chk_number = 'true';
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Oops...',
    //                 text: 'มีข้อมูลที่ตรงกัน!'
    //             })
    //             break;
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: 'ไม่มีข้อมูล!'
    //             })
    //         }
    //     }
    //     console.log(chk_number);
    //     console.log(tk_number2);

    // });

}