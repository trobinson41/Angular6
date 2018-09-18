import { NgModule } from "../../../node_modules/@angular/core";
import { UsersComponent } from "./users.component";
import { RouterModule } from "../../../node_modules/@angular/router";
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild([{ path: '', component: UsersComponent }])
                    ],
                    exports: [RouterModule]
                },] },
    ];
    return UsersRoutingModule;
}());
export { UsersRoutingModule };
