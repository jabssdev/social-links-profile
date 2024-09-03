import avatarJessica from "../assets/images/avatar-jessica.jpeg";

export const Header = () => {
	return (
		<header className="mb-10 flex flex-col items-center">
			<img className="w-20 rounded-full mb-6" src={avatarJessica} alt="Foto de perfil de Jessica" />
			<h1 className="font-[400] text-2xl text text-white mb-1.5">Jessica Randall</h1>
			<p className="text-ct-green font-[600] mb-6">London, United Kingdom</p>
			<p className="text-gray-300">&quot;Front-end developer and avid reader.&quot;</p>
		</header>
	);
};
