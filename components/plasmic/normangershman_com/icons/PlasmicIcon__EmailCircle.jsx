// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EmailCircleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 60 60"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"none"} fillRule={"evenodd"} stroke={"none"} strokeWidth={"1"}>
        <path
          d={
            "M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"
          }
          fill={"#000"}
        ></path>

        <path
          d={
            "M30 33.462l17.308-15H12.692l17.308 15zm-4.675-1.66L30 35.637l4.602-3.837 12.706 10.891H12.692l12.633-10.89zm-13.787 9.736V19.615l12.693 10.962-12.693 10.961zm36.924 0V19.615L35.769 30.577l12.693 10.961z"
          }
          fill={"#FFF"}
        ></path>
      </g>
    </svg>
  );
}

export default EmailCircleIcon;
/* prettier-ignore-end */
