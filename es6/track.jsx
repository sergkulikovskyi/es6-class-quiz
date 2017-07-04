'use strict';
//require('./taobject.jsx');
import TaObject from './taobject.jsx';

export default class Track extends TaObject {
  constructor(id, ...args) {
    super(id, args);
    this.id = id;
    console.log(args);
    console.log('new Track instantiated!');
  }

  deconstructEl(...args) {

  }

  getFromServer() {
    console.log('getFromServer called in Track');
  }

  delete() {
		console.log('delete called in Track');
	}


}
