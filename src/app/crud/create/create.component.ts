import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Event } from '../event';
import { Place } from '../place';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  eventForm: FormGroup;
  places: Place[];
  eventas: Event;
  constructor(private fb: FormBuilder, private ps: CrudService) {  this.createForm(); }
  ngOnInit(): void {
    this.ps.getPlaces().subscribe(data => {
      console.log(data);
      this.places = data;
    });
  }
  createForm() {
    this.eventForm = this.fb.group({
      textas: ['', Validators.required ],
      startDate: ['', Validators.required ],
      endDate: ['', Validators.required ],
      placeId: ['']
    });
  }

  onSubmit(){
    // this.eventas = this.eventForm.value;
    // this.ps.create(this.eventas).subscribe(() =>{
    //   alert("Įrašas sukurtas");
    // });
    if (this.eventForm.valid) {
      this.ps.create({
        id: 0,
        text: this.eventForm.value.textas,
        startDate: this.eventForm.value.startDate,
        endDate: this.eventForm.value.endDate,
        placeId: Number(this.eventForm.value.placeId)
      }).subscribe(() => {
        alert('Įrašas sukurtas');
      });
   }
    console.log(this.eventForm.value);
  }

  // postas(){
  //       if (this.eventForm.valid) {
  //     this.ps.create({
  //       id: 0,
  //       text: this.eventForm.value.textas,
  //       startDate: this.eventForm.value.startDate,
  //       endDate: this.eventForm.value.endDate,
  //       placeId: Number(this.eventForm.value.placeId)
  //     });
  //  }
  //   console.log(this.eventForm.value);
  // }

  // addEvent(eventForm) {
  //   this.ps.create(eventForm);
  // }

}
