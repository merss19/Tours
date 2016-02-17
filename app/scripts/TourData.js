'use strict';


export class TourData {
    constructor(data) {
    this.params = data;
    };

    getProperty(name){
        if(this.params[name]){
            return this.params[name];
        }
    };
};

