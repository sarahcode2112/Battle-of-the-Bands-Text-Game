// the character's starting stats

// the old non-random way
// const character = {
//     healthPoints: 10,
//     rhythmSkillPoints: 2,
//     feelSkillPoints: 5,
//     dynamicsSkillPoints: 6
// }

const character = {
    healthPoints: 10,
    rhythmSkillPoints: Math.floor(Math.random() * 11),
    feelSkillPoints: Math.floor(Math.random() * 11),
    dynamicsSkillPoints: Math.floor(Math.random() * 11)
}

const opponent = {
    healthPoints: 10,
    rhythmSkillPoints: Math.floor(Math.random() * 11),
    feelSkillPoints: Math.floor(Math.random() * 11),
    dynamicsSkillPoints: Math.floor(Math.random() * 11)
}

console.log(opponent)


// the practice level-up functions

const practiceRhythm = () => {
    character.rhythmSkillPoints += 1
}

const practiceFeel = () => {
    character.feelSkillPoints += 1
}

const practiceDynamics = () => {
    character.dynamicsSkillPoints =+ 1
}

// old code: 
// console.log("You wake up on day 1. The battle of the bands is 4 days away (on day 5). What do you practice today? (Rhythm, feel, or dynamics?) Type your answer as a word.")


// the daily practice options below are always the same:

const dailyPractice = () => {
    if (input === "rhythm") {
        practiceRhythm()
    } else if (input === "feel") {
        practiceFeel()
    } else if (input === "dynamics") {
        practiceDynamics()
    } else {
        alert("That did not match any of the options. Please refresh the page and try again.")
    }
}


// the day 1:

let input = prompt("You wake up on day 1. The battle of the bands is 4 days away (on day 5). What do you practice today? (rhythm, feel, or dynamics?) Type your answer as a lower-case word.")

dailyPractice()

// for debugging only:
console.log(character)


// the day 2:

input = prompt("Your stats are now: Rhythm: " + character.rhythmSkillPoints + " Feel: " + character.feelSkillPoints + " Dynamics: " + character.dynamicsSkillPoints + ". You wake up on day 2. The battle of the bands is 3 days away (on day 5). What do you practice today? (rhythm, feel, or dynamics?) Type your answer as a lower-case word.")

dailyPractice()

// for debugging only:
console.log(character)


// the day 3:

input = prompt("Your stats are now: Rhythm: " + character.rhythmSkillPoints + " Feel: " + character.feelSkillPoints + " Dynamics: " + character.dynamicsSkillPoints + ". You wake up on day 3. The battle of the bands is 2 days away (on day 5). What do you practice today? (rhythm, feel, or dynamics?) Type your answer as a lower-case word.")

dailyPractice()

// for debugging only:
console.log(character)


// the day 4:

input = prompt("Your stats are now: Rhythm: " + character.rhythmSkillPoints + " Feel: " + character.feelSkillPoints + " Dynamics: " + character.dynamicsSkillPoints + ". You wake up on day 4. The battle of the bands is 1 day away (on day 5). What do you practice today? (rhythm, feel, or dynamics?) Type your answer as a lower-case word.")

dailyPractice()

// for debugging only:
console.log(character)


// the day 5:

let characterWinsRhythm = 0
let characterWinsFeel = 0
let characterWinsDynamics = 0


const calculateWinner = () => {
    
    if (character.rhythmSkillPoints > opponent.rhythmSkillPoints) {
        characterWinsRhythm = 1
    }
    if (character.feelSkillPoints > opponent.feelSkillPoints) {
        characterWinsFeel = 1
    }
    if (character.dynamicsSkillPoints > opponent.dynamicsSkillPoints) {
        characterWinsDynamics = 1
    }

    console.log(characterWinsRhythm, characterWinsFeel, characterWinsDynamics)

    let characterTotalWins = characterWinsRhythm + characterWinsFeel + characterWinsDynamics

    if (characterTotalWins > 1) {
        return "You won!"
    } else {
        return "You lost!"
    }
}


calculateWinner()



const result = calculateWinner()


alert("It is now day 5. You compete in the battle of the bands. What happens next?")
alert(result)


// day 5 continues with contrast explanations:

let rhythmExplanation = ""
let feelExplanation = ""
let dynamicsExplanation = ""


if (characterWinsRhythm === 1) {
    rhythmExplanation = "Your rhythm was superior."
} else {rhythmExplanation = "Your rhythm was inferior."}

if (characterWinsFeel === 1) {
    feelExplanation = "Your feel was superior."
} else {feelExplanation = "Your feel was inferior."}

if (characterWinsDynamics === 1) {
    dynamicsExplanation = "Your dynamics were superior."
} else {dynamicsExplanation = "Your dynamics were inferior."}


alert("This is a comparison of your skill points to your opponents' :")
alert(rhythmExplanation + " " + feelExplanation + " " + dynamicsExplanation)

alert("Thank you for playing! Goodbye!")