import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('inside details....!!');
  }

  clickedYes() {
    alert('Interested');
  }

  clickedNo() {
    alert('Not Interested');
  }

  clickedShortlist() {
    alert('Profile Shortisted');
  }
}
