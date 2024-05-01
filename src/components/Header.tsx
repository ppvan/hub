/* eslint-disable @next/next/no-img-element */
import NavBar from "@/components/NavBar";
import Link from "next/link";

const Header = () => {
    const author = "Phạm Văn Phúc";

    return (
        <header className="flex justify-between items-center py-10">
            <div id="menu" className="flex-grow flex flex-col justify-start">
                <NavBar></NavBar>
            </div>
            <Link href={"https://github.com/ppvan"} className="rounded-full w-10 lg:w-12 overflow-hidden">
                <img alt="ppvan's github avatar" src="https://avatars.githubusercontent.com/ppvan"></img>
            </Link>
        </header>
    );
};

export default Header;
