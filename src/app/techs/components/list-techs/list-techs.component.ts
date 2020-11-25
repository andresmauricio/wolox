import { Component, OnInit } from '@angular/core';
import { Tech } from '../../models/Tech';
import {TechsService} from '../../services/techs.service';

@Component({
  selector: 'app-list-techs',
  templateUrl: './list-techs.component.html',
  styleUrls: ['./list-techs.component.scss']
})
export class ListTechsComponent implements OnInit {

  public techs
  private listTechs: Tech[] = [];

  constructor(private techService: TechsService) { }

  ngOnInit(): void {
    this.getTechs()
    this.techs = this.listTechs;
  }

  private getTechs() {
    this.techService.getAllTechs().subscribe(response => {
      this.listTechs = response;
      this.techs = this.listTechs;
    })
  }

  filterTechsForType(techSearch: string) {
    if (techSearch === 'All') {
      this.techs =  this.listTechs;
    } else {
      const data = this.listTechs.filter(tech => tech.type === techSearch );
      this.techs = data;
    }
  }

  filterTechForName(name: string) {
    if (name.length >= 3) {
      const data = this.listTechs.filter(tech => tech.tech.toLowerCase() === name.toLowerCase() );
      this.techs = data;
    } else {
      return this.techs =  this.listTechs;
    }
  }

  likeAndAddTech(techSave: Tech) {
    let likesTech = JSON.parse(localStorage.getItem('likes')) || [];
    const search = likesTech.find(tech =>  tech.tech === techSave.tech);
    if (!search) {
      likesTech.push(techSave);
    } else {
      const _ = likesTech.map(item =>  item.tech).indexOf(techSave.tech);
      likesTech.splice(_, 1);
    }
    localStorage.setItem('likes', JSON.stringify(likesTech))
  }

  iconPresent(tech: Tech) {
    let likesTech = JSON.parse(localStorage.getItem('likes')) || [];
    const data = likesTech.filter(y => y.tech.toLowerCase() === tech.tech.toLowerCase() );
    return data.length > 0 ? true : false;
  }

}
