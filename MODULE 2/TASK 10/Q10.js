'use strict';
const target = document.querySelector('#target');
//candidates:

const candidate = ~~prompt('How many candidates are there?')
let candidates = [];

function candidateList(name,vote = 0) {
    for (let i = 0; i < candidate; i++) {
        const list = Object.create({})
        const names = prompt(`Name of candidate ${i+1}:`);
        list.name = names;
        list.vote = vote;
        candidates.push(list)
//        const result = `<li>${list.name}</li>`
//       target.innerHTML += result;
    }
    console.log('candidateList', candidates)

}
candidateList(name,0);

//voters:
const voter = ~~prompt('How many voters are there?')
let list_vote = []
function voting(vote) {
    for (let i = 0; i < voter; i++) {
        const vote = prompt(`Who do you want to vote?`);
        list_vote.push(vote);
    }
    let count = 0
    for (let j = 0; j < list_vote.length; j++) {
        if (list_vote[j] === name) {
            count ++;
        }


    }

    const result = `<li>${list_vote}</li>`
    target.innerHTML += result;
}

voting(vote);










