import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormulaItem } from './formula-item.model';

@Injectable({ providedIn: 'root' })
export class FormulaService {
  formulaSubject = new Subject<FormulaItem[]>();
  private formula_ops: string[] = ['+', '-', '*', '/'];
  private formula: FormulaItem[] = [];

  create_formula(num_of_formula_items: number) {
    let ops_list: FormulaItem[] = [];
    ops_list[0] = new FormulaItem('+');
    // values_list =

    for (let i = 1; i < num_of_formula_items; i++) {
      let index = Math.floor(Math.random() * this.formula_ops.length);
      ops_list[i] = new FormulaItem(this.formula_ops[index]); // '-'
    }
    this.formula = ops_list;
    this.formulaSubject.next(this.formula.slice());
  }

  get_formula() {
    return this.formula;
  }

  submit_formula() {
    if (this.formula[this.formula.length - 1].operator == '=') {
      return;
    }
    let formulaStringed = [];
    for (let i = 0; i < this.formula.length; i++) {
      let formulaitem = this.formula[i];
      let op = formulaitem.operator;
      let val = formulaitem.value;
      formulaStringed.push(op);
      formulaStringed.push(val);
    }
    let stringform = formulaStringed.join(' ');
    let realstringform = eval(stringform);
    let solution = new FormulaItem('=', realstringform);
    this.formula.push(solution);
  }
  clear_formula() {
    this.formula = [];
    this.create_formula(6);

    console.log();
  }
}
