import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'main-code',
  template: '<h1>This is HTML code</h1>',
  templateUrl: './app.component.html',
  styles: ['.NamCls{color:red}'],
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  CartAryVar = [
    {
      TtlVak: 'Paneer pizza',
      DtlVak: 'Paneer cheese double layer pan',
      MrpVak: 300,
      QtyVak: 1
    },
    {
      TtlVak: 'Paneer Burger',
      DtlVak: 'Family maharaja size tripple layer cheese burger',
      MrpVak: 150,
      QtyVak: 1
    },
    {
      TtlVak: 'Chicken Roll',
      DtlVak: 'Wide roll with double cheese',
      MrpVak: 100,
      QtyVak: 1
    }
  ]

  TtlLykVar = 1

  TtlQtyVar = this.CartAryVar.length
  TtlUntCstVar = 0
  TtlCstVar = 1


  ngOnInit()
  {
    this.TtlUntCstVar = this.CartAryVar.reduce((SumVar, ItmVar) =>
      SumVar + ItmVar.MrpVak,
      0
    )
    this.CalcTtlMrpFnc()
  }

  IncQtySupFnc(EvtRsgVar: any, IdxRsgVar: number)
  {
    this.TtlQtyVar += EvtRsgVar
    this.CartAryVar[IdxRsgVar].QtyVak = EvtRsgVar.QtyVak
    this.CalcTtlMrpFnc()
  }

  CalcTtlMrpFnc()
  {
    this.TtlCstVar = this.CartAryVar.reduce((SumVar, ItmVar) =>
      SumVar + ItmVar.MrpVak * ItmVar.QtyVak,
      0
    )
  }

  IncLykSupVaf(EvtVar: number)
  {
    this.TtlLykVar += EvtVar
  }

  DecLykSupVaf(EvtVar: number)
  {
    this.TtlLykVar -= EvtVar
  }

  ChgQtySupVaf(EvtRsgVar: number)
  {
    this.TtlQtyVar += EvtRsgVar
  }


  // @ViewChild('AdoNgsUid') AdoNgsVar:any;
  // NamVar = "Thanuja"
  // AgeVar = 21
  // BulVar = true
  // ThemeVar = "Purple"
  // FgdColorVar = "Purple"
  // BgdColorVar = "Plum"
  // StatusVar = "Active"
  // NamIptVar = ""

  // SngAryVar = ["Brand - MicroSoft Outlook.mp3",
  //   "Kannada - Theme - Pujari - Kannalle.mp3",
  //   "Patriotic - Aye Mere Watan Ke Logo.mp3",
  //   "Piono - Theme.mp3"]

  // PlaySongVar = this.SngAryVar[0]

  // PlaySongFnc(IdxPsgVar: number)
  // {
  //   //this.PlaySongVar = this.SngAryVar[IdxPsgVar]

  //   this.PlaySongVar = this.SngAryVar[IdxPsgVar]
  //   let AdoHtmVar = this.AdoNgsVar.nativeElement
  //   AdoHtmVar.play()
  // }
  // TripAryVar = ["Pilikula", "Pabbas icecream", "City center mall", "Ideal icecream", "Deepa complex", "Statebank"]
  // ColorVar = "Red"

  // SortPlaces(a: string, b: string)
  // {
  //   return a.localeCompare(b)
  // }

  // DreamAryVar = [
  //   {
  //     "Name": "Shadab",
  //     "Plan": "Buy Mustang",
  //     "Cost": 10000000,
  //     "Year": "20 Jan 2032"
  //   },
  //   {
  //     "Name": "Chethan",
  //     "Plan": "Macbook Pro",
  //     "Cost": 579000,
  //     "Year": "27 Feb 2027"
  //   },
  //   {
  //     "Name": "Thanuja",
  //     "Plan": "Buy independent house",
  //     "Cost": 20000000,
  //     "Year": "01 Oct 2032"
  //   },
  //   {
  //     "Name": "Karthik",
  //     "Plan": "Buy Benz",
  //     "Cost": 15000000,
  //     "Year": "28 Feb 2030"
  //   },
  //   {
  //     "Name": "Akash",
  //     "Plan": "Sneakers collection",
  //     "Cost": 200000,
  //     "Year": "13 Nov 2025"
  //   }
  // ]

  // DreamSort(a:any,b:any){
  //   return a.Name.localeCompare(b.Name)
  // }

  // SortByName(){
  //   this.DreamAryVar.sort((a,b)=>{
  //     return a.Name.localeCompare(b.Name)
  //   })
  // }

  // SortByPlan(){
  //   this.DreamAryVar.sort((a,b)=>{
  //     return a.Plan.localeCompare(b.Plan)
  //   })
  // }

  // SortByCost(){
  //   this.DreamAryVar.sort((a,b)=>{
  //     return a.Cost-b.Cost
  //   })
  // }

  // SortByYear(){
  //   this.DreamAryVar.sort((a,b)=>{
  //     return <any> new Date(a.Year)-<any> new Date(b.Year)
  //   })
  // }

  // NamBtnFnc(){
  //   alert("Y did you click me!")
  // }

  // NamdbBtnFnc(){
  //   alert("Y did you click me twice!")
  // }

}
