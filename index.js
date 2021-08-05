
function getRowsData(listPrice) {
    rows = [];
    for (let i = 0; i < listPrice.length; i++) {
        const row = listPrice[i];
        rows.push('<tr>');
        for (const cell in row) {
            if (Object.hasOwnProperty.call(row, cell)) { 
                rows.push(`<td>${row[cell]}</td>`)
            }
             
        }
        rows.push('<tr>'); 
    }
    rows = rows.join(' ');
    return rows || null;
}



function addRowsToTable() { 
    const table = document.getElementById("data-list");
    const iPerson = document.getElementById("i-person");
    const iCombo = document.getElementById("i-combo");
    const iEnterprise = document.getElementById("i-enterprise"); 

    const theadPerson = '<thead> <tr class="text-title"> <td>Gói cước</td> <td>Băng thông</td> <td>Cước tháng (VNĐ)</td> </tr> </thead>';
    const theadCombo = '<thead> <tr class="text-title"> <td>Gói cước</td><td>Băng thông(VNĐ)</td> <td>Cước tháng (VNĐ)</td> </tr> </thead>';
    const theadEnterPrise = '<thead> <tr class="text-title"> <td>Gói cước</td><td>Băng thông</td> \
    <td>Cam kết quốc tế</td> <td>Số lượng truy cập</td><td>Cước tháng (VNĐ)</td> </tr> </thead>';
    
    

    iPerson.innerHTML= `<table class="table table-bordered col-lg-6  col-sm-12 mx-auto mt-3"> ${theadPerson}
                        ${getRowsData(dataListPrice['internet'])}</table>`;
    iCombo.innerHTML= `<table class="table table-bordered col-lg-8  col-sm-12 mx-auto mt-3"> ${theadCombo}
                        ${getRowsData(dataListPrice['combo'])}</table>`;
    iEnterprise.innerHTML= `<table class="table table-bordered col-lg-8  col-sm-12 mx-auto mt-3"> ${theadEnterPrise}
                        ${getRowsData(dataListPrice['internetDN'])}</table>`;
     
    
}

const dataListPrice = {
    internet: [
        {
            goicuoc:'Super-30',
            bangthong:'30 Mbps',
            cuocthang:'190.000'
        },
        {
            goicuoc:'Super-80',
            bangthong:'80 Mbps',
            cuocthang:'210.000'
        },
        {
            goicuoc:'Super-100',
            bangthong:'100 Mbps',
            cuocthang:'235.000'
        },
        {
            goicuoc:'Super-150',
            bangthong:'1500 Mbps',
            cuocthang:'320.000'
        }
    ],
    combo:[
        {
            goicuoc:'Super-30',
            bangthong:'30 Mbps',
            cuocthang:'220.000'
        },
        {
            goicuoc:'Super-80',
            bangthong:'80 Mbps',
            cuocthang:'230.000'
        },
        {
            goicuoc:'Super-100',
            bangthong:'100 Mbps',
            cuocthang:'255.000'
        },
        {
            goicuoc:'Super-150',
            bangthong:'1500 Mbps',
            cuocthang:'350.000'
        }
    ],
    internetDN:[
       {
           goicuoc:'Super-200',
           bangthong:'200 Mbps',
           sltruycap:'Dưới 20 user truy cập',
           camketQT:'8 Mbps',
           cuocthang:'490.000'
       },
       {
           goicuoc:'Super-250',
           bangthong:'250 Mbps',
           sltruycap:'Dưới 70 user truy cập',
           camketQT:'10.8 Mbps',
           cuocthang:'545.000'
       },
       {
           goicuoc:'Super-400',
           bangthong:'400 Mbps',
           sltruycap:'Dưới 120 user truy cập',
           camketQT:'12.6 Mbps',
           cuocthang:'1.410.000'
       },
       {
           goicuoc:'Super-500',
           bangthong:'500 Mbps',
           sltruycap:'Hơn 300 user truy cập',
           camketQT:'18.9 Mbps',
           cuocthang:'8.125.000'
       }
    ]
}