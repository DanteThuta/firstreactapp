import PropTypes from 'prop-types'
import Button from '../components/Button'



const Header = ({ title,onAdd,showAdd }) => {
    // const onClick = () => {
    //     console.log('click');
    //}
    
    return (
        <header className="header">
            
                <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />
                
        </header> 
    )
}

Header.defaultProps = {
    title:"Task Tracker"
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// const HeadingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
