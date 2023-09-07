import domBuilder from './domBuilder';
import navBar from './navbar';
import { getVocab } from '../api/vocabData';
import { showVocab, emptyVocab } from '../pages/entries';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getVocab(user.uid).then((array) => {
    if (array.length) {
      showVocab(array);
    } else {
      emptyVocab();
    }
  });
};

export default startApp;
