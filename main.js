(function() {
    console.log("EJSTEM");
    gapi.signin2.render("g-signin", {
        client_id: "1093122655002-s8qee1hvia7jg14di3radf8jcj3q2g9c.apps.googleusercontent.com",
        app_package_name: "com.div.minicarracing",
        onsuccess: function(arg) {
            console.log("success", arg);
        },
        onfailure: function(arg) {
            console.log("failure", arg);
        }
    });
})();