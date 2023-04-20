var currentGdprInfo = "2.0";

window.addEventListener('load', function () {
    if (getCookie('cookieConfirmation') == false || getCookie('cookieVersion') != currentGdprInfo) {
        document.querySelector("body").insertAdjacentHTML('beforeend', `
        <style class="gdprStyles">
            @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
            @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
            /*BASIC SETTINGS*/
            body > *:not(.gdprBox) {
                pointer-events: none;
                filter: brightness(60%);
            }
            .gdprBox, .gdprBox * {
                pointer-events: auto;
            }
            .gdprBox .material-icons {
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                color: #000000;
            }
            .gdprBox h2, .gdprBox h4, .gdprBox h5, .gdprBox p {
                color: #000000;
                font-family: 'Ubuntu', sans-serif;
            }
            .gdprBox h2 {
                font-size: 1.5em;
                margin-top: 0.83em;
                margin-bottom: 0.83em;
                margin-left: 0;
                margin-right: 0;
                font-weight: bold;
            }
            .gdprBox h4 {
                margin-top: 1.33em;
                margin-bottom: 1.33em;
                margin-left: 0;
                margin-right: 0;
                font-weight: bold;
            }
            .gdprBox h5 {
                font-size: .83em;
                margin-top: 1.67em;
                margin-bottom: 1.67em;
                margin-left: 0;
                margin-right: 0;
                font-weight: bold;
            }
            .gdprBox {
                background-color: #ffffff;
                width: 40%;
                position: fixed;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                border-radius: 30px;
                padding: 20px 40px;
                font-family: 'Ubuntu', sans-serif;
                z-index: 9;
                min-height: auto;
            }
            .gdprBox .customizeSettings, .gdprBox .languageSettings {
                display: none;
            }
            /*HEADER*/
            .gdprBox .gdprHeader {
                margin-top: 30px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .gdprBox .gdprHeader .material-icons {
                font-size: 1.8em;
                transition: 0.3s;
            }
            .gdprBox .gdprHeader .material-icons:hover {
                color: #004361;
                cursor: pointer;
            }
            .gdprBox .gdprHeader h2 {
                color: #000000;
            }
            
            /*MAIN AREA*/
            .gdprBox .mainContent .message p {
                margin: 35px 0px;   
                color: #000000;
            }
            .gdprBox .mainContent .message a {
                color: #03a9f4;
                transition: 0.2s;
                text-decoration: none;
            }
            .gdprBox .mainContent .message a:hover {
                color: #0072a6;
            }
            
            /*OPTIONS UNDER MAIN AREA + BUTTONS + LINKS*/
            .gdprBox .gdprOptions {
                display: flex;
                justify-content: space-between;
            }
            .gdprBox .gdprOptions button.agree, .gdprBox .customizeSettings button.continueSelected {
                padding: 10px 20px;
                margin: 10px 0px 10px 0px;
                font-family: inherit;
                font-size: 1.1em;
                border: none;
                background-color: #03a9f4;
                color: #ffffff;
                transition: 0.2s;
                border-radius: 18px;
            }
            .gdprBox .gdprOptions button.agree:hover, .gdprBox .customizeSettings button.continueSelected:hover {
                background-color: #0072a6;
                cursor: pointer;
            }
            .gdprBox .gdprOptions .moreOptions {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                text-align: right;
                padding: 0px 0px 0px 10px;
            }
            .gdprBox .gdprOptions .moreOptions h4 {
                margin: 0px 0px 5px 0px;
                font-weight: 500;
                transition: 0.3s;
                font-size: 0.9em;
            }
            .gdprBox .gdprOptions .moreOptions h4:hover, .gdprBox .customizeSettings .goBack:hover {
                cursor: pointer;
                text-decoration: underline;
                text-underline-offset: 2px;
                text-decoration-color: #222222;
            }
            
            /*CUSTOMIZE OPTIONS*/
            .gdprBox .customizeSettings {
                flex-direction: column;
            }
            .gdprBox .customizeSettings .goBack {
                transition: 0.3s;
                margin: 0px 0px 30px 0px;
            }
            .gdprBox .customizeSettings .settingsBlock {
                overflow-y: scroll;
                height: 300px;
                padding: 0px 20px 0px 0px;
            }
            .gdprBox .settingsOption {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .gdprBox .settingsBlock details {
                margin: 0px 0px 10px 0px;
            }
            .gdprBox .settingsBlock summary {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .gdprBox .settingsBlock summary:hover {
                cursor: pointer;
            }
            .gdprBox .settingsBlock details summary h4:nth-of-type(1)::before {
                content: "► ";
            }
            .gdprBox .settingsBlock details[open] summary h4:nth-of-type(1)::before {
                content: "▼ ";
            }
            .gdprBox .settingsBlock details summary h4:nth-of-type(2) {
                text-align: right;
            }
            .gdprBox .settingsBlock details[open] summary ~ * {
                animation: sweep 0.3s ease-in-out;
            }
            .gdprBox .settingsOption .settingsOption h5 {
                width: 80%;
            }
            .gdprBox .settingsOption h5.warning {
                color: #ff0000;
            }

            /*LANGUAGE SETTINGS*/
            .gdprBox .languageSettings {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 50px;
            }
            .gdprBox .languageSettings img {
                transition: 0.3s;
            }
            .gdprBox .languageSettings img:hover {
                cursor: pointer;
                filter: brightness(60%);
            }
            
            /*SWITCHES*/
            .gdprBox .switchInput {
                margin: 5px 0px 0px 20px;
                position: relative;
                display: inline-block;
                width: 48px;
                height: 20px;
            }
            .gdprBox .switchInput input { 
                opacity: 0;
                width: 0;
                height: 0;
            }
            .gdprBox .sliderInput {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: 0.3s;
                transition: 0.3s;
                border-radius: 17px;
            }
            .gdprBox .sliderInput:before {
                position: absolute;
                content: "";
                height: 13px;
                width: 13px;
                left: 4px;
                bottom: 3.5px;
                background-color: #ffffff;
                -webkit-transition: 0.3s;
                transition: 0.3;
                border-radius: 50%;
            }            
            .gdprBox input:checked + .sliderInput {
                background-color: #005ca7;
            }
            .gdprBox input:focus + .sliderInput {
                box-shadow: 0 0 1px #005ca7;
            }
            .gdprBox input:checked + .sliderInput.disabled {
                background-color: #333333;
            }
            .gdprBox input:focus + .sliderInput.disabled {
                box-shadow: 0 0 1px #333333;
            }
            .gdprBox input:checked + .sliderInput:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            }
            
            
            /*MEDIA*/
            @media (max-width: 1024px) {
                .gdprBox {
                    width: 60%;
                }
                .gdprBox .gdprOptions {
                    flex-direction: column-reverse;
                }
                .gdprBox .gdprOptions .moreOptions {
                    text-align: center;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .gdprBox .gdprOptions h4 {
                    font-size: 1em;
                }
            }
            @media (max-width: 768px) {
                .gdprBox {
                    width: 70%;
                }
            }
            /*ANIMATIONS*/
            @keyframes sweep {
                0%    {
                    opacity: 0;
                    margin-left: -5px;
                }
                100%  {
                    opacity: 1;
                    margin-left: 0px;
                }
            }
        </style>

        <div class="gdprBox">
            <div class="gdprHeader">
                <h2></h2>
                <h4 class="changeLanguage"><span class="material-icons">language</span></h4>
            </div>
            <div class="mainContent">
                <div class="message">
                    <p></p>
                </div>
                <div class="gdprOptions">
                    <button class="agree"></button>
                    <div class="moreOptions">
                        <h4 class="settings"></h4>
                        <h4 class="refuse"></h4>
                    </div>
                </div>
            </div>
            <div class="customizeSettings">
                <h4 class="goBack"></h4>
                <div class="settingsBlock">
                    <details class="kcermakCookies">
                        <summary><h4 class="name"></h4><h4 class="function"></h4></summary>
                        <div class="settingsOption">
                            <h5></h5>
                            <div class='inputElement'>
                                <label class='switchInput'>
                                    <input type='hidden' id='kcermakCookiesInput' name='kcermakCookiesInput' value='0'>
                                    <input type='checkbox' id='kcermakCookiesInput' name='kcermakCookiesInput' value='1' checked onclick="return false;"/>
                                    <span class='sliderInput disabled'></span>
                                </label>
                            </div>
                        </div>
                    </details>

                    <details class="googleFonts">
                    <summary><h4 class="name"></h4><h4 class="function"></h4></summary>
                    <div class="settingsOption">
                        <h5></h5>
                        <div class='inputElement'>
                            <label class='switchInput'>
                                <input type='hidden' id='googleFontsInput' name='googleFontsInput' value='0'>
                                <input type='checkbox' id='googleFontsInput' name='googleFontsInput' value='1' checked onclick="return false;"/>
                                <span class='sliderInput disabled'></span>
                            </label>
                        </div>
                    </div>
                </details>

                    <details class="stockFinderApi">
                        <summary><h4 class="name"></h4><h4 class="function">Functional</h4></summary>
                        <div class="settingsOption">
                            <div>
                                <h5></h5>
                                <h5 class="warning"></h5>
                            </div>
                            <div class='inputElement'>
                                <label class='switchInput'>
                                    <input type='hidden' id='stockFinderApiInput' name='stockFinderApiInput' value='0'>
                                    <input type='checkbox' id='stockFinderApiInput' name='stockFinderApiInput' value='1' checked>
                                    <span class='sliderInput'></span>
                                </label>
                            </div>
                        </div>
                    </details>

                    <details class="googleRecaptcha">
                        <summary><h4 class="name"></h4><h4 class="function">Functional</h4></summary>
                        <div class="settingsOption">
                            <div>
                                <h5></h5>
                                <h5 class="warning"></h5>
                            </div>
                            <div class='inputElement'>
                                <label class='switchInput'>
                                    <input type='hidden' id='googleRecaptchaInput' name='googleRecaptchaInput' value='0'>
                                    <input type='checkbox' id='googleRecaptchaInput' name='googleRecaptchaInput' value='1' checked>
                                    <span class='sliderInput'></span>
                                </label>
                            </div>
                        </div>
                    </details>

                    <details class="googleAnalytics">
                        <summary><h4 class="name"></h4><h4 class="function"></h4></summary>
                        <div class="settingsOption">
                            <div>
                                <h5></h5>
                            </div>
                            <div class='inputElement'>
                                <label class='switchInput'>
                                    <input type='hidden' id='googleAnalyticsInput' name='googleAnalyticsInput' value='0'>
                                    <input type='checkbox' id='googleAnalyticsInput' name='googleAnalyticsInput' value='1' checked>
                                    <span class='sliderInput'></span>
                                </label>
                            </div>
                        </div>
                    </details>
                </div>
                <button class="continueSelected"></button>
            </div>
            <div class="languageSettings">
                <img src="https://mirror.k-cermak.com/data/gdpr/en-flag.png" alt="English">
                <img src="https://mirror.k-cermak.com/data/gdpr/cz-flag.png" alt="Čeština">
            </div>
        </div>`);
        document.querySelector(".gdprBox .gdprHeader .changeLanguage").addEventListener("click", gdprCustomize);
        document.querySelector(".gdprBox .gdprOptions .settings").addEventListener("click", gdprCustomize);
        document.querySelector(".gdprBox .customizeSettings .goBack").addEventListener("click", gdprCustomize);
        document.querySelectorAll(".gdprBox .languageSettings img")[0].addEventListener("click", changeLanguage);
        document.querySelectorAll(".gdprBox .languageSettings img")[1].addEventListener("click", changeLanguage);
        document.querySelector(".gdprBox .gdprOptions .agree").addEventListener("click", gdprAgreeConfirm);
        document.querySelector(".gdprBox .customizeSettings .continueSelected").addEventListener("click", gdprCustomizeConfirm);
        document.querySelector(".gdprBox .gdprOptions .refuse").addEventListener("click", gdprDisableConfirm);
    }
});


