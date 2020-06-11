// windows: npm install selenium-webdriver chromedriver
// unix: npm install selenium-webdriver chromedriver

// {
//     "email": "",
//         "password": ""
// }

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
        return inputBoxPromise;
    })
    .then(function (inputBox) {
        // enter data 
        let inputBoxWillBeFilledP = inputBox.sendKeys(email);
        return inputBoxWillBeFilledP;
    })
    .then(function () {
        // console.log("Home page opened");
        // to find an element
        let passwordBoxPromise = tab.findElement(swd.By.css("#input-2"));
        return passwordBoxPromise;
    })
    .then(function (passwordBox) {
        // enter data 
        let passwordWillBeFilledP = passwordBox.sendKeys(password);
        return passwordWillBeFilledP;
    }).then(function () {
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
        console.log("Reached warm challenges page")
    })
    .catch(function (err) {
        console.log(err);
    })
