import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HeaderBar } from './components/HeaderBar';
import { SingleDateView } from './components/SingleDateView';
import data from './data/data.json';
import moment from 'moment';

export const VIEW = {
  CALENDAR: "CALENDAR",
  SINGLE_DATE: "SINGLE_DATE",
  SINGLE_DATE_NO_NUMBER: "SINGLE_DATE_NO_NUMBER",
  DESCRIPTION_OPEN: "DESCRIPTION_OPEN",
}

function App() {
  const [view, setView] = useState(VIEW.SINGLE_DATE);
  const [objIdx, setObjIdx] = useState(moment().dayOfYear())

  return (
    <>
      <div className="main">
        <HeaderBar {...{ view, setView }} />
        <SingleDateView {...{ view, setView, objIdx, setObjIdx, data }} />
      </div>
    </>
  );
}

export default App;
