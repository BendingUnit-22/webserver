import {connect} from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
       // add: () => dispatch(add())
        // ,
        // subtract: () => dispatch(subtract()),
        // reset : () => dispatch(reset()),
        // append: (value) => dispatch(append(value))
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(App);

