
const rollBtnEL = document.getElementById('roll-btn');
const rollHistoryEl = document.getElementById('roll-history');
const diceEL = document.getElementById('dice');
let rollHistoryList = [];


const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEL.innerHTML = diceFace;
    rollHistoryList.push(rollResult);
    updateRollHistory()
}


const updateRollHistory = () =>{
    rollHistoryEl.innerHTML = '';
    for(let i = 0; i < rollHistoryList.length; i++){
        const listItems = document.createElement('li');
        listItems.innerHTML = `Roll ${i + 1}: <i>${getDiceFace(rollHistoryList[i])}</i>`;
        rollHistoryEl.appendChild(listItems);
    }
}


const getDiceFace = rollResult => {
    switch (rollResult) {
        case 1:
            return '<i class="fa-solid fa-dice-one"></i></li>'
            break;
        case 2:
            return '<i class="fa-solid fa-dice-two"></i></li>';
            break;
        case 3:
            return '<i class="fa-solid fa-dice-three"></i></li>'
            break;
        case 4:
            return '<i class="fa-solid fa-dice-four"></i></li>'
            break;
        case 5:
            return '<i class="fa-solid fa-dice-five"></i></li>';
            break;
        case 6:
            return '<i class="fa-solid fa-dice-one"></i></li>';
        default:
            return '';

        
    }
}


rollBtnEL.addEventListener('click', () => {
    diceEL.classList.add('roll-animation');
    setTimeout(() => {
        diceEL.classList.remove('roll-animation');
        rollDice()
    }, 1000)
    
});
