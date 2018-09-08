import { Injectable } from "../../node_modules/@angular/core";
import { Http, Headers, Response } from "../../node_modules/@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://udemy-ng-http-63e45.firebaseio.com/data.json', 
        //     servers, 
        //     {headers: headers});
        return this.http.put('https://udemy-ng-http-63e45.firebaseio.com/data.json', 
            servers, 
            {headers: headers});
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-63e45.firebaseio.com/data')
            .map(
                (response: Response) => {
                    const data = response.json();
                    // for (const server of data) {
                    //     server.name = 'FETCHED_' + server.name;
                    // }
                    return data;
                }
            )
            .catch(
                (err: Response) => {
                    console.log(err);
                    return Observable.throw('Something went wrong!');
                }
            );
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-63e45.firebaseio.com/appName.json')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }
}