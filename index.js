// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(todolist="go to the office") {

    return `This Monday, I will ${todolist}.`
}

function wrapAdjective (highlight="*") {
    return function encouragement(flair="Special") {
        return `You are ${highlight}${flair}${highlight}!`
    }
}

wrapAdjective("%")("a dedicated programmer")