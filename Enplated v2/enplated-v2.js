/*
ENPLATED v2.0 by Karel Cermak (info@k-cermak.com)
WEBSITE: https://enplated.k-cermak.com/
DOCUMENTATION: https://enplated.k-cermak.com/en/documentation
LICENSE: https://enplated.k-cermak.com/en/license
*/

document.querySelector("head").innerHTML += "<link rel='stylesheet' type='text/css' media='screen' href='https://mirror.k-cermak.com/data/enplated/enplated-v2.css'>";

window.addEventListener('load', function () {
    printMessage("load","Page loaded, starting with Enplated JS");
    loadCopyright();
    loadVariables();
    loadColors();
    loadFonts();
    loadListeners();
    loadRedirect();
    loadCounters();
    printMessage("check","Enplated JS setup finished");
});


function loadVariables() {
    printMessage("load","Loading Enplated variables");
    for (let i = 0; i < Object.values(pageVariables).length; i++) {
        let varName = Object.getOwnPropertyNames(pageVariables)[i];
        for (let j = 0; j < document.querySelectorAll("span."+varName).length; j++) {
            document.querySelectorAll("span."+varName)[j].innerHTML = Object.values(pageVariables)[i];
        }
    }
    printMessage("check","Enplated variables loaded");
}

function loadCopyright() {
    if (developerVersion == true) {
        try {
            document.querySelector("#"+copyrightInfoId).innerHTML += "Created with <a href='https://enplated.k-cermak.com' target='_blank'>Enplated v2.0</a> (privacy policy <a href='https://gdpr.k-cermak.com' target='_blank'>here</a>). May use <a href='https://policies.google.com/privacy?hl=en-US' target='_blank'>Google Services</a>. ";
        } catch (err) {}

        document.querySelector("main").innerHTML = "<p style='color:red'>Developer mode activated</p>" + document.querySelector("main").innerHTML;
        printMessage("check","Developer version enabled")
    } else {
        try {
            document.querySelector("#"+copyrightInfoId).innerHTML += "Created with <a href='https://enplated.k-cermak.com' target='_blank'>Enplated v2.0</a> (privacy policy <a href='https://gdpr.k-cermak.com' target='_blank'>here</a>). May use <a href='https://policies.google.com/privacy?hl=en-US' target='_blank'>Google Services</a>. ";
        } catch (err) {
            document.querySelector("main").innerHTML = "<h1 style='color:red'>Enplated copyright doesn't exist (read browser console)</h1>" + document.querySelector("main").innerHTML;
            printMessage("error","Enplated core cannot find copyright bar", true)
            printMessage("warn","SOLUTION: Go to config.js and correctly fill copyrightInfoId variabl", true)
            printMessage("warn","ALTERNATIVE: Go to config.js and change variable developerVersion to true (only for testing)", true)
        }
    }
}

