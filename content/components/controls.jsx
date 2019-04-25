import { connect } from 'react-redux';
import { changeHead } from '_redux/actions';
import { changeFlesh } from '../.redux/actions';
import heads from './parts/heads';

class Controls extends React.Component {
    render() {
        return (
            <div className='Controls'>
                <div>
                    <label>
                        Head
                    </label>
                    <input type="range" 
                        min="0" max={heads.length - 1} 
                        value={this.props.head}
                        onChange={e => this.props.changeHead(e.target.value)} 
                    />
                </div>
                <div>
                    <label>
                        Flesh
                    </label>
                    <input type="color" value={this.props.flesh}
                        onChange={e => this.props.changeFlesh(e.target.value)} />
                </div>
            </div>
        )
    }
};

Controls.propTypes={
};

const mapStateToProps = state => {
    return {
        head: state.head,
        flesh: state.flesh
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeHead: h => dispatch(changeHead(h)),
        changeFlesh: f => dispatch(changeFlesh(f))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Controls);