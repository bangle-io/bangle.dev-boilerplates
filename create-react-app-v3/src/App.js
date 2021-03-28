import "./App.css";

import "@bangle.dev/core/style.css";
import "@bangle.dev/tooltip/style.css";
import "@bangle.dev/react-menu/style.css";

import { useEditorState, BangleEditor } from "@bangle.dev/react";
import { corePlugins, coreSpec } from "@bangle.dev/core/utils/core-components";
import { PluginKey } from "@bangle.dev/core";
import { floatingMenu, FloatingMenu } from "@bangle.dev/react-menu";

const menuKey = new PluginKey("menuKey");

function Editor() {
  const editorState = useEditorState({
    initialValue: "Hello world!",
    specs: coreSpec(),
    plugins: () => [
      ...corePlugins(),
      floatingMenu.plugins({
        key: menuKey,
      }),
    ],
  });

  return (
    <BangleEditor state={editorState} style={{ padding: "5px 20px" }}>
      <FloatingMenu menuKey={menuKey} />
    </BangleEditor>
  );
}

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;
