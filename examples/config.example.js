var enplatedSettingsCustom = {
    useDarkMode : false,
    importFlash : true,
    importAOS : true,
    smartVars : {
        "enp-title" : "Enplated",
        "enp-description" : "Enplated is a free and open source template engine. It is designed to be easy to use and fast.",
    },
    dataSetter : {
        basicAnimation : {
            selector : ".basic-animation",
            "data-aos" : "zoom-in",
            "data-aos-delay" : "300",
        },
        anotherAnimation : {
            selector : ".another-animation",
            "data-aos" : "fade-up",
            "data-aos-delay" : "300",
        },
    },

    gdprAllowed : false,
    gdprSettings : {
        disableOnDomains : ["localhost", "127.0.0.1"],
        disableOnPath : ["gdpr.html"],
        defaultLanguage : "en",
        reloadAfterComplete : false,
        googleAnalytics : {
            enable : true,
            trackingId : "G-1234567890",
            anonymizeIp : true,
            cookieName : "enpGdprGoogleAnalytics",
        },
        gdprSetters : {
            currentVersion : "1",
            mainCookieName : "enpGdpr",
            domain : "example.com",
            path : "/",
            expireInDays : 365,
            individualCookies : {
                googleFonts : {
                    default : true,
                    canBeChanged : false,
                    onAccept : true,
                    onDecline: true,
                    cookieName : "enpGdprGoogleFonts",
                },
                recaptcha : {
                    default: true,
                    canBeChanged : true,
                    onAccept : true,
                    onDecline : true,
                    cookieName : "enpGdprRecaptcha",
                },
                googleAnalytics : {
                    default : false,
                    canBeChanged : true,
                    onAccept : true,
                    onDecline: false,
                    cookieName : "enpGdprGoogleAnalytics",
                },
            }
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

                    cookies : {
                        googleFonts : {
                            name : "Google Fonts",
                            type : "Critical functional",
                            description : "Font styles that are used on the services. This setting cannot be changed."
                        },
                        recaptcha : {
                            name : "Google reCaptcha",
                            type : "Functional",
                            description : "Google reCAPTCHA is used to protect services against various bots and spambots."
                        },
                        googleAnalytics : {
                            name : "Google Analytics",
                            type : "Analytics",
                            description : "Google Analytics is used to generate various statistics about user behaviour, etc."
                        },
                    }
                }
            },
            cs : {
                flag : "https://flags.fmcdn.net/data/flags/small/cz.png",
                codename: "Čeština",
                texts : {
                    title : "GDPR a soubory cookies",
                    buttons : {
                        acceptButton : "Přijmout",
                        customizeButton : "Přizpůsobit nastavení",
                        declineButton : "Pokračovat pouze s nezbytnými cookies",
                        goBack : "Jít zpět",
                        continueWithSelected : "Pokračovat se zvoleným nastavením"
                    },
                    mainScreen : {
                        info : "Tato stránka může používat cookies. Může také sbírat některé osobní informace. Bližší informace můžete nalézt na <a href='example.com/gdpr' target='_blank'>example.com/gdpr</a>."
                    },
                    valueTitle : "Hodnota",
                    cookies : {
                        googleFonts : {
                            name : "Google Fonts",
                            type : "Krytický funkční",
                            description : "Styly písma, které jsou použity ve službách. Toto nastavení nemůže být změněno."
                        },
                        recaptcha : {
                            name : "Google reCaptcha",
                            type : "Funkční",
                            description : "Google reCAPTCHA je používána na ochranu před různými spamboty a jinými roboty."
                        },
                        googleAnalytics : {
                            name : "Google Analytics",
                            type : "Analytické",
                            description : "Google Analytics je používáno pro generování různých informacích o chování uživatele apod."
                        },
                    }
                }
            },
            es : {
                flag : "https://flags.fmcdn.net/data/flags/small/es.png",
                codename: "Español",
                texts : {
                    title : "RGPD y cookies",
                    buttons : {
                        acceptButton : "Aceptar",
                        customizeButton : "Personalizar ajustes",
                        declineButton : "Continuar solo con cookies esenciales",
                        goBack : "Volver",
                        continueWithSelected : "Continuar con la configuración seleccionada"
                    },
                    mainScreen : {
                        info : "Esta página puede utilizar cookies. También puede recopilar cierta información personal. Puede encontrar más información en <a href='example.com/gdpr' target='_blank'>example.com/gdpr</a>."
                    },
                    valueTitle : "Valor",
                    cookies : {
                        googleFonts : {
                            name : "Google Fonts",
                            type : "Funcional esencial",
                            description : "Estilos de fuente utilizados en servicios. Esta configuración no puede ser modificada."
                        },
                        recaptcha : {
                            name : "Google reCaptcha",
                            type : "Funcional",
                            description : "Google reCAPTCHA se utiliza para protegerse contra varios spambots y otros robots."
                        },
                        googleAnalytics : {
                            name : "Google Analytics",
                            type : "Analítico",
                            description : "Google Analytics se utiliza para generar información sobre el comportamiento del usuario, entre otras cosas."
                        },
                    }
                }
            },
        },
    }
};