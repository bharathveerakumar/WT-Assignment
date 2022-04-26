const inp=document.querySelector('input'),
digitV=document.querySelector('.dig'),
letV=document.querySelector('.letters'),
vowV=document.querySelector('.vowels'),
specV=document.querySelector('.spec')

const specChar={
    '!':1, '@':1, '#':1, '$':1, '%':1, '^':1, '&':1, '*':1
},
vowChar={
    'a':1, 'e':1, 'o':1, 'i':1, 'u':1
}

inp.addEventListener('input', ()=>{
    const value=inp.value;
    let spc=0, vowels=0, digits=0, letters=0;

    for(let i=0;i<value.length;i++){
        if(vowChar[value[i]]===1) vowels++;
        if(specChar[value[i]]===1) spc++;
        else if((value.charCodeAt(i)-97>=0&&value.charCodeAt(i)-97<=26)||(value.charCodeAt(i)-65>=0&&value.charCodeAt(i)-65<=26)) letters++;
        else digits++;
    }
    
    digitV.innerHTML=digits, letV.innerHTML=letters
    specV.innerHTML=spc, vowV.innerHTML=vowels
})