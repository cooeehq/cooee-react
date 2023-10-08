import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.js", // This will be our entry file for the library
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve({ extensions }),
    babel({ exclude: "node_modules/**", extensions, babelHelpers: "bundled" }),
    commonjs(),
  ],
  external: ["react", "react-dom"], // These are peer dependencies and shouldn't be bundled
};
