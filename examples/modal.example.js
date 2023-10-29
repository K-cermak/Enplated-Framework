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