var enplatedSettingsImport = {
    bootstrapImportCss : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
    bootstrapDarkCss : "https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-dark.min.css",
    bootstrapImportJs : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
    bootstrapIcons : "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css",

    flashJs : "https://cdn.jsdelivr.net/gh/K-cermak/Enplated-Framework@enp-v3/enp-data/flash.min.js",
    flashCss : "https://cdn.jsdelivr.net/gh/K-cermak/Enplated-Framework@enp-v3/enp-data/flash.min.css",

    aosJs : "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.js",
    aosCss : "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.css",

    loaderDataset : "https://cdn.jsdelivr.net/gh/K-cermak/Enplated-Framework@enp-v3/enp-data/loaders.min.js",
    allowedLoaders : ["sk-plane", "sk-chase", "sk-bounce", "sk-wave", "sk-pulse", "sk-flow", "sk-swing", "sk-circle", "sk-circlefade", "sk-grid", "sk-fold", "sk-wander", "vl-simplewheel", "vl-onewheel", "vl-doublewheel", "vl-dotwheel", "vl-mutliwheel", "vl-lightwheel", "vl-line"]
};

startEnp();

function startEnp() {
    bootstrapLoad();

    window.addEventListener("load",function() {
        varSetter();
        dataSetter();
        if (enplatedSettingsCustom.importFlash) {
            flashLoad();
        }
        if (enplatedSettingsCustom.importAOS) {
            aosLoad();
        }
        loaderLoad();
        if (enplatedSettingsCustom.gdprAllowed && enplatedSettingsCustom.gdprSettings.gdprSetters.currentVersion != getCookieValue(enplatedSettingsCustom.gdprSettings.gdprSetters.mainCookieName)) {
            gdprLoad();
        }
        loadGoogleAnalytics();
        loadCookieList();
    });
}

/**********************************/
/*START FUNCTIONS*/
/**********************************/
function bootstrapLoad() {
    loadCss(enplatedSettingsImport.bootstrapImportCss);
    if (enplatedSettingsCustom.useDarkMode) {
        loadCss(enplatedSettingsImport.bootstrapDarkCss);
    }
    includeJs(enplatedSettingsImport.bootstrapImportJs);
    loadCss(enplatedSettingsImport.bootstrapIcons);
}

function varSetter() {
    let allEnpSet = document.querySelectorAll("[enpVar]");
    for (let i = 0; i < allEnpSet.length; i++) {
        let enpSet = allEnpSet[i];
        let enpVar = enpSet.getAttribute("enpVar");
        let enpVarValue = enplatedSettingsCustom.smartVars[enpVar];
        if (enpVarValue != null) {
            enpSet.innerHTML = enpVarValue;
        }
    }
    
}

function dataSetter() {
    let allSetters = enplatedSettingsCustom.dataSetter;
    for (let key in allSetters) {
        let setter = allSetters[key];
        let elements = document.querySelectorAll(setter.selector);

        for (let j = 0; j < elements.length; j++) {
            let element = elements[j];
            for (let key in setter) {
                if (key != 'selector') {
                    element.setAttribute(key, setter[key]);
                }
            }
        }
    }
}

function flashLoad() {
    includeJs(enplatedSettingsImport.flashJs);
    loadCss(enplatedSettingsImport.flashCss);
}

function aosLoad() {
    loadCss(enplatedSettingsImport.aosCss);
    includeJs(enplatedSettingsImport.aosJs).then(() => {
        AOS.init({
            once: true,
        });
    });
}

/*GDPR AND COOKIE LOADERS*/
function loaderLoad() {
    for (let i = 0; i < enplatedSettingsImport.allowedLoaders.length; i++) {
        let loader = enplatedSettingsImport.allowedLoaders[i];
        if (document.querySelectorAll(loader).length > 0) {
            includeJs(enplatedSettingsImport.loaderDataset).then(() => {
                startAnimRender();
            });
            break;
        }
    }
}

