# How to navigate ?

We have an integrated <b> global </b> navigation service which can work anywhere in the app.

```js
import { NavigationService } from "<path>/services"

// Simply navigate to another screen
Navigation.navigate('<screen-name>');

// Navigate and send data
Navigation.navigate('<screen-name>', { data: data });

// ! Push navigation feature is in-coming !!!

```