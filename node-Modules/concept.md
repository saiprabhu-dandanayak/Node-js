# Modules in Node.js with TypeScript

Modules in Node.js are independent blocks of reusable code that can be exported and imported to organize and modularize an application. Node.js uses the **CommonJS module system** by default but also supports **ECMAScript modules (ESM)**. TypeScript works seamlessly with both module systems.

---

## Types of Modules

1. **Core Modules**  
   Node.js provides built-in modules like `fs`, `http`, `path`, `os`, etc.
   
2. **Local Modules**  
   Modules you create within your project.
   
3. **Third-Party Modules**  
   Installed via npm or yarn, such as `express`, `lodash`, etc.

---

## Core Concepts

### 1. Exporting and Importing Modules

#### Using CommonJS:
```typescript
// mathUtils.ts (Module)
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

// Exporting
module.exports = { add, subtract };

// index.ts (Importing)
const mathUtils = require('./mathUtils');
console.log(mathUtils.add(5, 3)); // Output: 8
console.log(mathUtils.subtract(5, 3)); // Output: 2
```