function gdprLoad() {
    let hostname = window.location.hostname;
    let pathname = window.location.pathname;

    //if in gdprSettings.disableOnDomains or gdprSettings.disableOnPath
    if (!enplatedSettingsCustom.gdprSettings.disableOnDomains.includes(hostname) && !enplatedSettingsCustom.gdprSettings.disableOnPath.includes(pathname)) {
        let language = navigator.language || navigator.userLanguage;
        if (typeof enpPageLang !== "undefined") {
            language = enpPageLang;
        }

        //if not in gdprSettings.allowedLanguages
        if (!enplatedSettingsCustom.gdprSettings.allowedLang[language]) {
            language = enplatedSettingsCustom.gdprSettings.defaultLanguage;
        }

        //generate grey background over whole page
        let greyBackground = document.createElement("div");
        greyBackground.classList.add("enp-gdpr-background");
        greyBackground.style.position = "fixed";
        greyBackground.style.top = "0";
        greyBackground.style.left = "0";
        greyBackground.style.width = "100%";
        greyBackground.style.height = "100%";
        greyBackground.style.backgroundColor = "rgba(0,0,0,0.5)";
        greyBackground.style.zIndex = "9999";

        //disable scroll
        document.body.style.overflow = "hidden";

        //generate popup
        let popup = document.createElement("div");
        popup.innerHTML += genForm(language);
    
        //place popup in grey background
        greyBackground.appendChild(popup);
        document.body.appendChild(greyBackground);

        gdprListeners(popup);
    }
}

function gdprListeners(popup) {
    if (Object.keys(enplatedSettingsCustom.gdprSettings.allowedLang).length> 1) {
        document.querySelector(".gdprBox .gdprHeader .changeLanguage").addEventListener("click", function() {
            document.querySelector(".gdprBox .mainContent").style.display = "none";
            document.querySelector(".gdprBox .customizeSettings").style.display = "none";
            document.querySelector(".gdprBox .languageSettings").style.display = "flex";
            document.querySelector(".gdprBox .changeLanguage").style.display = "none";  
        });

        let allLangs = document.querySelectorAll(".langSwitcher");
        for (let i = 0; i < allLangs.length; i++) {
            allLangs[i].addEventListener("click", function() {
                let lang = allLangs[i].getAttribute("lang");
                popup.innerHTML = genForm(lang);
                gdprListeners(popup);
            });
        }
    }

    document.querySelector(".gdprBox .gdprOptions .settings").addEventListener("click", function() {
        document.querySelector(".gdprBox .mainContent").style.display = "none";
        document.querySelector(".gdprBox .customizeSettings").style.display = "flex";
        document.querySelector(".gdprBox .languageSettings").style.display = "none";
        document.querySelector(".gdprBox .changeLanguage").style.display = "block";
    });

    document.querySelector(".gdprBox .customizeSettings .goBack").addEventListener("click", function() {
        document.querySelector(".gdprBox .mainContent").style.display = "block";
        document.querySelector(".gdprBox .customizeSettings").style.display = "none";
        document.querySelector(".gdprBox .languageSettings").style.display = "none";
        document.querySelector(".gdprBox .changeLanguage").style.display = "block";
    });

    document.querySelector(".gdprBox .gdprOptions .agree").addEventListener("click", function() {
        allowScroll();
        cookieSetter("onAccept");
        reloadCheck();

    });
    document.querySelector(".gdprBox .customizeSettings .continueSelected").addEventListener("click", function() {
        cookieSetter("custom");
        allowScroll();
        reloadCheck();
    });
    document.querySelector(".gdprBox .gdprOptions .refuse").addEventListener("click", function() {
        allowScroll();
        cookieSetter("onDecline");
        reloadCheck();
    });
}

function genForm(language) {
    let data = `
    <style class="gdprStyles">
        .gdprBox, .gdprBox * {
            pointer-events: auto;
        }
        .gdprBox h2, .gdprBox h4, .gdprBox h5, .gdprBox p {
            color: #000000;
            font-family: inherit;
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
            font-family: inherit;
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
        .gdprBox .gdprHeader h2 {
            color: #000000;
        }
        .gdprBox .gdprHeader img {
            transition: 0.2s;
            cursor: pointer;
        }
        .gdprBox .gdprHeader img:hover {
            filter: brightness(0.8);
        }
        
        /*MAIN AREA*/
        .gdprBox .mainContent .message p {
            margin: 35px 0;   
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
            margin: 10px 0 10px 0;
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
            padding: 0 0 0 10px;
        }
        .gdprBox .gdprOptions .moreOptions h4 {
            margin: 0 0 5px 0;
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
            margin: -10px 0 30px 0;
        }
        .gdprBox .customizeSettings .settingsBlock {
            overflow-y: scroll;
            height: 300px;
            padding: 0 20px 0 0;
        }
        .gdprBox .settingsOption {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .gdprBox .settingsBlock details {
            margin: 0 0 10px 0;
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

        /*LANGUAGE SETTINGS*/
        .gdprBox .languageSettings {
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 50px;
        }
        .gdprBox .languageSettings img {
            transition: 0.3s;
            margin: 0 10px;
        }
        .gdprBox .languageSettings img:hover {
            cursor: pointer;
            filter: brightness(60%);
        }
        
        /*SWITCHES*/
        .gdprBox .switchInput {
            margin: 5px 0 0 20px;
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
        .gdprBox .settingsBlock .name::before {
            content: "▶ ";
        }
        .gdprBox .settingsBlock details[open] .name::before {
            content: "🔽 ";
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
                width: 90%;
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
                margin-left: 0;
            }
        }
    </style>
    `;

    data += `
        <div class="gdprBox">
        <div class="gdprHeader">
        <h2>`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.title+`</h2>`;

    if (Object.keys(enplatedSettingsCustom.gdprSettings.allowedLang).length> 1) {
        data += `<h4 class="changeLanguage"><img src="`+enplatedSettingsCustom.gdprSettings.allowedLang[language].flag+`" height="40px"></h4>`;
    }
    
    data += `</div>
        <div class="mainContent">
            <div class="message">
                <p>`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.mainScreen.info+`</p>
            </div>
            <div class="gdprOptions">
                <button class="agree">`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.buttons.acceptButton+`</button>
                <div class="moreOptions">
                    <h4 class="settings">`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.buttons.customizeButton+`</h4>
                    <h4 class="refuse">`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.buttons.declineButton+`</h4>
                </div>
            </div>
        </div>
        <div class="customizeSettings">
            <p class="goBack">`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.buttons.goBack+`</p>
            <div class="settingsBlock">`

        for (let cookie in enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies) {
            data += `<details class="`+cookie+`">
                <summary><h5 class="name">`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.cookies[cookie].name+`</h5><h5 class="function">`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.cookies[cookie].type+`</h5></summary>
                <div class="settingsOption">
                <p>`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.cookies[cookie].description+`</p>
                <div class='inputElement'>
                <label class='switchInput'>`;

            if (enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies[cookie].canBeChanged) {
                if (enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies[cookie].default) {
                    data += `<input type='hidden' class='`+cookie+`Input' name='`+cookie+`Input' value='0'>
                                <input type='checkbox' class='`+cookie+`Input' name='`+cookie+`Input' value='1' checked>`;
                } else {
                    data += `<input type='hidden' class='`+cookie+`Input' name='`+cookie+`Input' value='0' checked>
                                <input type='checkbox' class='`+cookie+`Input' name='`+cookie+`Input' value='1'>`;
                }
                data += `<span class='sliderInput'></span>`;
            } else {
                if (enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies[cookie].default) {
                    data += `<input type='hidden' class='`+cookie+`Input' name='`+cookie+`Input' value='0' onclick="return false;">
                                <input type='checkbox' class='`+cookie+`Input' name='`+cookie+`Input' value='1' checked onclick="return false;">`;
                } else {
                    data += `<input type='hidden' class='`+cookie+`Input' name='`+cookie+`Input' value='0' checked onclick="return false;">
                                <input type='checkbox' class='`+cookie+`Input' name='`+cookie+`Input' value='1' onclick="return false;">`;
                }
                data += `<span class='sliderInput disabled'></span>`;
            }
            
            data  += `</label>
                    </div>
                    </div>
                    </details>`;
        }

    data += `</div>
        <button class="continueSelected">`+enplatedSettingsCustom.gdprSettings.allowedLang[language].texts.buttons.continueWithSelected+`</button>
        </div>
        <div class="languageSettings">`;

    for (let lang in enplatedSettingsCustom.gdprSettings.allowedLang) {
        data += `<img src="`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].flag+`" height="40px" alt="`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].codename+`" class="langSwitcher" lang=`+lang+`>`;
    }

    data += `</div></div>`;

    return data;
}

