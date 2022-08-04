sap.ui.define(
    ["./BaseController"],    
    function (Controller) {
        "use strict";

        return Controller.extend("<%=ui5Namespace%>.<%=ui5ProjectName%>.controller.MainView", {
            onInit: function () {
                const _self = this;
                const oView = this.getView();
                jQuery.ajax({
                    url : "/app/getUsers",
                    type : "GET",
                    success : function(data){
                        const oUserData =  JSON.parse(data);
                        const oUserModel = new sap.ui.model.json.JSONModel(oUserData);
                        oView.setModel(oUserModel,"users");
                    },
                    error : function(error){
                        console.log(error);
                    }
                });

                jQuery.ajax({
                    url : "/app/getUser",
                    type : "GET",
                    success : function(data){
                        const oUserData =  JSON.parse(data);
                        const oUserModel = new sap.ui.model.json.JSONModel(oUserData);
                        oView.setModel(oUserModel,"currentUser");
                    },
                    error : function(error){
                        console.log(error);
                    }
                });
            },
        });
    }
);
