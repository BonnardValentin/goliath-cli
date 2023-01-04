const tsConfigTemplate = `
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2020",
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "./",
    "baseUrl": "./",
    "incremental": false,
    "resolveJsonModule": true,
  }
}
`;

const tsConfigBuildTemplate = `
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "diagnostics": false,
    "checkJs": true,
    "allowJs": true,
    "listEmittedFiles": false,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "test", "**/*spec.ts", "src/assets/*.js", "src/assets/*.html"]
}
`;

module.exports = {
  tsConfigTemplate,
  tsConfigBuildTemplate,
};
