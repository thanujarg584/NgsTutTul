import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news-kom.component.html',
  styleUrls: ['./news-kom.component.scss']
})
export class NewsKomComponent implements OnInit
{

  @Input() topicVar: any;
  @Input() detailVar: any;
  @Output() IncLykVar = new EventEmitter()
  @Output() DecLykVar = new EventEmitter()

  LykVar = 1
  DisLykVar = 1

  constructor() { }

  InLykBtnFnc()
  {
    this.LykVar += 1
    this.IncLykVar.emit(1)
  }

  DisLykBtnFnc()
  {
    this.IncLykVar.emit(-1)
  }

  ngOnInit(): void
  {

  }

}
