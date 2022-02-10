import { isPoint } from "tiny-secp256k1-updated";
import { randomBytes } from "crypto";

export const testFn = () => {
  console.log("Hello from updated!");
  const randomValue = Buffer.from(randomBytes(32));
  const isRandomValueAPoint = isPoint(randomValue);
  return isRandomValueAPoint;
};

testFn();