function setCookie(cookieName, cookieValue, cookiePath, cookieDomain, cookieExpire) {
    let cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";";

    if (cookiePath) {
        cookie += "path=" + cookiePath + ";";
    }

    if (cookieDomain) {
        cookie += "domain=" + cookieDomain + ";";
    }

    if (cookieExpire) {
        let date = new Date();
        //add days to current date
        date.setTime(date.getTime() + (cookieExpire * 24 * 60 * 60 * 1000));

        cookie += "expires=" + date.toGMTString() + ";";
    }

    document.cookie = cookie;
}

function cookieSetter(type) {
    //list all cookies enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies
    let mainCookieName = enplatedSettingsCustom.gdprSettings.gdprSetters.mainCookieName;
    let currentVersion = enplatedSettingsCustom.gdprSettings.gdprSetters.currentVersion;

    let cookiePath = enplatedSettingsCustom.gdprSettings.gdprSetters.path;
    let cookieDomain = enplatedSettingsCustom.gdprSettings.gdprSetters.domain;
    let cookieExpire = enplatedSettingsCustom.gdprSettings.gdprSetters.expireInDays;

    setCookie(mainCookieName, currentVersion, cookiePath, cookieDomain, cookieExpire);

    for (let cookie in enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies) {
        //get cookie value on accept and cookieName
        let cookieName = enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies[cookie].cookieName;
        let cookieValue = "";
        if (type == "custom") {
            if (document.querySelectorAll("."+cookie+"Input")[1].checked) {
                cookieValue = true;
            } else {
                cookieValue = false;
            }
        } else {
            cookieValue = enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies[cookie][type];
        }

        //set cookie
        setCookie(cookieName, cookieValue, cookiePath, cookieDomain, cookieExpire);
    }
}

function allowScroll() {
    //enable scroll
    document.body.style.overflow = "auto";
    //remove popup
    document.querySelector(".enp-gdpr-background").remove();
}

function reloadCheck() {
    if (enplatedSettingsCustom.gdprSettings.reloadAfterComplete) {
        window.location.reload();
    }
}

function getCookieValue(cookieName) {
    let cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}

function loadGoogleAnalytics() {
    //check if allowed and if is enabled
    if (enplatedSettingsCustom.gdprSettings.googleAnalytics.enable == true && getCookieValue(enplatedSettingsCustom.gdprSettings.googleAnalytics.cookieName) == "true") {
        //load google analytics
        let anonymizeIp = enplatedSettingsCustom.gdprSettings.googleAnalytics.anonymizeIp;
        let trackingId = enplatedSettingsCustom.gdprSettings.googleAnalytics.trackingId;

        let script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id="+trackingId;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', trackingId, { 'anonymize_ip': anonymizeIp });
    }
}

