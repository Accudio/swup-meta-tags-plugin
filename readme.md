# Swup Meta Tags Plugin

This is a plugin for [swup](https://swup.js.org/) - complete, flexible, extensible and easy to use page transition library for your web. On a page change, this plugin remove existing meta tags and some link tags and adds those from the new page.

## Instalation

This plugin can be installed with npm

```bash
npm install swup-meta-tags-plugin
```

and included with import

```javascript
import SwupMetaTagsPlugin from 'swup-meta-tags-plugin';
```

or included from the dist folder

```html
<script src="./dist/SwupMetaTagsPlugin.js"></script>
```

## Usage

To run this plugin, include an instance in the swup options.

```javascript
const swup = new Swup({
  plugins: [new SwupMetaTagsPlugin()]
});
```
