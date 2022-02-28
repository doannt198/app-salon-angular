import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    thongke=[{donhang:350,khachhang:420,doanhthu:5000000}];
    data: any;
    chartOptions: any;
  
  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          type: 'line',
          label: 'Đơn hàng ',
          borderColor: '#42A5F5',
          borderWidth: 2,
          fill: false,
          data: [
              50,
              25,
              12,
              48,
              56,
              76,
              42
          ]
      }, {
          type: 'bar',
          label: 'Khách hàng ',
          backgroundColor: '#66BB6A',
          data: [
              21,
              84,
              24,
              75,
              37,
              65,
              34
          ],
          borderColor: 'white',
          borderWidth: 2
      }, {
          type: 'bar',
          label: 'Doanh thu',
          backgroundColor: '#FFA726',
          data: [
              41,
              52,
              24,
              74,
              23,
              21,
              32
          ]
      }]
  };
  this.chartOptions =  {
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
};
  }

}
