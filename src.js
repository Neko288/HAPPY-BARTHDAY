
const messageMUSIC = function() {
  spinner.classList.add('loaded');
}
const spinner = document.getElementById('loading');
setTimeout(messageMUSIC, 1700);

//kamihubuki
particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":160,//kamihubuki kazu
			"density":{
				"enable":false,
				"value_area":400
			}
		},
		"color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
		},
		"shape":{
			"type":"polygon",
			"stroke":{
				"width":0,
			},
			"polygon":{
				"nb_sides":6
			}
			},
			"opacity":{
				"value":1,
				"random":false,
				"anim":{
					"enable":true,
					"speed":20,
					"opacity_min":0,
					"sync":false
				}
			},
			"size":{
				"value":5.305992965476349,
				"random":true,
				"anim":{
					"enable":true,
					"speed":1.345709068776642,
					"size_min":0.8,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
			"speed":2,//hayasa
			"direction":"bottom",
			"random":false,
			"straight":false,
			"out_mode":"out",
			"bounce":false,//hanekaeri
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			},
		},
		"retina_detect":true
	});

'use strict';

//タイマー

function countdown(due){
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest/1000) % 60;
  const min = Math.floor(rest/1000/60) % 60;
  const hours = Math.floor(rest/1000/60/60) % 24;
  const count = [hours, min, sec];

  return count;
}

let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

function recalc() {
  const counter = countdown(goal);
  const time = `${counter[0]}時間 ${counter[1]}分 ${counter[2]}秒 `;
  document.getElementById('timer').textContent = time;
  refresh();
}

function refresh() {
  setTimeout(recalc, 1000);
}

recalc();
//ダークモードページに行く。
var urlParam = location.search.substring(1);
if(urlParam) {
  document.getElementById("dark-or-white").innerHTML = '<link rel="stylesheet" href="dark-style.css">';
}

//Typing
const typing = () => {
  sentence='誕生日おめでとう。今までありがとう。これからもよろしく!';
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector('#typing').textContent += character;
    }, 160 * ++index);
  });
}
setTimeout(typing, 1500);