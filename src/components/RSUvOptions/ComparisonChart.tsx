import { Flex, useToken, useBreakpointValue } from '@chakra-ui/react';
import {
  LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid,
} from 'recharts';
import { ComparisonChartProps } from './types';
import { getDollar } from '../../util/formatters';

const ComparisonChart = ({ dataRows }: ComparisonChartProps) => {
  const [optionsLineColor, rsusLineColor] = useToken('colors', ['red.600', 'green.900']);
  const chartHeight = useBreakpointValue({ base: 180, md: 320 }) ?? 180;
  const chartWidth = useBreakpointValue({ base: 320, md: 540 }) ?? 320;
  return (
    <Flex justifyContent="center" flexDir={['column', null, 'row']}>
      <LineChart width={chartWidth} height={chartHeight} data={dataRows}>
        <Tooltip labelFormatter={(grantPrice) => `Grant price: $${grantPrice}`} formatter={getDollar} />
        <Legend />
        <XAxis dataKey="rowPrice" label={{ value: 'Grant price', dy: 12, position: 'insideBottomRight' }} tickFormatter={(value) => getDollar(value)} />
        <YAxis label={{ value: 'Share price', position: 'insideLeft', angle: -90 }} tickFormatter={(value) => getDollar(value)} />
        <CartesianGrid strokeDasharray="3 3" />
        <Line
          type="monotone"
          isAnimationActive={false}
          stroke={optionsLineColor}
          dataKey="optionValue"
          name="Options value"
        />
        <Line
          type="monotone"
          isAnimationActive={false}
          stroke={rsusLineColor}
          dataKey="rsuValue"
          name="RSUs value"
        />
      </LineChart>
    </Flex>
  );
};

export default ComparisonChart;