function gdprCustomize(blockWanted) {
    let clickedElement = blockWanted.target.innerHTML;

    if (clickedElement == "Go back" || clickedElement == "Jít zpět") {
        document.querySelector(".gdprBox .mainContent").style.display = "block";
        document.querySelector(".gdprBox .customizeSettings").style.display = "none";
        document.querySelector(".gdprBox .languageSettings").style.display = "none";
        document.querySelector(".gdprBox .changeLanguage").style.display = "block";
    } else if (clickedElement == "Customize your settings" || clickedElement == "Přizpůsobit nastavení") {
        document.querySelector(".gdprBox .mainContent").style.display = "none";
        document.querySelector(".gdprBox .customizeSettings").style.display = "flex";
        document.querySelector(".gdprBox .languageSettings").style.display = "none";
        document.querySelector(".gdprBox .changeLanguage").style.display = "block";
    } else if (clickedElement == "language") {
        document.querySelector(".gdprBox .mainContent").style.display = "none";
        document.querySelector(".gdprBox .customizeSettings").style.display = "none";
        document.querySelector(".gdprBox .languageSettings").style.display = "flex";
        document.querySelector(".gdprBox .changeLanguage").style.display = "none";
    }
}

function changeLanguage(clickedFlag) {
    let clickedElement = clickedFlag.target.getAttribute("alt");
    if (clickedElement == "English") {
        loadLanguage("en");
    } else if (clickedElement == "Čeština") {
        loadLanguage("cz");
    }
    document.querySelector(".gdprBox .mainContent").style.display = "block";
    document.querySelector(".gdprBox .customizeSettings").style.display = "none";
    document.querySelector(".gdprBox .languageSettings").style.display = "none";
    document.querySelector(".gdprBox .changeLanguage").style.display = "block";
}

