Skip Hire Booking Page Redesign

This README documents the actual changes, component structure, UX/UI improvements, and developer patterns introduced in the redesigned React skip-hire booking page.

🗂 Project Structure

src/
├── components/
│ ├── CardGrid.jsx # Parent component: handles filter state and renders skips
│ ├── OneCard.jsx # Individual skip card with image, price ribbon, details, and select button
│ ├── OneDetail.jsx # Detail row for skip attributes (title + text)
│ ├── SkipFilter.jsx # Toggleable filter panel: size dropdown, price range, checkboxes
│ ├── StepsBar.jsx # Top wizard stepper with icons and responsive mobile labels
│ └── SvgRenderer.jsx # Wrapper for SVG icons to apply consistent sizing
├── data/
│ └── skipsData.json # Static skip options imported as initial data
├── App.js # Main entry: renders StepsBar and CardGrid
├── index.js # ReactDOM bootstrap
└── styles/
└── components/ # CSS Modules for each component (scoped styles)

⚙️ Component Responsibilities

1. StepsBar (StepsBar.jsx)

Renders a horizontal list of steps (Postcode, Waste Type, Select Skip, Permit Check, Choose Date, Payment).

Uses imported SVG icons as React components for each step.

Tracks the current step locally (initially set to “Select Skip”).

Applies CSS Modules for active, completed, and mobile-specific styling (e.g., styles.mobileStepNumber).

2. CardGrid (CardGrid.jsx)

Imports skipsData.json array of skip objects.

Calculates defaultMin and defaultMax prices for range bounds.

Holds two pieces of state:

filters (object): { size, minPrice, maxPrice, heavy, onRoad }.

filteredSkips (array): recalculated via useEffect whenever filters change.

Renders <SkipFilter /> with all filter props lifted down.

Displays the resulting filteredSkips as a grid of <OneCard />.

3. SkipFilter (SkipFilter.jsx)

Toggleable panel (displayFilters state) that hides/shows the filter controls.

Size dropdown: populated from skipSizes prop (unique sizes from data).

Price inputs: two <input type="number" /> fields bounded by priceBounds.min/max.

Checkboxes: “Allows heavy waste” and “Allowed on road”, styled via CSS Modules when checked.

Calls onFilterChange(field, value) to update the parent’s filters state.

4. OneCard (OneCard.jsx)

Displays each skip with:

Price ribbon overlay showing £{price_before_vat}.

Responsive image: chooses between smallSkip.jpg and largeSkip.jpg based on size > 16.

Title: “{size} Yard Skip”.

Details list: uses <OneDetail /> for each attribute (hire period, transport cost, per-tonne cost, allowed on road, heavy waste).

Select button: <button> to choose the skip (no handler attached in this iteration).

5. OneDetail (OneDetail.jsx)

Simple two-line layout: a title and corresponding text.

Purely presentational, using CSS Modules for spacing and typography.

6. SvgRenderer (SvgRenderer.jsx)

Provides a consistent container (div.svgWrapper) for SVG icons.

Accepts a width prop to flexibly size icons (e.g. width="20%").

🎨 UI / UX Enhancements

Scoped CSS Modules

Each component imports its own .module.css file, preventing style collisions and making refactors safer.

Toggleable Filters Panel

Keeps the UI clean by hiding filters behind a button until needed.

Improves mobile usability by collapsing secondary controls.

Responsive Grid Layout

Skip cards flow in a multi-column grid (defined in CardGrid.module.css) and wrap gracefully on smaller screens.

Clear Visual Hierarchy

Price ribbons, card shadows, and hover states guide the user’s attention to key actions.

Buttons and interactive areas use consistent spacing and typography from CSS Modules.

Accessible Alt Text & Labels

Images include alt="{size} yard skip" for screen readers.

Form controls are labeled, and checkboxes visually indicate the checked state.

SVG Icon Handling

Icons are imported as React components and wrapped for uniform sizing.

Enables easy swap of icon colors via CSS on the parent .svgWrapper class.

🚀 Next Steps / Enhancements

Event Handlers on the “Select this skip” buttons to integrate with booking flow.

Persisting Filter State in URL parameters or local storage for shareable links.

Dark Mode support by extending CSS Modules with :global(.dark) selectors.

Unit / Snapshot Tests for each component using Jest + React Testing Library.

Lazy Loading Images with the native loading="lazy" attribute or an IntersectionObserver wrapper.

🛠 Running Locally

Install dependencies:

npm install

Start development server:

npm start

Visit http://localhost:3000 to explore the redesigned skip hire page.
