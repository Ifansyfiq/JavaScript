    function pass(){
        var mark = prompt("enter ur mark:")
        var gred;
        if (mark<50){
            gred = "F"
        }
        else if (mark>49 && mark<60){
            gred = "D"
        }
        else if (mark>59 && mark<70){
            gred = "C"
        }
        else if (mark>69 && mark<80){
            gred = "B"
        }
        else 
        gred = "A"

        document.write("Gred:"+gred)
    }
    