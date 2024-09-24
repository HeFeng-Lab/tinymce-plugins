import { TinyMCE } from "tinymce";

import Plugin from "../../main/ts/Plugin";

declare let tinymce: TinyMCE;

Plugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: "code block-accordion-plugin preview",
  toolbar: "block-accordion-plugin preview",
  extended_valid_elements:
    "svg[*],g[*],path[*],circle[*],rect[*],polygon[*],script,style", // 允许 SVG 标签及其属性

  content_style: `
    .accordion-container.expanded > .accordion-title {
        color: #171a20;
      }
      .accordion-container.expanded > .accordion-content {
        margin-bottom: 0;
        margin-top: 8px;
        max-height: none;
        overflow: auto;
      }

      .accordion-container.expanded > .accordion-title > svg {
        transform: rotate(90deg);
        opacity: 1;
      }

      .accordion-container {
        padding: 8px 0;
      }

      .accordion-container svg {
        fill: #000;
        opacity: 0.8;
        cursor: pointer;
        transition: transform 0.5s ease, -webkit-transform 0.5s ease;
      }

      .accordion-title {
        display: flex;
        line-height: 1.5;
        color: #393c41;
      }

      .accordion-content {
        margin: 0;
        max-height: 0;
        overflow: hidden;
        padding-left: 22px;
        line-height: 1.5;
        color: #393c41;
        transition: margin 0.5s ease, max-block-size 0.5s ease;
      }
    `,
});
