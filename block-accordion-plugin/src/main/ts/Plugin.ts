import { Editor, TinyMCE } from "tinymce";

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.on("init", () => {
    editor.getDoc().head.appendChild(
      editor.dom.create(
        "style",
        {
          type: "text/css",
        },
        `
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
        `
      )
    );
  });

  editor.ui.registry.addButton("block-accordion-plugin", {
    text: "block-accordion-plugin button",
    onAction: () => {
      const html = `
      <style>
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
        transition: transform 0.5s ease, -webkit-transform 0.5s ease;
      }

      .accordion-title {
        display: flex;
        line-height: 1.5;
        color: #393c41;
        cursor: pointer;
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

      </style>
      <div class="accordion-container">
      <div class="accordion-title">
        <svg
          t="1726730371416"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5579"
          width="22"
          height="22"
        >
          <path
            d="M375.168 225.834667a42.666667 42.666667 0 0 1 60.330667 0l256 256a42.666667 42.666667 0 0 1 0 60.330666l-256 256a42.666667 42.666667 0 1 1-60.330667-60.330666L600.96 512 375.168 286.165333a42.666667 42.666667 0 0 1-3.541333-56.32l3.541333-4.010666z"
            p-id="5580"
            fill="currentColor"
          ></path>
        </svg>

        <div>Title</div>
      </div>

      <div class="accordion-content">Description</div>
    </div>
    <div style="display: none;">
      <script>
        if(!document.body.hasAttribute("data-accordion-events-bound")) {
          document.body.setAttribute("data-accordion-events-bound", "true");
          document.body.addEventListener("click", (e) => {
            const target = e.target;
            const isSvg = target.nodeName.toLocaleLowerCase() === "svg";
            const parentIsTitle = target.classList.contains("accordion-title") || target.parentNode.classList.contains("accordion-title");

            if (parentIsTitle) {
              const container = target.classList.contains("accordion-title") ? target.parentElement : target.parentElement.parentElement;

              if (container) {
                if(container.classList.contains("expanded")) {
                  container.classList.remove("expanded")
                } else {
                  container.classList.add("expanded")
                }
              }
            }
          });
        }
      </script>
    </div>
    <br/>
`;

      editor.insertContent(html);

      if (!editor.getBody().hasAttribute("data-accordion-events-bound")) {
        editor.getBody().setAttribute("data-accordion-events-bound", "true");

        editor.getBody().addEventListener("click", (e) => {
          const target = e.target as HTMLElement;
          const isSvg = target.nodeName.toLocaleLowerCase() === "svg";
          const title = target.closest(".accordion-title");

          if (isSvg && title) {
            const container = title.closest(".accordion-container");
            if (container) {
              container.classList.toggle("expanded");
            }
          }
        });
      }
    },
  });
};

export default (): void => {
  tinymce.PluginManager.add("block-accordion-plugin", setup);
};
