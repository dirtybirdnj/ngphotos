// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: jqA6_3BfibjBPp
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_normangershman_com.module.css"; // plasmic-import: 7TgNrWQj5NP1iabd7btsp3/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: jqA6_3BfibjBPp/css
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: TxLww878SdsSi0/icon

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "iconOnly",
  "colors",
  "size",
  "rounded",
  "states",
  "isDisabled"
);

export const PlasmicButton__ArgProps = new Array(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolors_black]: hasVariant(variants, "colors", "black"),
          [sty.rootcolors_black_showEndIcon]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "colors", "black"),
          [sty.rootcolors_blue]: hasVariant(variants, "colors", "blue"),
          [sty.rootcolors_gray]: hasVariant(variants, "colors", "gray"),
          [sty.rootcolors_lightGrayOutline]: hasVariant(
            variants,
            "colors",
            "lightGrayOutline"
          ),

          [sty.rootcolors_lightGray]: hasVariant(
            variants,
            "colors",
            "lightGray"
          ),

          [sty.rootcolors_link]: hasVariant(variants, "colors", "link"),
          [sty.rootcolors_white]: hasVariant(variants, "colors", "white"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.rootrounded]: hasVariant(variants, "rounded", "rounded"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),

          [sty.rootsize_large]: hasVariant(variants, "size", "large"),
          [sty.rootsize_large_colors_black_showEndIcon]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "colors", "black") &&
            hasVariant(variants, "size", "large"),
          [sty.rootsize_large_rounded]:
            hasVariant(variants, "rounded", "rounded") &&
            hasVariant(variants, "size", "large"),
          [sty.rootsize_large_rounded_colors_black_showEndIcon]:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "colors", "black") &&
            hasVariant(variants, "size", "large") &&
            hasVariant(variants, "rounded", "rounded"),
          [sty.rootsize_narrow]: hasVariant(variants, "size", "narrow"),
          [sty.rootsize_small]: hasVariant(variants, "size", "small"),
          [sty.rootstates_active]: hasVariant(variants, "states", "active")
        }
      )}
    >
      {(
        hasVariant(variants, "iconOnly", "iconOnly")
          ? true
          : hasVariant(variants, "showEndIcon", "showEndIcon")
          ? false
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? true
          : false
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox___1O0Ov, {
            [sty.freeBoxiconOnly___1O0Ov7JUl8]: hasVariant(
              variants,
              "iconOnly",
              "iconOnly"
            ),

            [sty.freeBoxshowEndIcon___1O0OVoIbqE]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),

            [sty.freeBoxshowStartIcon___1O0OVybVyb]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),

            [sty.freeBoxsize_large___1O0Ov3C2Tv]: hasVariant(
              variants,
              "size",
              "large"
            ),

            [sty.freeBoxsize_small___1O0Ov6B8Dd]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : true)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <MenuIcon
                    className={classNames(projectcss.all, sty.svg___5CT3U)}
                    role={"img"}
                  />
                ),

                value: args.startIcon,
                className: classNames(sty.slotTargetStartIcon, {
                  [sty.slotTargetStartIconcolors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotTargetStartIconcolors_blue]: hasVariant(
                    variants,
                    "colors",
                    "blue"
                  ),

                  [sty.slotTargetStartIconcolors_gray]: hasVariant(
                    variants,
                    "colors",
                    "gray"
                  ),

                  [sty.slotTargetStartIconshowEndIcon]: hasVariant(
                    variants,
                    "showEndIcon",
                    "showEndIcon"
                  ),

                  [sty.slotTargetStartIconsize_large]: hasVariant(
                    variants,
                    "size",
                    "large"
                  ),

                  [sty.slotTargetStartIconsize_small]: hasVariant(
                    variants,
                    "size",
                    "small"
                  )
                })
              })
            : null}
        </div>
      ) : null}
      {(hasVariant(variants, "iconOnly", "iconOnly") ? true : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrencolors_black]: hasVariant(
                variants,
                "colors",
                "black"
              ),

              [sty.slotTargetChildrencolors_blue]: hasVariant(
                variants,
                "colors",
                "blue"
              ),

              [sty.slotTargetChildrencolors_gray]: hasVariant(
                variants,
                "colors",
                "gray"
              ),

              [sty.slotTargetChildrencolors_link]: hasVariant(
                variants,
                "colors",
                "link"
              ),

              [sty.slotTargetChildreniconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetChildrenisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetChildrenrounded]: hasVariant(
                variants,
                "rounded",
                "rounded"
              ),

              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),

              [sty.slotTargetChildrensize_large]: hasVariant(
                variants,
                "size",
                "large"
              ),

              [sty.slotTargetChildrensize_large_rounded]:
                hasVariant(variants, "size", "large") &&
                hasVariant(variants, "rounded", "rounded"),
              [sty.slotTargetChildrensize_small]: hasVariant(
                variants,
                "size",
                "small"
              )
            })
          })
        : null}
      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__pTpPi, {
            [sty.freeBoxshowEndIcon__pTpPIoIbqE]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),

            [sty.freeBoxsize_small__pTpPi6B8Dd]: hasVariant(
              variants,
              "size",
              "small"
            )
          })}
        >
          {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <MenuIcon
                    className={classNames(projectcss.all, sty.svg__v65Uv)}
                    role={"img"}
                  />
                ),

                value: args.endIcon,
                className: classNames(sty.slotTargetEndIcon, {
                  [sty.slotTargetEndIconcolors_black]: hasVariant(
                    variants,
                    "colors",
                    "black"
                  ),

                  [sty.slotTargetEndIconcolors_link]: hasVariant(
                    variants,
                    "colors",
                    "link"
                  ),

                  [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                    variants,
                    "showEndIcon",
                    "showEndIcon"
                  )
                })
              })
            : null}
        </div>
      ) : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },

      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = p.PlasmicLink;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
