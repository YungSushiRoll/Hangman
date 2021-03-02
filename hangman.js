$(document).ready(function () {

    // array of artists
    var words = ['Sugar Ray', 'Duran Duran', 'Third Eye Blind', 'Depeche Mode', 'Tears for Fears', 'REM', 'Wham', 'Weezer', 'Green Day', 'No Doubt', 'The Cranberries', 'Beastie Boys', 'Rush'];
    // create random number to get random artist
    var ranNum = Math.floor(Math.random() * words.length);
    var randomWord = words[ranNum].split('');
    var displayWord = [];
    var displayHangman = ["H", "A", "N", "G", "M", "A", "N"];
    var incorrectLetter = [];
    var incorrectGuess = 0;
    var hintPhrases = ['Turn up that Sugar Ray baby!!', 'It\'s no Sugar Ray but, they make me HUNGRY LIKE A WOLF', 'It\'s no Sugar Ray so, you gotta tell me HOW\'S IT GOING TO BE',
        'It\'s no Sugar Ray but, I JUST CAN\'T GET ENOUGH', 'It\'s no Sugar Ray but, EVERYBODY WANTS TO RULE THE WORLD', 'It\'s no Sugar Ray but, I think I\'m LOSING MY RELIGION',
        'It\'s no Sugar Ray but, WAKE ME UP BEFORE YOU GO GO', 'It\'s not Sugar Ray... SAY IT AIN\'T SO!', 'It\'s no Sugar Ray but, could you WAKE ME UP WHEN SEPTEMBER ENDS?',
        'It\'s no Sugar Ray, there\'s NO DOUBT in my mind', 'It\'s no Sugar Ray but, it\'s making me a ZOMBIE', 'It\'s no Sugar Ray but, it has my BODY MOVIN\'',
        'It\'s no Sugar Ray but, it\'s got me feeling like I\'m TOM SAWYER'];



    $('#playAgain').hide();
    $('#hint').hide();
    $('#rules').hide();
    $('#play').hide();

    for (let i = 0; i < randomWord.length; i++)
    {
        displayWord[i] = "_ ";
        if (randomWord[i] === " ")
        {
            displayWord[i] = '<br>';
            randomWord[i] = '<br>';
        }
    }
    console.log(randomWord);
    $('#displayWord').html(displayWord);

    $(document).on('keyup', function(event) {
        var guessedLetter = event.key.toUpperCase();
        var isCorrect = false;
        var isDuplicated = false;

        for (let i = 0; i < incorrectLetter.length; i++)
        {
            if (guessedLetter === incorrectLetter[i].toUpperCase())
            {
                isDuplicated = true;
                break;
            }
        }

        if (!isDuplicated) {

            for (let i = 0; i < randomWord.length; i++) {
                if (guessedLetter === randomWord[i].toUpperCase()) {
                    displayWord[i] = guessedLetter;
                    $('#displayWord').html(displayWord);
                    if (displayWord.toString().toUpperCase() === randomWord.toString().toUpperCase()) {
                        $('#warnings').html("You Win!");
                        $('#hint').hide();
                        $('#rule').hide();
                        $('#playAgain').show();
                    }
                    isCorrect = true;
                }
            }
            if (!isCorrect) {
                incorrectGuess++;
                incorrectLetter.push(guessedLetter);
            }
            $('#wrongLetter').html("Incorrect Letters: " + incorrectLetter);
            switch (incorrectGuess) {
                case 1:
                    $('#losingPhrase').html(displayHangman[0]);
                    if (displayWord.toString().toUpperCase() === randomWord.toString().toUpperCase()) {
                        $('#warnings').html("You Win!");
                        $('#hint').hide();
                        $('#losingPhrase').hide();
                        $('#wrongLetter').hide();
                    }
                    break;
                case 2:
                    $('#losingPhrase').html(displayHangman[0] + displayHangman[1]);
                    if (displayWord.toString().toUpperCase() === randomWord.toString().toUpperCase()) {
                        $('#warnings').html("You Win!");
                        $('#hint').hide();
                        $('#losingPhrase').hide();
                        $('#wrongLetter').hide();
                    }
                    break;
                case 3:
                    $('#losingPhrase').html(displayHangman[0] + displayHangman[1] + displayHangman[2]);
                    if (displayWord.toString().toUpperCase() === randomWord.toString().toUpperCase()) {
                        $('#warnings').html("You Win!");
                        $('#hint').hide();
                        $('#losingPhrase').hide();
                        $('#wrongLetter').hide();
                    }
                    break;
                case 4:
                    $('#losingPhrase').html(displayHangman[0] + displayHangman[1] + displayHangman[2] + displayHangman[3]);
                    $('#warnings').html("You have 3 incorrect guesses left!");
                    $('#hint').show();
                    if (displayWord.toString().toUpperCase() === randomWord.toString().toUpperCase()) {
                        $('#warnings').html("You Win!");
                        $('#hint').hide();
                        $('#losingPhrase').hide();
                        $('#wrongLetter').hide();
                    }
                    break;
                case 5:
                    $('#losingPhrase').html(displayHangman[0] + displayHangman[1] + displayHangman[2] + displayHangman[3] + displayHangman[4]);
                    $('#warnings').html("You have 2 incorrect guesses left!");
                    if (displayWord.toString().toUpperCase() === randomWord.toString().toUpperCase()) {
                        $('#warnings').html("You Win!");
                        $('#hint').hide();
                        $('#losingPhrase').hide();
                        $('#wrongLetter').hide();
                    }
                    break;
                case 6:
                    $('#losingPhrase').html(displayHangman[0] + displayHangman[1] + displayHangman[2] + displayHangman[3] + displayHangman[4] + displayHangman[5]);
                    $('#warnings').html("Last incorrect guess!");
                    if (displayWord.toString().toUpperCase() === randomWord.toString().toUpperCase()) {
                        $('#warnings').html("You Win!");
                        $('#hint').hide();
                        $('#losingPhrase').hide();
                        $('#wrongLetter').hide();
                    }
                    break;
            }
            if (incorrectGuess === 7) {
                $('#losingPhrase').html(displayHangman[0] + displayHangman[1] + displayHangman[2] + displayHangman[3] + displayHangman[4] + displayHangman[5] + displayHangman[6]
                + "<br> GAME OVER!").css("font-size", "100px");
                $('#displayWord').hide();
                $('#warnings').hide();
                $('#hint').hide();
                $('#wrongLetter').hide();
                $('#rule').hide();
                $('#playAgain').show();
            }
        } else {
            $('#warnings').html(guessedLetter + " was guessed already, please guess a different letter.")
        }

    });

    $('#playAgain').on('click', function () {
        location.reload();
    });
    $('#rule').on('click', function () {
        $('#displayWord').hide();
        $('#rules').show();
        $('#play').show();
    });
    $('#play').on('click', function () {
        $('#rules').hide();
        $('#play').hide();
        $('#displayWord').show();
    });
    $('#hint').on('click', function () {

        console.log(randomWord.join(''), words[0]);
        $('#hints').html(hintPhrases[ranNum]);

    });
    console.log(randomWord, words[0].split(''));
});

// to do //////
// filter input
// (regular expressions)
// rules
// maybe hint button









