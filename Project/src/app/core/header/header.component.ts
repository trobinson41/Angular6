import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from "../../../../node_modules/rxjs";
import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {
    storeSubscription: Subscription;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {

    }

    ngOnInit() {
        //this.onFetchData();
    }

    onSaveData() {
        this.storeSubscription = this.dataStorageService.storeRecipes()
            .subscribe(
                //(response) => alert('Recipes saved!'),
                (response) => console.log(response),
                (error) => alert('Error saving recipes: ' + error)
            );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuth() {
        return this.authService.isAuthenticated();
    }
}