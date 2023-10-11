module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@/app": "./src/app",
            "@/assets": "./src/assets",
            "@/components": "./src/components",
            "@/contexts": "./src/contexts",
            "@/styles": "./src/styles",
            "@/utils": "./src/utils",
            "@/hooks": "./src/hooks",
            "@/shared": "./src/shared",
            "@/services": "./src/services",
            "@/screens": "./src/screens",
            "@/routes": "./src/routes",
          },
        },
      ],
    ],
  };
};
