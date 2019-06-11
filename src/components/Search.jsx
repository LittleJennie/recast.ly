

// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );



class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      options: {
        key: this.props.API_KEY,
        max: 5, 
        query: document.getElementsByClassName('form-control')
      }
    };
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onSubmit={() => this.props.searchYouTube(this.state.options, props.onSubmitQuery)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
