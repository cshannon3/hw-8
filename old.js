

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
/*
    new fullpage('#fullpage', {
        sectionsColor: ['#112C4B', '#112C4B', '#C0C0C0', '#ADD8E6', '#112C4B', '#C0C0C0', '#ADD8E6', '#C0C0C0', '#ADD8E6'],
        onLeave: function (index, nextIndex, direction) {
            console.log(nextIndex.index);
            clear();
            if (nextIndex.index === 6) {
                models = compoundmodels;
                cnv.parent('section2');
                cnv.show();
                Object.entries(models).forEach(([i, m]) => {
                    // fill(m.shape.fill);
                    let inp = createInput(m.initial);
                    inp.parent('section2');
                    inp.position(m.shape.x, m.shape.y);
                    inp.style('width', '40px');
                    m.shape.inputButton = inp;
                    circle(m.shape.x, m.shape.y, m.shape.diameter);
                });
                isActive = true;
            }
            else if (nextIndex.index === 7) {
                models = balancemodels;
                // let cnv = createCanvas(710, 400);
                cnv.parent('section3');
                cnv.show();
                Object.entries(models).forEach(([i, m]) => {
                    // fill(m.shape.fill);
                    let inp = createInput(m.initial);
                    inp.parent('section3');
                    inp.position(m.shape.x, m.shape.y);
                    inp.style('width', '40px');
                    m.shape.inputButton = inp;
                    circle(m.shape.x, m.shape.y, m.shape.diameter);
                });
                isActive = true;
            }
        }
    });
    let isActive = false;
let loopsPerUpdate = 20;
let loop = 0;
let cnv;
let models;



*/
// function setup() {
//     cnv = createCanvas(710, 400);
//     cnv.hide();
// }


// function draw() {
//     if (isActive) {
//         loop += 1;
//         let doUpdate = loop > loopsPerUpdate;
//         if (doUpdate) loop = 0;
//         if (doUpdate) {
//             clear();
//             Object.entries(models).forEach(([i, m]) => {
//                 let v = m.last_val;
//                 m.flows_out.forEach((flowOut) => {
//                     let changeVal = 0;

//                     if (flowOut.type === "fixed") {
//                         if (flowOut.value < v) { changeVal = flowOut.value; }
//                         else { changeVal = v; }
//                         m.value -= changeVal;
//                         if (m.value > m.max_cap)
//                             m.value = m.max_cap;
//                         else if (m.value < m.min_cap)
//                             m.value = m.min_cap;
//                     }
//                     else { changeVal = v * flowOut.value; }
//                     models[flowOut.flow_to].value += changeVal;
//                     if (models[flowOut.flow_to].value > models[flowOut.flow_to].max_cap)
//                         models[flowOut.flow_to].value = models[flowOut.flow_to].max_cap;
//                     else if (models[flowOut.flow_to].value < models[flowOut.flow_to].min_cap)
//                         models[flowOut.flow_to].value = models[flowOut.flow_to].min_cap;
//                 });

//                 if (dist(m.shape.x, m.shape.y, mouseX, mouseY) < m.shape.diameter / 2 && mouseIsPressed) {

//                     m.shape.x = mouseX;
//                     m.shape.y = mouseY;
//                     console.log(m.shape)
//                 }
//                 Object.entries(m.flows_out).forEach(([i, flow]) => {
//                     connectNode(flow, m);
//                 });

//                 fill(m.shape.fill);
//                 stroke(0);
//                 circle(m.shape.x, m.shape.y, m.shape.diameter);
//                 textSize(18);
//                 fill('black');

//                 text(Math.round(m.value), m.shape.x, m.shape.y);
//                 text(m.name, m.shape.x, m.shape.y - 20);
//                 m.shape.inputButton.position(m.shape.x, m.shape.y + 50);
//                 textAlign(CENTER);
//             });

//             Object.entries(models).forEach(([i, m]) => {
//                 m.last_val = m.value;
//                 m.history.push(m.value);
//                 if (m.history.length > 300) { m.history.shift() }
//                 beginShape();
//                 noFill();
//                 Object.entries(m.history).forEach(([j, h]) => {
//                     vertex(j, 50 - h / 20);
//                 });
//                 endShape();
//             });
//             fill('black');
//         }
//     }
// }

