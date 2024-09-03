import { Header } from "./components/Header";
import { SocialNetworkButton } from "./components/SocialNetworkButton";

export const App = () => {
	return (
		<section className="bg-ct-grey-800 rounded-xl px-6 pt-6 pb-2 text-sm md:w-[385px] md:px-10">
			<Header />
			<SocialNetworkButton socialNetwork="GitHub" />
			<SocialNetworkButton socialNetwork="Frontend Mentor" />
			<SocialNetworkButton socialNetwork="Linkedin" />
			<SocialNetworkButton socialNetwork="Twitter" />
			<SocialNetworkButton socialNetwork="Instagram" />
		</section>
	);
};