function loadCookieList() {
    if (document.querySelector("enp-gdpr")) {
        let cookieList = document.querySelector("enp-gdpr");
        let lang = cookieList.getAttribute("lang");

        //list all cookies enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies and add them to the list
        let data = `<div class="cookieList">`;

        //version of mainCookie
        data += `<div class="cookieItem">
            <h4>`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].texts.gdprTitles.cookieListTitle+`:</h4>
            <p class="mt-1 mb-5"><strong>`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].texts.gdprTitles.consentVersion+`:</strong> `+ getCookieValue(enplatedSettingsCustom.gdprSettings.gdprSetters.mainCookieName).toString() +`</p>
        </div>`;



        for (let cookie in enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies) {
            data += `<div class="cookieItem">
                <h4>`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].texts.cookies[cookie].name+` - `+enplatedSettingsCustom.gdprSettings.allowedLang[lang].texts.cookies[cookie].type+`</h4>
                <p class="m-0">`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].texts.cookies[cookie].description+`</p>
                <h5 class="mt-1 mb-5">`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].texts.gdprTitles.cookieValue+`: `+ getCookieValue(enplatedSettingsCustom.gdprSettings.gdprSetters.individualCookies[cookie].cookieName).toString() +`</h5>
            </div>`;
        }
        //add reset button
        data += `<div class="cookieItem">
            <button class="btn btn-danger" id="enpGdprReset">`+enplatedSettingsCustom.gdprSettings.allowedLang[lang].texts.gdprTitles.resetConset+`</button>
        </div>`;

        data += `</div>`;

        cookieList.innerHTML = data;

        document.querySelector("#enpGdprReset").addEventListener("click", function() {
            resetConsent();
        });
    }
}

