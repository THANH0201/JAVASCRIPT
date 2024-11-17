'use strict';
const target = document.querySelector('#target');
/*
function countOccurrences(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
}

// Ví dụ sử dụng
let array = [1, 2, 3, 1, 2, 1];
let result = countOccurrences(array);
console.log(result); // { '1': 3, '2': 2, '3': 1 }
*/
//candidates:

const candidate = ~~prompt('How many candidates are there?')
let candidates = [];

function candidateList(name,vote = 0) {
    for (let i = 0; i < candidate; i++) {
        const list = Object.create({})
        const names = prompt(`Name of candidate ${i + 1}:`);
        list.name = names;
        list.vote = vote;
        candidates.push(list)
    }
    console.log('candidateList', candidates)
}
candidateList(name,0);

let list_vote = []
function voting(list_vote) {
    const voter = ~~prompt('How many voters are there?')

    for (let i = 0; i < voter; i++) {
        const vote = prompt(`Who do you want to vote?`);
        list_vote.push(vote);
//        list_vote.sort(a,b => a.vote - b.vote);
    }
    console.log('voterList', list_vote)

    //console.log(`The winner is ${} with ${} votes.\n results: ${list_vote}`);
}
voting(list_vote);
















