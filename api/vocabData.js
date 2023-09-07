import client from '../utils/client';

// API CALL FOR VOCAB

const endpoint = client.databaseURL;

// GET ENTRIES
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// DELETE ENTRY
const deleteVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// CREATE VOCAB
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE ENTRY
const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE VOCAB
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// STRETCH...SEARCH VOCAB

export {
  getVocab, createVocab, updateVocab, deleteVocab, getSingleEntry,
};
