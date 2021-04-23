import Chart from 'chart.js';
import React, { useEffect, useRef } from 'react';

import { Container } from './styles';

type LineChartProps = {
  data?: Chart.ChartData;
  options?: Chart.ChartOptions;
};

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  const linegraphRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (linegraphRef.current) {
      Chart.defaults.global.defaultFontFamily = 'Poppins';
      Chart.defaults.global.defaultFontSize = 10;
      Chart.defaults.global.defaultColor = '#BDBDBD';

      new Chart(linegraphRef.current, {
        type: 'line',
        data,
        options,
      });
    }
  }, [data, options]);

  return (
    <Container>
      <canvas ref={linegraphRef} />
    </Container>
  );
};

export default LineChart;
