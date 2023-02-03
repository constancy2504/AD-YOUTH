import ExcelJS from 'exceljs';
import { LODASH } from './lodash';
import { saveAs } from 'file-saver';

const workbook = new ExcelJS.Workbook();

/**
 * @param { string } sheetName
 */
function createSheet(sheetName, columns) {
  workbook.addWorksheet(sheetName);
}

/**
 * @param { Array } columns
 */
function setColumns(columns) {
  /**
   * Data Exam)
   data = [
    {
      label: '이름',
      key: 'name',
      width: 10,
    },
  ];
   */
  const worksheet = workbook.getWorksheet();

  worksheet.columns = columns.map(column => ({
    header: column.label,
    key: column.key,
    width: column.width,
  }));
}

/**
 * @param { Array } rows
 */
function setRows(rows) {
  const worksheet = workbook.getWorksheet();

  worksheet.insertRows(2, rows);
}

function setPwd(pwd) {
  const worksheet = workbook.getWorksheet();
  worksheet.protect(pwd);
}

async function exportExcel(fileName) {
  console.log('fileName : ', exportExcel);
  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), fileName);

  workbook.removeWorksheet();
}

export { createSheet, setColumns, setRows, exportExcel };
