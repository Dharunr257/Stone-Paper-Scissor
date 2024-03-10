let userscore = 0;
let compscore = 0;


let gbtns = document.querySelectorAll(".gbtn")
let scoreuser = document.querySelector(".scorepla")
let scorecomp = document.querySelector(".scorecom")
let finalresult = document.querySelector('.result')
let choicepla = document.querySelector(".choicepla")
let choicecom = document.querySelector(".choicecom")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let Reset = document.querySelector(".Reset")
let Newgame = document.querySelector("#new-btn")

const newGame = () => {
    msgContainer.classList.add("hide");
    userscore = 0;
    compscore = 0;
    scorecomp.innerText = 0;
    scoreuser.innerText = 0;
    gbtns.forEach((gbtn) => {
        gbtn.disabled = false;});
    };
const reset = () => {
    userscore = 0;
    compscore = 0;
    scorecomp.innerText = 0;
    scoreuser.innerText = 0;
}

const gencompchoice = () => {
    let options = ["Stone", "Paper", "Scissor"];
    let rannum = Math.floor(Math.random() * 3);
    let compchoice = options[rannum];
    return compchoice;
}

const checkfinalwinner = () => {
    if (userscore === 10) {
        console.log("Player wins!");
        gbtns.forEach((gbtn) => {
            gbtn.disabled = true;
            msg.innerText = "Congratulations Player(You) won!";
            msgContainer.classList.remove("hide");

        });
    } else if (compscore === 10) {
        console.log("Computer wins!");
        gbtns.forEach((gbtn) => {
            gbtn.disabled = true;
            msg.innerText = "Computer wins";
            msgContainer.classList.remove("hide");
        });
    } else {
        console.log("Still no winner");
    }
};


const playgame = (userchoice) => {

    let comchoice = gencompchoice();
    console.log("user choice: ", userchoice);
    userchoice = userchoice.trim();
    console.log("Computer choice:", comchoice);
    if (comchoice === userchoice) {
        console.log("Draw")
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    } else if (comchoice === "Stone" && userchoice === "Paper") {
        console.log("winner is user,paper covers stone");
        userscore++;
        scoreuser.innerText = userscore;
        finalresult.innerText = "Player wins";
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    } else if (comchoice === "Stone" && userchoice === "Scissor") {
        console.log("winner is computer,stone breaks scissor");
        compscore++;
        scorecomp.innerText = compscore;
        finalresult.innerText = "Computer wins";
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    } else if (comchoice === "Paper" && userchoice === "Stone") {
        console.log("winner is computer,paper covers stone");
        compscore++;
        scorecomp.innerText = compscore;
        finalresult.innerText = "Computer wins";
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    } else if (comchoice === "Paper" && userchoice === "Scissor") {
        console.log("winner is user,scissor cuts paper");
        userscore++;
        scoreuser.innerText = userscore;
        finalresult.innerText = "Player wins";
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    } else if (comchoice === "Scissor" && userchoice === "Stone") {
        console.log("winner is user,stone breaks scissor");
        userscore++;
        scoreuser.innerText = userscore;
        finalresult.innerText = "Player wins";
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    } else if (comchoice === "Scissor" && userchoice === "Paper") {
        console.log("winner is computer,scissor cuts paper");
        compscore++;
        scorecomp.innerText = compscore;
        finalresult.innerText = "Computer wins";
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    } else {
        console.log("condition not specified");
        finalresult.innerText = "Win condition not specified";
        choicecom.innerText = comchoice;
        choicepla.innerText = userchoice;
        checkfinalwinner();
    };
};

gbtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("button pressed");
        let userchoice = btn.getAttribute("id")
        playgame(userchoice);
    });
});

Reset.addEventListener("click", reset);
Newgame.addEventListener("click", newGame);