function loadColors() {
    printMessage("load","Loading Enplated colors");
    ((pageColors.mainBackgroud != "default") ? setRootElement("--mainBackgroudColor", pageColors.mainBackgroud) : setRootElement("--mainBackgroudColor", "#222222"));
    ((pageColors.secondBackground != "default") ? setRootElement("--secondBackgroundColor", pageColors.secondBackground) : setRootElement("--secondBackgroundColor", "#393e46"));
    ((pageColors.icon != "default") ? setRootElement("--iconColor", pageColors.icon) : setRootElement("--iconColor", "#ffffff"));
    ((pageColors.h1 != "default") ? setRootElement("--h1Color", pageColors.h1) : setRootElement("--h1Color", "#ffffff"));
    ((pageColors.h2 != "default") ? setRootElement("--h2Color", pageColors.h2) : setRootElement("--h2Color", "#ffffff"));
    ((pageColors.h3 != "default") ? setRootElement("--h3Color", pageColors.h3) : setRootElement("--h3Color", "#ffffff"));
    ((pageColors.h4 != "default") ? setRootElement("--h4Color", pageColors.h4) : setRootElement("--h4Color", "#ffffff"));
    ((pageColors.h5 != "default") ? setRootElement("--h5Color", pageColors.h5) : setRootElement("--h5Color", "#ffffff"));
    ((pageColors.h6 != "default") ? setRootElement("--h6Color", pageColors.h6) : setRootElement("--h6Color", "#ffffff"));
    ((pageColors.p != "default") ? setRootElement("--pColor", pageColors.p) : setRootElement("--pColor", "#ffffff"));
    ((pageColors.a != "default") ? setRootElement("--aColor", pageColors.a) : setRootElement("--aColor", "#0072a6"));
    ((pageColors.aHover != "default") ? setRootElement("--aHoverColor", pageColors.aHover) : setRootElement("--aHoverColor", "#0072a6"));
    ((pageColors.headerName != "default") ? setRootElement("--headerNameColor", pageColors.headerName) : setRootElement("--headerNameColor", "#ffffff"));
    ((pageColors.headerMenu != "default") ? setRootElement("--headerMenuColor", pageColors.headerMenu) : setRootElement("--headerMenuColor", "#ffffff"));
    ((pageColors.headerMenuMobileBackground != "default") ? setRootElement("--headerMenuMobileBackgroundColor", pageColors.headerMenuMobileBackground) : setRootElement("--headerMenuMobileBackgroundColor", "#121212"));
    ((pageColors.footerMain != "default") ? setRootElement("--footerMainColor", pageColors.footerMain) : setRootElement("--footerMainColor", "#393e46"));
    ((pageColors.footerSecond != "default") ? setRootElement("--footerSecondColor", pageColors.footerSecond) : setRootElement("--footerSecondColor", "#121212"));
    ((pageColors.h2 != "default") ? setRootElement("--animation-color", pageColors.h2) : setRootElement("--animation-color", "#ffffff"));
    printMessage("check","Enplated colors loaded");
}

function loadFonts() {
    printMessage("load","Checking Google fonts");
    if (googleFontsImport != "") {
        printMessage("load","Importing Google Fonts");
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', googleFontsImport);
        document.head.appendChild(link);
    }
    printMessage("check","Google fonts finished");

    printMessage("load","Loading Enplated fonts");
    ((fonts.h1 != "default") ? setRootElement("--h1Font", fonts.h1) : setRootElement("--h1Font", "Arial"));
    ((fonts.h2 != "default") ? setRootElement("--h2Font", fonts.h2) : setRootElement("--h2Font", "Arial"));
    ((fonts.h3 != "default") ? setRootElement("--h3Font", fonts.h3) : setRootElement("--h3Font", "Arial"));
    ((fonts.h4 != "default") ? setRootElement("--h4Font", fonts.h4) : setRootElement("--h4Font", "Arial"));
    ((fonts.h5 != "default") ? setRootElement("--h5Font", fonts.h5) : setRootElement("--h5Font", "Arial"));
    ((fonts.h6 != "default") ? setRootElement("--h6Font", fonts.h6) : setRootElement("--h6Font", "Arial"));
    ((fonts.p != "default") ? setRootElement("--pFont", fonts.p) : setRootElement("--pFont", "Arial"));
    ((fonts.headerName != "default") ? setRootElement("--headerNameFont", fonts.headerName) : setRootElement("--headerNameFont", "Arial"));
    ((fonts.headerMenu != "default") ? setRootElement("--headerMenuFont", fonts.headerMenu) : setRootElement("--headerMenuFont", "Arial"));
    ((fonts.footerMain != "default") ? setRootElement("--footerMainFont", fonts.footerMain) : setRootElement("--footerMainFont", "Arial"));
    ((fonts.footerSecond != "default") ? setRootElement("--footerSecondFont", fonts.footerSecond) : setRootElement("--footerSecondFont", "Arial"));
    printMessage("check","Enplated fonts loaded");
}

function setRootElement(elementName, property) {
    document.documentElement.style.setProperty(elementName, property);
}