// function connectorNode(m, nodeShape, thickness, isPos) {
//     var angle = atan2(m.shape.y - nodeShape.y, m.shape.x - nodeShape.x); //gets the angle of the line
//     let offset = nodeShape.diameter / 2;

//     push()
//     beginShape(LINES)
//     strokeWeight(thickness)
//     if (isPos) stroke('green')
//     else stroke('red')
//     vertex(m.shape.x - offset * Math.cos(angle), m.shape.y - offset * Math.sin(angle))
//     vertex(nodeShape.x + offset * Math.cos(angle), nodeShape.y + offset * Math.sin(angle))
//     endShape()
//     pop()

//     push() //start new drawing state
//     translate(nodeShape.x, nodeShape.y); //translates to the destination vertex
//     rotate(angle - HALF_PI); //rotates the arrow point
//     triangle(-10, offset + 10, 10, offset + 10, 0, offset);
//     pop();
// }

// function connectNode(flow, m) {
//     let node = models[flow.flow_to];
//     let nodeShape = node.shape;
//     if (m.id === node.id) loopedNode(m);
//     else connectorNode(m, nodeShape, Math.abs(flow.value) * 30, flow.value > 0);
// }

// function mouseReleased() {
//     // isActive=false;
//     //console.log(mouseX, mouseY);
// };



// function loopedNode(m) {
//     let x = m.shape.x; let y = m.shape.y;
//     let d = m.shape.diameter;
//     noFill();
//     stroke(m.shape.fill);
//     beginShape();
//     curveVertex(x, y);
//     curveVertex(x, y);
//     curveVertex(x + 80, y + 90);
//     curveVertex(x, y + 120);
//     curveVertex(x - 80, y + 90);
//     curveVertex(x, y);
//     curveVertex(x, y);
//     endShape();
//     fill(m.shape.fill);
//     push() //start new drawing state
//     let offset = m.shape.diameter / 2;
//     var angle = atan2(80, 90); //gets the angle of the line
//     translate(x, y); //translates to the destination vertex
//     rotate(angle - HALF_PI); //rotates the arrow point

//     triangle(-10, offset + 10, 10, offset + 10, 0, offset);
//     // triangle(-10, offset, 10, offset, 0,offset/2); //draws the arrow point as a triangle
//     pop();
// }

// // TO DO Fading in and out AI
//   async function fading(){
//       let list = [     "\"If we want to improve the world we cannot do it with scientific knowledge but with ideals.\"",
//           "\"We must begin with the heart of man—with his conscience—and the values of conscience can only be manifested by selfless service to mankind.\”\n\n  - Albert Einstein",
//        ];
//     var increment = 0.045;
//     var opacity = 0;
//     let index = 0;
//     let waitTimer = 0;
//     let direction = 'fadeIn';
//     var instance = window.setInterval(function() {
//         document.getElementById('quote1').style.opacity = opacity
//         if(direction==='fadeOut'){
//             opacity = opacity -increment;
//             if(opacity  < 0){
//                 if(index<2){
//                     document.getElementById('quote1').innerHTML = list[index];
//                     index+=1;
//                     direction='fadeIn';
//                 }
//                 else {
//                     window.clearInterval(instance);
//                     fullpage_api.moveSlideDown();
//                 }
//             }

//         }
//         else if (direction==='fadeIn'){
//             opacity = opacity + increment;
//             if(opacity  >1){direction='wait';}
//         }
//         else if (direction==='wait'){
//             waitTimer+=3*increment;
//             if(waitTimer>1){
//                 waitTimer = 0;
//                 direction = 'fadeOut';
//             }
//         }
//     },100)
// }
//   var opacity = 0;

//   function MyFadeFunction() {
//      if (opacity<1) {
//         opacity += .1;
//         document.getElementById('quote1').style.opacity = opacity;
//         setTimeout(function(){MyFadeFunction()},100);
//      }
     
