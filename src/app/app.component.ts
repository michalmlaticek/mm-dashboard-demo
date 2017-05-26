import { Component } from '@angular/core';
import { EAggregation, EColType, IColumn } from 'mm-dashboard-core';
import { IDashboardConfig } from 'mm-dashboard';
import { ILineChartConfig } from 'mm-line-chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: IDashboardConfig; // MmDashboardConfig
  data: Array<any>;
  columns: Array<IColumn>;

  constructor() {
    this.data = [{
      "x": 1,
      "y": 1,
      "name": "Adam",
      "date": "1-Apr-16"
    }, {
      "x": 1,
      "y": 2,
      "name": "Betka",
      "date": "5-Jun-16"
    }, {
      "x": 2,
      "y": 3,
      "name": "Ciril",
      "date": "5-Jun-16"
    }, {
      "x": 3,
      "y": 4,
      "name": "Betka",
      "date": "11-Aug-16"
    }, {
      "x": 4,
      "y": 5,
      "name": "Emily",
      "date": "18-Sep-16"
    }, {
      "x": 5,
      "y": 6,
      "name": "Fero",
      "date": "21-Oct-16"
    }
    ];

    this.columns = [
      {
        name: "x",
        label: "Col X",
        type: EColType.number
      },
      {
        name: "y",
        label: "Col Y",
        type: EColType.number
      },
      {
        name: "name",
        label: "Name",
        type: EColType.string
      },
      {
        name: "date",
        label: "Some date",
        type: EColType.date
      }
    ];


    let lineChartConfig0: ILineChartConfig = {
      widgetId: "LineChart",
      widgetLabel: "Line Chart",
      widgetDescription: "Line chart",
      title: "My Line Chart",
      aggregation: EAggregation.sum,
      xCol: {
        name: "x",
        label: "Col X",
        type: EColType.number
      },
      yCol: {
        name: "y",
        label: "Col Y",
        type: EColType.number
      },
      margin: {
        "top": 20,
        "right": 20,
        "bottom": 20,
        "left": 40
      },
      color: "#efefef"
    }

    this.config = {
      title: "Sample dashboard",
      gridConfig: {

      },
      items: [
        {
          gridConfig: {
            'col': 1,
            'row': 1,
            'sizex': 2,
            'sizey': 1
          },
          widgetConfig: lineChartConfig0
        }
      ]
    };
  }
}
