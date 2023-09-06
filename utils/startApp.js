import domBuilder from './domBuilder';
import navBar from './navbar';
import { getVocab } from '../api/vocabData';
import { showVocab, emptyVocab } from '../pages/entries';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents();
  getVocab().then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      emptyVocab();
    }
  });
};

export default startApp;
