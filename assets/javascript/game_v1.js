    // variable space;


    var ganstaOne = {
        first: "a",
        second: "b",
        third: "c",
    }

 
    function setterT () {
        var blanky = Object.keys(ganstaOne);
        var txt = "";
        for (i = 0; i < blanky.length; i++){
            txt += blanky[i]
        }
        document.getElementById("adder").innerHTML = txt;
    }

setterT();






 