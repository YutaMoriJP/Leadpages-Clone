import * as React from "react";
import style from "./style.module.css";
import Link from "next/link";
import Button from "../Button";
import useScroll from "../../useHooks/useScroll";
import { useRouter } from "next/router";
import { useMediaQuery } from "kantan-hooks";

const linkOptions = [
  { name: "Product", href: "/product", id: 0 },
  { name: "Templates", href: "/templates", id: 1 },
  { name: "Pricing", href: "/pricing", id: 2 },
  { name: "Resources", href: "/resource", id: 3 },
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

  if (!resolved) return null;

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
