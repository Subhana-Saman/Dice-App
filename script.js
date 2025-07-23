function rollDice(){
    let result = document.getElementById('result');
    let roll = Math.floor(Math.random()*6);
    let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
    result.innerHTML = diceFaces[roll];
}