function resetConsent() {
    let cookies = document.cookie.split("; ");
    for (let c = 0; c < cookies.length; c++) {
        let d = window.location.hostname.split(".");
        while (d.length > 0) {
            let cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            let p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
    document.location.reload(true)
}

/**********************************/
/*HELPERS*/
/**********************************/
/*INCLUDE HELPERS*/
async function includeJs(jsFilePath) {
    await new Promise((resolve) => {
        let script = document.createElement("script");
    
        script.onload = () => {
            resolve();
        };
    
        script.src = jsFilePath;
    
        document.head.appendChild(script);
    });
}

function loadCss(cssFilePath) {
    document.querySelector("head").insertAdjacentHTML("beforeend","<link rel='stylesheet' href='"+cssFilePath+"' />");
}

/*FLASH HELPER*/
function genFlashMessage(msg, type, time) {
    let settings = {
        progress: true,
        interactive: true,
        timeout: time,
        container: '.flash-container',
    };

    if (type == 'success')
        window.FlashMessage.success(msg, settings);
    else if (type == 'error')
        window.FlashMessage.error(msg, settings);
    else if (type == 'warning')
        window.FlashMessage.warning(msg, settings);
    else if (type == 'info')
        window.FlashMessage.info(msg, settings);
}

/*LOADERS HELPER*/
function genRandomId() {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

function startAnimRender() {
    for (let i = 0; i < enplatedSettingsImport.allowedLoaders.length; i++) {
        let loader = enplatedSettingsImport.allowedLoaders[i];

        for (let j = 0; j < document.querySelectorAll(loader).length; j++) {
            //split loader name by dash
            let loaderType = loader.split('-')[0];
            let loaderName = loader.split('-')[1];

            let loaderElement = document.querySelectorAll(loader)[j];
            let loaderColor = loaderElement.getAttribute('color');
            let randomId = genRandomId();

            let loaderHtml, loaderCss;

            if (loaderType == 'sk') {
                loaderHtml = loadersData.spinkit[loaderName].html;
                loaderCss = loadersData.spinkit[loaderName].css;
                
                //rename selector with random id
                loaderHtml = loaderHtml.replaceAll("selector", randomId);
                loaderCss = loaderCss.replaceAll("selector", randomId);

                //if color is set, replace it
                if (loaderColor) {
                    loaderCss = loaderCss.replaceAll("#333", loaderColor);
                }

            } else if (loaderType == "vl") {
                loaderHtml = "<span class='selector'></span>";
                loaderCss = loadersData.vinloaders[loaderName].css;
                let secondColor = loaderElement.getAttribute('color2');
                let thirdColor = loaderElement.getAttribute('color3');

                //if color is set, replace it
                if (loaderColor) {
                    loaderCss = loaderCss.replaceAll("#ff3d00", loaderColor);
                }
                if (secondColor) {
                    loaderCss = loaderCss.replaceAll("#fff", secondColor);
                }
                if (thirdColor) {
                    loaderCss = loaderCss.replaceAll("#eee", thirdColor);
                }
            }

            //rename selector with random id
            loaderHtml = loaderHtml.replaceAll("selector", randomId);
            loaderCss = loaderCss.replaceAll("selector", randomId);

            loaderElement.innerHTML = loaderHtml;
            loaderElement.insertAdjacentHTML("beforeend", "<style>" + loaderCss + "</style>");
        }
    }
}

/*MODAL HELPERS*/
var modalLinks = [];
function genModal(object) {
    let modalId = genRandomId();
    let modalHtml = `<div class="modal fade" id="`+modalId+`" tabindex="-1" role="dialog" aria-labelledby="`+modalId+`Label" aria-hidden="true"`;

    if (!object.global.closable) {
        modalHtml += `data-bs-backdrop="static" data-bs-keyboard="false"`
    }
    
    modalHtml += `><div class="modal-dialog modal-`+object.global.size;

    if (object.global.scrollable) {
        modalHtml += ` modal-dialog-scrollable`;
    }
    if (object.global.position == "center") {
        modalHtml += ` modal-dialog-centered`;
    }
        
    modalHtml += `" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">`+object.header.title+`</h5>`
    
    if (object.header.closeButton) {
        modalHtml += `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;
    }

    modalHtml += `</div><div class="modal-body">` + object.main.content + `</div><div class="modal-footer">`;
                    

    for (let i = 0; i < Object.keys(object.footer.buttons).length; i++) {
        let button = object.footer.buttons[Object.keys(object.footer.buttons)[i]];
        modalHtml += `<button type="button" class="btn btn-`+button.type+`">`+button.text+`</button>`;
    }

    modalHtml += `</div></div></div></div>`;

    document.querySelector("body").insertAdjacentHTML("beforeend", modalHtml);

    for (let i = 0; i < Object.keys(object.footer.buttons).length; i++) {
        let button = object.footer.buttons[Object.keys(object.footer.buttons)[i]];
        document.querySelectorAll("#"+modalId+" .modal-footer button")[i].addEventListener("click", function() {
            if (button.function == "close") {
                closeModal(modalId);
            } else if (button.function == "reload") {
                location.reload();
            } else if (button.function == "submit") {

                //if function exists, execute it, if not, submit form
                if (button.dataset) {
                    //replace word "selector" with modalId
                    let func = button.dataset.toString().replaceAll("selector", "#" + modalId);

                    //convert string to function
                    func = new Function("return " + func)();

                    //if function returns false, stop submit
                    let returnData = func();
                    if (returnData == false) {
                        return;
                    }
                }
                document.querySelector("#"+modalId+" form").submit();

            } else if (button.function == "redirect") {
                window.location.href = button.dataset;
            } else if (button.function == "function") {

                //replace word "selector" with modalId
                let func = button.dataset.toString().replaceAll("selector", modalId);

                //convert string to function
                func = new Function("return " + func)();

                //execute function
                func();
            }
        });
    }

    showModal(modalId);
    return modalId;
}

function showModal(modalId) {
    let modal = new bootstrap.Modal(document.querySelector("#"+modalId), {
        keyboard: false
    });
    modal.show();

    let object = {
        id : modalId,
        modal : modal,
    }

    modalLinks.push(object);
}

function closeModal(modalId) {
    for (let i = 0; i < modalLinks.length; i++) {
        if (modalLinks[i].id == modalId) {
            modalLinks[i].modal.hide();
        }
    }
}