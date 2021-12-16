import {ReactElement, ReactNode} from "react";

export interface Route {
  path: string
  exact?: boolean
  component?: ReactNode
  element?: ReactNode
}