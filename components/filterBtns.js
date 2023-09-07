import renderToDOM from '../utils/renderToDOM';

const filterBtns = () => {
  const domString = `
    
    <div id="filter-btn-group">
      <button id="all" type="button" class="btn btn-primary css">All</button>
      <button id="css" type="button" class="btn btn-primary css">CSS/Sass</button>
      <button id="js" type="button" class="btn btn-primary js">JavaScript</button>
      <button id="html" type="button" class="btn btn-primary html">HTML</button>
      <button id="react" type="button" class="btn btn-primary react">React</button>
      <button id="api" type="button" class="btn btn-primary api">API</button>
    </div>  
  `;
  renderToDOM('#filter-container', domString);
};

export default filterBtns;
