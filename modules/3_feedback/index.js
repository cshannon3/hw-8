
let currentModule;
let isActive = false;
let loopsPerUpdate = 5;
let loop = 0;
let cnv;
let models, side, unit, contentWidth;
let grid = 4;
let plotShown = false;
let currentModels=0;
let mouseDown = false;

let activeNode = null;
let currentTile = "linear";
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


//https://stackoverflow.com/questions/23334809/javascript-get-size-of-content-box
function property(e, p) { return parseInt(window.getComputedStyle(e, null).getPropertyValue(p));}

function doscale(val) {return (unit * val + side);}


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
  contentWidth = 0.8 * (box.clientWidth - paddingRight - paddingLeft);
console.log("size change");
  if (window.innerHeight * 0.7 < contentWidth) {

    contentWidth = window.innerHeight * 0.8;
    box.style.height = contentWidth;
    box.style.width = contentWidth;
  }
  else {
    box.style.height = contentWidth;
  }
  unit = contentWidth / (grid);
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
    // beginShape(LINES)
    
   
    let diffx = Math.abs((m_x - m_offset * Math.cos(angle)) - (n_x + n_offset * Math.cos(angle))) / 2
      if (m_x < n_x) locX = (m_x - m_offset * Math.cos(angle)) + diffx;
      else locX = (n_x + n_offset * Math.cos(angle)) + diffx;
      let diffy = Math.abs((m_y - m_offset * Math.sin(angle)) - (n_y + n_offset * Math.sin(angle))) / 2
      if (m_y < n_y) locY = (m_y - m_offset * Math.sin(angle)) + diffy;
      else locY = (n_y + n_offset * Math.sin(angle)) + diffy;
      locY = locY + 50*Math.cos(angle)
      // console.log(locY)
      locX = locX - 50*Math.sin(angle)
      noFill();
      push();
      beginShape();
      curveVertex(m_x - m_offset * Math.cos(start_rad), m_y - m_offset * Math.sin(start_rad));
      curveVertex(m_x - m_offset * Math.cos(start_rad), m_y - m_offset * Math.sin(start_rad));
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







