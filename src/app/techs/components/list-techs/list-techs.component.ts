import { Component, OnInit } from '@angular/core';
import { Tech } from '../../models/Tech';
import {TechsService} from '../../services/techs.service';

@Component({
  selector: 'app-list-techs',
  templateUrl: './list-techs.component.html',
  styleUrls: ['./list-techs.component.scss']
})
export class ListTechsComponent implements OnInit {

  public listTechs: Tech[];

  constructor(private techService: TechsService) { }

  ngOnInit(): void {
    this.getTechs()
  }

  private getTechs() {
    this.techService.getAllTechs().subscribe(response => this.listTechs = response)
  }

}
