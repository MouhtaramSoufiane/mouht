import React from "react";
import { css } from "@emotion/core";
import { useTheme } from "./Theming";

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const Share = ({ url, title, twitterHandle }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        div {
          margin-right: 20px;
          cursor: pointer;
          :hover {
            color: ${theme.colors.primary};
          }
        }
        span {
          font-size: 70%;
          text-transform: uppercase;
          line-height: 2.5;
          opacity: 0.7;
        }
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          border-top: 1px solid ${theme.colors.gray};
        `}
      />
      <span>Share article </span>
      <span
        css={css`
          font-size: 30px !important;
          margin-right: 15px;
          margin-left: 5px;
        `}
      >
        👉
      </span>
      <TwitterShareButton
        css={css`
          cursor: pointer;
          margin-left: 10px;
        `}
        url={url}
        quote={title}
        via={twitterHandle.split("@").join("")}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton
        css={css`
          cursor: pointer;
          margin-left: 10px;
        `}
        url={url}
        quote={title}
        via={twitterHandle.split("@").join("")}
      >
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split("@").join("")}
        css={css`
          cursor: pointer;
          margin-left: 10px;
        `}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </div>
  );
};

export default Share;
