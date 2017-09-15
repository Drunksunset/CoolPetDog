/**
 * Created by Administrator on 2017/9/14.
 */

import {ForumComponent} from "./forum/forum.component"
import {StoreComponent} from "./store/store.component";
import {RegisterComponent} from "./register/register.component";
import {DealComponent} from "./deal/deal.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  {path: 'forum', component: ForumComponent},
  {path: 'deal', component: DealComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'store', component: StoreComponent},
  {path: '', component: HomeComponent}
];
export const  routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
