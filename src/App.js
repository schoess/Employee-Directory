import React from 'react';
import Container from "./components/Container";
import data from "./data.json";
import Search from "./components/Search"
import Etable from "./components/Etable"

class App extends React.Component {
  state = {
    data,
    filteredData: null,
    sortOrder: null
  }
  sortByName = () => {
    const currentSort = this.state.sortOrder === 'asc' ? 'desc' : 'asc';

    this.setState({
      data: (this.state.filteredData || this.state.data).sort((a, b) => {
        let order;
        
        if (a.name < b.name) {
          order = -1;
        } else if (a.name > b.name) {
          order = 1;
        } else {
          order = 0;
        }

        if (currentSort === 'desc') {
          order = -order;
        }

        return order;
      }),
      sortOrder: currentSort
    });
  }


onFilter = (searchTerm) => {
  if (searchTerm) {
    this.setState({
      filteredData: this.state.data.filter((employee) => {
        return employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      })
    });
  } else {
    this.setState({
      filteredData: null
    });
  }
};

render() {
  return (
    <div>
      <Container />
      <Search onSubmit={this.onFilter} />
      <Etable
        sortOrder={this.state.sortOrder}
        data={this.state.filteredData || this.state.data}
        sortByName={this.sortByName}
      />
    </div>
  );
}
}

export default App;
