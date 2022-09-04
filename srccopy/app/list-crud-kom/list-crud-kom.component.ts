import { Component, OnInit } from '@angular/core';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-crud-kom',
  templateUrl: './list-crud-kom.component.html',
  styleUrls: ['./list-crud-kom.component.scss']
})
export class ListCrudKomComponent implements OnInit
{

  NamAryVar = ['Apple', 'Mango', 'Pineapple', 'Orange', 'Grapes']

  fruit = ''

  // EditVar = false
  EdtIdxVar=-1

  ArwIknVar=faArrowUp

  ChkValidFnc(){
    if(this.fruit==''){
      alert("Plz enter an item")
      return false
    }
    else if(this.fruit.length<3){
      alert("Item should be min 3 char long")
      return false
    }
    else if(this.NamAryVar.find(ItmVar=>ItmVar.toLowerCase()==this.fruit.toLowerCase())){
      alert("Item already exists")
      return false
    }
    else{
      return true
    }
  }

  AddBtnFnc()
  {
    if(this.ChkValidFnc()){
      this.NamAryVar.push(this.fruit)
      this.fruit=''
    }
  }

  EdtBtnFnc(IdxPsgVar:number){
    if(this.ChkValidFnc()){
      this.fruit=this.NamAryVar[IdxPsgVar]
      this.EdtIdxVar=IdxPsgVar
    }
  }

  UpdBtnFnc(){
    if(this.ChkValidFnc()){
      this.NamAryVar.splice(this.EdtIdxVar,1,this.fruit)
      this.fruit=''
      this.EdtIdxVar=-1
    }
  }

  DelBtnFn(IdxPsgVar:number){
    if(confirm("Are you sure?"))
      this.NamAryVar.splice(IdxPsgVar,1)
  }

  ArwIknTglFnc()
  {
    if (this.ArwIknVar == faArrowUp)
      this.ArwIknVar = faArrowDown
    else
      this.ArwIknVar = faArrowUp
  }

  SortFnc(){
    this.NamAryVar.sort()
  }

  constructor() { }

  ngOnInit(): void
  {
  }

}
