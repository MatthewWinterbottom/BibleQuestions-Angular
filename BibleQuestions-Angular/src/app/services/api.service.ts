import { Injectable } from '@angular/core';  
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({  
	providedIn: 'root'  
})  
export class ApiService {

	private SERVER_URL = "http://localhost:3000/products";
	constructor(private httpClient: HttpClient) { }

	handleError(error: HttpErrorResponse) {
		let errorMessage: string = "Uknown error!";

		if(error.error instanceof ErrorEvent) {
			// Client side errors
			errorMessage = `Error: ${error.error.message}`;
		} else {
			// Server-side errors
			errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
		}

		window.alert(errorMessage);
		return throwError(errorMessage);
	}

	public sendGetRequest(){
		return this.httpClient.get(this.SERVER_URL);  
	}

	public post(uri: string, object: Object) {
		var response = this.httpClient.post(environment.baseApiUrl + uri, object);
		console.log(response);
		return response;
	}
}