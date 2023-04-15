var enplatedSettingsCustom = {
    useDarkMode : false,
    importFlash : true,
    importAOS : true,
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
    }
};

var enplatedSettingsImport = {
    bootstrapImportCss : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
    bootstrapDarkCss : "https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-dark.min.css",
    bootstrapImportJs : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
    bootstrapIcons : "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css",

    flashJs : "/enp-data/flash.min.js",
    flashCss : "/enp-data/flash.min.css",

    aosJs : "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.js",
    aosCss : "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.min.css",

    loaderDataset : "/enp-data/loaders.js",
    allowedLoaders : ["sk-plane", "sk-chase", "sk-bounce", "sk-wave", "sk-pulse", "sk-flow", "sk-swing", "sk-circle", "sk-circlefade", "sk-grid", "sk-fold", "sk-wander", "vl-simplewheel", "vl-onewheel", "vl-doublewheel", "vl-dotwheel", "vl-mutliwheel", "vl-lightwheel", "vl-line"]
};

start();

function start() {
    bootstrapLoad();
    dataSetter();
    if (enplatedSettingsCustom.importFlash) {
        flashLoad();
    }
    if (enplatedSettingsCustom.importAOS) {
        aosLoad();
    }
    loaderLoad();

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
    includeJs(enplatedSettingsImport.aosJs);
    loadCss(enplatedSettingsImport.aosCss);
    //after load
    window.onload = function() {
        AOS.init({
            once: true,
        });
    };
}

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
        window.FlashMessage.success(msg, { settings });
    else if (type == 'error')
        window.FlashMessage.error(msg, { settings });
    else if (type == 'warning')
        window.FlashMessage.warning(msg, { settings });
    else if (type == 'info')
        window.FlashMessage.info(msg, { settings });
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