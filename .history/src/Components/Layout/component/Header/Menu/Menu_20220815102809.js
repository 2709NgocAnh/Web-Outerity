import PropTypes from 'prop-types';

function Menu({ children }) {
    return <nav className="menu-link">{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
