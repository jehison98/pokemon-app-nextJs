import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Navbar } from "../ui/Navbar";

interface Props {
  children: JSX.Element;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Pokemon App` || "Pokemon App"}</title>
        <meta name="author" content="Jehison Gutierrez de la Barrera" />
        <meta
          name="description"
          content={`Informacion sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta
          property="og:title"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
