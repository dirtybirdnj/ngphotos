// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: 0uTYi8V9d63H8V
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: jqA6_3BfibjBPp/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_normangershman_com.module.css"; // plasmic-import: 7TgNrWQj5NP1iabd7btsp3/projectcss
import sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: 0uTYi8V9d63H8V/css
import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: kTI2qMHAa/icon
import InstagramCircleIcon from "./icons/PlasmicIcon__InstagramCircle"; // plasmic-import: 0pPcsouYL/icon
import PintrestNewIcon from "./icons/PlasmicIcon__PintrestNew"; // plasmic-import: cPund-yZL/icon
import YoutubeIcon from "./icons/PlasmicIcon__Youtube"; // plasmic-import: iok72CtvRnYQtv/icon
import EmailIcon from "./icons/PlasmicIcon__Email"; // plasmic-import: KdRa52DefEnD0g/icon

export const PlasmicCopyrightSocialLanguage__VariantProps = new Array();

export const PlasmicCopyrightSocialLanguage__ArgProps = new Array();

function PlasmicCopyrightSocialLanguage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__hAjRj)}>
        <div className={classNames(projectcss.all, sty.freeBox__uuzOm)}>
          <Button
            iconOnly={true}
            link={"https://www.facebook.com/gershman.archive"}
            startIcon={
              <FacebookIcon
                className={classNames(projectcss.all, sty.svg__eJvDj)}
                role={"img"}
              />
            }
          />

          <Button
            className={classNames("__wab_instance", sty.button__oRgqF)}
            iconOnly={true}
            link={"https://www.instagram.com/normangershmanarchive"}
            startIcon={
              <InstagramCircleIcon
                className={classNames(projectcss.all, sty.svg__rOcx2)}
                role={"img"}
              />
            }
          />

          <Button
            className={classNames("__wab_instance", sty.button__uJfpf)}
            iconOnly={true}
            link={"http://pinterest.com"}
            startIcon={
              <PintrestNewIcon
                className={classNames(projectcss.all, sty.svg__wWcRv)}
                role={"img"}
              />
            }
          />

          <Button
            className={classNames("__wab_instance", sty.button__dg7O)}
            iconOnly={true}
            link={"/"}
            startIcon={
              <YoutubeIcon
                className={classNames(projectcss.all, sty.svg__lfpNl)}
                role={"img"}
              />
            }
          />

          <Button
            className={classNames("__wab_instance", sty.button__mBrm)}
            iconOnly={true}
            link={"/contact"}
            startIcon={
              <EmailIcon
                className={classNames(projectcss.all, sty.svg__m3ZOw)}
                role={"img"}
              />
            }
          />
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__cYkPt)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qUyJo)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7JYUz
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#CCCCCC" }}
                >
                  {"???Copyright ?? 2022 Norman Gershman. All Rights Reserved."}
                </span>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>

            <p.PlasmicLink
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              href={"https://www.vtapi.co"}
              platform={"nextjs"}
              target={"_blank"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wz44W
                )}
              >
                {"vtapi.co"}
              </div>
            </p.PlasmicLink>
          </p.Stack>
        </p.Stack>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
      internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
    });

    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */
