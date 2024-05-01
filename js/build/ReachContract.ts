import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from 'ethereum-abi-types-generator';

export interface CallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface SendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface EstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: EstimateGasOptions): Promise<number>;
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: CallOptions): Promise<TCallReturn>;
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  ReachContract,
  ReachContractMethodNames,
  ReachContractEventsContext,
  ReachContractEvents
>;
export type ReachContractEvents =
  | '_reach_e0'
  | '_reach_e1'
  | '_reach_e3'
  | '_reach_e4'
  | '_reach_oe_v2606'
  | '_reach_oe_v2962'
  | '_reach_oe_v3319'
  | '_reach_oe_v3671'
  | '_reach_oe_v4028'
  | '_reach_oe_v4377'
  | '_reach_oe_v4727';
export interface ReachContractEventsContext {
  _reach_e0(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_e1(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_e3(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_e4(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_oe_v2606(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_oe_v2962(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_oe_v3319(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_oe_v3671(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_oe_v4028(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_oe_v4377(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  _reach_oe_v4727(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type ReachContractMethodNames =
  | 'new'
  | 'Admin_api_acceptOffer'
  | 'Admin_api_cancelLoanOfferandWithdrawCollateral'
  | 'Admin_api_freeze'
  | 'Admin_api_updateConfig'
  | 'Admin_api_updateLoanTerms_info'
  | '_reachCreationTime'
  | '_reachCurrentState'
  | '_reachCurrentTime'
  | '_reachm_0Ref'
  | '_reachp_1'
  | '_reachp_3'
  | '_reachp_4'
  | 'info_config'
  | 'info_loanTerms'
  | 'info_offer'
  | 'user_acceptLoan'
  | 'user_makeOffer';
export interface Elem1Request {
  _number_of_tokens_to_deposit: string;
  _paymentAsset: string;
  _preferred: boolean;
  _shouldPayInOnlyNetworkToken: boolean;
  _token: string;
}
export interface Elem3Request {
  token: string;
  number_of_tokens_to_deposit: string;
  paymentAsset: string;
  shouldPayInOnlyNetworkToken: boolean;
  preferred: boolean;
}
export interface Elem4Request {
  duration_in_blocks: string;
  principle: string;
  interest: string;
}
export interface V6976Request {
  elem0: string;
  elem1: Elem1Request;
  elem2: string;
  elem3: Elem3Request;
  elem4: Elem4Request;
  elem5: string;
}
export interface Elem1EventEmittedResponse {
  _number_of_tokens_to_deposit: string;
  _paymentAsset: string;
  _preferred: boolean;
  _shouldPayInOnlyNetworkToken: boolean;
  _token: string;
}
export interface Elem3EventEmittedResponse {
  token: string;
  number_of_tokens_to_deposit: string;
  paymentAsset: string;
  shouldPayInOnlyNetworkToken: boolean;
  preferred: boolean;
}
export interface Elem4EventEmittedResponse {
  duration_in_blocks: string;
  principle: string;
  interest: string;
}
export interface _aEventEmittedResponse {
  elem0: string;
  elem1: Elem1Request;
  elem2: string;
  elem3: Elem3Request;
  elem4: Elem4Request;
  elem5: string;
}
export interface _reach_e0EventEmittedResponse {
  _who: string;
  _a: _aEventEmittedResponse;
}
export interface _reach_e1EventEmittedResponse {
  _who: string;
  _a: _aEventEmittedResponse;
}
export interface _reach_e3EventEmittedResponse {
  _who: string;
  _a: _aEventEmittedResponse;
}
export interface Elem0Request {
  _amount: string;
  _borrower: string;
  _offerId: string;
  _rejected: boolean;
}
export interface Elem1EventEmittedResponseRequest {
  elem0: Elem0Request;
}
export interface _reach_e4EventEmittedResponse {
  _who: string;
  _a: _aEventEmittedResponse;
}
export interface _reach_oe_v2606EventEmittedResponse {
  v0: boolean;
}
export interface _reach_oe_v2962EventEmittedResponse {
  v0: boolean;
}
export interface _reach_oe_v3319EventEmittedResponse {
  v0: boolean;
}
export interface _reach_oe_v3671EventEmittedResponse {
  v0: boolean;
}
export interface _reach_oe_v4028EventEmittedResponse {
  v0: boolean;
}
export interface _reach_oe_v4377EventEmittedResponse {
  v0: boolean;
}
export interface V0EventEmittedResponse {
  _amount: string;
  _borrower: string;
  _offerId: string;
  _rejected: boolean;
}
export interface _reach_oe_v4727EventEmittedResponse {
  v0: V0EventEmittedResponse;
}
export interface V6939Request {
  _amount: string;
  _borrower: string;
  _offerId: string;
  _rejected: boolean;
}
export interface V6957Request {
  token: string;
  number_of_tokens_to_deposit: string;
  paymentAsset: string;
  shouldPayInOnlyNetworkToken: boolean;
  preferred: boolean;
}
export interface V6963Request {
  duration_in_blocks: string;
  principle: string;
  interest: string;
}
export interface _reachCurrentStateResponse {
  result0: string;
  result1: string;
}
export interface _SomeResponse {
  _amount: string;
  _borrower: string;
  _offerId: string;
  _rejected: boolean;
}
export interface ResResponse {
  which: string;
  _None: boolean;
  _Some: _SomeResponse;
}
export interface V6979Request {
  elem0: string;
}
export interface V6982Request {
  elem0: string;
}
export interface Elem1RequestRequest {
  elem0: Elem0Request;
}
export interface V6985Request {
  elem0: string;
  elem1: Elem1Request;
}
export interface T2Response {
  token: string;
  number_of_tokens_to_deposit: string;
  paymentAsset: string;
  shouldPayInOnlyNetworkToken: boolean;
  preferred: boolean;
}
export interface T3Response {
  duration_in_blocks: string;
  principle: string;
  interest: string;
}
export interface T1Response {
  which: string;
  _None: boolean;
  _Some: _SomeResponse;
}
export interface V6973Request {
  _amount: string;
  _shouldPayWithNetworkToken: boolean;
}
export interface T0Response {
  _amount: string;
  _borrower: string;
  _offerId: string;
  _rejected: boolean;
}
export interface ReachContract {
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: constructor
   * @param v6976 Type: tuple, Indexed: false
   */
  'new'(v6976: V6976Request): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6939 Type: tuple, Indexed: false
   */
  Admin_api_acceptOffer(v6939: V6939Request): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6945 Type: uint256, Indexed: false
   */
  Admin_api_cancelLoanOfferandWithdrawCollateral(
    v6945: string
  ): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6951 Type: bool, Indexed: false
   */
  Admin_api_freeze(v6951: boolean): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6957 Type: tuple, Indexed: false
   */
  Admin_api_updateConfig(v6957: V6957Request): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6963 Type: tuple, Indexed: false
   */
  Admin_api_updateLoanTerms_info(
    v6963: V6963Request
  ): MethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _reachCreationTime(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _reachCurrentState(): MethodConstantReturnContext<_reachCurrentStateResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _reachCurrentTime(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param addr Type: uint256, Indexed: false
   */
  _reachm_0Ref(addr: string): MethodConstantReturnContext<ResResponse>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6979 Type: tuple, Indexed: false
   */
  _reachp_1(v6979: V6979Request): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6982 Type: tuple, Indexed: false
   */
  _reachp_3(v6982: V6982Request): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6985 Type: tuple, Indexed: false
   */
  _reachp_4(v6985: V6985Request): MethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  info_config(): MethodConstantReturnContext<T2Response>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  info_loanTerms(): MethodConstantReturnContext<T3Response>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param v6933 Type: uint256, Indexed: false
   */
  info_offer(v6933: string): MethodConstantReturnContext<T1Response>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   */
  user_acceptLoan(): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param v6973 Type: tuple, Indexed: false
   */
  user_makeOffer(v6973: V6973Request): MethodPayableReturnContext;
}
