import { Flex, useToken, useBreakpointValue } from '@chakra-ui/react';
import {
  LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid,
} from 'recharts';
import { dataRowsPropTypes } from './propTypes';
import { getDollar } from '../../util/formatters';

const ComparisonChart = ({ dataRows }) => {
  const [optionsLineColor, rsusLineColor] = useToken('colors', ['red.600', 'green.900']);
  const chartHeight = useBreakpointValue({ base: 180, md: 320 }) ?? 180;
  const chartWidth = useBreakpointValue({ base: 320, md: 540 }) ?? 320;
  return (
    <Flex justifyContent="center" flexDir={['column',, 'row']}>
      <LineChart width={chartWidth} height={chartHeight} data={dataRows}>
        <Tooltip labelFormatter={(grantPrice) => `Grant price: $${grantPrice}`} formatter={getDollar} />
        <Legend />
        <XAxis dataKey="rowPrice" label={{ value: 'Grant price', dy: 12, position: 'insideBottomRight' }} tickFormatter={getDollar} />
        <YAxis label={{ value: 'Share price', position: 'insideLeft', angle: -90 }} tickFormatter={getDollar} />
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
ComparisonChart.propTypes = {
  dataRows: dataRowsPropTypes.isRequired,
};

export default ComparisonChart;
