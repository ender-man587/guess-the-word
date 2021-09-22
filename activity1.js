score = 0;

function nextPage(){
    window.location = "activity_2.html";
}

function saveScore(){
    localStorage.setItem("score", score);
}

function updateScore(){
    score = score + 1;
    document.getElementById("score").innerHTML = "Score : " + score;
}