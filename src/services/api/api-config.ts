import { API_URL } from "react-native-dotenv"

export interface ApiConfig {
  url: string
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  // TODO: DO NOT FORGET TO CHANGE IT!
  url: API_URL || "https://pokeapi.co/api/v2/",
  timeout: 10000,
}
