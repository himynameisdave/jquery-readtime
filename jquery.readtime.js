(function($) {

  //  elements made available to the whole plugin
  var _elements = [];

  //  Actual readme function
  $.fn.readTime = function() {

      //  Loop through and get all elements that this has been called on
      this.each( function() {
        //  store elements for later usage
        _elements.push($(this));
      });

  }

  ////  The goods: called every time the window scrolls
  window.onscroll = function(){
    //  current scroll distance
    var s = window.pageYOffset;
    //  throttle the # of times the function is called
    if(s % 5 === 0){
      //  display read time is in charge of actually showing the readtime
      displayReadTime(calcMinsLeft());
    }
  }

  //  How many mins are left based on our current scroll height
  var calcMinsLeft = function(){

    //  set to zero because they may actually be at the end of the article
    var m = 0,
        p = document.getElementsByTagName('p'),
        unreadParas = [];

    //  cycle through each paragraph
    for( i=0; i<p.length; i++ ){
      //  get bottom position on the element
      var b = p[i].getBoundingClientRect().bottom;

      //  if bottomPos > s than include it in the wordcounting
      if( b > 0 ){
        unreadParas.push( wordCount( p[i].innerHTML ) );
      };
    }
    return readTime(addArrayElements(unreadParas));
  };

  var displayReadTime = function(m){
    for( i=0; i<_elements.length; i++ ){
      _elements[i].text(m);
    }
    return;
  };
  //  a quick lil wordcount function
  var wordCount = function (str) {
    return str.split(" ").length;
  }
  //  takes a word count and spits out the mins to read it
  var readTime = function(wc){
    //  answer is rounded as we only want to display full minutes
    return Math.round(wc/190);//because 200wpm is average reading speed for screens, but I'm being slightly more realistic
  }
  //  in the gist this is an Array.prototype but not here cause that'll fuck with the 'global namespace'
  var addArrayElements = function(arr){
    var n = 0;
    for(i=0;i<arr.length;i++){
      if( typeof arr[i] === 'number' ){
        n += arr[i];
      }
    }
    return n;
  }

}(jQuery));