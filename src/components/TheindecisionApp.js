import React from 'react';
import { createClient } from '@supabase/supabase-js';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class TheindecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      // Finding match
      return 'This option already exists';
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat(option)
      }));
      // this.setState(prevState => {
      //   return {
      //     options: prevState.options.concat(option)
      //   };
      // });
    }
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
    this.fetchOptions()
  }
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.options.length !== this.state.options.length) {
    //   const json = JSON.stringify(this.state.options);
    //   localStorage.setItem('options', json);
    //   console.log('Componet did update');
    // }
  }
  componentWillUnmount() {
    console.log('sadfsdfsdffds');
  }
  fetchOptions = async () => {
    const SUPABASE_API_URL = process.env.SUPABASE_API_URL
    const SUPABASE_KEY = process.env.SUPABASE_KEY
    const supabase = createClient(SUPABASE_API_URL, SUPABASE_KEY)
    const optionsArray = []
    try {
      let { body } = await supabase
        .from('options')
        .select('*')
      body.map((optionItem)=>{
        optionsArray.push(optionItem.description)
      })
      // console.log(optionsArray)
      this.setState({ options: optionsArray })
    } catch (error) {
      console.log('Error: ', error)
    }
    // const options = await supabase.from('options').select('*')
    // const aa = async function f1() {
    //   var x = await supabase.from('options').select('*')
    //   return x
    //   // console.log(x); // 10
    // }

    // f1()
    // console.log(SUPABASE_API_URL)
    // console.log(SUPABASE_KEY)
    // const xx = options().then()
    // console.log(xx);
    // console.log(aa())
  }

  render() {
    //const title = 'theindecision';
    const subtitle = 'Thein Decision or The Indecision ?';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

TheindecisionApp.defaultProps = {
  options: []
};
