import { Component, OnInit, ViewChild } from '@angular/core';
import { UnivercityService } from "../../services/univercity.service";
import {Univercity} from "../../models/Univercity";
import { NgForm } from "@angular/forms";
import { NgModel } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  univercityName: string = '';
  univercities: Univercity[];
  isOpened = false;
  counter: number = 0;
  constructor(
    public uniService: UnivercityService
  ) { }

  ngOnInit() {
    console.log(this.form);
  }

  onGetUnivercities() {
    console.log(this.univercityName);
    this.uniService.getUnivercity(this.univercityName).subscribe((data: Univercity[]) => {
    this.univercities = data;
    this.isOpened = true;
     }, err => {
      console.log(err);
    });
  }

  onCancel() {
    this.univercities = [];
    this.isOpened = false;
  }

  onChange(){
    this.counter++;
  }

}
