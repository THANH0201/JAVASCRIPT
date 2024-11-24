/*
'use strict';
const target = document.querySelector('#target');

async function fetchTV(){
  try{
    const response = await fetch(request);
    if(response.status === 200){
      const data = await response.json();
      for(let i of data){
        target.innerHTML += <li>`The ${i[name]}`</li>;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchTV()



const keyword = document.getElementById('query');
const request = `https://api.tvmaze.com/search/shows?q= ${keyword}`;

// Request template: https://api.tvmaze.com/search/shows?q=girls
async function fetchTV(){
  try{
    const response = await fetch(request);
    if(response.status === 200){
      const data = await response.json();
      for(let i of data){
        console.log(i);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchTV()
 */