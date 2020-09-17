window.onload = () => {

  /*  const header = document.getElementsByTagName("headser");

    document.body.onscroll = () =>{
        let Yposition = document.body.scrollTop;

        if (Yposition > 100){
            header.style.display = "none";
        }
    } */


  const header = document.querySelector(".header");

  counterContainer = document.getElementById("counter-container");


  document.body.onscroll = () => {

    if (document.documentElement.scrollTop > 100) {
      header.style.backgroundColor = "#191919";
    }

    else {
      header.style.backgroundColor = "transparent";
    }

    if (document.documentElement.scrollTop > 128) {

      counterContainer.style.opacity = "1";


      counter();
    }






    console.log(document.documentElement.scrollTop);



  }




  var counter = function () {
    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },

        {

          duration: 8000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });



    });
  }










  








}
