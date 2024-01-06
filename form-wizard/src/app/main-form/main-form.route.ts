import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Step1Component } from './step-1/step-1.component';
import { Step2Component } from './step-2/step-2.component';
import { Step3Component } from './step-3/step-3.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StepSuccessComponent } from './step-success/step-success.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];

@NgModule({
    declarations: [
        MainComponent,
        Step1Component,
        Step2Component,
        Step3Component,
        StepSuccessComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
})
export class MainModule { }