import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
import { Event } from '../event';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Place } from '../place';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  eventForm: FormGroup;
  id: number;
  event: Event;
  places: Place[];
  loading = true;
  constructor(private route: ActivatedRoute, private ps: CrudService, private fb: FormBuilder) { }

  createForm(event) {
    this.eventForm = this.fb.group({
      textas: [event.text, Validators.required ],
      startDate: [event.startDate, Validators.required ],
      endDate: [event.endDate, Validators.required ],
      placeId: [event.placeId]
    });
  }

  ngOnInit(): void {
    this.ps.getPlaces().subscribe(data => {
      console.log(data);
      this.places = data;
    });
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.ps.getById(this.id).subscribe(data => {
      this.event = data;
      console.log(data);
      this.createForm(data);
      this.loading = false;
    });

  }

  onSubmit(){
    if (this.eventForm.valid) {
      this.ps.update(this.id, {
        id: Number(this.event.id),
        text: this.eventForm.value.textas,
        startDate: this.eventForm.value.startDate,
        endDate: this.eventForm.value.endDate,
        placeId: Number(this.eventForm.value.placeId)
      }).subscribe(() => {
        alert("Įrašas atnaujintas");
      });
   }
    console.log(this.eventForm.value);
  }

}
