const form = document.querySelevtor('form');


// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if(height === '' || height <= 0 || isNaN(height)){
//         results.innerHTML = `Please inter a valid height ${height}`;
//         return;
//     }else if(weight === '' || weight <= 0 || isNaN(weight)){
//         results.innerHTML = `Please inter a valid weight ${weight}`;
//         return;
//     }else{
//         const bmi = (weight / ((height *height)/10000)).toFixed(2);
//         results.innerHTML = `<span>${bmi}</span>`;
//     }

    


// });

const height = document.querySelector('#height');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const results = document.querySelector('#results');

results.innerHTML = `height ${height.value}`;
});