import React, { useState, useEffect } from "react";
import EventJason from "../eventJason";

export default function Main() {
  const [selectedEventData, setSelectedEventData] = useState([]);
  const [visibleTableId, setVisibleTableId] = useState();
  const [visibleData, setVisibleData] = useState({});

  const selectTabHandler = (value) => {
    setVisibleTableId(value.id);
    setSelectedEventData([...selectedEventData, value]);
  };

  useEffect(() => {
    let data = EventJason.find((value) => value.id === visibleTableId);
    setVisibleData(data);
  }, [visibleTableId]);

  const headerTabHandler = (value) => {
    setVisibleTableId(value.id);
  };

  const tabCloseHandler = (id) => {
    let data = selectedEventData.filter((value) => value.id != id);
    setSelectedEventData(data);
  };

  return (
    <div className="main-container-fullpage">
      <div>
        <header className="main-container-header">
          <div className="header-heading">Events Viewer</div>
          <div className="header-tabs-list">
            {selectedEventData.length > 4 ? <div>{`<`}</div> : null}{" "}
            {selectedEventData.map((value, i) => {
              return (
                <div
                  key={i}
                  className={value.id === visibleTableId ? "header-tab-active" : "header-tab"}
                  onClick={() => headerTabHandler(value)}
                >
                  {value.name}
                  <div className="header-tab-close" onClick={() => tabCloseHandler(value.id)}>
                    X
                  </div>
                </div>
              );
            })}
            {selectedEventData.length > 4 ? <div>{`>`}</div> : null}
          </div>
        </header>
      </div>
      <div className="main-container-middle">
        <div className="main-container-event-box">
          {EventJason?.map((value, i) => {
            return (
              <div className="event-box-tab" key={i} onClick={() => selectTabHandler(value)}>
                {value.name}
              </div>
            );
          })}
        </div>
        {visibleData ? (
          <div className="table-main">
            {visibleData?.eventData?.map((value, i) => {
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