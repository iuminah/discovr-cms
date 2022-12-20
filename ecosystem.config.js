module.exports = {
  apps: [
    {
      name: "discovr-cms",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production"
     },
    },
  ],
};
