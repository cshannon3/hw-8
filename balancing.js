let balancemodels = {
    "1": {
        id: "1",
        name: "# Customer",
        //type: "source",
        shape:{
            x: 81.5,
        y: 309,
            diameter:150,
            fill: 'rgba(100, 100, 255, 1)'
        },
        show: false,
        strokeStyle: 'rgba(100, 100, 255, 1)',
        history: [],
        initial: 100,
        value: 100,
        last_val: 0,
        min_cap:-1000,
        max_cap:1000,
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
            x:300,
            y:150,
            diameter:150,
            fill: 'rgba(0, 255, 0, 1)'
        },
        show: true,
        strokeStyle: 'rgba(0, 255, 0, 1)',
        history: [],
        initial: 100,
        value: 100,
        last_val: 0,
        min_cap:-1000,
        max_cap:1000,
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
            x: 484.5,
            y: 292,
            diameter:150,
            fill: 'rgba(255, 0, 0, 1)'
        },
        show: false,
        strokeStyle: 'rgba(255, 0, 0, 1)',
        history: [],
        initial: 100,
        value: 100,
        last_val: 0,
        min_cap:-1000,
        max_cap:1000,
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
