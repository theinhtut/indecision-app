class OldSyntax {
    constructor() {
      this.name = 'Thein';
      this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
      return `Hi, my name is ${this.name}`;
    }
  }
  const oldSyntax = new OldSyntax();
  const getGreeting = oldSyntax.getGreeting;
  console.log(getGreeting());
  
  
  // ------------------------------------------
  
  
  class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
      return `Hi, my name is ${this.name}`;
    };
  }
  const newSyntax = new NewSyntax();
  const newGetGreeting = newSyntax.getGreeting;
  console.log(newGetGreeting());