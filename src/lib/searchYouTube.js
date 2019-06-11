

var searchYouTube = (options, successCB) => {
    $.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        part: "snippet",
        key: options.key,
        maxResults: options.max,
        q: options.query, 
        type: 'video',
        videoEmbeddable: 'true'
      }
    )
      .done (({items}) => {
        successCB(items)
      })
      .fail (() => {
        responseJSON.error.errors.forEach((err) =>
          console.error(err)
        );
      });
};

export default searchYouTube;
