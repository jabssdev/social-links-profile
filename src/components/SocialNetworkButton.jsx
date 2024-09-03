import PropTypes from "prop-types";

export const SocialNetworkButton = ({ socialNetwork }) => {
	return (
		<article className="bg-ct-grey-700 text-white mb-4 p-3 rounded-lg flex justify-center cursor-pointer hover:bg-ct-green hover:text-black">
			<h1 className="font-bold ">{socialNetwork}</h1>
		</article>
	);
};

SocialNetworkButton.propTypes = {
	socialNetwork: PropTypes.string.isRequired,
};

SocialNetworkButton.defaultProps = {
	socialNetwork: "Red Social",
};
