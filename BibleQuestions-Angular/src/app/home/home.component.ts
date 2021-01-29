import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({  
	selector: 'app-home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.css']  
})  
export class HomeComponent implements OnInit {
	
	products: any[];
	counter: number = 0;

	AddToCounter() {
		this.counter = this.counter + 1;
	}

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.sendGetRequest().subscribe((data: any[])=>{  
			this.products = data;
			sessionStorage
		})
	}
}