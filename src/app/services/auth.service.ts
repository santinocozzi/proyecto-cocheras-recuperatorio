import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  login(datosLogin:Login){
    return fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(datosLogin),
    })
    .then(res => { 
      return res.json().then(resJson =>{
      if(resJson.status === "ok"){
        //Login correcto
        localStorage.setItem("token", resJson.token);
        return true;
      }else{
        return false;
      }
    })
  })
  }

  getToken():string | null {
    return localStorage.getItem("token") ?? "";
  }

  estaLogueado():boolean {
    if (this.getToken()){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("token");
  }

}