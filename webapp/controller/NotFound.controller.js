sap.ui.define([
		"nl/kadaster/peopleprofile/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("nl.kadaster.peopleprofile.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);