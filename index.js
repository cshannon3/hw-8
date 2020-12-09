
//https://dbramwell.github.io/react-animate-on-scroll/#animateOut
//https://p5js.org/examples/instance-mode-instance-container.html
//https://codepen.io/zxhfighter/pen/wWKqqX
//https://github.com/fabricjs/fabric.js
//https://p5js.org/learn/curves.html
//http://www3.weforum.org/docs/WEF_Global_Risk_Report_2020.pdf
//https://github.com/VincentGarreau/particles.js/
//https://medium.com/@myroslavazel/feedback-loops-in-system-thinking-7ef06e2ff310

let isActive = false;
let loopsPerUpdate = 20;
let loop = 0;
let cnv;
let models;

/*
TODO Models
-View -Adding in +/-
- Graph
*/


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

//   var opacity = 0;

//   function MyFadeFunction() {
//      if (opacity<1) {
//         opacity += .1;
//         document.getElementById('quote1').style.opacity = opacity;
//         setTimeout(function(){MyFadeFunction()},100);
//      }
     
//   }

// TO DO Fading in and out AI
  async function fading(){
      let list = [     "\"If we want to improve the world we cannot do it with scientific knowledge but with ideals.\"",
          "\"We must begin with the heart of man—with his conscience—and the values of conscience can only be manifested by selfless service to mankind.\”\n\n  - Albert Einstein",
       ];
    var increment = 0.045;
    var opacity = 0;
    let index = 0;
    let waitTimer = 0;
    let direction = 'fadeIn';
    var instance = window.setInterval(function() {
        document.getElementById('quote1').style.opacity = opacity
        if(direction==='fadeOut'){
            opacity = opacity -increment;
            if(opacity  < 0){
                if(index<2){
                    document.getElementById('quote1').innerHTML = list[index];
                    index+=1;
                    direction='fadeIn';
                }
                else {
                    window.clearInterval(instance);
                    fullpage_api.moveSlideDown();
                }
            }

        }
        else if (direction==='fadeIn'){
            opacity = opacity + increment;
            if(opacity  >1){direction='wait';}
        }
        else if (direction==='wait'){
            waitTimer+=3*increment;
            if(waitTimer>1){
                waitTimer = 0;
                direction = 'fadeOut';
            }
        }
    },100)
}

new fullpage('#fullpage', {
    sectionsColor: ['#112C4B', '#112C4B', '#C0C0C0', '#ADD8E6', '#112C4B', '#C0C0C0', '#ADD8E6', '#C0C0C0', '#ADD8E6'],
    onLeave: function (index, nextIndex, direction) {
           	//using index
		if(nextIndex.index == 1){
			fading().then(()=>{
                console.log("done");
               
            });
		}
		//using index
		// if(nextIndex.index == 2){
		// 	myMove();
		// }
	
       
    }
 
});

particlesJS("particles-js",
    {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    });





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