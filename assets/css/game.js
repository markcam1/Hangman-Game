// OUTSIDE DOC READY

$(document).ready(function(){
    
    var userChoice;
    var remainChoice = 8;
    var spanTag = 100;
    var arrStart;
    var lettersToWin = 0;
    var currentGameArr = [];
    var doneLetters = [];
    var ddd = [];
    var totalGamesWon = 0;
    var totalGamesLost = 0;


    var arrTest1 = { arr1: ["a", "b", "c"], garbArr: [], gameName: "cam1", link: "https://www.w3schools.com/js/js_objects.asp"};
    var arrTest2 = { arr1: ["x", "y", "z", "q","w"], garbArr: [], gameName: "cam1000", link: "https://www.w3schools.com/js/js_objects.asp"};
    var arrTest3 = { arr1: ["e", "e", "s", "p"], garbArr: [], gameName: "cam1000", link: "https://www.w3schools.com/js/js_objects.asp"};
    var arrTest4 = { arr1: ["l", "o", "o","p"], garbArr: [], gameName: "cam1000", link: "https://www.w3schools.com/js/js_objects.asp"};
    
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
        }); 
        spanTag = 100;
        
    };
    function setStartGarbCollector(currentGarbageArr){
        $("#picks").empty();

        window.currentGarbageArr = currentGarbageArr;
    };


    //new##################

    function garbageLetters(ggg){

        currentGarbageArr.push(ggg);
        console.log("garbage: " + ggg)
    }

    

    function setBoard(allUserChoices){
        
        this.remainChoice = remainChoice;
        $("#remain").text(this.remainChoice);
        console.log(remainChoice);


        if (lettersToWin === 0 ) {
            objCall();
            objSetGarbarge();
            totalGamesWon++;
            $("#winBrowser").text(totalGamesWon);
        }
        
        if (remainChoice === 0) {
            totalGamesLost++;
            $("#lostBrowser").text(totalGamesLost);
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

        var trash = allUserChoices;
        garbageLetters(trash);
        $("#picks").prepend($("<span>").text(allUserChoices));
    }
    
    function goodLetter (goodStr, startIndex){
        

        this.goodStr = goodStr
        this.startIndex = startIndex
        var indexNum = currentGameArr.indexOf(this.goodStr, this.startIndex);
        console.log("good num b4 finder: " + indexNum)

        finder(indexNum) 
        function finder (findNum) {
            if ( findNum !== -1) {
                stringer(findNum);
            }
                        
        }
        function stringer(stringNum){
            var strIndex = stringNum.toString();
            var spanIdStr = "#10" + strIndex;
            $(spanIdStr).text(currentGameArr[stringNum]);
            lettersToWin--
            goodLetter(goodStr, stringNum + 1);
        }
        
    }

    
    $("#userText").on("keyup", function mainFunction(event) {
        var userChoice = event.key.toLowerCase();
        checkLetter(userChoice);

            function checkLetter (letterToBeChecked){
                
                this.letterToBeChecked = letterToBeChecked
                var ddd = currentGarbageArr.includes(this.letterToBeChecked);
                console.log("key: " + ddd)
                console.log("arr in btn: " + currentGarbageArr)
                if (ddd === true){
                    alert("done already");
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
                setBoard(userChoice);
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
    function objSetGarbarge () {
        singleGarbageObj = allGameObj.pop()
        currentGarbageObj = $.each(singleGarbageObj, function(value, index){
        });
       
        currentGarbageArr = currentGarbageObj.garbArr;
        console.log("objCall array: " + currentGarbageArr);
        setStartGarbCollector(currentGarbageArr);
    }

    $("#newGameBtn").on("click", function gamePlay(event) {
        objCall();
        objSetGarbarge();
        $(".myForm").show( "slow" );
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
    


 