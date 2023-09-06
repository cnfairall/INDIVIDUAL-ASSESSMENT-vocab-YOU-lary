import client from '../utils/client';

// API CALL FOR VOCAB

const endpoint = client.databaseURL;

// GET ENTRIES
const getVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries.json`, {
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

// DELETE BOOK
// const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books/${firebaseKey}.json`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   }).then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

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

// // FILTER BOOKS BY CATEGORY
// const booksOnSale = (uid) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/books.json?orderBy="uid"&equalTo="${uid}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   }).then((response) => response.json())
//     .then((data) => {
//       const filteredBooks = Object.values(data).filter((book) => book.sale);
//       resolve(filteredBooks);
//     })
//     .catch(reject);
// });

// STRETCH...SEARCH VOCAB

export { getVocab, createVocab, updateVocab };
// vocabByCategory,
// deleteVocab,
// };
