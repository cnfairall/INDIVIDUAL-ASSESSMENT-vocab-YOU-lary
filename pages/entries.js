import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No Entries Found</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  if (!array.length) {
    domString += '<p>No Entries Found</p>';
  } else {
    array.forEach((item) => {
      domString += `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
              <p>${item.definition}"</p>
              <i id="edit-book-btn--${item.firebaseKey}" class="fa-solid fa-pen-to-square"></i>
              <i id="delete-book-btn--${item.firebaseKey}" class="fa-solid fa-trash-can"></i>
          </div>
        </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
