"use client";
import TronWeb from "tronweb";
import React, { useCallback, useEffect, useMemo } from "react";
import raffleabi from "js/raffleabi.json";
import loanabi from "js/loanaib.json";
import { bytes } from "js/bytecode";
import { TronLinkAdapter } from "@tronweb3/tronwallet-adapters";
import {
  WalletProvider,
  useWallet,
} from "@tronweb3/tronwallet-adapter-react-hooks";

import {
  ContractInteract,
  Contract as MyContract,
} from "@tronwidgets/transaction";
import { ethers } from "ethers";
import { Contract } from "web3-eth-contract";

const Page = () => {
  const adapter = useMemo(() => new TronLinkAdapter(), []);
  const onConnect = useCallback(() => {}, []);
  const onDisconnect = useCallback(() => {}, []);
  const onStateChanged = useCallback(() => {}, []);

  const loanConfig = async () => {
    const params = {
      elem0: 0,
      elem1: {
        _active: true,
        _number_of_tokens_to_deposit: 50,
        _token: "TWXSAue48TijV4JTwA348FX3qE3G4B9yDL",
      },
      elem2: "TJpFQ9zMfVc2L2TD1YT8CRmqg9AnK72DDV",
      elem3: {
        token: "TWXSAue48TijV4JTwA348FX3qE3G4B9yDL",
        number_of_tokens_to_deposit: 25,
        active: false,
      },
      elem4: {
        duration_in_blocks: 5000,
        principle: 1000,
        interest: 100,
      },
      elem5: "TJpFQ9zMfVc2L2TD1YT8CRmqg9AnK72DDV",
    };
    const params2 = {
      elem0: 0, // Sample value for elem0 (uint256)
      elem1: {
        _active: true,
        _number_of_tokens_to_deposit: 50,
        _token: "TWXSAue48TijV4JTwA348FX3qE3G4B9yDL", // Sample address
      },
      elem2: adapter?.address!, // Sample address
      elem3: {
        token: "TWXSAue48TijV4JTwA348FX3qE3G4B9yDL", // Sample address
        number_of_tokens_to_deposit: 25,
        active: false,
      },
      elem4: {
        duration_in_blocks: 5000,
        principle: 1000,
        interest: 100, // Sample address
      },
      elem5: adapter?.address!, // Sample address
    };
    // const _contract = new Contract(abi);
    // _contract.deploy({
    //   arguments: [
    //   params,
    //   ],
    // });
    // const contract = new ethers.ContractFactory(
    //   abi,
    //   bytes?.object,
    //   window?.tron!,
    // );
    // const args = await contract.deploy(params);

    // ContractInteract.
    return await ContractInteract?.deploy(
      {
        abi: abi,
        bytecode: bytes.object,
        // funcABIV2: abi?.[0],
        // parametersV2: [
        //   [
        //     0,
        //     [true, 50, "TWXSAue48TijV4JTwA348FX3qE3G4B9yDL"],
        //     "TJpFQ9zMfVc2L2TD1YT8CRmqg9AnK72DDV",
        //     ["TWXSAue48TijV4JTwA348FX3qE3G4B9yDL", 25, false],
        //     [5000, 1000, 100],
        //     "TJpFQ9zMfVc2L2TD1YT8CRmqg9AnK72DDV",
        //   ],
        // ],
        feeLimit: 1_000_000,
        callValue: 2,
        userFeePercentage: 1,
        // gasLimit: 4000000000,
        // callValue: 0,
        // userFeePercentage: 1,
        // originEnergyLimit: 10_000_00,
        // send: {
        //   amount: 1,
        // },
        parameters: [params],
      },
      adapter?.address!,
    );
  };

  const constructorArgs = [
    0, // Replace with the desired value for elem0
    [
      true, // Replace with the desired value for _active
      1, // Replace with the desired value for _number_of_tokens_to_deposit
      "TWXSAue48TijV4JTwA348FX3qE3G4B9yDL", // Replace with the desired token address
    ],
    "TJpFQ9zMfVc2L2TD1YT8CRmqg9AnK72DDV", // Replace with the desired address
    [
      "TWXSAue48TijV4JTwA348FX3qE3G4B9yDL", // Replace with the desired token address
      2000, // Replace with the desired value for _number_of_tokens_to_deposit
      true, // Replace with the desired value for _active
    ],
    [
      5000, // Replace with the desired value for _principle
      10000, // Replace with the desired value for _duration_in_blocks
      "0x9876543210987654321098765432109876543210", // Replace with the desired address
    ],
    "TJpFQ9zMfVc2L2TD1YT8CRmqg9AnK72DDV", // Replace with the desired address
  ];
  useEffect(() => {
    adapter.on("connect", onConnect);
    adapter.on("disconnect", onDisconnect);
    adapter.on("stateChanged", onStateChanged);
    return () => {
      adapter.removeAllListeners();
    };
  });
  // ContractInteract
  const connect = useCallback(() => adapter.connect(), []);
  const disconnect = useCallback(() => adapter.connect(), []);
  async function deploy_contract() {
    // const data = await ContractInteract?.deploy(
    //   {
    //     abi: abi.abi,
    //     bytecode: bytes.object,
    //     feeLimit: 1_00_000_000,
    //     callValue: 0,
    //     userFeePercentage: 1,
    //     originEnergyLimit: 10_000_000,
    //     parameters: [
    //       {
    //         creator: adapter?.address!,
    //         // maxEntries: UInt,
    //         cost: 1000,
    //         isFeatured: true,
    //         // duration in seconds
    //         deadline: "240000",
    //         raffleToken: "1",
    //         amountOfRaffleToken: "1",
    //         comment: "Purchase",
    //         ADMIN: adapter?.address!,
    //         notify: (resp: any) => {
    //           console.log(resp);
    //         },
    //       },
    //     ],
    //   },
    //   adapter?.address!,
    // );
    const data = await loanConfig();
    console.log({ data });
  }
  return (
    <div>
      <button
        onClick={async () => {
          const tronConnect = await connect();

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
const abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "_active",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "_number_of_tokens_to_deposit",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "_token",
                type: "address",
              },
            ],
            internalType: "struct T17",
            name: "elem1",
            type: "tuple",
          },
          {
            internalType: "address payable",
            name: "elem2",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address payable",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "number_of_tokens_to_deposit",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "active",
                type: "bool",
              },
            ],
            internalType: "struct T2",
            name: "elem3",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "duration_in_blocks",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "principle",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "interest",
                type: "uint256",
              },
            ],
            internalType: "struct T3",
            name: "elem4",
            type: "tuple",
          },
          {
            internalType: "address payable",
            name: "elem5",
            type: "address",
          },
        ],
        internalType: "struct T18",
        name: "v6312",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "msg",
        type: "uint256",
      },
    ],
    name: "ReachError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "_active",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "_number_of_tokens_to_deposit",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "_token",
                type: "address",
              },
            ],
            internalType: "struct T17",
            name: "elem1",
            type: "tuple",
          },
          {
            internalType: "address payable",
            name: "elem2",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address payable",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "number_of_tokens_to_deposit",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "active",
                type: "bool",
              },
            ],
            internalType: "struct T2",
            name: "elem3",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "duration_in_blocks",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "principle",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "interest",
                type: "uint256",
              },
            ],
            internalType: "struct T3",
            name: "elem4",
            type: "tuple",
          },
          {
            internalType: "address payable",
            name: "elem5",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct T18",
        name: "_a",
        type: "tuple",
      },
    ],
    name: "_reach_e0",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct T5",
        name: "_a",
        type: "tuple",
      },
    ],
    name: "_reach_e1",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct T5",
        name: "_a",
        type: "tuple",
      },
    ],
    name: "_reach_e3",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "enum _enum_T9",
                name: "which",
                type: "uint8",
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "offerId",
                        type: "uint256",
                      },
                      {
                        internalType: "address payable",
                        name: "borrower",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                      },
                      {
                        internalType: "bool",
                        name: "rejected",
                        type: "bool",
                      },
                    ],
                    internalType: "struct T0",
                    name: "elem0",
                    type: "tuple",
                  },
                ],
                internalType: "struct T4",
                name: "_Admin_api_acceptOffer0_118",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                ],
                internalType: "struct T5",
                name: "_Admin_api_cancelLoanOfferandWithdrawCollateral0_118",
                type: "tuple",
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "duration_in_blocks",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "principle",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "interest",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct T3",
                    name: "elem0",
                    type: "tuple",
                  },
                ],
                internalType: "struct T6",
                name: "_Admin_api_updateLoanTerms_info0_118",
                type: "tuple",
              },
              {
                internalType: "bool",
                name: "_user_acceptLoan0_118",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                ],
                internalType: "struct T5",
                name: "_user_cancelOffer0_118",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "elem1",
                    type: "bool",
                  },
                ],
                internalType: "struct T8",
                name: "_user_makeOffer0_118",
                type: "tuple",
              },
            ],
            internalType: "struct T9",
            name: "elem1",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct T10",
        name: "_a",
        type: "tuple",
      },
    ],
    name: "_reach_e4",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v2503",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v2877",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v3241",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v3607",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v3986",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "offerId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "rejected",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct T0",
        name: "v0",
        type: "tuple",
      },
    ],
    name: "_reach_oe_v4362",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "offerId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "rejected",
            type: "bool",
          },
        ],
        internalType: "struct T0",
        name: "v6279",
        type: "tuple",
      },
    ],
    name: "Admin_api_acceptOffer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v6285",
        type: "uint256",
      },
    ],
    name: "Admin_api_cancelLoanOfferandWithdrawCollateral",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "duration_in_blocks",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principle",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interest",
            type: "uint256",
          },
        ],
        internalType: "struct T3",
        name: "v6291",
        type: "tuple",
      },
    ],
    name: "Admin_api_updateLoanTerms_info",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "_reachCreationTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_reachCurrentState",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_reachCurrentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "addr",
        type: "uint256",
      },
    ],
    name: "_reachm_0Ref",
    outputs: [
      {
        components: [
          {
            internalType: "enum _enum_T1",
            name: "which",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "_None",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "borrower",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "rejected",
                type: "bool",
              },
            ],
            internalType: "struct T0",
            name: "_Some",
            type: "tuple",
          },
        ],
        internalType: "struct T1",
        name: "res",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
        ],
        internalType: "struct T5",
        name: "v6315",
        type: "tuple",
      },
    ],
    name: "_reachp_1",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
        ],
        internalType: "struct T5",
        name: "v6318",
        type: "tuple",
      },
    ],
    name: "_reachp_3",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "enum _enum_T9",
                name: "which",
                type: "uint8",
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "offerId",
                        type: "uint256",
                      },
                      {
                        internalType: "address payable",
                        name: "borrower",
                        type: "address",
                      },
                      {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                      },
                      {
                        internalType: "bool",
                        name: "rejected",
                        type: "bool",
                      },
                    ],
                    internalType: "struct T0",
                    name: "elem0",
                    type: "tuple",
                  },
                ],
                internalType: "struct T4",
                name: "_Admin_api_acceptOffer0_118",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                ],
                internalType: "struct T5",
                name: "_Admin_api_cancelLoanOfferandWithdrawCollateral0_118",
                type: "tuple",
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint256",
                        name: "duration_in_blocks",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "principle",
                        type: "uint256",
                      },
                      {
                        internalType: "uint256",
                        name: "interest",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct T3",
                    name: "elem0",
                    type: "tuple",
                  },
                ],
                internalType: "struct T6",
                name: "_Admin_api_updateLoanTerms_info0_118",
                type: "tuple",
              },
              {
                internalType: "bool",
                name: "_user_acceptLoan0_118",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                ],
                internalType: "struct T5",
                name: "_user_cancelOffer0_118",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                  {
                    internalType: "bool",
                    name: "elem1",
                    type: "bool",
                  },
                ],
                internalType: "struct T8",
                name: "_user_makeOffer0_118",
                type: "tuple",
              },
            ],
            internalType: "struct T9",
            name: "elem1",
            type: "tuple",
          },
        ],
        internalType: "struct T10",
        name: "v6321",
        type: "tuple",
      },
    ],
    name: "_reachp_4",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "info_config",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "number_of_tokens_to_deposit",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct T2",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "info_loanTerms",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "duration_in_blocks",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principle",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interest",
            type: "uint256",
          },
        ],
        internalType: "struct T3",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v6273",
        type: "uint256",
      },
    ],
    name: "info_offer",
    outputs: [
      {
        components: [
          {
            internalType: "enum _enum_T1",
            name: "which",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "_None",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "borrower",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "rejected",
                type: "bool",
              },
            ],
            internalType: "struct T0",
            name: "_Some",
            type: "tuple",
          },
        ],
        internalType: "struct T1",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "user_acceptLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v6301",
        type: "uint256",
      },
    ],
    name: "user_cancelOffer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v6308",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "v6309",
        type: "bool",
      },
    ],
    name: "user_makeOffer",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "offerId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "borrower",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "rejected",
            type: "bool",
          },
        ],
        internalType: "struct T0",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
