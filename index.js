
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

document.getElementById("tile1").addEventListener("click", function() {
   
   let d =  document.getElementById("overlay");
   console.log(d);
   d.style.display = "block";
   d.innerHTML=`<div class="jumbotron">
   <h1 class="display-4 p-3">Social Innovation</h1>
   <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
   <hr class="my-4">
   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
   <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
   </div>`;
});



// TO DO Fading in and out AI
async function fading(){

  var increment = 0.045;
  var opacity = -0.2;
  let direction = 'fadeIn';
  document.getElementById('quote1').style.opacity =0.0;
  var instance = window.setInterval(function() {
    if(opacity  >0)
      document.getElementById('quote1').style.opacity = opacity
    
     if (direction==='fadeIn'){
          opacity = opacity + increment;
          if(opacity  >1){
            window.clearInterval(instance);
          }
      }
    
  },100)
}


new fullpage('#fullpage', {
    sectionsColor: ['#112C4B', '#112C4B', '#C0C0C0', '#ADD8E6', '#112C4B', '#C0C0C0', '#ADD8E6', '#C0C0C0', '#ADD8E6'],
    scrollHorizontally: true,
    onLeave: function (index, nextIndex, direction) {
		if(nextIndex.index == 1){
			fading().then(()=>{ console.log("done");   });
		}
    }
});

particlesJS("particles-js",
    { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    });


