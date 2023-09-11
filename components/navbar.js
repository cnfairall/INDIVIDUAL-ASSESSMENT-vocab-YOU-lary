import renderToDOM from '../utils/renderToDOM';

const navBar = () => {
  const domString = `
  <nav id="nav" style="cursor: pointer" class="navbar">
  <a class="navbar-brand" id="logo">vocab<span id="you">YOU</span>lary</a>
  <div class="nav-item">
    <a class="nav-link" id="home">Home</a>
  </div>
  <div class="nav-item">
    <a class="nav-link" id="add-form">Add an Entry</a>
  </div>
    <a class="nav-link" id="googleAuth"></a>
  </nav>
`;
  renderToDOM('#navigation', domString);
};

export default navBar;
