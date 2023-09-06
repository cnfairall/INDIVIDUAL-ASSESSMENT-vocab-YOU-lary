// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import domBuilder from '../utils/domBuilder';
import { getVocab } from '../api/vocabData';
import { showVocab, emptyVocab } from '../pages/entries';

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
  domBuilder();
  getVocab().then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      emptyVocab();
    }
  });
};

init();
