import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '7af56913e5c07fc093b1';
  private clientsecret = '64027288c486d5a854bfea00f0158837c6d75687';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'FeisalAhmed';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id' + this.clientid +
    '&client_secret=' + this.clientsecret);
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id' + this.clientid +
    '&client_secret=' + this.clientsecret);
  }

  updateProfile(username: string) {
   this.username = username;
  }
}
