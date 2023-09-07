import { showVocab } from '../pages/entries';

const filterByCategory = (array, category) => {
  const filteredVocab = array.filter(
    (entry) => entry.category === category
  );
  showVocab(filteredVocab);
};

export default filterByCategory;
