import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from '_redux/reducers';
import Canvas from './canvas';
import Controls from './controls';

require('./base.scss');

let store = createStore(app);
global.getState = () => store.getState();

class Base extends React.Component{
    render() {
        return(
            <div className='MainArea'>
                <Controls />
                <Canvas />
            </div>
        );
    }
}

export default Base;

ReactDOM.render(
    <Provider store={store}>
        <Base />
    </Provider>,
    document.getElementById('content')
);