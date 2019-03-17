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
    </div>
  );
  
  const user = {
    name: 'Thein',
    age: 18,
    location: 'Myanmar'
    
  };
  
  function getLocation(location) {
    if (location) {
      return <p>Location: {location}</p>;
    }
  }
  
  var templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'N/A'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  );
  
  const appRoot = document.getElementById('app');
  
  ReactDOM.render(template, appRoot);
  