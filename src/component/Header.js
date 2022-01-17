import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react' // Required

const Header = ({title}) => {
    const onClick= () => {
        console.log("Clicked")
    }
    return (
        <header>
            <h1>{title}</h1>
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS in JS
// const headingStyle = {
//     color : 'red',
//     backgroundColor: 'black',
// }
export default Header
