import renderToDOM from './renderToDOM';

const navBar = () => {
  const domString = `
    <nav>
      <div class="nav-item">
        <button id="logo">Vocab-YOU-lary</button>
      </div>
      <div class="nav-item">
        <button id="add-form">Create an Entry</button>
      </div>
      <div class="nav-item">
      <input
        class="form-control mr-sm-2"
        id="search"
        placeholder="Search Vocab"
        aria-label="Search"
      />
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
