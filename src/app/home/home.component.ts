import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: './home.component.html'  ,
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    favoriteFruits = [
        { type: "🍎", count: 7 },
        { type: "🍌", count: 15 },
        { type: "🍍", count: 12 },
        { type: "🍒", count: 30 },
        { type: "🍇", count: 16 }
    ];
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
