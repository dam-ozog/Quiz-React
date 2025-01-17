import PropTypes from "prop-types";

export const ReturnButton = ({onClick, text}) => {
	return <button onClick={onClick}>{text}</button>;
};

ReturnButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}
