import { Component, OnInit } from '@angular/core';
import { maquininhaCrud } from '../../tabela/maquininhaCrud';
import { MaquininhaService } from '../maquininha.service';

@Component({
  selector: 'escapay-maquininha-read',
  templateUrl: './maquininha-read.component.html',
  styleUrls: ['./maquininha-read.component.css']
})
export class MaquininhaReadComponent implements OnInit {
  tables!: maquininhaCrud[]
  displayedColumns = ['tableName', 'action']

  constructor(private maquininhaService: MaquininhaService) { }

  ngOnInit(): void {
    this.maquininhaService.read().subscribe(tables => {
      this.tables = tables
    })

  }
}
