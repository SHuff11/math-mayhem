import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class MatrixService {
    matrix: any[][] = [];
    matrixSubject: Subject<any> = new Subject();
    
    generate_matrix(rows: number, columns: number) {
        for (let i = 0; i < rows; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < columns; j++){
                this.matrix[i][j] = Math.floor(Math.random() * (9-0+1) - 0)
            }
        }
        this.matrixSubject.next(this.matrix.slice()); 
           
    }

    get_matrix() {
        return this.matrix;
    }

    clear_matrix() {
        this.matrix = []
        this.generate_matrix(8,10)
    }
 }
