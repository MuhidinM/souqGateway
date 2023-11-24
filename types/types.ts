import { ReactElement } from "react";

export interface MenuItem {
  title: string;
  url: string;
  active: boolean;
}

export interface SideBarItem {
  name: string;
  label: string;
  icon: ReactElement;
  hide: boolean; // set the hidden value to true if you want to. U can use different var for different purposes.
  path: string;
  active: string;
}

export interface Feature {
  title: string;
  icon: ReactElement;
  description: string;
}
