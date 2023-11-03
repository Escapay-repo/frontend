import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'escapay-share-bandeiras-total',
  templateUrl: './share-bandeiras-total.component.html',
  styleUrls: ['./share-bandeiras-total.component.css']
})
export class ShareBandeirasTotalComponent implements OnInit {
  @Input() bandeirasTotal: Array<any> = []
  
 ngOnInit(): void {

 }
}
