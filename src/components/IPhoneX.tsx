import { ReactNode } from "react";
import "../styles/device.min.css";

export default function IPhoneX({ children }: { children: ReactNode }) {
  return (
    <div className="marvel-device iphone-x" style={{ position: "relative" }}>
      <div className="notch">
        <div className="  camera"></div>
        <div className="speaker"></div>
      </div>
      <div className="top-bar"></div>
      <div className="sleep"></div>
      <div className="bottom-bar"></div>
      <div className="volume"></div>
      <div className="overflow">
        <div className="shadow shadow--tr"></div>
        <div className="shadow shadow--tl"></div>
        <div className="shadow shadow--br"></div>
        <div className="shadow shadow--bl"></div>
      </div>
      <div className="inner-shadow"></div>
      <div className="screen">{children}</div>
    </div>
  );
}
