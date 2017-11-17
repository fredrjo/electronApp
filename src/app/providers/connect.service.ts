import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ConnectService{
    http:any;
    response : any;
    baseUrl : String="https://www.energinet.net/";
    enetLang : String = "en_gb";

    constructor(http:Http){
        this.http = http;
    }

    login (authString) {
        return this.http.get(this.baseUrl+'/api/accessToken',
            { headers: { "Authorization": 'Basic '+authString, "Content-Type": "application/json"} }
            ).toPromise().then(res => res.json())
            .catch(function(err){
                return err.status;
            });
    }

    getHeaders(token) {
        let auth = 'Bearer '+token;
        let headers={ "Authorization": auth, "Content-Type": "application/json", "Accept-Language" : this.enetLang, "Accept-Version" : "2"};
        return headers;
    }

    getResource(resource){
      let token ="";

            return this.http.get(this.baseUrl+resource+'/',
                { headers: this.getHeaders(token) }
                ).toPromise().then(res => res.json()
                ) .catch(function(err){
                    return err;
            });
    
    }

    getFile(filename){
        return this.http.get(this.baseUrl+filename,
            { headers: this.getHeaders('') }
            ).toPromise().then(res => res.json())
            .catch (function (err) {
                    return err;
                })
            ;
    }

    putResource(link, payload) {
      let token ="";

            return this.http.put(this.baseUrl+link, payload,
                { headers: this.getHeaders(token) }
                ).toPromise().then(res=> res.json())
                .catch (function (err) {
                    return err;
                })
    }

    postResource(link, payload) {
      let token ="";

            return this.http.post(this.baseUrl+link, payload,
                { headers: this.getHeaders(token) }
                ).toPromise().then(res=> {
                    return res.json();
                }).catch (function (err) {
                    return err;
                })
          
     }

     deleteResource(resource) {
       let token ="";
        
            return this.http.delete(this.baseUrl+resource+'/',
                { headers: this.getHeaders(token) }
                ).toPromise().then(res => res.json())
                .catch (function (err) {
                    return err;
                });

    }
}
