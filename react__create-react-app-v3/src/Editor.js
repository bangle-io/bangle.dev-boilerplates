import "@bangle.dev/core/style.css";
import "@bangle.dev/tooltip/style.css";
import "@bangle.dev/react-menu/style.css";

import React from "react";
import { useEditorState, BangleEditor } from "@bangle.dev/react";
import { PluginKey, paragraph, doc, heading } from "@bangle.dev/core";
import { floatingMenu, FloatingMenu } from "@bangle.dev/react-menu";

const menuKey = new PluginKey("menuKey");

export function Editor() {
  const editorState = useEditorState({
    initialValue: "Hello world!",
    specs: [paragraph.spec(), doc.spec(), heading.spec()],
    plugins: () => [
      paragraph.plugins(),
      doc.plugins(),
      heading.plugins(),
      floatingMenu.plugins({
        key: menuKey,
      }),
    ],
  });

  return (
    <BangleEditor
      state={editorState}
      style={{ margin: "10px 20px 0 20px", backgroundColor: "white" }}
    >
      <FloatingMenu menuKey={menuKey} />
    </BangleEditor>
  );
}
