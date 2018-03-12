$(document).ready(function(){
    
    var userChoice;
    var remainChoice = 8;
    var spanTag = 100;
    
    var testArr = ["a","b","b","b"]
    var arrTwo = ["x","x","y","z"]
    
    function setStart(arrStart){

        $(arrStart).each(function(){
            this.remainChoice = remainChoice;
            spanNum = spanTag;

            $("#adder").append($("<span>").attr("id", spanNum).text(" __ "))
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
    
    function goodLetter (goodStr, startIndex){
        
        this.goodStr = goodStr
        this.startIndex = startIndex
        var indexNum = testArr.indexOf(this.goodStr, startIndex);

        if ( indexNum !== -1) {
           var strIndex = indexNum.toString();
           var spanIdStr = "#10" + strIndex;
           $(spanIdStr).text(testArr[indexNum]);

           goodLetter(goodStr, indexNum + 1);

           console.log(spanIdStr);
           console.log(indexNum);
           console.log(this.letterToBeChecked);
        }else {
            alert("good pick");
        }
    }
    
    $("#userText").on("keyup", function mainFunction(event) {
        var userChoice = event.key.toLowerCase();
        checkLetter(userChoice);
        //need to see if this call can be moved
        setBoard(userChoice);

            function checkLetter (letterToBeChecked){
                //do I need the line below
                this.letterToBeChecked = letterToBeChecked
                var ttt = testArr.includes(this.letterToBeChecked);
                if ( ttt === true) {
                    goodLetter(letterToBeChecked, 0)
                }
                else if ( ttt === false) {
                    remainChoice--        
                }
            }
    });
    



    // works - attach to start btn
    setStart();
    
    

});    
    


 