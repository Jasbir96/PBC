let request = require("request");
let fs = require("fs");

// npm install cheerio
let cheerio = require("cheerio");
console.log("Sending Request");
let url = "https://www.espncricinfo.com/series/19322/scorecard/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20";
// cb will be called when request recieves the data
request(url, cb);
function cb(err, response, html) {
    console.log("Recieved Response");
    if (err == null && response.statusCode == 200) {
        fs.writeFileSync("match.html", html);
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
    console.log("````````````````````````````````````````");
    let players = $(".table.bowler tbody tr");
    // console.log(players.length);
    let maxWickets = 0;
    let hwt = "";
    for (let i = 0; i < players.length; i++) {
        // get Name
        let allColOfAPLayer = $(players[i]).find("td");
        let cPlayerName = $(allColOfAPLayer[0]).text();
        let wickets = $(allColOfAPLayer[4]).text();
        // console.log(cPlayerName + " " + wickets);
        if (Number(wickets) > maxWickets) {
            hwt = cPlayerName;
            maxWickets = Number(wickets)
        }
        // get Wickets
    }
    console.log(`${hwt} ${maxWickets}`)

    // fs.writeFileSync("bowlers.html", tables);

}
