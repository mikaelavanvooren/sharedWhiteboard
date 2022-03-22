/** Takes in parameter length and then returns a string of
 * psuedorandomly selected characters of the given length */
function makeBoardCode(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


/** Creates a new whiteboard which, by default is pseudorandomally generated
 * but can be given a specific session as a parameter if a random session is
 * not wanted. */
function makeWhiteboard(bc = 0) {
        var boardCodeStem = 'PnyAc1rVIuBvsPEG0H_B2RUrp3';
        var newBoardCode = bc
        if (newBoardCode == 0){
                newBoardCode = makeBoardCode(3);
        }
        wt = new api.WhiteboardTeam('#wt-container', {
                clientId: '96eb41b9bec7a47eab02cdea4077fca1',
                boardCode: boardCodeStem + newBoardCode
        });
        console.log(newBoardCode);
        return wt;
}

var whiteboard = makeWhiteboard();
whiteboard.onReady(() => console.log("running"));