import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service: TestService) { }

  ngOnInit() {
    this.service.subject.subscribe(
      result => {
        console.log(result);
      }
    );
  }

  On() {
    this.service.triggerON();
  }
  
  Off() {
    this.service.triggerOFF();
  }
}
