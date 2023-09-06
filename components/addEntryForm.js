import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const addEntryForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="mb-4">
    <div class="form-group">
      <label for="name">Concept</label>
      <input type="text" class="form-control" id="name" placeholder="Enter concept here" value="${obj.name || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <input type="text" class="form-control" id="definition" placeholder="Enter definition here" value="${obj.definition || ''}"required>
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <input type="text" class="form-control" id="category" placeholder="Enter language or tech" value="${obj.category || ''}"required>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit Entry</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addEntryForm;
