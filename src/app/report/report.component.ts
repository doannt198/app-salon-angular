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
    datachars:any
    query = {
        from: '2022-05-01',
        to: '2022-05-30',
        status: 'checkout'
    }
    datareport: any=[];
    datareport1:any=[];
    constructor(private ReportService: ReportService,
    private spinner: NgxSpinnerService
        ) { }

    ngOnInit(): void {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
        this.data = {
            labels: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25','27','29'],
            datasets: [{
                type: 'line',
                label: 'Số đơn  ',
                borderColor: '#42A5F5',
                borderWidth: 2,
                fill: false,
                data:this.datachars?.countBooking
            }, {
                type: 'bar',
                label: 'Doanh thu',
                backgroundColor: '#66BB6A',
                data: 
                  this.datachars?.turnover
                ,
                borderColor: 'white',
                borderWidth: 2
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
          this.datachars=this.datareport.charts;
        this.datareport1=this.datareport.charts.map((t:any )=>t.day)
        console.log(this.datachars)
        })
      }
}
