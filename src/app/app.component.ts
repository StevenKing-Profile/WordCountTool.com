import { Component, OnInit } from '@angular/core';
import { MetaService } from 'ng2-meta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Word Count Tool";
  metaService: any;

  constructor(private router: Router, private _metaService: MetaService) { }

  ngOnInit() { }
}
