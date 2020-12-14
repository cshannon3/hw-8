let linearModelDelay = {
    "1": {
        id: "1",
        name: "A",
        //type: "source",
        shape:{
            x: 0,
            y: 1,
            diameter:1,
        },
        show: false,
        history: [],
        initial: 1.0,
        value: 1.0,
        constant: 0.3,
        last_val: 0,
        min_cap:-2,
        max_cap:2,
        flows_out: [
            {
                id: "directLink",
                type: "dependent",
                name: "Dependent",
                value: 0.5,
                delay:5,
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
            y:1,
            diameter:0.3,
        },
        history: [],
        initial: 0.5,
        constant: 0.3,
        value: 0.5,
        last_val: 0,
        min_cap:-2,
        max_cap:2,
        flows_out: [
           
        ]
    },
    "plus": {
      id: "plus",
        name: "+",
        tiedTo:"1",
        //type: "source",
        shape:{
            x: 0,
            y: 0,
            diameter:0.5,
        },
        show: false,
        history: [],
        initial: 0.5,
        value: 0.6,
        constant: 0.3,
        last_val: 0,
        min_cap:-2,
        max_cap:2,
        flows_out: [
        ]
    },
    "minus": {
        id: "minus",
          name: "-",
          tiedTo:"1",
          //type: "source",
          shape:{
              x: 0,
              y: 2,
              diameter:0.3,
          },
          show: false,
          history: [],
          initial: 0.5,
          value: 0.6,
          constant: 0.3,
          last_val: 0,
          min_cap:-2,
          max_cap:2,
          flows_out: [
              
          ]
      },
};



let compoundmodels = {
    "1": {
        id: "1",
        name: "Test3",
        //type: "source",
        shape:{
            x: 1,
        y:1,
            diameter:1,
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
            x:3,
            y:1,
            diameter:1,
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
            x: 1,
            y: 4,
            diameter:1,
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
