import { Component } from '@angular/core';
import { TableData } from './table.format';
import { TableService } from './data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TableService]
})
export class AppComponent implements OnInit{
  ngOnInit(): void{
    this.getData();
	//console.log(this.data);
  }
  constructor(private tableService: TableService) { }
  data: TableData[];
  
  getData(): void {
    this.tableService.getData().then(data=> this.data = data );
	//console.log(this.data);
    //this.heroes = this.heroService.getHeroes();
  }
}
