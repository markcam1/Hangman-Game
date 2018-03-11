$(document).ready(function(){
    
    var userChoice;
    var remainChoice = 8;
    var spanTag = 100;
    
    var testArr = [
        "a",
        "b",
        "c",
        "d"
    ]
    
    function setStart(){
        $(testArr).each(function(){
            this.remainChoice = remainChoice;
            xx = spanTag;

            $("#adder").append($("<span>").attr("id", xx).text(" __ "))
            $("#remain").text(this.remainChoice);
            spanTag++
        })
    }
    
    function setBoard (allUserChoices){
        
        //dec fun - need to do stuff on "0"
        this.remainChoice = remainChoice;
        $("#remain").text(this.remainChoice);
        console.log(remainChoice);

        // go last
        $("#picks").prepend($("<span>").text(allUserChoices));
    }
    
    function checkLetter (letterToBeChecked){
        //do I need the line below
        this.letterToBeChecked = letterToBeChecked
        indexNum = testArr.indexOf(this.letterToBeChecked);

        if ( indexNum === -1) {
            remainChoice--

            //dec Guesses Remaining

        }
        else if ( indexNum !== -1) {
           var ss = indexNum.toString();
           var zz = "#10" + ss;
           $(zz).text(testArr[indexNum]);
           console.log(zz);
        
            //find index/letter and paint page

        }
        setBoard(this.letterToBeChecked);
    }

    
    $("#userText").on("keydown", function myFunction(event) {
        var userChoice = event.key;
        checkLetter(userChoice);

        // if (userChoice == "a" || userChoice == "A") { 
        //     alert ("You pressed the 'A' key!");
        // }



    });
    



    // works - attach to start btn
    setStart();
    
    

});    
    


 