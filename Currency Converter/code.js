function convert(){

    const a = document.getElementById("amount").value;
    const numA = Number(a);

    //

    const c1 = document.getElementById('currentCurrency');
    const cc = c1.options[c1.selectedIndex].value;

    //

    const c2 = document.getElementById('newCurrency');
    const nc = c2.options[c2.selectedIndex].value;

    //

    fetch('https://v6.exchangerate-api.com/v6/a670aebcd894cb6102da6fd1/latest/USD/')
        .then(res => res.json())
        .then(data => {
            const { conversion_rates } = data;

            const r1 = conversion_rates[cc];

            const r2 = conversion_rates[nc];

            const percentChange = (r2 - r1) / (r1);

            //

            if (percentChange > 0){
                const convert = (percentChange + 1) * a;
                r = Math.round(convert * 100) / 100;
        
            } else if (percentChange < 0){
                const abs = Math.abs(percentChange);
                const convert = (1 - abs) * a;
                r = Math.round(convert * 100) / 100;
            } else{
                r = a;}

            //
        
            const symbol = c2.options[c2.selectedIndex].id;

            //
        
            if (cc == 'none' || nc == 'none' || isNaN(numA)) {
                document.getElementById('header').style.backgroundColor = '#FF0000';
                document.getElementById('header').style.color = '#FFFFFF';
                document.getElementById('newValue').innerHTML = 'Error: Field entered incorrectly'
            } 
            
            else{
                document.getElementById('header').style.backgroundColor = '#aed85b';
                document.getElementById('header').style.color = '#000000';
                document.getElementById('newValue').innerHTML = 'Your new value is: ' + symbol + r + ' ' + nc;
            }
        })
}