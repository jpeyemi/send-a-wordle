import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    useEffect(() => {
      props.datesel(startDate)
    }, [startDate]);
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
      popperClassName="some-custom-class"
      popperPlacement="bottom-end"
      popperModifiers={[
        {
          name: "offset",
          options: {
            offset: [-350, -0],
          },
        },
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport",
            tether: true,
            altAxis: false,
          },
        },
      ]}
      />
    );
  };

export default DateSelector;