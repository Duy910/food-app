function ScrollToTop() {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    return ( 
        null
     );
}

export default withRouter(ScrollToTop);