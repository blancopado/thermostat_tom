function Thermostat() {
	this.temp = 20;
	this.minTemp = 10; 
	this.powerSaving = true;
	this.psMaxTemp = 25;
	this.maxTemp = 32;
	this.midTemp = 18;
}

Thermostat.prototype.energyConsumption = function() {
	if (this.temp <= this.midTemp) {return "Low energy consumption"};
	if (this.temp > this.midTemp && this.temp < this.psMaxTemp) {return "Medium energy consumption"};
	return "High energy consumption";
};

Thermostat.prototype.temperature = function() {
	return this.temp;
}; 

Thermostat.prototype.up = function() {
	if (this.powerSaving) {
			if (this.temp >= this.psMaxTemp) { throw 'In power saving mode. Max temperature reached'};
	};
	if (!this.powerSaving) {
		if (this.temp >= this.maxTemp) { throw 'Maximum temperature reached'};
	};
	this.temp += 1;
	this.energyConsumption();
};

Thermostat.prototype.down = function() {
	if (this.temp <= this.minTemp) { throw 'Min temperature reached'};
	this.temp -= 1;
	this.energyConsumption();
};

Thermostat.prototype.powerSavingModeOn = function() {
	return this.powerSaving = true;
};

Thermostat.prototype.powerSavingModeOff = function() {
	return this.powerSaving = false;
};

Thermostat.prototype.resetButton = function() {
	return this.temp = 20;
	this.energyConsumption();
};







