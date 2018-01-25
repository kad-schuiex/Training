jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"nl/kadaster/peopleprofile/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"nl/kadaster/peopleprofile/test/integration/pages/Worklist",
		"nl/kadaster/peopleprofile/test/integration/pages/Object",
		"nl/kadaster/peopleprofile/test/integration/pages/NotFound",
		"nl/kadaster/peopleprofile/test/integration/pages/Browser",
		"nl/kadaster/peopleprofile/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "nl.kadaster.peopleprofile.view."
	});

	sap.ui.require([
		"nl/kadaster/peopleprofile/test/integration/WorklistJourney",
		"nl/kadaster/peopleprofile/test/integration/ObjectJourney",
		"nl/kadaster/peopleprofile/test/integration/NavigationJourney",
		"nl/kadaster/peopleprofile/test/integration/NotFoundJourney",
		"nl/kadaster/peopleprofile/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});