// console.log(ANIMATIONS);
// console.log("RINA");
// ANIMATIONS.forEach(element => {
//     console.log(element);
// });
// document.getElementById("text-box").value = ANIMATIONS["juggler"];
var typeOne = [];
let interval;
let counter;
var tSpeed =  250;

var stop = document.getElementById("stop");
stop.disabled = true;
stop.addEventListener("click", stopEventHandler)

var start = document.getElementById("start");
start.addEventListener("click", startEventHandler)

var selectedTypeElem = document.getElementById("anim_type");
selectedTypeElem.addEventListener("change", selectedTypeEventHandler);


var selectedSizeElem = document.getElementById("anim_size");
selectedSizeElem.addEventListener("change", selectedSizeEventHandler)

var textbox = document.getElementById("text-box");
textbox.value = "";

var speedElem = document.getElementById("turbo");
speedElem.addEventListener("change", speedEventHandler);


function selectedTypeEventHandler() {

    textbox.value = ANIMATIONS[selectedTypeElem.value];

}

function selectedSizeEventHandler() {

    var arrSize = [
        "tiny",
        "small",
        "medium",
        "large",
        "extralarge",
        "xxl"
    ];

    arrSize.forEach(element => {
        if (textbox.classList.contains(element)) {
            textbox.classList.remove(element);
        }


    })
    textbox.classList.add(selectedSizeElem.value);
}



function animate(){
    textbox.value = typeOne[counter];
        if (counter < typeOne.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
}


function startEventHandler() {

    start.disabled = true
    stop.disabled = false;
    selectedTypeElem.disabled = true;

    typeOne = ANIMATIONS[selectedTypeElem.value].split("=====");

    counter = 0;
    interval = setInterval(animate, tSpeed);

}


function stopEventHandler() {

    clearInterval(interval);
    counter = 0;
    start.disabled = false;
    stop.disabled = true;
    selectedTypeElem.disabled = false;
    textbox.value = ANIMATIONS[selectedTypeElem.value];
}

function speedEventHandler() {
    
    tSpeed = speedElem.checked ? 50 : 250;

}

