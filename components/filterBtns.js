import renderToDOM from '../utils/renderToDOM';

const filterBtns = () => {
  const domString = `
    
    <div id="filter-btn-group">
      <button id="all" type="button" class="btn btn-primary all">All</button>
      <button id="css" type="button" class="btn btn-primary CSS">CSS</button>
      <button id="js" type="button" class="btn btn-primary JavaScript">JavaScript</button>
      <button id="html" type="button" class="btn btn-primary HTML">HTML</button>
      <button id="react" type="button" class="btn btn-primary React">React</button>
      <button id="api" type="button" class="btn btn-primary API">API</button>
    </div>  
  `;
  renderToDOM('#filter-container', domString);
};

export default filterBtns;
