import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  constructor(private _service:CommonserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: any){
    this._service.postdata(contactForm).subscribe();
  }

}
