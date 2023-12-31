import renderToDOM from './renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-container"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="store"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
