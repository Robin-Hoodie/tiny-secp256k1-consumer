import { isPoint } from "tiny-secp256k1";
import { randomBytes } from "crypto";

export const testFn = () => {
  console.log("Hello from original!");
  const randomValue = Buffer.from(randomBytes(32));
  const isRandomValueAPoint = isPoint(randomValue);
  return isRandomValueAPoint;
};

testFn();
