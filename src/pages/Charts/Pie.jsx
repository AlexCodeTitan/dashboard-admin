import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip,
  PieSeries,
  AccumulationLegend,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Pie = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Bar" title="Project Cost Breakdown" />
        <AccumulationChartComponent
          id="bar-chart"
          height="420px"
          title="Project Cost Breakdown"
          titleStyle={{ color: currentMode === "Dark" ? "#fff" : "#33373E" }}
          tooltip={{ enable: true }}
          legendSettings={{
            visible: true,
            position: "Right",
            background: currentMode === "Dark" ? "#33373E" : "#fff",
            textStyle: { color: currentMode === "Dark" ? "#fff" : "#33373E" },
          }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationTooltip,
              PieSeries,
              AccumulationDataLabel,
              AccumulationLegend,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              title="Project Cost Breakdown"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode
              explodeOffset="10%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "600",
                  color: "#fff",
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
