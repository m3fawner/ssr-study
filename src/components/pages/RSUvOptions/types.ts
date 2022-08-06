export type DataRow = {
  rowPrice: number,
  rsuValue: number,
  optionValue: number,
  difference: number,
};

export type ComparisonChartProps = {
  dataRows: DataRow[]
};
