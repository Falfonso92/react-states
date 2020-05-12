import View from './view';
import { AppState } from '../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => ({
    secondCount: state.counterState.secondCount
});

export default connect(mapStateToProps,[])(View);;