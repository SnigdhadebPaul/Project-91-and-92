player1name = localStorage.getItem("v1");
player2name = localStorage.getItem("v2");
player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + ":";
document.getElementById("player2name").innerHTML = player2name + ":";

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn-" + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player2name;

function send() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)



    question_number = "<h4>" + number1 + " X " + number2 + "</h4>"
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";





}
question_turn = "player_1";
answer_turn = "player_2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player1_score = player1score + 1;
            document.getElementById("player1score").innerHTML = update_player1_score;
        }
        else {
            update_player2_score = player2score + 1;
            document.getElementById("player2score").innerHTML = update_player2_score;
        }
    } if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }

    document.getElementById("output").innerHTML = "";
}