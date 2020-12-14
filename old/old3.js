
//https://dbramwell.github.io/react-animate-on-scroll/#animateOut
//https://p5js.org/examples/instance-mode-instance-container.html
//https://codepen.io/zxhfighter/pen/wWKqqX
//https://github.com/fabricjs/fabric.js
//https://p5js.org/learn/curves.html
//http://www3.weforum.org/docs/WEF_Global_Risk_Report_2020.pdf
//https://github.com/VincentGarreau/particles.js/
//https://medium.com/@myroslavazel/feedback-loops-in-system-thinking-7ef06e2ff310
//https://codepen.io/alvarotrigo/pen/dGmbdv?editors=1010
//https://learningforsustainability.net/systems-thinking/
// https://www.ordinarycoders.com/blog/article/codepen-bootstrap-card-hovers
//https://medium.com/disruptive-design/tools-for-systems-thinkers-the-6-fundamental-concepts-of-systems-thinking-379cdac3dc6a
// https://codepen.io/tutsplus/pen/dMvJaO
//https://www.racheljetel.com/recent-projects/2017/7/26/systems-futures-design-thinking-sustainability-workshops-in-hong-kong
//https://www.ordinarycoders.com/blog/article/codepen-bootstrap-card-hovers
//https://medium.com/from-design-thinking-to-system-change/thinking-like-a-system-c155061b0fb
//https://www.thersa.org/reports/from-design-thinking-to-system-change
//https://www.thersa.org/globalassets/pdfs/reports/rsa_from-design-thinking-to-system-change-report.pdf

let currentModule;
let isActive = false;
let loopsPerUpdate = 5;
let loop = 0;
let cnv;
let models, side, unit, contentWidth;
let grid = 3;
let plotShown = false;
let currentModels=0;
let mouseDown = false;

let activeNode = null;
let currentTile = "linear";
// PAGE 1 - Title Page

// new fullpage('#fullpage', {
//     sectionsColor: ['#112C4B', '#112C4B', '#C0C0C0','#C0C0C0','#C0C0C0','#C0C0C0', '#ADD8E6', '#C0C0C0', '#ADD8E6'],
//     scrollHorizontally: true,
//     onLeave: function (index, nextIndex, direction) {
//     }
// });

particlesJS("particles-js",
    { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    });



//let modelStarters = [linearModel, secondOrder, balancemodels, compoundmodels,compoundmodels,compoundmodels];
let desc = [
  {
    "title":"Connections", 
    "subtitle":"Relationships", 
    "description":  `
    Interconnectedness refers to how different parts of the system relate to each other. You've probably heard about how the world is getting more connected. But what does it mean to be connected?
    
   <br/> A connection means that the behavior of one person is influenced by another person. Some connections have a strong inflences on us, while others we don't even notice.
    The more connected a system is, the greater influence people have on each other's behavior.`,
    "initialTile":"linear",
    "tileList":["linear", "inverse", "nonlinear", "indirect"],
    "tiles":{
      "linear": {
        "name":"Linear",
        "model":linearModel,
      },
      "inverse":{
        "name":"Inverse",
        "model":inverseModel,
      },
      "nonlinear":{
        "name":"Nonlinear",
        "model":nonlinearModel,
      },
      "indirect":{
        "name":"Indirect",
        "model":indirectModel,
      }
    },
    
    "models":linearModel,
   },
  {
    "title":"Delays", 
    "subtitle":"Principle 1", 
    "initialTile":"linear",
    "tileList":["linear", "inverse", "nonlinear", "indirect"],
    "tiles":{
      "linear": {
        "name":"Linear",
        "model":linearModel,
      },
      "inverse":{
        "name":"Inverse",
        "model":inverseModel,
      },
      "nonlinear":{
        "name":"Nonlinear",
        "model":nonlinearModel,
      },
      "indirect":{
        "name":"Indirect",
        "model":indirectModel,
      }
    },
    
    "models":linearModel,
    "description":`Interconnectedness refers to how different parts of the system relate to each other. This can be seen at all scales, from the interdependencies on parts in a supply chains, to `
  },
  {
    "title":"Feedback", 
    "description":"lc",
    "initialTile":"linear",
    "tiles":{
      "linear": {
        "name":"linear",
        "model":linearModel,
      },
    },
    "models":compoundmodels,
  },
  {
    "title":"Balancing Feedback", 
    "description":"lc",
    "initialTile":"linear",
    "tiles":{
      "linear": {
        "name":"linear",
        "model":linearModel,
      },
    },
    "models":compoundmodels,
  },
  {
    "title":"Reinforcing Feedback", 
    "description":"",
    "models":compoundmodels,
  },
]
// PAGE 2 - QUOTES

