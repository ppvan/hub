"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const NavBar = () => {
    const pathname = usePathname();

    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Portfolio",
            url: "/portfolio",
        },
        {
            name: "Blog",
            url: "/blog",
        },
    ];

    const activeNav = useCallback(
        (path: string) => {
            if (path === "/") {
                return pathname === path;
            }

            return pathname.startsWith(path);
        },
        [pathname],
    );

    return (
        <div id="links" className="flex justify-start lg:gap-4 gap-2">
            {links.map((item) => (
                <Link
                    key={item.url}
                    href={item.url}
                    className={classNames("text-lg text-[#9e98f2] p-2 first:pl-0", {
                        "font-extrabold underline": activeNav(item.url),
                    })}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default NavBar;
