import React from "react";
import { TronWeb } from "../../../js/tronweb";

const fullNode = "https://testhttpapi.tronex.io";
const solidityNode = "https://testhttpapi.tronex.io";
const eventServer = "https://testhttpapi.tronex.io";
const sideOptions = {
  fullNode: "https://suntest.tronex.io",
  solidityNode: "https://suntest.tronex.io",
  eventServer: "https://suntest.tronex.io",
  mainGatewayAddress: "TFLtPoEtVJBMcj6kZPrQrwEdM3W3shxsBU",
  sideGatewayAddress: "TRDepx5KoQ8oNbFVZ5sogwUxtdYmATDRgX",
  sideChainId: "413AF23F37DA0D48234FDD43D89931E98E1144481B",
};
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, {
  fullNode: sideOptions.fullNode,
  solidityNode: sideOptions.solidityNode,
  eventServer: sideOptions.eventServer,
  mainGatewayAddress: sideOptions.mainGatewayAddress,
  sideGatewayAddress: sideOptions.sideGatewayAddress,
  sideChainId: sideOptions.sideChainId,
});
const Wallet = () => {
  const fullNode = "https://api.shasta.trongrid.io";
  const solidityNode = "https://api.shasta.trongrid.io";
  const eventServer = "https://api.shasta.trongrid.io";
  const privateKey = "xxx";
  const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
  return <div>Wallet</div>;
};

export default Wallet;
