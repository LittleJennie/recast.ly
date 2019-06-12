import searchYouTube from '../lib/searchYouTube.js';

// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onSubmit={() => this.props.searchYouTube({key: props.API_KEY, max: 5, query: document.getElementsByClassName('form-control').value}, props.onSubmitQuery)}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );



class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e){
    var inputText = e.target.value;
    var options = {
      key: this.props.API_KEY,
      query: inputText,
      max: 5
    }
    searchYouTube(options, this.props.onSubmitQuery);
    this.setState({
      value: e.target.value
    });
  }

  //putting the onSubmit() on the <input>
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" value={this.state.value} onChange={this.handleInputChange} type="text" placeholder="fill in here"/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


//onSubmit={() => this.props.searchYouTube({key: props.API_KEY, max: 5, query: e.target[0].value}, props.onSubmitQuery)}