function loadListeners() {
    printMessage("load","Loading mobile menu settings");
    if (document.querySelector(".headerClassic") != null) {
        document.querySelector(".headerClassic").innerHTML = document.querySelector(".headerClassic").innerHTML + "<span class='material-icons mobileMenu'>menu</span>";
    }
    //MOBILE MENU
    if (document.querySelector(".mobileMenu") != null) {
        var menuOpen = false;
        document.querySelector(".mobileMenu").addEventListener("click", function() {
            if (menuOpen == false & window.innerWidth < 1024) {
                menuOpen = true;
                openMenu(0);
                document.querySelector("body").style.overflow = "hidden";
            } else if (window.innerWidth < 1024) {
                menuOpen = false;
                closeMenu(100);
                document.querySelector("body").style.removeProperty('overflow');
            }
        });

        var body = document.querySelector('body');
        var except = document.querySelector('.headerMenu');
        var except2 = document.querySelector('.mobileMenu');
        
        body.addEventListener("click", function () {
            if (window.innerWidth < 1024) {
                menuOpen = false;
                closeMenu(100);
                document.querySelector("body").style.removeProperty('overflow');
            }
        }, false);
        except.addEventListener("click", function (ev) {
            if (window.innerWidth < 1024) {
                menuOpen = true;
                openMenu(0);
                document.querySelector("body").style.overflow = "hidden";
            }
            ev.stopPropagation();
        }, false);
        except2.addEventListener("click", function (ev) {
            ev.stopPropagation();
        }, false);
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            if (document.querySelector(".headerClassic") != null) {
                menuOpen = false;
                openMenu(0);
            }
            document.querySelector("body").style.removeProperty('overflow');
            openHeader(96);
        } else {
            menuOpen = false;
            document.querySelector("header").style.justifyContent = "center";
            setTimeout("resetLayout()", 40)
            if (document.querySelector(".headerClassic") != null) {
                closeMenu(100);
            }
            document.querySelector("body").style.removeProperty('overflow');
            openHeader(96);
        }
    }, true);

    printMessage("check","Mobile menu settings finished");

    printMessage("load","Loading mobile headers setting");
    //MOBILE HEADER
    var lastScrollTop = 0;
    let headerVisible = true;
    document.addEventListener("scroll", function() { 
        if (window.innerWidth < 1024) {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop & st > 100 & headerVisible == true & document.querySelector("header").style.opacity == "1" | document.querySelector("header").style.opacity == "") {
                headerVisible = false;
                printMessage("check","Closing header");
                closeHeader(100);
            } else if (st < lastScrollTop & headerVisible == false & document.querySelector("header").style.opacity == "0" | document.querySelector("header").style.opacity == "") {
                headerVisible = true;
                printMessage("check","Opening header");
                openHeader(0);
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }
    }, false);

    //CLICK ON MAIN ICON
    if (document.querySelector("header img") != null) {
        if (document.querySelector("header img").hasAttribute("onclick") == true) {
            document.querySelector("header img").style.cursor = "pointer";
        }
    }
    printMessage("check","Mobile menu headers finished");
}

function resetLayout() {
    printMessage("check","Changing layout");
    document.querySelector("header").style.justifyContent = "space-between";
}

function closeHeader(visibility) {
    if (visibility > 0) {
        visibility -= 4;
        document.querySelector("header").style.opacity = visibility + "%";
        setTimeout('closeHeader('+visibility+')',2);
    } else {
        document.querySelector("header").style.display = "none";
    }
}

function openHeader(visibility) {
    document.querySelector("header").style.display = "flex";
    if (visibility < 100) {
        visibility += 4;
        document.querySelector("header").style.opacity = visibility + "%";
        setTimeout('openHeader('+visibility+')',2);
    }
}

function closeMenu(visibility) {
    if (visibility > 0) {
        visibility -= 3;
        document.querySelector(".headerMenu").style.opacity = visibility + "%";
        setTimeout('closeMenu('+visibility+')',2);
    } else {
        document.querySelector(".headerMenu").style.display = "none";
    }
}

function openMenu(visibility) {
    document.querySelector(".headerMenu").style.display = "flex";
    if (visibility < 100) {
        visibility += 3;
        document.querySelector(".headerMenu").style.opacity = visibility + "%";
        setTimeout('openMenu('+visibility+')',2);
    }
}

function printMessage(type, message, needed) {
    if (developerVersion == true | needed == true) {
        if (type == "check") {
            console.log("✓ " + message);
        } else if (type == "warn") {
            console.log("⚠ " + message);
        } else if (type == "error") {
            console.log("✕ " + message);
        } else if (type == "load") {
            console.log("⧖ " + message);
        } else {
            console.log(message);
        }
    }
}

