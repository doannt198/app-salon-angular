import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/services/report.service';
import * as queryString from 'query-string';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

    data: any;
    chartOptions: any;
    query = {
        from: '2021-11-01',
        to: '2022-02-01',
        status: 'checkout'
    }
    datareport: any=[];
    constructor(private ReportService: ReportService,
    private spinner: NgxSpinnerService
        ) { }

    ngOnInit(): void {
        this.spinner.show();

        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
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
        this.chartOptions = {
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
        this.getReport();
    }
    getReport(){
        const params = queryString.stringify(this.query);
        this.ReportService.getReport(params).subscribe(response => {
          this.datareport = response.data;
        })
      }
}
