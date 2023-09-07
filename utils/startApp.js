import domBuilder from './domBuilder';
import navBar from '../components/navbar';
import { getVocab } from '../api/vocabData';
import { showVocab, emptyVocab } from '../pages/entries';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import filterBtns from '../components/filterBtns';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  navBar();
  filterBtns();
  logoutButton();
  navigationEvents(user);
  domEvents(user);
  getVocab(user.uid).then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      emptyVocab();
    }
  });
};

export default startApp;
