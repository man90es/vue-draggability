# vue-draggability
![install size](https://packagephobia.com/badge?p=vue-draggability)
[![license](https://img.shields.io/github/license/octoman90/vue-draggability)](https://github.com/octoman90/vue-draggability/blob/master/LICENSE)

A minimalist zero-dependency draggability library for Vue 3 composition API.

## Installation
With Yarn:
```bash
yarn add vue-draggability
```

With NPM:
```bash
npm install vue-draggability
```

## Usage
First, define your widget's template with refs like this:
```xml
<div id="teacup" ref="dragElement">
	<div id="teacup-handle" ref="dragHandle"></div>
</div>
```

Then, initialise the refs in your setup script and initialise draggability after the widget is mounted.
```javascript
import { ref, onMounted } from "vue"
import { useDraggability } from "vue-draggability"

const dragElement = ref(null)
const dragHandle = ref(null)

onMounted(() => {
	useDraggability(dragElement, dragHandle)
})
```
