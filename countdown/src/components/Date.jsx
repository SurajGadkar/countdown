import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function Date({ selected, setSelected, disablePrevDays }) {
  return (
    <div className="border-2 border-white bg-inherit">
      <DateTimePicker
        onChange={setSelected}
        value={selected}
        isValidDate={disablePrevDays}
      />
    </div>
  );
}

export default Date;
