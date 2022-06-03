let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let startButton = document.getElementById("start");
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"
// startButton.onclick=()=>{
//   if(!currentlyPlaying){
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = spaceDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
    } else if (choreDoor === 2) {
        openDoor2 = spaceDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = botDoorPath;
    }
    doorImage1.onclick = () => {
        //doorImage1.setAttribute("src", botDoorPath);
        if (currentlyPlaying && !isClicked(doorImage1)) {
            doorImage1.src = openDoor1;
            playDoor(doorImage1);
        }
        // doorImage1.src=openDoor1;
    }
    doorImage2.onclick = () => {
        //doorImage1.setAttribute("src", botDoorPath);
        if (currentlyPlaying && !isClicked(doorImage2)) {
            doorImage2.src = openDoor2;
            playDoor(doorImage2);
        }
        // doorImage2.src=openDoor2;
    }
    doorImage3.onclick = () => {
        //doorImage1.setAttribute("src", botDoorPath);
        if (currentlyPlaying && !isClicked(doorImage3)) {
            doorImage3.src = openDoor3;
            playDoor(doorImage3);
        }
        // doorImage3.src=openDoor3;
    }
    startButton.onclick = () => {
        if (!currentlyPlaying) {
            startRound();
        }
    }
}
const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = "Good luck!";
    randomChoreDoorGenerator();
}
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;
}
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver('lose');
    }
}
startRound();
// }
// }









