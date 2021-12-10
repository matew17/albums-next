import Link from "next/link";

import styles from "@components/Navbar/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Albumes</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