function loadLanguage(language) {
    if (language == "en") {
        document.querySelector(".gdprBox .gdprHeader h2").innerHTML = "GDPR and Cookies";
        document.querySelector(".gdprBox .mainContent .message p").innerHTML = "This website may use cookies. It may also collect certain personal information. All information can be found on this page <a href='https://gdpr.k-cermak.com/en' target='_blank'>gdpr.k-cermak.com/en</a>.";
        document.querySelector(".gdprBox .gdprOptions .agree").innerHTML = "Accept all Cookies";
        document.querySelector(".gdprBox .gdprOptions .moreOptions .settings").innerHTML = "Customize your settings";
        document.querySelector(".gdprBox .gdprOptions .moreOptions .refuse").innerHTML = "Continue only with the necessary cookies";
        document.querySelector(".gdprBox .customizeSettings .goBack").innerHTML = "Go back";
        document.querySelector(".gdprBox .customizeSettings .continueSelected").innerHTML = "Continue with selected settings";

        document.querySelector(".gdprBox .customizeSettings .kcermakCookies .name").innerHTML = "K-cermak Cookies";
        document.querySelector(".gdprBox .customizeSettings .kcermakCookies .function").innerHTML = "Critical functional";
        document.querySelector(".gdprBox .customizeSettings .kcermakCookies .settingsOption h5").innerHTML = "Basic internal cookies that are used for the basic functionality of the site. This setting cannot be changed.";

        document.querySelector(".gdprBox .customizeSettings .googleFonts .name").innerHTML = "Google Fonts";
        document.querySelector(".gdprBox .customizeSettings .googleFonts .function").innerHTML = "Critical functional";
        document.querySelector(".gdprBox .customizeSettings .googleFonts .settingsOption h5").innerHTML = "Font styles that are used on the services. This setting cannot be changed.";

        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .name").innerHTML = "Stock-Finder API system";
        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .function").innerHTML = "Functional";
        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .settingsOption h5").innerHTML = "Saving search data to the API used in Stock Finder. Disabling them will cause you to no longer be able to use Stock Finder.";
        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .settingsOption .warning").innerHTML = "Note: Disabling this option will restrict the functionality of the services and will make them unusable or severely limit their use.";

        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .name").innerHTML = "Google reCAPTCHA";
        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .function").innerHTML = "Functional";
        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .settingsOption h5").innerHTML = "Google reCAPTCHA is used to protect services against various bots and spambots.";
        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .settingsOption .warning").innerHTML = "Note: Disabling this option will restrict the functionality of the services and will make them unusable or severely limit their use.";

        document.querySelector(".gdprBox .customizeSettings .googleAnalytics .name").innerHTML = "Google Analytics";
        document.querySelector(".gdprBox .customizeSettings .googleAnalytics .function").innerHTML = "Analytics";
        document.querySelector(".gdprBox .customizeSettings .googleAnalytics .settingsOption h5").innerHTML = "Google Analytics is used to generate various statistics about user behaviour, etc.";
    } else if (language == "cz") {
        document.querySelector(".gdprBox .gdprHeader h2").innerHTML = "GDPR a soubory Cookies";
        document.querySelector(".gdprBox .mainContent .message p").innerHTML = "Tato stránka může používat cookies. Může také sbírat některé osobní informace. Bližší informace můžete nalézt na <a href='https://gdpr.k-cermak.com/cz' target='_blank'>gdpr.k-cermak.com/cz</a>.";
        document.querySelector(".gdprBox .gdprOptions .agree").innerHTML = "Přijmout všechny cookies";
        document.querySelector(".gdprBox .gdprOptions .moreOptions .settings").innerHTML = "Přizpůsobit nastavení";
        document.querySelector(".gdprBox .gdprOptions .moreOptions .refuse").innerHTML = "Pokračovat pouze s nezbytnými cookies";
        document.querySelector(".gdprBox .customizeSettings .goBack").innerHTML = "Jít zpět";
        document.querySelector(".gdprBox .customizeSettings .continueSelected").innerHTML = "Pokračovat se zvoleným nastavením";

        document.querySelector(".gdprBox .customizeSettings .kcermakCookies .name").innerHTML = "K-cermak Cookies";
        document.querySelector(".gdprBox .customizeSettings .kcermakCookies .function").innerHTML = "Kriticky funkční";
        document.querySelector(".gdprBox .customizeSettings .kcermakCookies .settingsOption h5").innerHTML = "Základní interní soubory cookies, které jsou určeny k základní funkcionalitě stránek. Toto nastavení nemůže být změněno.";

        document.querySelector(".gdprBox .customizeSettings .googleFonts .name").innerHTML = "Google Fonts";
        document.querySelector(".gdprBox .customizeSettings .googleFonts .function").innerHTML = "Kriticky funkční";
        document.querySelector(".gdprBox .customizeSettings .googleFonts .settingsOption h5").innerHTML = "Styly písma, které jsou použity ve službách. Toto nastavení nemůže být změněno.";


        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .name").innerHTML = "Stock-Finder API system";
        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .function").innerHTML = "Funkční";
        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .settingsOption h5").innerHTML = "Ukládání hledaných dat do Stock Finder API. Zakázáním této možnosti způsobí kompletní omezení v používání služby Stock Finder.";
        document.querySelector(".gdprBox .customizeSettings .stockFinderApi .settingsOption .warning").innerHTML = "Upozornění: Zakázání této možnosti způsobí omezení funkcí služeb či jejich kompletní omezení.";

        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .name").innerHTML = "Google reCAPTCHA";
        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .function").innerHTML = "Funkční";
        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .settingsOption h5").innerHTML = "Google reCAPTCHA je používána na ochranu před různými spamboty a jinými roboty..";
        document.querySelector(".gdprBox .customizeSettings .googleRecaptcha .settingsOption .warning").innerHTML = "Upozornění: Zakázání této možnosti způsobí omezení funkcí služeb či jejich kompletní omezení.";

        document.querySelector(".gdprBox .customizeSettings .googleAnalytics .name").innerHTML = "Google Analytics";
        document.querySelector(".gdprBox .customizeSettings .googleAnalytics .function").innerHTML = "Analytické";
        document.querySelector(".gdprBox .customizeSettings .googleAnalytics .settingsOption h5").innerHTML = "Google Analytics je používáno pro generování různých informacích o chování uživatele apod..";

    }
}


