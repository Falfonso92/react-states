import View from './view';
import { AppState } from '../../store';
import { AnyAction, Dispatch } from 'redux';
import { addCounter, addSecondCounter } from '../../store/counter/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => { return {}};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>{
    return {
        addCounter: () => dispatch(addCounter()),
        addSecondCounter: () => dispatch(addSecondCounter())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);