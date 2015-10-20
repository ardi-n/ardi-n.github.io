(function() {console.log("gapi", gapi);
    gapi.load("auth2", function() {
        var gauth = gapi.auth2.init({
            client_id: "129154954257-du73uhf205pfm0vqu0mmjnpuv0gpp9gi.apps.googleusercontent.com"
        });
    });
    
    gapi.signin2.render("g-signin2", {
        app_package_name: "com.div.minicarracing",
        onsuccess: function(arg) {
            console.log("success", arg);
        },
        onfailure: function(arg) {
            console.log("failure", arg);
        }
    });
})();