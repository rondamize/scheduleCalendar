import React from 'react';
import classes from './Filter.module.css';

function Filter(props) {

    let handleChange0 = () => {
        props.events['event0'].isVisible = !props.events['event0'].isVisible;
        console.log(props.events);
        props.dispatch({type:'rerender'});
    }

    let handleChange1 = () => {
        props.events['event1'].isVisible = ! props.events['event1'].isVisible;
        console.log(props.events);
        props.dispatch({type:'rerender'});
    }

    let handleChange2 = () => {
        props.events['event2'].isVisible = ! props.events['event2'].isVisible;
        console.log(props.events);
        props.dispatch({type:'rerender'});
    }

    return (
        <div>
            <div className={classes.filterArea}>
                <div>
                    <input type="checkbox"
                           checked={props.events['event0'].isVisible}
                           onChange={handleChange0}
                           id="0" name="event0" />
                    <label className={classes.filterLabel}
                           style={{'background-color': '#76baff'}}
                           htmlFor="event0">Уборка</label>
                </div>
                <div>
                    <input type="checkbox"
                           checked={props.events['event1'].isVisible}
                           onChange={handleChange1}
                           id="1" name="event1" />
                    <label className={classes.filterLabel}
                           style={{'background-color': 'aquamarine'}}
                           htmlFor="event1">Свободная дата</label>
                </div>
                <div>
                    <input type="checkbox"
                           checked={props.events['event2'].isVisible}
                           onChange={handleChange2}
                           id="2" name="event2" />
                    <label className={classes.filterLabel}
                           style={{'background-color': 'indianred'}}
                           htmlFor="event2">Переделка</label>
                </div>
            </div>
        </div>
    );
}

export default Filter;
