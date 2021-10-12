import "@bangle.dev/core/style.css";
import "@bangle.dev/tooltip/style.css";
import "@bangle.dev/react-menu/style.css";
import React from "react";
import { useEditorState, BangleEditor } from "@bangle.dev/react";
import { PluginKey } from "@bangle.dev/core";
import { floatingMenu, FloatingMenu } from "@bangle.dev/react-menu";
import {
  blockquote,
  bold,
  bulletList,
  code,
  codeBlock,
  hardBreak,
  heading,
  horizontalRule,
  image,
  italic,
  link,
  listItem,
  orderedList,
  paragraph,
  strike,
  underline,
} from "@bangle.dev/base-components";

const menuKey = new PluginKey("menuKey");

export function Editor() {
  const editorState = useEditorState({
    initialValue: "Hello world!",
    specs: [
      blockquote.spec(),
      bold.spec(),
      bulletList.spec(),
      code.spec(),
      codeBlock.spec(),
      hardBreak.spec(),
      heading.spec(),
      horizontalRule.spec(),
      image.spec(),
      italic.spec(),
      link.spec(),
      listItem.spec(),
      orderedList.spec(),
      paragraph.spec(),
      strike.spec(),
      underline.spec(),
    ],
    plugins: () => [
      blockquote.plugins(),
      bold.plugins(),
      bulletList.plugins(),
      code.plugins(),
      codeBlock.plugins(),
      hardBreak.plugins(),
      heading.plugins(),
      horizontalRule.plugins(),
      image.plugins(),
      italic.plugins(),
      link.plugins(),
      listItem.plugins(),
      orderedList.plugins(),
      paragraph.plugins(),
      strike.plugins(),
      underline.plugins(),
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
