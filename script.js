    var hrs = 0;
    var mins = 0; 
    var secs = 0;
    var timer = false;
    var count = 0;

    function start(){
       timer = true;
       startTimer();

    }

    function stop(){
        timer = false;
    }

    function reset(){
        timer = false;
        var hrs = 0;
        var mins = 0; 
        var secs = 0;
        var count = 0;

        document.getElementById('hours').innerHTML = "00";
        document.getElementById('mins').innerHTML = "00";
        document.getElementById('secs').innerHTML = "00";
        document.getElementById('msecs').innerHTML = "00";
    }
     
    function startTimer () {
      if(timer == true){
          count++;
          if(count == 100)
          {
              secs++;
              count = 0;
          }

          if(secs == 60)
          {
              mins++;
              secs = 0;
          }

          if(mins == 60)
          {
              hrs++;
              mins = 0;
              secs = 0;
          }
        

          var hString = hrs;
          var mString = mins;
          var sString = secs;
          var msString = count;

          if(hString < 10){
            hString = "0" + hString;
          }

          if(mString < 10){
            mString = "0" + mString;
          }

          if(sString < 10){
            sString = "0" + sString;
          }

          if(msString < 10){
            msString = "0" + msString;
          }


        document.getElementById('hours').innerHTML = hString;
        document.getElementById('mins').innerHTML = mString;
        document.getElementById('secs').innerHTML = sString;
        document.getElementById('msecs').innerHTML = msString;
    

    setTimeout(startTimer, 10);
      
}
    }
      