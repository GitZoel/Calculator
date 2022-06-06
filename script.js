const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent
    const outputNum = output.textContent;
        if (!action) {
            if (outputNum === '0'){
                output.textContent = keyContent;
            } else if (outputNum === '-0') {
                output.textContent = '-' + keyContent;
            } else {
                output.textContent = outputNum + keyContent;
            }
        } else {
            switch (action) {
                // data action keys
                case 'decimal':
                    console.log('decimal');
                    //only allows one decimal per string
                    if (!outputNum.includes('.')) {
                        output.textContent = outputNum + '.'
                    } else {
                        console.log(output.textContent);
                    }
                    break;
                case 'clear':
                    console.log('clear');
                    output.textContent = 0;
                    break;
                case 'calculate':
                    console.log('calculate');
                    break;
                case 'neg':
                    console.log('neg/pos');
                    if (outputNum.includes('-')) {
                        output.textContent = outputNum.slice(1);
                    } else {
                        output.textContent = '-' + outputNum;
                    }
                    break;
                case 'percent':
                    output.textContent = outputNum / 100;
                default: 
                    console.log(`${action}`)
                    
            }
        }
 }
})

