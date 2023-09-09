import addEntryForm from '../components/addEntryForm';
import { showVocab, emptyVocab } from '../pages/entries';
import { getVocab } from '../api/vocabData';
import filterByCategory from '../utils/filterByCategory';

const navigationEvents = (user) => {
  document.querySelector('#add-form')
    .addEventListener('click', () => {
      addEntryForm();
    });
  document.querySelector('#home')
    .addEventListener('click', () => {
      getVocab(user.uid).then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    });
  document.querySelector('#filter-container')
    .addEventListener('click', (e) => {
      getVocab(user.uid).then((array) => {
        switch (e.target.id) {
          case 'css':
            filterByCategory(array, 'CSS/Sass');
            break;
          case 'js':
            filterByCategory(array, 'JavaScript');
            break;
          case 'html':
            filterByCategory(array, 'HTML');
            break;
          case 'api':
            filterByCategory(array, 'API');
            break;
          case 'react':
            filterByCategory(array, 'React');
            break;
          default:
            showVocab(array);
            break;
        }
      });
    });
};

export default navigationEvents;