//   }






















                    // if(m.type ==="source"){
                    //     changeVal = flowOut.value;
                    //     m.value-=changeVal;
                    // }
                    // else 


    //     cnv = createCanvas(710, 400);
    //     cnv.parent('section2')
    //    // cnv.position(offsetX, offsetY);
    //    // background('grey');
    //     Object.entries(models).forEach(([i,m]) =>{
    //        // fill(m.shape.fill);
    //         circle(m.shape.x, m.shape.y, m.shape.diameter);
    //     });






            // let slider = createSlider(0, 255, 100);
            // slider.parent('section2');
            // slider.position(offsetX+ m.shape.x, offsetY+m.shape.y);
            // slider.style('width', '80px');
            // m.shape.slider = slider;

// noFill();
// beginShape(LINES)
// bezier(
//     m.shape.x - offset*Math.cos(angle),
//     m.shape.y-offset*Math.sin(angle),
//     m.shape.x,
//     nodeShape.y,
//     m.shape.x,
//     nodeShape.y,
//     nodeShape.x + offset*Math.cos(angle) ,
//     nodeShape.y +offset*Math.sin(angle)
//   );


  // textSize(15);
        //noStroke();
        //fill('black');

        // button = createButton('start');
        // button.position(700, offsetY+465);
        // //button.mousePressed(greet);

        // greeting = createElement('h2', 'what is your name?');
        // greeting.position(20, 5);

       // textAlign(CENTER);
      //  textSize(50);


        //const r = rSlider.value();
        //const g = gSlider.value();
        //const b = bSlider.value();
       // fill(r, g, b);

    // create sliders
        // rSlider = createSlider(0, 255, 100);
        // rSlider.parent('section2');
        // rSlider.position(offsetX+ 20, offsetY+ 20);
        // gSlider = createSlider(0, 255, 0);
        // gSlider.parent('section2');
        // gSlider.position(offsetX+20, offsetY+50);
        // bSlider = createSlider(0, 255, 255);
        // bSlider.parent('section2');
        // bSlider.position(offsetX+20, offsetY+80);

        // text('red', 10 + rSlider.width, 35);
        // text('green', 10 + gSlider.width, 65);
        // text('blue', 10+ bSlider.width, 95);

       // fill('red');

  // text('red', 60 + rSlider.width, 35);
        // text('green', 60 + gSlider.width, 65);
        // text('blue', 60+ bSlider.width, 95);
// let node = models[flow.flow_to];
//                 //console.log(m.shape.x, m.shape.y, nodeShape.x, nodeShape.y);
//                 let nodeShape = node.shape;

//                 if(m.id === node.id){
//                     let x= m.shape.x; let y = m.shape.y;
//                     noFill();
//                     stroke(m.shape.fill);
//                     beginShape();
//                     curveVertex(x,y);
//                     curveVertex(x,y);
//                     curveVertex(x+50,y+60);
//                     curveVertex(x,y+80);
//                     curveVertex(x-50,y+60);
//                     curveVertex(x,y);
//                     curveVertex(x,y);
//                     endShape();
//                     fill(m.shape.fill);
//                     push() //start new drawing state
//                     let offset = m.shape.diameter;
//                     var angle = atan2(60, 50); //gets the angle of the line
//                     translate(x, y); //translates to the destination vertex
//                     rotate(angle-HALF_PI); //rotates the arrow point
//                     triangle(-10, offset, 10, offset, 0,offset/2); //draws the arrow point as a triangle
//                     pop();
//                 }
//                 else{
//                     fill(m.shape.fill);
//                     push()
//                     beginShape(LINES)
//                     stroke(m.shape.fill)
//                     vertex(m.shape.x, m.shape.y)
//                     vertex(nodeShape.x, nodeShape.y)
//                     endShape()
//                     pop()
//                     push() //start new drawing state
//                     let offset = nodeShape.diameter;
//                     var angle = atan2(m.shape.y - nodeShape.y, m.shape.x - nodeShape.x); //gets the angle of the line
//                     translate(nodeShape.x, nodeShape.y); //translates to the destination vertex
//                     rotate(angle-HALF_PI); //rotates the arrow point
//                     triangle(-10, offset, 10, offset, 0,offset/2); //draws the arrow point as a triangle
//                     pop();
//                 }

         // m.value = m.initial;
           // m.last_val = m.initial
        //   if(m.show===true){
        //       chart.addTimeSeries(m.history, { strokeStyle: m.strokeStyle, lineWidth: 4 });
        //    }

       // m.value = m.initial;
            // m.last_val = m.initial
         //   if(m.show===true){
         //       chart.addTimeSeries(m.history, { strokeStyle: m.strokeStyle, lineWidth: 4 });
         //    }

