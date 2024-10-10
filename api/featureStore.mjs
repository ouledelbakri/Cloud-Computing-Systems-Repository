// api/featureStore.mjs
import { getKey } from "./redisClient.mjs";

export async function getFeatureState(featureCode) {
  const state = await getKey(featureCode);
  return state === "enabled";
}