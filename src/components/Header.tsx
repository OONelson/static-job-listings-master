import * as React from "react";

const Header: React.FunctionComponent = () => {
  const bgImageStyles = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <main>
      <img
        style={bgImageStyles}
        src="../images/bg-header-desktop.svg"
        alt="bg"
      />
    </main>
  );
};

export default Header;
