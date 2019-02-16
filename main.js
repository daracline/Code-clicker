var linesOfCode = 0;
var extraHands = 0;
var codeMonkey = 0;

// getters

const getExtraHandsCost = () => Math.round(10 * Math.pow(1.07, extraHands));

const getCodeMonkeyCost = () => Math.round(100 * Math.pow(1.07, codeMonkey));

// button actions

const onWriteCode = () => {
    linesOfCode += 1 + extraHands;
    updateCount();
}

const onBuyExtraHands = () => {
    linesOfCode -= getExtraHandsCost();
    extraHands += 1;
    updateHands();
    updateCount();
    updateExtraHandsCost();
}

const onBuyCodeMonkey = () => {
    linesOfCode -= updateCodeMonkeyCost();
    codeMonkey += 1;
    updateCodeMonkey();
    updateCount();
}

// DOM updates

const updateCount = () => {
	document.getElementById("lines-of-code").innerHTML = linesOfCode;
    document.getElementById("extra-hands-btn").disabled = linesOfCode < getExtraHandsCost();
    document.getElementById("code-monkey-btn").disabled = linesOfCode < getCodeMonkeyCost();
}

const updateHands = () => document.getElementById("extra-hands").innerHTML = extraHands;

const updateExtraHandsCost = () => document.getElementById("extra-hands-cost").innerHTML = getExtraHandsCost();


const updateCodeMonkey = () => document.getElementById("code-monkey").innerHTML = codeMonkey;

const updateCodeMonkeyCost = () => document.getElementById("code-monkey-cost").innerHTML = getCodeMonkeyCost();

const updateCountPerSecond = () => {
    linesOfCode += codeMonkey;
    updateCount();
}

setInterval(updateCountPerSecond, 1000);


