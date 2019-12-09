import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '14b63f8bc6bbf2011cda';
  private clientsecret = '72fefabcf4555e3098374ac69dc55af6f780aad9';

  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'FeisalAhmed';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id' + this.clientid +
    '&client_secret=' + this.clientsecret);
  }
}
