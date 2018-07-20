import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowWhen } from '../../../node_modules/ionic-angular/umd';

let config_key_name="config";

@Injectable()
export class ConfigProvider{

  private config = {
      showSlide: false,
      name: "",
      username: ""
  }

  constructor() {
  }

  //Recupera os dados do LocalStore
  getConfigData(): any{
    return localStorage.getItem(config_key_name) ;
  }

  //Grava os dados no LocalStore
  setConfigData(showSlide?: boolean, name?:string,username?:string){

    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if (showSlide) { 
      config.showSlide = showSlide;      
     }   
     if (name) { 
      config.name = name;      
     }  
     if (username) { 
      config.username = username;      
     }  
     localStorage.setItem(config_key_name,JSON.stringify(config));
  } 
}
