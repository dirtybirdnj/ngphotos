// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: w-ZHdDNStu
import * as React from "react";
import Head from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: vtr4HBe3IOcGOj/component
import Footer from "../../Footer"; // plasmic-import: d90Pci6N7gSYfW/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_normangershman_com.module.css"; // plasmic-import: 7TgNrWQj5NP1iabd7btsp3/projectcss
import sty from "./PlasmicArchives.module.css"; // plasmic-import: w-ZHdDNStu/css

export const PlasmicArchives__VariantProps = new Array();

export const PlasmicArchives__ArgProps = new Array();

function PlasmicArchives__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"normangershman.com - archives"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"normangershman.com - archives"}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
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
            sty.root
          )}
        >
          {true ? (
            <NavBar
              data-plasmic-name={"navBar"}
              data-plasmic-override={overrides.navBar}
              className={classNames("__wab_instance", sty.navBar)}
              tabArchives={true}
            />
          ) : null}

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__b6W6O
              )}
            >
              {"ARCHIVE COLLECTION"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cTek
              )}
            >
              {
                "Each collection is a separate body of work by category, interest and aesthetics. Some prints are already available. More will be available monthly or sooner. Please do inquire if a particular one is of interest."
              }
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jBJx
              )}
            >
              {
                "Gallery / listing of  title & one image per collection will show on this page"
              }
            </div>
          </div>

          {true ? (
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navBar", "freeBox", "footer"],
  navBar: ["navBar"],
  freeBox: ["freeBox"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicArchives__ArgProps,
      internalVariantPropNames: PlasmicArchives__VariantProps
    });

    return PlasmicArchives__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicArchives";
  } else {
    func.displayName = `PlasmicArchives.${nodeName}`;
  }
  return func;
}

export const PlasmicArchives = Object.assign(
  // Top-level PlasmicArchives renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    freeBox: makeNodeComponent("freeBox"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicArchives
    internalVariantProps: PlasmicArchives__VariantProps,
    internalArgProps: PlasmicArchives__ArgProps
  }
);

export default PlasmicArchives;
/* prettier-ignore-end */
