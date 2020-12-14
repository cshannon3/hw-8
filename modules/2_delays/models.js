let linearModel = {
    "1": {
        id: "1",
        name: "A",
        //type: "source",
        shape:{
            x: 0,
            y: 0,
            diameter:0.5,
        },
        show: false,
        history: [],
        initial: 0.5,
        value: 0.5,
        constant: 0,
        last_val: 0,
        min_cap:-1,
        max_cap:1,
        flows_out: [
            {
                id: "directLink",
                type: "dependent",
                name: "Dependent",
                value: 1,
                delay:0,
                flow_to: "2",
            },
        ]
    },
    "2": {
        id: "2",
        name: "B",
        type: "node",
        shape:{
            x:2,
            y:0,
            diameter:0.3,
        },
        history: [],
        initial: 0.5,
        constant: 0,
        value: 0.5,
        last_val: 0,
        min_cap:-1,
        max_cap:1,
        flows_out: [
           
        ]
    },
};
let inverseModel = {
  
    "1": {
        id: "1",
        name: "C",
        //type: "source",
        shape:{
            x: 0,
            y: 0,
            diameter:1,
        },
        show: false,
        history: [],
        initial: 0.5,
        constant: 0,
        value: 0.5,
        last_val: 0,
        min_cap:-1,
        max_cap:1,
        flows_out: [
            {
                id: "directLink",
                type: "dependent",
                name: "Inverse",
                value: -1,
                delay:5,
                flow_to: "2",
            },
        ]
    },
    "2": {
        id: "2",
        name: "D",
        //type: "source",
        shape:{
            x: 2,
            y: 0,
            diameter:1,
        },
        show: false,
        history: [],
        initial: 0.5,
        constant: 0,
        value: 0.5,
        last_val: 0,
        min_cap:-1,
        max_cap:1,
        flows_out: [
            
        ]
    },
  
};



let indirectModel = {
  
    "1": {
        id: "1",
        name: "A",
        grid:4,
        //type: "source",
        shape:{
            x: 0,
            y: 0,
            delay:5,
            diameter:0.7,
        },
        show: false,
        history: [],
        initial: 0.7,
        constant: 0,
        value: 0.7,
        last_val: 0,
        min_cap:-1,
        max_cap:1,
        flows_out: [
            {
                id: "directLink",
                type: "dependent",
                name: "Inverse",
                value: 1,
                delay:5,
                flow_to: "2",
            },
        ]
    },
    "2": {
        id: "2",
        name: "B",
        //type: "source",
        shape:{
            x: 1,
            y: 0,
            delay:0,
            diameter:0.7,
        },
        show: false,
        history: [],
        initial: 0.5,
        constant: 0,
        value: 0.5,
        last_val: 0,
        min_cap:-1,
        max_cap:1,
        flows_out: [
            {
                id: "directLink",
                type: "dependent",
                name: "Inverse",
                value: 1,
                delay:5,
                flow_to: "3",
            },
        ]
    },
    "3": {
        id: "3",
        name: "C",
        //type: "source",
        shape:{
            x: 2,
            y: 0,
            diameter:0.7,
        },
        show: false,
        history: [],
        initial: 0.5,
        constant: 0,
        value: 0.5,
        last_val: 0,
        min_cap:-1,
        max_cap:1,
        flows_out: [
            
        ]
    },
   

};
