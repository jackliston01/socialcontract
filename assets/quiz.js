// x is for auth/lib and y is for good/selfish


const qbank = {
  "Should a devout Muslim woman be forced to take off her hijab to take a passport photo (assume that the hijab covers most identifiable features)?": {
    1: "Yes, of course – she should take it off while going through government security (i.e. TSA)",
    2: "Yes, but the state must be accommodating to her religious beliefs",
    3: "No, not at all, but it is important that her faith is verified",
    4: "No, not at all, no questions asked",
    5: { x: 1, y: 0.1 }
  },
  "What should be criminally punished?": {
    1: "Hard Drugs, Marijuana, and alcohol",
    2: "Hard Drugs and Marijuana",
    3: "Hard Drugs (cocaine, meth, etc.)",
    4: "None",
    5: { x: 0.9, y: 0.05 }
  },
  "Which of the following do you most closely agree with? (assume there is an age requirement for the license)": {
    1: "The state should require all drivers to have a license and ensure that they renew and retest for this license every so often",
    2: "The state should require all drivers to have a license; no renewal",
    3: "Anyone should be able to drive as long as they are properly insured",
    4: "Anyone should be able to drive full stop",
    5: { x: 1, y: 0.05 }
  },
  "Which of the following do you most closely agree with?": {
    1: "Guns should be completely outlawed (except for law enforcement)",
    2: "Anyone who demonstrates a need (approved by the state) should be able to own a gun that corresponds to their need",
    3: "Anyone should be able to own only certain, less powerful guns",
    4: "Anyone should be able to own any gun",
    5: { x: 0.75, y: 0.25 }
  },
  "What is the reasoning behind your stance on gun control?": {
    1: "The average human can not be trusted with a gun",
    2: "A small portion of humans can not be trusted with a gun",
    3: "Although certain humans shouldn’t own a gun, the average human shouldn’t be restricted because of this",
    4: "All humans can be trusted with a gun",
    5: { x: 0.1, y: 0.95 }
  },
  "What do you think about social security?": {
    1: "The government has a duty to provide social security for all, ensuring a safety net regardless of individual circumstances.",
    2: "The government should provide social security, but allow wealthy individuals to opt out.",
    3: "The government should not interfere; individuals should manage their own financial futures without mandatory programs.",
    4: "Any form of government-managed welfare is an overreach and should be abolished.",
    5: { x: 0.8, y: 0.2 }
  },
  "What do you think about voting/government structure (choose the closest answer)?": {
    1: "A stronger executive branch (regardless of current politics) will allow for a more quickly-acting government that is overall better",
    2: "A representative government is the best because politicians are more educated about legislation than the general population",
    3: "A direct democracy would be an improvement over the current republic system as it more closely reflects the opinions of the population",
    4: "It would be an improvement to minimize the federal government and vest more power in individual areas (i.e. provinces, municipalites)",
    5: { x: 0.6, y: 0.2 }
  },
  "Should parents be allowed to homeschool their children without state oversight?": {
    1: "No, all children should attend state-accredited institutions",
    2: "No, homeschooling should be heavily regulated and standardized",
    3: "Yes, but the state should require occasional testing",
    4: "Yes, education is a parental right",
    5: { x: 0.7, y: 0.15 }
  },
  "Should children be forced to go to school?": {
    1: "Yes and they should be punished otherwise (truancy)",
    2: "Yes, but the state should be accommodating if going to school is a financial burden",
    3: "No, but only if a reason is provided and validated (i.e. child needs to work)",
    4: "No, not at all.",
    5: { x: 0.5, y: 0.1 }
  },
  "Should vaccines be mandated? (disregard those with legitimate health exemptions)": {
    1: "Yes, all vaccines should be mandated that have proven to be beneficial",
    2: "Yes, but only during times of a health crisis (i.e. covid)",
    3: "Yes, but there should be exceptions for legitimate religious and personal beliefs",
    4: "No, never and with no strings attached",
    5: { x: 0.6, y: 0.3 }
  },
  "How do you view freedom of speech?": {
    1: "Conspiracy + physically harmful + hate speech/offensive speech shouldn't be allowed",
    2: "Physically harmful + conspiracy shouldn't be allowed (i.e. plotting a murder)",
    3: "Speech that immediately puts someone in harm shouldn’t be allowed (i.e. yelling fire in a crowded building)",
    4: "All speech should be allowed, no matter what", 

    5: { x: 0.8, y: 0.2 }
  },
  "How do you view the solution to homelessness?": {
  1: "The state should offer help to all homeless people",
  2: "The state should offer help to all homeless people and those who refuse/break the rules should be fined and moved",
  3: "The state shouldn’t directly offer support, but should provide support if specifically asked for",
  4: "The state shouldn’t offer any help to homeless people",
  5: { x: 0.65, y: 0.2 }
},

  "If people were completely free, what would most likely happen?": {
    1: "Society would devolve into anarchy as people compete for survival",
    2: "Society would bring back rules that are completely different than from before",
    3: "Society would quickly bring back the same (or almost the same) rules",
    4: "Society would devolve into a utopian anarchy where people cooperate without an overarching government",
    5: { x: 0.5, y: 0.9 }
  },
  "Can the average person be trusted with a large responsibility that greatly affects the life of others?": {
    1: "No, no one can",
    2: "No, but a few people can",
    3: "Yes, but not everybody can",
    4: "Everybody can be trusted",
    5: { x: 0.2, y: 1 }
  },
  "Why are laws necessary?": {
    1: "To ensure that people don’t act out of line",
    2: "While unnecessary for the majority of the population, they are necessary for the minority to not act out",
    3: "The certainty and guidance found in laws props up the good in humans",
    4: "To improve society even more, although a lawless society would work fine",
    5: { x: 0.2, y: 0.8 }
  }
};


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]//Fisher Yates Algorithm
for (let i = numbers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; 
}

const four = [1,2,3,4]
const letters = ["a","b", "c", "d"]

function scramble(){
for (let i = four.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [four[i], four[j]] = [four[j], four[i]]; 
}

}

console.log(numbers)

aqbank = Object.keys(qbank)

for (let i=0; i<15; i++){
  scramble()
  const question = document.createElement("div")
  const quiz = document.getElementById("quiz")
  question.setAttribute("class", "question")
  question.setAttribute("id", (i+1))
  question.innerHTML = (`<label>${i+1}. ${(aqbank[(numbers[i]-1)])}</label>`)
  question.innerHTML += ("<br>")
  for (let k=0; k<4; k++){
    question.innerHTML +=(` <input type="radio" onchange=update(${i+1}) name="${(i+1)}" value='{"val": ${four[k]}, "mag": ${JSON.stringify(qbank[aqbank[numbers[i] - 1]][(5)])}}' >${letters[k]}. ${qbank[aqbank[numbers[i] - 1]][(four[k])]} <br></br>`)

  }
  
  quiz.appendChild(question)

  }


  function update(num){
    const answer = document.querySelector(`input[name="${num}"]:checked`).value
    console.log(answer)
    localStorage.setItem(num, (JSON.stringify(answer)))
  }

function seeresults(){
  cont = true
for (let i=1; i<16; i++){
if (!localStorage.getItem(i)){
  cont = false
  alert(`You need to answer all questions. Question ${i} is blank.`)
  break
}

}

if (cont){
window.location.href = 'results.html';
}}