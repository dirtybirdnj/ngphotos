// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: K6AX6DpTJmvTqD
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: jqA6_3BfibjBPp/component
import Rating from "../../Rating"; // plasmic-import: o1ls_a0IAWOOXD/component
import Price from "../../Price"; // plasmic-import: 1tRSjjUWH0MFhZ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_normangershman_com.module.css"; // plasmic-import: 7TgNrWQj5NP1iabd7btsp3/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: K6AX6DpTJmvTqD/css

export const PlasmicProductCard__VariantProps = new Array("small");

export const PlasmicProductCard__ArgProps = new Array(
  "tags",
  "children",
  "link",
  "rating",
  "img",
  "dollars",
  "cents"
);

function PlasmicProductCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

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
        sty.root,
        { [sty.rootsmall]: hasVariant(variants, "small", "small") }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link, {
          [sty.linksmall]: hasVariant(variants, "small", "small")
        })}
        component={Link}
        href={args.link}
        platform={"nextjs"}
      >
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"256px"}
          displayWidth={"auto"}
          src={
            args.img !== undefined
              ? args.img
              : {
                  src: "/plasmic/normangershman_com/images/shoe14.png",
                  fullWidth: 840,
                  fullHeight: 840,
                  aspectRatio: undefined
                }
          }
        />

        {(
          hasVariant(variants, "small", "small") && triggers.hover_root
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__j0MZ, {
              [sty.freeBoxsmall__j0MZvnKfc]: hasVariant(
                variants,
                "small",
                "small"
              )
            })}
          />
        ) : null}
        {(hasVariant(variants, "small", "small") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bB4MK, {
              [sty.freeBoxsmall__bB4MKvnKfc]: hasVariant(
                variants,
                "small",
                "small"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox___4QsWu)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <Button colors={"lightGray"} size={"small"}>
                    {"New"}
                  </Button>
                ),

                value: args.tags
              })}

              {p.renderPlasmicSlot({
                defaultContents: (
                  <Rating
                    className={classNames("__wab_instance", sty.rating___1V3O)}
                  />
                ),

                value: args.rating
              })}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vY9Jd)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xBl2S
                      )}
                    >
                      {"Product name"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0Rlm7
                      )}
                    >
                      {"If you can dream it, you can build it."}
                    </div>
                  </React.Fragment>
                ),

                value: args.children
              })}
            </p.Stack>

            <Price
              data-plasmic-name={"price"}
              data-plasmic-override={overrides.price}
              cents={p.renderPlasmicSlot({
                defaultContents: "99",
                value: args.cents
              })}
              className={classNames("__wab_instance", sty.price)}
              dollars={p.renderPlasmicSlot({
                defaultContents: "88",
                value: args.dollars
              })}
            />
          </p.Stack>
        ) : null}
      </p.PlasmicLink>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "img", "price"],
  link: ["link", "img", "price"],
  img: ["img"],
  price: ["price"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCard__ArgProps,
      internalVariantPropNames: PlasmicProductCard__VariantProps
    });

    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    price: makeNodeComponent("price"),
    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
