/*
 *  index.ts
 *  Project: First Exercise
 *
 *  Author: Amit Singh Kathayat
 *  Created on: Jan 19, 2023
 */

// Merging Arrays
console.log(`1. Merging Arrays`);
// function having two arrays of numbers: arr1 and arr2
function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  // assign an empty array variable to store the result of merging two array.
  const mergedArray = [];
  // variable to get the maximum length of arrays: arr1 and arr2.
  const largeValue = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < largeValue; i += 1) {
    // check if i is less than length of arr1 and if the element at i of arr1
    // is not undefined. If it is true, element at i is pushed to mergedArray.
    if (i < arr1.length && arr1[i] !== undefined) {
      mergedArray.push(arr1[i]);
    }
    // same as above.
    if (i < arr2.length && arr2[i] !== undefined) {
      mergedArray.push(arr2[i]);
    }
  }
  return mergedArray;
}
// testing mergedArray
const array1: Array<number> = [18, 74, 88, 3];
const array2: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);

console.log(``);

// Wordle Game
console.log(`2. Wordle Game`);
// function having two strings attemptWord and secretWord
function checkWord(attemptWord: string, secretWord: string): string {
  // initialize result with empty string value.
  let result = '';
  for (let i = 0; i < secretWord.length; i += 1) {
    // if attemptWord is equal to secretWord then return c and increase it by 1.
    if (attemptWord[i] === secretWord[i]) {
      result += 'c';
      // if secreteWord includes attemptWord then return p and increase it by 1.
    } else if (secretWord.includes(attemptWord[i])) {
      result += 'p';
      // else return a and increase it by 1.
    } else {
      result += 'a';
    }
  }
  return result;
}
// testing wordle game
const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

console.log(``);

// Elections
console.log(`3. Elections`);
// creating type Candiate with three properties: name, votes, and funding
type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};
// creating Candidate object for all each given Candidate
const edward: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};

const rose: Candidate = {
  name: 'Rose Olson',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};

const leonard: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};

const nathanial: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};
// array for all the given Candidate.
const candidates: Array<Candidate> = [edward, rose, leonard, nathanial];

// Compute and display the total number of votes received by each candidate
let totalVotes = 0;
// iterating the candidate array
for (let i = 0; i < candidates.length; i += 1) {
  // for each candidate, iterating the votes array of the object
  for (let j = 0; j < candidates[i].votes.length; j += 1) {
    // adding the value of each vote to totalVotes.
    totalVotes += candidates[i].votes[j];
  }
}

for (let i = 0; i < candidates.length; i += 1) {
  // assign candidate variable to i element of candidates array to get the vote
  // of each candidate
  const candidate = candidates[i];
  let eachCandidateVotes = 0;
  // iterating the votes array of each candidate
  for (let j = 0; j < candidate.votes.length; j += 1) {
    // adding the  value of each vote to eachCandidateVotes
    eachCandidateVotes += candidate.votes[j];
  }
  const percentVotes = (eachCandidateVotes / totalVotes) * 100;
  // toFixed is used to format a number with 2 decimal places
  console.log(`${candidate.name} -- ${eachCandidateVotes} votes -- ${percentVotes.toFixed(2)}%`);
}
console.log(``);

// Compute the total percentage of votes for each precinct by each candidate.
for (let i = 0; i < candidates.length; i += 1) {
  const candidate = candidates[i];
  console.log(`${candidate.name}:`);

  for (let j = 0; j < candidate.votes.length; j += 1) {
    // assign precinctVotes variable to i element of candidates.votes array to
    // get the precinct vote of each candidate
    const precinctVotes = candidate.votes[j];
    let precinctTotalVotes = 0;

    for (let k = 0; k < candidates.length; k += 1) {
      precinctTotalVotes += candidates[k].votes[j];
    }
    const precinctPercentVotes = (precinctVotes / precinctTotalVotes) * 100;
    console.log(`Precinct ${j + 1} -- ${precinctPercentVotes.toFixed(2)}%`);
  }
  console.log(``);
}

// Compute and display the amount spent per vote by each candidate.
for (let i = 0; i < candidates.length; i += 1) {
  const candidate = candidates[i];
  let eachCandidateVotes = 0;
  for (let j = 0; j < candidate.votes.length; j += 1) {
    eachCandidateVotes += candidate.votes[j];
  }
  const amountSpentPerVote = candidate.funding / eachCandidateVotes;
  console.log(`${candidate.name} spent $${amountSpentPerVote.toFixed(2)} per vote`);
}
console.log(``);

console.log(`Who won :)`);
let maximumVotes = 0;
let maximumVotesCandidate = '';
let secondMaximumVotes = 0;
let secondMaximumVotesCandidate = '';
// iterate through candidates to get the length of each candidate
for (let i = 0; i < candidates.length; i += 1) {
  let precinctVotes = 0;
  // iterate through the votes of each candidate to add to the total number of
  // votes got by candidate in each precinct.
  for (let j = 0; j < candidates[i].votes.length; j += 1) {
    precinctVotes += candidates[i].votes[j];
  }
  // comparing if candidate got more vote than the current max. If precinct vote
  // is greater than the maximum vote, it updates the maxVotes and
  // maxVotesCandidate to current candidate total vote and name. Also, updates
  // secondMaxVotes and secondMaxVotesCandidat to previous values of
  // maxVotes and maxVotesCandidate for candidate who has second most votes.
  if (precinctVotes > maximumVotes) {
    secondMaximumVotes = maximumVotes;
    secondMaximumVotesCandidate = maximumVotesCandidate;
    maximumVotes = precinctVotes;
    maximumVotesCandidate = candidates[i].name;
    // updates secondMaxVotes and secondMaxVotesCandidate to current candidate
    // total vote and name.
  } else if (precinctVotes > secondMaximumVotes) {
    secondMaximumVotes = precinctVotes;
    secondMaximumVotesCandidate = candidates[i].name;
  }
}
// check if candidate with most vote has more than 50% of the total votes.
if (maximumVotes / totalVotes > 0.5) {
  console.log(`${maximumVotesCandidate} is the winner.`);
} else {
  console.log(
    `There will be a run-off between ${maximumVotesCandidate} and ${secondMaximumVotesCandidate}`
  );
}
