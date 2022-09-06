function ScrollToTop() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    return ( 
        null
     );
}

export default ScrollToTop;