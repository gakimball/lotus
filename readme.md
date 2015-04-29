# Lotus

Lotus combines JavaScript templating with PostCSS, for fun and absurdity.

cssnext (via PostCSS) is a transpiler that converts CSS4 into CSS3.

```css
:root {
  --primaryColor: #638DF3;
}

a {
  color: var(--primaryColor);
}
```

However, what CSS4 lacks that preprocessors have is logic. So, why not layer in JavaScript?

```css
{{ for (var i = 1; i <= 12; i++) { }}
.column-{{= i}} {
  width: calc({{= i }} / 12 * 100%);
}
{{ } }}
```

**Why use this?** I don't know.

### Installation

```bash
git clone https://github.com/gakimball/lotus
npm i
npm start
```
