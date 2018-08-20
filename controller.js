'use strict';

class ControllerSM {

	constructor (devicesStore) {
	this._devicesStore = devicesStore;
	this._createButton = document.getElementById("create");
	this._lampColumn = document.getElementById("lamp");
	this._heaterColumn = document.getElementById("heater");
	this._frigerColumn = document.getElementById("friger");
	this._tvColumn = document.getElementById("tv");
	this._newDevice = new CreateNewDevice(this._devicesStore);
	}

	addNewDevice () {
		this._createButton.onclick = () => {
			let deviceName = document.getElementById("device-sel-name").value;
			let deviceType = document.getElementById("device-sel-type").value;
			if (deviceName.length > 0) {
				this._newDevice.addNewDevice(deviceType, deviceName);
				init.renderDevice();
			}
		}	
	}

	renderDevice () {
		this._lampColumn.innerHTML = null;
		this._heaterColumn.innerHTML = null;
		this._frigerColumn.innerHTML = null;
		this._tvColumn.innerHTML = null;
		for (let key in this._devicesStore) {
			for (let j = 0; j < this._devicesStore[key].length; j++) {
				switch (key) {
			        case "lamps":
			        	this._lampColumn.appendChild(renderLamp(this._devicesStore, key, j));
			            break;
			        case "heaters":
			            this._heaterColumn.appendChild(renderHeater(this._devicesStore, key, j));
			            break;
					case "fridges":
			            this._frigerColumn.appendChild(renderFridge(this._devicesStore, key, j));
			            break;          
					case "tvdevices":
			            this._tvColumn.appendChild(renderTv(this._devicesStore, key, j));
			            break;
			    }
			}
		}
	}

	manageEvents () {
		let wrapper = document.getElementById("column-wrapper");
		wrapper.onclick = (event) => {
			let evnt = event || window.event;
			let i = evnt.target.closest('.control').getAttribute('data-type');
			let j = evnt.target.closest('.control').getAttribute('data-index');
			switch(evnt.target.className) {
		        
				// On-off controllers

		        case 'on-btn':
		        	this._devicesStore[i][j].on();
		        	init.renderDevice();
					break;
				case 'off-btn':
		        	this._devicesStore[i][j].off();
					init.renderDevice();
					break;

				// Lamp controllers

				case 'min-light-btn':
		        	this._devicesStore[i][j].lightSetMin();
					init.renderDevice();
					break;				
				case 'decrease-light-btn':
		        	if (this._devicesStore[i][j]._light > this._devicesStore[i][j]._minLight) {
		        		this._devicesStore[i][j].lightDecrease();
		        	} 
					init.renderDevice();
					break;
				case 'increase-light-btn':
		        	if (this._devicesStore[i][j]._light < this._devicesStore[i][j]._maxLight) {
		        		this._devicesStore[i][j].lightIncrease();
		        	} 
					init.renderDevice();
					break;				
				case 'max-light-btn':
		        	this._devicesStore[i][j].lightSetMax();
					init.renderDevice();
					break;
				case 'set-light-btn':
					let light = document.getElementsByName('brightness' + j)[0].value;
					this._devicesStore[i][j].lightSetValue(light);
					init.renderDevice();
					break;								
				
				// Fridge and heater controllers

				case 'min-tempr-btn':
					this._devicesStore[i][j].temperatureSetMin();
			        init.renderDevice();
					break;				
				case 'decrease-tempr-btn':
					if (this._devicesStore[i][j]._temperature > this._devicesStore[i][j]._minTemperature) {
			       		this._devicesStore[i][j].temperatureDecrease();	        		
		        	} 
			    	init.renderDevice();
					break;
				case 'increase-tempr-btn':
					if (this._devicesStore[i][j]._temperature < this._devicesStore[i][j]._maxTemperature) {
			       		this._devicesStore[i][j].temperatureIncrease();	        		
		        	} 
			    	init.renderDevice();
					break;
				case 'max-tempr-btn':
		        	this._devicesStore[i][j].temperatureSetMax();
			        init.renderDevice();
					break;	
				case 'set-tempr-btn':
					if (i === "heaters") {
			        	let heaterTempr = document.getElementsByName('heaterTemperature' + j)[0].value;
						this._devicesStore[i][j].temperatureSetValue(heaterTempr);
					} else {
			        	if (i === "fridges") {
			        		let fridgeTempr = document.getElementsByName('fridgeTemperature' + j)[0].value;
							this._devicesStore[i][j].temperatureSetValue(fridgeTempr);
			        	}
			        }	        	
					init.renderDevice();
					break;	
				case 'half-power':
					this._devicesStore[i][j].halfPower();
					init.renderDevice();
					break;
				case 'full-power':
					this._devicesStore[i][j].fullPower();
					init.renderDevice();
					break;

				// Tv controllers, channels

				case 'min-channel-btn':
		        	this._devicesStore[i][j].firstChannel();
					init.renderDevice();
					break;				
				case 'decrease-channel-btn':
		        	if (this._devicesStore[i][j]._channel > this._devicesStore[i][j]._minChannel) {
		        		this._devicesStore[i][j].prevChannel();
		        	} 
					init.renderDevice();
					break;
				case 'increase-channel-btn':
		        	if (this._devicesStore[i][j]._channel < this._devicesStore[i][j]._maxChannel) {
		        		this._devicesStore[i][j].nextChannel();
		        	} 
					init.renderDevice();
					break;				
				case 'max-channel-btn':
		        	this._devicesStore[i][j].lastChannel();
					init.renderDevice();
					break;
				case 'set-channel-btn':
					let channel = document.getElementsByName('channel' + j)[0].value;
					this._devicesStore[i][j].setChannel(channel);
					init.renderDevice();
					break;					

				// Tv controllers, volume

				case 'min-volume-btn':
		        	this._devicesStore[i][j].volumeSetMin();
					init.renderDevice();
					break;				
				case 'decrease-volume-btn':
		        	if (this._devicesStore[i][j]._volume > this._devicesStore[i][j]._minVolume) {
		        		this._devicesStore[i][j].volumeDecrease();
		        	} 
					init.renderDevice();
					break;
				case 'increase-volume-btn':
		        	if (this._devicesStore[i][j]._volume < this._devicesStore[i][j]._maxVolume) {
		        		this._devicesStore[i][j].volumeIncrease();
		        	} 
					init.renderDevice();
					break;				
				case 'max-volume-btn':
		           	this._devicesStore[i][j].volumeSetMax();
					init.renderDevice();
					break;
				case 'set-volume-btn':
					let volume = document.getElementsByName('volume' + j)[0].value;
					this._devicesStore[i][j].volumeSetValue(volume);
					init.renderDevice();
					break;					

				// Remove device

				case 'remove-device':
		        	this._newDevice.removeDevice(i, j);
					init.renderDevice();
					break;		
			}
		}
	}
};