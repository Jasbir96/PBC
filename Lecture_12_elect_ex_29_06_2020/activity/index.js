const $ = require('jquery');

$(document).ready(function(){

    let data = [];

    $('#grid .cell').on('click', function(){

        let rid = parseInt($(this).attr('row-id'));
        let cid = parseInt($(this).attr('col-id'));

        let cidAddr = String.fromCharCode(cid + 65);
        $('#text-input').val(cidAddr + (rid+1));

    })

    $('#grid .cell').on('blur', function(){
        console.log("blurred");
    })

    // $('#formula-input').on('blur', function(){

    // })

    function init(){

        data = [];
        $('#grid').find('.row').each(function(){

            let row = [];
            $(this).find('.cell').each(function(){
                let cell = '';

                $(this).html('');
                row.push(cell);

            })
            data.push(row);
        })
        console.log(data);
    }

    init();

})