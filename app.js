const container = document.querySelector('.container')
const items = document.querySelectorAll('.item')
const player1 = 'x'
const player2 = 'o'
let running = true
let flag= true



items.forEach(item => {
    const value=item.getAttribute('data-value')
    
    item.addEventListener('click', (e) => {
        if (e.target.innerText == '') {
            if (flag == true) {
                e.target.innerText = player1
                flag = false
                console.log(flag)
            }
            else {
                e.target.innerText = player2
                flag = true
            }
        }
        
    })
});


