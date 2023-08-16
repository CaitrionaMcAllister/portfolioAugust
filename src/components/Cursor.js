import { emojiCursor } from "cursor-effects";
import { fairyDustCursor } from "https://unpkg.com/cursor-effects@latest/dist/esm.js";

function Cursor() {
  //   new emojiCursor({ emoji: ["🔥", "🐬", "🦆"] });
  //   new textFlag({ text: "test", color: ["#FF6800"] });
  //   new fairyDustCursor();
  new fairyDustCursor({
    colors: ["#ffffff", "#ffffff", "#ffffff"],
  });
}

export default Cursor;
