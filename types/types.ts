import { ReactElement } from "react";

export interface MenuItem {
  title: string;
  url: string;
  active: boolean;
}

export interface Feature {
  title: string;
  icon: ReactElement;
  description: string;
}
