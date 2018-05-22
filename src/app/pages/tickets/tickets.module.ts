import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTableModule } from 'ng2-handsontable';

import { routing } from './tickets.routing';
import { Tickets } from './tickets.component';

import { DataFilterPipe } from '../tables/components/dataTables/data-filter.pipe';
import { DataTables } from '../tables/components/dataTables/dataTables.component';
import { DataTablesService } from '../tables/components/dataTables/dataTables.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
  ],
  declarations: [
    Tickets,
    DataTables,
    DataFilterPipe,
  ],
  providers: [
    DataTablesService
  ]
})
export class TicketsModule {
}
