import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

import { SparklineAreaData } from "./../../data/dummy";

const EcomBar = () => {
  return (
    <div>
      <SparklineComponent
        id="bar-chart"
        height="100px"
        width="200px"
        valueType="Numeric"
        fill="#fff"
        dataSource={SparklineAreaData}
        xName="x"
        yName="yval"
        type="Column"
        tooltipSettings={{
          visible: true,
          format: "${x} : data ${y}",
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  );
};

export default EcomBar;
