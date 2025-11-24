import React from "react";
import "./header.css";
import profileImg from "../../assets/img/Foto.jpg";

export default function Header() {
    return (
        <header className="site-header" role="banner">
            {/* Contenedor central con ancho máximo */}
            <div className="header-inner">

                {/* Avatar */}
                <a href="/" className="brand" aria-label="Inicio - Steven Piedra">
                    <img
                        src={profileImg}
                        alt="Steven Piedra's photo"
                        className="brand-avatar"
                        width="72"
                        height="72"
                        loading="lazy"
                    />
                </a>

                {/* Nombre y roles */}
                <div className="brand-text">
                    <a href="/" className="brand-name-link" arial-label="Go to home">
                        <h1 className="brand-name">Steven Piedra Villalta</h1>
                    </a>
                    <p className="brand-roles">Fullstack Developer · Data Analyst · AI Developer</p>
                </div>

                {/* Enlaces */}
                <nav className="socials" aria-label="Social-links: Github, Linkedln and Email">
                    <a
                        className="social-link"
                        href="https://github.com/stevenpiedra-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="My GitHub"
                        title="GitHub"
                    >
                        {/* SVG icon GitHub (inline para no requerir dependencias) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.48 5.921.43.37.812 1.096.812 2.21v3.285c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
                        </svg>
                    </a>

                    <a
                        className="social-link"
                        href="https://linkedin.com/in/stevenpiedra" // REEMPLAZA por tu LinkedIn
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="My LinkedIn"
                        title="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.786-1.75-1.75s.784-1.75 1.75-1.75 1.75.786 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.057-1.863-3.057-1.863 0-2.149 1.454-2.149 2.957v5.704h-3v-10h2.881v1.367h.041c.401-.758 1.379-1.558 2.837-1.558 3.035 0 3.596 1.997 3.596 4.594v5.597z" />
                        </svg>
                    </a>

                    <a
                        className="social-link"
                        href="mailto:steven.piedra02@gmail.com" // REEMPLAZA por tu correo
                        aria-label="Email me"
                        title="Email"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M12 12.713l-11.99-7.713v12h24v-12l-12.01 7.713zm11.99-10.713h-23.99c-.553 0-1 .447-1 1v14c0 .553.447 1 1 1h23.99c.553 0 1-.447 1-1v-14c0-.553-.447-1-1-1zm-11.99 9.287l11.99-7.287h-23.99l11.99 7.287z" />
                        </svg>
                    </a>

                </nav>
            </div>
        </ header>
    );
}