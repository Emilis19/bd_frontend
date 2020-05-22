import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Event } from '../event';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  constructor(public crudService: CrudService) { }
  ngOnInit() {

    this.crudService.getAll().subscribe((data: Event[]) => {
      console.log();
      this.events = data;
    });
  }
  delete(id){
    this.crudService.delete(id).subscribe(() => {
      this.crudService.getAll().subscribe((data: Event[]) => {
        this.events = data;
      });
      alert("Sėkmingai ištrinta");
    });
  }

}
