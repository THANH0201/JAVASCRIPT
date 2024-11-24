'use strict';
/*
fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(data => { console.log(data.value); })
.catch(error => console.error('Error fetching joke:', error));
*/

async function get() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const answer = await response.json();
        console.log(answer.value);
    } catch (error) {
        console.log(error.message);
    }
}
get()