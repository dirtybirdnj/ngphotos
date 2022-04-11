// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InstagramCircleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"2"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0zm0 96c-43.453 0-48.902.184-65.968.963-17.03.777-28.661 3.482-38.839 7.437-10.521 4.089-19.444 9.56-28.339 18.455-8.895 8.895-14.366 17.818-18.455 28.339-3.955 10.177-6.659 21.808-7.437 38.838C96.184 207.098 96 212.547 96 256s.184 48.902.962 65.968c.778 17.03 3.482 28.661 7.437 38.838 4.089 10.521 9.56 19.444 18.455 28.34 8.895 8.895 17.818 14.366 28.339 18.455 10.178 3.954 21.809 6.659 38.839 7.436 17.066.779 22.515.963 65.968.963s48.902-.184 65.968-.963c17.03-.777 28.661-3.482 38.838-7.436 10.521-4.089 19.444-9.56 28.34-18.455 8.895-8.896 14.366-17.819 18.455-28.34 3.954-10.177 6.659-21.808 7.436-38.838.779-17.066.963-22.515.963-65.968s-.184-48.902-.963-65.968c-.777-17.03-3.482-28.661-7.436-38.838-4.089-10.521-9.56-19.444-18.455-28.339-8.896-8.895-17.819-14.366-28.34-18.455-10.177-3.955-21.808-6.66-38.838-7.437C304.902 96.184 299.453 96 256 96zm0 28.829c42.722 0 47.782.163 64.654.933 15.6.712 24.071 3.318 29.709 5.509 7.469 2.902 12.799 6.37 18.397 11.969 5.6 5.598 9.067 10.929 11.969 18.397 2.191 5.638 4.798 14.109 5.509 29.709.77 16.872.933 21.932.933 64.654 0 42.722-.163 47.782-.933 64.654-.711 15.6-3.318 24.071-5.509 29.709-2.902 7.469-6.369 12.799-11.969 18.397-5.598 5.6-10.928 9.067-18.397 11.969-5.638 2.191-14.109 4.798-29.709 5.509-16.869.77-21.929.933-64.654.933-42.725 0-47.784-.163-64.654-.933-15.6-.711-24.071-3.318-29.709-5.509-7.469-2.902-12.799-6.369-18.398-11.969-5.599-5.598-9.066-10.928-11.968-18.397-2.191-5.638-4.798-14.109-5.51-29.709-.77-16.872-.932-21.932-.932-64.654 0-42.722.162-47.782.932-64.654.712-15.6 3.319-24.071 5.51-29.709 2.902-7.468 6.369-12.799 11.968-18.397 5.599-5.599 10.929-9.067 18.398-11.969 5.638-2.191 14.109-4.797 29.709-5.509 16.872-.77 21.932-.933 64.654-.933zm0 49.009c-45.377 0-82.162 36.785-82.162 82.162 0 45.377 36.785 82.162 82.162 82.162 45.377 0 82.162-36.785 82.162-82.162 0-45.377-36.785-82.162-82.162-82.162zm0 135.495c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333 53.333 23.878 53.333 53.333-23.878 53.333-53.333 53.333zm104.609-138.741c0 10.604-8.597 19.199-19.201 19.199-10.603 0-19.199-8.595-19.199-19.199 0-10.604 8.596-19.2 19.199-19.2 10.604 0 19.201 8.596 19.201 19.2z"
        }
      ></path>
    </svg>
  );
}

export default InstagramCircleIcon;
/* prettier-ignore-end */
