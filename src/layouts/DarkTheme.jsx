import React from "react";

import { Button } from "semantic-ui-react";

let isDark = false

const lightTheme = () => {
  isDark=false
  document.getElementById("root").style.filter = "invert(1)";
  document.body.style.backgroundColor = "black";

  var nothemes = document.getElementsByClassName("no-theme");
  for (let i = 0; i < nothemes.length; i++) {
    nothemes[i].style.filter = "invert(1)";
  }

  var images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.filter = "invert(1)";
  }

  sessionStorage.setItem("theme", "light");
};

const darkTheme = () => {
  isDark = true
  document.getElementById("root").style.filter = "invert(0)";
  document.body.style.backgroundColor = "white";

  var nothemes = document.getElementsByClassName("no-theme");
  for (let i = 0; i < nothemes.length; i++) {
    nothemes[i].style.filter = "invert(0)";
  }

  var images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.filter = "invert(0)";
  }

  sessionStorage.setItem("theme", "dark");
};

if (sessionStorage.getItem("theme") === "light") {
  lightTheme();
} else {
  darkTheme();
}

export default function ThemeButton() {
  const toggleTheme = () => {
    if (!isDark) {
      darkTheme();
    } else {
      lightTheme();
    }
    //location.reload();
  };



  return (
    <div>
      <Button
        onClick={() => toggleTheme()}
        icon="moon"
        circular
        style={{ marginLeft:"1em" }}
      ></Button>
    </div>
  );
}