// TO DO Fading in and out AI
async function fading() {

  var increment = 0.045;
  var opacity = -0.2;
  let direction = 'fadeIn';
  document.getElementById('quote1').style.opacity = 0.0;
  var instance = window.setInterval(function () {
    if (opacity > 0)
      document.getElementById('quote1').style.opacity = opacity

    if (direction === 'fadeIn') {
      opacity = opacity + increment;
      if (opacity > 1) {
        window.clearInterval(instance);
      }
    }
  }, 100)
}



document.getElementById('connection-module').addEventListener('click', () => {
  console.log("op")
  let c= document.getElementById('pop-up');
  c.style.display="block";
 
  });

function onPopUp(){


    document.getElementById('pop-up-content').addEventListener('click', (div) => {
      console.log(div.target.classList.length);
      let last = div.target.classList[div.target.classList.length-1];
      console.log(last);
      if(desc[currentModels].tileList.includes(last) && currentTile!==last){
        currentTile=last;
        models =  desc[currentModels].tiles[currentTile].model;
        clear();
        updateModels();
      }
    });


    document.getElementById('button-left').addEventListener('click', () => {
      currentModels-=1;
      if(currentModels<0){currentModels=desc.length-1;}
      document.getElementById('pop-up-title').innerHTML=desc[currentModels].title;
      
      let ihtml= `<p>${desc[currentModels].description}</p>`;
      Object.entries(desc[currentModels].tiles).forEach(([key, value]) => {
        const k= key;
        ihtml+=`
        <div class="card my-1">
        <div class="card-body model-option ${key}">
            <p class="model-option ${key}">${value.name}</p>
        </div>
      </div>
        `
    });
      document.getElementById('pop-up-content').innerHTML=ihtml;
      clear();
      models = desc[currentModels].models;
      updateModels();
    });

    document.getElementById('button-right').addEventListener('click', () => {
      currentModels+=1;
      if(currentModels>=desc.length){currentModels=0;}
      document.getElementById('pop-up-title').innerHTML=desc[currentModels].title;
      let ihtml= `<p>${desc[currentModels].description}</p>`;
      Object.entries(desc[currentModels].tiles).forEach(([key, value]) => {
        ihtml+=`
        <div class="card my-1">
        <div class="card-body model-option ${key}">
            <p class="model-option ${key}">Non-Linear</p>
        </div>
      </div>
        `
    });
      document.getElementById('pop-up-content').innerHTML=ihtml;
      clear();
      models = desc[currentModels].models;
      updateModels();
    });

}
// document.getElementById('show-plot').addEventListener('click', () => {
//   if (plotShown) {
//     document.getElementById('chartContent').style.display = "none";
//     document.getElementById('simulationBox').style.display = "block";
//     plotShown = false;
//   } else {
//     document.getElementById('chartContent').style.display = "block";
//     document.getElementById('simulationBox').style.display = "none";
//     plotShown = true;
//   }
// });

//https://stackoverflow.com/questions/23334809/javascript-get-size-of-content-box
function property(e, p) {
  return parseInt(window.getComputedStyle(e, null).getPropertyValue(p));
}

function doscale(val) {
  return (unit * val + side);
}


function checkForInput(){
  let _change=false;
  Object.entries(models).forEach(([i, m]) => {
    let _x = doscale(m.shape.x);
    let _y = doscale(m.shape.y);
    if (mouseIsPressed && m.tiedTo && dist(_x, _y, mouseX, mouseY) < unit * m.shape.diameter / 2) {
    
      loop+=1;
      if(!mouseDown){
        loop=loopsPerUpdate;
        mouseDown=true;
      }
      if(loop===loopsPerUpdate){
        
        if(m.name=="+"){
          models[m.tiedTo].last_val= models[m.tiedTo].value;
          models[m.tiedTo].value+=0.1;
        }else{
          models[m.tiedTo].last_val =  models[m.tiedTo].value;
          models[m.tiedTo].value-=0.1;
        }
        if(activeNode!==m.tiedTo){
          activeNode = m.tiedTo;
        }
        loop=0;
        _change=true;
        return _change;
      }
          
    }
    //else {}
  });
  return _change;
}




