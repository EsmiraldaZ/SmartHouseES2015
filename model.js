'use strict';


// Basic Device code begins


class Device {
	constructor (type, name) {
		this._type = type;
		this._name = name;
		this._state = false;
		this._basicFeature;
		this._maxFeatureValue;
		this._minFeatureValue;
		this._userFeatureValue;
	}
	on () {
		this._state = true;
	}
	off () {
		this._state = false;
	}
	set basicFeature(someValue) {
		this._basicFeature = someValue;
	}
	get basicFeature() {
		return this._basicFeature;
	}
	set maxFeatureValue(someValue) {
		this._maxFeatureValue = someValue;
	}
	set minFeatureValue(someValue) {
		this._minFeatureValue = someValue;
	}
	set userFeatureValue(someValue) {
		this._userFeatureValue = someValue;
	}
	increase () {
		if (this._basicFeature < this._maxFeatureValue) {
			this._basicFeature = this._basicFeature + 1;
		}
	}
	decrease () {
		if (this._basicFeature > this._minFeatureValue) {
			this._basicFeature = this._basicFeature - 1;
		}
	}
	setMax () {
		this._basicFeature = this._maxFeatureValue;
	}
	setMin () {
		this._basicFeature = this._minFeatureValue;
	}
	setValue () {
		if (this._userFeatureValue >= this._minFeatureValue && this._userFeatureValue <= this._maxFeatureValue) {
			this._basicFeature = this._userFeatureValue;
		} else {
			this._basicFeature = this._basicFeature;
		}
	}
};


// Temperature unit code begins


class TemperatureUnit extends Device { 
	constructor (type, name) {
		super(type, name);
		this._minTemperature;
		this._maxTemperature;
		this._temperature; 
	}
	temperatureIncrease () {
		super.basicFeature = this._temperature;
		super.maxFeatureValue = this._maxTemperature;
		super.increase();
		this._temperature = super.basicFeature;
	}
	temperatureDecrease () {
		super.basicFeature = this._temperature;
		super.minFeatureValue = this._minTemperature;
		super.decrease();
		this._temperature = super.basicFeature;
	}
	temperatureSetMax () {
		super.basicFeature = this._temperature;
		super.maxFeatureValue = this._maxTemperature;
		super.setMax();
		this._temperature = super.basicFeature;
	}
	temperatureSetMin () {
		super.basicFeature = this._temperature;
		super.minFeatureValue = this._minTemperature;
		super.setMin();
		this._temperature = super.basicFeature;
	}
	temperatureSetValue (temperatureValue) {
		super.basicFeature = this._temperature;
		super.minFeatureValue = this._minTemperature;
		super.maxFeatureValue = this._maxTemperature;
		super.userFeatureValue = Number(temperatureValue);
		super.setValue();
		this._temperature = super.basicFeature;
	}
};


// Fridge code begins


class Fridge extends TemperatureUnit {
	constructor (type, name) {
		super(type, name);
		this._minTemperature = -7;
		this._maxTemperature = 7;
		this._temperature = 0;
	}
};


// Heater code begins


class Heater extends TemperatureUnit {
	constructor (type, name) {
		super(type, name);
		this._minTemperature = 0;
		this._maxTemperature = 80;
		this._temperature = 40;
		this._heaterPower = 100;
	}
	fullPower () {
		this._heaterPower = 100;
	}
	halfPower () {
		this._heaterPower = 50;
	}
};


// Lamp code begins


class Lamp extends Device {
	constructor (type, name) {
		super(type, name);
		this._minLight = 0;
		this._maxLight = 100;
		this._light = 50;
	}
	lightIncrease () {
		super.basicFeature = this._light;
		super.maxFeatureValue = this._maxLight;
		super.increase();
		this._light = super.basicFeature;
	}
	lightDecrease () {
		super.basicFeature = this._light;
		super.minFeatureValue = this._minLight;
		super.decrease();
		this._light = super.basicFeature;
	}
	lightSetMax () {
		super.basicFeature = this._light;
		super.maxFeatureValue = this._maxLight;
		super.setMax();
		this._light = super.basicFeature;
	}
	lightSetMin () {
		super.basicFeature = this._light;
		super.minFeatureValue = this._minLight;
		super.setMin();
		this._light = super.basicFeature;
	}
	lightSetValue (lightValue) {
		super.basicFeature = this._light;
		super.minFeatureValue = this._minLight;
		super.maxFeatureValue = this._maxLight;
		super.userFeatureValue = Number(lightValue);
		super.setValue();
		this._light = super.basicFeature;
	}
};


// TV-set code begins


class TvDevice extends Device {
	constructor (type, name) {
		super(type, name);
		this._volume = 25;
		this._minVolume = 0;
		this._maxVolume = 100;
		this._channel = 1;
		this._minChannel = 1;
		this._maxChannel = 95;
	}
	volumeIncrease () {
		super.basicFeature = this._volume;
		super.maxFeatureValue = this._maxVolume;
		super.increase();
		this._volume = super.basicFeature;
	}
	volumeDecrease () {
		super.basicFeature = this._volume;
		super.minFeatureValue = this._minVolume;
		super.decrease();
		this._volume = super.basicFeature;
	}
	volumeSetMax () {
		super.basicFeature = this._volume;
		super.maxFeatureValue = this._maxVolume;
		super.setMax();
		this._volume = super.basicFeature;
	}
	volumeSetMin () {
		super.basicFeature = this._volume;
		super.minFeatureValue = this._minVolume;
		super.setMin();
		this._volume = super.basicFeature;
	}
	volumeSetValue (volumeValue) {
		super.basicFeature = this._volume;
		super.minFeatureValue = this._minVolume;
		super.maxFeatureValue = this._maxVolume;
		super.userFeatureValue = Number(volumeValue);
		super.setValue();
		this._volume = super.basicFeature;
	}
	nextChannel () {
		super.basicFeature = this._channel;
		super.maxFeatureValue = this._maxChannel;
		super.increase();
		this._channel = super.basicFeature;
	}
	prevChannel () {
		super.basicFeature = this._channel;
		super.minFeatureValue = this._minChannel;
		super.decrease();
		this._channel = super.basicFeature;
	}
	lastChannel () {
		super.basicFeature = this._channel;
		super.maxFeatureValue = this._maxChannel;
		super.setMax();
		this._channel = super.basicFeature;
	}
	firstChannel () {
		super.basicFeature = this._channel;
		super.minFeatureValue = this._minChannel;
		super.setMin();
		this._channel = super.basicFeature;
	}
	setChannel (channel) {
		super.basicFeature = this._channel;
		super.minFeatureValue = this._minChannel;
		super.maxFeatureValue = this._maxChannel;
		super.userFeatureValue = Number(channel);
		super.setValue();
		this._channel = super.basicFeature;
	}
};
