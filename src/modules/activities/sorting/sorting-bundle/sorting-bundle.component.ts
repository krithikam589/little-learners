import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-bundle',
  templateUrl: './sorting-bundle.component.html',
  styleUrls: ['./sorting-bundle.component.scss']
})
export class SortingBundleComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
