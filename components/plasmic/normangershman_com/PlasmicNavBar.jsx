// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: vtr4HBe3IOcGOj
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: jqA6_3BfibjBPp/component
import TextInput from "../../TextInput"; // plasmic-import: iworc5bw6VgnEX/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_normangershman_com.module.css"; // plasmic-import: 7TgNrWQj5NP1iabd7btsp3/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: vtr4HBe3IOcGOj/css
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: 3FXpmIjEIAM4Vj/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: ZjQdLe3cmVWKUm/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: iohl55Xxx3s4LY/icon
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: d94zNi5p8FXJWn/icon

export const PlasmicNavBar__VariantProps = new Array("filled", "searchOpen");

export const PlasmicNavBar__ArgProps = new Array();

function PlasmicNavBar__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootsearchOpen]: hasVariant(variants, "searchOpen", "searchOpen")
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__oLkSh)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__m7JMj,
            {
              [sty.textfilled__m7JMj0O3Jw]: hasVariant(
                variants,
                "filled",
                "filled"
              )
            }
          )}
        >
          {"NORMAN GERSHMAN PHOTOGRAPHIC ARCHIVE"}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox___5HkZm)}>
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__ccIqg)}>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__b8Ml1
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"HOME"}
            </p.PlasmicLink>
          </div>

          <div className={classNames(projectcss.all, sty.column__rmH84)}>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__dGay
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"ARCHIVES"}
            </p.PlasmicLink>
          </div>

          <div className={classNames(projectcss.all, sty.column__aOkvC)}>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__p9O5T
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"INQUIRIES"}
            </p.PlasmicLink>
          </div>

          <div className={classNames(projectcss.all, sty.column__xijj6)}>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__q1J1U
              )}
              component={Link}
              href={"https://www.plasmic.app/"}
              platform={"nextjs"}
            >
              {"CONTACT"}
            </p.PlasmicLink>
          </div>
        </div>
      </div>

      <div
        className={classNames(projectcss.all, sty.freeBox___04M5I, {
          [sty.freeBoxfilled___04M5I0O3Jw]: hasVariant(
            variants,
            "filled",
            "filled"
          ),

          [sty.freeBoxsearchOpen___04M5IJxjbw]: hasVariant(
            variants,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <Button
          data-plasmic-name={"homeButton"}
          data-plasmic-override={overrides.homeButton}
          link={"/"}
          showStartIcon={true}
          startIcon={
            <HomeIcon
              className={classNames(projectcss.all, sty.svg___9Gqhy)}
              role={"img"}
            />
          }
        >
          {"Home"}
        </Button>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__doadE, {
            [sty.freeBoxsearchOpen__doadEJxjbw]: hasVariant(
              variants,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          {(hasVariant(variants, "searchOpen", "searchOpen") ? false : true) ? (
            <Button
              data-plasmic-name={"searchButton"}
              data-plasmic-override={overrides.searchButton}
              className={classNames("__wab_instance", {
                [sty.searchButtonsearchOpen]: hasVariant(
                  variants,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              iconOnly={true}
              startIcon={
                <SearchIcon
                  className={classNames(projectcss.all, sty.svg__li9DU)}
                  role={"img"}
                />
              }
            >
              {"Menu"}
            </Button>
          ) : null}
          {(hasVariant(variants, "searchOpen", "searchOpen") ? true : true) ? (
            <TextInput
              data-plasmic-name={"searchInput"}
              data-plasmic-override={overrides.searchInput}
              className={classNames("__wab_instance", sty.searchInput, {
                [sty.searchInputsearchOpen]: hasVariant(
                  variants,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              placeholder={"Search..."}
            />
          ) : null}

          <Button
            data-plasmic-name={"profileButton"}
            data-plasmic-override={overrides.profileButton}
            iconOnly={true}
            startIcon={
              <ProfileIcon
                className={classNames(projectcss.all, sty.svg__yc3Wl)}
                role={"img"}
              />
            }
          >
            {"Menu"}
          </Button>

          <div className={classNames(projectcss.all, sty.freeBox__keaFc)}>
            <Button
              data-plasmic-name={"cartButton"}
              data-plasmic-override={overrides.cartButton}
              colors={"white"}
              rounded={true}
              showStartIcon={true}
              startIcon={
                <CartIcon
                  className={classNames(projectcss.all, sty.svg__qStnv)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iPwjI,
                  {
                    [sty.textfilled__iPwjI0O3Jw]: hasVariant(
                      variants,
                      "filled",
                      "filled"
                    )
                  }
                )}
              >
                {hasVariant(variants, "filled", "filled") ? "1" : "0"}
              </div>
            </Button>
          </div>
        </p.Stack>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "columns",
    "homeButton",
    "searchButton",
    "searchInput",
    "profileButton",
    "cartButton"
  ],

  columns: ["columns"],
  homeButton: ["homeButton"],
  searchButton: ["searchButton"],
  searchInput: ["searchInput"],
  profileButton: ["profileButton"],
  cartButton: ["cartButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavBar__ArgProps,
      internalVariantPropNames: PlasmicNavBar__VariantProps
    });

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    homeButton: makeNodeComponent("homeButton"),
    searchButton: makeNodeComponent("searchButton"),
    searchInput: makeNodeComponent("searchInput"),
    profileButton: makeNodeComponent("profileButton"),
    cartButton: makeNodeComponent("cartButton"),
    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
