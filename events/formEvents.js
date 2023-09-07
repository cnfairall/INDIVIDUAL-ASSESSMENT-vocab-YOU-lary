import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/entries';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-entry')) {
      const payload = {
        name: document.querySelector('#name').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        time: e.timeStamp,
        uid: user.uid
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }
  });
};

export default formEvents;
