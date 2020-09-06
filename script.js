window.onload = () =>{

  /*  const header = document.getElementsByTagName("headser");

    document.body.onscroll = () =>{
        let Yposition = document.body.scrollTop;

        if (Yposition > 100){
            header.style.display = "none";
        }
    } */


    const header = document.querySelector(".header");
    
    
    document.body.onscroll = () => {  
          
        if (document.documentElement.scrollTop > 100) {         
            header.style.backgroundColor ="#191919";         
        }

        else {
            header.style.backgroundColor = "transparent";
        } 

        console.log(document.documentElement.scrollTop);
    }







}