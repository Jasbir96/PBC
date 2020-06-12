// windows: npm install selenium-webdriver chromedriver
// unix: npm install selenium-webdriver chromedriver

// {
//     "email": "",
//         "password": ""
// }

// npm cache clean --force
require("chromedriver");
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let { email, password } = require("../../credentials.json");
// tab=> tab
let tab = browser.forBrowser("chrome").build();
let tabWillBeOpenedPromise = tab.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
tabWillBeOpenedPromise
    .then(function () {
        // implicit timeout 
        let findTimeOutP = tab.manage().setTimeouts({
            implicit: 10000
        });
        return findTimeOutP;
    })
    .then(function () {
        // console.log("Home page opened");
        // to find an element
        let inputBoxPromise = tab.findElement(swd.By.css("#input-1"));
        let passwordBoxPromise = tab.findElement(swd.By.css("#input-2"));
        return Promise.all([inputBoxPromise, passwordBoxPromise]);
    })
    .then(function (BeArr) {
        // enter data 
        let inputBox = BeArr[0];
        let passwordBox = BeArr[1];
        let inputBoxWillBeFilledP = inputBox.sendKeys(email);
        let passwordWillBeFilledP = passwordBox.sendKeys(password);
        return Promise.all([inputBoxWillBeFilledP, passwordWillBeFilledP]);
    })
    // .then(function () {
    //     // console.log("Home page opened");
    //     // to find an element
    //     return passwordBoxPromise;
    // })
    // .then(function (passwordBox) {
    //     // enter data 
    //     let passwordWillBeFilledP = passwordBox.sendKeys(password);
    //     return passwordWillBeFilledP;
    // })
    .then(function () {
        let loginWillSelectedP = tab.findElement(swd.By.css("button[data-analytics='LoginPassword']"));
        return loginWillSelectedP;
    }).then(function (loginBtn) {
        let loginWillBeClickedP = loginBtn.click();
        return loginWillBeClickedP;
    }).then(function () {
        // go to interview prep
        let IpBtnWillBeFoundP =
            tab.findElement(swd.By.css("h3[title='Interview Preparation Kit']"));
        return IpBtnWillBeFoundP;
        // data-analytics="InterviewPromotionCard"
        // console.log("Login Done")
    }).then(function (IpBtn) {
        let IPBtnWillBeClickedP = IpBtn.click();
        return IPBtnWillBeClickedP;
    }).then(function () {
        // go to warmup challenges
        let wUCBtnWillSelectedP = tab.findElement(swd.By.css("a[data-attr1='warmup']"));
        return wUCBtnWillSelectedP;
    }).then(function (wUCBtn) {
        let wBtnWillBeClickedP = wUCBtn.click();
        return wBtnWillBeClickedP
    }).then(function () {
        // console.log("Reached warm challenges page")
        // selenium
        let urlofQP = tab.getCurrentUrl();
        return urlofQP;
        
    }).then(function (urlofQP) {
        let questionWillBeSolvedPromise = questionSolver();
        return questionWillBeSolvedPromise;
    }).then(function () {
        console.log("First Question solved");
    })
    .catch(function (err) {
        console.log(err);
    })
function questionSolver() {

    return new Promise(function (resolve, reject) {
        // logic to solve a question
        let allCBTnWSP = tab.findElements(swd.By.css(".challenge-submit-btn"));
        allCBTnWSP.then(function (cBtnArr) {
            let cBtnWillBeClickedP = cBtnArr[0].click();
            return cBtnWillBeClickedP;
        })
        .then(function () {
            resolve();
        }).catch(function (err) {
            reject();
        })
    });
}