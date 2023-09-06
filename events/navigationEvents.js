import addEntryForm from '../components/addEntryForm';
import { showVocab, emptyVocab } from '../pages/entries';
import { getVocab } from '../api/vocabData';

const navigationEvents = () => {
  document.querySelector('#add-form')
    .addEventListener('click', () => {
      addEntryForm();
    });
  document.querySelector('#logo')
    .addEventListener('click', () => {
      getVocab().then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    });
};

export default navigationEvents;
