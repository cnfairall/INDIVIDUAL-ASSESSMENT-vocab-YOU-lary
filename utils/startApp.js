import domBuilder from './domBuilder';
import navBar from '../components/navbar';
import { getVocab } from '../api/vocabData';
import { showVocab, emptyVocab } from '../pages/entries';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import filterBtns from '../components/filterBtns';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  navBar();
  logoutButton();
  filterBtns();
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
