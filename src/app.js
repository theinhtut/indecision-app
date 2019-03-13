class TheindecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Things One', 'Things Two', 'Things Three', 'Things Four']
    };
  }
  render() {
    const title = 'theindecision';
    const subtitle = 'Thein Decision or The Indecision ?';
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={this.state.options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    //alert('RemoveAll');
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
    <div>
      {
        this.props.optionText
      }
    </div>);
  }
}

class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option);
    }

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Submit</button>
        </form>
        
      </div>
    );
  }
}

const jsx = (
  <div>
    <TheindecisionApp />
  </div>
);

ReactDOM.render(<TheindecisionApp />, document.getElementById('app'));
