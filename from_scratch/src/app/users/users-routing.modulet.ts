import { NgModule } from "../../../node_modules/@angular/core";
import { UsersComponent } from "./users.component";
import { RouterModule } from "../../../node_modules/@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: UsersComponent }])
    ],
    exports: [RouterModule]
})
export class UsersRoutingModule {

}