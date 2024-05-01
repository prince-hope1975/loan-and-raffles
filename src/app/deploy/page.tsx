"use client";
import TronWeb from "tronweb";
import React, { useCallback, useEffect, useMemo } from "react";
import abi from "js/loanaib.json";
import { bytes } from "js/bytecode";
import { TronLinkAdapter } from "@tronweb3/tronwallet-adapters";
import {
  WalletProvider,
  useWallet,
} from "@tronweb3/tronwallet-adapter-react-hooks";
import { ContractInteract } from "@tronwidgets/transaction";
const Page = () => {
  const adapter = useMemo(() => new TronLinkAdapter(), []);
  const onConnect = useCallback(() => {}, []);
  const onDisconnect = useCallback(() => {}, []);
  const onStateChanged = useCallback(() => {}, []);
  useEffect(() => {
    adapter.on("connect", onConnect);
    adapter.on("disconnect", onDisconnect);
    adapter.on("stateChanged", onStateChanged);
    return () => {
      adapter.removeAllListeners();
    };
  });

  const connect = useCallback(() => adapter.connect(), []);
  const disconnect = useCallback(() => adapter.connect(), []);
  async function deploy_contract() {
    const data = await ContractInteract?.deploy(
      {
        abi: abi.abi,
        bytecode: bytes.object,
        feeLimit: 1_00_000_000,
        callValue: 0,
        userFeePercentage: 1,
        originEnergyLimit: 10_000_000,
        parameters: [
          {
            configuration: {
              token: 0,
              number_of_tokens_to_deposit: 10000,
              paymentAsset: 1,
              shouldPayInOnlyNetworkToken: false,
              prefersNetworkToken: false,
              active: true,
            },
            loanTerms_info: {
              duration_in_blocks: 1000,
              principle: 10000,
              interest: 10,
            },
            comment: "Purchase",
            ADMIN: adapter?.address!,
          },
        ],
      },
      adapter?.address!,
    );
    console.log(data);
  }
  return (
    <div>
      <button
        onClick={async () => {
          const tronConnect = await connect();

          console.log({ tronConnect, connected: adapter?.connected });
          //   const { address } = await wallet.connect();
          //   console.log(address);
          deploy_contract();
        }}
      >
        Deploy
      </button>
    </div>
  );
};

export default Page;
