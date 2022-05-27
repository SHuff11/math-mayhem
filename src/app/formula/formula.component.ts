import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatrixService } from '../matrix/matrix.service';
import { FormulaItem } from './formula-item.model';
import { FormulaService } from './formula.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css'],
})
export class FormulaComponent implements OnInit, OnDestroy {
  public formula: FormulaItem[];
  private formulasubscription: Subscription;

  constructor(private formulaService: FormulaService, private matrixService: MatrixService,) {}

  ngOnInit(): void {
    this.formulasubscription = this.formulaService.formulaSubject.subscribe(
      (formula: FormulaItem[]) => {
        this.formula = formula;
      }
    );
    this.formulaService.create_formula(6);
    this.formula = this.formulaService.get_formula();
  }

  submit_formula() {
    this.formulaService.submit_formula();
  }

  clear_formula() {
    this.formulaService.clear_formula();
    this.matrixService.clear_matrix();

  }

  ngOnDestroy(): void {
    this.formulasubscription.unsubscribe();
  }
}
