var score = 0;
function submitAnswers() {
	var total = 7;
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;

	for(i=1; i<=total; i++) {
		if(eval('q'+i) === null || eval('q'+i) === '') {
			alert('Ви пропустили запитання №'+ i);
			return false;
		}
	}

	var answers = ["b","a","d","b","d","a","d"];
	for(i=1; i<=total; i++) {
		if(eval('q'+i) === answers[i-1]) {
			score++;
		}
	}

  const q8a = document.getElementById("q8a");
  if (q8a.checked) {
    score += 0.5;
  }
  const q8b = document.getElementById("q8b");
  if (q8b.checked) {
      score += 0.5;
  }
  const q9a = document.getElementById("q9a");
  if (q9a.checked) {
    score += 0.5;
  }
  const q9b = document.getElementById("q9b");
  if (q9b.checked) {
      score += 0.5;
  }

	var results = document.getElementById('results');
	results.innerHTML = '<h3>Оцінка:<span>'+score+'</span> / <span>'+"10"+'</span></h3>';
	document.getElementById('btn').disabled = true;
	let tg = {
		token: "1858844290:AAG4xVcUFcD6nNnKqz1biKvcGrhwNCsOHMk",
		chat_id: "-519873227"
	}

	/**
	 *
	 * @param {String}
	 *
	*/
		const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request
		const obj = {
			chat_id: tg.chat_id,
			text: "ЛР JS2022\n" + "П.І.Б: " + document.getElementById("nameof").value  + "\n" + "Група: " + document.getElementById("group").value  + "\n" +"Оцінка: "+ score + " / 10"
		};

		const req = new XMLHttpRequest();
		req.open("POST", url, true);
		req.setRequestHeader("Content-type", "application/json; charset=UTF-8");
		req.send(JSON.stringify(obj));
		Email.send({
			Host: "smtp.elasticemail.com",
			Username : "gerty438@gmail.com",
			Password : "97EA80AF97F86A0B4B7FF0065CAF7523F74C",
			To : 'webkpi21@gmail.com',
			From : 'gerty438@gmail.com',
			Port:'2525',
			Subject :"Наумчик Є.Л. ТР-14 ЛР JS2022",
			Body : "ЛР JS2022\n" + "П.І.Б: " + document.getElementById("nameof").value  + "\n" + "Група: " + document.getElementById("group").value  + "\n" +"Оцінка: "+ score + " / 10",
		    }).then(
			message => {
				alert("Дані успішно відправлені");
				console.log(message);
			}
		);

	return false;
}

function dragUser(user, event) {
  event.dataTransfer.setData('User', user.id);
}
function dropUser(target, event) {
  var user = event.dataTransfer.getData('User');
  target.appendChild(document.getElementById(user));
}

$(function(){
	var overlay = $('<div id="overlay"></div>');
	overlay.show();
	overlay.appendTo(document.body);
	$('.popup').show();
	$('.close').click(function(){
	$('.popup').hide();
	overlay.appendTo(document.body).remove();
	return false;
	});
	$('.x').click(function(){
	$('.popup').hide();
	overlay.appendTo(document.body).remove();
	return false;
	});
	});

	  function shuffleAnswers() {
		const q1Ans = document.getElementById("q1-ans");
		for (let i = q1Ans.children.length; i >= 0; i--) {
			q1Ans.appendChild(q1Ans.children[Math.random() * i | 0]);
		}
		const q2Ans = document.getElementById("q2-ans");
		for (let i = q2Ans.children.length; i >= 0; i--) {
			q2Ans.appendChild(q2Ans.children[Math.random() * i | 0]);
		}
		const q3Ans = document.getElementById("q3-ans");
		for (let i = q3Ans.children.length; i >= 0; i--) {
			q3Ans.appendChild(q3Ans.children[Math.random() * i | 0]);
		}
	    const q4Ans = document.getElementById("q4-ans");
		for (let i = q4Ans.children.length; i >= 0; i--) {
			q4Ans.appendChild(q4Ans.children[Math.random() * i | 0]);
		}
		const q5Ans = document.getElementById("q5-ans");
		for (let i = q5Ans.children.length; i >= 0; i--) {
			q5Ans.appendChild(q5Ans.children[Math.random() * i | 0]);
		}
		const q8Ans = document.getElementById("q8-ans");
		for (let i = q8Ans.children.length; i >= 0; i--) {
			q8Ans.appendChild(q8Ans.children[Math.random() * i | 0]);
		}
		const q9Ans = document.getElementById("q9-ans");
		for (let i = q9Ans.children.length; i >= 0; i--) {
			q9Ans.appendChild(q9Ans.children[Math.random() * i | 0]);
		}
	}

	function CheckDandD(){
		let loops = document.getElementById('loops');
		let conditions = document.getElementById('conditions');
		let ail = loops.children
		let aic = conditions.children
		if (ail.length === 5 && aic.length === 3){
			if (ail[1].id === "1" && ail[2].id  === "1" && ail[3].id === "1"  && ail[4].id === "1" && aic[1].id === "0" && aic[2].id === "0"){
				score++
			}
		}
	}

	function al(){
		var name = document.getElementById("nameof").value
		var group = document.getElementById("group").value
		if (name == "" || group == ""){
			alert("Введіть дані");
			window.location.reload(true)
			return false;
		}
	}
