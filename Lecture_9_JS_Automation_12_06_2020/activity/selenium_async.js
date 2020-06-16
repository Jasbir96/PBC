require("chromedriver");
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let { email, password } = require("../../credentials.json");
// tab=> tab
let tab = browser.forBrowser("chrome").build();
(async function () {
    await login();
    console.log("User logged In");
})()
// login
async function login() {
    try {

        await tab.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
        await tab.manage().setTimeouts({
            implicit: 10000
        });
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
// go to admin panel
// manage challenges
// create challenges
// fill the entries
// submit 