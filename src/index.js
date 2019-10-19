import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Products = function() {
  return (
    <div className="element">
      <div className="top">
        <div className="left">
          <div className="circle fill" />
        </div>
        <div className="right">
          <div className="badge fill" />
        </div>
      </div>
      <div className="bottom">
        <div className="line1 fill" />
        <div className="line2 fill" />
        <div className="line3 fill" />
        <div className="line4 fill" />
      </div>
    </div>
  );
};

const SkeletonBuiler = function({ width, forground, background, children }) {
  return (
    <div
      class="root"
      style={{
        minWidth: width,
        "--forground-color": forground,
        "--background-color": background
      }}
    >
      <div className="trick" style={{ width: width * 3 }}>
        <div className="gradient" />
      </div>
      {children}
    </div>
  );
};

const section = function(screenWidth) {
  let width = screenWidth / 2.2;
  return (
    <div>
      <div>
        <SkeletonBuiler width={screenWidth}>
          <div style={{ width: screenWidth }} />
        </SkeletonBuiler>
      </div>
      <div
        className="wrapper"
        style={{
          width: screenWidth
        }}
      >
        <SkeletonBuiler
          forground="255,255,255"
          background="255,0,0"
          width={width}
        >
          <Products />
        </SkeletonBuiler>
        <SkeletonBuiler width={width}>
          <Products />
        </SkeletonBuiler>
        <SkeletonBuiler width={width}>
          <Products />
        </SkeletonBuiler>
      </div>
    </div>
  );
};

function App() {
  let screenWidth = 396;
  return <div>{section(screenWidth)}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
