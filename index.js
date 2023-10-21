var masin=document.querySelector('img')
var yuxari=0
var sol=0

window.onkeypress=function(e){

    if(e.key=='w'){
       if(yuxari>0){
        yuxari-=10
 masin.style.top=`${yuxari}px`
 masin.style.transform='rotate(0deg)'
       }
 
    }

    else if(e.key=='s'){
        if(yuxari!==600){
        yuxari+=10
        masin.style.top=`${yuxari}px`
        masin.style.transform='rotate(180deg)'
        }
    }
    else if( e.key=='a'){
        
        sol-=10
        masin.style.left=`${sol}px`
        masin.style.transform='rotate(270deg)'

        


    } 
    else if( e.key=='d'){
        sol+=10
        masin.style.left=`${sol}px`
        masin.style.transform='rotate(90deg)'

        


    } 

 



}