//JSX - Javascript XML

const app = {
    title: 'Department Q',
    subtitle: 'This is my subtitle',
    option: ['One', 'Two']
  };
  
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? 'Here are options' : 'No option'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
  );
  
  let count = 0;
  const addOne = () => {
    count++;
    console.log(count);
    renderCounterApp();
  };
  
  const minusOne = () => {
    count--;
    console.log(count);
    renderCounterApp();
  };
  
  const reset = () => {
    count = 0;
    console.log(count);
    renderCounterApp();
  };
  
  const appRoot = document.getElementById('app');
  
  const renderCounterApp = () => {
    const templateTwo = (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  
    ReactDOM.render(templateTwo, appRoot);
  };
  
  renderCounterApp();
  