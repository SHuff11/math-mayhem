export class FormulaItem { 
    public operator: string;
    public value?: number;

    public constructor(operator: string, value?: number) { 
        this.operator = operator;
        if (value) { 
            this.value = value;
        }
    }
}