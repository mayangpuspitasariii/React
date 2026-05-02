import { useState } from "react";

function Header({ author }) {
  return (
    <>
      <h1>Belajar React Bareng {author ? author : "Yuan"} </h1>
    </>
  );
}

export default Header;
