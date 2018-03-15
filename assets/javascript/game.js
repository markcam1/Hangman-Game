// OUTSIDE DOC READY

$(document).ready(function(){
    
    var userChoice;
    var remainChoice = 8;
    var spanTag = 100;
    var lettersToWin = 0;
    var currentGameArr = [];
    var doneLetters = [];
    var garbChecker = [];
    var totalGamesWon = 0;
    var totalGamesLost = 0;


    var hunchObj = { arr1: ["q", "u", "a","s","i","m","o","d","o"], garbArr: [], gameName: "hunch", link: "assets/images/hunch.png"};
    var psychoObj = { arr1: ["n","o","r","m","a","n","b","a","t","e","s"], garbArr: [], gameName: "psycho", link: "assets/images/psy.jpg"};
    var sawObj = { arr1: ["b", "i", "l", "l", "y"], garbArr: [], gameName: " Jigsaw", link: "assets/images/saw.jpg"};
    var nightObj = { arr1: ["f","r","e","d","d","y"], garbArr: [], gameName: "Nightmare", link: "assets/images/fred.jpg"};
    
    var allGameObj = [nightObj, sawObj, psychoObj, hunchObj];
    
    function setStart(arrV){
        //set html before blank letter load
        $("#posKeep").remove();
        $("#posParent").append($("<h2>").attr("id", "posKeep"));

        $(arrV).each(function(){
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
    function garbageLetters(throwAwayLetter){
        currentGarbageArr.push(throwAwayLetter);
        setBoard(throwAwayLetter);
    }

    function winner(){
        objCall();
        totalGamesWon++;
        remainChoice = 8;
        $("#winBrowser").text(totalGamesWon);
    }

    function loser (){
        totalGamesLost++;
        $("#lostBrowser").text(totalGamesLost);
        remainChoice = 8;
        objCall();
    }

    function setBoard(throwAwayLetter){
        
        this.remainChoice = remainChoice;
        $("#remain").text(this.remainChoice);
        console.log("board remain: " + remainChoice);

        if (lettersToWin === 0 ) {
            // objSetGarbarge();
            winner();
        }
        
        if (remainChoice === 0) {
            loser();
            // remainChoice = 8;
        }

        var allUserChoices = throwAwayLetter;
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

        // debugger
        
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
                var garbChecker = currentGarbageArr.includes(this.letterToBeChecked);
                console.log("key: " + garbChecker)
                console.log("arr in btn: " + currentGarbageArr)
                if (garbChecker === true){
                    alert("done already");
                }
                else {
                    var testLetter = currentGameArr.includes(letterToBeChecked);
                    if ( testLetter === true) {
                        goodLetter(letterToBeChecked, 0)
                        garbageLetters(userChoice);
                    }
                    else if ( testLetter === false) {
                        remainChoice--    
                        garbageLetters(userChoice);    
                        
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
        
        objSetGarbarge(currentGameObj);
        objSetImage(currentGameObj);

        function objSetGarbarge (currentGameObj) {
            singleGarbageObj = currentGameObj
            console.log(singleGarbageObj);
            currentGarbageObj = $.each(singleGarbageObj, function(value, index){
            });
           
            currentGarbageArr = currentGarbageObj.garbArr;
            console.log(currentGarbageArr);
            setStartGarbCollector(currentGarbageArr);
        }
        function objSetImage (currentGameObj) {
            singleImageObj = currentGameObj
            console.log(singleImageObj);
            currentImageObj = $.each(singleImageObj, function(value, index){
            });
           
            currentImageLink = currentImageObj.link;
            $("#placehold").attr("src", currentImageLink)
            console.log("link starter: " + currentImageLink);

        }
    }

    $("#newGameBtn").on("click", function gamePlay(event) {
        objCall();
        $(".myForm").show( "slow" );
    });
    $("#reLoad").on("click", function reloadPage(event) {
        location.reload();
    });

    // setBoard();


    

   
    








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
    


 