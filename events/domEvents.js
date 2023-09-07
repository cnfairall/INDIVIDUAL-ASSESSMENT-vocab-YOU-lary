import { emptyVocab, showVocab } from '../pages/entries';
import { getVocab, deleteVocab } from '../api/vocabData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then((array) => {
            if (array.length) {
              showVocab(array);
            } else {
              emptyVocab();
            }
          });
        });
      }
    }
  });
};

export default domEvents;
