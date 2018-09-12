import { NgModule } from "../../../node_modules/@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "../../../node_modules/@angular/common";
import { ErrorPageComponent } from "../error-page/error-page.component";

@NgModule({
    declarations: [
        DropdownDirective,
        ErrorPageComponent
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        ErrorPageComponent
    ]
})
export class SharedModule {

}