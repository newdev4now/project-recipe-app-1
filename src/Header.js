import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontFamily: "Rock Salt",
          fontSize: "64px",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#fff0c7",
          textAlign: "center",
        }}
      >
        Delicious Food Recipes
      </h1>
    </header>
  )
}

export default Header;