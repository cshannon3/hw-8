
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