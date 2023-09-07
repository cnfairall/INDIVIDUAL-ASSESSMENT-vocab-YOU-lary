import { emptyVocab, showVocab } from '../pages/entries';
import { getVocab, deleteVocab, getSingleEntry } from '../api/vocabData';
import addEntryForm from '../components/addEntryForm';

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
    // CLICK EVENT EDITING AN ENTRY
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((Obj) => addEntryForm(user.uid, Obj));
    }
  });
};

export default domEvents;
