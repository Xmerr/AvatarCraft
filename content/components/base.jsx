require('./base.scss');

class Base extends React.Component{
    render() {
        return(
            <div className='MainArea'>
                Hello
            </div>
        );
    }
}

export default Base;

ReactDOM.render(
    <Base />,
    document.getElementById('content')
);