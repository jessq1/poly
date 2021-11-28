import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../config/.env") });

interface ENV {
    FACEBOOK_CALLBACK: string | undefined;
    FACEBOOK_APP_ID: string | undefined;
    FACEBOOK_APP_SECRET: string | undefined;
  }
  
interface Config {
    FACEBOOK_CALLBACK: string;
    FACEBOOK_APP_ID: string;
    FACEBOOK_APP_SECRET: string;

  }

const getConfig = (): ENV => {
    return {
      FACEBOOK_CALLBACK: process.env.FACEBOOK_CALLBACK,
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
      FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
    };
  };

  const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
      if (value === undefined) {
        throw new Error(`Missing key ${key} in config.env`);
      }
    }
    return config as Config;
  };
  
  const config = getConfig();
  
  const sanitizedConfig = getSanitzedConfig(config);
  
  export default sanitizedConfig;