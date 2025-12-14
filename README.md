**<h2>React Translator</h2>**

###

✅ This project was developed following tutorials from YouTube and the official React documentation.

###

**<h3>Links</h3>**

###

Tailwindcss: [https://tailwindcss.com](https://tailwindcss.com/);<br>
React JS: [https://react.dev](https://react.dev/);<br>
API: [https://mymemory.translated.api](https://mymemory.translated.net/doc/spec.php).

###

**<h3>Reference | CR</h3>**

###

YouTube: [Canal DevClub](https://youtu.be/PIDu3fePvM8?si=Ih6ovggAxZnLytP3).

###

**<h3>Official Documentation</h3>**

###

React JS: [https://react.dev](https://react.dev);<br>
Vite JS: [https://vitejs.dev](https://vitejs.dev).

---

**<h3>Commands</h3>**

###

<h6>Tailwindcss</h6>

###

```powershell
npm install -D tailwindcss postcss autoprefixer
```

###
```powershell
pnpm add -D @tailwindcss/postcss
```

###

<h6>Node Modules</h6>

###
```powershell
npm i || npm install
```

###
```powershell
npm install -g pnpm
```

###
```powershell
pnpm install
```

###
```powershell
pnpm dev
```

---

**<h6>Tailwind code</h6>**

###
```t
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

###

**<h6>Postcss code</h6>**

###
```t
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

###

**<h6>pnpm code</h6>**

###
```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      react:
        specifier: ^19.2.0
        version: 19.2.3
      react-dom:
        specifier: ^19.2.0
        version: 19.2.3(react@19.2.3)
    devDependencies:
      '@eslint/js':
        specifier: ^9.39.1
        version: 9.39.2
      '@types/react':
        specifier: ^19.2.5
        version: 19.2.7

...Continue +1700
```
