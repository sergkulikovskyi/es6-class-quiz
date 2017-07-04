'use strict';
//require('./taobject.jsx');
import TaObject from './taobject.jsx';

export default class Playlist extends TaObject {
  constructor(id, ...args) {
    super();
    this.id = id;
    console.log('new Playlist instantiated!');
  }

  rate(){

  }

  copyTo(gid) {

  }

  hide() {

  }

  publish() {

  }

}
