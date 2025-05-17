const qbank = {
  "Should a devout Muslim woman be forced to take off her hijab to take a passport photo (assume that the hijab covers most identifiable features)?" : { 
    1: "Yes, of course – she should take it off while going through government security (i.e. TSA)", 
    2: "Yes, but the state must be accommodating to her religious beliefs", 
    3: "No, not at all, but it is important that her faith is verified",
    4: "No, not at all, no questions asked",
    5: {x: 0, y: 0}
  },
  "What should be criminally punished?" : {
    1: "Hard Drugs (cocaine, meth, etc.)",
    2: "Hard Drugs and Marijuana",
    3: "Hard Drugs, Marijuana, and alcohol",
    4: "None",
    5: {x: 0, y: 0}

  },
  "Which of the following do you most closely agree with? (assume there is an age requirement for the license)" : {
    1: "The state should require all drivers to have a license and ensure that they renew and retest for this license every so often",
    2: "The state should require all drivers to have a license; no renewal",
    3: "Anyone should be able to drive as long as they are properly insured",
    4: "Anyone should be able to drive full stop",
    5: {x: 0, y: 0}

  },
  "Which of the following do you most closely agree with?" : {
    1: "Anyone should be able to own any gun",
    2: "Anyone should be able to own only certain, less powerful guns",
    3: "Anyone who demonstrates a need (approved by the state) should be able to own a gun that corresponds to their need",
    4: "Guns should be completely outlawed (except for law enforcement)",
    5: {x: 0, y: 0}

  },
  "What is the premise behind your stance on gun control?" : {
    1: "The average human can not be trusted with a gun",
    2: "A small portion of humans can not be trusted with a gun",
    3: "Although certain humans shouldn’t own a gun, the average human shouldn’t be restricted because of this",
    4: "All humans can be trusted with a gun",
    5: {x: 0, y: 0}

  },
  "What do you think about social security?" : {
    1: "It is necessary to support a population of mixed abilities",
    2: "Those who demonstrate extreme financial capability should be able to opt out of social security",
    3: "Social security is completely unnecessary and is an overreach of the government",
    4: "Social security is completely good even if the entire population was financially stable",
    5: {x: 0, y: 0}

  },
  "What do you think about voting/government structure (choose the closest answer)?" : {
    1: "A representative government is the best because politicians are more educated about legislation than the general population",
    2: "A direct democracy would be an improvement over the current republic system as it more closely reflects the opinions of the population",
    3: "A stronger executive branch (regardless of current politics) will allow for a more quickly-acting government that is overall better",
    4: "It would be an improvement to minimize the federal government and vest more power in individual areas (i.e. provinces)",
    5: {x: 0, y: 0}

  },
  "Should parents be allowed to homeschool their children without state oversight?" : {
    1: "Yes, education is a parental right",
    2: "Yes, but the state should require occasional testing",
    3: "No, homeschooling should be heavily regulated and standardized",
    4: "No, all children should attend state-accredited institutions",
    5: {x: 0, y: 0}

  },
  "Should children be forced to go to school?" : {
    1: "Yes and they should be punished otherwise (truancy)",
    2: "Yes, but the state should be accommodating if going to school is a financial burden",
    3: "No, but only if a reason is provided and validated (i.e. child needs to work)",
    4: "No, not at all.",
    5: {x: 0, y: 0}

  },
  "Should vaccines be mandated? (disregard those with legitimate health exemptions)" : {
    1: "Yes, all vaccines should be mandated that have proven to be beneficial",
    2: "Yes, but only during times of a health crisis (i.e. covid)",
    3: "Yes, but there should be exceptions for legitimate religious and personal beliefs",
    4: "No, never and with no strings attached",
    5: {x: 0, y: 0}

  },
  "How do you view freedom of speech?" : {
    1: "All speech should be allowed, no matter what",
    2: "Speech that immediately puts someone in harm shouldn’t be allowed",
    3: "Answer b and hateful/offensive speech shouldn’t be allowed",
  },
  "How do you view the solution to homelessness?" : {
    1: "The state should offer help to all homeless people",
    2: "The state should offer help to all homeless people and those who refuse/break the rules should be fined and moved",
    3: "The state shouldn’t directly offer support, but should provide support if specifically asked for",
    4: "The state shouldn’t offer any help to homeless people",
  },
  "If people were completely free, what would most likely happen?" : {
    1: "Society would devolve into anarchy as people compete for survival",
    2: "Society would devolve into a utopian anarchy where people cooperate without an overarching government",
    3: "Society would quickly bring back the same (or almost the same) rules",
    4: "Society would bring back rules that are completely different than from before",
  },
  "Can the average person be trusted with a large responsibility that greatly affects the life of others?" : {
    1: "No, but a few people can",
    2: "No, no one can",
    3: "Yes, but not everybody can",
    4: "Everybody can be trusted",
  },
  "Why are laws necessary?" : {
    1: "To ensure that people don’t act out of line",
    2: "To improve society even more, although a lawless society would work fine",
    3: "The guidance found in laws props up the good in humans",
    4: "While unnecessary for the majority of the population, they are necessary for the minority to not act out",
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
//for (questions in qbank){
//  console.log(questions)
//
//
//}

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
    question.innerHTML +=(` <input type="radio" onchange=update(${i+1}) name="${(i+1)}" value="${four[k]}" >${letters[k]}. ${qbank[aqbank[numbers[i] - 1]][k+1]} <br></br>`)

  }
  
  quiz.appendChild(question)

  }


  function update(num){
    const answer = document.querySelector(`input[name="${num}"]:checked`).value
    console.log(answer)
    localStorage.setItem(num, answer)
  }

  qbank[aqbank[numbers[i] - 1]][k + 1]
  qbank[aqbank[numbers[i] - 1]][k+1]