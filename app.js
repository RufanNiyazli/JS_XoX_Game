const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')
const player1 = 'x'
const player2 = 'o'
let running = true
let flag= true
const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
]


let options = ['', '', '', '', '', '', '', '', '']
const check = () => {
    for (let i = 0; i < winningPosition.length; i++) {
        if (options[winningPosition[i][0]] === options[winningPosition[i][1]] && options[winningPosition[i][1]] === options[winningPosition[i][2]]) {
            let winner = options[winningPosition[i][0]];
            // console.log('Qalib:', winner);
            return winner; // Qalib dəyərini qaytarır
        }
    }
    return null; // Əgər qalib yoxdursa, null qaytarır
}


items.forEach(item => {
    const value = item.getAttribute('data-value')
    
   
    
    item.addEventListener('click', (e) => {
        if (running&&e.target.innerText == '') {
            if (flag == true) {
                e.target.innerText = player1
                flag = false
                options[item.getAttribute('data-value')] = e.target.innerText
                
            }
            else {
                e.target.innerText = player2
                flag = true
                options[item.getAttribute('data-value')] = e.target.innerText
            }
            const champion = check(); // Qalibi yoxlayırıq
            if (champion) { // Əgər qalib varsa
                console.log('Oyun bitdi!');
                console.log('Qalib:', champion);
                running = false; // Oyunu dayandırırıq
            }
        }
        
        
    })
    
});





