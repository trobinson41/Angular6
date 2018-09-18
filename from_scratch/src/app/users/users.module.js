import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UsersComponent],
                    imports: [CommonModule, UsersRoutingModule]
                },] },
    ];
    return UsersModule;
}());
export { UsersModule };
