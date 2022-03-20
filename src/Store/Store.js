let store = {
    _state : {
        schedule: {
            '2022-03-01 00:00:00' : {
               events:[
                   {id:0, eventId:'event0', date: new Date(2022, 2,1) ,content: "10:00 Проспект Юрия Гагарина д. 22"},
                   {id:0, eventId:'event1', date: new Date(2022, 2,1) ,content: "Свободная дата"}
               ]
            },
            '2022-03-05 00:00:00' : {
                events:[
                    {id:0, eventId:'event1', date: new Date(2022, 2,5) ,content: "Свободная дата"},
                ]
            },
            '2022-03-18 00:00:00' : {
                events:[
                    {id:0, eventId:'event2', date: new Date(2022, 2,18) ,content: "16:00 Проспект Юрия Гагарина д. 22"},
                ]
            }

        },
        events: {
            event0: {
                name: 'Уборка',
                isVisible: true
            },
            event1: {
                name: 'Свободная дата',
                isVisible: false
            },
            event2: {
                name: 'Переделка',
                isVisible: true
            }
        }

    },
    get state() {
        return this._state;
    },
    _callSubscriber(state)  {
        return alert('State changed!');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case 'rerender':
                this._callSubscriber(store.state);
                break;
        }

    }
};

export default store;
window.store = store;
