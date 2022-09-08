import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { BoulderCreatorComponent } from './component';

import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './pretty-json.pipe';

@NgModule({
  declarations: [
    BoulderCreatorComponent,
    PrettyJsonPipe
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BoulderCreatorComponent
  ],
})
export class ExerciceModule { }
