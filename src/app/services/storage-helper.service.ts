import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageHelperService {

  constructor() { }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    let data = localStorage.getItem(key);
    if (data && data.length) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

}