function gdprAgreeConfirm() {
    var cookieName = 'cookieConfirmation';
    var cookieValue = '1';
    var dateExp = new Date();
    dateExp.setMonth(dateExp.getMonth() + 12);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieVersion';
    cookieValue = '2.0';
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieStockFinder';
    cookieValue = 1;
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieGoogleRecaptcha';
    cookieValue = 1;
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieGoogleAnalytics';
    cookieValue = 1;
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    document.location.reload(true);
}

function gdprCustomizeConfirm() {
    let cookieName = 'cookieConfirmation';
    let cookieValue = '1';
    let dateExp = new Date();
    dateExp.setMonth(dateExp.getMonth() + 12);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieVersion';
    cookieValue = currentGdprInfo;
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieStockFinder';
    if (document.querySelectorAll("input[name='stockFinderApiInput']")[1].checked) {
        cookieValue = 1;
    } else {
        cookieValue = 2;
    }
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieGoogleRecaptcha';
    if (document.querySelectorAll("#googleRecaptchaInput")[1].checked) {
        cookieValue = 1;
    } else {
        cookieValue = 2;
    }
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieGoogleAnalytics';
    if (document.querySelectorAll("#googleAnalyticsInput")[1].checked) {
        cookieValue = 1;
    } else {
        cookieValue = 2;
    }
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    document.location.reload(true);
}

