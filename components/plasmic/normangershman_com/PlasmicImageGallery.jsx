// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: 551gOdMDE8
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_normangershman_com.module.css"; // plasmic-import: 7TgNrWQj5NP1iabd7btsp3/projectcss
import sty from "./PlasmicImageGallery.module.css"; // plasmic-import: 551gOdMDE8/css

export const PlasmicImageGallery__VariantProps = new Array();

export const PlasmicImageGallery__ArgProps = new Array();

function PlasmicImageGallery__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
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
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicImageGallery__ArgProps,
      internalVariantPropNames: PlasmicImageGallery__VariantProps
    });

    return PlasmicImageGallery__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImageGallery";
  } else {
    func.displayName = `PlasmicImageGallery.${nodeName}`;
  }
  return func;
}

export const PlasmicImageGallery = Object.assign(
  // Top-level PlasmicImageGallery renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicImageGallery
    internalVariantProps: PlasmicImageGallery__VariantProps,
    internalArgProps: PlasmicImageGallery__ArgProps
  }
);

export default PlasmicImageGallery;
/* prettier-ignore-end */
