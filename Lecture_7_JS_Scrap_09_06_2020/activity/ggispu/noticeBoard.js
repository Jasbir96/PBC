let request = require("request");
let fs = require("fs");
let emailLogic = require("./emailLogic");
// npm install cheerio
let cheerio = require("cheerio");
console.log("Sending Request");
let url = "http://www.ipu.ac.in/notices.php";
// cb will be called when request recieves the data
let allNotices = [];
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("notice.html", html);
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
    let cCallNotices = [];
    let $ = cheerio.load(html);
    let tBodyArr = $(".table-box table tbody");
    let trArray = $(tBodyArr[1]).find("tr");
    // fetching all the notices for current call
    for (let i = 0; i < trArray.length; i++) {
        let notOurELement = $(trArray[i]).hasClass("item-collapse");
        
        if (notOurELement == true) {
            break;
        }

        let columns = $(trArray[i]).find("td");
        let notice = $(columns[0]).text();
        let date = $(columns[1]).text();
        let noticeObj = {}
        noticeObj.notice = notice;
        noticeObj.date = date;
        cCallNotices.push(noticeObj);
    }
// first request hai 
    if (allNotices.length == 0) {
        allNotices = cCallNotices;
        console.table(allNotices);
        let html = fs.readFileSync("index.html") + "";
        let allNoticesHtml = "";
        for (let i = 0; i < allNotices.length; i++) {
            let cNotice = allNotices[i];
            let currentNOtice = `<tr><td>${cNotice.notice}</td> <td>${cNotice.date}</td></tr>`
            allNoticesHtml += currentNOtice;
        }
        html = html.replace("{{template}}", allNoticesHtml);
        // console.log(html);
        emailLogic.sendEmail(html);
    } else {
        if (allNotices.length == cCallNotices.length) {
            console.log("No new Notice")
        } else {
            let newNotices = cCallNotices.length - allNotices.length;
            console.log("New Notices");
            for (let i = 0; i < newNotices; i++) {
                allNotices.unshift(cCallNotices[i]);
                console.table(cCallNotices[i]);
            }
        }
    }
}
request(url, cb);
