import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public navigation: any[];
  constructor() { }

  @Input()
  get nav() {return this.navigation}
  set nav(nav: any[]) {this.navigation = nav}
  
  ngOnInit() {
  }

}
