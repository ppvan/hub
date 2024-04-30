/* eslint-disable @next/next/no-img-element */
import NavBar from "@/components/NavBar";

const Header = () => {
    const author = "Phạm Văn Phúc";

    return (
        <header className="flex justify-between">
            <div id="menu" className="flex-grow flex flex-col justify-start">
                <h1 className="text-slate-100 py-2 text-[2.1rem] font-semibold">{author}</h1>
                <NavBar></NavBar>
            </div>
            <div className="profile">
                <img
                    width={128}
                    height={128}
                    className="max-w-xs w-32 rounded-full"
                    alt="ppvan's github avatar"
                    src="https://avatars.githubusercontent.com/ppvan"
                ></img>
            </div>
        </header>
    );
};

export default Header;
