import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Tooltip,
  Zoom,
  CandleSeries,
  Crosshair,
  Logarithmic,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
  financialChartData,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const date1 = new Date("2017, 1, 1");

// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Bar" title="Financial Data" />
        <ChartComponent
          id="financial-chart"
          height="420px"
          title="AAPLE Historical"
          titleStyle={{ color: currentMode === "Dark" ? "#fff" : "#33373E" }}
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            textStyle: { color: currentMode === "Dark" ? "#fff" : "#33373E" },
          }}
        >
          <Inject
            services={[
              CandleSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Category,
              Crosshair,
              Zoom,
              Legend,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              type="Candle"
              low="low"
              high="high"
              open="open"
              close="close"
              enableSolidCandles={true}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
