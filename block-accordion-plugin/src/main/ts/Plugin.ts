import { Editor, TinyMCE } from "tinymce";

declare const tinymce: TinyMCE;

const setup = (editor: Editor): void => {
  editor.on("LoadContent", () => {
    console.log(editor.getContent());

    addAccordionEventListener();
  });
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

    editor.ui.registry.addIcon(
      "accordion",
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12 14.4477 12.4477 14 13 14H19C19.5523 14 20 14.4477 20 15V15C20 15.5523 19.5523 16 19 16H13C12.4477 16 12 15.5523 12 15V15Z" fill="black"/>
        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M4 15C4 14.4477 4.44772 14 5 14H11C11.5523 14 12 14.4477 12 15V15C12 15.5523 11.5523 16 11 16H5C4.44772 16 4 15.5523 4 15V15Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C12 18.4477 12.4477 18 13 18H19C19.5523 18 20 18.4477 20 19V19C20 19.5523 19.5523 20 19 20H13C12.4477 20 12 19.5523 12 19V19Z" fill="black"/>
        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M4 19C4 18.4477 4.44772 18 5 18H11C11.5523 18 12 18.4477 12 19V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V19Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289L16 9.58579L18.2929 7.29289C18.6834 6.90237 19.3166 6.90237 19.7071 7.29289C20.0976 7.68342 20.0976 8.31658 19.7071 8.70711L16 12.4142L12.2929 8.70711C11.9024 8.31658 11.9024 7.68342 12.2929 7.29289Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L6.58579 8L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L9.41421 8L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071Z" fill="black"/>
        </svg>
      `
    );
  });

  editor.ui.registry.addButton("block-accordion-plugin", {
    icon: "accordion",
    tooltip: "accordion",
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

        <div class="accordion-title-text">Title</div>
      </div>

      <div class="accordion-content">Description</div>
    </div>
    <div style="display:none;">
      <script>
        if(!document.body.hasAttribute("data-accordion-events-bound")) {
          document.body.setAttribute("data-accordion-events-bound", "true");
          document.body.addEventListener("click", (e) => {
            const target = e.target;

            if (target.closest(".accordion-content")) {
              return;
            }

            const container = target.closest(".accordion-container");

            if (container) {
              container.classList.toggle("expanded");
            }
          });
        }
      </script>
    </div><br/>`;

      editor.insertContent(html);

      addAccordionEventListener();
    },
  });

  function addAccordionEventListener() {
    if (!editor.getBody().hasAttribute("data-accordion-events-bound")) {
      editor.getBody().setAttribute("data-accordion-events-bound", "true");

      editor.getBody().addEventListener("click", (e) => {
        let target = e.target as HTMLElement;

        // 点击描述或者描述容器下的元素时
        if (target.closest(".accordion-content")) {
          return;
        }

        // 设计时，只点击 svg 图标展开收起
        let isSvg = target.tagName.toLocaleLowerCase() === "svg";
        const isPath = target.tagName.toLocaleLowerCase() === "path";

        if (isPath) {
          target = target.parentElement as HTMLElement;
          isSvg = true;
        }

        if (!isSvg) {
          return;
        }

        const container = target.closest(".accordion-container");

        if (container) {
          container.classList.toggle("expanded");
        }
      });
    }
  }
};

export default (): void => {
  tinymce.PluginManager.add("block-accordion-plugin", setup);
};
