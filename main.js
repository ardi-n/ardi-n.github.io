(function() {
    gapi.signin2.render("g-signin", {
        app_package_name: "com.div.minicarracing",
        onsuccess: function(arg) {
            console.log("success", arg);
        },
        onfailure: function(arg) {
            console.log("failure", arg);
        }
    });
})();