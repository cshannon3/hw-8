
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
let cnv,  pTop;
let models, side, unit, contentWidth;
let grid = 3;

let plotShown = false;
let currentModels=0;
let mouseDown = false;

let activeNode = null;
let currentTile = "linear";
let active= "";
// PAGE 1 - Title Page



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
    
      "indirect":{
        "name":"Indirect",
        "model":indirectModel,
      }
    },
    
    "models":linearModel,
   },
]



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
document.getElementById('a-minus').addEventListener('mousedown', (div) => { active="a-minus";});
document.getElementById('a-minus').addEventListener('mouseup', (div) => { active="";});
document.getElementById('a-plus').addEventListener('mousedown', (div) => {active="a-plus";});
document.getElementById('a-plus').addEventListener('mouseup', (div) => {active="";});
document.getElementById('a-delay-minus').addEventListener('mousedown', (div) => { active="a-delay-minus";});
document.getElementById('a-delay-minus').addEventListener('mouseup', (div) => {active="";});
document.getElementById('a-delay-plus').addEventListener('mousedown', (div) => { active="a-delay-plus";});
document.getElementById('a-delay-plus').addEventListener('mouseup', (div) => {active="";});
// document.getElementById('a-plus').addEventListener('click', (div) => {
//   clear();
//   updateModels();
// });



function setup() {

  setSimSize();
  cnv = createCanvas(window.innerWidth, unit);
 
  //cnv.hide();
  models = desc[currentModels].models;//balancemodels;
  cnv.parent('simulationBox');

  updateModels();
  isActive = false;

}
window.addEventListener("resize", ()=>{
  setSimSize();
  resizeCanvas(window.innerWidth, unit);
  clear();
  updateModels();
});



function draw() {
  if (!isActive && mouseIsPressed && checkForInput()) {
      console.log("c");
    clear();
      updateModelValues();
      updateModels();
      strokeWeight(1)
      Object.entries(models).forEach(([i, m]) => {
       
        m.last_val = m.value;
        if (m.history.length > 100) { m.history.shift() }
        beginShape();
        noFill();
       
        Object.entries(m.history).forEach(([j, h]) => {
          vertex(j,50-h *25);
        });
        endShape();
      
      });
      fill('black');
  }

}

//https://stackoverflow.com/questions/23334809/javascript-get-size-of-content-box
function property(e, p) { return parseInt(window.getComputedStyle(e, null).getPropertyValue(p));}

function checkForInput(){
  let _change=false;
  loop+=1;
  if(active ==="")return false;
  if(loop>=loopsPerUpdate){
    if(active ==="a-minus"){
      models["1"].last_val= models["1"].value;
      if(models["1"].value>models["1"].min_cap){
        models["1"].value-=0.1;
      }
     
      document.getElementById('a-val').innerHTML = models["1"].value.toFixed(2);
    }
    else if(active ==="a-plus"){
      models["1"].last_val= models["1"].value;
      if(models["1"].value<models["1"].max_cap){
        models["1"].value+=0.1;
      }
     
      document.getElementById('a-val').innerHTML = models["1"].value.toFixed(2);
    }
 
 
    else if(active ==="a-delay-minus"){

      if(models["1"].flows_out[0].delay>0){
        models["1"].flows_out[0].delay-=1;
      }
      document.getElementById('a-delay-val').innerHTML =Math.round(models["1"].flows_out[0].delay);
    }
    else if(active ==="a-delay-plus"){
      if(models["1"].flows_out[0].delay<50){
        models["1"].flows_out[0].delay+=1;
      }
      document.getElementById('a-delay-val').innerHTML =Math.round(models["1"].flows_out[0].delay);
    }

  



    if(activeNode!=="1"){
      activeNode = "1";
    }
    loop=0;
  }
  
  return true;;
}




function updateModels() {
  Object.entries(models).forEach(([i, m]) => {
    let _x =(unit * m.shape.x + side);
    let _y = (unit * m.shape.y + pTop);
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
  // for (let x = 0; x < grid; x++) {
  //   for (let y = 0; y < grid; y++) {
  //     fill('black');
  //     circle(unit * x + side, unit * y + pTop, unit / 12);
  //   }
  // }
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
       let nodeTo = models[flowOut.flow_to];
       //models[flowOut.flow_to].value
       let new_V= v* flowOut.value + models[flowOut.flow_to].constant;
       if (new_V > nodeTo.max_cap)new_V = nodeTo.max_cap;
        else if (new_V < m.min_cap)new_V= nodeTo.min_cap;
        models[flowOut.flow_to].value = new_V
       
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
    if (m.history.length > 150) { m.history.shift() }
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

  // var contentHeight = box.clientHeight- paddingpTop - paddingBottom;
  contentWidth = 0.7 * (box.clientWidth - paddingRight - paddingLeft);
console.log("size change");
  if (window.innerHeight * 0.7 < contentWidth) {

    contentWidth = window.innerHeight * 0.7;
    unit = contentWidth / grid;
    side =   (window.innerHeight -contentWidth) *0.5;
    pTop=unit/2;
    box.style.height = unit;
    box.style.width = contentWidth;
  }
  else {
    unit = contentWidth / grid;
    side =   (window.innerHeight -contentWidth) *0.5;
    pTop=unit/2;
    box.style.height = unit;
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
    stroke(0)
    strokeWeight(0)
    let delay = models["1"].flows_out[0].delay/100;
    rect(locX-unit*delay/2, locY-unit*delay/2, unit *delay, unit *delay) 
}

function getPointBetweenNodes(nodeStart, nodeEnd, pcnt){
  let m_x = unit * nodeStart.shape.x + side;
  let m_y = unit * nodeStart.shape.y + pTop;
  let m_d = unit*nodeStart.value;
  if(pcnt===0)return [m_x, m_y, m_d];
  let n_x = unit * nodeEnd.shape.x + side;
  let n_y = unit * nodeEnd.shape.y + pTop;
  let n_d = unit*nodeEnd.value;
  if(pcnt===100)return [n_x, n_y, n_d];

}
function connectNode(flow, m) {
  let node = models[flow.flow_to];
  //let nodeShape = node.shape;
  if (m.id === node.id) loopedNode(m);
  else connectorNode(m, node, Math.abs(flow.value) * 30, flow.value > 0);
}




