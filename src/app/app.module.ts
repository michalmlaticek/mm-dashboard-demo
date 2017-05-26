import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { DashboardModule, WidgetList } from 'mm-dashboard';
import { LineChartModule, LineChartComponent, LineChartFormComponent } from 'mm-line-chart';
import { BarChartModule, BarChartComponent, BarChartFormComponent } from 'mm-bar-chart';
import { PieChartModule, PieChartComponent, PieChartFormComponent } from 'mm-pie-chart';
import { DashboardManagerModule, WidgetConfigList } from 'mm-dashboard-manager';

import { AppComponent } from './app.component';

// const widgetList: WidgetList = [
//   { widgetId: "LineChart", widgetComponent: LineChartComponent }
// ]

const widgetConfig: WidgetConfigList = [
  { widgetId: "LineChart", widgetLabel: "Line Chart", widgetDescription: "This is a simple line chart", formComponent: LineChartFormComponent, widgetComponent: LineChartComponent },
  { widgetId: "BarChart", widgetLabel: "Bar Chart", widgetDescription: "This is a simple bar chart", formComponent: BarChartFormComponent, widgetComponent: BarChartComponent },
  { widgetId: "PieChart", widgetLabel: "Pie Chart", widgetDescription: "This is a simple Pie chart", formComponent: PieChartFormComponent, widgetComponent: PieChartComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    LineChartModule.forRoot(),
    BarChartModule.forRoot(),
    PieChartModule.forRoot(),
    DashboardManagerModule.forRoot(widgetConfig),
    // DashboardModule.forRoot(widgetList)
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
