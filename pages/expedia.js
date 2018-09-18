var homePageCommands = {
	clickOnDate: function() {
		this.api.pause(1000);
		return this;
		var buttons = this.api.browser.element('@dateDropdown').elements('button');
		return buttons.every(function(date) {
			//Ideally this would be controlled by a function that would dynamically select the date based on the date time
			if (
				date.getAttribute('data-month') === '11' &&
				date.getAttribute('data-day') === '20'
			) {
				return date.click();
			} else {
				console.log('No attributes with the passed in values found');
				return this;
			}
		});
	},
	clickFirstFlight: function() {
		var first = this.api.browser.elements(
			'css selector',
			'div[class=grid-container standard-padding]'
		);
		first[0].click('button[type=button]');
		this.api.pause(2000);
		first[0].click('button[type=button]');
		return this.api.pause(1000).click('href[id=forcedChoiceNoThanks]');
	},
	addLocations: function() {
		this.api.pause(1000);
		this.api.waitForElementVisible('@flight', 5000);
		this.api.click('@flight');
		this.api.pause(2000);
		this.api.waitForElementVisible('@origin', 2000);
		this.api.setValue('@origin', 'Salt Lake City');
		this.api.setValue('@destination', 'Rome');
		this.api.pause(2000);
		this.api.setValue('@departing', '12/11/2018');
		return this.api.click('@returning');
	},
	verifyFlightPicker: function() {
		this.api.pause(2000);
		this.api.waitForElementVisible('@success');
		return this.api.browser.assert.valueContains('@success', 'Nice Job!');
	}
};

module.exports = {
	url: function() {
		return this.api.launchUrl;
	},
	elements: {
		dateDropdown: 'div[class=datepicker-dropdown]',
		flight: 'button[data-lob=flight]',
		origin: 'input[id=flight-origin-hp-flight]',
		destination: 'input[id=flight-destination-hp-flight]',
		departing: 'input[id=flight-departing-hp-flight]',
		returning: 'input[id=flight-returning-hp-flight]',
		search: 'button[type=submit]',
		success: 'div[class=alert alert-success superlativeAlert bestvalueAlert]'
	},
	commands: [homePageCommands]
};
