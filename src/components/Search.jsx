import YOUTUBE_API_KEY from "../config/youtube.js";

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
  }

  get(searchText, successCB, errorCB=null) {
    $.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        part: "snippet",
        key: YOUTUBE_API_KEY,
        maxResults: 5,
        q: searchText
      },
      successCB(data)
    );
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
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