// setInterval(function() {
//     Object.entries(models).forEach(([i,m]) =>{
//         let v = m.last_val;
//         m.flows_out.forEach((flowOut)=>{
//             let changeVal = 0;
//             if(m.type ==="source"){
//                 changeVal = flowOut.value;
//                 m.value-=changeVal;
//             }
//             else if(flowOut.type === "fixed"){
//                 if( flowOut.value < v){changeVal = flowOut.value;}
//                 else {changeVal = v;}
//                 m.value-=changeVal;
//             }
//             else{changeVal = v * flowOut.value;}
//             models[flowOut.flow_to].value+=changeVal;
//         });
//     });
//     // Set History && update lastVal
//     let timepoint = Date.now();
//     Object.entries(models).forEach(([i,m]) =>{
//         m.last_val = m.value;
//         m.history.append(timepoint, m.value);
//     });
// }, 500);




// function createTimeline() {
//         // 获取 svg

//   var chart = new SmoothieChart({millisPerPixel:80});
//   Object.entries(models).forEach(([i,m]) =>{

//       m.value = m.initial;
//       m.last_val = m.initial
//     if(m.show===true){
//         chart.addTimeSeries(m.history, { strokeStyle: m.strokeStyle, lineWidth: 4 });
//      }

//   });
//   //chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', lineWidth: 4 });
//   chart.streamTo(document.getElementById("chart"), 500);
// }






// function draw(){
//     const r = rSlider.value();
//     const g = gSlider.value();
//     const b = bSlider.value();
//     background(r, g, b);
//     text('red', rSlider.x * 2 + rSlider.width, 35);
//     text('green', gSlider.x * 2 + gSlider.width, 65);
//     text('blue', bSlider.x * 2 + bSlider.width, 95);
// }

/*
   setup = function(){
      createCanvas(100, 100);
      background(0);
    }
For each, first get value of the copy
then goes through the flows, and adds the copy to
*/
//var random = new TimeSeries();


         //     push()
            //     stroke(255);

            //    // line(m.shape.x, m.shape.y, nodeShape.x, nodeShape.y); //draw a line beetween the vertices
            //     line(0, 0,50, 200); 
            //     strokeWeight(4);
            //     stroke(255);
            //    // line(m.shape.x, m.shape.y, nodeShape.x, nodeShape.y); //draw a line beetween the vertices
            //     line(0, 0,200, 200); 
            //     pop()
                //console.log(m.shape.x, m.shape.y, nodeShape.x, nodeShape.y);
                // this code is to make the arrow point
               //  push() //start new drawing state
                // var angle = atan2(x1.y - x2.y, x1.x - x2.x); //gets the angle of the line
                // translate(x2.x, x2.y); //translates to the destination vertex
                // rotate(angle-HALF_PI); //rotates the arrow point
                // triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2); //draws the arrow point as a triangle
                // pop();











// let  i = parseFloat(document.getElementById("initAmount").value)+parseFloat(document.getElementById("interestRate").value);
// console.log(i);
// random.append(Date.now(),  i+ Math.random() );
//https://github.com/joewalnes/smoothie

/*
    var svg = d3.select('svg');
    console.log(svg);

    var line = svg.append("line")
                .attr("x1",50)
                .attr("y1",10)
                .attr("x2",200)
                .attr("y2",50)
                .attr("stroke","red")
                .attr("stroke-width",2)
                .attr("marker-end","url(#arrow)");

    var curve_path = "M20,70 T80,100 T160,80 T200,90";
    var curve = svg.append("path")
                .attr("d",curve_path)
                .attr("fill","white")
                .attr("stroke","blue")
                .attr("stroke-width",2)
                .attr("marker-start","url(#arrow)")
                .attr("marker-mid","url(#arrow)")
                .attr("marker-end","url(#arrow)");
*/