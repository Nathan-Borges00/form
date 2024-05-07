import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

const PRIME_NG = [CardModule, PanelModule, DividerModule, InputTextModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [PRIME_NG],
})
export class FormModule {}
