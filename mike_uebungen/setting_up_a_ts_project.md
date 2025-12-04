# Setting Up a New TypeScript Subproject

Follow these steps to set up a new TypeScript subproject under the root project:

---

## **1. Create the Subproject Folder**
- Create a new folder for your subproject under `mike_uebungen`.

---

## **2. Add TypeScript Configuration Files**
- Copy the `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json` files from an existing subproject.
- Adjust paths in `tsconfig.node.json` if necessary (e.g., `tsBuildInfoFile`).

---

## **3. Create Declaration Files (if needed)**
- If your subproject uses shared JavaScript files (e.g., `vite.shared.js`), create a `.d.ts` file:
  1. Create `vite.shared.d.ts` in the `src` folder.
  2. Add:
     ```typescript
     declare module '../../vite.shared.js';
     ```

---

## **4. Restart TypeScript Server**
- Open the Command Palette (`Ctrl+Shift+P`).
- Select `TypeScript: Restart TS Server`.

---

That’s it! Your new TypeScript subproject should now be ready to use.