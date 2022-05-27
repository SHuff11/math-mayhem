import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormulaService } from '../formula/formula.service';
import { MatrixService } from './matrix.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  public matrix: any[][] = [];
  private matrixsubscription: Subscription;
  
  constructor(private matrixService: MatrixService,) { }

  ngOnInit(): void {
    this.matrixsubscription = this.matrixService.matrixSubject
      .subscribe((matrix) => {
        this.matrix = matrix;
      }
      );
    this.matrixService.generate_matrix(8,10)    
    this.matrix = this.matrixService.get_matrix()
  }

  
  

}
