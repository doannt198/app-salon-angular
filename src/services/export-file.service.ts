import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {
  constructor() { }
  public exportAsExcelFile(json: any[], excelFileName: string, sheetNames: string[] = ['data']): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: sheetNames };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public exportDataToExcel(idData: any, fileName = '') {
    var downloadlink;
    var dataType = 'application/vnd.ms-excel';
    var idSelect: any = document.getElementById(idData);
    var html = idSelect.outerHTML.replace(/ /g, '%20');
    fileName = fileName ? fileName + '.xls' : 'excel_data.xls';
    downloadlink = document.createElement("a");
    document.body.appendChild(downloadlink);
    if ((navigator as any).msSaveOrOpenBlob) {
      var blob = new Blob(['\ufeff', html], {
        type: dataType
      });
      (navigator as any).msSaveOrOpenBlob(blob, fileName);
    } else {
      // Create a link to the file
      downloadlink.href = 'data:' + dataType + ', ' + html;
      // Setting the file name
      downloadlink.download = fileName;
      //triggering the function
      downloadlink.click();
    }
  }
}