function updateModels() {
  Object.entries(models).forEach(([i, m]) => {
    let _x = doscale(m.shape.x);
    let _y = doscale(m.shape.y);
   if(m.name=="+" ||m.name=="-" ){
    fill('grey');
   }
    else if(m.value>0){
      fill('green');
    }else{
      fill('red')
    }
    if(activeNode===i){
      stroke('black');
      strokeWeight(3);
    }else{
      stroke(0)
      strokeWeight(0);
    }
   
    circle(_x, _y, unit * m.value - 10);
    strokeWeight(0);
    textSize(12);// TODO change depending 
    fill('black');
    //text(Math.round(m.value), _x, _y);
    text(m.name, _x, _y );
    textAlign(CENTER);
    Object.entries(m.flows_out).forEach(([i, flow]) => {
      connectNode(flow, m);
    });
  });
}



function updateModelValues() {
  Object.entries(models).forEach(([i, m]) => {
    //  if(i==="1"){
    let v = m.last_val;
    let canGo=true;
    m.flows_out.forEach((flowOut) => {

    if(flowOut.delay ){
      if(m.history.length<flowOut.delay){
        canGo=false;
      }
      else {
        v= m.history[m.history.length-flowOut.delay];
      }
    }
    if(canGo){
     if (flowOut.type === "dependent"){
       //let nodeTo = models[flowOut.flow_to];
       models[flowOut.flow_to].value= v* flowOut.value + models[flowOut.flow_to].constant;
       ///console.log(nodeTo);
      }
      else if(flowOut.type === "exp"){
        models[flowOut.flow_to].value= Math.pow(v, flowOut.value);
      }
      else{
      let changeVal = 0;
      if (flowOut.type === "fixed") {
        if (flowOut.value < v) { changeVal = flowOut.value; }
        else { changeVal = v; }
        v -= changeVal;
        if (v > m.max_cap)
          m.value = m.max_cap;
        else if (v < m.min_cap)
          v = m.min_cap;
      }
  
      else { changeVal = v * flowOut.value; }
     console.log(changeVal);
      models[flowOut.flow_to].value += changeVal;
      
      if (models[flowOut.flow_to].value > models[flowOut.flow_to].max_cap)
        models[flowOut.flow_to].value = models[flowOut.flow_to].max_cap;
      else if (models[flowOut.flow_to].value < models[flowOut.flow_to].min_cap)
        models[flowOut.flow_to].value = models[flowOut.flow_to].min_cap;
    }
  }
    });
  });

  Object.entries(models).forEach(([i, m]) => {
    m.last_val = m.value;
    m.history.push(m.value);
    if (m.history.length > 300) { m.history.shift() }
    beginShape();
    noFill();
    Object.entries(m.history).forEach(([j, h]) => {
      vertex(j, 50 - h / 20);
    });
    endShape();
  });
}

function setSimSize(){
  var box = document.getElementById('simulationBox');
  var paddingLeft = property(box, 'padding-left');
  var paddingRight = property(box, 'padding-right');

  // var contentHeight = box.clientHeight- paddingTop - paddingBottom;
  contentWidth = 0.9 * (box.clientWidth - paddingRight - paddingLeft);
console.log("size change");
  if (window.innerHeight * 0.8 < contentWidth) {

    contentWidth = window.innerHeight * 0.8;
    box.style.height = contentWidth;
    box.style.width = contentWidth;
  }
  else {
    box.style.height = contentWidth;
  }
  unit = contentWidth / grid;
  side = unit * 0.5;
  
}


function setup() {

  setSimSize();
  cnv = createCanvas(contentWidth, contentWidth);
  //cnv.hide();
  models = desc[currentModels].models;//balancemodels;
  cnv.parent('simulationBox');

  updateModels();
  isActive = false;
}
window.addEventListener("resize", ()=>{
  setSimSize();
  resizeCanvas(contentWidth, contentWidth);
  clear();
  updateModels();
});



