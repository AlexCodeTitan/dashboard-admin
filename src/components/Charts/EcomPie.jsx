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

import { ecomPieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const EcomPie = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <AccumulationChartComponent
        id="bar-chart"
        height="200px"
        tooltip={{ enable: true }}
        legendSettings={{
          visible: false,
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
            dataSource={ecomPieChartData}
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
  );
};

export default EcomPie;
