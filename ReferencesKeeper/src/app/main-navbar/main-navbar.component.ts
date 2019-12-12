import { Component, OnInit } from '@angular/core';
import { APP_ROUTING_ENUM } from '../app-routing.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  navGroup: Object[];

  constructor(private router: Router) {
    this.navGroup = [
      { section: "Articles", route: APP_ROUTING_ENUM.ARTICLES },
      { section: "Video", route: APP_ROUTING_ENUM.VIDEO },
      { section: "Pictures", route: APP_ROUTING_ENUM.PICTURES },
      { section: "Audio", route: APP_ROUTING_ENUM.AUDIO }
    ];
  }

  ngOnInit() {
    this.router.navigate(['video']);
  }
  
}