function draw() {
  if (!isActive && mouseIsPressed && checkForInput()) {
      clear();
      updateModelValues();
      updateModels();
      Object.entries(models).forEach(([i, m]) => {
        m.last_val = m.value;
        m.history.push(m.value);
        if (m.history.length > 300) { m.history.shift() }
        beginShape();
        noFill();
        Object.entries(m.history).forEach(([j, h]) => {
          vertex(j, 50 - h / 20);
        });
        endShape();
      });
      fill('black');
  }
  if (isActive) {
    loop += 1;
    let doUpdate = loop > loopsPerUpdate;
    if (doUpdate) loop = 0;
    if (doUpdate) {
      clear();
      updateModelValues();
      updateModels();

      Object.entries(models).forEach(([i, m]) => {
        m.last_val = m.value;
        m.history.push(m.value);
        if (m.history.length > 300) { m.history.shift() }
        beginShape();
        noFill();
        Object.entries(m.history).forEach(([j, h]) => {
          vertex(j, 50 - h / 20);
        });
        endShape();
      });
      fill('black');
    }
  }
}


function connectorNode(m, node, thickness, isPos, curve=false) {
  var [m_x, m_y, m_d] = getPointBetweenNodes(m, node, 0);
  var [n_x, n_y, n_d] = getPointBetweenNodes(m, node, 100);
  var angle = atan2(m_y - n_y, m_x - n_x); //gets the angle of the line
  let n_offset = Math.abs(n_d / 2);
  let m_offset = Math.abs(m_d / 2);
  let start_rad = angle-Math.PI/6;
  let  end_rad = angle+Math.PI/6;
  
  strokeWeight(thickness/10)
 
  if (isPos) stroke('green')
  else stroke('red') //
  let locX, locY;
    push()// beginShape(LINES)
    noFill();
    let diffx = Math.abs((m_x - m_offset * Math.cos(angle)) - (n_x + n_offset * Math.cos(angle))) / 2
      if (m_x < n_x) locX = (m_x - m_offset * Math.cos(angle)) + diffx;
      else locX = (n_x + n_offset * Math.cos(angle)) + diffx;
      let diffy = Math.abs((m_y - m_offset * Math.sin(angle)) - (n_y + n_offset * Math.sin(angle))) / 2
      if (m_y < n_y) locY = (m_y - m_offset * Math.sin(angle)) + diffy;
      else locY = (n_y + n_offset * Math.sin(angle)) + diffy;

    if(curve){
      beginShape()
      curveVertex(m_x - m_offset * Math.cos(start_rad), m_y - m_offset * Math.sin(start_rad));
      curveVertex(m_x - m_offset * Math.cos(start_rad), m_y - m_offset * Math.sin(start_rad));
      //centerpoint == locX, locY, now i want it above by z
    // console.log(locY)
      locY = locY + 50*Math.cos(angle)
    // console.log(locY)
      locX = locX - 50*Math.sin(angle)
      curveVertex(locX, locY);
      curveVertex(locX, locY);
      curveVertex(locX, locY);
      curveVertex(n_x + n_offset * Math.cos(end_rad), n_y + n_offset * Math.sin(end_rad));
      curveVertex(n_x + n_offset * Math.cos(end_rad), n_y + n_offset * Math.sin(end_rad));pop()
      push() //start new drawing state
      translate(n_x, n_y); //translates to the destination vertex
      rotate(end_rad - HALF_PI); //rotates the arrow point
      triangle(-10, n_offset + 10, 10, n_offset + 10, 0, n_offset);
      pop();
    }else{
       beginShape(LINES);
       vertex(m_x - m_offset * Math.cos(angle), m_y - m_offset * Math.sin(angle))
        vertex(n_x + n_offset * Math.cos(angle), n_y + n_offset * Math.sin(angle)) 
        push() //start new drawing state
        translate(n_x, n_y); //translates to the destination vertex
        rotate(angle - HALF_PI); //rotates the arrow point
        triangle(-10, n_offset + 10, 10, n_offset + 10, 0, n_offset);
        pop();
    }
    
    
    endShape()
    
   
    fill('blue')

    circle(locX, locY, unit / 6);
}

function getPointBetweenNodes(nodeStart, nodeEnd, pcnt){
  let m_x = unit * nodeStart.shape.x + side;
  let m_y = unit * nodeStart.shape.y + side;
  let m_d = unit*nodeStart.value;
  if(pcnt===0)return [m_x, m_y, m_d];
  let n_x = unit * nodeEnd.shape.x + side;
  let n_y = unit * nodeEnd.shape.y + side;
  let n_d = unit*nodeEnd.value;
  if(pcnt===100)return [n_x, n_y, n_d];

}





