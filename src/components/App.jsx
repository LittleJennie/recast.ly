import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer
//           video = {exampleVideoData[0]}
//         />
//       </div>
//       <div className="col-md-5">
//         <VideoList 
//           videos = {exampleVideoData}
//         />
//       </div>
//     </div>
//   </div>
// );


//refactor to ES6
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //done: false,
      videos: exampleVideoData, // this is an array with video objects
      playingVideo: exampleVideoData[0] // this is a single video object for VideoPlayer to use
    };
    this.onTitleClick = this.onTitleClick.bind(this);
  }

  onTitleClick(targetEtag) {
    //e.preventDefault();
    console.log('print: here', targetEtag);
    // loop through videos
    var currentVideoIndex;
    for(var i = 0; i < this.state.videos.length; i++) {
      if(this.state.videos[i].etag === targetEtag) {
        currentVideoIndex = i;
        break;
      }
    }

    this.setState({
      // we will need to reset playingVideo to the clicked video from videoListEntries
      // we will grab it based on the etag from click
      // and set the playingVideo to such etag video
      playingVideo: exampleVideoData[currentVideoIndex]
    });
    //call preventDefault to prevent default behavior
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer
              video = {this.state.playingVideo}
            />
          </div>
        </div>
        <div className="col-md-5">
          <VideoList 
            videos = {this.state.videos}
            onTitleClick = {this.onTitleClick}
          />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
