function check() {
    
    const sheetId = '1pi6ID3iVvfr89kp33LcvN2UTPckat1zWuNyO6vA_I6E';
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = 'data';
    const query = encodeURIComponent('Select *')
    const url = `${base}&sheet=${sheetName}&tq=${query}`
    
    // const data = []
    // document.addEventListener('DOMContentLoaded', init)
    
    // const output = document.querySelector('.output')
    
    //function init() {
        fetch(url)
            .then(res => res.text())
            .then(data => {
            data = JSON.parse(data.substring(47).slice(0, -2));
            let tk_number2 = document.getElementById('tracking_number').value;
            console.log(data['table']['rows']);
            var result = [];

            for(var i in data['table']['rows'])
                result.push([i, data['table']['rows'] [i]]);


            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows(result);
            console.log(result);
            for (let i = 0; i < data['table']['rows'].length; i++) {
                console.log(data['table']['rows'].length);
                console.log(data['table']['rows'][i]['c']);
                console.log(data['table']['rows'][i]['c'][i]);
                console.log(data['table']['rows'][i]['c'][i]['v']);
                console.log(tk_number2);
                if (data['table']['rows'][i]['c'][i]['v'] === tk_number2) {
                    console.log('ตรงกัน');
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
    //}
}
  
