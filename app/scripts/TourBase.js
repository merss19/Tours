'use strict';

export default class TourBase {

    constructor(data) {
        this._data = data;
    };

    render(){

    };

    remove() {};

    get datas () {
        return this._data;
    };

    set datas (data) {
        this._data = data;
    };
};
