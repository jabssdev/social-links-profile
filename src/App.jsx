import { Header } from "./components/Header";
import { SocialNetworkButton } from "./components/SocialNetworkButton";

export const App = () => {
	return (
		<section className="bg-ct-grey-800 rounded-lg px-6 pt-6 pb-2 text-sm w-[335px]">
			<Header />
			<SocialNetworkButton socialNetwork="GitHub" />
			<SocialNetworkButton socialNetwork="Frontend Mentor" />
			<SocialNetworkButton socialNetwork="Linkedin" />
			<SocialNetworkButton socialNetwork="Twitter" />
			<SocialNetworkButton socialNetwork="Instagram" />
		</section>
	);
};
