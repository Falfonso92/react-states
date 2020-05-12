import View from './view';
import { AppState } from '../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => ({
    count: state.counterState.count
});

export default connect(mapStateToProps,[])(View);