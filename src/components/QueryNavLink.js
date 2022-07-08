import React from "react";
import { useLocation, NavLink } from "react-router-dom";

/**
 * Returns custom `NavLink` that uses the `useLocation` hook and a base route to persist a query string after a search is done
 * See router-notes for what `useLocation` returns
 * @function QueryNavLink
 * @param {String} baseRoute  - URL routing (/slash/routes/etc.)
 * @param {*} props - any additional props for NavLink
 * @return {NavLink}
 * @example
 * const baseRoute = "/invoices"
 * const search = "?company=s"
 *
 * return <NavLink to={"/invoices" + "?company=s"} {...allReceivedProps}>
 */
export default function QueryNavLink({ baseRoute, ...props }) {
  let { search } = useLocation();
  return <NavLink to={`${baseRoute}${search}`} {...props} />;
}
