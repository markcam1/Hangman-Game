// OUTSIDE DOC READY

$(document).ready(function(){
    
    var userChoice;
    var remainChoice = 8;
    var spanTag = 100;
    var arrStart;
    var lettersToWin = 0;
    var currentGameArr = [];
    var doneLetters = [];
    var totalGamesWon = 0;
    var totalGamesLost = 0;


    var arrTest1 = { arr1: ["a", "b", "c"], gameName: "cam1", link: "https://www.w3schools.com/js/js_objects.asp"};
    var arrTest2 = { arr1: ["x", "y", "z", "q","w"], gameName: "cam1000", link: "https://www.w3schools.com/js/js_objects.asp"};
    var arrTest3 = { arr1: ["e", "e", "s", "p"], gameName: "cam1000", link: "https://www.w3schools.com/js/js_objects.asp"};
    var arrTest4 = { arr1: ["l", "o", "o","p"], gameName: "cam1000", link: "https://www.w3schools.com/js/js_objects.asp"};
    
    var allGameObj = [arrTest1, arrTest2, arrTest3, arrTest4];
    
    function setStart(arrV){
        //set html before blank letter load
        $("#posKeep").remove();
        $("#posParent").append($("<h2>").attr("id", "posKeep"));

        
        $(arrV).each(function(){
            this.remainChoice = remainChoice;
            spanNum = spanTag;
            lettersToWin++;

            $("#posKeep").append($("<span>").attr("id", spanNum).text(" __ "))
            $("#remain").text(this.remainChoice);
            spanTag++
        }); spanTag = 100;
    };
    

    //new##################

    function garbageLetters(ggg){

        doneLetters.push(ggg);
        console.log("garbage: " + ggg)


    }

   function winCounter (){

   }
    function setBoard(allUserChoices){
        
        this.remainChoice = remainChoice;
        $("#remain").text(this.remainChoice);
        console.log(remainChoice);


        if (lettersToWin === 0 ) {
            objCall();
            totalGamesWon++;
            $("#winBrowser").text(totalGamesWon);
        }
        
        if (remainChoice === 0) {
            totalGamesLost++;
            $("#lostBrowser").text(totalGamesWon);
            var playAgain = confirm("You lose; Play again?");
            if (playAgain === true){
                objCall();
            }
            else {
                alert("Too bad, loser. Play!")
                objCall();
            }
            
            remainChoice = 8;
        }

        // go last
        var trash = allUserChoices;
        console.log("board: " + trash)
        garbageLetters(trash);
        $("#picks").prepend($("<span>").text(allUserChoices));
    }
    
    function goodLetter (goodStr, startIndex){
        var goodCount = 0;

        this.goodStr = goodStr
        this.startIndex = startIndex
        var indexNum = currentGameArr.indexOf(this.goodStr, startIndex);

        if ( indexNum !== -1) {
           var strIndex = indexNum.toString();
           var spanIdStr = "#10" + strIndex;
           $(spanIdStr).text(currentGameArr[indexNum]);

           goodLetter(goodStr, indexNum + 1);
           goodCount++
        }
    }
    
    $("#userText").on("keyup", function mainFunction(event) {
        var userChoice = event.key.toLowerCase();
        checkLetter(userChoice);
        
        //need to see if this call can be moved
        setBoard(userChoice);

            function checkLetter (letterToBeChecked){
                
                this.letterToBeChecked = letterToBeChecked

            
                var ddd = doneLetters.includes(this.letterToBeChecked);
                console.log("key: " + ddd)

                if (ddd === true){
                    prompt("done already");
                }
                else {

                    var testLetter = currentGameArr.includes(letterToBeChecked);
                    if ( testLetter === true) {
                        goodLetter(letterToBeChecked, 0)
                    }
                    else if ( testLetter === false) {
                        remainChoice--        
                    }
                }


            }
        
    });
    
    function objCall () {
        singleGameObj = allGameObj.pop()
        currentGameObj = $.each(singleGameObj, function(value, index){
        });
       
        currentGameArr = currentGameObj.arr1;
        console.log("objCall array: " + currentGameArr);
        setStart(currentGameArr);
    }

    $("#newGameBtn").on("click", function gamePlay(event) {
        objCall();
    });
    $("#reLoad").on("click", function reloadPage(event) {
        location.reload();
    });


    

   
    








    // function toggleGamePlay() {
    //     if (endGame !== true)
    //     {
    //         endGame = false;
    //     } else if (endGame)
    //     {
    //     endGame= false;
    //     }

    // }      




    
    

});    
    


 