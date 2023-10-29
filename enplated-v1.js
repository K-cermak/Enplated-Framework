/*
ENPLATED FRAMEWORK v1.0 by Karel Cermak (info@k-cermak.com)
THIS IS OLD VERSION OF ENPLATED FRAMEWORK AND YOU SHOULD SWITCH: https://github.com/K-cermak/Enplated-Framework
*/

document.getElementsByTagName("head")[0].innerHTML += "<link id='enplatedStyles' rel='stylesheet' type='text/css' media='screen' href='https://mirror.k-cermak.com/data/enplated/enplated-v1.css'>";

window.onload = function startVerify() {
    var copyright = document.getElementById("copyright");
    if (copyright == null) {
        disableStyles();
        var temp = document.getElementsByTagName("body")[0].innerHTML;
        document.getElementsByTagName("body")[0].innerHTML = "<h2 id='verifyWarning' style='color:red'>CHYBA S VALIDACÍ: Přečtěte si výpis v konzoli</h2>" + temp;
        console.log("CHYBA: Nebylo zadáno místo pro copyright text, proto styly nebyly načteny");
        console.log("ŘEŠENÍ: Vložte prosím do stránky element s id \"copyright\"");
        console.log("ALTERNATIVA: Pokud je web v testovacím prostředí, vložte do konzole příkaz developerVersion()");
    } else {
        var tag = document.getElementById("enplated");
        if (tag == null) {
            disableStyles();
            var temp = document.getElementsByTagName("body")[0].innerHTML;
            document.getElementsByTagName("body")[0].innerHTML = "<h2 id='verifyWarning' style='color:red'>CHYBA S IMPLEMENTACÍ: Přečtěte si výpis v konzoli</h2>" + temp;
            console.log("CHYBA: Nebyl vložen žádný element s id \"enplated\"");
            console.log("ŘEŠENÍ: Vložte prosím hned za element body element div s id \"enplated\" a ukončete ho před uzavíracím tagem body. Veškěrý obsah vkládejte do něj");
        } else {
            document.getElementById("copyright").innerHTML = "Crearted with <a href='https://mirror.k-cermak.com' target='_blank'>Enplated v1</a> (<a href='https://gdpr.k-cermak.com/' target='_blank'>Privacy Policy</a>) and <a href='https://fonts.google.com/' target='_blank'>Google Fonts</a>";
        }
    }
}

function disableStyles() {
    document.getElementById('enplatedStyles').setAttribute('href', '');
}

function developerVersion() {
    try {
        document.getElementsByTagName("head")[0].innerHTML += "<link id='enplatedStyles' rel='stylesheet' type='text/css' media='screen' href='https://mirror.k-cermak.com/data/enplated/enplated-v1.css'>";
        document.getElementById("verifyWarning").innerHTML = "Vývojářská verze";
        document.getElementById("verifyWarning").style.position = "absolute";
        document.getElementById("verifyWarning").style.margin = "0px";
        document.getElementById("verifyWarning").style.paddingTop = "20px";
        document.getElementById("verifyWarning").style.fontSize = "1em";
        document.getElementById("verifyWarning").style.opacity = "0.8";
        var text = "Verze pro vývojáře aktivována";
    } catch(err) {
        var text = "CHYBA: Vávojářská verze nemohla být z neznámého důvodu aktivována";
    }
    return text;
}