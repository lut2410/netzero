import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-chart-item',
  templateUrl: './app-mini-chart-item.component.html',
  styleUrls: ['./app-mini-chart-item.component.css']
})
export class AppMiniChartItemComponent implements OnInit {
  @Input() link: string;
  @Input() title: string;
  @Input() count: number;
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

}
