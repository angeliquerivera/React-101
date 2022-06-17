# React Router

## What is React Router?

- Routing library for React
- Allows us to map components and data to different routes on a site within React (client-side routing)
- Client-side routing: routing within the front end

## How do you connect your app to the browser's URL?

- Import `BrowserRouter` from react-router-dom
- Wrap your route component with `BrowserRouter`

## What is `BrowserRouter`?

- The recommended interface for running React router in a web browser
- Stores the current location in the browser's address bar using the browser's built in history stack(API)

## What is `<Link />`?

- An element that lets the user navigate to another page by clicking on it
- Through `react-router-dom`, a link renders an accessible `<a>` tag with a real `<href>` that points to the resource it's linking to

### The Link's `to` value

- One way to open up link values is by passing in a string as the `to` value that would build off the existing string

## Route Config

- Routes parent component
- Each parent will contain a route component that dictates some form of path and an element aka the component you want to render for your path

## Nested Routes

- Nesting routes helps fix the issue of repeating shared layouts

### Before nesting - losing the nav bar on click

- When on index page, we have links to other pages in navigation section
- When we click one of those links, we are taken to the associated path and the associated element renders but we lose the navigation bar

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<ReactRouterRoot />} />
    <Route path="invoices" element={<Invoices />} />
    <Route path="expenses" element={<Expenses />} />
  </Routes>
</BrowserRouter>
```

### After nesting

```js
// index.js render
<BrowserRouter>
  <Routes>
    <Route path="/" element={<ReactRouterRoot />}>
      <Route path="invoices" element={<Invoices />} />
      <Route path="expenses" element={<Expenses />} />
    </Route>
  </Routes>
</BrowserRouter>
```

```js
// ReactRouterRoot
  return (
    <div className="container">
      <h4 className="display-4">Bookkeeper App!</h4>
      <nav
        style={{
          borderBottom: "1px solid",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet /> <--This lets the child components of parent route render
    </div>
  );
```

## Outlets

- Outlets should be used in parent route elements to render their child route elements
- These outlets allow nested UI to show up when child routes are rendered
- If the parent route matches exactly, it will render a child index route or nothing if there is no index route

## No Match Routes

- Allow us to handle cases where a user navigates to a route that is invalid or unaccounted for by presenting them with a catch-all component case
- The path for no match routes is simply `"*"`
