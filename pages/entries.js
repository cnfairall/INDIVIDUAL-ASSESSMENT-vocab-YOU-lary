import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<p>No Entries Found</p>';
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
            <p id="category" class="${item.category}">${item.category}</p>
            <div class="btn-container">
              <i id="edit-vocab-btn--${item.firebaseKey}" class="fa-solid fa-pen-to-square"></i>
              <i id="delete-vocab-btn--${item.firebaseKey}" class="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
