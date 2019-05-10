module.exports = {
  parser: "typescript-eslint-parser",
  parserOptions: {
    project: "./tsconfig.json",
    extraFileExtensions: [".jsx", ".ts", ".js", ".tsx"],
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  plugins: ["typescript", "react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": 0
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".tsx", ".ts"]
      }
    }
  }
};
