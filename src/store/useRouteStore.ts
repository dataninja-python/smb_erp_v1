import React from "react";
import create from "zustand";
import { persist } from "zustand/middleware";

export interface RouteProps {
  pageId: number;
  path: string;
  element: React.TSXElement | React.JSXElement | React.Node;
}

export const useRouteStore = create<RouteProps>(
  persist<RouteProps>((set) => ({}))
);
