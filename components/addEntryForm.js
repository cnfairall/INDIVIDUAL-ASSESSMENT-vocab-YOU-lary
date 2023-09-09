import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const addEntryForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
    <div class="form-group">
      <label for="name">Concept</label>
      <input type="text" class="form-control" id="name" placeholder="Enter concept here" value="${obj.name || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter definition here" value="${obj.definition || ''}" required></textarea>
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <input type="text" class="form-control" id="category" placeholder="Enter language or tech" value="${obj.category || ''}" required>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit Entry</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addEntryForm;