function connectNode(flow, m) {
  let node = models[flow.flow_to];
  //let nodeShape = node.shape;
  if (m.id === node.id) loopedNode(m);
  else connectorNode(m, node, Math.abs(flow.value) * 30, flow.value > 0);
}




    function loopedNode(m) {
      let x = m.shape.x; let y = m.shape.y;
      let d = m.shape.diameter;
      noFill();
      stroke(m.shape.fill);
      beginShape();
      curveVertex(x, y);
      curveVertex(x, y);
      curveVertex(x + 80, y + 90);
      curveVertex(x, y + 120);
      curveVertex(x - 80, y + 90);
      curveVertex(x, y);
      curveVertex(x, y);
      endShape();
      fill(m.shape.fill);
      push() //start new drawing state
      let offset = m.shape.diameter / 2;
      var angle = atan2(80, 90); //gets the angle of the line
      translate(x, y); //translates to the destination vertex
      rotate(angle - HALF_PI); //rotates the arrow point
      triangle(-10, offset + 10, 10, offset + 10, 0, offset);
      // triangle(-10, offset, 10, offset, 0,offset/2); //draws the arrow point as a triangle
      pop();
  }
  









/*
Want loop to be above if primarily going from left to right, below if going from right to left, left if ging from up to down and right if going from down to up




*/









// let gData = {
//   "layout": {
//     "autosize": true,
//     "height": 690,
//     "scene": {
//       "aspectratio": {
//         "x": 1,
//         "y": 1,
//         "z": 1
//       },
//       "camera": {
//         "center": {
//           "x": 0,
//           "y": 0,
//           "z": 0
//         },
//         "eye": {
//           "x": 1.0919953574036658,
//           "y": 1.9460497462348987,
//           "z": 0.15005898984631597
//         },
//         "up": {
//           "x": 0,
//           "y": 0,
//           "z": 1
//         }
//       },
//       "xaxis": {
//         "title": "Sample #"
//       },
//       "yaxis": {
//         "title": "Wavelength"
//       },
//       "zaxis": {
//         "title": "OD"
//       }
//     },
//     "showlegend": false,
//     "title": "Ribbon Plot",
//     "width": 1531
//   }
// }

  //cnv.show();
  // for (let x = 0; x < grid; x++) {
  //   for (let y = 0; y < grid; y++) {
  //     fill('black');
  //     circle(unit * x + side, unit * y + side, unit / 12);
  //   }
  // }
  // Object.entries(models).forEach(([i, m]) => {
    //   if (dist(unit * m.shape.x + side, unit * m.shape.y + side, mouseX, mouseY) < unit * m.shape.diameter / 2 && mouseIsPressed) {
    //     activeNode = i;
    //     // m.shape.x = mouseX;
    //     // m.shape.y = mouseY;
    //     console.log(m.shape)
    //     strokeWeight(3);
    //     stroke(3);
    //   }
    //   else{
    //     stroke(0);
    //     strokeWeight(0);
    //   }
    //   fill(m.shape.fill);
    //     circle(unit * m.shape.x + side, unit * m.shape.y + side, unit * m.shape.diameter-10);
    //     stroke(0);
    //     strokeWeight(0);
    //     textSize(14);// TODO change depending 
    //     fill('black');
    //     text(Math.round(m.value), unit * m.shape.x + side, unit * m.shape.y + side);
    //     text(m.name, unit * m.shape.x + (side * (0.1 + (m.shape.x) / 3)), unit * m.shape.y + side - 20);
    //     textAlign(CENTER);
    //     Object.entries(m.flows_out).forEach(([i, flow]) => {
    //       connectNode(flow, m);
    //     });
    // }

    //);

        // Don't allow moving 

        // fill(m.shape.fill);
        // if (dist(unit * m.shape.x + side, unit * m.shape.y + side, mouseX, mouseY) < unit * m.shape.diameter / 2 && mouseIsPressed) {
        //   activeNode = i;
        //   // m.shape.x = mouseX;
        //   // m.shape.y = mouseY;
        //   console.log(m.shape)
        // }
        // if (activeNode === i) {
        //   strokeWeight(3);
        //   stroke(3);
        // }
        // else {
        //   stroke(0);
        //   strokeWeight(0);
        // }

        // circle(unit * m.shape.x + side, unit * m.shape.y + side, unit * m.shape.diameter);
        // stroke(0);
        // strokeWeight(0);
        // textSize(14);// TODO change depending 
        // fill('black');
        // text(Math.round(m.value), unit * m.shape.x + side, unit * m.shape.y + side);
        // text(m.name, unit * m.shape.x + (side * (0.1 + (m.shape.x) / 3)), unit * m.shape.y + side - 20);
        // textAlign(CENTER);

        // Object.entries(m.flows_out).forEach(([i, flow]) => {
        //   connectNode(flow, m);
        // });
        // //  }
// PAGE 3
/*
*/
// let cardData= [
// {
//   "title":"Design Thinking",
//   "img":"assets/st.png",
//   "front-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
//   "back-description":`"Interconnectedness is the "`,
//   "onclick":()=>{}
// },
// {
//   "title":"Systems Thinking",
//   "img":"assets/st.png",
//   "front-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
//   "back-description":`"Interconnectedness is the "`,
//   "onclick":()=>{},

// },
// {
//   "title":"Social Innovation",
//   "img":"assets/st.png",
//   "front-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
//   "back-description":`"Interconnectedness is the "`,
//   "onclick":()=>{}
//   },
// ];
// let innerHtml2 =""
// cardData.forEach((d)=>{
//   innerHtml2 += `<div class="col-12 p-2">
//   <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
//       <div class="mainflip">
//           <div class="frontside">
//               <div class="card">
//                   <div class="card-body d-flex ">
//                       <p><img class="card-img-top" src="assets/st.png" alt="card image"></p>
//                      <div>
//                       <p class="card-text flip-card-title">${d.title}</p>
//                       <p class="card-text ">${d["front-description"]}</p>
//                       </div>
//                   </div>
//               </div>
//           </div>
//           <div class="backside">
//               <div class="card">
//                   <div class="card-body text-center mt-2">
//                       <h4 class="card-title">${d.title}</h4>
//                       <p class="card-text">${d["back-description"]}
//                       </p>
//                   </div>
//               </div>
//           </div>
//       </div>
//   </div>
// </div>`
// });


// //mainScreen.innerHTML = innerHtml;


// let data2 = {
//   "Interconnectedness":{
//   "title":"Interconnectedness",
//   "img":"assets/st.png",
//   "front-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
//   "back-description":`"Interconnectedness is the "`,
//   "onclick":()=>{console.log("Click")}
// },
// "Emergence":{
//   "title":"Emergence",
//   "img":"assets/st.png",
//   "front-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
//   "back-description":`"Interconnectedness is the "`,
//   "onclick":()=>{console.log("Click")}
// },
// "Feedback":{
//   "title":"Feedback",
//   "img":"assets/st.png",
//   "front-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
//   "back-description":`"Interconnectedness is the "`,
//   "onclick":()=>{console.log("Click")}
// },
// };



// let innerHtml =""
// Object.entries(data2).forEach(([key, d]) => {
//   innerHtml += `
//               <div class="card col-12 m-2" id="${key}>
//                   <div class="card-body d-flex ">
//                       <p><img class="card-img-top" src="assets/st.png" alt="card image"></p>
//                      <div>
//                       <p class="card-text flip-card-title">${d.title}</p>
//                       <p class="card-text ">${d["front-description"]}</p>
//                       </div>
//                   </div>
// </div>`
// });

// let mainScreen = document.getElementById("main-info-cards");
// mainScreen.innerHTML = innerHtml;
// let check = document.getElementById("Emergence");
// console.log(check);
// mainScreen.addEventListener("click", (div)=>{
//   console.log(div);
// });









// let mainScreen = document.getElementById("main-info-cards");
// let data = [
// {
//   "title":"Design Thinking",
//   "front-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
//   "back-description":`"Design Thinking is an iterative process in which we seek
//   to understand the user, challenge assumptions, and redefine problems in an
//   attempt to identify alternative strategies and solutions that might not be
//   instantly apparent with our initial level of understanding"`,
//   "onclick":()=>{}
// }];

