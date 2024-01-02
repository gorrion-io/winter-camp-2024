## Task: [task](README-%20task.md)

## Technologies

- Next.js
- TanStack/React Query
- Tailwind

## Construction:

To make the application desktop more readable, the application files has been divided into folders:

`context` - here is contexts with logic side app like fetch function and states included in Providers's functions nested with \_app.tsx file. It's created to avoid props driling.

The results gets to [page].tsx - displaying results as a cards and <Pagination> component -
displaying paginations with posibility to change pages includes nested selector <PaginationSelector> - to change page size.

`components` - app contains with several divided children component
`styles` - css for global style and specified components
`lib/models` - all typical types characteristic for typeScript
`lib/crew` - method for get lists of astronauts, engineers and doctors from JSON and YAML files, sorted team members in alphabetical order
`lib/paginator` - pagined crew for specyfic PageRequest
`api/crew` - enpoint for get crew
`error` - if something goes wrong app shows alert on the page

## Paginations with dots

Pagination is adjusted to selected value in select.
When is selected two elements on page, pagination also is extended by dots.
Dots are a mechanism responsible for showing hidden range elements.

![Pagination](./pagintion.png)

## Tests

Application also contains unit tests for checking pagination method

## Run applications by Next:

After downloading file, first pass to the correct path and install `node.modules` environment, in terminal write:

```bash
npm install
```

To run the application, in terminals in the main path for both write:

```bash
npm run dev
```

Run tests

```bash
npm run test
```
