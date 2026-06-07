# LMS(Learning Based Management) Frontend

### Setup instruction

1. Clone the project

```
    https://github.com/ravikumar892600/Learning-Management-System.git
```

2. Move into the directory

```
    cd LMS-Frontend
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```



<!-- ### Tailwind CSS Setup

1. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/cli
```

2. Import Tailwind in CSS

Add the following line to `src/index.css`:

```css
@import "tailwindcss";
```

3. Start the development server

```bash
npm run dev
``` -->


### Tailwind CSS Setup

1. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

2. Configure Vite

Update `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

3. Import Tailwind CSS

Add the following line to `src/index.css`:

```css
@import "tailwindcss";
```

4. Run the Development Server

```bash
npm run dev
```

### Adding plugins and dependencies

```
 npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp 
```


### Configure auto import sort esline(optional)

1. Install simple import sore
```
    npm i eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`
```
    'simple-import-sort/imports' : 'error'
```

3. add simple-import sort plugin in `.eslint.cjs`
```
    plugins: [... , 'simple-import-sort']
```

4. To enable auto import sort on file save in vscode
    -Open `setting.json`
    -add the folling config
```
    "edditor.codeActionsOnSave":{
        "source.fixAll.eslint": true
    }
```
