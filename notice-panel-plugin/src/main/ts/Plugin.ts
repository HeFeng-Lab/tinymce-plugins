import { Editor, TinyMCE } from "tinymce";

declare const tinymce: TinyMCE;

const setup = (editor: Editor): void => {
  // 注册按钮
  editor.ui.registry.addButton("notice-panel-plugin", {
    tooltip: "Notice Panel",
    icon: "notice",
    onAction: () => {
      const html = `
        <div class="franklinwh-notice-panel">
          <div style="display: flex; flex-direction: row; justify-content: flex-start; background-color: #f4f4f4; padding: 20px 40px; border-radius: 12px;">
            <div>
              <img style="aspect-ratio: 40 / 40;" src="https://e-uploads.franklinwh.com/website/news/76c3db50c5e90d5e15fe370190d73e70.svg" srcset="" alt="" width="40px">
            </div>
            <div style="flex: 1; margin-left: 20px;">
              <div style="font-weight: bold; font-size: 16pt;">TIP</div>
              <div style="font-style: italic;">description</div>
            </div>
          </div>
        </div>
      `;

      editor.insertContent(html);
    },
  });
};

export default (): void => {
  tinymce.PluginManager.add("notice-panel-plugin", setup);
};
