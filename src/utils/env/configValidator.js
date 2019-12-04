const MANDATORY_ENV_VARS = ["APP_NAME", "APP_ENVIRONMENT", "LOG_LEVEL"];

const validateConfig = () => {
  MANDATORY_ENV_VARS.forEach(key => {
    if (!process.env[key]) {
      logger.fatal(`${key} env var is not set - exiting`);
      process.exit(1);
    }
  });
};

module.exports = {
  validateConfig
};
