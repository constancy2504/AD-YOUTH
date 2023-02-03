<template>
  <div>
    <button @click="getExcelInfo()">엑셀정보</button>
    <button @click="jsfcTest()">엑셀추출 ver 1</button>
    <button @click="testExcel()">엑셀추출 ver 2</button>

    <button @click="getUser()">애로우펑션</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';
import { LODASH } from '../common/lodash';

import { createSheet, setColumns, setRows, exportExcel } from '../common/excel';

/** START : Excel API TEST */
function testExcel() {
  //   initWorkbook();
  createSheet('Text Excel');
  setColumns([
    { label: '이름', key: 'name', width: 12 },
    { label: '포지션', key: 'position', width: 22 },
  ]);
  setRows([
    {
      name: '권나라',
      position: '프론트',
    },
    {
      name: '문가영',
      position: '백엔드',
    },
    {
      name: '아이유',
      position: '퍼블리셔',
    },
  ]);
  exportExcel('testExcel.xlsx');
}

/** END : Excel API TEST */

const workbook = new ExcelJS.Workbook();

const getUser = res => {
  console.log('getUser');
};

//데이터 변환 테스트 펑션
function jsfcTest() {
  console.log('=== JS LIB TEST ===');

  const tableData = [
    {
      label: '이름',
      key: 'name',
      values: ['권나라', '문가영', '아이유'],
      width: 10,
    },
    {
      label: '포지션',
      key: 'position',
      values: ['프론트', '백엔드', '퍼블리셔'],
      width: 10,
    },
  ];

  /** 
   * 헤더 정보, 키, 셀 넓이 등록
  ex)
  const headerSample = [
    { header: '이름', key: 'name', width: 10 },
    { header: '포지션', key: 'position', width: 10 },
  ];
  **/
  const header = tableData.map(data => ({
    header: data.label,
    key: data.key,
    width: data.width,
  }));

  //Object 키값 형성
  let tempObj = {};
  tableData.forEach(data => {
    tempObj[data['key']] = '';
  });

  //데이터 길이만큼 배열 생성
  const dataArr = new Array();
  tableData[0].values.forEach(value => {
    dataArr.push(LODASH.cloneDeep(tempObj));
  });

  /**
   * 엑셀 ROW 생성 위한 데이터 set
   ex)바꿔야 하는 데이터 형태
    const data = [
        {
        name: '권나라',
        position: '프론트',
        },
        {
        name: '문가영',
        position: '백엔드',
        },
        {
        name: '아이유',
        position: '퍼블리셔',
        },
    ];
   */
  tableData.forEach((data, dataIndex) => {
    data.values.forEach((value, valueIndex) => {
      dataArr[valueIndex][data.key] = value;
    });
  });
}

//엑셀 만들기 함수
async function getExcelInfo() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('테스트시트');

  console.log('workSheet : ', worksheet);

  //   const rawData = [
  //     { header: 'order_id', data: ['12345678', '12345679', '12345680'] },
  //     { header: 'store_id', data: ['storeA', 'storeB', 'storeC'] },
  //     { header: 'country_id', data: ['KR', 'KR', 'KR'] },
  //     { header: 'price', data: ['15000', '10000', '20000'] },
  //   ];

  const data = [
    {
      name: { value: '김한결', width: 10 },
      position: { value: '프론트개발자', width: 10 },
    },
    {
      name: { value: '김대영', width: 10 },
      position: { value: '프론트', width: 10 },
    },
    {
      name: { value: '이현희', width: 10 },
      position: { value: '백엔드', width: 10 },
    },
  ];

  const columns = Object.keys(data[0]);
  console.log('columns : ', columns); //[Name, Position]

  columns.map(column => {
    console.log('column : ', column);
  });
  worksheet.columns = columns.map(column => ({
    header: column.value,
    key: column.value,
    width: column.width,
  }));

  console.log('worksheet.columns : ', worksheet.columns);
  worksheet.insertRows(2, data);

  //   const buffer = await workbook.xlsx.writeBuffer();
  //   saveAs(new Blob([buffer]), '개발자목록.xlsx');

  /**
   * 데이터 셋팅하는 다른 방법
   */
  //   var worksheet = workbook.addWorksheet('My Sheet');
  //   worksheet.getCell('A1').value = '엑셀 특정 셀에 값 넣기';
  //   worksheet.getCell('A2').value = {
  //     richText: [
  //       { text: 'css 추가합니다', font: { size: 15, color: { argb: 'A52A2A' } } },
  //     ],
  //   };

  //   worksheet.columns = [
  //     { header: 'Id', key: 'id', width: 10 },
  //     { header: 'Name', key: 'name', width: 32 },
  //     { header: 'D.O.B', key: 'DOB', width: 10, outlineLevel: 1 },
  //   ];

  //   const data = [
  //     {
  //       id: 1,
  //       name: 'Jamey',
  //       DOB: '2022-12-25',
  //     },
  //     {
  //       id: 2,
  //       name: 'Jimmy',
  //       DOB: '2100-01-10',
  //     },
  //     {
  //       id: 3,
  //       name: 'Jesus',
  //       DOB: '2000-12-25',
  //     },
  //   ];

  //   worksheet.insertRow(2, { id: 0, name: 'Jenny', DOB: '2020-11-11' });
  //   worksheet.insertRows(3, data);

  //   worksheet.columns = [
  //     {
  //       header: 'Id',
  //       key: 'id',
  //       width: '10',
  //       style: {
  //         font: { size: 14 },
  //         numFmt: '@',
  //         alignment: { horizontal: 'center' },
  //       },
  //     },
  //     {
  //       header: 'Name',
  //       key: 'name',
  //       width: '32',
  //       style: {
  //         font: { size: 14 },
  //         numFmt: '@',
  //         alignment: { horizontal: 'center' },
  //       },
  //     },
  //     {
  //       header: 'D.O.B',
  //       key: 'DOB',
  //       width: '20',
  //       outlineLevel: 1,
  //       style: {
  //         font: { size: 14 },
  //         numFmt: 'YYYY-MM-DD',
  //         alignment: { horizontal: 'center' },
  //       },
  //     },
  //     {
  //       header: 'salary',
  //       key: 'salary',
  //       width: '20',
  //       style: {
  //         font: { size: 14 },
  //         numFmt: '$#,##0',
  //         alignment: { horizontal: 'right' },
  //       },
  //     },
  //   ];

  //   const headerStyle = {
  //     type: 'pattern',
  //     pattern: 'solid',
  //     fgColor: { argb: 'cce6ff' },
  //   };

  //   const headerBorderStyle = {
  //     left: { style: 'thin', color: { argb: 'bfbfbf' } },
  //     right: { style: 'thin', color: { argb: 'bfbfbf' } },
  //   };

  //   for (let i = 1; i <= worksheet.columnCount; i++) {
  //     const headerEachCell = worksheet.getCell(`${String.fromCharCode(i + 64)}`);
  //     headerEachCell.fill = headerStyle;
  //     headerEachCell.border = headerBorderStyle;
  //     headerEachCell.alignment = { horizontal: 'center' };
  //   }

  //   workbook.xlsx.writeFile('example.xlsx');

  console.log('excel : ', workbook);
}
</script>

<style lang="scss" scoped></style>
