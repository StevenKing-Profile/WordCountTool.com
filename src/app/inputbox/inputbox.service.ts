import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InputboxService {
    data = new BehaviorSubject<string>("");

    setData(input) : void {
        this.data.next(input);
    }

    getData() {
        return this.data.asObservable();
    }
}