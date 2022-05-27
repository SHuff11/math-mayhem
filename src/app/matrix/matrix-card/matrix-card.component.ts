import { Component, Input,} from '@angular/core';
import { FormulaService } from 'src/app/formula/formula.service';

@Component({
  selector: 'app-matrix-card',
  templateUrl: './matrix-card.component.html',
  styleUrls: ['./matrix-card.component.css'],
})
export class MatrixCardComponent {
  @Input() value:number = 0 ;
  isDisabled = false
  
  constructor(private formulaService: FormulaService) { }
  
  pushValue(l: number) { 
    let formula = this.formulaService.get_formula()
    for (let i = 0; i < formula.length; i++) { 
      if (formula[i].value == null) { 
        formula[i].value = l;
        this.isDisabled = true;
        return
      }
    }
  }
}
