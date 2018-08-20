'use strict';

class CreateNewDevice {
    constructor (devicesStore) {
	   this._devicesStore = devicesStore;
    }
    addNewDevice (type, name, device) {
    	switch (Number(type)) {
            case 0:
                this._devicesStore.lamps.push(new Lamp(type, name));
                break;
            case 1:
                this._devicesStore.heaters.push(new Heater(type, name));
                break;
    		case 2:
                this._devicesStore.fridges.push(new Fridge(type, name));
                break;
    		case 3:
                this._devicesStore.tvdevices.push(new TvDevice(type, name));
                break;
        }
    }
    removeDevice (i, j) {
	   this._devicesStore[i].splice(j, 1);
    }
};