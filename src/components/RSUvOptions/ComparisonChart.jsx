import { Flex, useToken, useBreakpointValue } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import 'react-vis/dist/style.css';
import {
  LineSeries, XAxis, XYPlot, YAxis, DiscreteColorLegend, Crosshair,
} from 'react-vis';
import { dataRowsPropTypes } from './propTypes';
import { getDollar } from '../../util/formatters';

const ComparisonChart = ({ dataRows }) => {
  const [crosshairValues, setCrosshairValues] = useState();
  const { optionsLine, rsusLine } = useMemo(() => dataRows.reduce(({ optionsLine: opts, rsusLine: rsus }, { rowPrice, rsuValue, optionValue }) => ({
    optionsLine: [...opts, { x: rowPrice, y: optionValue }],
    rsusLine: [...rsus, { x: rowPrice, y: rsuValue }],
  }), {
    optionsLine: [],
    rsusLine: [],
  }), [dataRows]);
  const [optionsLineColor, rsusLineColor] = useToken('colors', ['red.600', 'green.900']);
  const chartHeight = useBreakpointValue({ base: 180, md: 320 }) ?? 180;
  const chartWidth = useBreakpointValue({ base: 320, md: 540 }) ?? 320;
  return (
    <Flex justifyContent="center" flexDir={['column',, 'row']}>
      <XYPlot width={chartWidth} height={chartHeight} animation onMouseLeave={() => setCrosshairValues(null)}>
        <Crosshair values={crosshairValues} itemsFormat={([{ y: options }, { y: rsus }]) => [{ title: 'Option value', value: options }, { title: 'RSUs value', value: rsus }]} />
        <XAxis title="Grant price" tickFormat={getDollar} />
        <YAxis title="Share price" tickFormat={getDollar} />
        <LineSeries
          color={optionsLineColor}
          data={optionsLine}
          onNearestX={(_, { index }) => setCrosshairValues([optionsLine[index], rsusLine[index]])}
        />
        <LineSeries
          color={rsusLineColor}
          data={rsusLine}
        />
      </XYPlot>
      <DiscreteColorLegend style={{ overflowY: 'hidden' }} items={[{ title: 'Options value', color: optionsLineColor }, { title: 'RSUs value', color: rsusLineColor }]} orientation="horizontal" width={200} height={45} />
    </Flex>
  );
};
ComparisonChart.propTypes = {
  dataRows: dataRowsPropTypes.isRequired,
};

export default ComparisonChart;
