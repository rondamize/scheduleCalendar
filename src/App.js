import Calendar from 'react-calendar'
import './customStyles.css';
import './App.css';
import React, { useState } from 'react';
import Label from "./components/Label/Label";
import Filter from "./components/Filter/Filter";

function App(props) {

    let state = props.store.state;
    const datesToAddContentTo = Object.keys(state.schedule);

    function tileContent({ date, view }) {
        if (view === 'month') {
            let elem = datesToAddContentTo.find(dDate => new Date(dDate).getTime() == date.getTime());
            if (elem) {
                let currentDayEvents = state.schedule[elem].events;
                currentDayEvents = currentDayEvents.filter(event => state.events[event.eventId].isVisible);
                return currentDayEvents.map(event => {
                        return <Label event={event}/>
                })
            }
        }
    }

    const [value, setValue] = useState(new Date());

    let onChange = (value) => {
        setValue(value);
    }

    return (
          <div class='app-wrapper'>
              <Calendar
                  onChange={onChange}
                  value={value}
                  tileContent={tileContent}
              />
              <Filter events={props.store.state.events} dispatch={props.dispatch}/>
          </div>
    );
}

export default App;
