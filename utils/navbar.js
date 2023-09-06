import renderToDOM from './renderToDOM';

const navBar = () => {
  const domString = `
    <nav>
      <div class="nav-item">
        <p id="logo">Vocab-YOU-lary</p>
      </div>
      <div class="nav-item">
        <p id="add-form">Create an Entry</p>
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
