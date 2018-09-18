this.getPricesForFlights = function(browser) {
	var expedia = browser.page.expedia();
	expedia
		.navigate()
		.addLocations()
		.clickOnDate()
		.pause(1000)
		.click('button[type=submit]')
		.pause(2000)
		.clickFirstFlight()
		.verifyFlightPicker();
	browser.end();
};
