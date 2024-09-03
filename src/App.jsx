import { Header } from "./assets/components/Header";
import { SocialNetworkButton } from "./assets/components/SocialNetworkButton";

export const App = () => {
	return (
		<section className="bg-ct-grey-800 rounded-lg p-5 text-sm">
			<Header />
			<SocialNetworkButton />
		</section>
	);
};
