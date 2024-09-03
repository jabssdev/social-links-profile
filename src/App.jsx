import { Header } from "./components/Header";
import { SocialNetworkButton } from "./components/SocialNetworkButton";

export const App = () => {
	return (
		<section className="bg-ct-grey-800 rounded-lg px-5 py-6 text-sm">
			<Header />
			<SocialNetworkButton />
		</section>
	);
};
