import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:text-gray-200 dark:bg-secondary-dark-bg">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl mt-2 mb-4 font-semibold">Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
              background={currentMode === "Dark" ? "#33373E" : "#fff"}
            />
          </div>
          <div>
            <p className="text-2xl mt-2 mb-4 font-semibold">Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
