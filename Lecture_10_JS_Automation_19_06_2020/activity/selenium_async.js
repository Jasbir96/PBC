require("chromedriver");
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let { email, password } = require("../../credentials.json");
// tab=> tab
let tab = browser.forBrowser("chrome").build();
let qs = require("./questions");
(async function () {
    // login btn is clickec
    await login();
    console.log("User logged In");
    // ***************************DashBoard Area********************************************
    // => 10seconds => 10seconds => find
    // to load home page 
    await tab.findElement(swd.By.css("a[data-analytics='NavBarProfileDropDown']"));
    // manage challenges
    await tab.get("https://www.hackerrank.com/administration/contests");

    await waitForLoader(); // => incase of any frontend framework 
    let manageTabs = await tab.findElements(swd.By.css(".administration ul li a"));
    await manageTabs[1].click();

    let challengePageLink = await tab.getCurrentUrl();
    
    for (let i = 0; i < qs.length; i++) {
        await (await tab).get(challengePageLink);
        await waitForLoader();
        await createChallenge(qs[i]);
    }
})()
// login
async function login() {
    try {
        await tab.manage().window().maximize();

        await tab.manage().setTimeouts({
            implicit: 10000
        });
        await tab.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
        let inputBoxPromise = tab.findElement(swd.By.css("#input-1"));
        let passwordBoxPromise = tab.findElement(swd.By.css("#input-2"));
        let BeArr = await Promise.all([inputBoxPromise, passwordBoxPromise]);
        let inputBox = BeArr[0];
        let passwordBox = BeArr[1];
        let inputBoxWillBeFilledP = inputBox.sendKeys(email);
        let passwordWillBeFilledP = passwordBox.sendKeys(password);
        await Promise.all([inputBoxWillBeFilledP, passwordWillBeFilledP]);
        let loginElement = await tab.findElement(swd.By.css("button[data-analytics='LoginPassword']"));
        await loginElement.click();

    } catch (err) {
        console.log(err);
    }
}
async function createChallenge(challenge) {
    let createChallengebtn = await tab.findElement(swd.By.css("button[class='btn btn-green backbone pull-right']"));
    await createChallengebtn.click();
    // parallely => map 
    let chBox = await tab.findElement(swd.By.css("#name"));
    let DescBox = await tab.findElement(swd.By.css("#preview"));
    let psBox = await tab.findElement(swd.By.css("#problem_statement-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea"));
    let ifBox = await tab.findElement(swd.By.css("#input_format-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea"));
    let cnBox = await tab.findElement(swd.By.css("#constraints-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea"));
    let ofBox = await tab.findElement(swd.By.css("#output_format-container .CodeMirror.cm-s-default.CodeMirror-wrap textarea"));
    let tags = await tab.findElement(swd.By.css(".tagsinput input"));
// parallely 
    await chBox.sendKeys(challenge["Challenge Name"]);
    await DescBox.sendKeys(challenge["Description"]);
    await sendData("#problem_statement-container", psBox, challenge["Problem Statement"]);
    await sendData("#input_format-container", ifBox, challenge["Input Format"]);
    await sendData("#constraints-container", cnBox, challenge["Constraints"]);
    await sendData("#output_format-container", ofBox, challenge["Output Format"]);
    await tags.sendKeys(challenge["Tags"]);
    await tags.sendKeys(swd.Key.ENTER);
    let saveBtn = await (await tab).findElement(swd.By.css("button.save-challenge.btn.btn-green"));
    await saveBtn.click();
}
// async function navigatorfn(selector) {
//     let element = await tab.findElement(swd.By.css(selector));
//     await element.click();
//     console.log(1);
// }
// go to admin panel
// manage challenges
// create challenges
// fill the entries
// submit 
async function sendData(parentId, element, data) {
    // Selenium => browser =>? JS Execute
    await tab.executeScript(`document.querySelector('${parentId} .CodeMirror.cm-s-default.CodeMirror-wrap div').style.height='10px'`);
    await element.sendKeys(data);
}
// -> hidden 
async function waitForLoader() {
    let loader = await tab.findElement(swd.By.css("#ajax-msg"));
    await tab.wait(swd.until.elementIsNotVisible(loader));
}