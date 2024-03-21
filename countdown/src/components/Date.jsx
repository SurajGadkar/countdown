import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function Date({ selected, setSelected }) {
  const [time, setTime] = useState(null);

  const handleTimerStart = () => {
    
  }

  return (
    <div className="border-2 border-white bg-inherit">
      <DateTimePicker onChange={setTime} value={time} />
    </div>
  );
}

export default Date;
