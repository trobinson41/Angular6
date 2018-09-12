import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../node_modules/@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { ErrorPageComponent } from "../error-page/error-page.component";

const authRoutes: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: '**', component: ErrorPageComponent, data: { message: 'Page not found!' } }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}