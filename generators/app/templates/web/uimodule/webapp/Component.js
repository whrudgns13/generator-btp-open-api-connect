sap.ui.define(
    ["sap/ui/core/UIComponent", "sap/ui/Device", "<%=ui5Namespace.split(".").join("/")%>/<%=ui5ProjectName%>/model/models"],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("<%=ui5Namespace%>.<%=ui5ProjectName%>.Component", {
            metadata: {
                manifest: "json",
            },
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();
                this.setModel(models.createDeviceModel(), "device");
            },
        });
    }
);
