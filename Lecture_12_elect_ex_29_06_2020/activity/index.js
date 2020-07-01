const $ = require('jquery');

$(document).ready(function(){

    let data = [];
    let lsc;

    $('#grid .cell').on('click', function(){

        //catch last clicked cell - done
        lsc = this;

        let rid = parseInt($(this).attr('row-id'));
        let cid = parseInt($(this).attr('col-id'));

        let cidAddr = String.fromCharCode(cid + 65);
        $('#text-input').val(cidAddr + (rid+1));

        //update formula bar value

    })

    $('#grid .cell').on('blur', function(){
        
        //if value is not changed to do nothing
        //return without doing anything

        //delete formula

        //update cell and dependent cells - downstream cells
    })

    $('#formula-input').on('blur', function(){

        // find a way to work on last clicked cell - done

        // delete the exisiting formula from that cell

        //set the new formula for that cell

        //evalute value from the formula

        //update cell and dependents

    })

    function deleteFormula(cellObject) {

    }

    function evaluate(cell){

    }

    function setFormula(cellObject, formula){

        formula = formula.replace('(', '').replace(')','');

        let formulaComponents = formula.split(' ');

        for(let i=0;i<formulaComponents.length;i++){

            // work for only addreses
            let chCode = formulaComponents[i].charCodeAt(0);

            // let cell = getCell(cellObject);
            
            if(chCode >= 65 && chCode <= 90){

                let upstreamAddress = getIndicesFromAddress(formulaComponents[i]);
                let myIndices = getIndices(cellObject);
                //set my upstream to cells i am dependent on
                data[myIndices.rid][myIndices.cid].upstream.push({
                    rid:upstreamAddress.rid,
                    cid:upstreamAddress.cid
                })

                //set their downstream
                // as in jispr mai depend krta hu uske downsteam me merko daal do
                data[upstreamAddress.rid][upstreamAddress.cid].downstream.push({
                    rid:myIndices.rid,
                    cid:myIndices.cid
                })
            }
        }
    }

    function getIndices(cellObject){
        let rid = parseInt($(this).attr('row-id'));
        let cid = parseInt($(this).attr('col-id'));

        return {
            rid:rid,
            cid:cid
        }
    }

    function getIndicesFromAddress(cellAddress){
        let rid = parseInt(cellAddress.substr(1));
        let cid = cellAddress.charCodeAt(0) - 65;

        return {
            rid : rid -1,
            cid:cid
        }
    }

    function updateCell(cellObject){

    }

    function init(){

        data = [];
        $('#grid').find('.row').each(function(){

            let row = [];
            $(this).find('.cell').each(function(){
                let cell = {
                    value : '',
                    formula : '',
                    upstream : [],
                    downstream : [] 
                };

                $(this).html(cell.value);
                row.push(cell);

            })
            data.push(row);
        })
        console.log(data);
    }

    init();

})