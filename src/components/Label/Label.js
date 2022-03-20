import React from 'react';
import classes from './Label.module.css';

function Label(props) {
    switch (props.event.eventId) {
        case 'event0':
            return (
                <div>
                    <div className={classes.label0}>
                        {props.event.content}
                    </div>
                </div>
            );
            break;
        case 'event1':
            return (
                <div>
                    <div className={classes.label1}>
                        {props.event.content}
                    </div>
                </div>
            );
        case 'event2':
            return (
                <div>
                    <div className={classes.label2}>
                        {props.event.content}
                    </div>
                </div>
            );
            break;
    }
}

export default Label;
