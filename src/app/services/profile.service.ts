import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '51dc1d39ea92f4c39688';
  private clientsecret = 'c70338c0c1ef203ee34f42edb82fc6f2390eca67';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'FeisalAhmed';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id' + this.clientid +
    '&client_secret=' + this.clientsecret);
  }
}
