# ContactOut's Shared Component Library

This repository was created to enable sharing of React components between our various projects
- `contactout_website` can import and use components directly
- `extension_app` will have to install the `contactout-shared-components` npm package

## Getting Started

Install this package:

 ```shell
 npm install contactout-shared-components
 ```

Import the Button component:

 ```js
import { TextInput } from 'contactout-shared-components';
 ```

You can then render the `TextInput` component like any other React component in JSX.

-----


### To start storybook
 ```console
yarn install
yarn build-storybook
yarn storybook
 ```

### To publish a new version of the package:
- First make the changes required
- Update the version (in `shared-componends/package.json`)

 ```console
cd shared/contactout-components
npm run prepare
npm publish
 ```