import React, {Component} from 'react';

import Cake from '../components/Cake';
import Search from '../components/Search';

class CakesList extends Component {
  constructor() {
    super();
    this.state = {
      cakesList: [], 
    }
    fetch('https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json')
    .then(response => {
      return response.json();
    })
    .then(cakesList => {
      this.setState({
        cakesList: cakesList
      });
    })
  }

  filterCakes = (input) => {
    const filteredCakes = this.state.cakesList.filter(cake => {
      return cake.title.includes(input);
    });
    this.setState({
      cakesList: filteredCakes
    })
  }

  onChange = (event) => {
    const inputValue = event.target.value;
    this.filterCakes(inputValue);
  }

  render() {
    return <div>
      <Search onChange={this.onChange}/>
      {this.state.cakesList.map((cake, index) => {
        // return <Cake title={cake.title} desc={cake.desc} image={cake.image}/>
        return <Cake key={index} {...cake}/>
      })}
    </div>;
  }
}

export default CakesList;