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
let gCodesElements, gcInputBox, gTextArea;
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
        }).then(function () {
            let editorialWillBeSelectdPromise =
                tab.findElement(swd.By.css("a[data-attr2='Editorial']"));
            return editorialWillBeSelectdPromise;
        }).then(function (editorBtn) {
            let editorBtnWillBeclickedP = editorBtn.click();
            return editorBtnWillBeclickedP;
        }).then(function () {
            // check if there is lock btn then select it or find the solution
            let hlBtnP = handleLockBtn();
            return hlBtnP;
        }).then(function () {
            // get all the lang array
            let cCodeWillBecopied = copyCode();
            return cCodeWillBecopied;
        }).then(function (code) {
            let codeWillBepastedP = pasteCode(code);
            return codeWillBepastedP;
        })
            .then(function () {
                resolve();
            }).catch(function (err) {
                console.log(err);
                reject(err);
            })
    });
}

function handleLockBtn() {
    return new Promise(function (resolve, reject) {
        let lockBtnWillBeFP = tab.findElement(swd.By.css(".editorial-content-locked button.ui-btn.ui-btn-normal"));
        lockBtnWillBeFP
            .then(function (lockBtn) {
                let lBtnWillBeCP = lockBtn.click();
                return lBtnWillBeCP;
            }).then(function () {
                resolve();
            }).catch(function () {
                console.log("Lock button wasn't found");
                resolve();
            })

    })
}

function copyCode() {
    return new Promise(function (resolve, reject) {
        // all name
        let allLangElementP = tab.findElements(swd.By.css(".hackdown-content h3"));
        // get all the code array
        let allcodeEementP = tab.findElements(swd.By.css(".hackdown-content .highlight"));
        let bothArrayP = Promise.all([allLangElementP, allcodeEementP]);
        bothArrayP
            .then(function (bothArrays) {
                let langsElements = bothArrays[0];
                gCodesElements = bothArrays[1];
                let allLangTextP = [];
                for (let i = 0; i < langsElements.length; i++) {
                    let cLangP = langsElements[i].getText();
                    allLangTextP.push(cLangP);
                }
                return Promise.all(allLangTextP);
            })
            .then(function (allLangs) {
                let codeOfCP;
                for (let i = 0; i < allLangs.length; i++) {
                    if (allLangs[i].includes("C++")) {
                        codeOfCP = gCodesElements[i].getText();
                        break;
                    }
                }
                return codeOfCP;
            }).then(function (code) {
                console.log(code)
                resolve(code);
                console.log("resolved was called");
            }).catch(function (err) {
                reject(err);
            })
    });
}

function pasteCode(code) {
    return new Promise(function (resolve, reject) {
        // click on problem tab
        let pTabWillBeSelectedP = tab.findElement(swd.By.css("li#Problem"));
        pTabWillBeSelectedP.then(function (pTab) {
            let pTwillBeClickedP = pTab.click();
            return pTwillBeClickedP;
        }).then(function () {
            let inputBoxWBeSP = tab.findElement(swd.By.css(".custom-input-checkbox"));
            return inputBoxWBeSP;
        }).then(function (inputBox) {
            let inputbWillBeCP = inputBox.click();
            return inputbWillBeCP;
        }).then(function () {
            let cInputWillBeSelectedP = tab.findElement(swd.By.css(".custominput"));
            return cInputWillBeSelectedP;
        }).then(function (cInputBox) {
            gcInputBox = cInputBox;
            let codeWillBeEnteredP = cInputBox.sendKeys(code);
            return codeWillBeEnteredP;
        }).then(function () {
            let ctrlAWillBeSendP = gcInputBox.sendKeys(swd.Key.CONTROL + "a");
            return ctrlAWillBeSendP;
        }).then(function () {
            let ctrlXWillBeSendP = gcInputBox.sendKeys(swd.Key.CONTROL + "x");
            return ctrlXWillBeSendP;
        })
            .then(function () {
                let tAreaP = tab.findElement(swd.By.css("textarea"));
                console.log(2);
                return tAreaP;
            }).then(
                function (tArea) {
                gTextArea = tArea;
                let CodeWillBeEP = tArea.sendKeys(swd.Key.CONTROL + "a");
                // console.log(3);
                return CodeWillBeEP;
            }).then(function () {
                let ctrlVWillBeSendP = gTextArea.sendKeys(swd.Key.CONTROL + "v");
                return ctrlVWillBeSendP;
            }).then(function () {
                let submitCodeBtnWillBeS = tab.findElement(swd.By.css("button.hr-monaco-submit"));
                return submitCodeBtnWillBeS;
            }).then(function (submitBtn) {
                let submitBtnWillBeClickedP = submitBtn.click();
                return submitBtnWillBeClickedP;
            })
            .then(function () {
                resolve();
            }).catch(function (err) {
                reject(err);
            })
        // write the code 
        // submit the code 
    })
}