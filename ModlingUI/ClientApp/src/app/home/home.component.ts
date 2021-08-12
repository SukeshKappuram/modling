import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]

    });

  }

}
