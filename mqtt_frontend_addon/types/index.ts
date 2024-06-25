import { SVGProps } from "react";
import { IThermostat } from "./thermostat";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TThermostat = IThermostat;


export type AlarmPanelCardConfigState =
  | "arm_away"
  | "arm_home"
  | "arm_night"
  | "arm_vacation"
  | "arm_custom_bypass";