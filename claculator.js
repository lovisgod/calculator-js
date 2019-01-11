let display = document.querySelector('.result');
let button2Press = document.querySelector('.btnn');
let buttonEql = document.querySelector('#eql');
button2Press.addEventListener('click',e =>{
    if(e.target.matches('button')){
        console.log('pressed : ' + e.target.textContent);
        const displ = display.innerHTML;
        console.log(displ);
       if(displ === '0'){
           console.log('its working : ' + displ);
           display.textContent = e.target.textContent;
       }else if(e.target.textContent === '='){
           const p =eval(display.textContent);
           console.log(p);
           display.textContent = p;
       }else if(e.target.textContent === 'AC' || display.textContent === '0'){
           clear();
       }else if(e.target.textContent === '+' || e.target.textContent ==='-' || 
            e.target.textContent === 'X' || e.target.textContent === '/' ||
            e.target.textContent === '.' || e.target.textContent === '%'){
               console.log('yes')
               console.log(typeof(displ));
               display.textContent = displ + e.target.textContent;
       }
       else{
        display.textContent = displ + e.target.textContent;
       }
    }
})

const clear = () => {
    display.textContent = '0';
}
