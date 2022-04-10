var score=10;
function tips(){
  alert("Some tips for you:");
  alert("1.Write your answer in small letters.");
  alert("2.The music will help you to get more message.");
}

function check() {
          var x = document.getElementById("image").getAttribute("src");
          var y = document.getElementById("image1").getAttribute("src");
          var z = document.getElementById("image2").getAttribute("src");
              document.getElementById("image").src="winner.png";
              document.getElementById("image1").src="blackpink.png";
              document.getElementById("image2").src="ikon.png";
    }
function answer(){
  var response=prompt("write down your answer");
  if(response=="winner"){
    alert("right answer!");
    score+=30;
  }
  else {
    alert("wrong answer");
  }
}
function answer1(){
  var response=prompt("write down your answer");
  if(response=="blackpink"){
    alert("right answer!");
    score+=30;
  }
  else {
    alert("wrong answer");
  }
}
function answer2(){
  var response=prompt("write down your answer");
  if(response=="ikon"){
    alert("right answer!");
    score+=30;
  }
  else {
    alert("wrong answer");
  }
}
function sayhello(){
  if(score==100){
    alert("Your score is "+score+" ,you are a real fan!!!");
  }
  if(score>10&score<=99){
    alert("Your score is "+score+" ,keep fighting!");
  }
  if(score==10){
    alert("Your score is "+score+" ,you still have a long way to go");
  }
}
