import React from "react";
import FacebookEmoji from "../emoji/emoji.js";
import "./reactions.css";

function Reaction() {
  return (
    <div className="emoji_set">
      <FacebookEmoji type="like" size="sm" />
      <FacebookEmoji type="love" size="sm" />
      <FacebookEmoji type="wow" size="sm" />
      <FacebookEmoji type="yay" size="sm" />
      <FacebookEmoji type="angry" size="sm" />
      <FacebookEmoji type="haha" size="sm" />
      <FacebookEmoji type="sad" size="sm" />
    </div>
  );
}

export default Reaction;
