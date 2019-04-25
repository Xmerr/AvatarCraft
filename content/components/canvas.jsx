import { connect } from 'react-redux';
import heads from './parts/heads';


class Canvas extends React.Component {
    render() {
        return (
            <svg className='Canvas'
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid meet"
            >
                <g fill={this.props.flesh}>
                    {heads[this.props.head]}
                </g>
            </svg>
        )
    }
};

Canvas.propTypes={
};

const mapStateToProps = state => {
    return {
        head: state.head,
        flesh: state.flesh
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Canvas);