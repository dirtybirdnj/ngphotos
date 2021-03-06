// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: My4oZYtOnB
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
import sty from "./PlasmicInquiries.module.css"; // plasmic-import: My4oZYtOnB/css

export const PlasmicInquiries__VariantProps = new Array();

export const PlasmicInquiries__ArgProps = new Array();

function PlasmicInquiries__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"normangershman.com - inquiries"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"normangershman.com - inquiries"}
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
              tabInquiries={true}
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
                sty.text___0BbI
              )}
            >
              {"INQUIRIES"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oUCx
              )}
            >
              {
                "The Norman Gershman Photographic Archive was established in the summer of 2021 and is housed in Montpelier, Vermont; The Archive contains all of the works of Norman Gershman. While still in its formative stages as the Archive is organized, printing of newly rediscovered work is already underway.\n\n???PRE-ORDERS will soon be available and each month's more prints will be added to the available list as they are properly evaluated and prepared.\n\n???Should you be interested in any particular image you see in the Archives, please do let us know. We look forward to hearing from you.\n\nEric Gershman, Trustee and Director eric@normangershman.com\n\nMartine Bisagni, Archivist and Curator mia@normangershman.com"
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
      internalArgPropNames: PlasmicInquiries__ArgProps,
      internalVariantPropNames: PlasmicInquiries__VariantProps
    });

    return PlasmicInquiries__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInquiries";
  } else {
    func.displayName = `PlasmicInquiries.${nodeName}`;
  }
  return func;
}

export const PlasmicInquiries = Object.assign(
  // Top-level PlasmicInquiries renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    freeBox: makeNodeComponent("freeBox"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicInquiries
    internalVariantProps: PlasmicInquiries__VariantProps,
    internalArgProps: PlasmicInquiries__ArgProps
  }
);

export default PlasmicInquiries;
/* prettier-ignore-end */
