import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InputboxService {
  data = new BehaviorSubject<string>("");
  dataVanilla: string;

  setData(input) : void {
    this.data.next(input);
    this.dataVanilla = input;
  }

  getData() {
    return this.data.asObservable();
  }

  getDataVanilla() {
    return this.dataVanilla;
  }
}