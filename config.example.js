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
        disableOnDomains : ["localhost", ""],
        disableOnPath : ["gdpr.html"],
        defaultLanguage : "en",
        googleAnalytics : {
            enable : true,
            trackingId : "G-MJBKCKFMXD",
            anonymizeIp : true,
            cookieName : "enpGdprGoogleAnalytics",
        },
        reloadAfterComplete : false,
        gdprSetters : {
            currentVersion : "2",
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
                googleAnalytics : {
                    default : false,
                    canBeChanged : true,
                    onAccept : true,
                    onDecline: false,
                    cookieName : "enpGdprGoogleAnalytics",
                },
                recaptcha : {
                    default: true,
                    canBeChanged : true,
                    onAccept : true,
                    onDecline : false,
                    cookieName : "enpGdprRecaptcha",
                }
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
                        googleAnalytics : {
                            name : "Google Analytics",
                            type : "Analytics",
                            description : "Google Analytics is used to generate various statistics about user behaviour, etc."
                        },
                        recaptcha : {
                            name : "Google reCaptcha",
                            type : "Functional",
                            description : "Google reCAPTCHA is used to protect services against various bots and spambots."
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
                        googleAnalytics : {
                            name : "Google Analytics",
                            type : "Analytické",
                            description : "Google Analytics je používáno pro generování různých informacích o chování uživatele apod."
                        },
                        recaptcha : {
                            name : "Google reCaptcha",
                            type : "Funkční",
                            description : "Google reCAPTCHA je používána na ochranu před různými spamboty a jinými roboty."
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
                        googleAnalytics : {
                            name : "Google Analytics",
                            type : "Analítico",
                            description : "Google Analytics se utiliza para generar información sobre el comportamiento del usuario, entre otras cosas."
                        },
                        recaptcha : {
                            name : "Google reCaptcha",
                            type : "Funcional",
                            description : "Google reCAPTCHA se utiliza para protegerse contra varios spambots y otros robots."
                        },
                    }
                }
            },
        },
    }
};

var bootstrapTestModal = {
    global : {
        closable : true, //true | false
        size : "md", //sm | md | lg | xl
        scrollable : true, //true | false
        position : "center", //center | top
    },
    header : {
        title : "Modal title",
        closeButton : true, //true | false
    },
    main : {
        content : "Modal content <form action='index.html' method='GET'><input type='text' id='test' name='test' value='test' /></form>",
    },
    footer : {
        buttons : {
            close : {
                text : "Close",
                type : "secondary", //primary | secondary | success | danger | warning | info | light | dark
                function : "close", //close | reload | submit | redirect | function
            },
            reload : {
                text : "Reload",
                type : "warning", //primary | secondary | success | danger | warning | info | light | dark
                function : "reload", //close | reload | submit | redirect | function
            },
            form : {
                text : "Submit",
                type : "danger", //primary | secondary | success | danger | warning | info | light | dark
                function : "submit", //close | reload | submit | redirect | function
                dataset : function() {	
                    if (document.querySelector("selector #test").value != "test") {
                        alert("error");
                        return false;
                    }
                }
            },
            redirect : {
                text : "Redirect",
                type : "info", //primary | secondary | success | danger | warning | info | light | dark
                function : "redirect", //close | reload | submit | redirect | function
                dataset : "https://google.com",
            },
            function : {
                text : "Function",
                type : "primary", //primary | secondary | success | danger | warning | info | light | dark
                function : "function", //close | reload | submit | redirect | function
                dataset : function() {	
                    alert("save");
                    closeModal("selector");
                },
            },
        },
    },
}