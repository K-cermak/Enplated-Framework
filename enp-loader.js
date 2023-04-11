var enplatedSettingsCustom = {
    useDarkMode : false,
    importFlash : true,
    
};

var enplatedSettingsImport = {
    bootstrapImportCss : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
    bootstrapDarkCss : "https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-dark.min.css",
    bootstrapImportJs : "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
    bootstrapIcons : "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css",
    flashJs : "/enp-loader/flash.min.js",
    flashCss : "/enp-loader/flash.min.css",
};

start();
function start() {
    /*BOOTSTRAP LOAD*/
    loadCss(enplatedSettingsImport.bootstrapImportCss);
    if (enplatedSettingsCustom.useDarkMode) loadCss(enplatedSettingsImport.bootstrapDarkCss);
    includeJs(enplatedSettingsImport.bootstrapImportJs);
    loadCss(enplatedSettingsImport.bootstrapIcons);

    /*FLASH LOAD*/
    if (enplatedSettingsCustom.importFlash)includeJs(enplatedSettingsImport.flashJs);
    if (enplatedSettingsCustom.importFlash) loadCss(enplatedSettingsImport.flashCss);
}

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