function gdprDisableConfirm() {
    var cookieName = 'cookieConfirmation';
    var cookieValue = 1;
    var dateExp = new Date();
    dateExp.setMonth(dateExp.getMonth() + 12);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieVersion';
    cookieValue = '2.0';
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieStockFinder';
    cookieValue = 1;
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieGoogleRecaptcha';
    cookieValue = 1;
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    cookieName = 'cookieGoogleAnalytics';
    cookieValue = 2;
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + dateExp + ";domain=.k-cermak.com;path=/";

    document.location.reload(true);
}

function redirectTo(page) {
    if (document.cookie.indexOf('cookieConfirmation') != -1 ) {
        window.location.href = page;
    }
}

function getCookie(name){
    let pattern = RegExp(name + "=.[^;]*")
    let matched = document.cookie.match(pattern)
    if(matched){
        let cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
}

//PAGE INTEGRATION METHODS
function languageGdprSetting(language) {
    window.addEventListener('load', function () {
        if (getCookie('cookieConfirmation') == false || getCookie('cookieVersion') != currentGdprInfo) {
            loadLanguage(language);
        }
    });
}

function disableGdpr() {
    document.querySelector(".gdprBox").remove();
    document.querySelector(".gdprStyles").remove();
}

function addGooogleAnalytics(id) {
    window.addEventListener('load', function () {
        if (getCookie('cookieGoogleAnalytics') == 1) {
            let gaScript = document.createElement('script');
            gaScript.setAttribute('async', 'true');
            gaScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id='+id);
        
            let gaScript2 = document.createElement('script');
            gaScript2.innerText = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '"+id+"', { 'anonymize_ip': true });";
        
            document.documentElement.firstChild.appendChild(gaScript);
            document.documentElement.firstChild.appendChild(gaScript2);
        }
    });
}

