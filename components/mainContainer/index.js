import React, { useState, useEffect } from "react";
import EventJason from "../eventJason";

export default function Main() {
  // const [selectedEventData, setSelectedEventData] = useState([]);
  const [visibleTableId, setVisibleTableId] = useState();
  const [visibleData, setVisibleData] = useState({});

  const selectTabHandler = (value) => {
    setVisibleTableId(value.id);
    setVisibleData(value);
    // let index = selectedEventData.findIndex((x) => x.name === value.name);
    // if (index === -1) {
    //   setSelectedEventData([...selectedEventData, value]);
    // }
  };

  // useEffect(() => {
  //   let data = selectedEventData?.find((value) => value.id === visibleTableId);
  //   setVisibleData(data);
  // }, [selectedEventData]);

  // const headerTabHandler = (value) => {
  //   setVisibleTableId(value.id);
  //   let data = selectedEventData?.find((nValue) => nValue.id === value.id);
  //   setVisibleData(value);
  // };

  // const tabCloseHandler = (id) => {
  //   let data = selectedEventData.filter((value) => value.id != id);
  //   setSelectedEventData(data);
  // };
  console.log(visibleData, "visible");

  return (
    <div className="main-container-fullpage">
      <div>
        <header className="main-container-header">
          <div className="header-heading">Events Viewer</div>
          {visibleData.eventData ? (
            <div className="header-tabs-list">
              <div className="header-tab-active">
                {visibleData.name}
                {/* <div className="header-tab-close" onClick={() => tabCloseHandler(value.id)}>
                    X
                  </div> */}
              </div>
            </div>
          ) : null}
        </header>
      </div>
      <div className="main-container-middle">
        <div className="main-container-event-box">
          {EventJason?.map((value, i) => {
            return (
              <div
                className={value.id === visibleTableId ? "event-box-tab-active" : "event-box-tab"}
                key={i}
                onClick={() => selectTabHandler(value)}
              >
                {value.name}
              </div>
            );
          })}
        </div>
        {visibleData.eventData ? (
          <div className="table-main">
            {visibleData.eventData?.map((value, i) => {
              return (
                <div key={i} className="table-raw">
                  <div className="table-data">{value.timestamp}</div>
                  <div className="table-data">{value.raw}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="table-no-data">Events Table Is Empty</div>
        )}
      </div>
    </div>
  );
}