const abi2 = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "elem1",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "elem2",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "elem3",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "elem4",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "elem5",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "elem6",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "elem7",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "elem8",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "elem9",
            type: "address",
          },
        ],
        internalType: "struct T12",
        name: "v6180",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "msg",
        type: "uint256",
      },
    ],
    name: "ReachError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "elem1",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "elem2",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "elem3",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "elem4",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "elem5",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "elem6",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "elem7",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "elem8",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "elem9",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct T12",
        name: "_a",
        type: "tuple",
      },
    ],
    name: "_reach_e0",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct T8",
        name: "_a",
        type: "tuple",
      },
    ],
    name: "_reach_e1",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "enum _enum_T10",
                name: "which",
                type: "uint8",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                ],
                internalType: "struct T8",
                name: "_User_buyTicket0_266",
                type: "tuple",
              },
              {
                internalType: "bool",
                name: "_User_claim0_266",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "_User_delete0_266",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "address payable",
                    name: "elem0",
                    type: "address",
                  },
                ],
                internalType: "struct T9",
                name: "_User_determinWinnerAfterDeadline0_266",
                type: "tuple",
              },
              {
                internalType: "bool",
                name: "_User_optin0_266",
                type: "bool",
              },
            ],
            internalType: "struct T10",
            name: "elem1",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct T11",
        name: "_a",
        type: "tuple",
      },
    ],
    name: "_reach_e3",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v3515",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v3843",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v4140",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v4461",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "v0",
        type: "bool",
      },
    ],
    name: "_reach_oe_v4752",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "_address",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct T15",
        name: "v0",
        type: "tuple",
      },
    ],
    name: "bought",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "Info_adminClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_currentSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_currentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_hasDeadlineReached",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "v6137",
        type: "address",
      },
    ],
    name: "Info_myTicketsAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "v6141",
        type: "address",
      },
    ],
    name: "Info_opted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_props",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "_amountOfRaffleToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_cost",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "_creator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_deadline",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "_isFeatured",
            type: "bool",
          },
          {
            internalType: "address payable",
            name: "_raffleToken",
            type: "address",
          },
        ],
        internalType: "struct T1",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_randomNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_ticketsBought",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_token",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_userClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Info_winner",
    outputs: [
      {
        components: [
          {
            internalType: "enum _enum_T2",
            name: "which",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "_None",
            type: "bool",
          },
          {
            internalType: "address payable",
            name: "_Some",
            type: "address",
          },
        ],
        internalType: "struct T2",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "v6159",
        type: "uint256",
      },
    ],
    name: "User_buyTicket",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "User_claim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "User_delete",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "v6173",
        type: "address",
      },
    ],
    name: "User_determinWinnerAfterDeadline",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "User_optin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "_reachCreationTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_reachCurrentState",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_reachCurrentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "_reachm_0Ref",
    outputs: [
      {
        components: [
          {
            internalType: "enum _enum_T0",
            name: "which",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "_None",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "_Some",
            type: "bool",
          },
        ],
        internalType: "struct T0",
        name: "res",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
        ],
        internalType: "struct T8",
        name: "v6183",
        type: "tuple",
      },
    ],
    name: "_reachp_1",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "elem0",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "enum _enum_T10",
                name: "which",
                type: "uint8",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "elem0",
                    type: "uint256",
                  },
                ],
                internalType: "struct T8",
                name: "_User_buyTicket0_266",
                type: "tuple",
              },
              {
                internalType: "bool",
                name: "_User_claim0_266",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "_User_delete0_266",
                type: "bool",
              },
              {
                components: [
                  {
                    internalType: "address payable",
                    name: "elem0",
                    type: "address",
                  },
                ],
                internalType: "struct T9",
                name: "_User_determinWinnerAfterDeadline0_266",
                type: "tuple",
              },
              {
                internalType: "bool",
                name: "_User_optin0_266",
                type: "bool",
              },
            ],
            internalType: "struct T10",
            name: "elem1",
            type: "tuple",
          },
        ],
        internalType: "struct T11",
        name: "v6186",
        type: "tuple",
      },
    ],
    name: "_reachp_3",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
export default Page;
