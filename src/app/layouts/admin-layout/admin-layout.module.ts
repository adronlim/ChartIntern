import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {ChartComponent} from '../../chart/chart.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {ChartModule} from '../../chart/chart.module';
import {BarChartComponent} from '../../bar-chart/bar-chart.component';
import {PieChartComponent} from '../../pie-chart/pie-chart.component';
import {HistogramChartComponent} from '../../histogram-chart/histogram-chart.component';
import {StackedBarChartComponent} from '../../stacked-bar-chart/stacked-bar-chart.component';
@NgModule({
  imports: [
    CommonModule,
    // AdminLayoutRoutingModule,

    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ChartModule,
  ],
  declarations: [
    ChartComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
  entryComponents: [
    BarChartComponent,
    PieChartComponent,
    HistogramChartComponent,
    StackedBarChartComponent
  ],
  exports: [
    ChartComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
