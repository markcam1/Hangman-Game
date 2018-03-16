// OUTSIDE DOC READY

$(document).ready(function(){
    
    var userChoice;
    var remainChoice = 8;
    var spanTag = 0;
    var lettersToWin = 0;
    var currentGameArr = [];
    var garbChecker = [];
    var totalGamesWon = 0;
    var totalGamesLost = 0;

    var hunchObj = { arr1: ["q", "u", "a","s","i","m","o","d","o"], garbArr: [], gameName: "Hunch", link: "assets/images/hunch.png"};
    var psychoObj = { arr1: ["n","o","r","m","a","n","b","a","t","e","s"], garbArr: [], gameName: "Psycho", link: "assets/images/psy.jpg"};
    var sawObj = { arr1: ["b", "i", "l", "l", "y"], garbArr: [], gameName: " Jigsaw", link: "assets/images/saw.jpg"};
    var nightObj = { arr1: ["f","r","e","d","d","y","k","r","u","e","g","e","r"], garbArr: [], gameName: "Nightmare", link: "assets/images/fred.jpg"};
    var itObj = { arr1: ["p","e","n","n","y","w","i","s","e","t","t","h","e","d","d","a","n","c","i","n","g","c","l","o","w","n"], garbArr: [], gameName: "It", link: "assets/images/penny.jpg"};
    
    var allGameObj = [sawObj, nightObj, itObj, psychoObj, hunchObj];
    
    function setStart(arrV){
        //set html data
        $("#posKeep").remove();
        $("#posParent").append($("<h2>").attr("id", "posKeep"));

        //load array and set blanks
        $(arrV).each(function(){
            spanNum = spanTag;
            var startStringIndex = spanNum.toString();
            lettersToWin++;

            $("#posKeep").append($("<span>").attr("id", startStringIndex).text(" __ "))
            $("#remain").text(this.remainChoice);
            spanTag++
        }); 
        spanTag = 0;
    };

    //collect used letters for latest string
    function setStartGarbCollector(currentGarbageArr){
        $("#picks").empty();
        window.currentGarbageArr = currentGarbageArr;
    };
    function garbageLetters(throwAwayLetter){
        currentGarbageArr.push(throwAwayLetter);
        setBoard(throwAwayLetter);
    }

    //set win/lose score
    function winner(){
        objCall();
        totalGamesWon++;
        remainChoice = 8;
        $("#winBrowser").text(totalGamesWon);
    }

    function loser(){
        objCall();
        totalGamesLost++;
        $("#lostBrowser").text(totalGamesLost).toggle( "highlight" );
        remainChoice = 8;
    }

    //check current score and file used letters
    function setBoard(throwAwayLetter){
        this.remainChoice = remainChoice;
        $("#remain").text(this.remainChoice);

        if (lettersToWin === 0 ) {
            winner();
        }
        if (remainChoice === 0) {
            loser();
        }

        var allUserChoices = throwAwayLetter;
        $("#picks").prepend($("<span>").text(allUserChoices));
    }
    
    function goodLetter (goodStr, startIndex){
        this.goodStr = goodStr
        this.startIndex = startIndex
        var indexNum = currentGameArr.indexOf(this.goodStr, this.startIndex);

        finder(indexNum) 
        function finder (findNum) {
            if ( findNum !== -1) {
                stringer(findNum);
            }               
        }
        // debugger
        function stringer(stringNum){
            var strIndex = stringNum.toString();
            var spanIdStr ="#" + strIndex;
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

                if (garbChecker === true){
                    alert("That letter used already, my soon dead friend.");
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
        objHint(currentGameObj);

        function objSetGarbarge (currentGameObj) {
            singleGarbageObj = currentGameObj
            currentGarbageObj = $.each(singleGarbageObj, function(value, index){
            });
           
            currentGarbageArr = currentGarbageObj.garbArr;
            setStartGarbCollector(currentGarbageArr);
        }
        function objSetImage (currentGameObj) {
            singleImageObj = currentGameObj
            currentImageObj = $.each(singleImageObj, function(value, index){
            });
           
            currentImageLink = currentImageObj.link;
            $("#placehold").attr("src", currentImageLink)
        }
        function objHint (currentGameObj) {
            singleHintObj = currentGameObj
            currentHintObj = $.each(singleHintObj, function(value, index){
            });
           
            currentHintText = currentHintObj.gameName;
            $("#hint").text(currentHintText)
        }
    }

    $("#newGameBtn").on("click", function gamePlay(event) {
        objCall();
        $(".myForm").show( "slow" );
    });
    $("#reLoad").on("click", function reloadPage(event) {
        location.reload();
    });
});    
    


 