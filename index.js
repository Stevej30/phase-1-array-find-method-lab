// will loop through array
function loopThrough(answer, finder){
    let thisThing = null;
    for(let item of answer){
        if(finder(item) === true){
            thisThing = item;
            break;
        }
    }
}

//will find superbowl win

function superbowlWin(final){
    return answer.final === "W";
}