import * as React from "react";
import style from "./style.module.css";
import Link from "next/link";
import Button from "../Button";
import useScroll from "../../useHooks/useScroll";
import { useRouter } from "next/router";

const useMediaQuery = (query: string) => {
  const [mediaQuery, setMediaQuery] = React.useState(() => {
    //if code runs client side, then set media query immediately
    if (typeof window !== "undefined") return window.matchMedia(query).matches;
    return false;
  });
  const [resolved, setResolved] = React.useState((): boolean => {
    //if code is executed client side - resolved is true
    if (typeof window !== "undefined") return true;
    //runs server side - resolved is false
    return false;
  });

  React.useEffect((): void => {
    const mql = window.matchMedia(query);
    setMediaQuery(window.matchMedia(query).matches);
    setResolved(true);
    const onChange = (): void =>
      setMediaQuery(window.matchMedia(query).matches);

    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange);
      //safari 13.1 and lower does not support addEventListener
    } else if ("addListener" in mql) {
      mql.addListener(onChange);
    }
  }, []);
  return [mediaQuery, resolved] as const;
};

const linkOptions = [
  { name: "Product", href: "product", id: 0 },
  { name: "Templates", href: "templates", id: 1 },
  { name: "Pricing", href: "pricing", id: 2 },
  { name: "Resources", href: "resource", id: 3 },
];

const TrialButton = () => {
  const { push } = useRouter();
  const handleClick = () => push("pricing");
  return (
    <Button reversed onClick={handleClick}>
      Start Free Tial
    </Button>
  );
};

const Nav = (): JSX.Element => {
  const [scrolled] = useScroll();
  const [isSmall, resolved] = useMediaQuery("(max-width: 800px)");
  //next runs server side first, and the useMediaQuery uses the window object
  //and will use the window object in useEffect, which runs client side, till then resolved is false
  if (!resolved) return null;
  //MOBILE/SMALL TABLET - MAX-WIDTH: 768PX
  if (isSmall)
    return (
      <nav
        className={`${style.nav} ${scrolled ? style.navContainerScrolled : ""}`}
      >
        <div className={style.navContainer}>
          <div className={style.leftColumn}>
            <Link href="/">
              <a className={style.link}>LEADPAGES</a>
            </Link>
          </div>
          <div className={style.rightColumn}>
            <TrialButton />
          </div>
        </div>
      </nav>
    );

  //DESKTOP/LARGE TABLET - MIN-WIDTH: 768PX
  return (
    <nav
      className={`${style.nav} ${scrolled ? style.navContainerScrolled : ""}`}
    >
      <div className={style.navContainer}>
        <div className={style.leftColumn}>
          <Link href="/">
            <a className={style.link}>LEADPAGES</a>
          </Link>
          <div className={style.leftColumnLinksContainer}>
            {linkOptions.map(link => {
              return (
                <Link key={link.id} href={link.href}>
                  <a className={style.link}>{link.name}</a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={style.rightColumn}>
          <a className={style.link}>Login</a>
          <TrialButton />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
