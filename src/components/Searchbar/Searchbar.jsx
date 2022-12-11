// import { Component } from 'react';

import { async } from 'q';

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   // handleChange = e => {
//   //   this.setState({ query: e.target.value.toLowerCase() });
//   // };

//   // handleSubmit = e => {
//   //   e.preventDefault();

//   //   if (this.state.query.trim() === '') {
//   //     return alert('введіть запит');
//   //   }

//   //   this.props.onSubmit(this.state.query);
//   //   this.setState({ query: '' });
//   // };

//   render() {
//     return (
//       <header className="searchbar">
//         <form onSubmit={this.handleSubmit} className="form">
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             onChange={this.handleChange}
//             name="query"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

export const Searchbar = ({ onSubmit }) => {
  // const handleSubmit = async query => {
  //   // await onSubmit(query);
  //   console.log(query);
  // };
  return (
    <header className="searchbar">
      <form onSubmit={onSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
