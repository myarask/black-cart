# BlackCart

This project was modeled after a [KOIO product page](https://www.koio.co/collections/low-tops-mens/products/capri-triple-white-men?variant=32069054070820).

## Quickstart

```
npm install
npm start
```

## Testing

```
npm test
```

## Structure

The project is broken into 4 entities: `components`, `constants`, `pages`, and `services`. Source code and tests are to be co-located.

### Components

If a component is re-useable or large enough to be extracted from a page, it shall be moved here. A flat structure allows for simple and predictable import/export pathing.

### Constants

Global constants that are relevant throughout the app. Note that with typescript, this directory can be replaced by Typescript enumerators.

### Pages

All components that are direct children of `Route` components are located here.

### Services

All backend interactions are to be routed through the service layer. This enforces a seperation of concerns and improves test legibility.

Service modules are to be named after the resource being modified. The first arguments are to be an `id`, if applicable. The following arguments shall be an `options` object, if applicable.

## Major TODOs:

- Replace inline styles with styled components
- Replace constants directory with Typescript enumerators
- Co-located unit tests for components and pages
- Extract image components from the ProductDetails page into the components directory
- Zoom and link functionality for images
- Tests for service layer
