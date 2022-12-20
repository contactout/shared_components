# ContactOut's Shared Component Library

This repository was created to enable sharing of React components between our various projects
- `contactout_website` can import and use components directly
- `extension_app` will have to install the `@contactout/contactout-components` npm package

## Getting Started

Install this package:

 ```shell
 npm add @contactout/contactout-components@latest
 ```

Import the Button component:

 ```js
 import { Button } from "@contactout/contactout-components";
 ```

You can then render the `Button` component like any other React component in JSX.

-----

### To publish a new version of the package:
- First make the changes required
- Update the version (in `shared/contactout-components/package.json`)

 ```console
cd shared/contactout-components
npm run prepare
npm publish
 ```