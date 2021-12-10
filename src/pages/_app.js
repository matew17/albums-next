import Navbar from "@components/Navbar/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <section className="main">
            <Navbar />

            <div className="content">
                <Component {...pageProps} />
            </div>

            <footer>
                Creado con 💛&nbsp;
                <b>
                    <a
                        href="https://www.instagram.com/orientedev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        oriente.dev
                    </a>
                </b>
            </footer>
        </section>
    );
}

export default MyApp;