function loadRedirect() {
    if (document.querySelector(".redirect") != null) {
        let to = document.querySelector(".redirect").getAttribute("to");
        let time = document.querySelector(".redirect").getAttribute("time");
        let animation = document.querySelector(".redirect").getAttribute("animation");
        setTimeout(redirectTo, time, to);
        
        let style = "";
            if (animation != -1) {
            if (animation == 1) {
                style = '<div class="animation-plane"></div>';
            } else if (animation == 2) {
                style = '<div class="animation-chase"><div class="animation-chase-dot"></div><div class="animation-chase-dot"></div><div class="animation-chase-dot"></div><div class="animation-chase-dot"></div><div class="animation-chase-dot"></div><div class="animation-chase-dot"></div></div>';
            } else if (animation == 3) {
                style = '<div class="animation-bounce"><div class="animation-bounce-dot"></div><div class="animation-bounce-dot"></div></div>';
            } else if (animation == 4) {
                style = '<div class="animation-wave"><div class="animation-wave-rect"></div><div class="animation-wave-rect"></div><div class="animation-wave-rect"></div><div class="animation-wave-rect"></div><div class="animation-wave-rect"></div></div>';
            } else if (animation == 5) {
                style = '<div class="animation-pulse"></div>';
            } else if (animation == 6) {
                style = '<div class="animation-flow"><div class="animation-flow-dot"></div><div class="animation-flow-dot"></div><div class="animation-flow-dot"></div></div>';
            } else if (animation == 7) {
                style = '<div class="animation-swing"><div class="animation-swing-dot"></div><div class="animation-swing-dot"></div></div>';
            } else if (animation == 8) {
                style = '<div class="animation-circle"><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div><div class="animation-circle-dot"></div></div>';
            } else if (animation == 9) {
                style = '<div class="animation-circle-fade"><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div><div class="animation-circle-fade-dot"></div></div>';
            } else if (animation == 10) {
                style = '<div class="animation-grid"><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div><div class="animation-grid-cube"></div></div>';
            } else if (animation == 11) {
                style = '<div class="animation-fold"><div class="animation-fold-cube"></div><div class="animation-fold-cube"></div><div class="animation-fold-cube"></div><div class="animation-fold-cube"></div></div>';
            } else if (animation == 12) {
                style = '<div class="animation-wander"><div class="animation-wander-cube"></div><div class="animation-wander-cube"></div><div class="animation-wander-cube"></div></div>';
            }
            style += "<h2>"+document.querySelector(".redirect").getAttribute("message")+"</h2>";
            document.querySelector(".redirect").innerHTML += style;
        }
    }
}

function redirectTo(page) {
    window.location.href = page;
}

function loadCounters() {
    if (document.querySelector(".counter") != null) {
        let to = document.querySelector(".counter").getAttribute("to");
        let from = document.querySelector(".counter").getAttribute("from");
        let change = document.querySelector(".counter").getAttribute("change");
        let time = document.querySelector(".counter").getAttribute("time");
        let prefix = document.querySelector(".counter").getAttribute("prefix");
        let suffix = document.querySelector(".counter").getAttribute("suffix");
        document.querySelector(".counter").innerHTML = "<h2>" + prefix + "<span class='number'></span>"+ suffix + "</h2>"
        
        if (parseInt(to) > parseInt(from)) {
            let finalTime = time / (to - from);
            changeNumber(".counter", finalTime, from, to, "inc", change)
        } else {
            let finalTime = time / (from - to);
            changeNumber(".counter", finalTime, from, to, "dec", change)
        }
    }
}

function changeNumber(element, wait, currentNumber, stopNumber, operation, change) {
    if (operation == "inc") {
        if (parseInt(currentNumber) < parseInt(stopNumber)) {
            currentNumber = parseInt(currentNumber) + parseInt(change);
            document.querySelector(element+" .number").innerHTML = currentNumber;
            setTimeout(changeNumber, wait, element, wait, currentNumber, stopNumber, operation, change)
        } else {
            document.querySelector(element+" .number").innerHTML = stopNumber;
        }
    } else if (operation == "dec") {
        if (parseInt(currentNumber) > parseInt(stopNumber)) {
            currentNumber = parseInt(currentNumber) - parseInt(change);
            document.querySelector(element+" .number").innerHTML = currentNumber;
            setTimeout(changeNumber, wait, element, wait, currentNumber, stopNumber, operation, change)
        } else {
            document.querySelector(element+" .number").innerHTML = stopNumber;
        }
    }
}