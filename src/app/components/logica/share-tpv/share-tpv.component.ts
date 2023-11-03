import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'escapay-share-tpv',
  templateUrl: './share-tpv.component.html',
  styleUrls: ['./share-tpv.component.css']
})
export class ShareTpvComponent implements OnInit{
  @Input() resultados: Array<number> = [] ;

 ngOnInit(): void {
   console.log("resultados", this.resultados)
 }

}
