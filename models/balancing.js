let balancemodels = {
    "1": {
        id: "1",
        name: "# Customer",
        //type: "source",
        shape:{
            x: 0,
            y: 1,
            diameter:1,
            fill: 'rgba(100, 100, 255, 1)'
        },
        show: false,
        strokeStyle: 'rgba(100, 100, 255, 1)',
        history: [],
        initial: 1,
        value: 1,
        last_val: 0,
        min_cap:-0.25,
        max_cap:2,
        flows_out: [
            {
                id: "interestRate",
                type: "variable",
                name: "Interest Rate",
                value: 0.025,
                flow_to: "2",
            },
        ]
    },
    "2": {
        id: "2",
        name: "Sales",
        type: "node",
        shape:{
            x:2,
            y:3,
            diameter:1,
            fill: 'rgba(0, 255, 0, 1)'
        },
        show: true,
        strokeStyle: 'rgba(0, 255, 0, 1)',
        history: [],
        initial: 1,
        value: 1,
        last_val: 0,
        min_cap:-2,
        max_cap:2,
        flows_out: [
           
            {
                id: "interestRate",
                type: "variable",
                name: "Interest Rate",
                value: -0.05,
                flow_to: "3",
            },
        ]
    },
    "3": {
        id: "3",
        name: "Word Of Mouth",
        type: "sink",
        shape:{
            x: 3,
            y: 0,
            diameter:1,
            fill: 'rgba(255, 0, 0, 1)'
        },
        show: false,
        strokeStyle: 'rgba(255, 0, 0, 1)',
        history: [],
        initial: 1,
        value: 1,
        last_val: 0,
        min_cap:-2,
        max_cap:2,
        flows_out: [
            {
                id: "interestRate",
                type: "variable",
                name: "Interest Rate",
                value: 0.025,
                flow_to: "1",
            },
        ]
    },
};
