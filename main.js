(function() {console.log("gapi", gapi);
    gapi.load("auth2", function() {
        var gauth = gapi.auth2.init({
            client_id: "1093122655002-828ocjanrksi7q0759nus272qc3mumcr.apps.googleusercontent.com"
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