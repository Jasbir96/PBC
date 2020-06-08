let request = require("request");
let fs = require("fs");

// npm install cheerio
let cheerio = require("cheerio");
console.log("Sending Request");
let url = "https://www.espncricinfo.com/series/19322/commentary/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20";
// cb will be called when request recieves the data
request(url, cb);
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("lbc.html", html);
        console.log("File Saved");
        parseHtml(html);
    } else if (response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log(err);
        console.log(response.statusCode);
    }
}
function parseHtml(html) {
    console.log("Parsing Html");
    let $ = cheerio.load(html);
    // bring all the selected elements
    let elementArr = $('.match-comment-wrapper');
    // let ans = elementArr.text();
    // console.log(ans);
    // ans = $('.match-comment-wrapper').text();
    // console.log(ans);
    // print html of first element
    // console.log(element.html());

    // print text of all the selected elements
    // console.log(element.text());
    
    console.log("````````````````````````````````````````");
    // 1. generic
    // let lbc = $(elementArr[0]).text();
    // console.log(lbc);
    // 2. first element text 
    let ans= $(elementArr.html()).text();
    console.log(ans);

    console.log("````````````````````````````````````````");

}
