import "@bangle.dev/core/style.css";
import {
  Plugin,
  BangleEditor,
  BangleEditorState,
  corePlugins,
  coreSpec,
  SpecRegistry,
} from "@bangle.dev/core";

// This example is taking from https://bangle.dev/docs/examples/exporting-data#persisting-to-local-storage
function getItemFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("exporting-data.example2"));
  } catch (err) {
    return null;
  }
}

export function Editor(domNode) {
  const state = new BangleEditorState({
    specRegistry: new SpecRegistry(coreSpec()),
    plugins: () => [
      ...corePlugins(),
      new Plugin({
        view: () => ({
          update: (view, prevState) => {
            if (!view.state.doc.eq(prevState.doc)) {
              localStorage.setItem(
                "exporting-data.example2",
                JSON.stringify(view.state.doc.toJSON())
              );
            }
          },
        }),
      }),
    ],
    initialValue:
      getItemFromStorage() ||
      "Hey there whatever you type here will be persisted in localStorage!",
  });

  const editor = new BangleEditor(domNode, { state });

  return editor;
}