// let innerHtml =""
// data.forEach((d)=>{
//   innerHtml += `<div class="col-12 p-2">
//   <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
//       <div class="mainflip">
//           <div class="frontside">
//               <div class="card">
//                   <div class="card-body text-center">
//                       <p><img class="card-img-top" src="assets/st.png" alt="card image"></p>
//                       <p class="card-text ttl">${d.title}</p>
//                       <p class="card-text">${d["front-description"]}</p>
//                   </div>
//               </div>
//           </div>
//           <div class="backside">
//               <div class="card">
//                   <div class="card-body text-center mt-2">
//                       <h4 class="card-title">${d.title}</h4>
//                       <p class="card-text">${d["back-description"]}
//                       </p>
//                   </div>
//               </div>
//           </div>
//       </div>
//   </div>
// </div>`
// });
//  mainScreen.innerHTML = innerHtml;









// PAGE 3 - Main Tiles


// // TODO Make Expanded view of systems - add 
// document.getElementById("tile1").addEventListener("click", function() {

//   let d =  document.getElementById("overlay");
//   console.log(d);
//   d.style.display = "block";
//   d.innerHTML=`<div class="jumbotron">
//   <h1 class="display-4 p-3">Social Innovation</h1>
//   <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//   <hr class="my-4">
//   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//   <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//   </div>`;
// });

// document.getElementById("tile1").addEventListener("click", function() {

// });

// let string = `Systems Thinking is an approach to thinking about how interconnected parts() relate to each other to result in emergent higher-level behavior. 

// How do millions of neurons connected in the right ways lead to human consciousness?
// How does someone's relationships, habits, diet, environment, history, and culture interrelate to create a single identity?
// How do all of the members of a community interconnect to create community 'cultures' and social norms?

// As the world gets more connected, more of the problems we'll be attempting to solve will be systems problems. We need to better understand these systems if we want to solve the right problems.

// The first step is to understand the three features that make up a system:


// `;






// new fullpage('#fullpage', {
//     sectionsColor: ['#112C4B', '#112C4B', '#C0C0C0', '#ADD8E6', '#112C4B', '#C0C0C0', '#ADD8E6', '#C0C0C0', '#ADD8E6'],
//     onLeave: function (index, nextIndex, direction) {
//         console.log(nextIndex.index);
//         clear();
//         if(nextIndex.index == 1){
//           fading().then(()=>{ console.log("done");   });
//         }
//         if (nextIndex.index === 6) {
//             models = compoundmodels;
//             cnv.parent('section2');
//             cnv.show();
//             Object.entries(models).forEach(([i, m]) => {
//                 // fill(m.shape.fill);
//                 console.log(m);
//                 let inp = createInput(m.initial);
//                 inp.parent('section2');
//                 inp.position(m.shape.x, m.shape.y);
//                 inp.style('width', '40px');
//                 m.shape.inputButton = inp;
//                 circle(m.shape.x, m.shape.y, m.shape.diameter);
//             });
//             isActive = true;
//         }
//         else if (nextIndex.index === 7) {
//             models = balancemodels;
//             // let cnv = createCanvas(710, 400);
//             cnv.parent('section3');
//             cnv.show();
//             Object.entries(models).forEach(([i, m]) => {
//                 // fill(m.shape.fill);
//                 let inp = createInput(m.initial);
//                 inp.parent('section3');
//                 inp.position(m.shape.x, m.shape.y);
//                 inp.style('width', '40px');
//                 m.shape.inputButton = inp;
//                 circle(m.shape.x, m.shape.y, m.shape.diameter);
//             });
//             isActive = true;
//         }
//     }
// });



// particlesJS("particles-js",
//     { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
//     });

// function mouseReleased() {
//     // isActive=false;
//     //console.log(mouseX, mouseY);
// };



// new fullpage('#fullpage', {
//     sectionsColor: ['#112C4B', '#112C4B', '#C0C0C0','#C0C0C0','#C0C0C0','#C0C0C0', '#ADD8E6', '#C0C0C0', '#ADD8E6'],
//     scrollHorizontally: true,
//     onLeave: function (index, nextIndex, direction) {
//     }
// });


/*
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }

TODO Models
-View -Adding in +/-
- Graph
*/

		//using index
		// if(nextIndex.index == 2){
		// 	myMove();
		// }


       // afterLoad: function(origin, destination, direction){
    //     //var loadedSection = this;
    //     	//using index
	// 	if(origin.index == 1){
	// 		fading().then(()=>{
    //             console.log("done");
    //             fullpage_api.moveSlideDown();
    //         });
	// 	}
	// 	//using index
	// 	if(origin.index == 2){
	// 		myMove();
	// 	}
	// }