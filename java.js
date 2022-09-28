const links = document.querySelectorAll('.menu-item')
const messages = document.querySelector('.messages')
const msgBar = document.querySelector('#msgBar')
const themeSide = document.querySelector('#theme-side')
const themeModal = document.querySelector('.customize-theme')
const colors = document.querySelectorAll('.color-holder span')
const root = document.querySelector(':root')
const fonts = document.querySelectorAll('.circles-theme span ');
const html = document.querySelector('html')
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')


const remov = () => {
links.forEach( hel => {
    hel.classList.remove('active')
} )
}

links.forEach( lin => {
    lin.addEventListener('click', () => {
        remov();
        lin.classList.add('active')
    })
})


links.forEach( elo => {
    elo.addEventListener('click', ()=> {
        if(elo.id != 'noti'){
            document.querySelector('.notifications-popup').style.display = 'none'
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block'

        }
    })
})


msgBar.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--primary-color-hue)';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})


const closedTheme = (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
} 

themeModal.addEventListener('click', closedTheme); 
    



themeSide.addEventListener('click', ()=>{
    themeModal.style.display = 'grid'
})




// ******************************** theme ***********************************

const removCalcee = () => {
    colors.forEach(cali => {
        cali.classList.remove('active');
    })
}


colors.forEach( col => {
    col.addEventListener('click', () =>  {
        let primary;
        removCalcee();
        if(col.classList.contains('color-1')){
            
            primary = 344;
        }
        else if(col.classList.contains('color-2')){
            primary = 195;
     
        }
        else if(col.classList.contains('color-3')){
           
            primary = 46;
      

        }
        else if(col.classList.contains('color-4')){
         
            primary = 25;
    
        }
        else if(col.classList.contains('color-5')){
            
            primary = 232;
      

        }
        else if(col.classList.contains('color-6')){
          
            primary = 59
     
        }

        col.classList.add('active')
        root.style.setProperty('--primary-color', primary);

    })
})

const remoFon = ()=> {
    fonts.forEach( fen => {
        fen.classList.remove('active')
    })
}

fonts.forEach(fall => {
    fall.addEventListener('click', ()=> {
        let fontSize;
        remoFon();
        fall.classList.toggle('active')
        if(fall.classList.contains('font-size-1')){
            fontSize = '12px';
        }
        else if(fall.classList.contains('font-size-2')){
            fontSize = '16px';
        }
        else if(fall.classList.contains('font-size-3')){
            fontSize = '18px';
        }
        else if(fall.classList.contains('font-size-4')){
            fontSize = '20px';
        }

        

        document.querySelector('html').style.fontSize = fontSize;

        
        
    })
})


// ****************************** background ************************************


let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = ()=>{
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}


bg1.addEventListener('click', ()=> {
    bg1.classList.add('active')
    lightColorLightness = '95%'
    whiteColorLightness = '100%'
    darkColorLightness = '95%'
    bg3.classList.remove('active')
    changeBG();
})

bg3.addEventListener('click', ()=> {
    bg3.classList.add('active')
    lightColorLightness = '4%'
    whiteColorLightness = '10%'
    darkColorLightness = '17%'
    bg1.classList.remove('active')
    changeBG();
})