import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from './json.service';

declare var $: any;
declare var require: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular';
  public jsonData: any;

  ngAfterViewInit() {
    $('#myCarousel').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = totalItems - idx * itemsPerSlide;
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == 'left') {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          } else {
            $('.carousel-item').eq(0).appendTo($(this).find('.carousel-inner'));
          }
        }
      }
    });
  }
  profiles: any = [];

  constructor(private jsonService: JsonService, private router: Router) {}
  ngOnInit() {
    this.jsonService.getData().subscribe((data: any): void => {
      console.info(data);
      this.jsonData = data;
    });
  }

  onImgClicked() {
    this.router.navigate(['/detail']);
  }
  b;
}
