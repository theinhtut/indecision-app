//JSX - Javascript XML

const app = {
    title: 'Department Q',
    subtitle: 'This is my subtitle',
    options: []
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
  };
  
  const onRemoveAll = () => {
    app.options = [];
    render();
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  };
  
  
  const appRoot = document.getElementById('app');
  
  
  const render = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are options' : 'No option'}</p>
        <p>Option: {app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
          {
            app.options.map((option) => {
              return <li key={option}>{option}</li>;
            })
          }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  render();
  