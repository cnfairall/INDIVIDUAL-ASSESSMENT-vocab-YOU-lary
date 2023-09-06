import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No Entries Found</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-entry-btn">Add an Entry</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  if (!array.length) {
    domString += '<p>No Entries Found</p>';
  } else {
    array.forEach((item) => {
      domString += `
        <div class="card">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.name}</h5>
              <p>${item.definition}"</p>
              <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };