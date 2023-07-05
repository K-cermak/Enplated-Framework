var enplatedSettingsCustom = {
    useDarkMode : false,
    importFlash : true,
    importAOS : true,
    smartVars : {},
    dataSetter : {},
    
    gdprAllowed : false,
    gdprSettings : {
        disableOnDomains : ["localhost", "127.0.0.1"],
        disableOnPath : [],
        defaultLanguage : "en",
        reloadAfterComplete : false,
        googleAnalytics : {
            enable : true,
            trackingId : "G-1234567890",
            anonymizeIp : true,
            cookieName : "cookieName",
        },
        gdprSetters : {
            currentVersion : "1",
            mainCookieName : "enpGdpr",
            domain : "example.com",
            path : "/",
            expireInDays : 365,
            individualCookies : {}
        },
        allowedLang : {
            en : {
                flag : "https://flags.fmcdn.net/data/flags/small/gb.png",
                codename: "English",
                texts : {
                    title : "GDPR and cookies",
                    buttons : {
                        acceptButton : "Accept all Cookies",
                        customizeButton : "Customize your settings",
                        declineButton : "Continue with only necessary cookies",
                        goBack : "Go back",
                        continueWithSelected : "Continue with selected settings"
                    },
                    mainScreen : {
                        info : "This website may use cookies. It may also collect certain personal information. All information can be found on this page <a href='example.com/gdpr' target='_blank'>example.com/gdpr</a>."
                    },
                    gdprTitles : {
                        cookieListTitle : "Cookie list",
                        cookieValue : "Value",
                        consentVersion : "Consent version",
                        acceptedOn : "Accepted on",
                        resetConset : "Reset consent",
                    },

                    cookies : {}
                }
            },
        },
    }
};