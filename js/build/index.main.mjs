// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    active: ctc1,
    number_of_tokens_to_deposit: ctc2,
    paymentAsset: ctc3,
    prefersNetworkToken: ctc1,
    shouldPayInOnlyNetworkToken: ctc1,
    token: ctc3
    });
  const ctc5 = stdlib.T_Object({
    duration_in_blocks: ctc2,
    interest: ctc3,
    principle: ctc2
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Data({
    None: ctc9,
    Some: ctc0
    });
  const ctc11 = stdlib.T_Object({
    acceptedAddress: ctc10,
    activeOffers: ctc2,
    config: ctc4,
    continue: ctc1,
    freeze: ctc1,
    loanTerms: ctc5,
    loanTermsAccepted: ctc1,
    networkTokenBalance: ctc2,
    nonNetworkTokenBalance: ctc2,
    offers: ctc2
    });
  const ctc12 = stdlib.T_Object({
    amount: ctc2,
    borrower: ctc0,
    offerId: ctc2,
    payWithNetworkToken: ctc1,
    rejected: ctc1
    });
  const ctc13 = stdlib.T_Data({
    None: ctc9,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  
  const info_config = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2933, v2934, v2935, v2936, v2937, v2938, v2939, v2948, v2949] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2933, v2935, v2939, v2981, v2982, v6481, v6488] = svs;
      return (await ((async () => {
        
        
        return v6481;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = svs;
      return (await ((async () => {
        
        
        return v3028;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const info_loanTerms = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2933, v2934, v2935, v2936, v2937, v2938, v2939, v2948, v2949] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2933, v2935, v2939, v2981, v2982, v6481, v6488] = svs;
      return (await ((async () => {
        
        
        return v6488;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = svs;
      return (await ((async () => {
        
        
        return v3035;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const info_offer = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2933, v2934, v2935, v2936, v2937, v2938, v2939, v2948, v2949] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2933, v2935, v2939, v2981, v2982, v6481, v6488] = svs;
      return (await ((async (_v6492 ) => {
          const v6492 = stdlib.protect(ctc2, _v6492, null);
        
        const v6493 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v6492, ctc12), null);
        
        return v6493;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = svs;
      return (await ((async (_v3039 ) => {
          const v3039 = stdlib.protect(ctc2, _v3039, null);
        
        const v3040 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc2, v3039, ctc12), null);
        
        return v3040;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      info: {
        config: {
          decode: info_config,
          dom: [],
          rng: ctc4
          },
        loanTerms: {
          decode: info_loanTerms,
          dom: [],
          rng: ctc5
          },
        offer: {
          decode: info_offer,
          dom: [ctc2],
          rng: ctc13
          }
        }
      },
    views: {
      1: [ctc0, ctc4, ctc3, ctc4, ctc5, ctc0, ctc3, ctc7, ctc8],
      3: [ctc0, ctc3, ctc3, ctc7, ctc2, ctc4, ctc5],
      5: [ctc0, ctc4, ctc3, ctc0, ctc3, ctc8, ctc0, ctc2, ctc11, ctc7, ctc2, ctc4, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Tuple([ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Object({
    active: ctc3,
    number_of_tokens_to_deposit: ctc1,
    paymentAsset: ctc7,
    prefersNetworkToken: ctc3,
    shouldPayInOnlyNetworkToken: ctc3,
    token: ctc7
    });
  const ctc9 = stdlib.T_Object({
    duration_in_blocks: ctc1,
    interest: ctc7,
    principle: ctc1
    });
  const ctc10 = stdlib.T_Object({
    ADMIN: ctc2,
    comment: ctc6,
    configuration: ctc8,
    loanTerms_info: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc4]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc9]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Object({
    amount: ctc1,
    shouldPayWithNetworkToken: ctc3
    });
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    Admin_api_acceptOffer0_170: ctc11,
    Admin_api_cancelLoanOfferandWithdrawCollateral0_170: ctc12,
    Admin_api_updateLoanTerms_info0_170: ctc13,
    user_acceptLoan0_170: ctc14,
    user_cancelOffer0_170: ctc12,
    user_makeOffer0_170: ctc16
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc19 = stdlib.T_Array(ctc18, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc20 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  
  const v2904 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2905 = [v2904, v2904];
  const v2906 = [stdlib.Token_zero, stdlib.Token_zero];
  const v2909 = stdlib.protect(ctc10, interact.intiConfig, 'for Admin\'s interact field intiConfig');
  const v2910 = v2909.ADMIN;
  const v2912 = v2909.configuration;
  const v2913 = v2909.loanTerms_info;
  const v2916 = v2912.paymentAsset;
  const v2919 = v2912.token;
  
  const v2930 = stdlib.tokenEq(v2919, v2916);
  const v2931 = v2930 ? false : true;
  stdlib.assert(v2931, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:76:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:13:function exp)'],
    msg: 'Payment token cannot be the same as deposit token',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2912, v2919, v2912, v2913, v2910, v2916],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8, ctc7, ctc8, ctc9, ctc2, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:83:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2934, v2935, v2936, v2937, v2938, v2939], secs: v2941, time: v2940, didSend: v71, from: v2933 } = txn1;
      
      const v2942 = v2905[stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0')];
      const v2943 = stdlib.Array_set(v2942, '0', stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'));
      const v2944 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'), v2943);
      const v2945 = stdlib.Array_set(v2906, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'), v2935);
      const v2946 = v2944[stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '1')];
      const v2947 = stdlib.Array_set(v2946, '0', stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'));
      const v2948 = stdlib.Array_set(v2944, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '1'), v2947);
      const v2949 = stdlib.Array_set(v2945, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '1'), v2939);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2935
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2939
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc7, ctc8, ctc9, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2934, v2935, v2936, v2937, v2938, v2939], secs: v2941, time: v2940, didSend: v71, from: v2933 } = txn1;
  const v2942 = v2905[stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0')];
  const v2943 = stdlib.Array_set(v2942, '0', stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'));
  const v2944 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'), v2943);
  const v2945 = stdlib.Array_set(v2906, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'), v2935);
  const v2946 = v2944[stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '1')];
  const v2947 = stdlib.Array_set(v2946, '0', stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '0'));
  const v2948 = stdlib.Array_set(v2944, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '1'), v2947);
  const v2949 = stdlib.Array_set(v2945, stdlib.checkedBigNumberify('./index.rsh:83:5:dot', stdlib.UInt_max, '1'), v2939);
  const v2950 = stdlib.tokenEq(v2939, v2935);
  const v2951 = v2950 ? false : true;
  stdlib.assert(v2951, {
    at: './index.rsh:83:5:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  const v2952 = v2934.number_of_tokens_to_deposit;
  
  const txn2 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2936, v2937, v2938, v2939, v2948, v2949],
    evt_cnt: 0,
    funcNum: 1,
    lct: v2940,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:5:dot', stdlib.UInt_max, '0'), [[v2952, v2935]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v2955, time: v2954, didSend: v80, from: v2953 } = txn2;
      
      const v2956 = v2934.number_of_tokens_to_deposit;
      ;
      const v2957 = v2948[stdlib.checkedBigNumberify('./index.rsh:93:5:dot', stdlib.UInt_max, '0')];
      const v2958 = v2957[stdlib.checkedBigNumberify('./index.rsh:93:5:dot', stdlib.UInt_max, '0')];
      const v2959 = stdlib.add(v2958, v2956);
      const v2961 = stdlib.Array_set(v2957, '0', v2959);
      const v2962 = stdlib.Array_set(v2948, stdlib.checkedBigNumberify('./index.rsh:93:5:dot', stdlib.UInt_max, '0'), v2961);
      sim_r.txns.push({
        amt: v2956,
        kind: 'to',
        tok: v2935
        });
      const v2970 = v2962[stdlib.checkedBigNumberify('./index.rsh:113:36:application', stdlib.UInt_max, '1')];
      const v2971 = v2970[stdlib.checkedBigNumberify('./index.rsh:113:36:application', stdlib.UInt_max, '0')];
      const v2972 = ['None', null];
      const v2973 = {
        acceptedAddress: v2972,
        activeOffers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        config: v2936,
        continue: true,
        freeze: false,
        loanTerms: v2937,
        loanTermsAccepted: false,
        networkTokenBalance: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        nonNetworkTokenBalance: v2971,
        offers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2974 = v2973;
      const v2975 = v2954;
      const v2981 = v2962;
      const v2982 = stdlib.checkedBigNumberify('./index.rsh:66:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v3023 = v2974.continue;
        const v3024 = v2974.activeOffers;
        const v3025 = stdlib.eq(v3024, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
        const v3026 = v3025 ? false : true;
        const v3027 = v3023 ? true : v3026;
        
        return v3027;})()) {
        const v3028 = v2974.config;
        const v3035 = v2974.loanTerms;
        sim_r.isHalt = false;
        }
      else {
        const v6481 = v2974.config;
        const v6488 = v2974.loanTerms;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc8, ctc7, ctc8, ctc9, ctc2, ctc7, ctc19, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2955, time: v2954, didSend: v80, from: v2953 } = txn2;
  const v2956 = v2934.number_of_tokens_to_deposit;
  ;
  const v2957 = v2948[stdlib.checkedBigNumberify('./index.rsh:93:5:dot', stdlib.UInt_max, '0')];
  const v2958 = v2957[stdlib.checkedBigNumberify('./index.rsh:93:5:dot', stdlib.UInt_max, '0')];
  const v2959 = stdlib.add(v2958, v2956);
  const v2961 = stdlib.Array_set(v2957, '0', v2959);
  const v2962 = stdlib.Array_set(v2948, stdlib.checkedBigNumberify('./index.rsh:93:5:dot', stdlib.UInt_max, '0'), v2961);
  ;
  const v2963 = stdlib.addressEq(v2933, v2953);
  stdlib.assert(v2963, {
    at: './index.rsh:93:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v2970 = v2962[stdlib.checkedBigNumberify('./index.rsh:113:36:application', stdlib.UInt_max, '1')];
  const v2971 = v2970[stdlib.checkedBigNumberify('./index.rsh:113:36:application', stdlib.UInt_max, '0')];
  const v2972 = ['None', null];
  const v2973 = {
    acceptedAddress: v2972,
    activeOffers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    config: v2936,
    continue: true,
    freeze: false,
    loanTerms: v2937,
    loanTermsAccepted: false,
    networkTokenBalance: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    nonNetworkTokenBalance: v2971,
    offers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2974 = v2973;
  let v2975 = v2954;
  let v2981 = v2962;
  let v2982 = stdlib.checkedBigNumberify('./index.rsh:66:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v3023 = v2974.continue;
    const v3024 = v2974.activeOffers;
    const v3025 = stdlib.eq(v3024, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
    const v3026 = v3025 ? false : true;
    const v3027 = v3023 ? true : v3026;
    
    return v3027;})()) {
    const v3028 = v2974.config;
    const v3035 = v2974.loanTerms;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc17],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn4;
    switch (v3346[0]) {
      case 'Admin_api_acceptOffer0_170': {
        const v3349 = v3346[1];
        undefined /* setApiDetails */;
        const v3354 = v3349[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
        const v3355 = stdlib.addressEq(v3345, v2933);
        const v3356 = stdlib.addressEq(v2938, v3345);
        const v3357 = v3355 ? true : v3356;
        stdlib.assert(v3357, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'The current user trying to access this interface is not Admin',
          who: 'Admin'
          });
        const v3359 = v2974.loanTermsAccepted;
        const v3360 = v3359 ? false : true;
        stdlib.assert(v3360, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'An offer has already been accepted',
          who: 'Admin'
          });
        const v3363 = v2974.freeze;
        stdlib.assert(v3363, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Contract is frozen',
          who: 'Admin'
          });
        const v3366 = v3354.offerId;
        const v3367 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v3366, ctc4), null);
        const v3368 = {
          None: 0,
          Some: 1
          }[v3367[0]];
        const v3369 = stdlib.eq(v3368, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3369, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Offer id doesn\'t exist',
          who: 'Admin'
          });
        ;
        ;
        const v3502 = {
          amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          borrower: v2953,
          offerId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          payWithNetworkToken: false,
          rejected: false
          };
        const v3503 = stdlib.fromSome(v3367, v3502);
        const v3504 = null;
        await txn4.getOutput('Admin_api_acceptOffer', 'v3504', ctc0, v3504);
        const v3517 = v2974.activeOffers;
        const v3519 = v2974.continue;
        const v3523 = v2974.networkTokenBalance;
        const v3524 = v2974.nonNetworkTokenBalance;
        const v3525 = v2974.offers;
        const v3526 = v3503.borrower;
        const v3527 = ['Some', v3526];
        const v3528 = {
          acceptedAddress: v3527,
          activeOffers: v3517,
          config: v3028,
          continue: v3519,
          freeze: true,
          loanTerms: v3035,
          loanTermsAccepted: true,
          networkTokenBalance: v3523,
          nonNetworkTokenBalance: v3524,
          offers: v3525
          };
        const cv2974 = v3528;
        const cv2975 = v3347;
        const cv2981 = v2981;
        const cv2982 = v2982;
        
        v2974 = cv2974;
        v2975 = cv2975;
        v2981 = cv2981;
        v2982 = cv2982;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
        const v3871 = v3346[1];
        undefined /* setApiDetails */;
        const v3901 = stdlib.addressEq(v3345, v2933);
        const v3902 = stdlib.addressEq(v2938, v3345);
        const v3903 = v3901 ? true : v3902;
        stdlib.assert(v3903, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'The current user trying to access this interface is not Admin',
          who: 'Admin'
          });
        const v3905 = v2974.loanTermsAccepted;
        const v3906 = v3905 ? false : true;
        stdlib.assert(v3906, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Cannot cancel loan or withdraw collateral when loan terms have been accepted',
          who: 'Admin'
          });
        const v3909 = v2974.freeze;
        stdlib.assert(v3909, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Contract is frozen',
          who: 'Admin'
          });
        ;
        ;
        const v4067 = null;
        await txn4.getOutput('Admin_api_cancelLoanOfferandWithdrawCollateral', 'v4067', ctc0, v4067);
        const v4074 = v2974.acceptedAddress;
        const v4075 = v2974.activeOffers;
        const v4081 = v2974.networkTokenBalance;
        const v4082 = v2974.nonNetworkTokenBalance;
        const v4083 = v2974.offers;
        const v4084 = {
          acceptedAddress: v4074,
          activeOffers: v4075,
          config: v3028,
          continue: false,
          freeze: true,
          loanTerms: v3035,
          loanTermsAccepted: v3905,
          networkTokenBalance: v4081,
          nonNetworkTokenBalance: v4082,
          offers: v4083
          };
        const cv2974 = v4084;
        const cv2975 = v3347;
        const cv2981 = v2981;
        const cv2982 = v2982;
        
        v2974 = cv2974;
        v2975 = cv2975;
        v2981 = cv2981;
        v2982 = cv2982;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Admin_api_updateLoanTerms_info0_170': {
        const v4393 = v3346[1];
        undefined /* setApiDetails */;
        const v4442 = stdlib.addressEq(v3345, v2933);
        const v4443 = stdlib.addressEq(v2938, v3345);
        const v4444 = v4442 ? true : v4443;
        stdlib.assert(v4444, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'The current user trying to access this interface is not Admin',
          who: 'Admin'
          });
        const v4446 = v2974.loanTermsAccepted;
        const v4447 = v4446 ? false : true;
        stdlib.assert(v4447, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Cannot update loan terms after Loan terms accepted',
          who: 'Admin'
          });
        ;
        ;
        const v4609 = v4393[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '0')];
        const v4618 = null;
        await txn4.getOutput('Admin_api_updateLoanTerms_info', 'v4618', ctc0, v4618);
        const v4628 = v2974.acceptedAddress;
        const v4629 = v2974.activeOffers;
        const v4631 = v2974.continue;
        const v4632 = v2974.freeze;
        const v4635 = v2974.networkTokenBalance;
        const v4636 = v2974.nonNetworkTokenBalance;
        const v4637 = v2974.offers;
        const v4638 = {
          acceptedAddress: v4628,
          activeOffers: v4629,
          config: v3028,
          continue: v4631,
          freeze: v4632,
          loanTerms: v4609,
          loanTermsAccepted: v4446,
          networkTokenBalance: v4635,
          nonNetworkTokenBalance: v4636,
          offers: v4637
          };
        const cv2974 = v4638;
        const cv2975 = v3347;
        const cv2981 = v2981;
        const cv2982 = v2982;
        
        v2974 = cv2974;
        v2975 = cv2975;
        v2981 = cv2981;
        v2982 = cv2982;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'user_acceptLoan0_170': {
        const v4915 = v3346[1];
        undefined /* setApiDetails */;
        const v4979 = v2974.freeze;
        stdlib.assert(v4979, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:247:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Contract is frozen',
          who: 'Admin'
          });
        const v4983 = v2974.loanTermsAccepted;
        const v4984 = v4983 ? false : true;
        stdlib.assert(v4984, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Offer already accepted',
          who: 'Admin'
          });
        const v4986 = v2934.prefersNetworkToken;
        const v4987 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
        const v4988 = [v2956, v4987];
        const v4989 = [v2956, v2939];
        const v4990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4989];
        const v4991 = v4986 ? v4988 : v4990;
        const v5034 = v4991[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
        const v5035 = v4991[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
        const v5036 = v5035[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
        const v5037 = v5035[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
        const v5042 = stdlib.add(v2982, v5034);
        ;
        const v5043 = v2981[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1')];
        const v5044 = v5043[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '0')];
        const v5045 = stdlib.add(v5044, v5036);
        const v5047 = stdlib.Array_set(v5043, '0', v5045);
        const v5048 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1'), v5047);
        ;
        const v5177 = null;
        await txn4.getOutput('user_acceptLoan', 'v5177', ctc0, v5177);
        const v5190 = stdlib.sub(v5042, v5034);
        ;
        const v5191 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v5210 = await stdlib.Array_asyncReduce([v2949], v5191, async([v5212], v5211, v5213) => {
          const v5214 = v5211[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
          const v5215 = v5211[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
          const v5216 = stdlib.tokenEq(v5212, v5037);
          const v5217 = v5214 ? true : v5216;
          const v5218 = stdlib.add(v5215, stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1'));
          const v5219 = [false, v5218];
          const v5220 = [true, v5215];
          const v5221 = v5217 ? v5220 : v5219;
          
          return v5221;})
        const v5222 = v5210[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
        const v5224 = v5048[v5222];
        const v5225 = v5224[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
        const v5226 = stdlib.sub(v5225, v5036);
        const v5228 = await stdlib.Array_asyncReduce([v2949], v5191, async([v5230], v5229, v5231) => {
          const v5232 = v5229[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
          const v5233 = v5229[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
          const v5234 = stdlib.tokenEq(v5230, v5037);
          const v5235 = v5232 ? true : v5234;
          const v5236 = stdlib.add(v5233, stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1'));
          const v5237 = [false, v5236];
          const v5238 = [true, v5233];
          const v5239 = v5235 ? v5238 : v5237;
          
          return v5239;})
        const v5240 = v5228[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
        const v5242 = v5048[v5240];
        const v5243 = stdlib.Array_set(v5242, '0', v5226);
        const v5244 = stdlib.Array_set(v5048, v5240, v5243);
        ;
        const v5246 = v2974.activeOffers;
        const v5248 = v2974.continue;
        const v5252 = v2974.networkTokenBalance;
        const v5253 = v2974.nonNetworkTokenBalance;
        const v5254 = v2974.offers;
        const v5256 = stdlib.safeAdd(v5254, stdlib.checkedBigNumberify('./index.rsh:260:47:decimal', stdlib.UInt_max, '1'));
        const v5258 = stdlib.safeAdd(v5246, stdlib.checkedBigNumberify('./index.rsh:261:59:decimal', stdlib.UInt_max, '1'));
        const v5259 = ['Some', v3345];
        const v5260 = {
          acceptedAddress: v5259,
          activeOffers: v5258,
          config: v3028,
          continue: v5248,
          freeze: true,
          loanTerms: v3035,
          loanTermsAccepted: true,
          networkTokenBalance: v5252,
          nonNetworkTokenBalance: v5253,
          offers: v5256
          };
        const cv2974 = v5260;
        const cv2975 = v3347;
        const cv2981 = v5244;
        const cv2982 = v5190;
        
        v2974 = cv2974;
        v2975 = cv2975;
        v2981 = cv2981;
        v2982 = cv2982;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'user_cancelOffer0_170': {
        const v5437 = v3346[1];
        undefined /* setApiDetails */;
        const v5515 = v5437[stdlib.checkedBigNumberify('./index.rsh:312:10:spread', stdlib.UInt_max, '0')];
        const v5516 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v5515, ctc4), null);
        const v5517 = {
          None: 0,
          Some: 1
          }[v5516[0]];
        const v5518 = stdlib.eq(v5517, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5518, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:314:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Offer id doesn\'t exist!',
          who: 'Admin'
          });
        const v5520 = {
          amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          borrower: v2953,
          offerId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          payWithNetworkToken: false,
          rejected: false
          };
        const v5521 = stdlib.fromSome(v5516, v5520);
        const v5522 = v5521.borrower;
        const v5523 = stdlib.addressEq(v3345, v5522);
        stdlib.assert(v5523, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Loan owner mismatch',
          who: 'Admin'
          });
        const v5525 = v5521.payWithNetworkToken;
        const v5527 = v5521.amount;
        const v5528 = stdlib.ge(v2982, v5527);
        const v5529 = v2981[stdlib.checkedBigNumberify('./index.rsh:320:20:application', stdlib.UInt_max, '1')];
        const v5530 = v5529[stdlib.checkedBigNumberify('./index.rsh:320:20:application', stdlib.UInt_max, '0')];
        const v5532 = stdlib.ge(v5530, v5527);
        const v5533 = v5525 ? v5528 : v5532;
        stdlib.assert(v5533, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:317:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Insufficient contract funds',
          who: 'Admin'
          });
        const v5535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
        ;
        ;
        const v5807 = null;
        await txn4.getOutput('user_cancelOffer', 'v5807', ctc0, v5807);
        const v5818 = [v5527, v5535];
        const v5819 = [v5527, v2939];
        const v5820 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5819];
        const v5821 = v5525 ? v5818 : v5820;
        const v5823 = v5821[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
        const v5824 = v5821[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
        const v5825 = v5824[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
        const v5826 = v5824[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
        const v5830 = stdlib.sub(v2982, v5823);
        ;
        const v5831 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v5850 = await stdlib.Array_asyncReduce([v2949], v5831, async([v5852], v5851, v5853) => {
          const v5854 = v5851[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
          const v5855 = v5851[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
          const v5856 = stdlib.tokenEq(v5852, v5826);
          const v5857 = v5854 ? true : v5856;
          const v5858 = stdlib.add(v5855, stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1'));
          const v5859 = [false, v5858];
          const v5860 = [true, v5855];
          const v5861 = v5857 ? v5860 : v5859;
          
          return v5861;})
        const v5862 = v5850[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
        const v5864 = v2981[v5862];
        const v5865 = v5864[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
        const v5866 = stdlib.sub(v5865, v5825);
        const v5868 = await stdlib.Array_asyncReduce([v2949], v5831, async([v5870], v5869, v5871) => {
          const v5872 = v5869[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
          const v5873 = v5869[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
          const v5874 = stdlib.tokenEq(v5870, v5826);
          const v5875 = v5872 ? true : v5874;
          const v5876 = stdlib.add(v5873, stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1'));
          const v5877 = [false, v5876];
          const v5878 = [true, v5873];
          const v5879 = v5875 ? v5878 : v5877;
          
          return v5879;})
        const v5880 = v5868[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
        const v5882 = v2981[v5880];
        const v5883 = stdlib.Array_set(v5882, '0', v5866);
        const v5884 = stdlib.Array_set(v2981, v5880, v5883);
        ;
        await stdlib.mapSet(map0, ctc1, v5515, ctc4, undefined /* Nothing */);
        const v5885 = v2974.acceptedAddress;
        const v5886 = v2974.activeOffers;
        const v5888 = v2974.continue;
        const v5889 = v2974.freeze;
        const v5891 = v2974.loanTermsAccepted;
        const v5892 = v2974.networkTokenBalance;
        const v5893 = v2974.nonNetworkTokenBalance;
        const v5894 = v2974.offers;
        const v5896 = stdlib.safeSub(v5886, stdlib.checkedBigNumberify('./index.rsh:336:59:decimal', stdlib.UInt_max, '1'));
        if (v5525) {
          const v5900 = stdlib.safeSub(v5892, v5527);
          const v5901 = {
            acceptedAddress: v5885,
            activeOffers: v5896,
            config: v3028,
            continue: v5888,
            freeze: v5889,
            loanTerms: v3035,
            loanTermsAccepted: v5891,
            networkTokenBalance: v5900,
            nonNetworkTokenBalance: v5893,
            offers: v5894
            };
          const cv2974 = v5901;
          const cv2975 = v3347;
          const cv2981 = v5884;
          const cv2982 = v5830;
          
          v2974 = cv2974;
          v2975 = cv2975;
          v2981 = cv2981;
          v2982 = cv2982;
          
          txn3 = txn4;
          continue;}
        else {
          const v5905 = stdlib.safeSub(v5893, v5527);
          const v5906 = {
            acceptedAddress: v5885,
            activeOffers: v5896,
            config: v3028,
            continue: v5888,
            freeze: v5889,
            loanTerms: v3035,
            loanTermsAccepted: v5891,
            networkTokenBalance: v5892,
            nonNetworkTokenBalance: v5905,
            offers: v5894
            };
          const cv2974 = v5906;
          const cv2975 = v3347;
          const cv2981 = v5884;
          const cv2982 = v5830;
          
          v2974 = cv2974;
          v2975 = cv2975;
          v2981 = cv2981;
          v2982 = cv2982;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'user_makeOffer0_170': {
        const v5959 = v3346[1];
        undefined /* setApiDetails */;
        const v6064 = v5959[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '0')];
        const v6065 = v6064.amount;
        const v6066 = v6064.shouldPayWithNetworkToken;
        const v6068 = v2974.freeze;
        stdlib.assert(v6068, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:269:67:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
          msg: 'Contract is frozen',
          who: 'Admin'
          });
        const v6072 = v2934.shouldPayInOnlyNetworkToken;
        const v6071 = v6072 ? true : v6066;
        const v6073 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
        const v6074 = [v6065, v6073];
        const v6075 = [v6065, v2939];
        const v6076 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6075];
        const v6077 = v6071 ? v6074 : v6076;
        const v6078 = v6077[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
        const v6079 = v6077[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
        const v6080 = v6079[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
        const v6086 = stdlib.add(v2982, v6078);
        ;
        const v6087 = v2981[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1')];
        const v6088 = v6087[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '0')];
        const v6089 = stdlib.add(v6088, v6080);
        const v6091 = stdlib.Array_set(v6087, '0', v6089);
        const v6092 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1'), v6091);
        ;
        const v6441 = v2974.offers;
        const v6443 = {
          amount: v6065,
          borrower: v3345,
          offerId: v6441,
          payWithNetworkToken: v6071,
          rejected: false
          };
        await stdlib.mapSet(map0, ctc1, v6441, ctc4, v6443);
        await txn4.getOutput('user_makeOffer', 'v6443', ctc4, v6443);
        const v6459 = v2974.acceptedAddress;
        const v6460 = v2974.activeOffers;
        const v6462 = v2974.continue;
        const v6465 = v2974.loanTermsAccepted;
        const v6466 = v2974.networkTokenBalance;
        const v6467 = v2974.nonNetworkTokenBalance;
        const v6470 = stdlib.safeAdd(v6441, stdlib.checkedBigNumberify('./index.rsh:293:47:decimal', stdlib.UInt_max, '1'));
        const v6472 = stdlib.safeAdd(v6460, stdlib.checkedBigNumberify('./index.rsh:294:59:decimal', stdlib.UInt_max, '1'));
        if (v6071) {
          const v6474 = stdlib.safeAdd(v6466, v6065);
          const v6475 = {
            acceptedAddress: v6459,
            activeOffers: v6472,
            config: v3028,
            continue: v6462,
            freeze: true,
            loanTerms: v3035,
            loanTermsAccepted: v6465,
            networkTokenBalance: v6474,
            nonNetworkTokenBalance: v6467,
            offers: v6470
            };
          const cv2974 = v6475;
          const cv2975 = v3347;
          const cv2981 = v6092;
          const cv2982 = v6086;
          
          v2974 = cv2974;
          v2975 = cv2975;
          v2981 = cv2981;
          v2982 = cv2982;
          
          txn3 = txn4;
          continue;}
        else {
          const v6478 = stdlib.safeAdd(v6467, v6065);
          const v6479 = {
            acceptedAddress: v6459,
            activeOffers: v6472,
            config: v3028,
            continue: v6462,
            freeze: true,
            loanTerms: v3035,
            loanTermsAccepted: v6465,
            networkTokenBalance: v6466,
            nonNetworkTokenBalance: v6478,
            offers: v6470
            };
          const cv2974 = v6479;
          const cv2975 = v3347;
          const cv2981 = v6092;
          const cv2982 = v6086;
          
          v2974 = cv2974;
          v2975 = cv2975;
          v2981 = cv2981;
          v2982 = cv2982;
          
          txn3 = txn4;
          continue;}
        break;
        }
      }
    
    }
  const v6481 = v2974.config;
  const v6488 = v2974.loanTerms;
  const txn4 = await (ctc.sendrecv({
    args: [v2933, v2935, v2939, v2981, v2982, v6481, v6488],
    evt_cnt: 0,
    funcNum: 3,
    lct: v2975,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:382:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v6496, time: v6495, didSend: v2204, from: v6494 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v2933,
        tok: undefined /* Nothing */
        });
      const v6503 = v2981[stdlib.checkedBigNumberify('./index.rsh:384:19:application', stdlib.UInt_max, '0')];
      const v6504 = v6503[stdlib.checkedBigNumberify('./index.rsh:384:19:application', stdlib.UInt_max, '0')];
      const v6510 = stdlib.sub(v6504, v6504);
      const v6512 = stdlib.Array_set(v6503, '0', v6510);
      const v6513 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:384:49:application', stdlib.UInt_max, '0'), v6512);
      sim_r.txns.push({
        kind: 'from',
        to: v2933,
        tok: v2935
        });
      const v6514 = v6513[stdlib.checkedBigNumberify('./index.rsh:385:19:application', stdlib.UInt_max, '1')];
      const v6515 = v6514[stdlib.checkedBigNumberify('./index.rsh:385:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v2933,
        tok: v2939
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v2939
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v2935
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc7, ctc7, ctc19, ctc1, ctc8, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v6496, time: v6495, didSend: v2204, from: v6494 } = txn4;
  ;
  const v6497 = stdlib.addressEq(v2933, v6494);
  stdlib.assert(v6497, {
    at: './index.rsh:382:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  ;
  const v6503 = v2981[stdlib.checkedBigNumberify('./index.rsh:384:19:application', stdlib.UInt_max, '0')];
  const v6504 = v6503[stdlib.checkedBigNumberify('./index.rsh:384:19:application', stdlib.UInt_max, '0')];
  const v6510 = stdlib.sub(v6504, v6504);
  const v6512 = stdlib.Array_set(v6503, '0', v6510);
  const v6513 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:384:49:application', stdlib.UInt_max, '0'), v6512);
  ;
  const v6514 = v6513[stdlib.checkedBigNumberify('./index.rsh:385:19:application', stdlib.UInt_max, '1')];
  const v6515 = v6514[stdlib.checkedBigNumberify('./index.rsh:385:19:application', stdlib.UInt_max, '0')];
  ;
  return;
  
  
  
  
  
  
  };
export async function _Admin_api_acceptOffer5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_api_acceptOffer5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_api_acceptOffer5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    active: ctc3,
    number_of_tokens_to_deposit: ctc1,
    paymentAsset: ctc6,
    prefersNetworkToken: ctc3,
    shouldPayInOnlyNetworkToken: ctc3,
    token: ctc6
    });
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Object({
    duration_in_blocks: ctc1,
    interest: ctc6,
    principle: ctc1
    });
  const ctc11 = stdlib.T_Object({
    acceptedAddress: ctc9,
    activeOffers: ctc1,
    config: ctc7,
    continue: ctc3,
    freeze: ctc3,
    loanTerms: ctc10,
    loanTermsAccepted: ctc3,
    networkTokenBalance: ctc1,
    nonNetworkTokenBalance: ctc1,
    offers: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Object({
    amount: ctc1,
    shouldPayWithNetworkToken: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Data({
    Admin_api_acceptOffer0_170: ctc14,
    Admin_api_cancelLoanOfferandWithdrawCollateral0_170: ctc15,
    Admin_api_updateLoanTerms_info0_170: ctc16,
    user_acceptLoan0_170: ctc17,
    user_cancelOffer0_170: ctc15,
    user_makeOffer0_170: ctc19
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10]);
  const v3089 = ctc.selfAddress();
  const v3091 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_acceptOffer0_170" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'in',
    who: 'Admin_api_acceptOffer'
    });
  const v3092 = v3091[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3095 = v3092.offerId;
  const v3099 = stdlib.addressEq(v3089, v2933);
  const v3100 = stdlib.addressEq(v2938, v3089);
  const v3101 = v3099 ? true : v3100;
  stdlib.assert(v3101, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_acceptOffer0_170" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'The current user trying to access this interface is not Admin',
    who: 'Admin_api_acceptOffer'
    });
  const v3103 = v2974.loanTermsAccepted;
  const v3104 = v3103 ? false : true;
  stdlib.assert(v3104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_acceptOffer0_170" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'An offer has already been accepted',
    who: 'Admin_api_acceptOffer'
    });
  const v3107 = v2974.freeze;
  stdlib.assert(v3107, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_acceptOffer0_170" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Contract is frozen',
    who: 'Admin_api_acceptOffer'
    });
  const v3111 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v3095, ctc4), null);
  const v3112 = {
    None: 0,
    Some: 1
    }[v3111[0]];
  const v3113 = stdlib.eq(v3112, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3113, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_acceptOffer0_170" (defined at: ./index.rsh:220:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Offer id doesn\'t exist',
    who: 'Admin_api_acceptOffer'
    });
  const v3125 = ['Admin_api_acceptOffer0_170', v3091];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035, v3125],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:234:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:234:14:decimal', stdlib.UInt_max, '0'), v2939]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
      
      switch (v3346[0]) {
        case 'Admin_api_acceptOffer0_170': {
          const v3349 = v3346[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_api_acceptOffer"
            });
          const v3354 = v3349[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
          const v3366 = v3354.offerId;
          const v3367 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc1, v3366, ctc4), null);
          ;
          ;
          const v3502 = {
            amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            borrower: v2953,
            offerId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            payWithNetworkToken: false,
            rejected: false
            };
          const v3503 = stdlib.fromSome(v3367, v3502);
          const v3504 = null;
          const v3505 = await txn1.getOutput('Admin_api_acceptOffer', 'v3504', ctc0, v3504);
          
          const v3517 = v2974.activeOffers;
          const v3519 = v2974.continue;
          const v3523 = v2974.networkTokenBalance;
          const v3524 = v2974.nonNetworkTokenBalance;
          const v3525 = v2974.offers;
          const v3526 = v3503.borrower;
          const v3527 = ['Some', v3526];
          const v3528 = {
            acceptedAddress: v3527,
            activeOffers: v3517,
            config: v3028,
            continue: v3519,
            freeze: true,
            loanTerms: v3035,
            loanTermsAccepted: true,
            networkTokenBalance: v3523,
            nonNetworkTokenBalance: v3524,
            offers: v3525
            };
          const v9302 = v3528;
          const v9304 = v2981;
          const v9305 = v2982;
          const v9306 = v3528.continue;
          const v9307 = v3528.activeOffers;
          const v9308 = stdlib.eq(v9307, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
          const v9309 = v9308 ? false : true;
          const v9310 = v9306 ? true : v9309;
          if (v9310) {
            const v9311 = v3528.config;
            const v9312 = v3528.loanTerms;
            sim_r.isHalt = false;
            }
          else {
            const v9313 = v3528.config;
            const v9314 = v3528.loanTerms;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
          const v3871 = v3346[1];
          
          break;
          }
        case 'Admin_api_updateLoanTerms_info0_170': {
          const v4393 = v3346[1];
          
          break;
          }
        case 'user_acceptLoan0_170': {
          const v4915 = v3346[1];
          
          break;
          }
        case 'user_cancelOffer0_170': {
          const v5437 = v3346[1];
          
          break;
          }
        case 'user_makeOffer0_170': {
          const v5959 = v3346[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
  switch (v3346[0]) {
    case 'Admin_api_acceptOffer0_170': {
      const v3349 = v3346[1];
      undefined /* setApiDetails */;
      const v3354 = v3349[stdlib.checkedBigNumberify('./index.rsh:220:10:spread', stdlib.UInt_max, '0')];
      const v3355 = stdlib.addressEq(v3345, v2933);
      const v3356 = stdlib.addressEq(v2938, v3345);
      const v3357 = v3355 ? true : v3356;
      stdlib.assert(v3357, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'The current user trying to access this interface is not Admin',
        who: 'Admin_api_acceptOffer'
        });
      const v3359 = v2974.loanTermsAccepted;
      const v3360 = v3359 ? false : true;
      stdlib.assert(v3360, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'An offer has already been accepted',
        who: 'Admin_api_acceptOffer'
        });
      const v3363 = v2974.freeze;
      stdlib.assert(v3363, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:229:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Contract is frozen',
        who: 'Admin_api_acceptOffer'
        });
      const v3366 = v3354.offerId;
      const v3367 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v3366, ctc4), null);
      const v3368 = {
        None: 0,
        Some: 1
        }[v3367[0]];
      const v3369 = stdlib.eq(v3368, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3369, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Offer id doesn\'t exist',
        who: 'Admin_api_acceptOffer'
        });
      ;
      ;
      const v3502 = {
        amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        borrower: v2953,
        offerId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        payWithNetworkToken: false,
        rejected: false
        };
      const v3503 = stdlib.fromSome(v3367, v3502);
      const v3504 = null;
      const v3505 = await txn1.getOutput('Admin_api_acceptOffer', 'v3504', ctc0, v3504);
      if (v1672) {
        stdlib.protect(ctc0, await interact.out(v3349, v3505), {
          at: './index.rsh:220:11:application',
          fs: ['at ./index.rsh:220:11:application call to [unknown function] (defined at: ./index.rsh:220:11:function exp)', 'at ./index.rsh:237:12:application call to "k" (defined at: ./index.rsh:235:13:function exp)', 'at ./index.rsh:235:13:application call to [unknown function] (defined at: ./index.rsh:235:13:function exp)'],
          msg: 'out',
          who: 'Admin_api_acceptOffer'
          });
        }
      else {
        }
      
      const v3517 = v2974.activeOffers;
      const v3519 = v2974.continue;
      const v3523 = v2974.networkTokenBalance;
      const v3524 = v2974.nonNetworkTokenBalance;
      const v3525 = v2974.offers;
      const v3526 = v3503.borrower;
      const v3527 = ['Some', v3526];
      const v3528 = {
        acceptedAddress: v3527,
        activeOffers: v3517,
        config: v3028,
        continue: v3519,
        freeze: true,
        loanTerms: v3035,
        loanTermsAccepted: true,
        networkTokenBalance: v3523,
        nonNetworkTokenBalance: v3524,
        offers: v3525
        };
      const v9302 = v3528;
      const v9304 = v2981;
      const v9305 = v2982;
      const v9306 = v3528.continue;
      const v9307 = v3528.activeOffers;
      const v9308 = stdlib.eq(v9307, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
      const v9309 = v9308 ? false : true;
      const v9310 = v9306 ? true : v9309;
      if (v9310) {
        const v9311 = v3528.config;
        const v9312 = v3528.loanTerms;
        return;
        }
      else {
        const v9313 = v3528.config;
        const v9314 = v3528.loanTerms;
        return;
        }
      break;
      }
    case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
      const v3871 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_updateLoanTerms_info0_170': {
      const v4393 = v3346[1];
      return;
      break;
      }
    case 'user_acceptLoan0_170': {
      const v4915 = v3346[1];
      return;
      break;
      }
    case 'user_cancelOffer0_170': {
      const v5437 = v3346[1];
      return;
      break;
      }
    case 'user_makeOffer0_170': {
      const v5959 = v3346[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_api_cancelLoanOfferandWithdrawCollateral5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_api_cancelLoanOfferandWithdrawCollateral5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_api_cancelLoanOfferandWithdrawCollateral5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    active: ctc3,
    number_of_tokens_to_deposit: ctc1,
    paymentAsset: ctc6,
    prefersNetworkToken: ctc3,
    shouldPayInOnlyNetworkToken: ctc3,
    token: ctc6
    });
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Object({
    duration_in_blocks: ctc1,
    interest: ctc6,
    principle: ctc1
    });
  const ctc11 = stdlib.T_Object({
    acceptedAddress: ctc9,
    activeOffers: ctc1,
    config: ctc7,
    continue: ctc3,
    freeze: ctc3,
    loanTerms: ctc10,
    loanTermsAccepted: ctc3,
    networkTokenBalance: ctc1,
    nonNetworkTokenBalance: ctc1,
    offers: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc4]);
  const ctc16 = stdlib.T_Tuple([ctc10]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Object({
    amount: ctc1,
    shouldPayWithNetworkToken: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Data({
    Admin_api_acceptOffer0_170: ctc15,
    Admin_api_cancelLoanOfferandWithdrawCollateral0_170: ctc14,
    Admin_api_updateLoanTerms_info0_170: ctc16,
    user_acceptLoan0_170: ctc17,
    user_cancelOffer0_170: ctc14,
    user_makeOffer0_170: ctc19
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10]);
  const v3066 = ctc.selfAddress();
  const v3068 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_cancelLoanOfferandWithdrawCollateral0_170" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'in',
    who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
    });
  const v3071 = stdlib.addressEq(v3066, v2933);
  const v3072 = stdlib.addressEq(v2938, v3066);
  const v3073 = v3071 ? true : v3072;
  stdlib.assert(v3073, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_cancelLoanOfferandWithdrawCollateral0_170" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'The current user trying to access this interface is not Admin',
    who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
    });
  const v3075 = v2974.loanTermsAccepted;
  const v3076 = v3075 ? false : true;
  stdlib.assert(v3076, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_cancelLoanOfferandWithdrawCollateral0_170" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Cannot cancel loan or withdraw collateral when loan terms have been accepted',
    who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
    });
  const v3079 = v2974.freeze;
  stdlib.assert(v3079, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_cancelLoanOfferandWithdrawCollateral0_170" (defined at: ./index.rsh:200:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Contract is frozen',
    who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
    });
  const v3087 = ['Admin_api_cancelLoanOfferandWithdrawCollateral0_170', v3068];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035, v3087],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:211:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:211:14:decimal', stdlib.UInt_max, '0'), v2939]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
      
      switch (v3346[0]) {
        case 'Admin_api_acceptOffer0_170': {
          const v3349 = v3346[1];
          
          break;
          }
        case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
          const v3871 = v3346[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_api_cancelLoanOfferandWithdrawCollateral"
            });
          const v3905 = v2974.loanTermsAccepted;
          ;
          ;
          const v4067 = null;
          const v4068 = await txn1.getOutput('Admin_api_cancelLoanOfferandWithdrawCollateral', 'v4067', ctc0, v4067);
          
          const v4074 = v2974.acceptedAddress;
          const v4075 = v2974.activeOffers;
          const v4081 = v2974.networkTokenBalance;
          const v4082 = v2974.nonNetworkTokenBalance;
          const v4083 = v2974.offers;
          const v4084 = {
            acceptedAddress: v4074,
            activeOffers: v4075,
            config: v3028,
            continue: false,
            freeze: true,
            loanTerms: v3035,
            loanTermsAccepted: v3905,
            networkTokenBalance: v4081,
            nonNetworkTokenBalance: v4082,
            offers: v4083
            };
          const v9527 = v4084;
          const v9529 = v2981;
          const v9530 = v2982;
          const v9531 = v4084.continue;
          const v9532 = v4084.activeOffers;
          const v9533 = stdlib.eq(v9532, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
          const v9534 = v9533 ? false : true;
          const v9535 = v9531 ? true : v9534;
          if (v9535) {
            const v9536 = v4084.config;
            const v9537 = v4084.loanTerms;
            sim_r.isHalt = false;
            }
          else {
            const v9538 = v4084.config;
            const v9539 = v4084.loanTerms;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Admin_api_updateLoanTerms_info0_170': {
          const v4393 = v3346[1];
          
          break;
          }
        case 'user_acceptLoan0_170': {
          const v4915 = v3346[1];
          
          break;
          }
        case 'user_cancelOffer0_170': {
          const v5437 = v3346[1];
          
          break;
          }
        case 'user_makeOffer0_170': {
          const v5959 = v3346[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
  switch (v3346[0]) {
    case 'Admin_api_acceptOffer0_170': {
      const v3349 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
      const v3871 = v3346[1];
      undefined /* setApiDetails */;
      const v3901 = stdlib.addressEq(v3345, v2933);
      const v3902 = stdlib.addressEq(v2938, v3345);
      const v3903 = v3901 ? true : v3902;
      stdlib.assert(v3903, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'The current user trying to access this interface is not Admin',
        who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
        });
      const v3905 = v2974.loanTermsAccepted;
      const v3906 = v3905 ? false : true;
      stdlib.assert(v3906, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Cannot cancel loan or withdraw collateral when loan terms have been accepted',
        who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
        });
      const v3909 = v2974.freeze;
      stdlib.assert(v3909, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:209:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Contract is frozen',
        who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
        });
      ;
      ;
      const v4067 = null;
      const v4068 = await txn1.getOutput('Admin_api_cancelLoanOfferandWithdrawCollateral', 'v4067', ctc0, v4067);
      if (v1672) {
        stdlib.protect(ctc0, await interact.out(v3871, v4068), {
          at: './index.rsh:200:11:application',
          fs: ['at ./index.rsh:200:11:application call to [unknown function] (defined at: ./index.rsh:200:11:function exp)', 'at ./index.rsh:213:12:application call to "k" (defined at: ./index.rsh:212:13:function exp)', 'at ./index.rsh:212:13:application call to [unknown function] (defined at: ./index.rsh:212:13:function exp)'],
          msg: 'out',
          who: 'Admin_api_cancelLoanOfferandWithdrawCollateral'
          });
        }
      else {
        }
      
      const v4074 = v2974.acceptedAddress;
      const v4075 = v2974.activeOffers;
      const v4081 = v2974.networkTokenBalance;
      const v4082 = v2974.nonNetworkTokenBalance;
      const v4083 = v2974.offers;
      const v4084 = {
        acceptedAddress: v4074,
        activeOffers: v4075,
        config: v3028,
        continue: false,
        freeze: true,
        loanTerms: v3035,
        loanTermsAccepted: v3905,
        networkTokenBalance: v4081,
        nonNetworkTokenBalance: v4082,
        offers: v4083
        };
      const v9527 = v4084;
      const v9529 = v2981;
      const v9530 = v2982;
      const v9531 = v4084.continue;
      const v9532 = v4084.activeOffers;
      const v9533 = stdlib.eq(v9532, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
      const v9534 = v9533 ? false : true;
      const v9535 = v9531 ? true : v9534;
      if (v9535) {
        const v9536 = v4084.config;
        const v9537 = v4084.loanTerms;
        return;
        }
      else {
        const v9538 = v4084.config;
        const v9539 = v4084.loanTerms;
        return;
        }
      break;
      }
    case 'Admin_api_updateLoanTerms_info0_170': {
      const v4393 = v3346[1];
      return;
      break;
      }
    case 'user_acceptLoan0_170': {
      const v4915 = v3346[1];
      return;
      break;
      }
    case 'user_cancelOffer0_170': {
      const v5437 = v3346[1];
      return;
      break;
      }
    case 'user_makeOffer0_170': {
      const v5959 = v3346[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_api_updateLoanTerms_info5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_api_updateLoanTerms_info5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_api_updateLoanTerms_info5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    active: ctc3,
    number_of_tokens_to_deposit: ctc1,
    paymentAsset: ctc6,
    prefersNetworkToken: ctc3,
    shouldPayInOnlyNetworkToken: ctc3,
    token: ctc6
    });
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Object({
    duration_in_blocks: ctc1,
    interest: ctc6,
    principle: ctc1
    });
  const ctc11 = stdlib.T_Object({
    acceptedAddress: ctc9,
    activeOffers: ctc1,
    config: ctc7,
    continue: ctc3,
    freeze: ctc3,
    loanTerms: ctc10,
    loanTermsAccepted: ctc3,
    networkTokenBalance: ctc1,
    nonNetworkTokenBalance: ctc1,
    offers: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc14 = stdlib.T_Tuple([ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc4]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Object({
    amount: ctc1,
    shouldPayWithNetworkToken: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Data({
    Admin_api_acceptOffer0_170: ctc15,
    Admin_api_cancelLoanOfferandWithdrawCollateral0_170: ctc16,
    Admin_api_updateLoanTerms_info0_170: ctc14,
    user_acceptLoan0_170: ctc17,
    user_cancelOffer0_170: ctc16,
    user_makeOffer0_170: ctc19
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10]);
  const v3041 = ctc.selfAddress();
  const v3043 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_updateLoanTerms_info0_170" (defined at: ./index.rsh:182:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'in',
    who: 'Admin_api_updateLoanTerms_info'
    });
  const v3049 = stdlib.addressEq(v3041, v2933);
  const v3050 = stdlib.addressEq(v2938, v3041);
  const v3051 = v3049 ? true : v3050;
  stdlib.assert(v3051, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_updateLoanTerms_info0_170" (defined at: ./index.rsh:182:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'The current user trying to access this interface is not Admin',
    who: 'Admin_api_updateLoanTerms_info'
    });
  const v3053 = v2974.loanTermsAccepted;
  const v3054 = v3053 ? false : true;
  stdlib.assert(v3054, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to "runAdmin_api_updateLoanTerms_info0_170" (defined at: ./index.rsh:182:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Cannot update loan terms after Loan terms accepted',
    who: 'Admin_api_updateLoanTerms_info'
    });
  const v3064 = ['Admin_api_updateLoanTerms_info0_170', v3043];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035, v3064],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:192:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:192:14:decimal', stdlib.UInt_max, '0'), v2939]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
      
      switch (v3346[0]) {
        case 'Admin_api_acceptOffer0_170': {
          const v3349 = v3346[1];
          
          break;
          }
        case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
          const v3871 = v3346[1];
          
          break;
          }
        case 'Admin_api_updateLoanTerms_info0_170': {
          const v4393 = v3346[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_api_updateLoanTerms_info"
            });
          const v4446 = v2974.loanTermsAccepted;
          ;
          ;
          const v4609 = v4393[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '0')];
          const v4618 = null;
          const v4619 = await txn1.getOutput('Admin_api_updateLoanTerms_info', 'v4618', ctc0, v4618);
          
          const v4628 = v2974.acceptedAddress;
          const v4629 = v2974.activeOffers;
          const v4631 = v2974.continue;
          const v4632 = v2974.freeze;
          const v4635 = v2974.networkTokenBalance;
          const v4636 = v2974.nonNetworkTokenBalance;
          const v4637 = v2974.offers;
          const v4638 = {
            acceptedAddress: v4628,
            activeOffers: v4629,
            config: v3028,
            continue: v4631,
            freeze: v4632,
            loanTerms: v4609,
            loanTermsAccepted: v4446,
            networkTokenBalance: v4635,
            nonNetworkTokenBalance: v4636,
            offers: v4637
            };
          const v9752 = v4638;
          const v9754 = v2981;
          const v9755 = v2982;
          const v9756 = v4638.continue;
          const v9757 = v4638.activeOffers;
          const v9758 = stdlib.eq(v9757, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
          const v9759 = v9758 ? false : true;
          const v9760 = v9756 ? true : v9759;
          if (v9760) {
            const v9761 = v4638.config;
            const v9762 = v4638.loanTerms;
            sim_r.isHalt = false;
            }
          else {
            const v9763 = v4638.config;
            const v9764 = v4638.loanTerms;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'user_acceptLoan0_170': {
          const v4915 = v3346[1];
          
          break;
          }
        case 'user_cancelOffer0_170': {
          const v5437 = v3346[1];
          
          break;
          }
        case 'user_makeOffer0_170': {
          const v5959 = v3346[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
  switch (v3346[0]) {
    case 'Admin_api_acceptOffer0_170': {
      const v3349 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
      const v3871 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_updateLoanTerms_info0_170': {
      const v4393 = v3346[1];
      undefined /* setApiDetails */;
      const v4442 = stdlib.addressEq(v3345, v2933);
      const v4443 = stdlib.addressEq(v2938, v3345);
      const v4444 = v4442 ? true : v4443;
      stdlib.assert(v4444, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'The current user trying to access this interface is not Admin',
        who: 'Admin_api_updateLoanTerms_info'
        });
      const v4446 = v2974.loanTermsAccepted;
      const v4447 = v4446 ? false : true;
      stdlib.assert(v4447, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Cannot update loan terms after Loan terms accepted',
        who: 'Admin_api_updateLoanTerms_info'
        });
      ;
      ;
      const v4609 = v4393[stdlib.checkedBigNumberify('./index.rsh:182:10:spread', stdlib.UInt_max, '0')];
      const v4618 = null;
      const v4619 = await txn1.getOutput('Admin_api_updateLoanTerms_info', 'v4618', ctc0, v4618);
      if (v1672) {
        stdlib.protect(ctc0, await interact.out(v4393, v4619), {
          at: './index.rsh:182:11:application',
          fs: ['at ./index.rsh:182:11:application call to [unknown function] (defined at: ./index.rsh:182:11:function exp)', 'at ./index.rsh:194:12:application call to "k" (defined at: ./index.rsh:193:13:function exp)', 'at ./index.rsh:193:13:application call to [unknown function] (defined at: ./index.rsh:193:13:function exp)'],
          msg: 'out',
          who: 'Admin_api_updateLoanTerms_info'
          });
        }
      else {
        }
      
      const v4628 = v2974.acceptedAddress;
      const v4629 = v2974.activeOffers;
      const v4631 = v2974.continue;
      const v4632 = v2974.freeze;
      const v4635 = v2974.networkTokenBalance;
      const v4636 = v2974.nonNetworkTokenBalance;
      const v4637 = v2974.offers;
      const v4638 = {
        acceptedAddress: v4628,
        activeOffers: v4629,
        config: v3028,
        continue: v4631,
        freeze: v4632,
        loanTerms: v4609,
        loanTermsAccepted: v4446,
        networkTokenBalance: v4635,
        nonNetworkTokenBalance: v4636,
        offers: v4637
        };
      const v9752 = v4638;
      const v9754 = v2981;
      const v9755 = v2982;
      const v9756 = v4638.continue;
      const v9757 = v4638.activeOffers;
      const v9758 = stdlib.eq(v9757, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
      const v9759 = v9758 ? false : true;
      const v9760 = v9756 ? true : v9759;
      if (v9760) {
        const v9761 = v4638.config;
        const v9762 = v4638.loanTerms;
        return;
        }
      else {
        const v9763 = v4638.config;
        const v9764 = v4638.loanTerms;
        return;
        }
      break;
      }
    case 'user_acceptLoan0_170': {
      const v4915 = v3346[1];
      return;
      break;
      }
    case 'user_cancelOffer0_170': {
      const v5437 = v3346[1];
      return;
      break;
      }
    case 'user_makeOffer0_170': {
      const v5959 = v3346[1];
      return;
      break;
      }
    }
  
  
  };
export async function _user_acceptLoan5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _user_acceptLoan5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _user_acceptLoan5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    active: ctc3,
    number_of_tokens_to_deposit: ctc1,
    paymentAsset: ctc6,
    prefersNetworkToken: ctc3,
    shouldPayInOnlyNetworkToken: ctc3,
    token: ctc6
    });
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Object({
    duration_in_blocks: ctc1,
    interest: ctc6,
    principle: ctc1
    });
  const ctc11 = stdlib.T_Object({
    acceptedAddress: ctc9,
    activeOffers: ctc1,
    config: ctc7,
    continue: ctc3,
    freeze: ctc3,
    loanTerms: ctc10,
    loanTermsAccepted: ctc3,
    networkTokenBalance: ctc1,
    nonNetworkTokenBalance: ctc1,
    offers: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc4]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc10]);
  const ctc18 = stdlib.T_Object({
    amount: ctc1,
    shouldPayWithNetworkToken: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Data({
    Admin_api_acceptOffer0_170: ctc15,
    Admin_api_cancelLoanOfferandWithdrawCollateral0_170: ctc16,
    Admin_api_updateLoanTerms_info0_170: ctc17,
    user_acceptLoan0_170: ctc14,
    user_cancelOffer0_170: ctc16,
    user_makeOffer0_170: ctc19
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10]);
  const v3129 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to "runuser_acceptLoan0_170" (defined at: ./index.rsh:246:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'in',
    who: 'user_acceptLoan'
    });
  const v3131 = v2974.freeze;
  stdlib.assert(v3131, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:247:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to "runuser_acceptLoan0_170" (defined at: ./index.rsh:246:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Contract is frozen',
    who: 'user_acceptLoan'
    });
  const v3135 = v2974.loanTermsAccepted;
  const v3136 = v3135 ? false : true;
  stdlib.assert(v3136, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to "runuser_acceptLoan0_170" (defined at: ./index.rsh:246:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Offer already accepted',
    who: 'user_acceptLoan'
    });
  const v3138 = v2934.prefersNetworkToken;
  const v3139 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
  const v3140 = [v2956, v3139];
  const v3141 = [v2956, v2939];
  const v3142 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3141];
  const v3143 = v3138 ? v3140 : v3142;
  const v3147 = ['user_acceptLoan0_170', v3129];
  
  const v3286 = v3143[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
  const v3287 = v3143[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
  const v3288 = v3287[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035, v3147],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v3286, [[v3288, v2939]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
      
      switch (v3346[0]) {
        case 'Admin_api_acceptOffer0_170': {
          const v3349 = v3346[1];
          
          break;
          }
        case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
          const v3871 = v3346[1];
          
          break;
          }
        case 'Admin_api_updateLoanTerms_info0_170': {
          const v4393 = v3346[1];
          
          break;
          }
        case 'user_acceptLoan0_170': {
          const v4915 = v3346[1];
          sim_r.txns.push({
            kind: 'api',
            who: "user_acceptLoan"
            });
          const v4986 = v2934.prefersNetworkToken;
          const v4987 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
          const v4988 = [v2956, v4987];
          const v4989 = [v2956, v2939];
          const v4990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4989];
          const v4991 = v4986 ? v4988 : v4990;
          const v5034 = v4991[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
          const v5035 = v4991[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
          const v5036 = v5035[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
          const v5037 = v5035[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
          const v5042 = stdlib.add(v2982, v5034);
          sim_r.txns.push({
            amt: v5034,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5043 = v2981[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1')];
          const v5044 = v5043[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '0')];
          const v5045 = stdlib.add(v5044, v5036);
          const v5047 = stdlib.Array_set(v5043, '0', v5045);
          const v5048 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1'), v5047);
          sim_r.txns.push({
            amt: v5036,
            kind: 'to',
            tok: v2939
            });
          const v5177 = null;
          const v5178 = await txn1.getOutput('user_acceptLoan', 'v5177', ctc0, v5177);
          
          const v5190 = stdlib.sub(v5042, v5034);
          sim_r.txns.push({
            kind: 'from',
            to: v2933,
            tok: undefined /* Nothing */
            });
          const v5191 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v5210 = await stdlib.Array_asyncReduce([v2949], v5191, async([v5212], v5211, v5213) => {
            const v5214 = v5211[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
            const v5215 = v5211[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
            const v5216 = stdlib.tokenEq(v5212, v5037);
            const v5217 = v5214 ? true : v5216;
            const v5218 = stdlib.add(v5215, stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1'));
            const v5219 = [false, v5218];
            const v5220 = [true, v5215];
            const v5221 = v5217 ? v5220 : v5219;
            
            return v5221;})
          const v5222 = v5210[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
          const v5224 = v5048[v5222];
          const v5225 = v5224[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
          const v5226 = stdlib.sub(v5225, v5036);
          const v5228 = await stdlib.Array_asyncReduce([v2949], v5191, async([v5230], v5229, v5231) => {
            const v5232 = v5229[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
            const v5233 = v5229[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
            const v5234 = stdlib.tokenEq(v5230, v5037);
            const v5235 = v5232 ? true : v5234;
            const v5236 = stdlib.add(v5233, stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1'));
            const v5237 = [false, v5236];
            const v5238 = [true, v5233];
            const v5239 = v5235 ? v5238 : v5237;
            
            return v5239;})
          const v5240 = v5228[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
          const v5242 = v5048[v5240];
          const v5243 = stdlib.Array_set(v5242, '0', v5226);
          const v5244 = stdlib.Array_set(v5048, v5240, v5243);
          sim_r.txns.push({
            kind: 'from',
            to: v2933,
            tok: v5037
            });
          const v5246 = v2974.activeOffers;
          const v5248 = v2974.continue;
          const v5252 = v2974.networkTokenBalance;
          const v5253 = v2974.nonNetworkTokenBalance;
          const v5254 = v2974.offers;
          const v5256 = stdlib.safeAdd(v5254, stdlib.checkedBigNumberify('./index.rsh:260:47:decimal', stdlib.UInt_max, '1'));
          const v5258 = stdlib.safeAdd(v5246, stdlib.checkedBigNumberify('./index.rsh:261:59:decimal', stdlib.UInt_max, '1'));
          const v5259 = ['Some', v3345];
          const v5260 = {
            acceptedAddress: v5259,
            activeOffers: v5258,
            config: v3028,
            continue: v5248,
            freeze: true,
            loanTerms: v3035,
            loanTermsAccepted: true,
            networkTokenBalance: v5252,
            nonNetworkTokenBalance: v5253,
            offers: v5256
            };
          const v9977 = v5260;
          const v9979 = v5244;
          const v9980 = v5190;
          const v9981 = v5260.continue;
          const v9982 = v5260.activeOffers;
          const v9983 = stdlib.eq(v9982, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
          const v9984 = v9983 ? false : true;
          const v9985 = v9981 ? true : v9984;
          if (v9985) {
            const v9986 = v5260.config;
            const v9987 = v5260.loanTerms;
            sim_r.isHalt = false;
            }
          else {
            const v9988 = v5260.config;
            const v9989 = v5260.loanTerms;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'user_cancelOffer0_170': {
          const v5437 = v3346[1];
          
          break;
          }
        case 'user_makeOffer0_170': {
          const v5959 = v3346[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
  switch (v3346[0]) {
    case 'Admin_api_acceptOffer0_170': {
      const v3349 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
      const v3871 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_updateLoanTerms_info0_170': {
      const v4393 = v3346[1];
      return;
      break;
      }
    case 'user_acceptLoan0_170': {
      const v4915 = v3346[1];
      undefined /* setApiDetails */;
      const v4979 = v2974.freeze;
      stdlib.assert(v4979, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:247:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Contract is frozen',
        who: 'user_acceptLoan'
        });
      const v4983 = v2974.loanTermsAccepted;
      const v4984 = v4983 ? false : true;
      stdlib.assert(v4984, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Offer already accepted',
        who: 'user_acceptLoan'
        });
      const v4986 = v2934.prefersNetworkToken;
      const v4987 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
      const v4988 = [v2956, v4987];
      const v4989 = [v2956, v2939];
      const v4990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4989];
      const v4991 = v4986 ? v4988 : v4990;
      const v5034 = v4991[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
      const v5035 = v4991[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
      const v5036 = v5035[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
      const v5037 = v5035[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
      const v5042 = stdlib.add(v2982, v5034);
      ;
      const v5043 = v2981[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1')];
      const v5044 = v5043[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '0')];
      const v5045 = stdlib.add(v5044, v5036);
      const v5047 = stdlib.Array_set(v5043, '0', v5045);
      const v5048 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1'), v5047);
      ;
      const v5177 = null;
      const v5178 = await txn1.getOutput('user_acceptLoan', 'v5177', ctc0, v5177);
      if (v1672) {
        stdlib.protect(ctc0, await interact.out(v4915, v5178), {
          at: './index.rsh:246:11:application',
          fs: ['at ./index.rsh:246:11:application call to [unknown function] (defined at: ./index.rsh:246:11:function exp)', 'at ./index.rsh:256:12:application call to "k" (defined at: ./index.rsh:255:13:function exp)', 'at ./index.rsh:255:13:application call to [unknown function] (defined at: ./index.rsh:255:13:function exp)'],
          msg: 'out',
          who: 'user_acceptLoan'
          });
        }
      else {
        }
      
      const v5190 = stdlib.sub(v5042, v5034);
      ;
      const v5191 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v5210 = await stdlib.Array_asyncReduce([v2949], v5191, async([v5212], v5211, v5213) => {
        const v5214 = v5211[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
        const v5215 = v5211[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
        const v5216 = stdlib.tokenEq(v5212, v5037);
        const v5217 = v5214 ? true : v5216;
        const v5218 = stdlib.add(v5215, stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1'));
        const v5219 = [false, v5218];
        const v5220 = [true, v5215];
        const v5221 = v5217 ? v5220 : v5219;
        
        return v5221;})
      const v5222 = v5210[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
      const v5224 = v5048[v5222];
      const v5225 = v5224[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
      const v5226 = stdlib.sub(v5225, v5036);
      const v5228 = await stdlib.Array_asyncReduce([v2949], v5191, async([v5230], v5229, v5231) => {
        const v5232 = v5229[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '0')];
        const v5233 = v5229[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
        const v5234 = stdlib.tokenEq(v5230, v5037);
        const v5235 = v5232 ? true : v5234;
        const v5236 = stdlib.add(v5233, stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1'));
        const v5237 = [false, v5236];
        const v5238 = [true, v5233];
        const v5239 = v5235 ? v5238 : v5237;
        
        return v5239;})
      const v5240 = v5228[stdlib.checkedBigNumberify('./index.rsh:257:36:application', stdlib.UInt_max, '1')];
      const v5242 = v5048[v5240];
      const v5243 = stdlib.Array_set(v5242, '0', v5226);
      const v5244 = stdlib.Array_set(v5048, v5240, v5243);
      ;
      const v5246 = v2974.activeOffers;
      const v5248 = v2974.continue;
      const v5252 = v2974.networkTokenBalance;
      const v5253 = v2974.nonNetworkTokenBalance;
      const v5254 = v2974.offers;
      const v5256 = stdlib.safeAdd(v5254, stdlib.checkedBigNumberify('./index.rsh:260:47:decimal', stdlib.UInt_max, '1'));
      const v5258 = stdlib.safeAdd(v5246, stdlib.checkedBigNumberify('./index.rsh:261:59:decimal', stdlib.UInt_max, '1'));
      const v5259 = ['Some', v3345];
      const v5260 = {
        acceptedAddress: v5259,
        activeOffers: v5258,
        config: v3028,
        continue: v5248,
        freeze: true,
        loanTerms: v3035,
        loanTermsAccepted: true,
        networkTokenBalance: v5252,
        nonNetworkTokenBalance: v5253,
        offers: v5256
        };
      const v9977 = v5260;
      const v9979 = v5244;
      const v9980 = v5190;
      const v9981 = v5260.continue;
      const v9982 = v5260.activeOffers;
      const v9983 = stdlib.eq(v9982, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
      const v9984 = v9983 ? false : true;
      const v9985 = v9981 ? true : v9984;
      if (v9985) {
        const v9986 = v5260.config;
        const v9987 = v5260.loanTerms;
        return;
        }
      else {
        const v9988 = v5260.config;
        const v9989 = v5260.loanTerms;
        return;
        }
      break;
      }
    case 'user_cancelOffer0_170': {
      const v5437 = v3346[1];
      return;
      break;
      }
    case 'user_makeOffer0_170': {
      const v5959 = v3346[1];
      return;
      break;
      }
    }
  
  
  };
export async function _user_cancelOffer5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _user_cancelOffer5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _user_cancelOffer5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    active: ctc3,
    number_of_tokens_to_deposit: ctc1,
    paymentAsset: ctc6,
    prefersNetworkToken: ctc3,
    shouldPayInOnlyNetworkToken: ctc3,
    token: ctc6
    });
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Object({
    duration_in_blocks: ctc1,
    interest: ctc6,
    principle: ctc1
    });
  const ctc11 = stdlib.T_Object({
    acceptedAddress: ctc9,
    activeOffers: ctc1,
    config: ctc7,
    continue: ctc3,
    freeze: ctc3,
    loanTerms: ctc10,
    loanTermsAccepted: ctc3,
    networkTokenBalance: ctc1,
    nonNetworkTokenBalance: ctc1,
    offers: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc4]);
  const ctc16 = stdlib.T_Tuple([ctc10]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Object({
    amount: ctc1,
    shouldPayWithNetworkToken: ctc3
    });
  const ctc19 = stdlib.T_Tuple([ctc18]);
  const ctc20 = stdlib.T_Data({
    Admin_api_acceptOffer0_170: ctc15,
    Admin_api_cancelLoanOfferandWithdrawCollateral0_170: ctc14,
    Admin_api_updateLoanTerms_info0_170: ctc16,
    user_acceptLoan0_170: ctc17,
    user_cancelOffer0_170: ctc14,
    user_makeOffer0_170: ctc19
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10]);
  const v3173 = ctc.selfAddress();
  const v3175 = stdlib.protect(ctc14, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to "runuser_cancelOffer0_170" (defined at: ./index.rsh:312:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'in',
    who: 'user_cancelOffer'
    });
  const v3176 = v3175[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3178 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v3176, ctc4), null);
  const v3179 = {
    None: 0,
    Some: 1
    }[v3178[0]];
  const v3180 = stdlib.eq(v3179, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3180, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:314:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to "runuser_cancelOffer0_170" (defined at: ./index.rsh:312:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Offer id doesn\'t exist!',
    who: 'user_cancelOffer'
    });
  const v3182 = {
    amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    borrower: v2953,
    offerId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    payWithNetworkToken: false,
    rejected: false
    };
  const v3183 = stdlib.fromSome(v3178, v3182);
  const v3184 = v3183.borrower;
  const v3185 = stdlib.addressEq(v3173, v3184);
  stdlib.assert(v3185, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to "runuser_cancelOffer0_170" (defined at: ./index.rsh:312:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Loan owner mismatch',
    who: 'user_cancelOffer'
    });
  const v3187 = v3183.payWithNetworkToken;
  const v3189 = v3183.amount;
  const v3190 = stdlib.ge(v2982, v3189);
  const v3191 = v2981[stdlib.checkedBigNumberify('./index.rsh:320:20:application', stdlib.UInt_max, '1')];
  const v3192 = v3191[stdlib.checkedBigNumberify('./index.rsh:320:20:application', stdlib.UInt_max, '0')];
  const v3194 = stdlib.ge(v3192, v3189);
  const v3195 = v3187 ? v3190 : v3194;
  stdlib.assert(v3195, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:317:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to "runuser_cancelOffer0_170" (defined at: ./index.rsh:312:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Insufficient contract funds',
    who: 'user_cancelOffer'
    });
  const v3202 = ['user_cancelOffer0_170', v3175];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035, v3202],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [stdlib.checkedBigNumberify('./index.rsh:324:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:324:14:decimal', stdlib.UInt_max, '0'), v2939]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
      
      switch (v3346[0]) {
        case 'Admin_api_acceptOffer0_170': {
          const v3349 = v3346[1];
          
          break;
          }
        case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
          const v3871 = v3346[1];
          
          break;
          }
        case 'Admin_api_updateLoanTerms_info0_170': {
          const v4393 = v3346[1];
          
          break;
          }
        case 'user_acceptLoan0_170': {
          const v4915 = v3346[1];
          
          break;
          }
        case 'user_cancelOffer0_170': {
          const v5437 = v3346[1];
          sim_r.txns.push({
            kind: 'api',
            who: "user_cancelOffer"
            });
          const v5515 = v5437[stdlib.checkedBigNumberify('./index.rsh:312:10:spread', stdlib.UInt_max, '0')];
          const v5516 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc1, v5515, ctc4), null);
          const v5520 = {
            amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            borrower: v2953,
            offerId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            payWithNetworkToken: false,
            rejected: false
            };
          const v5521 = stdlib.fromSome(v5516, v5520);
          const v5522 = v5521.borrower;
          const v5525 = v5521.payWithNetworkToken;
          const v5527 = v5521.amount;
          const v5535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
          ;
          ;
          const v5807 = null;
          const v5808 = await txn1.getOutput('user_cancelOffer', 'v5807', ctc0, v5807);
          
          const v5818 = [v5527, v5535];
          const v5819 = [v5527, v2939];
          const v5820 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5819];
          const v5821 = v5525 ? v5818 : v5820;
          const v5823 = v5821[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
          const v5824 = v5821[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
          const v5825 = v5824[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
          const v5826 = v5824[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
          const v5830 = stdlib.sub(v2982, v5823);
          sim_r.txns.push({
            kind: 'from',
            to: v5522,
            tok: undefined /* Nothing */
            });
          const v5831 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v5850 = await stdlib.Array_asyncReduce([v2949], v5831, async([v5852], v5851, v5853) => {
            const v5854 = v5851[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
            const v5855 = v5851[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
            const v5856 = stdlib.tokenEq(v5852, v5826);
            const v5857 = v5854 ? true : v5856;
            const v5858 = stdlib.add(v5855, stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1'));
            const v5859 = [false, v5858];
            const v5860 = [true, v5855];
            const v5861 = v5857 ? v5860 : v5859;
            
            return v5861;})
          const v5862 = v5850[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
          const v5864 = v2981[v5862];
          const v5865 = v5864[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
          const v5866 = stdlib.sub(v5865, v5825);
          const v5868 = await stdlib.Array_asyncReduce([v2949], v5831, async([v5870], v5869, v5871) => {
            const v5872 = v5869[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
            const v5873 = v5869[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
            const v5874 = stdlib.tokenEq(v5870, v5826);
            const v5875 = v5872 ? true : v5874;
            const v5876 = stdlib.add(v5873, stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1'));
            const v5877 = [false, v5876];
            const v5878 = [true, v5873];
            const v5879 = v5875 ? v5878 : v5877;
            
            return v5879;})
          const v5880 = v5868[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
          const v5882 = v2981[v5880];
          const v5883 = stdlib.Array_set(v5882, '0', v5866);
          const v5884 = stdlib.Array_set(v2981, v5880, v5883);
          sim_r.txns.push({
            kind: 'from',
            to: v5522,
            tok: v5826
            });
          await stdlib.simMapSet(sim_r, 0, ctc1, v5515, ctc4, undefined /* Nothing */);
          const v5885 = v2974.acceptedAddress;
          const v5886 = v2974.activeOffers;
          const v5888 = v2974.continue;
          const v5889 = v2974.freeze;
          const v5891 = v2974.loanTermsAccepted;
          const v5892 = v2974.networkTokenBalance;
          const v5893 = v2974.nonNetworkTokenBalance;
          const v5894 = v2974.offers;
          const v5896 = stdlib.safeSub(v5886, stdlib.checkedBigNumberify('./index.rsh:336:59:decimal', stdlib.UInt_max, '1'));
          if (v5525) {
            const v5900 = stdlib.safeSub(v5892, v5527);
            const v5901 = {
              acceptedAddress: v5885,
              activeOffers: v5896,
              config: v3028,
              continue: v5888,
              freeze: v5889,
              loanTerms: v3035,
              loanTermsAccepted: v5891,
              networkTokenBalance: v5900,
              nonNetworkTokenBalance: v5893,
              offers: v5894
              };
            const v10202 = v5901;
            const v10204 = v5884;
            const v10205 = v5830;
            const v10206 = v5901.continue;
            const v10207 = v5901.activeOffers;
            const v10208 = stdlib.eq(v10207, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
            const v10209 = v10208 ? false : true;
            const v10210 = v10206 ? true : v10209;
            if (v10210) {
              const v10211 = v5901.config;
              const v10212 = v5901.loanTerms;
              sim_r.isHalt = false;
              }
            else {
              const v10213 = v5901.config;
              const v10214 = v5901.loanTerms;
              sim_r.isHalt = false;
              }}
          else {
            const v5905 = stdlib.safeSub(v5893, v5527);
            const v5906 = {
              acceptedAddress: v5885,
              activeOffers: v5896,
              config: v3028,
              continue: v5888,
              freeze: v5889,
              loanTerms: v3035,
              loanTermsAccepted: v5891,
              networkTokenBalance: v5892,
              nonNetworkTokenBalance: v5905,
              offers: v5894
              };
            const v10227 = v5906;
            const v10229 = v5884;
            const v10230 = v5830;
            const v10231 = v5906.continue;
            const v10232 = v5906.activeOffers;
            const v10233 = stdlib.eq(v10232, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
            const v10234 = v10233 ? false : true;
            const v10235 = v10231 ? true : v10234;
            if (v10235) {
              const v10236 = v5906.config;
              const v10237 = v5906.loanTerms;
              sim_r.isHalt = false;
              }
            else {
              const v10238 = v5906.config;
              const v10239 = v5906.loanTerms;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'user_makeOffer0_170': {
          const v5959 = v3346[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
  switch (v3346[0]) {
    case 'Admin_api_acceptOffer0_170': {
      const v3349 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
      const v3871 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_updateLoanTerms_info0_170': {
      const v4393 = v3346[1];
      return;
      break;
      }
    case 'user_acceptLoan0_170': {
      const v4915 = v3346[1];
      return;
      break;
      }
    case 'user_cancelOffer0_170': {
      const v5437 = v3346[1];
      undefined /* setApiDetails */;
      const v5515 = v5437[stdlib.checkedBigNumberify('./index.rsh:312:10:spread', stdlib.UInt_max, '0')];
      const v5516 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc1, v5515, ctc4), null);
      const v5517 = {
        None: 0,
        Some: 1
        }[v5516[0]];
      const v5518 = stdlib.eq(v5517, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5518, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:314:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Offer id doesn\'t exist!',
        who: 'user_cancelOffer'
        });
      const v5520 = {
        amount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        borrower: v2953,
        offerId: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        payWithNetworkToken: false,
        rejected: false
        };
      const v5521 = stdlib.fromSome(v5516, v5520);
      const v5522 = v5521.borrower;
      const v5523 = stdlib.addressEq(v3345, v5522);
      stdlib.assert(v5523, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Loan owner mismatch',
        who: 'user_cancelOffer'
        });
      const v5525 = v5521.payWithNetworkToken;
      const v5527 = v5521.amount;
      const v5528 = stdlib.ge(v2982, v5527);
      const v5529 = v2981[stdlib.checkedBigNumberify('./index.rsh:320:20:application', stdlib.UInt_max, '1')];
      const v5530 = v5529[stdlib.checkedBigNumberify('./index.rsh:320:20:application', stdlib.UInt_max, '0')];
      const v5532 = stdlib.ge(v5530, v5527);
      const v5533 = v5525 ? v5528 : v5532;
      stdlib.assert(v5533, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:317:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Insufficient contract funds',
        who: 'user_cancelOffer'
        });
      const v5535 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
      ;
      ;
      const v5807 = null;
      const v5808 = await txn1.getOutput('user_cancelOffer', 'v5807', ctc0, v5807);
      if (v1672) {
        stdlib.protect(ctc0, await interact.out(v5437, v5808), {
          at: './index.rsh:312:11:application',
          fs: ['at ./index.rsh:312:11:application call to [unknown function] (defined at: ./index.rsh:312:11:function exp)', 'at ./index.rsh:326:12:application call to "k" (defined at: ./index.rsh:325:13:function exp)', 'at ./index.rsh:325:13:application call to [unknown function] (defined at: ./index.rsh:325:13:function exp)'],
          msg: 'out',
          who: 'user_cancelOffer'
          });
        }
      else {
        }
      
      const v5818 = [v5527, v5535];
      const v5819 = [v5527, v2939];
      const v5820 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5819];
      const v5821 = v5525 ? v5818 : v5820;
      const v5823 = v5821[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
      const v5824 = v5821[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
      const v5825 = v5824[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
      const v5826 = v5824[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
      const v5830 = stdlib.sub(v2982, v5823);
      ;
      const v5831 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v5850 = await stdlib.Array_asyncReduce([v2949], v5831, async([v5852], v5851, v5853) => {
        const v5854 = v5851[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
        const v5855 = v5851[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
        const v5856 = stdlib.tokenEq(v5852, v5826);
        const v5857 = v5854 ? true : v5856;
        const v5858 = stdlib.add(v5855, stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1'));
        const v5859 = [false, v5858];
        const v5860 = [true, v5855];
        const v5861 = v5857 ? v5860 : v5859;
        
        return v5861;})
      const v5862 = v5850[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
      const v5864 = v2981[v5862];
      const v5865 = v5864[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
      const v5866 = stdlib.sub(v5865, v5825);
      const v5868 = await stdlib.Array_asyncReduce([v2949], v5831, async([v5870], v5869, v5871) => {
        const v5872 = v5869[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '0')];
        const v5873 = v5869[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
        const v5874 = stdlib.tokenEq(v5870, v5826);
        const v5875 = v5872 ? true : v5874;
        const v5876 = stdlib.add(v5873, stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1'));
        const v5877 = [false, v5876];
        const v5878 = [true, v5873];
        const v5879 = v5875 ? v5878 : v5877;
        
        return v5879;})
      const v5880 = v5868[stdlib.checkedBigNumberify('./index.rsh:331:37:application', stdlib.UInt_max, '1')];
      const v5882 = v2981[v5880];
      const v5883 = stdlib.Array_set(v5882, '0', v5866);
      const v5884 = stdlib.Array_set(v2981, v5880, v5883);
      ;
      await stdlib.mapSet(map0, ctc1, v5515, ctc4, undefined /* Nothing */);
      const v5885 = v2974.acceptedAddress;
      const v5886 = v2974.activeOffers;
      const v5888 = v2974.continue;
      const v5889 = v2974.freeze;
      const v5891 = v2974.loanTermsAccepted;
      const v5892 = v2974.networkTokenBalance;
      const v5893 = v2974.nonNetworkTokenBalance;
      const v5894 = v2974.offers;
      const v5896 = stdlib.safeSub(v5886, stdlib.checkedBigNumberify('./index.rsh:336:59:decimal', stdlib.UInt_max, '1'));
      if (v5525) {
        const v5900 = stdlib.safeSub(v5892, v5527);
        const v5901 = {
          acceptedAddress: v5885,
          activeOffers: v5896,
          config: v3028,
          continue: v5888,
          freeze: v5889,
          loanTerms: v3035,
          loanTermsAccepted: v5891,
          networkTokenBalance: v5900,
          nonNetworkTokenBalance: v5893,
          offers: v5894
          };
        const v10202 = v5901;
        const v10204 = v5884;
        const v10205 = v5830;
        const v10206 = v5901.continue;
        const v10207 = v5901.activeOffers;
        const v10208 = stdlib.eq(v10207, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
        const v10209 = v10208 ? false : true;
        const v10210 = v10206 ? true : v10209;
        if (v10210) {
          const v10211 = v5901.config;
          const v10212 = v5901.loanTerms;
          return;
          }
        else {
          const v10213 = v5901.config;
          const v10214 = v5901.loanTerms;
          return;
          }}
      else {
        const v5905 = stdlib.safeSub(v5893, v5527);
        const v5906 = {
          acceptedAddress: v5885,
          activeOffers: v5896,
          config: v3028,
          continue: v5888,
          freeze: v5889,
          loanTerms: v3035,
          loanTermsAccepted: v5891,
          networkTokenBalance: v5892,
          nonNetworkTokenBalance: v5905,
          offers: v5894
          };
        const v10227 = v5906;
        const v10229 = v5884;
        const v10230 = v5830;
        const v10231 = v5906.continue;
        const v10232 = v5906.activeOffers;
        const v10233 = stdlib.eq(v10232, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
        const v10234 = v10233 ? false : true;
        const v10235 = v10231 ? true : v10234;
        if (v10235) {
          const v10236 = v5906.config;
          const v10237 = v5906.loanTerms;
          return;
          }
        else {
          const v10238 = v5906.config;
          const v10239 = v5906.loanTerms;
          return;
          }}
      break;
      }
    case 'user_makeOffer0_170': {
      const v5959 = v3346[1];
      return;
      break;
      }
    }
  
  
  };
export async function _user_makeOffer5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _user_makeOffer5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _user_makeOffer5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    amount: ctc1,
    borrower: ctc2,
    offerId: ctc1,
    payWithNetworkToken: ctc3,
    rejected: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Object({
    active: ctc3,
    number_of_tokens_to_deposit: ctc1,
    paymentAsset: ctc6,
    prefersNetworkToken: ctc3,
    shouldPayInOnlyNetworkToken: ctc3,
    token: ctc6
    });
  const ctc8 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Object({
    duration_in_blocks: ctc1,
    interest: ctc6,
    principle: ctc1
    });
  const ctc11 = stdlib.T_Object({
    acceptedAddress: ctc9,
    activeOffers: ctc1,
    config: ctc7,
    continue: ctc3,
    freeze: ctc3,
    loanTerms: ctc10,
    loanTermsAccepted: ctc3,
    networkTokenBalance: ctc1,
    nonNetworkTokenBalance: ctc1,
    offers: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc14 = stdlib.T_Object({
    amount: ctc1,
    shouldPayWithNetworkToken: ctc3
    });
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc10]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Data({
    Admin_api_acceptOffer0_170: ctc16,
    Admin_api_cancelLoanOfferandWithdrawCollateral0_170: ctc17,
    Admin_api_updateLoanTerms_info0_170: ctc18,
    user_acceptLoan0_170: ctc19,
    user_cancelOffer0_170: ctc17,
    user_makeOffer0_170: ctc15
    });
  
  const map0_ctc = ctc5;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  
  const [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10]);
  const v3151 = stdlib.protect(ctc15, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:269:67:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp)', 'at ./index.rsh:115:42:application call to "runuser_makeOffer0_170" (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'in',
    who: 'user_makeOffer'
    });
  const v3152 = v3151[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3153 = v3152.amount;
  const v3154 = v3152.shouldPayWithNetworkToken;
  const v3159 = v2974.freeze;
  stdlib.assert(v3159, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:269:67:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp)', 'at ./index.rsh:115:42:application call to "runuser_makeOffer0_170" (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)'],
    msg: 'Contract is frozen',
    who: 'user_makeOffer'
    });
  const v3163 = v2934.shouldPayInOnlyNetworkToken;
  const v3171 = ['user_makeOffer0_170', v3151];
  
  const v3331 = v3163 ? true : v3154;
  const v3333 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
  const v3334 = [v3153, v3333];
  const v3335 = [v3153, v2939];
  const v3336 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3335];
  const v3337 = v3331 ? v3334 : v3336;
  const v3338 = v3337[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
  const v3339 = v3337[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
  const v3340 = v3339[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2933, v2934, v2935, v2938, v2939, v2949, v2953, v2956, v2974, v2981, v2982, v3028, v3035, v3171],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc20],
    pay: [v3338, [[v3340, v2939]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
      
      switch (v3346[0]) {
        case 'Admin_api_acceptOffer0_170': {
          const v3349 = v3346[1];
          
          break;
          }
        case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
          const v3871 = v3346[1];
          
          break;
          }
        case 'Admin_api_updateLoanTerms_info0_170': {
          const v4393 = v3346[1];
          
          break;
          }
        case 'user_acceptLoan0_170': {
          const v4915 = v3346[1];
          
          break;
          }
        case 'user_cancelOffer0_170': {
          const v5437 = v3346[1];
          
          break;
          }
        case 'user_makeOffer0_170': {
          const v5959 = v3346[1];
          sim_r.txns.push({
            kind: 'api',
            who: "user_makeOffer"
            });
          const v6064 = v5959[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '0')];
          const v6065 = v6064.amount;
          const v6066 = v6064.shouldPayWithNetworkToken;
          const v6072 = v2934.shouldPayInOnlyNetworkToken;
          const v6071 = v6072 ? true : v6066;
          const v6073 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
          const v6074 = [v6065, v6073];
          const v6075 = [v6065, v2939];
          const v6076 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6075];
          const v6077 = v6071 ? v6074 : v6076;
          const v6078 = v6077[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
          const v6079 = v6077[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
          const v6080 = v6079[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
          const v6086 = stdlib.add(v2982, v6078);
          sim_r.txns.push({
            amt: v6078,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v6087 = v2981[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1')];
          const v6088 = v6087[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '0')];
          const v6089 = stdlib.add(v6088, v6080);
          const v6091 = stdlib.Array_set(v6087, '0', v6089);
          const v6092 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1'), v6091);
          sim_r.txns.push({
            amt: v6080,
            kind: 'to',
            tok: v2939
            });
          const v6441 = v2974.offers;
          const v6443 = {
            amount: v6065,
            borrower: v3345,
            offerId: v6441,
            payWithNetworkToken: v6071,
            rejected: false
            };
          await stdlib.simMapSet(sim_r, 0, ctc1, v6441, ctc4, v6443);
          const v6446 = await txn1.getOutput('user_makeOffer', 'v6443', ctc4, v6443);
          
          const v6459 = v2974.acceptedAddress;
          const v6460 = v2974.activeOffers;
          const v6462 = v2974.continue;
          const v6465 = v2974.loanTermsAccepted;
          const v6466 = v2974.networkTokenBalance;
          const v6467 = v2974.nonNetworkTokenBalance;
          const v6470 = stdlib.safeAdd(v6441, stdlib.checkedBigNumberify('./index.rsh:293:47:decimal', stdlib.UInt_max, '1'));
          const v6472 = stdlib.safeAdd(v6460, stdlib.checkedBigNumberify('./index.rsh:294:59:decimal', stdlib.UInt_max, '1'));
          if (v6071) {
            const v6474 = stdlib.safeAdd(v6466, v6065);
            const v6475 = {
              acceptedAddress: v6459,
              activeOffers: v6472,
              config: v3028,
              continue: v6462,
              freeze: true,
              loanTerms: v3035,
              loanTermsAccepted: v6465,
              networkTokenBalance: v6474,
              nonNetworkTokenBalance: v6467,
              offers: v6470
              };
            const v10452 = v6475;
            const v10454 = v6092;
            const v10455 = v6086;
            const v10456 = v6475.continue;
            const v10457 = v6475.activeOffers;
            const v10458 = stdlib.eq(v10457, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
            const v10459 = v10458 ? false : true;
            const v10460 = v10456 ? true : v10459;
            if (v10460) {
              const v10461 = v6475.config;
              const v10462 = v6475.loanTerms;
              sim_r.isHalt = false;
              }
            else {
              const v10463 = v6475.config;
              const v10464 = v6475.loanTerms;
              sim_r.isHalt = false;
              }}
          else {
            const v6478 = stdlib.safeAdd(v6467, v6065);
            const v6479 = {
              acceptedAddress: v6459,
              activeOffers: v6472,
              config: v3028,
              continue: v6462,
              freeze: true,
              loanTerms: v3035,
              loanTermsAccepted: v6465,
              networkTokenBalance: v6466,
              nonNetworkTokenBalance: v6478,
              offers: v6470
              };
            const v10477 = v6479;
            const v10479 = v6092;
            const v10480 = v6086;
            const v10481 = v6479.continue;
            const v10482 = v6479.activeOffers;
            const v10483 = stdlib.eq(v10482, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
            const v10484 = v10483 ? false : true;
            const v10485 = v10481 ? true : v10484;
            if (v10485) {
              const v10486 = v6479.config;
              const v10487 = v6479.loanTerms;
              sim_r.isHalt = false;
              }
            else {
              const v10488 = v6479.config;
              const v10489 = v6479.loanTerms;
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc7, ctc6, ctc2, ctc6, ctc8, ctc2, ctc1, ctc11, ctc13, ctc1, ctc7, ctc10, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [v3346], secs: v3348, time: v3347, didSend: v1672, from: v3345 } = txn1;
  switch (v3346[0]) {
    case 'Admin_api_acceptOffer0_170': {
      const v3349 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_cancelLoanOfferandWithdrawCollateral0_170': {
      const v3871 = v3346[1];
      return;
      break;
      }
    case 'Admin_api_updateLoanTerms_info0_170': {
      const v4393 = v3346[1];
      return;
      break;
      }
    case 'user_acceptLoan0_170': {
      const v4915 = v3346[1];
      return;
      break;
      }
    case 'user_cancelOffer0_170': {
      const v5437 = v3346[1];
      return;
      break;
      }
    case 'user_makeOffer0_170': {
      const v5959 = v3346[1];
      undefined /* setApiDetails */;
      const v6064 = v5959[stdlib.checkedBigNumberify('./index.rsh:269:10:spread', stdlib.UInt_max, '0')];
      const v6065 = v6064.amount;
      const v6066 = v6064.shouldPayWithNetworkToken;
      const v6068 = v2974.freeze;
      stdlib.assert(v6068, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp)', 'at ./index.rsh:269:67:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp)', 'at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp)', 'at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)'],
        msg: 'Contract is frozen',
        who: 'user_makeOffer'
        });
      const v6072 = v2934.shouldPayInOnlyNetworkToken;
      const v6071 = v6072 ? true : v6066;
      const v6073 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2939];
      const v6074 = [v6065, v6073];
      const v6075 = [v6065, v2939];
      const v6076 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v6075];
      const v6077 = v6071 ? v6074 : v6076;
      const v6078 = v6077[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
      const v6079 = v6077[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '1')];
      const v6080 = v6079[stdlib.checkedBigNumberify('./index.rsh:138:14:array', stdlib.UInt_max, '0')];
      const v6086 = stdlib.add(v2982, v6078);
      ;
      const v6087 = v2981[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1')];
      const v6088 = v6087[stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '0')];
      const v6089 = stdlib.add(v6088, v6080);
      const v6091 = stdlib.Array_set(v6087, '0', v6089);
      const v6092 = stdlib.Array_set(v2981, stdlib.checkedBigNumberify('./index.rsh:115:42:dot', stdlib.UInt_max, '1'), v6091);
      ;
      const v6441 = v2974.offers;
      const v6443 = {
        amount: v6065,
        borrower: v3345,
        offerId: v6441,
        payWithNetworkToken: v6071,
        rejected: false
        };
      await stdlib.mapSet(map0, ctc1, v6441, ctc4, v6443);
      const v6446 = await txn1.getOutput('user_makeOffer', 'v6443', ctc4, v6443);
      if (v1672) {
        stdlib.protect(ctc0, await interact.out(v5959, v6446), {
          at: './index.rsh:269:11:application',
          fs: ['at ./index.rsh:269:11:application call to [unknown function] (defined at: ./index.rsh:269:11:function exp)', 'at ./index.rsh:284:12:application call to "k" (defined at: ./index.rsh:276:13:function exp)', 'at ./index.rsh:276:13:application call to [unknown function] (defined at: ./index.rsh:276:13:function exp)'],
          msg: 'out',
          who: 'user_makeOffer'
          });
        }
      else {
        }
      
      const v6459 = v2974.acceptedAddress;
      const v6460 = v2974.activeOffers;
      const v6462 = v2974.continue;
      const v6465 = v2974.loanTermsAccepted;
      const v6466 = v2974.networkTokenBalance;
      const v6467 = v2974.nonNetworkTokenBalance;
      const v6470 = stdlib.safeAdd(v6441, stdlib.checkedBigNumberify('./index.rsh:293:47:decimal', stdlib.UInt_max, '1'));
      const v6472 = stdlib.safeAdd(v6460, stdlib.checkedBigNumberify('./index.rsh:294:59:decimal', stdlib.UInt_max, '1'));
      if (v6071) {
        const v6474 = stdlib.safeAdd(v6466, v6065);
        const v6475 = {
          acceptedAddress: v6459,
          activeOffers: v6472,
          config: v3028,
          continue: v6462,
          freeze: true,
          loanTerms: v3035,
          loanTermsAccepted: v6465,
          networkTokenBalance: v6474,
          nonNetworkTokenBalance: v6467,
          offers: v6470
          };
        const v10452 = v6475;
        const v10454 = v6092;
        const v10455 = v6086;
        const v10456 = v6475.continue;
        const v10457 = v6475.activeOffers;
        const v10458 = stdlib.eq(v10457, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
        const v10459 = v10458 ? false : true;
        const v10460 = v10456 ? true : v10459;
        if (v10460) {
          const v10461 = v6475.config;
          const v10462 = v6475.loanTerms;
          return;
          }
        else {
          const v10463 = v6475.config;
          const v10464 = v6475.loanTerms;
          return;
          }}
      else {
        const v6478 = stdlib.safeAdd(v6467, v6065);
        const v6479 = {
          acceptedAddress: v6459,
          activeOffers: v6472,
          config: v3028,
          continue: v6462,
          freeze: true,
          loanTerms: v3035,
          loanTermsAccepted: v6465,
          networkTokenBalance: v6466,
          nonNetworkTokenBalance: v6478,
          offers: v6470
          };
        const v10477 = v6479;
        const v10479 = v6092;
        const v10480 = v6086;
        const v10481 = v6479.continue;
        const v10482 = v6479.activeOffers;
        const v10483 = stdlib.eq(v10482, stdlib.checkedBigNumberify('./index.rsh:139:74:decimal', stdlib.UInt_max, '0'));
        const v10484 = v10483 ? false : true;
        const v10485 = v10481 ? true : v10484;
        if (v10485) {
          const v10486 = v6479.config;
          const v10487 = v6479.loanTerms;
          return;
          }
        else {
          const v10488 = v6479.config;
          const v10489 = v6479.loanTerms;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Admin_api_acceptOffer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_api_acceptOffer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_api_acceptOffer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Admin_api_acceptOffer5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_api_cancelLoanOfferandWithdrawCollateral(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_api_cancelLoanOfferandWithdrawCollateral expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_api_cancelLoanOfferandWithdrawCollateral expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Admin_api_cancelLoanOfferandWithdrawCollateral5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_api_updateLoanTerms_info(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_api_updateLoanTerms_info expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_api_updateLoanTerms_info expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Admin_api_updateLoanTerms_info5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function user_acceptLoan(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for user_acceptLoan expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for user_acceptLoan expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _user_acceptLoan5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function user_cancelOffer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for user_cancelOffer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for user_cancelOffer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _user_cancelOffer5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function user_makeOffer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for user_makeOffer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for user_makeOffer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _user_makeOffer5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Admin_api_acceptOffer((uint64,address,uint64,byte,byte))void`, `Admin_api_cancelLoanOfferandWithdrawCollateral(uint64)void`, `Admin_api_updateLoanTerms_info((uint64,uint64,uint64))void`, `_reachp_0((uint64,(byte,uint64,uint64,byte,byte,uint64),uint64,(byte,uint64,uint64,byte,byte,uint64),(uint64,uint64,uint64),address,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[50])))void`, `user_acceptLoan()void`, `user_cancelOffer(uint64)void`, `user_makeOffer((uint64,byte))(uint64,address,uint64,byte,byte)`],
    pure: [`info_config()(byte,uint64,uint64,byte,byte,uint64)`, `info_loanTerms()(uint64,uint64,uint64)`, `info_offer(uint64)(byte,byte[50])`],
    sigs: [`Admin_api_acceptOffer((uint64,address,uint64,byte,byte))void`, `Admin_api_cancelLoanOfferandWithdrawCollateral(uint64)void`, `Admin_api_updateLoanTerms_info((uint64,uint64,uint64))void`, `_reachp_0((uint64,(byte,uint64,uint64,byte,byte,uint64),uint64,(byte,uint64,uint64,byte,byte,uint64),(uint64,uint64,uint64),address,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[50])))void`, `info_config()(byte,uint64,uint64,byte,byte,uint64)`, `info_loanTerms()(uint64,uint64,uint64)`, `info_offer(uint64)(byte,byte[50])`, `user_acceptLoan()void`, `user_cancelOffer(uint64)void`, `user_makeOffer((uint64,byte))(uint64,address,uint64,byte,byte)`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCATAAEIEQUDMiECb6CNBgQqCfTLAV9nKTsmBAEAAQEAAQIxGEEKXypkSSJbNQEkWzUCKGQpZFArZFCCDQQKHSZJBA+bHlIENTSQYAQ3EMc0BFW3EykEZOtyOQR5bZGaBIOlASQEmCFntgTQYhyyBNaJqDkE39kjKAT6Ad9hNhoAjg0J1AnfCg4LTQoLCbkKEQBkAE0LUAABCckLWQA2GgE1CySvKDQLUFA1CyEENAESRIgLZjQLIls1DDQLVwgzNROABLESOMI0DBZQNBNQsDQMiAsxNBMiVY0GCdAJ0wnWCdkJ3AnfQv+zNhoBFzULJK8pNAsWUCEMr1BQNQtC/6s2GgE1CySvKzQLUIEar1BQNQtC/5YxADQhEjQeMQASEUQ0GVdeARcURDQZV0UBF0QqIQavKDQTVwEyVygIUIgKzkk1CyJVIxJEKjUMgAgAAAAAAAANsDQMULA0DDUEKSSvNBtQJK9QKFAoUDQLiAuCVwggUDQZVyEIUDQVUDQZV0QBUClQNBRQKVA0GVdfCFA0GVdnCFA0GVdvCFAyBjUYNRk0GVdEARc0GSEHWyITEUEJojQZVykbNRU0GVdGGDUUNCE0IFA0HxZQNB5QNB0WUDQcUDQbUDQaFlA0GVA0F1A0FhZQNBVQNBRQIQQyBjUCNQEoSwFXAH9nKUsBV39/ZytMV/55Zyo0ARY0AhZQZzEZIhJEiArONANAAAqABBUffHU0BFCwI0MxADQhEjQeMQASEUQ0GVdeARdJNQwURDQZV0UBF0QqNQuACAAAAAAAAA/jNAtQsDQLNQQ0GVcAITQZVyEIUDQVUChQKVA0FFA0DBZRBwhQNBlXXwhQNBlXZwhQNBlXbwhQMgY1GDUZQv8PMQA0IRI0HjEAEhFENBlXXgEXSTUMFEQqNQuACAAAAAAAABIKNAtQsDQLNQQ0GVcAITQZVyEIUDQVUDQZV0QBUDQZV0UBUDQTVwEYUDQMFlEHCFA0GVdfCFA0GVdnCFA0GVdvCFAyBjUYNRlC/qE0GVdFARdENBlXXgEXFEQkrzQaFjQdFlBQNBoWJK80HRZQUDQgVxEBF01JNQwiWzUlNAxXCBBJNQsiWzUkNAskWzUjNCWICV40F1cRETULNBc0C0kiWzQkCBZcAFwRNSI0JDQdiAlbKjULgAgAAAAAAAAUOTQLULA0CzUENCU0IYgJHyENr0k1EzUMIjUQNBwkNBALJFgXNRE0DCNbNQsoNAsjCBZQKTQLFlA0DFcAARc0ETQjEhFNNQw0ECMISTUQIQgMQP/HNBM1CyI1DTQcJDQNCyRYFzUONAsjWzUQKDQQIwgWUCk0EBZQNAtXAAEXNA40IxIRTTULNA0jCEk1DSEIDED/xzQLI1s1DTQkNCM0IYgH5ikxAFA0GSEHWyMIFlA0FVA0GVdEAVApUDQUUClQNBlXXwhQNBlXZwhQNBkhCVsjCBZQMgY0IjQNJQs0IiU0DQslWDQiJTQMI1sLJVgiWzQkCRZcAF00FjQlCDQlCTUWNRc1GDUZQv0jNBMjWzULKiEGryg0CxZQiAd+STUTIlUjEkQkrzQbUCSvUChQKFA0E4gISEk1DFcIIDUoMQA0KBJENAxXMAEXNSc0DCJbNSY0F1cRESJbNCYPNBY0Jg80J01EKjUMgAgAAAAAAAAWrzQMULA0DDUEJK80JhY0HRZQUDQmFiSvNB0WUFA0J01JNSIiWzUMNCJXCBBJNRMiWzUlNBMkWzUkNBY0DAk1IzQMNCiIB3chDa9JNSI1EyI1EDQcJDQQCyRYFzURNBMjWzUMKDQMIwgWUCk0DBZQNBNXAAEXNBE0JBIRTTUTNBAjCEk1ECEIDED/xzQiNQwiNQ00HCQ0DQskWBc1DjQMI1s1ECg0ECMIFlApNBAWUDQMVwABFzQONCQSEU01DDQNIwhJNQ0hCAxA/8c0DCNbNQ00FzQNJQs0FyU0DQslWDQXJTQTI1sLJVgiWzQlCRZcAF01DDQlNCQ0KIgGGyEOKDQLFlC8Ik4CTTQHCDUHNBlXACE1EzQZV0QBFzUSNBlXRQEXNRE0GVdeARc1EDQZIQ9bNQ80GSEQWzUONBkhCVs1DTQZIQdbIwk1CzQnQQSjNBM0CxZQNBVQNBIWUQcIUDQRFlEHCFA0FFA0EBZRBwhQNA80JgkWUDQOFlA0DRZQMgY0DDQjNRY1FzUYNRlC+yw0E1cBCUk1CyJbNQ00GVdFARdENCBXEgEXNAtXCAEXETUMJK80DRY0HRZQUDQNFiSvNB0WUFA0DE1JNQ8iWzULNA9XCBAiWzUONBY0Cwg1IzQLiAXcNBdXERE1CzQXNAtJIls0DggWXABcETUiNA40HYgF2TQZIQlbNQs0DRYxAFA0CxZQNAwWUQcIUChQNQ4hDig0CxZQNA6IBfWACAAAAAAAABkrNA5QsDQONQQ0GVcAITUTNBlXRAEXNRI0GVdeARc1ETQZIQ9bNRA0GSEQWzUPNAsjCDUONBkhB1sjCDULNAxBA7w0EzQLFlA0FVA0EhZRBwhQKVA0FFA0ERZRBwhQNBA0DQgWUDQPFlA0DhZQMgY0IjQjNRY1FzUYNRlC+gk0ASEEDEEDJzQBIQUSRIgEyTQNNQQxGSISREL6ZzQBIQQMQQPoNAEhBRJEiASsNAw1BEL/4DQBIQQMQQPgNAEhBRJEiASUKiEGryg0CxZQiAQkNQRC/76AOwAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC+Hkkr4ABBDQLFlAhDK9QUDULQvhmJK+AAQU0C1AhEa9QUDULQvhUMQA1ITQLIls1DDQLVwgbNSA0C4EjWzUfNAtXKxs1DzQLV0YYNQ40C1deIDUeNAuBfls1HYAEOFtilTQMFlA0IFA0HxZQNA9QNA5QNB5QNB0WULA0DIgDViWvSTULSVBJNQxJVwARJK9cAFwASTULSVcRESSvXABcETUNgRCvNB8WXAA0HRZcCDUcNB00HxNEIQqIA7EiNB8yCogDCSEKiAOkIjQdMgqIAvw0ITQgUDQfFlA0D1A0DlA0HlA0HRZQNA1QNBxQgacBr1AjMgZC+McxADUbIzQBEkRJVwAgNSFJVyAbNSBJIRJbNR9JV0MbNQ9JV14YNQ5JV3YgNR5JgZYBWzUdSVeeIjUNV8AQNRw0Cxc1DIAE1RUZFDQMFlCwNAyIAok0ICNbNRo0DVcAETUMNA00DEkiWzQaCBZcAFwANQs0GjQfiAMiNCE0GxJEIRGvNA9QKVAoUDQOUChQJK9QNAtXERFXAAhQJK9QMgY0CyI1FjUXNRg1GUL3zSEFNAESRIgClTQLFzUMgATUDGzWNAwWULA0DIgCEjQhMQASRDQWNCGIAqM0F1cAEUk1DCJbSTULNB80IYgB6TQXNAw0C0kJFlwAXABXEREiWzQdNCGIAdAiNB0yCjIJiALEIjQfMgoyCYgCujEZIQQSRIgCnCIyCjIJiAKvQvfDiAGpIQqIAkA2GgE1C0L98ogBmTYaATULQv64iAGONhoBNQtC/1qIAYM2GgE1C0L2JSIxNBJEIQsxNRJEIjE2EkQiMTcSRIgBY4H3Aq8iIkL3SEL870L9CTYaARc1C0L9GEL2XEL3bUL31EL4P0L5ukL7rjQBIQQSRIgBSTQVNQRC/NY0EzQLFlA0FVA0EhZRBwhQNBEWUQcIUDQUUDQQFlEHCFA0DxZQNA40JgkWUDQNFlAyBjQMNCM1FjUXNRg1GUL2iTQTNAsWUDQVUDQSFlEHCFApUDQUUDQRFlEHCFA0EBZQNA80DQgWUDQOFlAyBjQiNCM1FjUXNRg1GUL2TTQZVykbNQ00GVdGGDUMNCE0HxZQNB0WUDQXUDQWFlA0DVA0DFCB6gGvUCEFMgZC9mlITL9IiSKyASOyELIHsgiziSKyASELshCyFLIRshKziTQBIQQSRIgAazQUNQRC+/g0ASEEEkSIAFsqIQavKDQLFlCIAEQ1BEL73kiJTAlJNQYyCYgAx4kJSUH/7kk1BogAv4lC/AQ2GgEXNQtC/D02GgE1C0L8SLFC/5YjNQOJSSISTDQCEhFEib5JFlEHCEUETVCJSVcAIDUhSVcgGzUgSSESWzUfSVdDIDUeSYFjWzUdSVdrEDUcSVd7IDUbSYGbAVs1GklXo3c1GUmBmgKBIlg1F0mBvAJbNRZJgcQCgRtYNRWB3wKBGFg1FIlJVwAgNSFJgSBbNR9JgShbNR1JVzAiNRdJgVJbNRZJV1obNQ1XdRg1DIk0Bgg1BomxQv7kMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiTEWNAAjCEk1AAlHAzgUMgoSRDgQIQsSRDgRTwISRDgSEkSJNAY0B0oPQf7jQv7rSVcBAEwiVU2JsbIVQv6WsbIJQv6ETEm9QP55SwOI/4tC/nE=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `622`,
    1001: `623`,
    1002: `623`,
    1003: `624`,
    1004: `625`,
    1005: `626`,
    1006: `626`,
    1007: `627`,
    1008: `627`,
    1009: `627`,
    101: `24`,
    1010: `628`,
    1011: `629`,
    1012: `629`,
    1013: `630`,
    1014: `630`,
    1015: `631`,
    1016: `632`,
    1017: `633`,
    1018: `634`,
    1019: `634`,
    102: `24`,
    1020: `635`,
    1021: `635`,
    1022: `636`,
    1023: `637`,
    1024: `638`,
    1025: `639`,
    1026: `639`,
    1027: `640`,
    1028: `640`,
    1029: `641`,
    103: `24`,
    1030: `642`,
    1031: `642`,
    1032: `642`,
    1033: `644`,
    1034: `644`,
    1035: `645`,
    1036: `646`,
    1037: `647`,
    1038: `647`,
    1039: `648`,
    104: `24`,
    1040: `648`,
    1041: `650`,
    1042: `650`,
    1043: `651`,
    1044: `651`,
    1045: `652`,
    1046: `652`,
    1047: `652`,
    1048: `653`,
    1049: `654`,
    105: `24`,
    1050: `654`,
    1051: `655`,
    1052: `656`,
    1053: `656`,
    1054: `657`,
    1055: `657`,
    1056: `658`,
    1057: `659`,
    1058: `660`,
    1059: `661`,
    106: `24`,
    1060: `662`,
    1061: `663`,
    1062: `663`,
    1063: `664`,
    1064: `665`,
    1065: `665`,
    1066: `666`,
    1067: `666`,
    1068: `666`,
    1069: `667`,
    107: `24`,
    1070: `668`,
    1071: `669`,
    1072: `670`,
    1073: `670`,
    1074: `671`,
    1075: `672`,
    1076: `673`,
    1077: `674`,
    1078: `674`,
    1079: `675`,
    108: `24`,
    1080: `675`,
    1081: `675`,
    1082: `676`,
    1083: `677`,
    1084: `677`,
    1085: `678`,
    1086: `678`,
    1087: `678`,
    1088: `679`,
    1089: `680`,
    109: `24`,
    1090: `680`,
    1091: `681`,
    1092: `681`,
    1093: `682`,
    1094: `683`,
    1095: `684`,
    1096: `685`,
    1097: `686`,
    1098: `687`,
    1099: `687`,
    11: `2`,
    110: `24`,
    1100: `688`,
    1101: `688`,
    1102: `689`,
    1103: `689`,
    1104: `690`,
    1105: `691`,
    1106: `692`,
    1107: `692`,
    1108: `693`,
    1109: `694`,
    111: `24`,
    1110: `694`,
    1111: `695`,
    1112: `696`,
    1113: `697`,
    1114: `698`,
    1115: `698`,
    1116: `699`,
    1117: `700`,
    1118: `700`,
    1119: `701`,
    112: `24`,
    1120: `702`,
    1121: `703`,
    1122: `704`,
    1123: `705`,
    1124: `706`,
    1125: `707`,
    1126: `708`,
    1127: `708`,
    1128: `709`,
    1129: `710`,
    113: `24`,
    1130: `711`,
    1131: `711`,
    1132: `712`,
    1133: `713`,
    1134: `713`,
    1135: `714`,
    1136: `714`,
    1137: `715`,
    1138: `716`,
    1139: `716`,
    114: `24`,
    1140: `717`,
    1141: `718`,
    1142: `718`,
    1143: `719`,
    1144: `719`,
    1145: `720`,
    1146: `720`,
    1147: `721`,
    1148: `721`,
    1149: `722`,
    115: `24`,
    1150: `722`,
    1151: `722`,
    1152: `724`,
    1153: `724`,
    1154: `725`,
    1155: `726`,
    1156: `727`,
    1157: `727`,
    1158: `729`,
    1159: `730`,
    116: `24`,
    1160: `730`,
    1161: `731`,
    1162: `732`,
    1163: `733`,
    1164: `733`,
    1165: `734`,
    1166: `735`,
    1167: `736`,
    1168: `736`,
    1169: `736`,
    117: `24`,
    1170: `737`,
    1171: `738`,
    1172: `738`,
    1173: `739`,
    1174: `740`,
    1175: `741`,
    1176: `742`,
    1177: `743`,
    1178: `751`,
    1179: `752`,
    118: `24`,
    1180: `753`,
    1181: `753`,
    1182: `754`,
    1183: `755`,
    1184: `756`,
    1185: `757`,
    1186: `758`,
    1187: `759`,
    1188: `760`,
    1189: `761`,
    119: `24`,
    1190: `762`,
    1191: `762`,
    1192: `763`,
    1193: `763`,
    1194: `763`,
    1195: `764`,
    1196: `765`,
    1197: `765`,
    1198: `766`,
    1199: `766`,
    12: `2`,
    120: `24`,
    1200: `766`,
    1201: `767`,
    1202: `767`,
    1203: `768`,
    1204: `768`,
    1205: `769`,
    1206: `769`,
    1207: `770`,
    1208: `771`,
    1209: `779`,
    121: `24`,
    1210: `779`,
    1211: `780`,
    1212: `780`,
    1213: `780`,
    1214: `781`,
    1215: `782`,
    1216: `782`,
    1217: `783`,
    1218: `783`,
    1219: `784`,
    122: `24`,
    1220: `785`,
    1221: `786`,
    1222: `786`,
    1223: `787`,
    1224: `787`,
    1225: `788`,
    1226: `788`,
    1227: `788`,
    1228: `789`,
    1229: `790`,
    123: `24`,
    1230: `791`,
    1231: `791`,
    1232: `792`,
    1233: `793`,
    1234: `793`,
    1235: `794`,
    1236: `794`,
    1237: `795`,
    1238: `796`,
    1239: `796`,
    124: `24`,
    1240: `797`,
    1241: `798`,
    1242: `806`,
    1243: `807`,
    1244: `807`,
    1245: `808`,
    1246: `808`,
    1247: `808`,
    1248: `808`,
    1249: `808`,
    125: `24`,
    1250: `808`,
    1251: `808`,
    1252: `808`,
    1253: `808`,
    1254: `808`,
    1255: `809`,
    1256: `809`,
    1257: `810`,
    1258: `811`,
    1259: `812`,
    126: `25`,
    1260: `812`,
    1261: `813`,
    1262: `813`,
    1263: `814`,
    1264: `815`,
    1265: `816`,
    1266: `816`,
    1267: `817`,
    1268: `818`,
    1269: `818`,
    127: `25`,
    1270: `819`,
    1271: `820`,
    1272: `821`,
    1273: `822`,
    1274: `822`,
    1275: `823`,
    1276: `824`,
    1277: `825`,
    1278: `826`,
    1279: `826`,
    128: `25`,
    1280: `827`,
    1281: `828`,
    1282: `829`,
    1283: `830`,
    1284: `830`,
    1285: `831`,
    1286: `832`,
    1287: `833`,
    1288: `833`,
    1289: `834`,
    129: `26`,
    1290: `835`,
    1291: `836`,
    1292: `836`,
    1293: `837`,
    1294: `837`,
    1295: `838`,
    1296: `838`,
    1297: `838`,
    1298: `839`,
    1299: `840`,
    13: `2`,
    130: `26`,
    1300: `840`,
    1301: `841`,
    1302: `842`,
    1303: `843`,
    1304: `843`,
    1305: `844`,
    1306: `844`,
    1307: `845`,
    1308: `846`,
    1309: `847`,
    131: `26`,
    1310: `847`,
    1311: `848`,
    1312: `848`,
    1313: `849`,
    1314: `849`,
    1315: `850`,
    1316: `851`,
    1317: `851`,
    1318: `852`,
    1319: `852`,
    132: `26`,
    1320: `854`,
    1321: `854`,
    1322: `855`,
    1323: `855`,
    1324: `855`,
    1325: `856`,
    1326: `856`,
    1327: `857`,
    1328: `858`,
    1329: `859`,
    133: `26`,
    1330: `859`,
    1331: `860`,
    1332: `860`,
    1333: `861`,
    1334: `862`,
    1335: `862`,
    1336: `865`,
    1337: `865`,
    1338: `866`,
    1339: `867`,
    134: `26`,
    1340: `867`,
    1341: `868`,
    1342: `869`,
    1343: `870`,
    1344: `871`,
    1345: `872`,
    1346: `872`,
    1347: `873`,
    1348: `873`,
    1349: `874`,
    135: `26`,
    1350: `875`,
    1351: `876`,
    1352: `876`,
    1353: `877`,
    1354: `878`,
    1355: `878`,
    1356: `879`,
    1357: `880`,
    1358: `881`,
    1359: `882`,
    136: `26`,
    1360: `883`,
    1361: `884`,
    1362: `884`,
    1363: `885`,
    1364: `886`,
    1365: `887`,
    1366: `887`,
    1367: `888`,
    1368: `888`,
    1369: `888`,
    137: `26`,
    1370: `889`,
    1371: `890`,
    1372: `890`,
    1373: `891`,
    1374: `891`,
    1375: `892`,
    1376: `893`,
    1377: `894`,
    1378: `895`,
    1379: `895`,
    138: `26`,
    1380: `896`,
    1381: `896`,
    1382: `897`,
    1383: `898`,
    1384: `899`,
    1385: `900`,
    1386: `900`,
    1387: `901`,
    1388: `901`,
    1389: `902`,
    139: `26`,
    1390: `903`,
    1391: `903`,
    1392: `903`,
    1393: `905`,
    1394: `905`,
    1395: `906`,
    1396: `906`,
    1397: `907`,
    1398: `908`,
    1399: `908`,
    14: `2`,
    140: `26`,
    1400: `911`,
    1401: `911`,
    1402: `912`,
    1403: `913`,
    1404: `913`,
    1405: `914`,
    1406: `915`,
    1407: `916`,
    1408: `917`,
    1409: `918`,
    141: `26`,
    1410: `918`,
    1411: `919`,
    1412: `919`,
    1413: `920`,
    1414: `921`,
    1415: `922`,
    1416: `922`,
    1417: `923`,
    1418: `924`,
    1419: `924`,
    142: `26`,
    1420: `925`,
    1421: `926`,
    1422: `927`,
    1423: `928`,
    1424: `929`,
    1425: `930`,
    1426: `930`,
    1427: `931`,
    1428: `932`,
    1429: `933`,
    143: `26`,
    1430: `933`,
    1431: `934`,
    1432: `934`,
    1433: `934`,
    1434: `935`,
    1435: `936`,
    1436: `936`,
    1437: `937`,
    1438: `937`,
    1439: `938`,
    144: `26`,
    1440: `939`,
    1441: `940`,
    1442: `941`,
    1443: `941`,
    1444: `942`,
    1445: `942`,
    1446: `943`,
    1447: `944`,
    1448: `945`,
    1449: `946`,
    145: `26`,
    1450: `946`,
    1451: `947`,
    1452: `947`,
    1453: `948`,
    1454: `949`,
    1455: `949`,
    1456: `949`,
    1457: `951`,
    1458: `951`,
    1459: `952`,
    146: `26`,
    1460: `953`,
    1461: `954`,
    1462: `954`,
    1463: `955`,
    1464: `955`,
    1465: `956`,
    1466: `956`,
    1467: `957`,
    1468: `958`,
    1469: `959`,
    147: `26`,
    1470: `959`,
    1471: `960`,
    1472: `961`,
    1473: `961`,
    1474: `962`,
    1475: `963`,
    1476: `964`,
    1477: `965`,
    1478: `965`,
    1479: `966`,
    148: `26`,
    1480: `967`,
    1481: `967`,
    1482: `968`,
    1483: `969`,
    1484: `970`,
    1485: `971`,
    1486: `972`,
    1487: `973`,
    1488: `974`,
    1489: `975`,
    149: `26`,
    1490: `975`,
    1491: `976`,
    1492: `977`,
    1493: `978`,
    1494: `978`,
    1495: `979`,
    1496: `980`,
    1497: `980`,
    1498: `981`,
    1499: `981`,
    15: `2`,
    150: `26`,
    1500: `983`,
    1501: `983`,
    1502: `984`,
    1503: `984`,
    1504: `985`,
    1505: `985`,
    1506: `985`,
    1507: `986`,
    1508: `986`,
    1509: `987`,
    151: `26`,
    1510: `988`,
    1511: `988`,
    1512: `989`,
    1513: `990`,
    1514: `992`,
    1515: `993`,
    1516: `994`,
    1517: `994`,
    1518: `995`,
    1519: `997`,
    152: `26`,
    1520: `997`,
    1521: `998`,
    1522: `999`,
    1523: `999`,
    1524: `1000`,
    1525: `1000`,
    1526: `1001`,
    1527: `1001`,
    1528: `1001`,
    1529: `1002`,
    153: `26`,
    1530: `1002`,
    1531: `1003`,
    1532: `1003`,
    1533: `1004`,
    1534: `1004`,
    1535: `1004`,
    1536: `1005`,
    1537: `1006`,
    1538: `1006`,
    1539: `1007`,
    154: `26`,
    1540: `1007`,
    1541: `1008`,
    1542: `1008`,
    1543: `1008`,
    1544: `1009`,
    1545: `1010`,
    1546: `1010`,
    1547: `1011`,
    1548: `1011`,
    1549: `1012`,
    155: `26`,
    1550: `1012`,
    1551: `1012`,
    1552: `1013`,
    1553: `1014`,
    1554: `1014`,
    1555: `1015`,
    1556: `1015`,
    1557: `1016`,
    1558: `1016`,
    1559: `1017`,
    156: `26`,
    1560: `1018`,
    1561: `1018`,
    1562: `1019`,
    1563: `1019`,
    1564: `1020`,
    1565: `1020`,
    1566: `1021`,
    1567: `1022`,
    1568: `1022`,
    1569: `1023`,
    157: `28`,
    1570: `1023`,
    1571: `1024`,
    1572: `1024`,
    1573: `1025`,
    1574: `1026`,
    1575: `1026`,
    1576: `1027`,
    1577: `1027`,
    1578: `1028`,
    1579: `1028`,
    158: `30`,
    1580: `1029`,
    1581: `1030`,
    1582: `1031`,
    1583: `1032`,
    1584: `1032`,
    1585: `1033`,
    1586: `1033`,
    1587: `1034`,
    1588: `1034`,
    1589: `1034`,
    159: `30`,
    1590: `1035`,
    1591: `1035`,
    1592: `1036`,
    1593: `1036`,
    1594: `1037`,
    1595: `1038`,
    1596: `1039`,
    1597: `1039`,
    1598: `1040`,
    1599: `1041`,
    16: `2`,
    160: `30`,
    1600: `1041`,
    1601: `1042`,
    1602: `1043`,
    1603: `1043`,
    1604: `1043`,
    1605: `1044`,
    1606: `1045`,
    1607: `1045`,
    1608: `1046`,
    1609: `1047`,
    161: `31`,
    1610: `1047`,
    1611: `1047`,
    1612: `1048`,
    1613: `1049`,
    1614: `1049`,
    1615: `1050`,
    1616: `1051`,
    1617: `1051`,
    1618: `1052`,
    1619: `1053`,
    162: `31`,
    1620: `1053`,
    1621: `1053`,
    1622: `1054`,
    1623: `1055`,
    1624: `1055`,
    1625: `1056`,
    1626: `1056`,
    1627: `1057`,
    1628: `1058`,
    1629: `1059`,
    163: `33`,
    1630: `1060`,
    1631: `1060`,
    1632: `1061`,
    1633: `1062`,
    1634: `1063`,
    1635: `1063`,
    1636: `1064`,
    1637: `1065`,
    1638: `1066`,
    1639: `1066`,
    164: `34`,
    1640: `1067`,
    1641: `1067`,
    1642: `1068`,
    1643: `1068`,
    1644: `1069`,
    1645: `1069`,
    1646: `1070`,
    1647: `1070`,
    1648: `1071`,
    1649: `1071`,
    165: `35`,
    1650: `1072`,
    1651: `1072`,
    1652: `1073`,
    1653: `1073`,
    1654: `1073`,
    1655: `1075`,
    1656: `1075`,
    1657: `1076`,
    1658: `1076`,
    1659: `1076`,
    166: `36`,
    1660: `1077`,
    1661: `1078`,
    1662: `1078`,
    1663: `1079`,
    1664: `1080`,
    1665: `1081`,
    1666: `1081`,
    1667: `1082`,
    1668: `1082`,
    1669: `1083`,
    167: `36`,
    1670: `1083`,
    1671: `1083`,
    1672: `1084`,
    1673: `1085`,
    1674: `1094`,
    1675: `1094`,
    1676: `1095`,
    1677: `1095`,
    1678: `1095`,
    1679: `1096`,
    168: `37`,
    1680: `1097`,
    1681: `1097`,
    1682: `1098`,
    1683: `1098`,
    1684: `1098`,
    1685: `1099`,
    1686: `1100`,
    1687: `1101`,
    1688: `1101`,
    1689: `1102`,
    169: `38`,
    1690: `1103`,
    1691: `1104`,
    1692: `1104`,
    1693: `1105`,
    1694: `1106`,
    1695: `1106`,
    1696: `1107`,
    1697: `1108`,
    1698: `1109`,
    1699: `1110`,
    17: `2`,
    170: `39`,
    1700: `1110`,
    1701: `1111`,
    1702: `1112`,
    1703: `1113`,
    1704: `1114`,
    1705: `1114`,
    1706: `1115`,
    1707: `1116`,
    1708: `1117`,
    1709: `1118`,
    171: `39`,
    1710: `1118`,
    1711: `1119`,
    1712: `1120`,
    1713: `1121`,
    1714: `1121`,
    1715: `1122`,
    1716: `1123`,
    1717: `1124`,
    1718: `1124`,
    1719: `1125`,
    172: `41`,
    1720: `1125`,
    1721: `1126`,
    1722: `1126`,
    1723: `1126`,
    1724: `1127`,
    1725: `1128`,
    1726: `1129`,
    1727: `1129`,
    1728: `1130`,
    1729: `1130`,
    173: `41`,
    1730: `1131`,
    1731: `1131`,
    1732: `1132`,
    1733: `1133`,
    1734: `1133`,
    1735: `1134`,
    1736: `1134`,
    1737: `1135`,
    1738: `1135`,
    1739: `1135`,
    174: `42`,
    1740: `1138`,
    1741: `1138`,
    1742: `1139`,
    1743: `1139`,
    1744: `1139`,
    1745: `1140`,
    1746: `1140`,
    1747: `1141`,
    1748: `1141`,
    1749: `1142`,
    175: `42`,
    1750: `1142`,
    1751: `1143`,
    1752: `1144`,
    1753: `1145`,
    1754: `1146`,
    1755: `1146`,
    1756: `1147`,
    1757: `1148`,
    1758: `1149`,
    1759: `1149`,
    176: `43`,
    1760: `1150`,
    1761: `1150`,
    1762: `1151`,
    1763: `1151`,
    1764: `1152`,
    1765: `1152`,
    1766: `1153`,
    1767: `1153`,
    1768: `1154`,
    1769: `1154`,
    177: `44`,
    1770: `1154`,
    1771: `1157`,
    1772: `1157`,
    1773: `1158`,
    1774: `1158`,
    1775: `1159`,
    1776: `1160`,
    1777: `1160`,
    1778: `1161`,
    1779: `1161`,
    178: `45`,
    1780: `1162`,
    1781: `1163`,
    1782: `1163`,
    1783: `1164`,
    1784: `1165`,
    1785: `1165`,
    1786: `1166`,
    1787: `1167`,
    1788: `1168`,
    1789: `1168`,
    179: `45`,
    1790: `1169`,
    1791: `1170`,
    1792: `1170`,
    1793: `1170`,
    1794: `1171`,
    1795: `1172`,
    1796: `1173`,
    1797: `1174`,
    1798: `1174`,
    1799: `1176`,
    18: `2`,
    180: `45`,
    1800: `1176`,
    1801: `1177`,
    1802: `1178`,
    1803: `1178`,
    1804: `1179`,
    1805: `1180`,
    1806: `1181`,
    1807: `1181`,
    1808: `1182`,
    1809: `1182`,
    181: `46`,
    1810: `1182`,
    1811: `1183`,
    1812: `1183`,
    1813: `1183`,
    1814: `1183`,
    1815: `1183`,
    1816: `1183`,
    1817: `1183`,
    1818: `1183`,
    1819: `1183`,
    182: `46`,
    1820: `1183`,
    1821: `1184`,
    1822: `1184`,
    1823: `1185`,
    1824: `1186`,
    1825: `1187`,
    1826: `1187`,
    1827: `1188`,
    1828: `1188`,
    1829: `1189`,
    183: `47`,
    1830: `1189`,
    1831: `1190`,
    1832: `1190`,
    1833: `1190`,
    1834: `1191`,
    1835: `1191`,
    1836: `1192`,
    1837: `1192`,
    1838: `1193`,
    1839: `1193`,
    184: `48`,
    1840: `1193`,
    1841: `1194`,
    1842: `1195`,
    1843: `1195`,
    1844: `1196`,
    1845: `1196`,
    1846: `1197`,
    1847: `1197`,
    1848: `1197`,
    1849: `1198`,
    185: `49`,
    1850: `1199`,
    1851: `1199`,
    1852: `1200`,
    1853: `1200`,
    1854: `1201`,
    1855: `1201`,
    1856: `1202`,
    1857: `1203`,
    1858: `1203`,
    1859: `1204`,
    186: `49`,
    1860: `1204`,
    1861: `1205`,
    1862: `1205`,
    1863: `1206`,
    1864: `1207`,
    1865: `1207`,
    1866: `1208`,
    1867: `1208`,
    1868: `1209`,
    1869: `1210`,
    187: `50`,
    1870: `1211`,
    1871: `1211`,
    1872: `1212`,
    1873: `1212`,
    1874: `1213`,
    1875: `1213`,
    1876: `1214`,
    1877: `1215`,
    1878: `1216`,
    1879: `1217`,
    188: `50`,
    1880: `1217`,
    1881: `1218`,
    1882: `1218`,
    1883: `1219`,
    1884: `1219`,
    1885: `1219`,
    1886: `1220`,
    1887: `1220`,
    1888: `1221`,
    1889: `1221`,
    189: `51`,
    1890: `1222`,
    1891: `1223`,
    1892: `1224`,
    1893: `1224`,
    1894: `1225`,
    1895: `1226`,
    1896: `1226`,
    1897: `1227`,
    1898: `1228`,
    1899: `1228`,
    19: `2`,
    190: `51`,
    1900: `1228`,
    1901: `1229`,
    1902: `1230`,
    1903: `1231`,
    1904: `1232`,
    1905: `1232`,
    1906: `1233`,
    1907: `1234`,
    1908: `1234`,
    1909: `1235`,
    191: `51`,
    1910: `1236`,
    1911: `1236`,
    1912: `1236`,
    1913: `1237`,
    1914: `1238`,
    1915: `1238`,
    1916: `1239`,
    1917: `1239`,
    1918: `1240`,
    1919: `1241`,
    192: `52`,
    1920: `1242`,
    1921: `1243`,
    1922: `1243`,
    1923: `1244`,
    1924: `1245`,
    1925: `1246`,
    1926: `1246`,
    1927: `1247`,
    1928: `1248`,
    1929: `1249`,
    193: `52`,
    1930: `1249`,
    1931: `1250`,
    1932: `1250`,
    1933: `1251`,
    1934: `1251`,
    1935: `1252`,
    1936: `1252`,
    1937: `1253`,
    1938: `1253`,
    1939: `1254`,
    194: `53`,
    1940: `1254`,
    1941: `1255`,
    1942: `1255`,
    1943: `1256`,
    1944: `1256`,
    1945: `1256`,
    1946: `1258`,
    1947: `1258`,
    1948: `1259`,
    1949: `1259`,
    195: `53`,
    1950: `1260`,
    1951: `1261`,
    1952: `1261`,
    1953: `1261`,
    1954: `1262`,
    1955: `1262`,
    1956: `1263`,
    1957: `1263`,
    1958: `1264`,
    1959: `1265`,
    196: `53`,
    1960: `1268`,
    1961: `1268`,
    1962: `1268`,
    1963: `1269`,
    1964: `1269`,
    1965: `1270`,
    1966: `1270`,
    1967: `1272`,
    1968: `1272`,
    1969: `1273`,
    197: `53`,
    1970: `1274`,
    1971: `1275`,
    1972: `1277`,
    1973: `1277`,
    1974: `1277`,
    1975: `1279`,
    1976: `1279`,
    1977: `1280`,
    1978: `1280`,
    1979: `1281`,
    198: `53`,
    1980: `1282`,
    1981: `1282`,
    1982: `1282`,
    1983: `1283`,
    1984: `1283`,
    1985: `1284`,
    1986: `1284`,
    1987: `1285`,
    1988: `1286`,
    1989: `1289`,
    199: `53`,
    1990: `1289`,
    1991: `1289`,
    1992: `1290`,
    1993: `1290`,
    1994: `1291`,
    1995: `1291`,
    1996: `1292`,
    1997: `1292`,
    1998: `1292`,
    1999: `1294`,
    2: `2`,
    20: `2`,
    200: `54`,
    2000: `1294`,
    2001: `1295`,
    2002: `1295`,
    2003: `1296`,
    2004: `1297`,
    2005: `1297`,
    2006: `1297`,
    2007: `1298`,
    2008: `1298`,
    2009: `1299`,
    201: `54`,
    2010: `1299`,
    2011: `1300`,
    2012: `1301`,
    2013: `1304`,
    2014: `1304`,
    2015: `1304`,
    2016: `1306`,
    2017: `1307`,
    2018: `1307`,
    2019: `1308`,
    202: `55`,
    2020: `1309`,
    2021: `1310`,
    2022: `1310`,
    2023: `1311`,
    2024: `1312`,
    2025: `1313`,
    2026: `1313`,
    2027: `1313`,
    2028: `1314`,
    2029: `1314`,
    203: `56`,
    2030: `1315`,
    2031: `1315`,
    2032: `1315`,
    2033: `1317`,
    2034: `1317`,
    2035: `1317`,
    2036: `1317`,
    2037: `1317`,
    2038: `1317`,
    2039: `1317`,
    204: `57`,
    2040: `1317`,
    2041: `1317`,
    2042: `1317`,
    2043: `1317`,
    2044: `1317`,
    2045: `1317`,
    2046: `1317`,
    2047: `1317`,
    2048: `1317`,
    2049: `1317`,
    205: `57`,
    2050: `1317`,
    2051: `1317`,
    2052: `1317`,
    2053: `1317`,
    2054: `1317`,
    2055: `1317`,
    2056: `1317`,
    2057: `1317`,
    2058: `1317`,
    2059: `1317`,
    206: `58`,
    2060: `1317`,
    2061: `1317`,
    2062: `1317`,
    2063: `1317`,
    2064: `1317`,
    2065: `1317`,
    2066: `1317`,
    2067: `1317`,
    2068: `1317`,
    2069: `1317`,
    207: `59`,
    2070: `1317`,
    2071: `1317`,
    2072: `1317`,
    2073: `1317`,
    2074: `1317`,
    2075: `1317`,
    2076: `1317`,
    2077: `1317`,
    2078: `1317`,
    2079: `1317`,
    208: `61`,
    2080: `1317`,
    2081: `1317`,
    2082: `1317`,
    2083: `1317`,
    2084: `1317`,
    2085: `1317`,
    2086: `1317`,
    2087: `1317`,
    2088: `1317`,
    2089: `1317`,
    209: `61`,
    2090: `1317`,
    2091: `1317`,
    2092: `1317`,
    2093: `1317`,
    2094: `1318`,
    2095: `1318`,
    2096: `1319`,
    2097: `1319`,
    2098: `1319`,
    2099: `1321`,
    21: `2`,
    210: `62`,
    2100: `1322`,
    2101: `1323`,
    2102: `1323`,
    2103: `1323`,
    2104: `1324`,
    2105: `1324`,
    2106: `1325`,
    2107: `1326`,
    2108: `1327`,
    2109: `1327`,
    211: `62`,
    2110: `1328`,
    2111: `1329`,
    2112: `1330`,
    2113: `1331`,
    2114: `1331`,
    2115: `1332`,
    2116: `1332`,
    2117: `1332`,
    2118: `1334`,
    2119: `1335`,
    212: `62`,
    2120: `1336`,
    2121: `1336`,
    2122: `1336`,
    2123: `1337`,
    2124: `1337`,
    2125: `1338`,
    2126: `1339`,
    2127: `1339`,
    2128: `1340`,
    2129: `1341`,
    213: `63`,
    2130: `1342`,
    2131: `1343`,
    2132: `1343`,
    2133: `1344`,
    2134: `1344`,
    2135: `1344`,
    2136: `1346`,
    2137: `1346`,
    2138: `1347`,
    2139: `1347`,
    214: `63`,
    2140: `1348`,
    2141: `1348`,
    2142: `1349`,
    2143: `1350`,
    2144: `1351`,
    2145: `1351`,
    2146: `1352`,
    2147: `1352`,
    2148: `1353`,
    2149: `1353`,
    215: `64`,
    2150: `1353`,
    2151: `1354`,
    2152: `1354`,
    2153: `1355`,
    2154: `1355`,
    2155: `1356`,
    2156: `1356`,
    2157: `1357`,
    2158: `1358`,
    2159: `1358`,
    216: `65`,
    2160: `1359`,
    2161: `1359`,
    2162: `1360`,
    2163: `1360`,
    2164: `1360`,
    2165: `1361`,
    2166: `1361`,
    2167: `1362`,
    2168: `1362`,
    2169: `1363`,
    217: `66`,
    2170: `1363`,
    2171: `1363`,
    2172: `1364`,
    2173: `1364`,
    2174: `1365`,
    2175: `1365`,
    2176: `1366`,
    2177: `1366`,
    2178: `1366`,
    2179: `1367`,
    218: `66`,
    2180: `1367`,
    2181: `1368`,
    2182: `1368`,
    2183: `1369`,
    2184: `1369`,
    2185: `1370`,
    2186: `1371`,
    2187: `1371`,
    2188: `1372`,
    2189: `1372`,
    219: `66`,
    2190: `1372`,
    2191: `1372`,
    2192: `1372`,
    2193: `1372`,
    2194: `1373`,
    2195: `1373`,
    2196: `1374`,
    2197: `1375`,
    2198: `1376`,
    2199: `1376`,
    22: `2`,
    220: `66`,
    2200: `1377`,
    2201: `1378`,
    2202: `1378`,
    2203: `1379`,
    2204: `1380`,
    2205: `1381`,
    2206: `1381`,
    2207: `1382`,
    2208: `1383`,
    2209: `1383`,
    221: `66`,
    2210: `1384`,
    2211: `1385`,
    2212: `1385`,
    2213: `1386`,
    2214: `1387`,
    2215: `1387`,
    2216: `1388`,
    2217: `1389`,
    2218: `1390`,
    2219: `1392`,
    222: `66`,
    2220: `1392`,
    2221: `1393`,
    2222: `1393`,
    2223: `1393`,
    2224: `1394`,
    2225: `1395`,
    2226: `1396`,
    2227: `1397`,
    2228: `1397`,
    2229: `1398`,
    223: `66`,
    2230: `1399`,
    2231: `1400`,
    2232: `1401`,
    2233: `1401`,
    2234: `1402`,
    2235: `1403`,
    2236: `1403`,
    2237: `1403`,
    2238: `1404`,
    2239: `1405`,
    224: `66`,
    2240: `1406`,
    2241: `1406`,
    2242: `1407`,
    2243: `1407`,
    2244: `1408`,
    2245: `1409`,
    2246: `1409`,
    2247: `1410`,
    2248: `1411`,
    2249: `1411`,
    225: `66`,
    2250: `1411`,
    2251: `1412`,
    2252: `1413`,
    2253: `1414`,
    2254: `1414`,
    2255: `1415`,
    2256: `1415`,
    2257: `1416`,
    2258: `1416`,
    2259: `1417`,
    226: `66`,
    2260: `1417`,
    2261: `1418`,
    2262: `1419`,
    2263: `1419`,
    2264: `1420`,
    2265: `1421`,
    2266: `1421`,
    2267: `1422`,
    2268: `1422`,
    2269: `1423`,
    227: `66`,
    2270: `1424`,
    2271: `1424`,
    2272: `1425`,
    2273: `1425`,
    2274: `1426`,
    2275: `1426`,
    2276: `1427`,
    2277: `1427`,
    2278: `1428`,
    2279: `1429`,
    228: `66`,
    2280: `1432`,
    2281: `1432`,
    2282: `1433`,
    2283: `1433`,
    2284: `1433`,
    2285: `1434`,
    2286: `1436`,
    2287: `1436`,
    2288: `1437`,
    2289: `1437`,
    229: `66`,
    2290: `1438`,
    2291: `1438`,
    2292: `1438`,
    2293: `1439`,
    2294: `1439`,
    2295: `1440`,
    2296: `1440`,
    2297: `1440`,
    2298: `1441`,
    2299: `1443`,
    23: `2`,
    230: `66`,
    2300: `1443`,
    2301: `1444`,
    2302: `1444`,
    2303: `1445`,
    2304: `1445`,
    2305: `1445`,
    2306: `1447`,
    2307: `1447`,
    2308: `1448`,
    2309: `1448`,
    231: `67`,
    2310: `1449`,
    2311: `1450`,
    2312: `1450`,
    2313: `1451`,
    2314: `1452`,
    2315: `1453`,
    2316: `1453`,
    2317: `1454`,
    2318: `1455`,
    2319: `1455`,
    232: `67`,
    2320: `1456`,
    2321: `1457`,
    2322: `1457`,
    2323: `1458`,
    2324: `1459`,
    2325: `1459`,
    2326: `1460`,
    2327: `1461`,
    2328: `1462`,
    2329: `1462`,
    233: `67`,
    2330: `1463`,
    2331: `1464`,
    2332: `1464`,
    2333: `1465`,
    2334: `1466`,
    2335: `1466`,
    2336: `1466`,
    2337: `1467`,
    2338: `1468`,
    2339: `1469`,
    234: `69`,
    2340: `1470`,
    2341: `1470`,
    2342: `1471`,
    2343: `1471`,
    2344: `1471`,
    2345: `1473`,
    2346: `1473`,
    2347: `1474`,
    2348: `1474`,
    2349: `1475`,
    235: `69`,
    2350: `1476`,
    2351: `1476`,
    2352: `1477`,
    2353: `1478`,
    2354: `1480`,
    2355: `1481`,
    2356: `1481`,
    2357: `1481`,
    2358: `1482`,
    2359: `1482`,
    236: `69`,
    2360: `1483`,
    2361: `1484`,
    2362: `1484`,
    2363: `1484`,
    2364: `1485`,
    2365: `1485`,
    2366: `1486`,
    2367: `1487`,
    2368: `1487`,
    2369: `1488`,
    237: `70`,
    2370: `1489`,
    2371: `1489`,
    2372: `1490`,
    2373: `1491`,
    2374: `1491`,
    2375: `1491`,
    2376: `1492`,
    2377: `1492`,
    2378: `1493`,
    2379: `1494`,
    238: `71`,
    2380: `1494`,
    2381: `1494`,
    2382: `1495`,
    2383: `1495`,
    2384: `1496`,
    2385: `1497`,
    2386: `1497`,
    2387: `1497`,
    2388: `1498`,
    2389: `1498`,
    239: `71`,
    2390: `1499`,
    2391: `1500`,
    2392: `1500`,
    2393: `1500`,
    2394: `1501`,
    2395: `1502`,
    2396: `1502`,
    2397: `1503`,
    2398: `1504`,
    2399: `1504`,
    24: `2`,
    240: `73`,
    2400: `1504`,
    2401: `1505`,
    2402: `1505`,
    2403: `1506`,
    2404: `1506`,
    2405: `1506`,
    2406: `1507`,
    2407: `1507`,
    2408: `1508`,
    2409: `1508`,
    241: `74`,
    2410: `1509`,
    2411: `1510`,
    2412: `1510`,
    2413: `1511`,
    2414: `1511`,
    2415: `1511`,
    2416: `1511`,
    2417: `1511`,
    2418: `1511`,
    2419: `1512`,
    242: `75`,
    2420: `1512`,
    2421: `1513`,
    2422: `1514`,
    2423: `1515`,
    2424: `1517`,
    2425: `1517`,
    2426: `1518`,
    2427: `1518`,
    2428: `1518`,
    2429: `1519`,
    243: `76`,
    2430: `1519`,
    2431: `1520`,
    2432: `1521`,
    2433: `1522`,
    2434: `1522`,
    2435: `1523`,
    2436: `1523`,
    2437: `1524`,
    2438: `1524`,
    2439: `1524`,
    244: `76`,
    2440: `1525`,
    2441: `1525`,
    2442: `1526`,
    2443: `1526`,
    2444: `1527`,
    2445: `1527`,
    2446: `1528`,
    2447: `1529`,
    2448: `1530`,
    2449: `1531`,
    245: `77`,
    2450: `1531`,
    2451: `1532`,
    2452: `1533`,
    2453: `1534`,
    2454: `1534`,
    2455: `1535`,
    2456: `1535`,
    2457: `1536`,
    2458: `1536`,
    2459: `1537`,
    246: `78`,
    2460: `1537`,
    2461: `1538`,
    2462: `1538`,
    2463: `1539`,
    2464: `1539`,
    2465: `1539`,
    2466: `1542`,
    2467: `1542`,
    2468: `1543`,
    2469: `1543`,
    247: `79`,
    2470: `1544`,
    2471: `1545`,
    2472: `1548`,
    2473: `1548`,
    2474: `1549`,
    2475: `1550`,
    2476: `1550`,
    2477: `1551`,
    2478: `1552`,
    2479: `1553`,
    248: `79`,
    2480: `1554`,
    2481: `1555`,
    2482: `1556`,
    2483: `1556`,
    2484: `1557`,
    2485: `1558`,
    2486: `1559`,
    2487: `1560`,
    2488: `1561`,
    2489: `1562`,
    249: `80`,
    2490: `1563`,
    2491: `1563`,
    2492: `1564`,
    2493: `1564`,
    2494: `1564`,
    2495: `1565`,
    2496: `1565`,
    2497: `1565`,
    2498: `1566`,
    2499: `1567`,
    25: `2`,
    250: `81`,
    2500: `1568`,
    2501: `1569`,
    2502: `1570`,
    2503: `1570`,
    2504: `1571`,
    2505: `1571`,
    2506: `1572`,
    2507: `1573`,
    2508: `1573`,
    2509: `1574`,
    251: `82`,
    2510: `1574`,
    2511: `1575`,
    2512: `1575`,
    2513: `1576`,
    2514: `1576`,
    2515: `1577`,
    2516: `1577`,
    2517: `1577`,
    2518: `1579`,
    2519: `1579`,
    252: `83`,
    2520: `1580`,
    2521: `1580`,
    2522: `1581`,
    2523: `1582`,
    2524: `1583`,
    2525: `1583`,
    2526: `1583`,
    2527: `1584`,
    2528: `1584`,
    2529: `1585`,
    253: `83`,
    2530: `1586`,
    2531: `1586`,
    2532: `1587`,
    2533: `1587`,
    2534: `1587`,
    2535: `1587`,
    2536: `1587`,
    2537: `1587`,
    2538: `1588`,
    2539: `1588`,
    254: `84`,
    2540: `1589`,
    2541: `1590`,
    2542: `1591`,
    2543: `1593`,
    2544: `1593`,
    2545: `1594`,
    2546: `1594`,
    2547: `1594`,
    2548: `1595`,
    2549: `1595`,
    255: `84`,
    2550: `1596`,
    2551: `1596`,
    2552: `1597`,
    2553: `1598`,
    2554: `1601`,
    2555: `1601`,
    2556: `1603`,
    2557: `1603`,
    2558: `1604`,
    2559: `1604`,
    256: `84`,
    2560: `1604`,
    2561: `1605`,
    2562: `1605`,
    2563: `1606`,
    2564: `1606`,
    2565: `1606`,
    2566: `1607`,
    2567: `1608`,
    2568: `1608`,
    2569: `1609`,
    257: `86`,
    2570: `1610`,
    2571: `1611`,
    2572: `1612`,
    2573: `1612`,
    2574: `1614`,
    2575: `1614`,
    2576: `1615`,
    2577: `1615`,
    2578: `1616`,
    2579: `1616`,
    258: `86`,
    2580: `1616`,
    2581: `1617`,
    2582: `1617`,
    2583: `1618`,
    2584: `1618`,
    2585: `1619`,
    2586: `1619`,
    2587: `1620`,
    2588: `1621`,
    2589: `1622`,
    259: `86`,
    2590: `1623`,
    2591: `1623`,
    2592: `1624`,
    2593: `1624`,
    2594: `1625`,
    2595: `1625`,
    2596: `1625`,
    2597: `1626`,
    2598: `1627`,
    2599: `1629`,
    26: `2`,
    260: `87`,
    2600: `1629`,
    2601: `1630`,
    2602: `1630`,
    2603: `1631`,
    2604: `1631`,
    2605: `1631`,
    2606: `1633`,
    2607: `1634`,
    2608: `1634`,
    2609: `1635`,
    261: `87`,
    2610: `1635`,
    2611: `1636`,
    2612: `1636`,
    2613: `1637`,
    2614: `1637`,
    2615: `1637`,
    2616: `1638`,
    2617: `1639`,
    2618: `1639`,
    2619: `1640`,
    262: `89`,
    2620: `1640`,
    2621: `1641`,
    2622: `1641`,
    2623: `1642`,
    2624: `1642`,
    2625: `1642`,
    2626: `1644`,
    2627: `1644`,
    2628: `1645`,
    2629: `1645`,
    263: `90`,
    2630: `1646`,
    2631: `1647`,
    2632: `1649`,
    2633: `1649`,
    2634: `1649`,
    2635: `1651`,
    2636: `1652`,
    2637: `1652`,
    2638: `1653`,
    2639: `1653`,
    264: `91`,
    2640: `1654`,
    2641: `1654`,
    2642: `1654`,
    2643: `1655`,
    2644: `1655`,
    2645: `1655`,
    2646: `1657`,
    2647: `1657`,
    2648: `1657`,
    2649: `1658`,
    265: `92`,
    2650: `1658`,
    2651: `1659`,
    2652: `1659`,
    2653: `1659`,
    2654: `1660`,
    2655: `1660`,
    2656: `1660`,
    2657: `1661`,
    2658: `1661`,
    2659: `1662`,
    266: `92`,
    2660: `1662`,
    2661: `1662`,
    2662: `1664`,
    2663: `1664`,
    2664: `1664`,
    2665: `1665`,
    2666: `1665`,
    2667: `1665`,
    2668: `1666`,
    2669: `1666`,
    267: `93`,
    2670: `1667`,
    2671: `1667`,
    2672: `1667`,
    2673: `1669`,
    2674: `1669`,
    2675: `1669`,
    2676: `1670`,
    2677: `1670`,
    2678: `1670`,
    2679: `1671`,
    268: `94`,
    2680: `1671`,
    2681: `1672`,
    2682: `1672`,
    2683: `1672`,
    2684: `1674`,
    2685: `1674`,
    2686: `1674`,
    2687: `1675`,
    2688: `1675`,
    2689: `1675`,
    269: `94`,
    2690: `1676`,
    2691: `1676`,
    2692: `1677`,
    2693: `1677`,
    2694: `1677`,
    2695: `1679`,
    2696: `1680`,
    2697: `1680`,
    2698: `1681`,
    2699: `1682`,
    27: `2`,
    270: `95`,
    2700: `1683`,
    2701: `1683`,
    2702: `1684`,
    2703: `1684`,
    2704: `1685`,
    2705: `1686`,
    2706: `1687`,
    2707: `1688`,
    2708: `1688`,
    2709: `1689`,
    271: `96`,
    2710: `1690`,
    2711: `1691`,
    2712: `1692`,
    2713: `1692`,
    2714: `1693`,
    2715: `1694`,
    2716: `1695`,
    2717: `1695`,
    2718: `1695`,
    2719: `1696`,
    272: `97`,
    2720: `1696`,
    2721: `1696`,
    2722: `1697`,
    2723: `1698`,
    2724: `1699`,
    2725: `1700`,
    2726: `1700`,
    2727: `1700`,
    2728: `1702`,
    2729: `1702`,
    273: `98`,
    2730: `1702`,
    2731: `1704`,
    2732: `1704`,
    2733: `1704`,
    2734: `1706`,
    2735: `1706`,
    2736: `1706`,
    2737: `1707`,
    2738: `1708`,
    2739: `1708`,
    274: `98`,
    2740: `1709`,
    2741: `1709`,
    2742: `1709`,
    2743: `1711`,
    2744: `1711`,
    2745: `1711`,
    2746: `1713`,
    2747: `1713`,
    2748: `1713`,
    2749: `1715`,
    275: `99`,
    2750: `1715`,
    2751: `1715`,
    2752: `1717`,
    2753: `1717`,
    2754: `1717`,
    2755: `1719`,
    2756: `1719`,
    2757: `1719`,
    2758: `1721`,
    2759: `1721`,
    276: `99`,
    2760: `1721`,
    2761: `1723`,
    2762: `1723`,
    2763: `1724`,
    2764: `1724`,
    2765: `1725`,
    2766: `1726`,
    2767: `1729`,
    2768: `1729`,
    2769: `1729`,
    277: `99`,
    2770: `1730`,
    2771: `1730`,
    2772: `1731`,
    2773: `1731`,
    2774: `1732`,
    2775: `1732`,
    2776: `1732`,
    2777: `1734`,
    2778: `1734`,
    2779: `1735`,
    278: `101`,
    2780: `1735`,
    2781: `1736`,
    2782: `1737`,
    2783: `1738`,
    2784: `1738`,
    2785: `1739`,
    2786: `1740`,
    2787: `1740`,
    2788: `1741`,
    2789: `1742`,
    279: `101`,
    2790: `1742`,
    2791: `1742`,
    2792: `1743`,
    2793: `1744`,
    2794: `1744`,
    2795: `1745`,
    2796: `1746`,
    2797: `1746`,
    2798: `1746`,
    2799: `1747`,
    28: `2`,
    280: `102`,
    2800: `1748`,
    2801: `1748`,
    2802: `1749`,
    2803: `1750`,
    2804: `1750`,
    2805: `1751`,
    2806: `1752`,
    2807: `1752`,
    2808: `1752`,
    2809: `1753`,
    281: `102`,
    2810: `1754`,
    2811: `1754`,
    2812: `1755`,
    2813: `1756`,
    2814: `1757`,
    2815: `1757`,
    2816: `1758`,
    2817: `1758`,
    2818: `1759`,
    2819: `1760`,
    282: `103`,
    2820: `1761`,
    2821: `1762`,
    2822: `1762`,
    2823: `1763`,
    2824: `1764`,
    2825: `1765`,
    2826: `1765`,
    2827: `1766`,
    2828: `1766`,
    2829: `1767`,
    283: `104`,
    2830: `1767`,
    2831: `1768`,
    2832: `1768`,
    2833: `1769`,
    2834: `1769`,
    2835: `1770`,
    2836: `1770`,
    2837: `1771`,
    2838: `1771`,
    2839: `1772`,
    284: `104`,
    2840: `1772`,
    2841: `1772`,
    2842: `1774`,
    2843: `1774`,
    2844: `1775`,
    2845: `1775`,
    2846: `1776`,
    2847: `1777`,
    2848: `1778`,
    2849: `1778`,
    285: `105`,
    2850: `1779`,
    2851: `1780`,
    2852: `1780`,
    2853: `1781`,
    2854: `1782`,
    2855: `1782`,
    2856: `1782`,
    2857: `1783`,
    2858: `1784`,
    2859: `1785`,
    286: `105`,
    2860: `1786`,
    2861: `1786`,
    2862: `1787`,
    2863: `1788`,
    2864: `1788`,
    2865: `1789`,
    2866: `1790`,
    2867: `1790`,
    2868: `1790`,
    2869: `1791`,
    287: `106`,
    2870: `1792`,
    2871: `1792`,
    2872: `1793`,
    2873: `1794`,
    2874: `1795`,
    2875: `1795`,
    2876: `1796`,
    2877: `1796`,
    2878: `1797`,
    2879: `1798`,
    288: `107`,
    2880: `1799`,
    2881: `1800`,
    2882: `1800`,
    2883: `1801`,
    2884: `1802`,
    2885: `1803`,
    2886: `1803`,
    2887: `1804`,
    2888: `1804`,
    2889: `1805`,
    289: `108`,
    2890: `1805`,
    2891: `1806`,
    2892: `1806`,
    2893: `1807`,
    2894: `1807`,
    2895: `1808`,
    2896: `1808`,
    2897: `1809`,
    2898: `1809`,
    2899: `1810`,
    29: `2`,
    290: `116`,
    2900: `1810`,
    2901: `1810`,
    2902: `1812`,
    2903: `1812`,
    2904: `1813`,
    2905: `1813`,
    2906: `1813`,
    2907: `1814`,
    2908: `1814`,
    2909: `1815`,
    291: `116`,
    2910: `1815`,
    2911: `1816`,
    2912: `1816`,
    2913: `1816`,
    2914: `1817`,
    2915: `1817`,
    2916: `1819`,
    2917: `1819`,
    2918: `1820`,
    2919: `1820`,
    292: `117`,
    2920: `1821`,
    2921: `1822`,
    2922: `1823`,
    2923: `1823`,
    2924: `1824`,
    2925: `1825`,
    2926: `1826`,
    2927: `1826`,
    2928: `1827`,
    2929: `1828`,
    293: `117`,
    2930: `1828`,
    2931: `1829`,
    2932: `1830`,
    2933: `1831`,
    2934: `1831`,
    2935: `1832`,
    2936: `1833`,
    2937: `1833`,
    2938: `1834`,
    2939: `1835`,
    294: `117`,
    2940: `1835`,
    2941: `1835`,
    2942: `1836`,
    2943: `1837`,
    2944: `1838`,
    2945: `1838`,
    2946: `1839`,
    2947: `1839`,
    2948: `1840`,
    2949: `1840`,
    295: `118`,
    2950: `1840`,
    2951: `1842`,
    2952: `1843`,
    2953: `1844`,
    2954: `1845`,
    2955: `1846`,
    2956: `1848`,
    2957: `1849`,
    2958: `1849`,
    2959: `1850`,
    296: `119`,
    2960: `1851`,
    2961: `1851`,
    2962: `1852`,
    2963: `1852`,
    2964: `1853`,
    2965: `1853`,
    2966: `1854`,
    2967: `1855`,
    2968: `1857`,
    2969: `1858`,
    297: `120`,
    2970: `1858`,
    2971: `1859`,
    2972: `1859`,
    2973: `1860`,
    2974: `1860`,
    2975: `1861`,
    2976: `1861`,
    2977: `1862`,
    2978: `1862`,
    2979: `1863`,
    298: `128`,
    2980: `1863`,
    2981: `1864`,
    2982: `1865`,
    2983: `1867`,
    2984: `1867`,
    2985: `1868`,
    2986: `1868`,
    2987: `1869`,
    2988: `1870`,
    2989: `1873`,
    299: `128`,
    2990: `1873`,
    2991: `1873`,
    2992: `1874`,
    2993: `1874`,
    2994: `1875`,
    2995: `1875`,
    2996: `1876`,
    2997: `1876`,
    2998: `1876`,
    2999: `1878`,
    3: `2`,
    30: `2`,
    300: `129`,
    3000: `1878`,
    3001: `1879`,
    3002: `1879`,
    3003: `1880`,
    3004: `1881`,
    3005: `1884`,
    3006: `1884`,
    3007: `1884`,
    3008: `1886`,
    3009: `1887`,
    301: `129`,
    3010: `1887`,
    3011: `1888`,
    3012: `1889`,
    3013: `1890`,
    3014: `1890`,
    3015: `1891`,
    3016: `1892`,
    3017: `1893`,
    3018: `1893`,
    3019: `1893`,
    302: `129`,
    3020: `1894`,
    3021: `1894`,
    3022: `1895`,
    3023: `1895`,
    3024: `1895`,
    3025: `1897`,
    3026: `1898`,
    3027: `1900`,
    3028: `1901`,
    3029: `1902`,
    303: `130`,
    3030: `1903`,
    3031: `1903`,
    3032: `1904`,
    3033: `1904`,
    3034: `1905`,
    3035: `1905`,
    3036: `1905`,
    3037: `1906`,
    3038: `1908`,
    3039: `1909`,
    304: `131`,
    3040: `1910`,
    3041: `1910`,
    3042: `1910`,
    3043: `1911`,
    3044: `1912`,
    3045: `1912`,
    3046: `1913`,
    3047: `1913`,
    3048: `1913`,
    3049: `1914`,
    305: `141`,
    3050: `1916`,
    3051: `1916`,
    3052: `1916`,
    3053: `1918`,
    3054: `1918`,
    3055: `1918`,
    3056: `1919`,
    3057: `1920`,
    3058: `1920`,
    3059: `1921`,
    306: `142`,
    3060: `1921`,
    3061: `1921`,
    3062: `1923`,
    3063: `1923`,
    3064: `1923`,
    3065: `1924`,
    3066: `1924`,
    3067: `1925`,
    3068: `1925`,
    3069: `1925`,
    307: `142`,
    3070: `1927`,
    3071: `1928`,
    3072: `1928`,
    3073: `1928`,
    3074: `1930`,
    3075: `1931`,
    3076: `1931`,
    3077: `1932`,
    3078: `1934`,
    3079: `1935`,
    308: `143`,
    3080: `1936`,
    3081: `1937`,
    3082: `1938`,
    3083: `1938`,
    3084: `1939`,
    3085: `1940`,
    3086: `1941`,
    3087: `1942`,
    3088: `1944`,
    3089: `1945`,
    309: `144`,
    3090: `1946`,
    3091: `1947`,
    3092: `1947`,
    3093: `1947`,
    3094: `1948`,
    3095: `1948`,
    3096: `1949`,
    3097: `1950`,
    3098: `1951`,
    3099: `1953`,
    31: `2`,
    310: `145`,
    3100: `1954`,
    3101: `1954`,
    3102: `1954`,
    3103: `1955`,
    3104: `1955`,
    3105: `1956`,
    3106: `1957`,
    3107: `1957`,
    3108: `1957`,
    3109: `1958`,
    311: `145`,
    3110: `1958`,
    3111: `1959`,
    3112: `1960`,
    3113: `1960`,
    3114: `1961`,
    3115: `1962`,
    3116: `1962`,
    3117: `1963`,
    3118: `1964`,
    3119: `1964`,
    312: `146`,
    3120: `1964`,
    3121: `1965`,
    3122: `1965`,
    3123: `1966`,
    3124: `1967`,
    3125: `1967`,
    3126: `1968`,
    3127: `1969`,
    3128: `1969`,
    3129: `1970`,
    313: `146`,
    3130: `1971`,
    3131: `1971`,
    3132: `1971`,
    3133: `1972`,
    3134: `1972`,
    3135: `1973`,
    3136: `1974`,
    3137: `1974`,
    3138: `1974`,
    3139: `1975`,
    314: `146`,
    3140: `1975`,
    3141: `1976`,
    3142: `1977`,
    3143: `1977`,
    3144: `1977`,
    3145: `1978`,
    3146: `1979`,
    3147: `1979`,
    3148: `1980`,
    3149: `1981`,
    315: `147`,
    3150: `1981`,
    3151: `1981`,
    3152: `1982`,
    3153: `1982`,
    3154: `1983`,
    3155: `1984`,
    3156: `1984`,
    3157: `1984`,
    3158: `1985`,
    3159: `1985`,
    316: `147`,
    3160: `1986`,
    3161: `1987`,
    3162: `1987`,
    3163: `1988`,
    3164: `1989`,
    3165: `1989`,
    3166: `1989`,
    3167: `1990`,
    3168: `1991`,
    3169: `1991`,
    317: `147`,
    3170: `1992`,
    3171: `1993`,
    3172: `1993`,
    3173: `1993`,
    3174: `1994`,
    3175: `1994`,
    3176: `1995`,
    3177: `1996`,
    3178: `1996`,
    3179: `1997`,
    318: `148`,
    3180: `1997`,
    3181: `1997`,
    3182: `1998`,
    3183: `1998`,
    3184: `1999`,
    3185: `2000`,
    3186: `2000`,
    3187: `2001`,
    3188: `2003`,
    3189: `2004`,
    319: `149`,
    3190: `2004`,
    3191: `2004`,
    3192: `2005`,
    3193: `2005`,
    3194: `2006`,
    3195: `2007`,
    3196: `2007`,
    3197: `2008`,
    3198: `2009`,
    3199: `2009`,
    32: `2`,
    320: `149`,
    3200: `2010`,
    3201: `2011`,
    3202: `2011`,
    3203: `2012`,
    3204: `2013`,
    3205: `2013`,
    3206: `2014`,
    3207: `2015`,
    3208: `2015`,
    3209: `2015`,
    321: `149`,
    3210: `2016`,
    3211: `2016`,
    3212: `2017`,
    3213: `2018`,
    3214: `2018`,
    3215: `2019`,
    3216: `2020`,
    3217: `2020`,
    3218: `2021`,
    3219: `2022`,
    322: `150`,
    3220: `2022`,
    3221: `2022`,
    3222: `2023`,
    3223: `2023`,
    3224: `2024`,
    3225: `2024`,
    3226: `2024`,
    3227: `2025`,
    3228: `2025`,
    3229: `2026`,
    323: `151`,
    3230: `2028`,
    3231: `2028`,
    3232: `2029`,
    3233: `2030`,
    3234: `2030`,
    3235: `2031`,
    3236: `2033`,
    3237: `2034`,
    3238: `2034`,
    3239: `2034`,
    324: `151`,
    3240: `2037`,
    3241: `2037`,
    3242: `2038`,
    3243: `2038`,
    3244: `2039`,
    3245: `2040`,
    3246: `2041`,
    3247: `2042`,
    3248: `2042`,
    3249: `2043`,
    325: `152`,
    3250: `2044`,
    3251: `2044`,
    3252: `2045`,
    3253: `2045`,
    3254: `2046`,
    3255: `2046`,
    3256: `2047`,
    3257: `2048`,
    3258: `2049`,
    3259: `2049`,
    326: `153`,
    3260: `2050`,
    3261: `2051`,
    3262: `2052`,
    3263: `2053`,
    3264: `2053`,
    3265: `2054`,
    3266: `2055`,
    3267: `2056`,
    3268: `2059`,
    3269: `2059`,
    327: `154`,
    3270: `2060`,
    3271: `2060`,
    3272: `2061`,
    3273: `2062`,
    3274: `2063`,
    3275: `2064`,
    3276: `2064`,
    3277: `2065`,
    3278: `2066`,
    3279: `2066`,
    328: `155`,
    3280: `2067`,
    3281: `2067`,
    3282: `2068`,
    3283: `2068`,
    3284: `2069`,
    3285: `2070`,
    3286: `2071`,
    3287: `2071`,
    3288: `2072`,
    3289: `2072`,
    329: `156`,
    3290: `2073`,
    3291: `2074`,
    3292: `2075`,
    3293: `2075`,
    3294: `2076`,
    3295: `2076`,
    3296: `2077`,
    3297: `2078`,
    3298: `2079`,
    3299: `2079`,
    33: `2`,
    330: `164`,
    3300: `2080`,
    3301: `2081`,
    3302: `2082`,
    3303: `2084`,
    3304: `2084`,
    3305: `2085`,
    3306: `2085`,
    3307: `2086`,
    3308: `2087`,
    3309: `2088`,
    331: `165`,
    3310: `2088`,
    3311: `2088`,
    3312: `2089`,
    3313: `2089`,
    3314: `2089`,
    3315: `2091`,
    3316: `2092`,
    3317: `2092`,
    3318: `2092`,
    3319: `2093`,
    332: `165`,
    3320: `2094`,
    3321: `2095`,
    3322: `2096`,
    3323: `2097`,
    3324: `2099`,
    3325: `2100`,
    3326: `2100`,
    3327: `2101`,
    3328: `2101`,
    3329: `2101`,
    333: `166`,
    3330: `2103`,
    3331: `2104`,
    3332: `2104`,
    3333: `2105`,
    3334: `2105`,
    3335: `2105`,
    3336: `2107`,
    3337: `2108`,
    3338: `2109`,
    3339: `2110`,
    334: `166`,
    3340: `2110`,
    3341: `2110`,
    3342: `2111`,
    3343: `2111`,
    3344: `2112`,
    3345: `2112`,
    3346: `2112`,
    3347: `2113`,
    335: `166`,
    336: `166`,
    337: `166`,
    338: `166`,
    339: `166`,
    34: `2`,
    340: `166`,
    341: `166`,
    342: `166`,
    343: `167`,
    344: `167`,
    345: `168`,
    346: `169`,
    347: `170`,
    348: `170`,
    349: `171`,
    35: `4`,
    350: `171`,
    351: `172`,
    352: `173`,
    353: `174`,
    354: `175`,
    355: `175`,
    356: `176`,
    357: `177`,
    358: `178`,
    359: `179`,
    36: `4`,
    360: `180`,
    361: `181`,
    362: `182`,
    363: `183`,
    364: `184`,
    365: `184`,
    366: `185`,
    367: `185`,
    368: `185`,
    369: `186`,
    37: `5`,
    370: `186`,
    371: `186`,
    372: `187`,
    373: `188`,
    374: `188`,
    375: `189`,
    376: `189`,
    377: `189`,
    378: `190`,
    379: `191`,
    38: `5`,
    380: `191`,
    381: `192`,
    382: `193`,
    383: `193`,
    384: `194`,
    385: `194`,
    386: `194`,
    387: `195`,
    388: `196`,
    389: `197`,
    39: `5`,
    390: `198`,
    391: `198`,
    392: `199`,
    393: `200`,
    394: `201`,
    395: `202`,
    396: `202`,
    397: `203`,
    398: `203`,
    399: `203`,
    4: `2`,
    40: `6`,
    400: `204`,
    401: `205`,
    402: `205`,
    403: `206`,
    404: `206`,
    405: `206`,
    406: `207`,
    407: `208`,
    408: `208`,
    409: `209`,
    41: `7`,
    410: `209`,
    411: `209`,
    412: `210`,
    413: `211`,
    414: `211`,
    415: `212`,
    416: `212`,
    417: `213`,
    418: `213`,
    419: `215`,
    42: `8`,
    420: `215`,
    421: `216`,
    422: `216`,
    423: `216`,
    424: `217`,
    425: `218`,
    426: `218`,
    427: `219`,
    428: `219`,
    429: `220`,
    43: `9`,
    430: `221`,
    431: `222`,
    432: `223`,
    433: `224`,
    434: `224`,
    435: `224`,
    436: `225`,
    437: `225`,
    438: `226`,
    439: `226`,
    44: `10`,
    440: `226`,
    441: `227`,
    442: `227`,
    443: `228`,
    444: `228`,
    445: `229`,
    446: `229`,
    447: `229`,
    448: `230`,
    449: `230`,
    45: `11`,
    450: `232`,
    451: `232`,
    452: `233`,
    453: `233`,
    454: `234`,
    455: `235`,
    456: `235`,
    457: `236`,
    458: `237`,
    459: `238`,
    46: `11`,
    460: `238`,
    461: `239`,
    462: `240`,
    463: `240`,
    464: `241`,
    465: `242`,
    466: `243`,
    467: `243`,
    468: `244`,
    469: `245`,
    47: `12`,
    470: `245`,
    471: `246`,
    472: `247`,
    473: `247`,
    474: `248`,
    475: `249`,
    476: `250`,
    477: `250`,
    478: `251`,
    479: `252`,
    48: `13`,
    480: `252`,
    481: `253`,
    482: `254`,
    483: `254`,
    484: `255`,
    485: `256`,
    486: `257`,
    487: `257`,
    488: `258`,
    489: `259`,
    49: `14`,
    490: `259`,
    491: `260`,
    492: `261`,
    493: `261`,
    494: `262`,
    495: `262`,
    496: `264`,
    497: `264`,
    498: `265`,
    499: `265`,
    5: `2`,
    50: `14`,
    500: `266`,
    501: `267`,
    502: `267`,
    503: `268`,
    504: `268`,
    505: `268`,
    506: `269`,
    507: `270`,
    508: `271`,
    509: `271`,
    51: `15`,
    510: `272`,
    511: `272`,
    512: `272`,
    513: `273`,
    514: `274`,
    515: `275`,
    516: `276`,
    517: `276`,
    518: `276`,
    519: `277`,
    52: `16`,
    520: `278`,
    521: `279`,
    522: `279`,
    523: `280`,
    524: `281`,
    525: `281`,
    526: `282`,
    527: `283`,
    528: `284`,
    529: `285`,
    53: `17`,
    530: `285`,
    531: `286`,
    532: `287`,
    533: `288`,
    534: `290`,
    535: `290`,
    536: `290`,
    537: `292`,
    538: `292`,
    539: `293`,
    54: `18`,
    540: `293`,
    541: `293`,
    542: `295`,
    543: `295`,
    544: `295`,
    545: `295`,
    546: `295`,
    547: `295`,
    548: `296`,
    549: `296`,
    55: `19`,
    550: `297`,
    551: `298`,
    552: `300`,
    553: `301`,
    554: `303`,
    555: `303`,
    556: `304`,
    557: `304`,
    558: `305`,
    559: `306`,
    56: `20`,
    560: `306`,
    561: `307`,
    562: `307`,
    563: `308`,
    564: `309`,
    565: `310`,
    566: `318`,
    567: `318`,
    568: `319`,
    569: `319`,
    57: `21`,
    570: `319`,
    571: `320`,
    572: `321`,
    573: `322`,
    574: `322`,
    575: `323`,
    576: `324`,
    577: `332`,
    578: `332`,
    579: `333`,
    58: `22`,
    580: `333`,
    581: `333`,
    582: `334`,
    583: `335`,
    584: `344`,
    585: `345`,
    586: `345`,
    587: `346`,
    588: `346`,
    589: `346`,
    59: `24`,
    590: `346`,
    591: `346`,
    592: `346`,
    593: `346`,
    594: `346`,
    595: `346`,
    596: `346`,
    597: `347`,
    598: `347`,
    599: `348`,
    6: `2`,
    60: `24`,
    600: `349`,
    601: `350`,
    602: `350`,
    603: `351`,
    604: `351`,
    605: `352`,
    606: `352`,
    607: `353`,
    608: `353`,
    609: `353`,
    61: `24`,
    610: `354`,
    611: `354`,
    612: `355`,
    613: `355`,
    614: `355`,
    615: `356`,
    616: `357`,
    617: `357`,
    618: `358`,
    619: `359`,
    62: `24`,
    620: `360`,
    621: `361`,
    622: `362`,
    623: `363`,
    624: `363`,
    625: `364`,
    626: `365`,
    627: `365`,
    628: `366`,
    629: `367`,
    63: `24`,
    630: `367`,
    631: `367`,
    632: `368`,
    633: `369`,
    634: `369`,
    635: `370`,
    636: `370`,
    637: `370`,
    638: `371`,
    639: `372`,
    64: `24`,
    640: `372`,
    641: `373`,
    642: `373`,
    643: `373`,
    644: `374`,
    645: `375`,
    646: `375`,
    647: `376`,
    648: `376`,
    649: `376`,
    65: `24`,
    650: `377`,
    651: `378`,
    652: `378`,
    653: `379`,
    654: `379`,
    655: `380`,
    656: `380`,
    657: `381`,
    658: `381`,
    659: `381`,
    66: `24`,
    660: `383`,
    661: `383`,
    662: `384`,
    663: `384`,
    664: `385`,
    665: `386`,
    666: `386`,
    667: `387`,
    668: `387`,
    669: `388`,
    67: `24`,
    670: `389`,
    671: `390`,
    672: `398`,
    673: `398`,
    674: `399`,
    675: `399`,
    676: `399`,
    677: `400`,
    678: `401`,
    679: `402`,
    68: `24`,
    680: `402`,
    681: `403`,
    682: `404`,
    683: `412`,
    684: `413`,
    685: `413`,
    686: `414`,
    687: `414`,
    688: `414`,
    689: `414`,
    69: `24`,
    690: `414`,
    691: `414`,
    692: `414`,
    693: `414`,
    694: `414`,
    695: `414`,
    696: `415`,
    697: `415`,
    698: `416`,
    699: `417`,
    7: `2`,
    70: `24`,
    700: `418`,
    701: `418`,
    702: `419`,
    703: `419`,
    704: `420`,
    705: `420`,
    706: `421`,
    707: `421`,
    708: `421`,
    709: `422`,
    71: `24`,
    710: `422`,
    711: `423`,
    712: `423`,
    713: `423`,
    714: `424`,
    715: `425`,
    716: `425`,
    717: `426`,
    718: `427`,
    719: `427`,
    72: `24`,
    720: `428`,
    721: `428`,
    722: `428`,
    723: `429`,
    724: `430`,
    725: `430`,
    726: `431`,
    727: `431`,
    728: `431`,
    729: `432`,
    73: `24`,
    730: `433`,
    731: `433`,
    732: `434`,
    733: `434`,
    734: `434`,
    735: `435`,
    736: `436`,
    737: `436`,
    738: `437`,
    739: `438`,
    74: `24`,
    740: `438`,
    741: `438`,
    742: `439`,
    743: `440`,
    744: `440`,
    745: `441`,
    746: `441`,
    747: `441`,
    748: `442`,
    749: `443`,
    75: `24`,
    750: `443`,
    751: `444`,
    752: `444`,
    753: `444`,
    754: `445`,
    755: `446`,
    756: `446`,
    757: `447`,
    758: `447`,
    759: `447`,
    76: `24`,
    760: `448`,
    761: `449`,
    762: `449`,
    763: `450`,
    764: `450`,
    765: `451`,
    766: `451`,
    767: `452`,
    768: `452`,
    769: `452`,
    77: `24`,
    770: `454`,
    771: `454`,
    772: `455`,
    773: `455`,
    774: `455`,
    775: `456`,
    776: `457`,
    777: `466`,
    778: `466`,
    779: `467`,
    78: `24`,
    780: `467`,
    781: `467`,
    782: `468`,
    783: `469`,
    784: `470`,
    785: `478`,
    786: `479`,
    787: `480`,
    788: `480`,
    789: `481`,
    79: `24`,
    790: `482`,
    791: `482`,
    792: `483`,
    793: `484`,
    794: `485`,
    795: `486`,
    796: `486`,
    797: `487`,
    798: `488`,
    799: `489`,
    8: `2`,
    80: `24`,
    800: `490`,
    801: `490`,
    802: `491`,
    803: `492`,
    804: `493`,
    805: `494`,
    806: `494`,
    807: `495`,
    808: `495`,
    809: `495`,
    81: `24`,
    810: `496`,
    811: `497`,
    812: `498`,
    813: `499`,
    814: `499`,
    815: `500`,
    816: `501`,
    817: `502`,
    818: `502`,
    819: `503`,
    82: `24`,
    820: `503`,
    821: `504`,
    822: `504`,
    823: `504`,
    824: `505`,
    825: `506`,
    826: `506`,
    827: `507`,
    828: `508`,
    829: `509`,
    83: `24`,
    830: `509`,
    831: `510`,
    832: `510`,
    833: `511`,
    834: `512`,
    835: `513`,
    836: `513`,
    837: `514`,
    838: `514`,
    839: `515`,
    84: `24`,
    840: `515`,
    841: `515`,
    842: `518`,
    843: `518`,
    844: `519`,
    845: `519`,
    846: `519`,
    847: `520`,
    848: `520`,
    849: `521`,
    85: `24`,
    850: `521`,
    851: `522`,
    852: `522`,
    853: `523`,
    854: `524`,
    855: `525`,
    856: `526`,
    857: `526`,
    858: `527`,
    859: `528`,
    86: `24`,
    860: `529`,
    861: `529`,
    862: `530`,
    863: `530`,
    864: `531`,
    865: `531`,
    866: `532`,
    867: `532`,
    868: `533`,
    869: `533`,
    87: `24`,
    870: `534`,
    871: `534`,
    872: `534`,
    873: `537`,
    874: `538`,
    875: `538`,
    876: `539`,
    877: `539`,
    878: `539`,
    879: `539`,
    88: `24`,
    880: `539`,
    881: `539`,
    882: `539`,
    883: `539`,
    884: `539`,
    885: `539`,
    886: `540`,
    887: `540`,
    888: `541`,
    889: `542`,
    89: `24`,
    890: `543`,
    891: `543`,
    892: `544`,
    893: `544`,
    894: `545`,
    895: `545`,
    896: `547`,
    897: `547`,
    898: `548`,
    899: `548`,
    9: `2`,
    90: `24`,
    900: `548`,
    901: `549`,
    902: `549`,
    903: `550`,
    904: `551`,
    905: `552`,
    906: `552`,
    907: `553`,
    908: `553`,
    909: `554`,
    91: `24`,
    910: `555`,
    911: `555`,
    912: `558`,
    913: `558`,
    914: `559`,
    915: `560`,
    916: `560`,
    917: `561`,
    918: `562`,
    919: `563`,
    92: `24`,
    920: `564`,
    921: `565`,
    922: `565`,
    923: `566`,
    924: `566`,
    925: `567`,
    926: `568`,
    927: `569`,
    928: `569`,
    929: `570`,
    93: `24`,
    930: `571`,
    931: `571`,
    932: `572`,
    933: `573`,
    934: `574`,
    935: `575`,
    936: `576`,
    937: `577`,
    938: `577`,
    939: `578`,
    94: `24`,
    940: `579`,
    941: `580`,
    942: `580`,
    943: `581`,
    944: `581`,
    945: `581`,
    946: `582`,
    947: `583`,
    948: `583`,
    949: `584`,
    95: `24`,
    950: `584`,
    951: `585`,
    952: `586`,
    953: `587`,
    954: `588`,
    955: `588`,
    956: `589`,
    957: `589`,
    958: `590`,
    959: `591`,
    96: `24`,
    960: `592`,
    961: `593`,
    962: `593`,
    963: `594`,
    964: `594`,
    965: `595`,
    966: `596`,
    967: `596`,
    968: `596`,
    969: `598`,
    97: `24`,
    970: `598`,
    971: `599`,
    972: `599`,
    973: `600`,
    974: `601`,
    975: `601`,
    976: `604`,
    977: `604`,
    978: `605`,
    979: `606`,
    98: `24`,
    980: `606`,
    981: `607`,
    982: `608`,
    983: `609`,
    984: `610`,
    985: `611`,
    986: `611`,
    987: `612`,
    988: `612`,
    989: `613`,
    99: `24`,
    990: `614`,
    991: `615`,
    992: `615`,
    993: `616`,
    994: `617`,
    995: `617`,
    996: `618`,
    997: `619`,
    998: `620`,
    999: `621`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 375,
  unsupported: [],
  version: 13,
  warnings: [`This program uses 'ALGOExitMode: DeleteAndCloseOutAll_SoundASAs_UnsoundElse' (the default) _and_ creates Map entries and Reach cannot guarantee that these closed at application exit, but we are generating a close out anyways. If those resources are not freed, then this close out will fail and the final transaction will always be rejected.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint256","name":"_number_of_tokens_to_deposit","type":"uint256"},{"internalType":"address payable","name":"_paymentAsset","type":"address"},{"internalType":"bool","name":"_prefersNetworkToken","type":"bool"},{"internalType":"bool","name":"_shouldPayInOnlyNetworkToken","type":"bool"},{"internalType":"address payable","name":"_token","type":"address"}],"internalType":"struct T2","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"components":[{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint256","name":"_number_of_tokens_to_deposit","type":"uint256"},{"internalType":"address payable","name":"_paymentAsset","type":"address"},{"internalType":"bool","name":"_prefersNetworkToken","type":"bool"},{"internalType":"bool","name":"_shouldPayInOnlyNetworkToken","type":"bool"},{"internalType":"address payable","name":"_token","type":"address"}],"internalType":"struct T2","name":"elem3","type":"tuple"},{"components":[{"internalType":"uint256","name":"_duration_in_blocks","type":"uint256"},{"internalType":"address payable","name":"_interest","type":"address"},{"internalType":"uint256","name":"_principle","type":"uint256"}],"internalType":"struct T3","name":"elem4","type":"tuple"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"}],"internalType":"struct T19","name":"v10552","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint256","name":"_number_of_tokens_to_deposit","type":"uint256"},{"internalType":"address payable","name":"_paymentAsset","type":"address"},{"internalType":"bool","name":"_prefersNetworkToken","type":"bool"},{"internalType":"bool","name":"_shouldPayInOnlyNetworkToken","type":"bool"},{"internalType":"address payable","name":"_token","type":"address"}],"internalType":"struct T2","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"components":[{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint256","name":"_number_of_tokens_to_deposit","type":"uint256"},{"internalType":"address payable","name":"_paymentAsset","type":"address"},{"internalType":"bool","name":"_prefersNetworkToken","type":"bool"},{"internalType":"bool","name":"_shouldPayInOnlyNetworkToken","type":"bool"},{"internalType":"address payable","name":"_token","type":"address"}],"internalType":"struct T2","name":"elem3","type":"tuple"},{"components":[{"internalType":"uint256","name":"_duration_in_blocks","type":"uint256"},{"internalType":"address payable","name":"_interest","type":"address"},{"internalType":"uint256","name":"_principle","type":"uint256"}],"internalType":"struct T3","name":"elem4","type":"tuple"},{"internalType":"address payable","name":"elem5","type":"address"},{"internalType":"address payable","name":"elem6","type":"address"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_borrower","type":"address"},{"internalType":"uint256","name":"_offerId","type":"uint256"},{"internalType":"bool","name":"_payWithNetworkToken","type":"bool"},{"internalType":"bool","name":"_rejected","type":"bool"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Admin_api_acceptOffer0_170","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_api_cancelLoanOfferandWithdrawCollateral0_170","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"_duration_in_blocks","type":"uint256"},{"internalType":"address payable","name":"_interest","type":"address"},{"internalType":"uint256","name":"_principle","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T6","name":"_Admin_api_updateLoanTerms_info0_170","type":"tuple"},{"internalType":"bool","name":"_user_acceptLoan0_170","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_user_cancelOffer0_170","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_shouldPayWithNetworkToken","type":"bool"}],"internalType":"struct T8","name":"elem0","type":"tuple"}],"internalType":"struct T9","name":"_user_makeOffer0_170","type":"tuple"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3504","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4067","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4618","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5177","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5807","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_borrower","type":"address"},{"internalType":"uint256","name":"_offerId","type":"uint256"},{"internalType":"bool","name":"_payWithNetworkToken","type":"bool"},{"internalType":"bool","name":"_rejected","type":"bool"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v6443","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_borrower","type":"address"},{"internalType":"uint256","name":"_offerId","type":"uint256"},{"internalType":"bool","name":"_payWithNetworkToken","type":"bool"},{"internalType":"bool","name":"_rejected","type":"bool"}],"internalType":"struct T0","name":"v10521","type":"tuple"}],"name":"Admin_api_acceptOffer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10527","type":"uint256"}],"name":"Admin_api_cancelLoanOfferandWithdrawCollateral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"_duration_in_blocks","type":"uint256"},{"internalType":"address payable","name":"_interest","type":"address"},{"internalType":"uint256","name":"_principle","type":"uint256"}],"internalType":"struct T3","name":"v10533","type":"tuple"}],"name":"Admin_api_updateLoanTerms_info","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_borrower","type":"address"},{"internalType":"uint256","name":"_offerId","type":"uint256"},{"internalType":"bool","name":"_payWithNetworkToken","type":"bool"},{"internalType":"bool","name":"_rejected","type":"bool"}],"internalType":"struct T0","name":"_Some","type":"tuple"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v10555","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v10558","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_borrower","type":"address"},{"internalType":"uint256","name":"_offerId","type":"uint256"},{"internalType":"bool","name":"_payWithNetworkToken","type":"bool"},{"internalType":"bool","name":"_rejected","type":"bool"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T4","name":"_Admin_api_acceptOffer0_170","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_api_cancelLoanOfferandWithdrawCollateral0_170","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"_duration_in_blocks","type":"uint256"},{"internalType":"address payable","name":"_interest","type":"address"},{"internalType":"uint256","name":"_principle","type":"uint256"}],"internalType":"struct T3","name":"elem0","type":"tuple"}],"internalType":"struct T6","name":"_Admin_api_updateLoanTerms_info0_170","type":"tuple"},{"internalType":"bool","name":"_user_acceptLoan0_170","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_user_cancelOffer0_170","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_shouldPayWithNetworkToken","type":"bool"}],"internalType":"struct T8","name":"elem0","type":"tuple"}],"internalType":"struct T9","name":"_user_makeOffer0_170","type":"tuple"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v10561","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"info_config","outputs":[{"components":[{"internalType":"bool","name":"_active","type":"bool"},{"internalType":"uint256","name":"_number_of_tokens_to_deposit","type":"uint256"},{"internalType":"address payable","name":"_paymentAsset","type":"address"},{"internalType":"bool","name":"_prefersNetworkToken","type":"bool"},{"internalType":"bool","name":"_shouldPayInOnlyNetworkToken","type":"bool"},{"internalType":"address payable","name":"_token","type":"address"}],"internalType":"struct T2","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info_loanTerms","outputs":[{"components":[{"internalType":"uint256","name":"_duration_in_blocks","type":"uint256"},{"internalType":"address payable","name":"_interest","type":"address"},{"internalType":"uint256","name":"_principle","type":"uint256"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10515","type":"uint256"}],"name":"info_offer","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_borrower","type":"address"},{"internalType":"uint256","name":"_offerId","type":"uint256"},{"internalType":"bool","name":"_payWithNetworkToken","type":"bool"},{"internalType":"bool","name":"_rejected","type":"bool"}],"internalType":"struct T0","name":"_Some","type":"tuple"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"user_acceptLoan","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10543","type":"uint256"}],"name":"user_cancelOffer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_shouldPayWithNetworkToken","type":"bool"}],"internalType":"struct T8","name":"v10549","type":"tuple"}],"name":"user_makeOffer","outputs":[{"components":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address payable","name":"_borrower","type":"address"},{"internalType":"uint256","name":"_offerId","type":"uint256"},{"internalType":"bool","name":"_payWithNetworkToken","type":"bool"},{"internalType":"bool","name":"_rejected","type":"bool"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200587a3881900390601f8201601f19168301906001600160401b03821184831017620007a9578291604052833981019080820391610260831262000950576040519260e084016001600160401b03811185821017620007a9576060926200009c9160405284518652620000798160208701620009b0565b60208701526200008c60e086016200099b565b60408701526101008501620009b0565b848301526101bf19011262000950576102406200010891604051620000c18162000955565b6101c08201518152620000d86101e083016200099b565b602082015261020082015160408201526080850152620000fc61022082016200099b565b60a0850152016200099b565b60c0820152436003556040516001600160401b03610140820190811190821117620007a9576101408101604052600081526000602082015260006040820152600060608201526200015862000a3f565b60808201526200016762000a82565b60a08201526040516200017a8162000955565b60008152600060208201526200018f62000ab2565b604082015260c0820152600060e08201526000610100820152610120620001b562000ab2565b910152604051906001600160401b036080830190811190831117620007a95760808201604052620001e562000a82565b8252620001f162000aee565b6020830152604051620002048162000971565b604036823760408301526200021862000aee565b606083015260ff6004541662000937577faf39f1e9d61df325467cf61d18a0fae57850e276b6ad4443a127ca1fa0cb37f3610280604051338152835160208201526200026d6020850151604083019062000b28565b60408401516001600160a01b03166101008201526060840151620002979061012083019062000b28565b620002ac60808501516101e083019062000b6f565b60a08401516001600160a01b0390811661024083015260c085015116610260820152a1805180159081156200092a575b501562000911576000825152600060208351015260006040835101528151602083015152815160208084015101526000604083015152600060206040840151015260208201518051604060208201519101511515604051916200033f8362000955565b60008352602083015260408201526200035762000aee565b9160005b60028110620008e05750508152606083015260c081015160408201516001600160a01b03908116911603620008d85760005b15620008bf5734620008a657604051906001600160401b03610120830190811190831117620007a957610120820160405260008252620003cc62000a3f565b602083015260006040830152620003e262000a3f565b6060830152620003f162000a82565b6080830152600060a0830152600060c08301526200040e62000aee565b60e0830152604051620004218162000971565b60403682376101008301523382526020810151602083015260018060a01b036040820151166040830152606081015160608301526080810151608083015260018060a01b0360a08201511660a083015260018060a01b0360c08201511660c0830152606083015192602084015160406020820151910151151560405191620004a98362000955565b6000835260208301526040820152620004c162000aee565b9060005b600281106200086e5750602082015260e084015260409081015182820151915192916001600160a01b031690620004fc8462000971565b604036853760005b6002811062000841575050825260c00151604051916001600160a01b0390911690620005308362000971565b604036843760005b600281106200080d57505060208201526101008201526001600055436001556040519060018060a01b0381511660208301526200057e6020820151604084019062000b28565b60408101516001600160a01b03166101008301526060810151620005a89061012084019062000b28565b620005bd60808201516101e084019062000b6f565b60a08101516001600160a01b0390811661024084015260c08201511661026083015260e0810151600061028084015b60028210620007e0578461010085015161034082016000905b60028210620007bf5761036084528361038081016001600160401b03811182821017620007a95760405280516001600160401b038111620007a957600254600181811c911680156200079e575b60208210146200078857601f81116200071e575b50602091601f8211600114620006b457918192600092620006a8575b50508160011b916000199060031b1c1916176002555b604051614c9a908162000be08239f35b01519050828062000682565b601f19821692600260005260206000209160005b8581106200070557508360019510620006eb575b505050811b0160025562000698565b015160001960f88460031b161c19169055828080620006dc565b91926020600181928685015181550194019201620006c8565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200077d575b601f0160051c01905b81811062000770575062000666565b6000815560010162000761565b909150819062000758565b634e487b7160e01b600052602260045260246000fd5b90607f169062000652565b634e487b7160e01b600052604160045260246000fd5b82516001600160a01b03168152602092830192600192909201910162000605565b602060606001926040865180518352848101518584015201511515604082015201930191019091620005ec565b6200083b906001600160a01b0362000826828562000b91565b511662000834828762000b91565b5262000bb9565b62000538565b62000868906001600160a01b036200085a828562000b91565b511662000834828862000b91565b62000504565b806200087f620008a0928962000b91565b516200088c828662000b91565b5262000899818562000b91565b5062000bb9565b620004c5565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60016200038d565b80620008f16200090b928462000b91565b51620008fe828762000b91565b5262000899818662000b91565b6200035b565b60405163100960cb60e01b8152600e6004820152602490fd5b90506001541438620002dc565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b606081019081106001600160401b03821117620007a957604052565b604081019081106001600160401b03821117620007a957604052565b519081151582036200095057565b51906001600160a01b03821682036200095057565b91908260c0910312620009505760405160c081016001600160401b03811182821017620007a95760405260a062000a3a818395620009ee816200098d565b85526020810151602086015262000a08604082016200099b565b604086015262000a1b606082016200098d565b606086015262000a2e608082016200098d565b6080860152016200099b565b910152565b6040519060c082016001600160401b03811183821017620007a9576040528160a06000918281528260208201528260408201528260608201528260808201520152565b60405190606082016001600160401b03811183821017620007a95760405260006040838281528260208201520152565b6040519060a082016001600160401b03811183821017620007a95760405260006080838281528260208201528260408201528260608201520152565b60409081519162000aff8362000971565b8260005b82811062000b1057505050565b60209062000b1d62000a82565b818401520162000b03565b60a0908051151583526020810151602084015281600180821b0391826040820151166040860152606081015115156060860152608081015115156080860152015116910152565b805182526020808201516001600160a01b031690830152604090810151910152565b90600281101562000ba35760051b0190565b634e487b7160e01b600052603260045260246000fd5b600019811462000bc95760010190565b634e487b7160e01b600052601160045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c8063039c12841461015857806306b564531461014f5780630bdddce1146101465780631e93b0f11461013d57806341712c0a146101345780634f9a54031461012b578063573b85101461012257806383230757146101195780639069217c146101105780639b4a40f014610107578063ab53f2c6146100fe578063ae561407146100f5578063bcfa3e34146100ec578063c5618ae8146100e3578063c8b11937146100da5763e9e71ad50361000e576100d5610ccd565b61000e565b506100d5610c39565b506100d5610b9a565b506100d5610ac1565b506100d5610a2e565b506100d56109b9565b506100d5610977565b506100d56108b1565b506100d5610892565b506100d5610632565b506100d5610586565b506100d56103c4565b506100d5610394565b506100d561033a565b506100d56102b3565b506100d56101d3565b6001600160a01b031690565b6001600160a01b03169052565b60a0908051151583526020810151602084015281600180821b0391826040820151166040860152606081015115156060860152608081015115156080860152015116910152565b60c0810192916101d1919061017a565b565b503461027c57600036600319011261027c576101ed61108d565b5061024460806101fb6110fc565b600054600581101561024857600361021391146139cd565b60a061022f610220610e26565b60208082518301019101614a5f565b0151828201525b0151604051918291826101c1565b0390f35b600561025491146139ad565b610160610271610262610e26565b60208082518301019101611968565b015182820152610236565b600080fd5b805182526020808201516001600160a01b031690830152604090810151910152565b6060810192916101d19190610281565b503461027c57600036600319011261027c576102cd6110dd565b5061024460a06102db6110fc565b60005460058110156103155760036102f39114613a0d565b60c0610300610220610e26565b0151828201525b0151604051918291826102a3565b600561032191146139ed565b61018061032f610262610e26565b015182820152610307565b50600036600319011261027c57602060e06103536110fc565b6103888161035f611295565b858101906003825152511515608082510152610379611295565b90600082525186820152611c51565b01511515604051908152f35b503461027c57600036600319011261027c576020600354604051908152f35b602090600319011261027c57600490565b506103e16103d1366103b3565b6103d96110fc565b50369061494b565b6105446000916103f46003845414613a2d565b610462610402610220610e26565b9161041e61041961041560045460ff1690565b1590565b613a4d565b7fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e85156040518061044e843383614a45565b0390a151801590811561057a575b50613a6d565b61046c3415613a8d565b60018060a01b039061048a33836104838451610161565b1614613aad565b838080806104a061049b8651610161565b610161565b608086015190828215610571575bf115610564575b6104c26020820151610161565b916104e26104d08351610161565b60608401948386515151921690613f8b565b61053a6105346104ff6104f86040860151610161565b9451610161565b945180519061052f60406020840151930151151561051b610ecf565b938b85526020850152604084019015159052565b61417b565b60200190565b5151921690613f8b565b80556105506000600155565b610558614af0565b60405160008152602090f35b61056c611c11565b6104b5565b506108fc6104ae565b9050600154143861045c565b506101e036600319011261027c5761059c6110fc565b604051906105a982610d53565b60043582526101c036602319011261027c57610558916040516105cb81610d7b565b6105d3614b68565b81526105de36614b77565b60208201526105ec36614909565b60408201526105fa36614be0565b606082015261060761117a565b608082015261061536614929565b60a082015261062336614c2b565b60c08201526020820152611c51565b5061063f6103d1366103b3565b61087c61064a614969565b60006106596001825414613acd565b610661610e26565b91610676602093848082518301019101614998565b61068d61068861041560045460ff1690565b613aed565b6106d66040967fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968851806106c2843383614a45565b0390a1518015908115610886575b50613b0d565b6106e03415613b2d565b60e0810151610722815180519261071d88860194898651015101928b8a82015191015115159061070e610ecf565b9485528a85015215158b840152565b6141c6565b8352868201946107496107446107388851610161565b83855101519033614138565b613b4d565b6107653360018060a01b0361075e8651610161565b1614613b6d565b8084018581515285828251015251908885019182515285818351015260608401518983510152610799606083510160019052565b85608083510152608084015160a0835101528560c0835101528560e0835101526107c4855160200190565b515192610100938484510152836101209588878651015261081261080a6107e9611b6a565b9b6107fe8d6107f88651610161565b90610fbf565b8551878e015251610161565b8d8c01610fbf565b61082b61082260a0830151610161565b60608c01610fbf565b61084461083b60c0830151610161565b60808c01610fbf565b015160a08901526108583360c08a01610fbf565b51015160e08701525190850152439084015251610140830152610160820152614724565b5160008152602090f35b905060015414386106d0565b503461027c57600036600319011261027c576020600154604051908152f35b5060a036600319011261027c5761024460206108cb6110fc565b610963816040516108db81610d96565b60043581526024356108ec8161115f565b85820152604435604082015260643561090481611170565b606082015260843561091581611170565b608082015260405161092681610d53565b61092e611188565b81528581019161093c6111fa565b83528151526000825152518582510152610954611295565b90600082525185820152611c51565b015160405190151581529081906020820190565b50602036600319011261027c57602060406109906110fc565b6103888161099c6148df565b600435815152858101906001825152518582510152610379611295565b503461027c57600080600319360112610a2b5780546109d6610e26565b906040519283918252602090604082840152835191826040850152815b838110610a1457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016109f3565b80fd5b50606036600319011261027c576102446060610a486110fc565b61096381604051610a5881610db1565b6004358152602435610a698161115f565b60208201526044356040820152604051610a8281610d53565b610a8a6111b5565b81526020810191610a996111fa565b83528151526002825152518582510152610ab1611295565b9060008252516020820152611c51565b50602036600319011261027c576020610100610adb6110fc565b61038881610ae76148df565b6004358151528581019060048251525160a082510152610379611295565b50634e487b7160e01b600052602160045260246000fd5b60021115610b2657565b6101d1610b05565b805182526020808201516001600160a01b031690830152604080820151908301526060808201511515908301526080908101511515910152565b6101d19092919260408060e08301958051610b8281610b1c565b84526020810151151560208501520151910190610b2e565b503461027c57602036600319011261027c5761024460c0600435610bbc610f87565b50610bc56110fc565b60005490916005821015610c0657610be26003610bf39314613bad565b610bed610220610e26565b50610fce565b828201525b015160405191829182610b68565b610c156005610c209314613b8d565b610bed610262610e26565b82820152610bf8565b60a0810192916101d19190610b2e565b50604036600319011261027c57610c4e610f5c565b50610244610120610c5d6110fc565b610cbf81604051610c6d81610d53565b6004358152602435610c7e81611170565b6020820152604051610c8f81610d53565b610c976111e4565b81526020810191610ca66111fa565b835281515260058251525160c082510152610ab1611295565b015160405191829182610c29565b503461027c57602036600319011261027c57610ce7610f87565b50610244610cf6600435610fce565b60405191829182610b68565b90600182811c92168015610d32575b6020831014610d1c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d11565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610d6e57604052565b610d76610d3c565b604052565b60e081019081106001600160401b03821117610d6e57604052565b60a081019081106001600160401b03821117610d6e57604052565b606081019081106001600160401b03821117610d6e57604052565b61014081019081106001600160401b03821117610d6e57604052565b602081019081106001600160401b03821117610d6e57604052565b601f909101601f19168101906001600160401b03821190821017610d6e57604052565b6040519060008260025491610e3a83610d02565b808352600193808516908115610eae5750600114610e60575b506101d192500383610e03565b60026000908152600080516020614c6e83398151915294602093509091905b818310610e965750506101d1935082010138610e53565b85548884018501529485019487945091830191610e7f565b90506101d194506020925060ff191682840152151560051b82010138610e53565b604051906101d182610db1565b6040519061084082016001600160401b03811183821017610d6e57604052565b6040519061014082016001600160401b03811183821017610d6e57604052565b604051906101a082016001600160401b03811183821017610d6e57604052565b6040519061012082016001600160401b03811183821017610d6e57604052565b60405190610f6982610d96565b60006080838281528260208201528260408201528260608201520152565b60405190610f9482610db1565b8160008152600060208201526040610faa610f5c565b910152565b6000526005602052604060002090565b6001600160a01b039091169052565b90610fd7610f87565b9160008181526005602052604091600160ff8484205416610ff781610b1c565b036110815782939450815260056020522081519161101483610db1565b60ff825481811661102481610b1c565b855260081c161515602084015260ff600482519361104185610d96565b6001810154855260028101546001600160a01b0316602086015260038101548486015201548181161515606085015260081c161515608083015282015290565b50808452602084015250565b6040519060c082016001600160401b038111838210176110d0575b6040528160a06000918281528260208201528260408201528260608201528260808201520152565b6110d8610d3c565b6110a8565b604051906110ea82610db1565b60006040838281528260208201520152565b6040519061110982610dcc565b81600080825280602083015280604083015280606083015261112961108d565b60808301526111366110dd565b60a0830152611143610f87565b60c08301528060e0830152610100820152610120610faa610f5c565b6001600160a01b0381160361027c57565b8015150361027c57565b61016435906101d182611170565b6040519061119582610de8565b8161119e610f5c565b9052565b604051906111af82610de8565b60008252565b604051906111c282610de8565b8161119e6110dd565b604051906111d882610d53565b60006020838281520152565b604051906111f182610de8565b8161119e6111cb565b604090815161120881610d7b565b60c0819360008352805161121b81610de8565b611223610f5c565b81526020840152805161123581610de8565b6000815281840152805161124881610de8565b6112506110dd565b8152606084015260006080840152805161126981610de8565b6000815260a0840152519161127d83610de8565b6112856111cb565b83520152565b60061115610b2657565b604051906112a282610d53565b81600081526020610faa6111fa565b604051906112be82610dcc565b816112c76110dd565b81526101206000918260208201526112dd61108d565b60408201528260608201528260808201526112f66110dd565b60a08201528260c08201528260e0820152826101008201520152565b6040519061131f82610d53565b81600081526020610faa6111cb565b60409081519161133d83610d53565b8260005b82811061134d57505050565b6020906113586110dd565b8184015201611341565b61136a610edc565b90611373611188565b825261137d610f87565b602083015261138a610f5c565b60408301526113976110dd565b60608301526113a46112b1565b60808301526113b16112b1565b60a08301526113be6111b5565b60c08301526113cb6112b1565b60e08301526113d86111cb565b6101008301526113e6611312565b6101208301526113f46111cb565b610140830152611402611312565b610160830152611410611312565b61018083015261141e61132e565b6101a083015261142c6111cb565b6101c083015261143a6111cb565b6101e08301526114486111cb565b61020083015260008061022084015261145f6111cb565b61024084015261146d6111cb565b61026084015261147b6111cb565b6102808401526114896111cb565b6102a0840152806102c084015261149e6111cb565b6102e08401526114ac6111cb565b6103008401526114ba6110dd565b6103208401526114c86112b1565b6103408401526114d66111a2565b6103608401526114e4610f87565b6103808401526114f2610f5c565b6103a0840152611500610f5c565b6103c084015261150e6111cb565b6103e084015261151c611312565b61040084015261152a6111cb565b610420840152611538611312565b610440840152611546611312565b6104608401528061048084015261155b6111cb565b6104a08401526115696111cb565b6104c08401526115776111cb565b6104e08401528061050084015261158c6111cb565b61052084015261159a6111cb565b6105408401526115a86111cb565b6105608401526115b66111cb565b610580840152806105a08401526115cb6111cb565b6105c08401526115d96111cb565b6105e08401526115e761132e565b610600840152806106208401526115fc6112b1565b61064084015261160a6112b1565b6106608401526116186111e4565b610680840152806106a084015261162d6111cb565b6106c084015261163b611312565b6106e08401526116496111cb565b610700840152611657611312565b610720840152611665611312565b6107408401528061076084015261167a61132e565b610780840152611688610f5c565b6107a0840152806107c08401526107e08301526116a36112b1565b6108008301526116b16112b1565b610820830152565b51906101d18261115f565b51906101d182611170565b91908260c091031261027c5760405160c081016001600160401b0381118282101761175d575b60405260a0808294805161170881611170565b84526020810151602085015260408101516117228161115f565b6040850152606081015161173581611170565b6060850152608081015161174881611170565b60808501520151916117598361115f565b0152565b611765610d3c565b6116f5565b9080601f8301121561027c576040519161178383610d53565b82906040810192831161027c57905b82821061179f5750505090565b6020809183516117ae8161115f565b815201910190611792565b919082606091031261027c576040516117d181610db1565b80928051600281101561027c576040918291845260208101516117f381611170565b60208501520151916117598361115f565b919082606091031261027c5760405161181c81610db1565b60408082948051845260208101516118338161115f565b60208501520151910152565b9190916102608184031261027c57610240906118b361185c610efc565b9461186781846117b9565b86526060830151602087015261188081608085016116cf565b604087015261189261014084016116c4565b60608701526118a461016084016116c4565b60808701526101808301611804565b60a08501526118c56101e082016116c4565b60c085015261020081015160e08501526102208101516101008501520151610120830152565b9080601f8301121561027c5760409182519261190684610d53565b839260c083019281841161027c57935b83851061192557505050505090565b60608583031261027c57825160609161193d82610db1565b8651825260209182880151838201528588015161195981611170565b86820152815201940193611916565b6106208183031261027c57611a5361197e610f1c565b92611988836116b9565b845261199781602085016116cf565b60208501526119a860e084016116b9565b60408501526105c0610100936119bf8582016116b9565b60608701526101206119d28183016116b9565b6080880152610140906119e78583850161176a565b60a0890152610180966119fb8885016116b9565b60c08a01526101a084015160e08a0152611a19866101c0860161183f565b90890152611a2b8561042085016118eb565b908801526104e082015190870152611a478361050083016116cf565b61016087015201611804565b9082015290565b906101d19151610281565b6101c060c060206101d194969561020085019760018060a01b03168552805182860152015180516006811015611afd575b6040850152611aae6020820151606086019051610b2e565b604081015151610100850152611acd6060820151610120860190611a5a565b6080810151151561018085015260a0810151516101a0850152015191019060208091518051845201511515910152565b611b05610b05565b611a96565b516006811015611b175790565b611b1f610b05565b90565b516001600160a01b031690565b906002811015611b405760051b0190565b634e487b7160e01b600052603260045260246000fd5b60405190611b6382610d53565b6040368337565b6040519061018082016001600160401b03811183821017611bfa575b604052600080835261016083611b9a61108d565b6020820152826040820152826060820152826080820152604051611bbd81610d53565b604036823760a08201528260c08201528260e0820152611bdb6112b1565b61010082015282610120820152611bf061132e565b6101408201520152565b611c02610d3c565b611b86565b51611b1f81610b1c565b506040513d6000823e3d90fd5b50634e487b7160e01b600052601160045260246000fd5b6001906000198114611c45570190565b611c4d611c1e565b0190565b90611c5a611362565b611c68600560005414613bcd565b611c73610262610e26565b92611c8b611c8661041560045460ff1690565b613bed565b7fd282cce5786dd4d2dddd3c9f5417b07272c8fd9ef54df664b0222c6151571fb260405180611cbb843383611a65565b0390a1611cd381518015908115613946575b50613c0d565b611ce06020820151611b0a565b611ce98161128b565b611fd8579060208060009593015101518152611d0861049b8351610161565b33148414611fbe57611d1a6001613ecd565b61010080830191611d2f60c084510151151590565b8614611fb457611d3e86613eed565b608094611d56611d518786510151151590565b613f0d565b611d6560408351510151610fce565b95611d8c60016020850198808a5251611d7d81610b1c565b611d8681610b1c565b14613f2d565b611d963415613f4d565b8080870197611db6611db1611dab8b51610161565b336140dd565b613f6d565b6020604086018b8151528b8260c08c0197611ddd611dd48a51610161565b83865101610fbf565b8260408551015260609e8f855101528287855101527f43962e8bb825c832ab5c8b72e86ef9905950ef814d83941a70ddefc034fe188c60405180611e2681906000602083019252565b0390a101528b870192611e3a845160019052565b6001611e468251611c07565b611e4f81610b1c565b03611fad57604091505101515b0151611e6790610161565b815160400190611e7691610fbf565b51930192835152845160200151835160200152610160968787015184516040015288865101611ea59051151590565b8451901515908a015283516001908301819052610180880151855160a00152845160c00152855160e00151845160e001528486510151858551015261012080965101518685510152611ef5611b6a565b988751611f0190610161565b611f0b908b610fbf565b602088015160208b01526040880151611f2390610161565b611f309060408c01610fbf565b80880151611f3d90610161565b611f48918b01610fbf565b51611f5290610161565b611f5d918901610fbf565b60a085015160a088015251611f7190610161565b611f7e9060c08801610fbf565b60e084015160e0870152519085015243818501528101519061014091828501520151908201526101d190614724565b5051611e5c565b611d3e6001613eed565b611d1a33611fd261049b6060860151610161565b14613ecd565b6001611fe76020830151611b0a565b611ff08161128b565b0361220d57508261200761049b6101d19551610161565b33036121f3576120176001613e2d565b6101008082019061202c60c083510151151590565b156121e95761203b6000613e4d565b61205161204c608084510151151590565b613e6d565b61205b3415613e8d565b600060406080850196612079612074611dab8a51610161565b613ead565b8151600081527fd57fb5d318b460f6890a7a0466d12414056f5e6e080ba699fdd36ec1cb65f16b90602090a1015260a0825151940193845152602082510151602085510152610160938484015160408251015260006060825101526120e2608082510160019052565b61018084015160a08251015261210b6120ff60c085510151151590565b60c08351019015159052565b60e08351015160e082510152818351015182825101526101208093510151838251015261219b61219261213c611b6a565b9761215061214a8851610161565b8a610fbf565b602087015160208a015261217361216a6040890151610161565b60408b01610fbf565b61218c6121836060890151610161565b60608b01610fbf565b51610161565b60808801610fbf565b60a084015160a08701526121be6121b560c0860151610161565b60c08801610fbf565b60e084015160e087015251908501524381850152810151906101409182850152015190820152614724565b61203b6001613e4d565b6120173361220761049b6060850151610161565b14613e2d565b600261221f6020839594950151611b0a565b6122288161128b565b036124275790602093916060948591015101519260c09081810194855261225261049b8551610161565b330361240e576122626001613dad565b61010091828501936122778286510151151590565b15612404576122866000613dcd565b6122903415613ded565b87608087019182516122a190610161565b6122ab90336140dd565b6122b490613e0d565b604051600081527f7be531bf3ab1456e598835060e7b9d6d822449c0db57d6d4c8edc7a3f30ab0e290602090a101600090528451519260e001928351528451602001518351602001526101609687870151845160400152888651016123199051151590565b8451901515908a0152855160800151151584519015156080909101525151835160a0015284518201511515835190151590830152845160e00151835160e001528385510151848451015261012080955101518584510152612378611b6a565b97865161238490610161565b61238e908a610fbf565b602087015160208a015260408701516123a690610161565b6123b39060408b01610fbf565b808701516123c090610161565b6123cb918a01610fbf565b516123d590610161565b6123e29060808901610fbf565b60a085015160a0880152808501516123f990610161565b611f7e918801610fbf565b6122866001613dcd565b6122623361242161049b89880151610161565b14613dad565b60036124366020830151611b0a565b61243f8161128b565b03612add575060e060009161246461245f60806101008801510151151590565b613d2d565b61010085015160c0015115158314612ad35761247f83613d4d565b82610100850151526124a56124976080870151610161565b602061010087015101610fbf565b81850151610120850151526101008401516020610120860151015281850151610140850151526124e96124db6080870151610161565b602061014087015101610fbf565b826101608501515261014084015160206101608601510152612512606060208701510151151590565b8314612ac5576125316101208501515b80610180870152513414613d6d565b61257d610120860151602081015190612578825160206101808a0151015151019260406020820151910151151590612567610ecf565b948552602085015215156040840152565b6141f5565b6101a08501526125ad6125a86125966080880151610161565b60206101808801510151519033614138565b613d8d565b604051600081527f0e9d00c6d565b6af1abd8477e99e8d80bad12e2419f49d28cb1cd05ceb93c04d90602090a1015260008080806125ee61049b8751610161565b6101808601515190828215612abc575bf115612aaf575b60006101c082015152600060206101c083015101526101c081015161020082015260005b600281106129d657506102008101516101e08201526101c08101516102a082015260005b600281106128f8575090816102a06101d193015161028082015261269d602061018083015101516126816020820151610161565b61268b8551610161565b9151916001600160a01b031690613f8b565b61032081016126ad815160019052565b6126bb336040835101610fbf565b51610340820151526126d560206101008401510151613952565b602061034083015101526101608201516040610340830151015261271461270460606101008501510151151590565b6060610340840151019015159052565b61272660806103408301510160019052565b61018082015160a0610340830151015261274860c06103408301510160019052565b60e0610100830151015160e0610340830151015261010080830151015161010061034083015101526127836101206101008401510151613952565b610120610340830151015261018061014061279c611b6a565b936127b06127aa8251610161565b86610fbf565b602081015160208601526127d36127ca6040830151610161565b60408701610fbf565b6127ec6127e36060830151610161565b60608701610fbf565b6128056127fc6080830151610161565b60808701610fbf565b60a081015160a086015261282861281f60c0830151610161565b60c08701610fbf565b60e081015160e0860152610340840151610100860152436101208601526128df6101a08501516020610280870151015161286b60206101e0890151015183611b2f565b51516020878901510151519003916128da60206128966101a08b0151826102808d0151015190611b2f565b5101516128c060406128b88c60206102806101a0830151920151015190611b2f565b510151151590565b906128c9610ecf565b958652602086015215156040850152565b614227565b8286015201519101515180910103610160820152614724565b8061291f6129156129106129909460a0880151611b2f565b611b22565b6102c08501610fbf565b60006102e084015152600160206102a085015101510160206102e0850151015261294e61030084015160019052565b60206102a08401510151602061030085015101526129716102a084015151151590565b156129a05760015b15612995576103008301515b6102a0840152611c35565b61264d565b6102e0830151612985565b6129ae6102c0840151610161565b6129c561049b602080610180880151015101611b22565b6001600160a01b0390911614612979565b806129f86129ee612910612a699460a0880151611b2f565b6102208501610fbf565b6000610240840151526001602061020085015101510160206102408501510152612a2761026084015160019052565b6020610200840151015160206102608501510152612a4a61020084015151151590565b15612a795760015b15612a6e576102608301515b610200840152611c35565b612629565b610240830151612a5e565b612a87610220840151610161565b612a9e61049b602080610180880151015101611b22565b6001600160a01b0390911614612a52565b612ab7611c11565b612605565b506108fc6125fe565b612531610160850151612522565b61247f6001613d4d565b6004612aef6020839695960151611b0a565b612af88161128b565b036133b857600091612b416001612b2160a060206101009601510151806103608a015251610fce565b8061038089015251612b3281610b1c565b612b3b81610b1c565b14613c8d565b826103a086015152612b67612b5960c0860151610161565b60206103a088015101610fbf565b8260406103a087015101528260606103a087015101528260806103a087015101526001612b98610380870151611c07565b612ba181610b1c565b1483146133a257612bd3612bcc61049b602060406103808a015101515b806103c08b01520151610161565b3314613cad565b612bf86103c086015160608101511515851461338e5761014086015190511115613ccd565b826103e086015152612c1e612c106080860151610161565b60206103e088015101610fbf565b612c283415613ced565b612c40612c3b611dab6080870151610161565b613d0d565b604051600081527f905a41f98f82aa174bc5b87e12c675a17ca2fe2983a9256bac49afbd1338167490602090a101526103c082015151610400830151526103e0820151602061040084015101526103c082015151610420830190815152612cb7612cad6080840151610161565b6020835101610fbf565b600061044084015152516020610440840151015260008080806103c086015160608101511515821461337f57612d18610400880151915b6104608901839052610140880151835190036104808a0152602001516001600160a01b0316610161565b905190828215613376575bf115613369575b60006104a083015152600060206104a084015101526104a08201516104e083015260005b6002811061329057506104e08201516104c08301526104a082015161058083015260005b600281106131b75750612df36105808301518061056085015261012083019060208251910151906128da612daf60206104c0890151015183611b2f565b515160206104608901510151519003936128c060406128b86020612dde8c826105608851920151015190611b2f565b510151935160206105608d0151015190611b2f565b610600830152612e2460206104608401510151612e136020820151610161565b61268b60206103c087015101611b22565b612e54612e3661036084015151610faf565b60046000918281558260018201558260028201558260038201550155565b612e6660206101008301510151613989565b61062083019081526103c0830151606001511561301a576101d192610480916101008401515161064083015152516020610640830151015261016083015160406106408301510152612ed3612ec360606101008601510151151590565b6060610640840151019015159052565b612ef8612ee860806101008601510151151590565b6080610640840151019015159052565b61018083015160a06106408301510152612f2d612f1d60c06101008601510151151590565b60c0610640840151019015159052565b612f4760e061010085015101516103c083015151906139a0565b60e0610640830151015261010080840151015161010061064083015101526101206101008401510151610120610640830151015260e0612f85611b6a565b93612f936127aa8251610161565b60208101516020860152612fad6127ca6040830151610161565b612fbd6127e36060830151610161565b612fcd6127fc6080830151610161565b60a081015160a0860152612fe761281f60c0830151610161565b015160e0840152610640810151610100840152436101208401526106008101516101408401520151610160820152614724565b6101d19261048091610100840151516106608301515251602061066083015101526101608301516040610660830151015261307061306060606101008601510151151590565b6060610660840151019015159052565b61309561308560806101008601510151151590565b6080610660840151019015159052565b61018083015160a061066083015101526130ca6130ba60c06101008601510151151590565b60c0610660840151019015159052565b60e0610100840151015160e061066083015101526130f76101008085015101516103c083015151906139a0565b61010061066083015101526101206101008401510151610120610660830151015260e0613122611b6a565b936131306127aa8251610161565b6020810151602086015261314a6127ca6040830151610161565b61315a6127e36060830151610161565b61316a6127fc6080830151610161565b60a081015160a086015261318461281f60c0830151610161565b015160e0840152610660810151610100840152436101208401526106008101516101408401520151610160820152614724565b806131d96131cf61291061324a9460a0870151611b2f565b6105a08601610fbf565b60006105c0850151526001602061058086015101510160206105c086015101526132086105e085015160019052565b6020610580850151015160206105e0860151015261322b61058085015151151590565b1561325a5760015b1561324f576105e08401515b610580850152611c35565b612d72565b6105c084015161323f565b6132686105a0850151610161565b61327f61049b602080610460890151015101611b22565b6001600160a01b0390911614613233565b806132b26132a86129106133239460a0870151611b2f565b6105008601610fbf565b600061052085015152600160206104e0860151015101602061052086015101526132e161054085015160019052565b60206104e08501510151602061054086015101526133046104e085015151151590565b156133335760015b15613328576105408401515b6104e0850152611c35565b612d4e565b610520840151613318565b613341610500850151610161565b61335861049b602080610460890151015101611b22565b6001600160a01b039091161461330c565b613371611c11565b612d2a565b506108fc612d23565b612d1861044088015191612cee565b610120860151602001515190511115613ccd565b612bd3612bcc61049b60206103a0890151612bbe565b60056133c76020830151611b0a565b6133d08161128b565b146133dc575b50505050565b6020015160c00151610680840152610100820151608001516133ff901515613c2d565b6020820151608001511561392b5761341d60015b15156106a0850152565b6134ba6106c08401600081515261343a612cad6080860151610161565b6106808501515151906106e0860191825152516020825101526106808501515151610700860190815152613474612cad6080870151610161565b6107208601906000825152516020825101526134946106a0870151151590565b156139235750515b80610740860152610140840151815101610760860152513414613c4d565b6134f061012083015160208101519061257882516020610740890151015151019260406020820151910151151590612567610ecf565b61078084015261352061351b6135096080850151610161565b60206107408701510151519033614138565b613c6d565b61012061068084015151516107a0850190815152613542336020835101610fbf565b81610100850151015160408251015261356e6135626106a0870151151590565b60608351019015159052565b600060808251015261359761358a836101008701510151610faf565b805460ff19166001179055565b61360a815160016135af856101008901510151610faf565b01600390825181556001810160018060a01b0360208501511660018060a01b0319825416179055604083015160028201550190606081015115159060ff61ff0060808554930151151560081b1692169061ffff191617179055565b7ff996a0d48a6b64273276c76aa61b9e10c0d51f6ce1feddaefc57f8732cde47ac61363c825160405191829182610c29565b0390a1519101526136566101206101008301510151613952565b6107c083015261366e60206101008301510151613952565b6107e08301526106a0820151156137d757610100810180515161080084018051919091526107e08401518151602001526101608301518151604001528151606090810151825190151591015280516001608090910152610180830151815160a00152815160c09081015191519115159101525160e0015161068083015151516137ce9361076092909161370091613975565b60e0610800830151015261010080840151015161010061080083015101526107c0810151610120610800830151015260e0613739611b6a565b936137476127aa8251610161565b602081015160208601526137616127ca6040830151610161565b6137716127e36060830151610161565b6137816127fc6080830151610161565b60a081015160a086015261379b61281f60c0830151610161565b015160e0840152610800810151610100840152436101208401526107808101516101408401520151610160820152614724565b388080806133d6565b61010081810180515161082085018051919091526107e08501518151602001526101608401518151604001528151606090810151825190151591015280516001608090910152610180840151815160a00152815160c0908101518251901515910152815160e09081015191510152510151610680830151515161391e9361076092909161386391613975565b61010061082083015101526107c0810151610120610820830151015260e0613889611b6a565b936138976127aa8251610161565b602081015160208601526138b16127ca6040830151610161565b6138c16127e36060830151610161565b6138d16127fc6080830151610161565b60a081015160a08601526138eb61281f60c0830151610161565b015160e0840152610820810151610100840152436101208401526107808101516101408401520151610160820152614724565b6137ce565b90505161349c565b61341d6139416020610680860151510151151590565b613413565b90506001541438611ccd565b906001820191828111613968575b821061027c57565b613970611c1e565b613960565b919082019182811161396857821061027c57565b60001981019081116139985790565b611b1f611c1e565b9081039081116139985790565b156139b457565b60405163100960cb60e01b815260086004820152602490fd5b156139d457565b60405163100960cb60e01b815260076004820152602490fd5b156139f457565b60405163100960cb60e01b8152600a6004820152602490fd5b15613a1457565b60405163100960cb60e01b815260096004820152602490fd5b15613a3457565b60405163100960cb60e01b815260176004820152602490fd5b15613a5457565b60405163100960cb60e01b815260186004820152602490fd5b15613a7457565b60405163100960cb60e01b815260196004820152602490fd5b15613a9457565b60405163100960cb60e01b8152601a6004820152602490fd5b15613ab457565b60405163100960cb60e01b8152601b6004820152602490fd5b15613ad457565b60405163100960cb60e01b815260116004820152602490fd5b15613af457565b60405163100960cb60e01b815260126004820152602490fd5b15613b1457565b60405163100960cb60e01b815260136004820152602490fd5b15613b3457565b60405163100960cb60e01b815260146004820152602490fd5b15613b5457565b60405163100960cb60e01b815260156004820152602490fd5b15613b7457565b60405163100960cb60e01b815260166004820152602490fd5b15613b9457565b60405163100960cb60e01b8152600c6004820152602490fd5b15613bb457565b60405163100960cb60e01b8152600b6004820152602490fd5b15613bd457565b60405163100960cb60e01b8152601c6004820152602490fd5b15613bf457565b60405163100960cb60e01b8152601d6004820152602490fd5b15613c1457565b60405163100960cb60e01b8152601e6004820152602490fd5b15613c3457565b60405163100960cb60e01b815260376004820152602490fd5b15613c5457565b60405163100960cb60e01b815260386004820152602490fd5b15613c7457565b60405163100960cb60e01b815260396004820152602490fd5b15613c9457565b60405163100960cb60e01b815260326004820152602490fd5b15613cb457565b60405163100960cb60e01b815260336004820152602490fd5b15613cd457565b60405163100960cb60e01b815260346004820152602490fd5b15613cf457565b60405163100960cb60e01b815260356004820152602490fd5b15613d1457565b60405163100960cb60e01b815260366004820152602490fd5b15613d3457565b60405163100960cb60e01b8152602e6004820152602490fd5b15613d5457565b60405163100960cb60e01b8152602f6004820152602490fd5b15613d7457565b60405163100960cb60e01b815260306004820152602490fd5b15613d9457565b60405163100960cb60e01b815260316004820152602490fd5b15613db457565b60405163100960cb60e01b8152602a6004820152602490fd5b15613dd457565b60405163100960cb60e01b8152602b6004820152602490fd5b15613df457565b60405163100960cb60e01b8152602c6004820152602490fd5b15613e1457565b60405163100960cb60e01b8152602d6004820152602490fd5b15613e3457565b60405163100960cb60e01b815260256004820152602490fd5b15613e5457565b60405163100960cb60e01b815260266004820152602490fd5b15613e7457565b60405163100960cb60e01b815260276004820152602490fd5b15613e9457565b60405163100960cb60e01b815260286004820152602490fd5b15613eb457565b60405163100960cb60e01b815260296004820152602490fd5b15613ed457565b60405163100960cb60e01b8152601f6004820152602490fd5b15613ef457565b60405163100960cb60e01b815260206004820152602490fd5b15613f1457565b60405163100960cb60e01b815260216004820152602490fd5b15613f3457565b60405163100960cb60e01b815260226004820152602490fd5b15613f5457565b60405163100960cb60e01b815260236004820152602490fd5b15613f7457565b602460405163100960cb60e01b8152816004820152fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261400793600093849392849190608081016001600160401b0381118282101761400e575b6040525193165af1613ff7613ff061401b565b809261407d565b5060208082518301019101614068565b1561027c57565b614016610d3c565b613fdd565b3d15614063573d906001600160401b038211614056575b6040519161404a601f8201601f191660200184610e03565b82523d6000602084013e565b61405e610d3c565b614032565b606090565b9081602091031261027c5751611b1f81611170565b156140855790565b80511561409457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156140b55790565b8051156140c457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6000611b1f928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261412181610d96565b5193165af1613ff761413161401b565b80926140ad565b600091611b1f9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261412181610d96565b919061418561132e565b9260005b600281106141975750508252565b806141a56141c19284611b2f565b516141b08288611b2f565b526141bb8187611b2f565b50611c35565b614189565b91906141d061132e565b9260005b600281106141e25750508252565b806141a56141f09284611b2f565b6141d4565b91906141ff61132e565b9260005b600281106142145750506020830152565b806141a56142229284611b2f565b614203565b929161423161132e565b9360005b60028110614258575050906142559161424e8286611b2f565b5283611b2f565b50565b8061426661427c9284611b2f565b516142718289611b2f565b526141bb8188611b2f565b614235565b6040519061428e82610d7b565b816000815260006020820152600060408201526142a961132e565b6060820152600060808201526142bd61108d565b60a082015260c0610faa6110dd565b6000915b600283106142dd57505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906142d0565b6101d19092919261020060c061026083019560018060a01b038082511685528060208301511660208601526040820151166040850152614354606082015160608601906142cc565b608081015161012085015261437260a082015161014086019061017a565b0151910190610281565b818110614387575050565b6000815560010161437c565b90601f82116143a0575050565b6101d19160026000526020600020906020601f840160051c830193106143ce575b601f0160051c019061437c565b90915081906143c1565b80519091906001600160401b0381116144ae575b614400816143fb600254610d02565b614393565b602080601f831160011461443c5750819293600092614431575b50508160011b916000199060031b1c191617600255565b01519050388061441a565b6002600052601f19831694909190600080516020614c6e833981519152926000905b87821061449657505083600195961061447d575b505050811b01600255565b015160001960f88460031b161c19169055388080614472565b8060018596829496860151815501950193019061445e565b6144b6610d3c565b6143ec565b604051906101a082016001600160401b03811183821017614553575b6040528160008082526144e861108d565b6020830152806040830152806060830152806080830152614507611b56565b60a08301528060c08301528060e08301526145206112b1565b61010083015261452e61132e565b61012083015261014082015261454261108d565b610160820152610180610faa6110dd565b61455b610d3c565b6144d7565b6000915b6002831061457157505050565b81516001600160a01b031681526001929092019160209182019101614564565b604090805161459f81610b1c565b83526020818101511515908401528101516001600160a01b0316910152565b610120610240916145d0848251614591565b602081015160608501526145ec6040820151608086019061017a565b606081015115156101408501526080810151151561016085015261461960a0820151610180860190610281565b60c081015115156101e085015260e08101516102008501526101008101516102208501520151910152565b6101d1909291926105c061062082019461465f83825161016d565b6146716020820151602085019061017a565b614683604082015160e085019061016d565b606081015190614699610100928386019061016d565b60808101516146ae610120918287019061016d565b61470760a0830151916146c76101409384890190614560565b6146f960c0850151956146e061018097888b019061016d565b60e08601516101a08a01528501516101c08901906145be565b8301516104208701906142cc565b8101516104e085015261437261016082015161050086019061017a565b6101009081810190815161473b6060820151151590565b60009190156148cb57505060015b15614834576101d19260a06148219361482f936147646144bb565b936147726127aa8351610161565b6020820151602086015261478c6127ca6040840151610161565b61479c6127e36060840151610161565b6147ac6127fc6080840151610161565b83820151848601526147c461281f60c0840151610161565b60e082015160e0860152825190850152610140808201516101208601526101608092015190850152604082510151908401525101516101808201526148096005600055565b61481243600155565b60405192839160208301614644565b03601f198101835282610e03565b6143d8565b6101d1925061482f9060a06148219361016061484e614281565b9361485c6127aa8251610161565b61487561486c6040830151610161565b60208701610fbf565b6148856127ca6080830151610161565b6101408101516060860152015160808401526040815101518284015251015160c08201526148b36003600055565b6148bc43600155565b6040519283916020830161430c565b602001511560000361474957506001614749565b604051906148ec82610d53565b816040516148f981610de8565b6000815281526020610faa6111fa565b60209060e319011261027c576040519061492282610de8565b60e4358252565b60209061018319011261027c576040519061494382610de8565b610184358252565b919082602091031261027c5760405161496381610de8565b91358252565b6040519061497682610db1565b8161497f61132e565b81526149896110dd565b60208201526040610faa6112b1565b6103608183031261027c57611a536149ae610f3c565b926149b8836116b9565b84526149c781602085016116cf565b60208501526149d860e084016116b9565b6040850152610320610100936149f0838683016116cf565b6060870152614a03836101c08301611804565b6080870152614a1561022082016116b9565b60a0870152614a2761024082016116b9565b60c0870152614a3a8361026083016118eb565b60e08701520161176a565b6001600160a01b0390911681529051602082015260400190565b906102608282031261027c57614ae89061020060405193614a7f85610d7b565b8051614a8a8161115f565b85526020810151614a9a8161115f565b60208601526040810151614aad8161115f565b6040860152614abf83606083016118eb565b60608601526101208101516080860152614add8361014083016116cf565b60a086015201611804565b60c082015290565b614afb600254610d02565b80614b035750565b601f8111600114614b1657506000600255565b6002600052614b5b90601f0160051c600080516020614c6e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61437c565b6000602081208160025555565b60243590600682101561027c57565b60a090604319011261027c5760405190614b9082610de8565b60405182614b9d82610d96565b6044358252606435614bae8161115f565b6020830152608435604083015260a435614bc781611170565b606083015260c435614bd881611170565b608083015252565b60609061010319011261027c5760405190614bfa82610de8565b60405182614c0782610db1565b61010435825261012435614c1a8161115f565b602083015261014435604083015252565b6040906101a319011261027c5760405190614c4582610de8565b60405182614c5282610d53565b6101a43582526101c435614c6581611170565b60208301525256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 22650,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:92:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:381:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:386:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:115:42:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Admin_api_acceptOffer": Admin_api_acceptOffer,
  "Admin_api_cancelLoanOfferandWithdrawCollateral": Admin_api_cancelLoanOfferandWithdrawCollateral,
  "Admin_api_updateLoanTerms_info": Admin_api_updateLoanTerms_info,
  "user_acceptLoan": user_acceptLoan,
  "user_cancelOffer": user_cancelOffer,
  "user_makeOffer": user_makeOffer
  };
export const _APIs = {
  Admin_api: {
    acceptOffer: Admin_api_acceptOffer,
    cancelLoanOfferandWithdrawCollateral: Admin_api_cancelLoanOfferandWithdrawCollateral,
    updateLoanTerms_info: Admin_api_updateLoanTerms_info
    },
  user: {
    acceptLoan: user_acceptLoan,
    cancelOffer: user_cancelOffer,
    makeOffer: user_makeOffer
    }
  };
