import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PlanListComponent } from './component/plan-list/plan-list.component';
import { PlanDetailsComponent } from './component/plan-details/plan-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UsageCountPipe } from './pipes/usage-count.pipe';
import { SpeedCountPipe } from './pipes/speed-count.pipe';
import { AdjustLengthPipe } from './pipes/adjust-length.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ApplyPlanComponent } from './component/apply-plan/apply-plan.component';
import { SuccessComponent } from './component/success/success.component';
import { TypePipe } from './pipes/type.pipe';
import { PayAndRechargeComponent } from './pay-and-recharge/pay-and-recharge.component';

const paths : Routes = [
  { path : '', component : DashboardComponent},
  { path : 'listPlans', component : PlanListComponent },
  { path : 'pay_and_recharge', component : PayAndRechargeComponent },
  { path : 'pay_and_recharge/:pTitle', component : PayAndRechargeComponent },
  { path : 'listPlans/:field/:value', component : PlanListComponent },
  { path : 'viewPlan/:pTitle', component : PlanDetailsComponent },
  { path : 'applyPlan/:pTitle', component : ApplyPlanComponent },
  { path : 'success/:name', component : SuccessComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PlanListComponent,
    PlanDetailsComponent,
    DashboardComponent,
    UsageCountPipe,
    SpeedCountPipe,
    AdjustLengthPipe,
    SortPipe,
    ApplyPlanComponent,
    SuccessComponent,
    TypePipe,
    PayAndRechargeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
