import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VerificationComponent } from "./verification/verification.component";
import { UserComponent } from "./user/user.component";
import { MotherComponent } from "./family/mother/mother.component";
import { FatherComponent } from "./family/father/father.component";

const appRoutes: Routes = [
  /*   { path: "", redirectTo: "/", pathMatch: "full" }, */
  { path: "", component: HomeComponent },
  { path: "login", component: VerificationComponent },
  {
    path: ":userId",
    component: UserComponent,
    children: [
      { path: ":motherId", component: MotherComponent },
      { path: ":fatherId", component: FatherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
