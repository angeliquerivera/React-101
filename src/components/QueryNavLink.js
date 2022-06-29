import React from "react";
import { useLocation, NavLink } from "react-router-dom";

/**
 * See router-notes for what `useLocation` returns
 */

/**
 * Returns custom `NavLink` that uses the `useLocation` hook and a base route to persist a query string after a search is done
 * @function QueryNavLink
 * @param {String} baseRoute  - URL routing (/slash/routes/etc.
 * @param {*} props - any additional props for NavLink
 * @return {NavLink}
 */
export default function QueryNavLink({ baseRoute, ...props }) {
  let { search } = useLocation();

  /**
   * EXAMPLES
   * baseRoute : "/invoices"
   * search: "?company=s"
   *
   * returns
   * ```js
   * <NavLink to={"/invoices" + "?company=s"} {...allReceivedProps}>
   * ```
   */

  return <NavLink to={`${baseRoute}${search}`} {...props} />;
}
