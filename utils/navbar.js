import renderToDOM from './renderToDOM';
import ViewDirectorBasedOnUserAuthStatus from './viewDirector';

const navBar = () => {
  const domString = `
    <nav>
      <div class="nav-item active">
        <a class="nav-link" href="#" id="all-books">
          Vocab-YOU-lary <span class="sr-only">(current)</span>
        </a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="#" id="add-form">Create an Entry</a>
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
  ViewDirectorBasedOnUserAuthStatus();
};

export default navBar;
