// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7TgNrWQj5NP1iabd7btsp3
// Component: d90Pci6N7gSYfW
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: iworc5bw6VgnEX/component
import Button from "../../Button"; // plasmic-import: jqA6_3BfibjBPp/component
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: 0uTYi8V9d63H8V/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_normangershman_com.module.css"; // plasmic-import: 7TgNrWQj5NP1iabd7btsp3/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: d90Pci6N7gSYfW/css
import EmailIcon from "./icons/PlasmicIcon__Email"; // plasmic-import: KdRa52DefEnD0g/icon
import DeliveryIcon from "./icons/PlasmicIcon__Delivery"; // plasmic-import: pUbq5KD0cHtBF6/icon
import EnterIcon from "./icons/PlasmicIcon__Enter"; // plasmic-import: m9H7koBxGRpEVj/icon
import QuestionIcon from "./icons/PlasmicIcon__Question"; // plasmic-import: R6Khoz5ifNTcTU/icon

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
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
        sty.root
      )}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__et33U)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bevko)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__foi6K
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hsjmp
              )}
            >
              {
                "Sign up for exclusive offers, original stories, activism, events and more."
              }
            </div>

            <TextInput
              data-plasmic-name={"textInput"}
              data-plasmic-override={overrides.textInput}
              className={classNames("__wab_instance", sty.textInput)}
              placeholder={"Email address..."}
              showStartIcon={true}
              startIcon={
                <EmailIcon
                  className={classNames(projectcss.all, sty.svg__vppwV)}
                  role={"img"}
                />
              }
            />

            <Button
              className={classNames("__wab_instance", sty.button__yvUr2)}
              colors={"black"}
            >
              {"Sign me up"}
            </Button>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__z9Flt)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yTXt
              )}
            >
              {"Help"}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rhfQa)}
            >
              <Button
                showStartIcon={true}
                startIcon={
                  <DeliveryIcon
                    className={classNames(projectcss.all, sty.svg__pQfUw)}
                    role={"img"}
                  />
                }
              >
                {"Order status"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__tiqVi)}
                showStartIcon={true}
                startIcon={
                  <EnterIcon
                    className={classNames(projectcss.all, sty.svg__kaFiL)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__w68R4
                  )}
                >
                  {"Returns and exchanges"}
                </div>
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button___8HlS3)}
                showStartIcon={true}
                startIcon={
                  <QuestionIcon
                    className={classNames(projectcss.all, sty.svg__eEuyb)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jXn54
                  )}
                >
                  {"Help center"}
                </div>
              </Button>
            </p.Stack>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pTAgn)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sQfpn
              )}
            >
              {"More info"}
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__eibDi)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qpfve)}
              >
                <Button>{"Gift cards"}</Button>

                <Button
                  className={classNames("__wab_instance", sty.button__jLnZ5)}
                >
                  {"Find a store"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button___4NLXe)}
                >
                  {"Careers"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__nNbTi)}
                >
                  {"Sitemap"}
                </Button>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lHt7)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__fe7Zw)}
                >
                  {"Group sales"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__gvht0)}
                >
                  {"Privacy policy"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__sBkhV)}
                >
                  {"Contact us"}
                </Button>
              </p.Stack>
            </div>
          </p.Stack>
        </p.Stack>
      ) : null}

      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage)}
      />
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "copyrightSocialLanguage"],
  textInput: ["textInput", "textbox"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
