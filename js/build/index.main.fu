#lang ll
parts {
  "Admin" = interact {
    intiConfig = IT_Val Object({"ADMIN": Address, "comment": Bytes(200), "configuration": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "loanTerms_info": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])})
    },
  "Admin_api_acceptOffer" = interact {
    in = IT_Fun [] Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})),
    out = IT_Fun [Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})),Null] Null
    },
  "Admin_api_cancelLoanOfferandWithdrawCollateral" = interact {
    in = IT_Fun [] Tuple(UInt),
    out = IT_Fun [Tuple(UInt),Null] Null
    },
  "Admin_api_freeze" = interact {
    in = IT_Fun [] Tuple(Bool),
    out = IT_Fun [Tuple(Bool),Null] Null
    },
  "Admin_api_updateConfig" = interact {
    in = IT_Fun [] Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])),
    out = IT_Fun [Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])),Null] Null
    },
  "Admin_api_updateLoanTerms_info" = interact {
    in = IT_Fun [] Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])),
    out = IT_Fun [Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])),Null] Null
    },
  "user_acceptLoan" = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Null] Null
    },
  "user_makeOffer" = interact {
    in = IT_Fun [] Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})),
    out = IT_Fun [Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})),Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})] Null
    }
  };

{
  maps = {
    map0 = Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})
    }
  }
{
  
  }
{
  Just "info" = {
    config = (IT_Val Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), []),
    loanTerms = (IT_Val Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), []),
    offer = (IT_Fun [UInt] Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})}), [])
    }
  }
{
  Just "Admin_api" = {
    acceptOffer = ("Admin_api_acceptOffer", IT_Fun [Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})] Null),
    cancelLoanOfferandWithdrawCollateral = ("Admin_api_cancelLoanOfferandWithdrawCollateral", IT_Fun [UInt] Null),
    freeze = ("Admin_api_freeze", IT_Fun [Bool] Null),
    updateConfig = ("Admin_api_updateConfig", IT_Fun [Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])] Null),
    updateLoanTerms_info = ("Admin_api_updateLoanTerms_info", IT_Fun [Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])] Null)
    },
  Just "user" = {
    acceptLoan = ("user_acceptLoan", IT_Fun [] Null),
    makeOffer = ("user_makeOffer", IT_Fun [Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})] Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))
    }
  }
{
  Admin_api_acceptOffer = Nothing,
  Admin_api_cancelLoanOfferandWithdrawCollateral = Nothing,
  Admin_api_freeze = Nothing,
  Admin_api_updateConfig = Nothing,
  Admin_api_updateLoanTerms_info = Nothing,
  user_acceptLoan = Nothing,
  user_makeOffer = Nothing
  }
{
  
  }
const initialInfo/2978 : Tuple(UInt, UInt, Bool)* = [0, 0, false ];
const tokInfos/2979 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/2978 ]);
const tokens/2980 : Array(Token, 1)* = array(Token, [Token.zero ]);
const v2981 : Object({"i": UInt, "sign": Bool})* = {
  i = 0,
  sign = true};
const v2982 : Object({"i": UInt, "sign": Bool})* = {
  i = 0,
  sign = true};
only(Left "Admin") {
  const intiConfig/2983 : Object({"ADMIN": Address, "comment": Bytes(200), "configuration": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "loanTerms_info": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])})* = "Admin".interact.intiConfig;
  const v2984 : Address* = intiConfig/2983.ADMIN;
  const v2985 : Bytes(200)* = intiConfig/2983.comment;
  const v2986 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = intiConfig/2983.configuration;
  const v2987 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = intiConfig/2983.loanTerms_info;
  const v2988 : Token* = v2986.token;
  const v2989 : UInt* = v2986.number_of_tokens_to_deposit;
  const v2990 : Token* = v2986.paymentAsset;
  const v2991 : Bool* = v2986.shouldPayInOnlyNetworkToken;
  const v2992 : Bool* = v2986.prefersNetworkToken;
  const v2993 : UInt* = v2987.duration_in_blocks;
  const v2994 : UInt* = v2987.principle;
  const v2995 : Token* = v2987.interest;
   };
only(Left "Admin_api_acceptOffer") {
   };
only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
   };
only(Left "Admin_api_freeze") {
   };
only(Left "Admin_api_updateConfig") {
   };
only(Left "Admin_api_updateLoanTerms_info") {
   };
only(Left "user_acceptLoan") {
   };
only(Left "user_makeOffer") {
   };
only(Left "Admin") {
  const v2996 : Address* = selfAddress("Admin", False, 34 )();
  let v2997 : Null;
  const config/2998 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = intiConfig/2983.configuration;
  const v2999 : UInt* = config/2998.number_of_tokens_to_deposit;
  const v3000 : Token* = config/2998.paymentAsset;
  const v3001 : Bool* = config/2998.prefersNetworkToken;
  const v3002 : Bool* = config/2998.shouldPayInOnlyNetworkToken;
  const deposit_nft/3003 : Token* = config/2998.token;
  const loanTerms/3004 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = intiConfig/2983.loanTerms_info;
  const ADMIN_WALLET/3005 : Address* = intiConfig/2983.ADMIN;
  v2997 : Null = null;
   };
only(Left "Admin") {
  const v3006 : Object({"number_of_tokens_to_deposit": UInt, "paymentAsset": Token, "prefersNetworkToken": Bool, "shouldPayInOnlyNetworkToken": Bool, "token": Token})* = {
    number_of_tokens_to_deposit = v2999,
    paymentAsset = v3000,
    prefersNetworkToken = v3001,
    shouldPayInOnlyNetworkToken = v3002,
    token = deposit_nft/3003};
   };
publish(@0)
  .case("Admin").send({
    isClass = False,
    msg = [v3006, deposit_nft/3003, config/2998, loanTerms/3004, ADMIN_WALLET/3005],
    pay = [0, ],
    when = true
    })
  .recv({
    didSend = didPublish/54 : Bool,
    from = Admin/3007 : Address,
    msg = [config_as_object/3008 : Object({"number_of_tokens_to_deposit": UInt, "paymentAsset": Token, "prefersNetworkToken": Bool, "shouldPayInOnlyNetworkToken": Bool, "token": Token}), deposit_nft/3009 : Token, config/3010 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), loanTerms/3011 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), ADMIN_WALLET/3012 : Address],
    secs = thisConsensusSecs/3014 : UInt,
    time = thisConsensusTime/3013 : UInt
    }){
    timeOrder(>, Nothing, thisConsensusTime/3013 : UInt);
    timeOrder(>=, Nothing, thisConsensusSecs/3014 : UInt);
    const tokInfo/3015 : Tuple(UInt, UInt, Bool)* = tokInfos/2979[0];
    const tokInfo'/3016 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/3015, 0, 0 );
    const tokInfos'/3017 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/2979, 0, tokInfo'/3016 );
    const tokens'/3018 : Array(Token, 1)* = Array.set(tokens/2980, 0, deposit_nft/3009 );
    tokenInit(deposit_nft/3009);
    checkPay(0, None);
    const paymentToken/3019 : Token* = config_as_object/3008.paymentAsset;
    commit();
    only(Left "Admin") {
      const v3020 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
       };
    publish(@thisConsensusTime/3013)
      .case("Admin").send({
        isClass = False,
        msg = [],
        pay = [0, (v3020, deposit_nft/3009 ) ],
        when = true
        })
      .recv({
        didSend = didPublish/64 : Bool,
        from = Admin/3021 : Address,
        msg = [],
        secs = thisConsensusSecs/3023 : UInt,
        time = thisConsensusTime/3022 : UInt
        }){
        timeOrder(>, Just thisConsensusTime/3013, thisConsensusTime/3022 : UInt);
        timeOrder(>=, Just thisConsensusSecs/3014, thisConsensusSecs/3023 : UInt);
        const v3024 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
        checkPay(0, None);
        const tokInfo/3025 : Tuple(UInt, UInt, Bool)* = tokInfos'/3017[0];
        const v3026 : UInt* = tokInfo/3025[0];
        const v3027 : UInt* = v3026 + v3024;
        const tokInfo/3028 : Tuple(UInt, UInt, Bool)* = tokInfos'/3017[0];
        const tokInfo'/3029 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/3028, 0, v3027 );
        const tokInfos'/3030 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/3017, 0, tokInfo'/3029 );
        checkPay(v3024, Some deposit_nft/3009);
        const v3031 : Bool* = Admin/3007 == Admin/3021;
        claim(CT_Require)(v3031, Just "sender correct");
        const v3032 : Token* = config/3010.token;
        const v3033 : UInt* = config/3010.number_of_tokens_to_deposit;
        const v3034 : Token* = config/3010.paymentAsset;
        const v3035 : Bool* = config/3010.shouldPayInOnlyNetworkToken;
        const v3036 : Bool* = config/3010.prefersNetworkToken;
        view(Just "info").config.is(Just export (Nothing) => {
        return config/3010;})
        const v3037 : Data({"None": Null, "Some": Address})* = <None null>;
        const v3038 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
          acceptedAddress = v3037,
          config = config/3010,
          continue = true,
          freeze = false,
          loanTerms = loanTerms/3011,
          loanTermsAccepted = false,
          offers = 0};
        loopvar {
          returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3038,
          thisConsensusTime/3040 : UInt = thisConsensusTime/3022,
          lastConsensusTime/3041 : UInt = thisConsensusTime/3013,
          baseWaitTime/3042 : UInt = thisConsensusTime/3013,
          thisConsensusSecs/3043 : UInt = thisConsensusSecs/3023,
          lastConsensusSecs/3044 : UInt = thisConsensusSecs/3014,
          baseWaitSecs/3045 : UInt = thisConsensusSecs/3014,
          tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3030,
          netBalance/3047 : UInt = 0
          };
        invariant{
          [invariant(const v3048 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
          const v3049 : Token* = v3048.token;
          const v3050 : UInt* = v3048.number_of_tokens_to_deposit;
          const v3051 : Token* = v3048.paymentAsset;
          const v3052 : Bool* = v3048.shouldPayInOnlyNetworkToken;
          const v3053 : Bool* = v3048.prefersNetworkToken;
          const v3054 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
          const v3055 : UInt* = v3054.duration_in_blocks;
          const v3056 : UInt* = v3054.principle;
          const v3057 : Token* = v3054.interest;
          const netBalance/3058 : UInt* = netBalance/3047;
          const v3059 : Bool* = netBalance/3058 == 0;
          
          return v3059;, Nothing)] }
        while{
          const v3060 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
          const v3061 : Token* = v3060.token;
          const v3062 : UInt* = v3060.number_of_tokens_to_deposit;
          const v3063 : Token* = v3060.paymentAsset;
          const v3064 : Bool* = v3060.shouldPayInOnlyNetworkToken;
          const v3065 : Bool* = v3060.prefersNetworkToken;
          const v3066 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
          const v3067 : UInt* = v3066.duration_in_blocks;
          const v3068 : UInt* = v3066.principle;
          const v3069 : Token* = v3066.interest;
          const v3070 : Bool* = returnExpression/3039.continue;
          
          return v3070; }
        {
          const v3071 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
          const v3072 : Token* = v3071.token;
          const v3073 : UInt* = v3071.number_of_tokens_to_deposit;
          const v3074 : Token* = v3071.paymentAsset;
          const v3075 : Bool* = v3071.shouldPayInOnlyNetworkToken;
          const v3076 : Bool* = v3071.prefersNetworkToken;
          view(Just "info").config.is(Just export (Nothing) => {
          return v3071;})
          const v3077 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
          const v3078 : UInt* = v3077.duration_in_blocks;
          const v3079 : UInt* = v3077.principle;
          const v3080 : Token* = v3077.interest;
          view(Just "info").loanTerms.is(Just export (Nothing) => {
          return v3077;})
          view(Just "info").offer.is(Just export (Just [v3081 : UInt*]) => {const v3082 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[res/3081];
          
          return v3082;})
          commit();
          only(Left "Admin_api_updateConfig") {
            const this/3083 : Address* = selfAddress("Admin_api_updateConfig", True, 524 )();
            let v3084 : Null;
            const .api72.dom/3085 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* = protect<Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))>("Admin_api_updateConfig".interact.in());
            const v3086 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .api72.dom/3085[0];
            const v3087 : Token* = v3086.token;
            const v3088 : UInt* = v3086.number_of_tokens_to_deposit;
            const v3089 : Token* = v3086.paymentAsset;
            const v3090 : Bool* = v3086.shouldPayInOnlyNetworkToken;
            const v3091 : Bool* = v3086.prefersNetworkToken;
            const local_config/3092 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .api72.dom/3085[0];
            const v3093 : Bool* = this/3083 == Admin/3007;
            const v3094 : Bool* = ADMIN_WALLET/3012 == this/3083;
            const v3095 : Bool* = (v3093 ? true : v3094);
            let v3096 : Null;
            claim(CT_Assume)(v3095, Just "The current user trying to access this interface is not Admin");
            v3096 : Null = null;
            const x/3097 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3098 : Bool* = (x/3097 ? false : true);
            let v3099 : Null;
            claim(CT_Assume)(v3098, Just "Cannot update config after Loan terms accepted");
            v3099 : Null = null;
            const _/3100 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .api72.dom/3085[0];
            let v3101 : Null;
            v3101 : Null = null;
            const v3102 : Object({"msg": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))})* = {
              msg = .api72.dom/3085};
            const v3103 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .api72.dom/3085[0];
            const v3104 : Token* = v3103.token;
            const v3105 : UInt* = v3103.number_of_tokens_to_deposit;
            const v3106 : Token* = v3103.paymentAsset;
            const v3107 : Bool* = v3103.shouldPayInOnlyNetworkToken;
            const v3108 : Bool* = v3103.prefersNetworkToken;
            const v3109 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_updateConfig0_127 null>;
            const v3110 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_updateConfig0_126 .api72.dom/3085>;
            const v3111 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3109,
              msg = v3110,
              when = true};
            v3084 : Null = null;
             };
          only(Left "Admin_api_freeze") {
            const this/3112 : Address* = selfAddress("Admin_api_freeze", True, 585 )();
            let v3113 : Null;
            const .api73.dom/3114 : Tuple(Bool)* = protect<Tuple(Bool)>("Admin_api_freeze".interact.in());
            const v3115 : Bool* = .api73.dom/3114[0];
            const toggle/3116 : Bool* = .api73.dom/3114[0];
            const v3117 : Bool* = this/3112 == Admin/3007;
            const v3118 : Bool* = ADMIN_WALLET/3012 == this/3112;
            const v3119 : Bool* = (v3117 ? true : v3118);
            let v3120 : Null;
            claim(CT_Assume)(v3119, Just "The current user trying to access this interface is not Admin");
            v3120 : Null = null;
            const x/3121 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3122 : Bool* = (x/3121 ? false : true);
            let v3123 : Null;
            claim(CT_Assume)(v3122, Just "Cannot update config after Loan terms accepted");
            v3123 : Null = null;
            const v3124 : Bool* = returnExpression/3039.freeze;
            const v3125 : Bool* = (v3124 ? false : true);
            const x/3126 : Bool* = (toggle/3116 ? v3124 : v3125);
            const v3127 : Bool* = (x/3126 ? false : true);
            let v3128 : Null;
            claim(CT_Assume)(v3127, Just "The action you are trying to perform has already been done");
            v3128 : Null = null;
            const _/3129 : Bool* = .api73.dom/3114[0];
            let v3130 : Null;
            v3130 : Null = null;
            const v3131 : Object({"msg": Tuple(Bool)})* = {
              msg = .api73.dom/3114};
            const v3132 : Bool* = .api73.dom/3114[0];
            const v3133 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_freeze0_127 null>;
            const v3134 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_freeze0_126 .api73.dom/3114>;
            const v3135 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3133,
              msg = v3134,
              when = true};
            v3113 : Null = null;
             };
          only(Left "Admin_api_updateLoanTerms_info") {
            const this/3136 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 656 )();
            let v3137 : Null;
            const .api74.dom/3138 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* = protect<Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))>("Admin_api_updateLoanTerms_info".interact.in());
            const v3139 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .api74.dom/3138[0];
            const v3140 : UInt* = v3139.duration_in_blocks;
            const v3141 : UInt* = v3139.principle;
            const v3142 : Token* = v3139.interest;
            const local_config/3143 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .api74.dom/3138[0];
            const v3144 : Bool* = this/3136 == Admin/3007;
            const v3145 : Bool* = ADMIN_WALLET/3012 == this/3136;
            const v3146 : Bool* = (v3144 ? true : v3145);
            let v3147 : Null;
            claim(CT_Assume)(v3146, Just "The current user trying to access this interface is not Admin");
            v3147 : Null = null;
            const x/3148 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3149 : Bool* = (x/3148 ? false : true);
            let v3150 : Null;
            claim(CT_Assume)(v3149, Just "Cannot update loan terms after Loan terms accepted");
            v3150 : Null = null;
            const _/3151 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .api74.dom/3138[0];
            let v3152 : Null;
            v3152 : Null = null;
            const v3153 : Object({"msg": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))})* = {
              msg = .api74.dom/3138};
            const v3154 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .api74.dom/3138[0];
            const v3155 : UInt* = v3154.duration_in_blocks;
            const v3156 : UInt* = v3154.principle;
            const v3157 : Token* = v3154.interest;
            const v3158 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_updateLoanTerms_info0_127 null>;
            const v3159 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_updateLoanTerms_info0_126 .api74.dom/3138>;
            const v3160 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3158,
              msg = v3159,
              when = true};
            v3137 : Null = null;
             };
          only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
            const this/3161 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 713 )();
            let v3162 : Null;
            const .api75.dom/3163 : Tuple(UInt)* = protect<Tuple(UInt)>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.in());
            const v3164 : UInt* = .api75.dom/3163[0];
            const local_config/3165 : UInt* = .api75.dom/3163[0];
            const v3166 : Bool* = this/3161 == Admin/3007;
            const v3167 : Bool* = ADMIN_WALLET/3012 == this/3161;
            const v3168 : Bool* = (v3166 ? true : v3167);
            let v3169 : Null;
            claim(CT_Assume)(v3168, Just "The current user trying to access this interface is not Admin");
            v3169 : Null = null;
            const x/3170 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3171 : Bool* = (x/3170 ? false : true);
            let v3172 : Null;
            claim(CT_Assume)(v3171, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
            v3172 : Null = null;
            let v3173 : Null;
            const v3174 : Bool* = returnExpression/3039.freeze;
            const v3175 : Bool* = (v3174 ? true : false);
            let v3176 : Null;
            claim(CT_Assume)(v3175, Just "Contract is frozen");
            v3176 : Null = null;
            v3173 : Null = null;
            const _/3177 : UInt* = .api75.dom/3163[0];
            let v3178 : Null;
            v3178 : Null = null;
            const v3179 : Object({"msg": Tuple(UInt)})* = {
              msg = .api75.dom/3163};
            const v3180 : UInt* = .api75.dom/3163[0];
            const v3181 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_cancelLoanOfferandWithdrawCollateral0_127 null>;
            const v3182 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_cancelLoanOfferandWithdrawCollateral0_126 .api75.dom/3163>;
            const v3183 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3181,
              msg = v3182,
              when = true};
            v3162 : Null = null;
             };
          only(Left "Admin_api_acceptOffer") {
            const this/3184 : Address* = selfAddress("Admin_api_acceptOffer", True, 782 )();
            let v3185 : Null;
            const .api76.dom/3186 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* = protect<Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))>("Admin_api_acceptOffer".interact.in());
            const v3187 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .api76.dom/3186[0];
            const v3188 : UInt* = v3187.amount;
            const v3189 : Address* = v3187.borrower;
            const v3190 : UInt* = v3187.offerId;
            const v3191 : Bool* = v3187.rejected;
            const loanOffer/3192 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .api76.dom/3186[0];
            const v3193 : Bool* = this/3184 == Admin/3007;
            const v3194 : Bool* = ADMIN_WALLET/3012 == this/3184;
            const v3195 : Bool* = (v3193 ? true : v3194);
            let v3196 : Null;
            claim(CT_Assume)(v3195, Just "The current user trying to access this interface is not Admin");
            v3196 : Null = null;
            const x/3197 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3198 : Bool* = (x/3197 ? false : true);
            let v3199 : Null;
            claim(CT_Assume)(v3198, Just "An offer has already been accepted");
            v3199 : Null = null;
            let v3200 : Null;
            const v3201 : Bool* = returnExpression/3039.freeze;
            const v3202 : Bool* = (v3201 ? true : false);
            let v3203 : Null;
            claim(CT_Assume)(v3202, Just "Contract is frozen");
            v3203 : Null = null;
            v3200 : Null = null;
            const v3204 : UInt* = loanOffer/3192.amount;
            const v3205 : Address* = loanOffer/3192.borrower;
            const v3206 : UInt* = loanOffer/3192.offerId;
            const v3207 : Bool* = loanOffer/3192.rejected;
            const m/3208 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3206];
            const v3209 : UInt* = dataTag(m/3208);
            const v3210 : Bool* = v3209 == 1;
            let v3211 : Null;
            claim(CT_Assume)(v3210, Just "Offer id doesn't exist");
            v3211 : Null = null;
            const _/3212 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .api76.dom/3186[0];
            let v3213 : Null;
            v3213 : Null = null;
            const v3214 : Object({"msg": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))})* = {
              msg = .api76.dom/3186};
            const v3215 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .api76.dom/3186[0];
            const v3216 : UInt* = v3215.amount;
            const v3217 : Address* = v3215.borrower;
            const v3218 : UInt* = v3215.offerId;
            const v3219 : Bool* = v3215.rejected;
            const v3220 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_acceptOffer0_127 null>;
            const v3221 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_acceptOffer0_126 .api76.dom/3186>;
            const v3222 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3220,
              msg = v3221,
              when = true};
            v3185 : Null = null;
             };
          only(Left "user_acceptLoan") {
            const v3223 : Address* = selfAddress("user_acceptLoan", True, 882 )();
            let v3224 : Null;
            const .api77.dom/3225 : Tuple()* = protect<Tuple()>("user_acceptLoan".interact.in());
            let v3226 : Null;
            const v3227 : Bool* = returnExpression/3039.freeze;
            const v3228 : Bool* = (v3227 ? true : false);
            let v3229 : Null;
            claim(CT_Assume)(v3228, Just "Contract is frozen");
            v3229 : Null = null;
            v3226 : Null = null;
            const acceptedAmount/3230 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
            const x/3231 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3232 : Bool* = (x/3231 ? false : true);
            let v3233 : Null;
            claim(CT_Assume)(v3232, Just "Offer already accepted");
            v3233 : Null = null;
            const v3234 : Bool* = config_as_object/3008.prefersNetworkToken;
            const v3235 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3236 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/3230, v3235 ];
            const v3237 : Tuple(UInt, Token)* = [acceptedAmount/3230, paymentToken/3019 ];
            const v3238 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3237 ];
            const transferData/3239 : Tuple(UInt, Tuple(UInt, Token))* = (v3234 ? v3236 : v3238);
            let v3240 : Null;
            v3240 : Null = null;
            const v3241 : Object({"msg": Tuple()})* = {
              msg = .api77.dom/3225};
            const v3242 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <user_acceptLoan0_127 null>;
            const v3243 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <user_acceptLoan0_126 .api77.dom/3225>;
            const v3244 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3242,
              msg = v3243,
              when = true};
            v3224 : Null = null;
             };
          only(Left "user_makeOffer") {
            const v3245 : Address* = selfAddress("user_makeOffer", True, 936 )();
            let v3246 : Null;
            const .api78.dom/3247 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* = protect<Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))>("user_makeOffer".interact.in());
            const v3248 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .api78.dom/3247[0];
            const v3249 : UInt* = v3248.amount;
            const v3250 : Bool* = v3248.shouldPayWithNetworkToken;
            const v3251 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .api78.dom/3247[0];
            const amount/3252 : UInt* = v3251.amount;
            const shouldPayWithNetworkToken/3253 : Bool* = v3251.shouldPayWithNetworkToken;
            let v3254 : Null;
            const v3255 : Bool* = returnExpression/3039.freeze;
            const v3256 : Bool* = (v3255 ? true : false);
            let v3257 : Null;
            claim(CT_Assume)(v3256, Just "Contract is frozen");
            v3257 : Null = null;
            v3254 : Null = null;
            const _/3258 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .api78.dom/3247[0];
            let v3259 : Null;
            v3259 : Null = null;
            const v3260 : Object({"msg": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = {
              msg = .api78.dom/3247};
            const v3261 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .api78.dom/3247[0];
            const v3262 : UInt* = v3261.amount;
            const v3263 : Bool* = v3261.shouldPayWithNetworkToken;
            const v3264 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <user_makeOffer0_127 null>;
            const v3265 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <user_makeOffer0_126 .api78.dom/3247>;
            const v3266 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3264,
              msg = v3265,
              when = true};
            v3246 : Null = null;
             };
          only(Left "Admin_api_acceptOffer") {
            const v3267 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_acceptOffer0_126 .api76.dom/3186>;
            const loanOffer/3268 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .api76.dom/3186[0];
            const v3269 : Bool* = this/3184 == Admin/3007;
            const v3270 : Bool* = ADMIN_WALLET/3012 == this/3184;
            const v3271 : Bool* = (v3269 ? true : v3270);
            let v3272 : Null;
            claim(CT_Assume)(v3271, Just "The current user trying to access this interface is not Admin");
            v3272 : Null = null;
            const x/3273 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3274 : Bool* = (x/3273 ? false : true);
            let v3275 : Null;
            claim(CT_Assume)(v3274, Just "An offer has already been accepted");
            v3275 : Null = null;
            let v3276 : Null;
            const v3277 : Bool* = returnExpression/3039.freeze;
            const v3278 : Bool* = (v3277 ? true : false);
            let v3279 : Null;
            claim(CT_Assume)(v3278, Just "Contract is frozen");
            v3279 : Null = null;
            v3276 : Null = null;
            const v3280 : UInt* = loanOffer/3268.amount;
            const v3281 : Address* = loanOffer/3268.borrower;
            const v3282 : UInt* = loanOffer/3268.offerId;
            const v3283 : Bool* = loanOffer/3268.rejected;
            const m/3284 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3282];
            const v3285 : UInt* = dataTag(m/3284);
            const v3286 : Bool* = v3285 == 1;
            let v3287 : Null;
            claim(CT_Assume)(v3286, Just "Offer id doesn't exist");
            v3287 : Null = null;
            const v3288 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3289 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3288 ];
            const v3290 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3291 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3290 ];
            const v3292 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3293 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3292 ];
            const v3294 : Bool* = paymentToken/3019 == paymentToken/3019;
            claim(CT_Assert)(v3294, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3295 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3296 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3295 ];
             };
          only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
            const v3297 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_cancelLoanOfferandWithdrawCollateral0_126 .api75.dom/3163>;
            const local_config/3298 : UInt* = .api75.dom/3163[0];
            const v3299 : Bool* = this/3161 == Admin/3007;
            const v3300 : Bool* = ADMIN_WALLET/3012 == this/3161;
            const v3301 : Bool* = (v3299 ? true : v3300);
            let v3302 : Null;
            claim(CT_Assume)(v3301, Just "The current user trying to access this interface is not Admin");
            v3302 : Null = null;
            const x/3303 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3304 : Bool* = (x/3303 ? false : true);
            let v3305 : Null;
            claim(CT_Assume)(v3304, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
            v3305 : Null = null;
            let v3306 : Null;
            const v3307 : Bool* = returnExpression/3039.freeze;
            const v3308 : Bool* = (v3307 ? true : false);
            let v3309 : Null;
            claim(CT_Assume)(v3308, Just "Contract is frozen");
            v3309 : Null = null;
            v3306 : Null = null;
            const v3310 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3311 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3310 ];
            const v3312 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3313 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3312 ];
            const v3314 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3315 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3314 ];
            const v3316 : Bool* = paymentToken/3019 == paymentToken/3019;
            claim(CT_Assert)(v3316, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3317 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3318 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3317 ];
             };
          only(Left "Admin_api_freeze") {
            const v3319 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_freeze0_126 .api73.dom/3114>;
            const toggle/3320 : Bool* = .api73.dom/3114[0];
            const v3321 : Bool* = this/3112 == Admin/3007;
            const v3322 : Bool* = ADMIN_WALLET/3012 == this/3112;
            const v3323 : Bool* = (v3321 ? true : v3322);
            let v3324 : Null;
            claim(CT_Assume)(v3323, Just "The current user trying to access this interface is not Admin");
            v3324 : Null = null;
            const x/3325 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3326 : Bool* = (x/3325 ? false : true);
            let v3327 : Null;
            claim(CT_Assume)(v3326, Just "Cannot update config after Loan terms accepted");
            v3327 : Null = null;
            const v3328 : Bool* = returnExpression/3039.freeze;
            const v3329 : Bool* = (v3328 ? false : true);
            const x/3330 : Bool* = (toggle/3320 ? v3328 : v3329);
            const v3331 : Bool* = (x/3330 ? false : true);
            let v3332 : Null;
            claim(CT_Assume)(v3331, Just "The action you are trying to perform has already been done");
            v3332 : Null = null;
            const v3333 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3334 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3333 ];
            const v3335 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3336 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3335 ];
            const v3337 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3338 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3337 ];
            const v3339 : Bool* = paymentToken/3019 == paymentToken/3019;
            claim(CT_Assert)(v3339, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3340 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3341 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3340 ];
             };
          only(Left "Admin_api_updateConfig") {
            const v3342 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_updateConfig0_126 .api72.dom/3085>;
            const local_config/3343 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .api72.dom/3085[0];
            const v3344 : Bool* = this/3083 == Admin/3007;
            const v3345 : Bool* = ADMIN_WALLET/3012 == this/3083;
            const v3346 : Bool* = (v3344 ? true : v3345);
            let v3347 : Null;
            claim(CT_Assume)(v3346, Just "The current user trying to access this interface is not Admin");
            v3347 : Null = null;
            const x/3348 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3349 : Bool* = (x/3348 ? false : true);
            let v3350 : Null;
            claim(CT_Assume)(v3349, Just "Cannot update config after Loan terms accepted");
            v3350 : Null = null;
            const v3351 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3352 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3351 ];
            const v3353 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3354 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3353 ];
            const v3355 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3356 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3355 ];
            const v3357 : Bool* = paymentToken/3019 == paymentToken/3019;
            claim(CT_Assert)(v3357, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3358 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3359 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3358 ];
             };
          only(Left "Admin_api_updateLoanTerms_info") {
            const v3360 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_updateLoanTerms_info0_126 .api74.dom/3138>;
            const local_config/3361 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .api74.dom/3138[0];
            const v3362 : Bool* = this/3136 == Admin/3007;
            const v3363 : Bool* = ADMIN_WALLET/3012 == this/3136;
            const v3364 : Bool* = (v3362 ? true : v3363);
            let v3365 : Null;
            claim(CT_Assume)(v3364, Just "The current user trying to access this interface is not Admin");
            v3365 : Null = null;
            const x/3366 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3367 : Bool* = (x/3366 ? false : true);
            let v3368 : Null;
            claim(CT_Assume)(v3367, Just "Cannot update loan terms after Loan terms accepted");
            v3368 : Null = null;
            const v3369 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3370 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3369 ];
            const v3371 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3372 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3371 ];
            const v3373 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3374 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3373 ];
            const v3375 : Bool* = paymentToken/3019 == paymentToken/3019;
            claim(CT_Assert)(v3375, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3376 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3377 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3376 ];
             };
          only(Left "user_acceptLoan") {
            const v3378 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <user_acceptLoan0_126 .api77.dom/3225>;
            let v3379 : Null;
            const v3380 : Bool* = returnExpression/3039.freeze;
            const v3381 : Bool* = (v3380 ? true : false);
            let v3382 : Null;
            claim(CT_Assume)(v3381, Just "Contract is frozen");
            v3382 : Null = null;
            v3379 : Null = null;
            const acceptedAmount/3383 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
            const x/3384 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3385 : Bool* = (x/3384 ? false : true);
            let v3386 : Null;
            claim(CT_Assume)(v3385, Just "Offer already accepted");
            v3386 : Null = null;
            const v3387 : Bool* = config_as_object/3008.prefersNetworkToken;
            const v3388 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3389 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/3383, v3388 ];
            const v3390 : Tuple(UInt, Token)* = [acceptedAmount/3383, paymentToken/3019 ];
            const v3391 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3390 ];
            const transferData/3392 : Tuple(UInt, Tuple(UInt, Token))* = (v3387 ? v3389 : v3391);
            const networkTokenPay/3393 : UInt* = transferData/3392[0];
            const v3394 : Tuple(UInt, Token)* = transferData/3392[1];
            const amt0/3395 : UInt* = v3394[0];
            const nntok0/3396 : Token* = v3394[1];
            const v3397 : Bool* = nntok0/3396 == paymentToken/3019;
            claim(CT_Assert)(v3397, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3398 : Tuple(UInt, Token)* = [amt0/3395, paymentToken/3019 ];
            const v3399 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/3393, v3398 ];
             };
          only(Left "user_makeOffer") {
            const v3400 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <user_makeOffer0_126 .api78.dom/3247>;
            const v3401 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .api78.dom/3247[0];
            const amount/3402 : UInt* = v3401.amount;
            const shouldPayWithNetworkToken/3403 : Bool* = v3401.shouldPayWithNetworkToken;
            let v3404 : Null;
            const v3405 : Bool* = returnExpression/3039.freeze;
            const v3406 : Bool* = (v3405 ? true : false);
            let v3407 : Null;
            claim(CT_Assume)(v3406, Just "Contract is frozen");
            v3407 : Null = null;
            v3404 : Null = null;
            const v3408 : Bool* = config_as_object/3008.prefersNetworkToken;
            const v3409 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3410 : Tuple(UInt, Tuple(UInt, Token))* = [amount/3402, v3409 ];
            const v3411 : Tuple(UInt, Token)* = [amount/3402, paymentToken/3019 ];
            const v3412 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3411 ];
            const v3413 : Tuple(UInt, Tuple(UInt, Token))* = (v3408 ? v3410 : v3412);
            const networkTokenPay/3414 : UInt* = v3413[0];
            const v3415 : Tuple(UInt, Token)* = v3413[1];
            const amt0/3416 : UInt* = v3415[0];
            const nntok0/3417 : Token* = v3415[1];
            const v3418 : Bool* = nntok0/3417 == paymentToken/3019;
            claim(CT_Assert)(v3418, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3419 : Tuple(UInt, Token)* = [amt0/3416, paymentToken/3019 ];
            const v3420 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/3414, v3419 ];
             };
          publish(@thisConsensusTime/3040)
            .case("Admin_api_acceptOffer").send({
              isClass = True,
              msg = [v3267],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_cancelLoanOfferandWithdrawCollateral").send({
              isClass = True,
              msg = [v3297],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_freeze").send({
              isClass = True,
              msg = [v3319],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_updateConfig").send({
              isClass = True,
              msg = [v3342],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_updateLoanTerms_info").send({
              isClass = True,
              msg = [v3360],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("user_acceptLoan").send({
              isClass = True,
              msg = [v3378],
              pay = [networkTokenPay/3393, (amt0/3395, paymentToken/3019 ) ],
              when = true
              })
            .case("user_makeOffer").send({
              isClass = True,
              msg = [v3400],
              pay = [networkTokenPay/3414, (amt0/3416, paymentToken/3019 ) ],
              when = true
              })
            .recv({
              didSend = didPublish/1821 : Bool,
              from = this/3421 : Address,
              msg = [.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})],
              secs = thisConsensusSecs/3424 : UInt,
              time = thisConsensusTime/3423 : UInt
              }){
              timeOrder(>, Just thisConsensusTime/3040, thisConsensusTime/3423 : UInt);
              timeOrder(>=, Just thisConsensusSecs/3043, thisConsensusSecs/3424 : UInt);
              switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                case Admin_api_acceptOffer0_126 as data_id/3425 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  let v3426 : Null;
                  v3426 : Null = null;
                  const v3427 : Null* = null;
                  let v3428 : Tuple(UInt, Tuple(UInt, Token));
                  local switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as data_id/3429 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const loanOffer/3430 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/3429[0];
                      const v3431 : Bool* = this/3421 == Admin/3007;
                      const v3432 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3433 : Bool* = (v3431 ? true : v3432);
                      let v3434 : Null;
                      claim(CT_Require)(v3433, Just "The current user trying to access this interface is not Admin");
                      v3434 : Null = null;
                      const x/3435 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3436 : Bool* = (x/3435 ? false : true);
                      let v3437 : Null;
                      claim(CT_Require)(v3436, Just "An offer has already been accepted");
                      v3437 : Null = null;
                      let v3438 : Null;
                      const v3439 : Bool* = returnExpression/3039.freeze;
                      const v3440 : Bool* = (v3439 ? true : false);
                      let v3441 : Null;
                      claim(CT_Require)(v3440, Just "Contract is frozen");
                      v3441 : Null = null;
                      v3438 : Null = null;
                      const v3442 : UInt* = loanOffer/3430.amount;
                      const v3443 : Address* = loanOffer/3430.borrower;
                      const v3444 : UInt* = loanOffer/3430.offerId;
                      const v3445 : Bool* = loanOffer/3430.rejected;
                      const m/3446 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3444];
                      const v3447 : UInt* = dataTag(m/3446);
                      const v3448 : Bool* = v3447 == 1;
                      let v3449 : Null;
                      claim(CT_Require)(v3448, Just "Offer id doesn't exist");
                      v3449 : Null = null;
                      const v3450 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3451 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3450 ];
                      const v3452 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3453 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3452 ];
                      const v3454 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3455 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3454 ];
                      v3428 : Tuple(UInt, Tuple(UInt, Token)) = v3455;
                       }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/3456 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/3457 : UInt* = data_id/3456[0];
                      const v3458 : Bool* = this/3421 == Admin/3007;
                      const v3459 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3460 : Bool* = (v3458 ? true : v3459);
                      let v3461 : Null;
                      claim(CT_Require)(v3460, Just "The current user trying to access this interface is not Admin");
                      v3461 : Null = null;
                      const x/3462 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3463 : Bool* = (x/3462 ? false : true);
                      let v3464 : Null;
                      claim(CT_Require)(v3463, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v3464 : Null = null;
                      let v3465 : Null;
                      const v3466 : Bool* = returnExpression/3039.freeze;
                      const v3467 : Bool* = (v3466 ? true : false);
                      let v3468 : Null;
                      claim(CT_Require)(v3467, Just "Contract is frozen");
                      v3468 : Null = null;
                      v3465 : Null = null;
                      const v3469 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3470 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3469 ];
                      const v3471 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3472 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3471 ];
                      const v3473 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3474 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3473 ];
                      v3428 : Tuple(UInt, Tuple(UInt, Token)) = v3474;
                       }
                    case Admin_api_freeze0_126 as data_id/3475 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const toggle/3476 : Bool* = data_id/3475[0];
                      const v3477 : Bool* = this/3421 == Admin/3007;
                      const v3478 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3479 : Bool* = (v3477 ? true : v3478);
                      let v3480 : Null;
                      claim(CT_Require)(v3479, Just "The current user trying to access this interface is not Admin");
                      v3480 : Null = null;
                      const x/3481 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3482 : Bool* = (x/3481 ? false : true);
                      let v3483 : Null;
                      claim(CT_Require)(v3482, Just "Cannot update config after Loan terms accepted");
                      v3483 : Null = null;
                      const v3484 : Bool* = returnExpression/3039.freeze;
                      const v3485 : Bool* = (v3484 ? false : true);
                      const x/3486 : Bool* = (toggle/3476 ? v3484 : v3485);
                      const v3487 : Bool* = (x/3486 ? false : true);
                      let v3488 : Null;
                      claim(CT_Require)(v3487, Just "The action you are trying to perform has already been done");
                      v3488 : Null = null;
                      const v3489 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3490 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3489 ];
                      const v3491 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3492 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3491 ];
                      const v3493 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3494 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3493 ];
                      v3428 : Tuple(UInt, Tuple(UInt, Token)) = v3494;
                       }
                    case Admin_api_updateConfig0_126 as data_id/3495 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/3496 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/3495[0];
                      const v3497 : Bool* = this/3421 == Admin/3007;
                      const v3498 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3499 : Bool* = (v3497 ? true : v3498);
                      let v3500 : Null;
                      claim(CT_Require)(v3499, Just "The current user trying to access this interface is not Admin");
                      v3500 : Null = null;
                      const x/3501 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3502 : Bool* = (x/3501 ? false : true);
                      let v3503 : Null;
                      claim(CT_Require)(v3502, Just "Cannot update config after Loan terms accepted");
                      v3503 : Null = null;
                      const v3504 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3505 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3504 ];
                      const v3506 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3507 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3506 ];
                      const v3508 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3509 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3508 ];
                      v3428 : Tuple(UInt, Tuple(UInt, Token)) = v3509;
                       }
                    case Admin_api_updateLoanTerms_info0_126 as data_id/3510 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/3511 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/3510[0];
                      const v3512 : Bool* = this/3421 == Admin/3007;
                      const v3513 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3514 : Bool* = (v3512 ? true : v3513);
                      let v3515 : Null;
                      claim(CT_Require)(v3514, Just "The current user trying to access this interface is not Admin");
                      v3515 : Null = null;
                      const x/3516 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3517 : Bool* = (x/3516 ? false : true);
                      let v3518 : Null;
                      claim(CT_Require)(v3517, Just "Cannot update loan terms after Loan terms accepted");
                      v3518 : Null = null;
                      const v3519 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3520 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3519 ];
                      const v3521 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3522 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3521 ];
                      const v3523 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3524 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3523 ];
                      v3428 : Tuple(UInt, Tuple(UInt, Token)) = v3524;
                       }
                    case user_acceptLoan0_126 as data_id/3525 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      let v3526 : Null;
                      const v3527 : Bool* = returnExpression/3039.freeze;
                      const v3528 : Bool* = (v3527 ? true : false);
                      let v3529 : Null;
                      claim(CT_Require)(v3528, Just "Contract is frozen");
                      v3529 : Null = null;
                      v3526 : Null = null;
                      const acceptedAmount/3530 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/3531 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3532 : Bool* = (x/3531 ? false : true);
                      let v3533 : Null;
                      claim(CT_Require)(v3532, Just "Offer already accepted");
                      v3533 : Null = null;
                      const v3534 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v3535 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3536 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/3530, v3535 ];
                      const v3537 : Tuple(UInt, Token)* = [acceptedAmount/3530, paymentToken/3019 ];
                      const v3538 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3537 ];
                      const transferData/3539 : Tuple(UInt, Tuple(UInt, Token))* = (v3534 ? v3536 : v3538);
                      v3428 : Tuple(UInt, Tuple(UInt, Token)) = transferData/3539;
                       }
                    case user_makeOffer0_126 as data_id/3540 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const v3541 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/3540[0];
                      const amount/3542 : UInt* = v3541.amount;
                      const shouldPayWithNetworkToken/3543 : Bool* = v3541.shouldPayWithNetworkToken;
                      let v3544 : Null;
                      const v3545 : Bool* = returnExpression/3039.freeze;
                      const v3546 : Bool* = (v3545 ? true : false);
                      let v3547 : Null;
                      claim(CT_Require)(v3546, Just "Contract is frozen");
                      v3547 : Null = null;
                      v3544 : Null = null;
                      const v3548 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v3549 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3550 : Tuple(UInt, Tuple(UInt, Token))* = [amount/3542, v3549 ];
                      const v3551 : Tuple(UInt, Token)* = [amount/3542, paymentToken/3019 ];
                      const v3552 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3551 ];
                      const v3553 : Tuple(UInt, Tuple(UInt, Token))* = (v3548 ? v3550 : v3552);
                      v3428 : Tuple(UInt, Tuple(UInt, Token)) = v3553;
                       } }
                  const networkTokenPay/3554 : UInt* = v3428[0];
                  const v3555 : Tuple(UInt, Token)* = v3428[1];
                  const amt0/3556 : UInt* = v3555[0];
                  const nntok0/3557 : Token* = v3555[1];
                  const v3558 : Bool* = nntok0/3557 == paymentToken/3019;
                  claim(CT_Assert)(v3558, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v3559 : Tuple(UInt, Token)* = [amt0/3556, paymentToken/3019 ];
                  const v3560 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/3554, v3559 ];
                  const netBalance/3561 : UInt* = netBalance/3047;
                  const v3562 : UInt* = netBalance/3561 + networkTokenPay/3554;
                  checkPay(networkTokenPay/3554, None);
                  const initAcc/3563 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/3564 : Tuple(Bool, UInt)* = for (acc/3565 : Tuple(Bool, UInt)* = initAcc/3563; [elem/3566 : Token*],arrIdx/3567 : UInt* in [tokens'/3018]) {
                    const isFound/3568 : Bool* = acc/3565[0];
                    const searchIdx/3569 : UInt* = acc/3565[1];
                    const toksEq/3570 : Bool* = elem/3566 == paymentToken/3019;
                    const cnd/3571 : Bool* = (isFound/3568 ? true : toksEq/3570);
                    const searchIdx'/3572 : UInt* = searchIdx/3569 + 1;
                    const failAcc/3573 : Tuple(Bool, UInt)* = [false, searchIdx'/3572 ];
                    const succAcc/3574 : Tuple(Bool, UInt)* = [true, searchIdx/3569 ];
                    const bl/3575 : Tuple(Bool, UInt)* = (cnd/3571 ? succAcc/3574 : failAcc/3573);
                    
                    return bl/3575;}
                  const tokIdx/3576 : UInt* = res/3564[1];
                  const isFound'/3577 : Bool* = res/3564[0];
                  claim(CT_Assert)(isFound'/3577, Just "Token is tracked");
                  const tokInfo/3578 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/3576];
                  const v3579 : UInt* = tokInfo/3578[0];
                  const v3580 : UInt* = v3579 + amt0/3556;
                  const initAcc/3581 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/3582 : Tuple(Bool, UInt)* = for (acc/3583 : Tuple(Bool, UInt)* = initAcc/3581; [elem/3584 : Token*],arrIdx/3585 : UInt* in [tokens'/3018]) {
                    const isFound/3586 : Bool* = acc/3583[0];
                    const searchIdx/3587 : UInt* = acc/3583[1];
                    const toksEq/3588 : Bool* = elem/3584 == paymentToken/3019;
                    const cnd/3589 : Bool* = (isFound/3586 ? true : toksEq/3588);
                    const searchIdx'/3590 : UInt* = searchIdx/3587 + 1;
                    const failAcc/3591 : Tuple(Bool, UInt)* = [false, searchIdx'/3590 ];
                    const succAcc/3592 : Tuple(Bool, UInt)* = [true, searchIdx/3587 ];
                    const bl/3593 : Tuple(Bool, UInt)* = (cnd/3589 ? succAcc/3592 : failAcc/3591);
                    
                    return bl/3593;}
                  const tokIdx/3594 : UInt* = res/3582[1];
                  const isFound'/3595 : Bool* = res/3582[0];
                  claim(CT_Assert)(isFound'/3595, Just "Token is tracked");
                  const tokInfo/3596 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/3594];
                  const tokInfo'/3597 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/3596, 0, v3580 );
                  const tokInfos'/3598 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/3594, tokInfo'/3597 );
                  checkPay(amt0/3556, Some paymentToken/3019);
                  switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as .fork126.msg/3599 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                      const loanOffer/3600 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/3599[0];
                      const v3601 : Bool* = this/3421 == Admin/3007;
                      const v3602 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3603 : Bool* = (v3601 ? true : v3602);
                      let v3604 : Null;
                      claim(CT_Require)(v3603, Just "The current user trying to access this interface is not Admin");
                      v3604 : Null = null;
                      const x/3605 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3606 : Bool* = (x/3605 ? false : true);
                      let v3607 : Null;
                      claim(CT_Require)(v3606, Just "An offer has already been accepted");
                      v3607 : Null = null;
                      let v3608 : Null;
                      const v3609 : Bool* = returnExpression/3039.freeze;
                      const v3610 : Bool* = (v3609 ? true : false);
                      let v3611 : Null;
                      claim(CT_Require)(v3610, Just "Contract is frozen");
                      v3611 : Null = null;
                      v3608 : Null = null;
                      const v3612 : UInt* = loanOffer/3600.amount;
                      const v3613 : Address* = loanOffer/3600.borrower;
                      const v3614 : UInt* = loanOffer/3600.offerId;
                      const v3615 : Bool* = loanOffer/3600.rejected;
                      const offerInfo/3616 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3614];
                      const v3617 : UInt* = dataTag(offerInfo/3616);
                      const v3618 : Bool* = v3617 == 1;
                      let v3619 : Null;
                      claim(CT_Require)(v3618, Just "Offer id doesn't exist");
                      v3619 : Null = null;
                      const _/3620 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/3599[0];
                      const v3621 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = 0,
                        borrower = this/3421,
                        offerId = 0,
                        rejected = false};
                      const data/3622 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = fromSome(offerInfo/3616, v3621 );
                      const v3623 : Null* = null;
                      const .api76.rngl/3624 : Null* = emitLog(api("Admin_api_acceptOffer"))(v3623 );
                      only(Left "Admin_api_acceptOffer") {
                        const v3625 : Address* = selfAddress("Admin_api_acceptOffer", True, 1908 )();
                        let v3626 : Null;
                        const didPublish/3627 : Bool* = didPublish/1821;
                        local(Just v3626 : Null) if didPublish/3627 then {
                          const v3628 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/3599[0];
                          const v3629 : UInt* = v3628.amount;
                          const v3630 : Address* = v3628.borrower;
                          const v3631 : UInt* = v3628.offerId;
                          const v3632 : Bool* = v3628.rejected;
                          protect<Null>("Admin_api_acceptOffer".interact.out(.fork126.msg/3599, .api76.rngl/3624 ));
                           }
                        else {
                           };
                        v3626 : Null = null;
                         };
                      const v3633 : Null* = null;
                      const v3634 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v3635 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v3636 : Bool* = returnExpression/3039.continue;
                      const v3637 : Bool* = returnExpression/3039.freeze;
                      const v3638 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v3639 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3640 : UInt* = returnExpression/3039.offers;
                      const v3641 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3634,
                        config = v3635,
                        continue = v3636,
                        freeze = v3637,
                        loanTerms = v3638,
                        loanTermsAccepted = true,
                        offers = v3640};
                      const v3642 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3634,
                        config = v3635,
                        continue = v3636,
                        freeze = v3637,
                        loanTerms = v3638,
                        loanTermsAccepted = true,
                        offers = v3640};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3642,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3598,
                        netBalance/3047 : UInt = v3562
                        }
                      continue; }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as .fork126.msg/3643 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                      const local_config/3644 : UInt* = .fork126.msg/3643[0];
                      const v3645 : Bool* = this/3421 == Admin/3007;
                      const v3646 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3647 : Bool* = (v3645 ? true : v3646);
                      let v3648 : Null;
                      claim(CT_Require)(v3647, Just "The current user trying to access this interface is not Admin");
                      v3648 : Null = null;
                      const x/3649 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3650 : Bool* = (x/3649 ? false : true);
                      let v3651 : Null;
                      claim(CT_Require)(v3650, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v3651 : Null = null;
                      let v3652 : Null;
                      const v3653 : Bool* = returnExpression/3039.freeze;
                      const v3654 : Bool* = (v3653 ? true : false);
                      let v3655 : Null;
                      claim(CT_Require)(v3654, Just "Contract is frozen");
                      v3655 : Null = null;
                      v3652 : Null = null;
                      const _/3656 : UInt* = .fork126.msg/3643[0];
                      const v3657 : Null* = null;
                      const .api75.rngl/3658 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v3657 );
                      only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                        const v3659 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                        let v3660 : Null;
                        const didPublish/3661 : Bool* = didPublish/1821;
                        local(Just v3660 : Null) if didPublish/3661 then {
                          const v3662 : UInt* = .fork126.msg/3643[0];
                          protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(.fork126.msg/3643, .api75.rngl/3658 ));
                           }
                        else {
                           };
                        v3660 : Null = null;
                         };
                      const v3663 : Null* = null;
                      const v3664 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v3665 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v3666 : Bool* = returnExpression/3039.continue;
                      const v3667 : Bool* = returnExpression/3039.freeze;
                      const v3668 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v3669 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3670 : UInt* = returnExpression/3039.offers;
                      const v3671 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3664,
                        config = v3665,
                        continue = false,
                        freeze = v3667,
                        loanTerms = v3668,
                        loanTermsAccepted = v3669,
                        offers = v3670};
                      const v3672 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3664,
                        config = v3665,
                        continue = false,
                        freeze = v3667,
                        loanTerms = v3668,
                        loanTermsAccepted = v3669,
                        offers = v3670};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3672,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3598,
                        netBalance/3047 : UInt = v3562
                        }
                      continue; }
                    case Admin_api_freeze0_126 as .fork126.msg/3673 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                      const toggle/3674 : Bool* = .fork126.msg/3673[0];
                      const v3675 : Bool* = this/3421 == Admin/3007;
                      const v3676 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3677 : Bool* = (v3675 ? true : v3676);
                      let v3678 : Null;
                      claim(CT_Require)(v3677, Just "The current user trying to access this interface is not Admin");
                      v3678 : Null = null;
                      const x/3679 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3680 : Bool* = (x/3679 ? false : true);
                      let v3681 : Null;
                      claim(CT_Require)(v3680, Just "Cannot update config after Loan terms accepted");
                      v3681 : Null = null;
                      const v3682 : Bool* = returnExpression/3039.freeze;
                      const v3683 : Bool* = (v3682 ? false : true);
                      const x/3684 : Bool* = (toggle/3674 ? v3682 : v3683);
                      const v3685 : Bool* = (x/3684 ? false : true);
                      let v3686 : Null;
                      claim(CT_Require)(v3685, Just "The action you are trying to perform has already been done");
                      v3686 : Null = null;
                      const _/3687 : Bool* = .fork126.msg/3673[0];
                      const v3688 : Null* = null;
                      const .api73.rngl/3689 : Null* = emitLog(api("Admin_api_freeze"))(v3688 );
                      only(Left "Admin_api_freeze") {
                        const v3690 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                        let v3691 : Null;
                        const didPublish/3692 : Bool* = didPublish/1821;
                        local(Just v3691 : Null) if didPublish/3692 then {
                          const v3693 : Bool* = .fork126.msg/3673[0];
                          protect<Null>("Admin_api_freeze".interact.out(.fork126.msg/3673, .api73.rngl/3689 ));
                           }
                        else {
                           };
                        v3691 : Null = null;
                         };
                      const v3694 : Null* = null;
                      const v3695 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v3696 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v3697 : Bool* = returnExpression/3039.continue;
                      const v3698 : Bool* = returnExpression/3039.freeze;
                      const v3699 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v3700 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3701 : UInt* = returnExpression/3039.offers;
                      const v3702 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3695,
                        config = v3696,
                        continue = v3697,
                        freeze = toggle/3674,
                        loanTerms = v3699,
                        loanTermsAccepted = v3700,
                        offers = v3701};
                      const v3703 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3695,
                        config = v3696,
                        continue = v3697,
                        freeze = toggle/3674,
                        loanTerms = v3699,
                        loanTermsAccepted = v3700,
                        offers = v3701};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3703,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3598,
                        netBalance/3047 : UInt = v3562
                        }
                      continue; }
                    case Admin_api_updateConfig0_126 as .fork126.msg/3704 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                      const local_config/3705 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/3704[0];
                      const v3706 : Bool* = this/3421 == Admin/3007;
                      const v3707 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3708 : Bool* = (v3706 ? true : v3707);
                      let v3709 : Null;
                      claim(CT_Require)(v3708, Just "The current user trying to access this interface is not Admin");
                      v3709 : Null = null;
                      const x/3710 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3711 : Bool* = (x/3710 ? false : true);
                      let v3712 : Null;
                      claim(CT_Require)(v3711, Just "Cannot update config after Loan terms accepted");
                      v3712 : Null = null;
                      const _/3713 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/3704[0];
                      const v3714 : Null* = null;
                      const .api72.rngl/3715 : Null* = emitLog(api("Admin_api_updateConfig"))(v3714 );
                      only(Left "Admin_api_updateConfig") {
                        const v3716 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                        let v3717 : Null;
                        const didPublish/3718 : Bool* = didPublish/1821;
                        local(Just v3717 : Null) if didPublish/3718 then {
                          const v3719 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/3704[0];
                          const v3720 : Token* = v3719.token;
                          const v3721 : UInt* = v3719.number_of_tokens_to_deposit;
                          const v3722 : Token* = v3719.paymentAsset;
                          const v3723 : Bool* = v3719.shouldPayInOnlyNetworkToken;
                          const v3724 : Bool* = v3719.prefersNetworkToken;
                          protect<Null>("Admin_api_updateConfig".interact.out(.fork126.msg/3704, .api72.rngl/3715 ));
                           }
                        else {
                           };
                        v3717 : Null = null;
                         };
                      const v3725 : Null* = null;
                      const v3726 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v3727 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v3728 : Bool* = returnExpression/3039.continue;
                      const v3729 : Bool* = returnExpression/3039.freeze;
                      const v3730 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v3731 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3732 : UInt* = returnExpression/3039.offers;
                      const v3733 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3726,
                        config = local_config/3705,
                        continue = v3728,
                        freeze = v3729,
                        loanTerms = v3730,
                        loanTermsAccepted = v3731,
                        offers = v3732};
                      const v3734 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3726,
                        config = local_config/3705,
                        continue = v3728,
                        freeze = v3729,
                        loanTerms = v3730,
                        loanTermsAccepted = v3731,
                        offers = v3732};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3734,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3598,
                        netBalance/3047 : UInt = v3562
                        }
                      continue; }
                    case Admin_api_updateLoanTerms_info0_126 as .fork126.msg/3735 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                      const local_config/3736 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/3735[0];
                      const v3737 : Bool* = this/3421 == Admin/3007;
                      const v3738 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3739 : Bool* = (v3737 ? true : v3738);
                      let v3740 : Null;
                      claim(CT_Require)(v3739, Just "The current user trying to access this interface is not Admin");
                      v3740 : Null = null;
                      const x/3741 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3742 : Bool* = (x/3741 ? false : true);
                      let v3743 : Null;
                      claim(CT_Require)(v3742, Just "Cannot update loan terms after Loan terms accepted");
                      v3743 : Null = null;
                      const _/3744 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/3735[0];
                      const v3745 : Null* = null;
                      const .api74.rngl/3746 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v3745 );
                      only(Left "Admin_api_updateLoanTerms_info") {
                        const v3747 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                        let v3748 : Null;
                        const didPublish/3749 : Bool* = didPublish/1821;
                        local(Just v3748 : Null) if didPublish/3749 then {
                          const v3750 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/3735[0];
                          const v3751 : UInt* = v3750.duration_in_blocks;
                          const v3752 : UInt* = v3750.principle;
                          const v3753 : Token* = v3750.interest;
                          protect<Null>("Admin_api_updateLoanTerms_info".interact.out(.fork126.msg/3735, .api74.rngl/3746 ));
                           }
                        else {
                           };
                        v3748 : Null = null;
                         };
                      const v3754 : Null* = null;
                      const v3755 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v3756 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v3757 : Bool* = returnExpression/3039.continue;
                      const v3758 : Bool* = returnExpression/3039.freeze;
                      const v3759 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v3760 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3761 : UInt* = returnExpression/3039.offers;
                      const v3762 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3755,
                        config = v3756,
                        continue = v3757,
                        freeze = v3758,
                        loanTerms = local_config/3736,
                        loanTermsAccepted = v3760,
                        offers = v3761};
                      const v3763 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3755,
                        config = v3756,
                        continue = v3757,
                        freeze = v3758,
                        loanTerms = local_config/3736,
                        loanTermsAccepted = v3760,
                        offers = v3761};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3763,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3598,
                        netBalance/3047 : UInt = v3562
                        }
                      continue; }
                    case user_acceptLoan0_126 as .fork126.msg/3764 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                      let v3765 : Null;
                      const v3766 : Bool* = returnExpression/3039.freeze;
                      const v3767 : Bool* = (v3766 ? true : false);
                      let v3768 : Null;
                      claim(CT_Require)(v3767, Just "Contract is frozen");
                      v3768 : Null = null;
                      v3765 : Null = null;
                      const acceptedAmount/3769 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/3770 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3771 : Bool* = (x/3770 ? false : true);
                      let v3772 : Null;
                      claim(CT_Require)(v3771, Just "Offer already accepted");
                      v3772 : Null = null;
                      const v3773 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v3774 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3775 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/3769, v3774 ];
                      const v3776 : Tuple(UInt, Token)* = [acceptedAmount/3769, paymentToken/3019 ];
                      const v3777 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3776 ];
                      const transferData/3778 : Tuple(UInt, Tuple(UInt, Token))* = (v3773 ? v3775 : v3777);
                      const v3779 : Null* = null;
                      const .api77.rngl/3780 : Null* = emitLog(api("user_acceptLoan"))(v3779 );
                      only(Left "user_acceptLoan") {
                        const v3781 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                        let v3782 : Null;
                        const didPublish/3783 : Bool* = didPublish/1821;
                        local(Just v3782 : Null) if didPublish/3783 then {
                          protect<Null>("user_acceptLoan".interact.out(.fork126.msg/3764, .api77.rngl/3780 ));
                           }
                        else {
                           };
                        v3782 : Null = null;
                         };
                      const v3784 : Null* = null;
                      const v3785 : UInt* = transferData/3778[0];
                      const v3786 : Tuple(UInt, Token)* = transferData/3778[1];
                      const v3787 : UInt* = v3786[0];
                      const v3788 : Token* = v3786[1];
                      const netBalance/3789 : UInt* = v3562;
                      const v3790 : Bool* = v3785 <= netBalance/3789;
                      claim(CT_Assert)(v3790, Just "balance sufficient for transfer");
                      const netBalance/3791 : UInt* = v3562;
                      const v3792 : UInt* = netBalance/3791 - v3785;
                      transfer.(v3785, None).to(Admin/3007);
                      const initAcc/3793 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/3794 : Tuple(Bool, UInt)* = for (acc/3795 : Tuple(Bool, UInt)* = initAcc/3793; [elem/3796 : Token*],arrIdx/3797 : UInt* in [tokens'/3018]) {
                        const isFound/3798 : Bool* = acc/3795[0];
                        const searchIdx/3799 : UInt* = acc/3795[1];
                        const toksEq/3800 : Bool* = elem/3796 == v3788;
                        const cnd/3801 : Bool* = (isFound/3798 ? true : toksEq/3800);
                        const searchIdx'/3802 : UInt* = searchIdx/3799 + 1;
                        const failAcc/3803 : Tuple(Bool, UInt)* = [false, searchIdx'/3802 ];
                        const succAcc/3804 : Tuple(Bool, UInt)* = [true, searchIdx/3799 ];
                        const bl/3805 : Tuple(Bool, UInt)* = (cnd/3801 ? succAcc/3804 : failAcc/3803);
                        
                        return bl/3805;}
                      const tokIdx/3806 : UInt* = res/3794[1];
                      const isFound'/3807 : Bool* = res/3794[0];
                      claim(CT_Assert)(isFound'/3807, Just "Token is tracked");
                      const tokInfo/3808 : Tuple(UInt, UInt, Bool)* = tokInfos'/3598[tokIdx/3806];
                      const v3809 : UInt* = tokInfo/3808[0];
                      const v3810 : Bool* = v3787 <= v3809;
                      claim(CT_Assert)(v3810, Just "balance sufficient for transfer");
                      const initAcc/3811 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/3812 : Tuple(Bool, UInt)* = for (acc/3813 : Tuple(Bool, UInt)* = initAcc/3811; [elem/3814 : Token*],arrIdx/3815 : UInt* in [tokens'/3018]) {
                        const isFound/3816 : Bool* = acc/3813[0];
                        const searchIdx/3817 : UInt* = acc/3813[1];
                        const toksEq/3818 : Bool* = elem/3814 == v3788;
                        const cnd/3819 : Bool* = (isFound/3816 ? true : toksEq/3818);
                        const searchIdx'/3820 : UInt* = searchIdx/3817 + 1;
                        const failAcc/3821 : Tuple(Bool, UInt)* = [false, searchIdx'/3820 ];
                        const succAcc/3822 : Tuple(Bool, UInt)* = [true, searchIdx/3817 ];
                        const bl/3823 : Tuple(Bool, UInt)* = (cnd/3819 ? succAcc/3822 : failAcc/3821);
                        
                        return bl/3823;}
                      const tokIdx/3824 : UInt* = res/3812[1];
                      const isFound'/3825 : Bool* = res/3812[0];
                      claim(CT_Assert)(isFound'/3825, Just "Token is tracked");
                      const tokInfo/3826 : Tuple(UInt, UInt, Bool)* = tokInfos'/3598[tokIdx/3824];
                      const v3827 : UInt* = tokInfo/3826[0];
                      const v3828 : UInt* = v3827 - v3787;
                      const initAcc/3829 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/3830 : Tuple(Bool, UInt)* = for (acc/3831 : Tuple(Bool, UInt)* = initAcc/3829; [elem/3832 : Token*],arrIdx/3833 : UInt* in [tokens'/3018]) {
                        const isFound/3834 : Bool* = acc/3831[0];
                        const searchIdx/3835 : UInt* = acc/3831[1];
                        const toksEq/3836 : Bool* = elem/3832 == v3788;
                        const cnd/3837 : Bool* = (isFound/3834 ? true : toksEq/3836);
                        const searchIdx'/3838 : UInt* = searchIdx/3835 + 1;
                        const failAcc/3839 : Tuple(Bool, UInt)* = [false, searchIdx'/3838 ];
                        const succAcc/3840 : Tuple(Bool, UInt)* = [true, searchIdx/3835 ];
                        const bl/3841 : Tuple(Bool, UInt)* = (cnd/3837 ? succAcc/3840 : failAcc/3839);
                        
                        return bl/3841;}
                      const tokIdx/3842 : UInt* = res/3830[1];
                      const isFound'/3843 : Bool* = res/3830[0];
                      claim(CT_Assert)(isFound'/3843, Just "Token is tracked");
                      const tokInfo/3844 : Tuple(UInt, UInt, Bool)* = tokInfos'/3598[tokIdx/3842];
                      const tokInfo'/3845 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/3844, 0, v3828 );
                      const tokInfos'/3846 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/3598, tokIdx/3842, tokInfo'/3845 );
                      transfer.(v3787, Some v3788).to(Admin/3007);
                      const v3847 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v3848 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v3849 : Bool* = returnExpression/3039.continue;
                      const v3850 : Bool* = returnExpression/3039.freeze;
                      const v3851 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v3852 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3853 : UInt* = returnExpression/3039.offers;
                      const v3854 : UInt* = returnExpression/3039.offers;
                      const v3855 : UInt* = v3854 + 1;
                      const v3856 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v3857 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3856,
                        config = v3848,
                        continue = v3849,
                        freeze = v3850,
                        loanTerms = v3851,
                        loanTermsAccepted = true,
                        offers = v3855};
                      const v3858 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v3859 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3858,
                        config = v3848,
                        continue = v3849,
                        freeze = v3850,
                        loanTerms = v3851,
                        loanTermsAccepted = true,
                        offers = v3855};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3859,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3846,
                        netBalance/3047 : UInt = v3792
                        }
                      continue; }
                    case user_makeOffer0_126 as .fork126.msg/3860 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                      const v3861 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/3860[0];
                      const amount/3862 : UInt* = v3861.amount;
                      const shouldPayWithNetworkToken/3863 : Bool* = v3861.shouldPayWithNetworkToken;
                      let v3864 : Null;
                      const v3865 : Bool* = returnExpression/3039.freeze;
                      const v3866 : Bool* = (v3865 ? true : false);
                      let v3867 : Null;
                      claim(CT_Require)(v3866, Just "Contract is frozen");
                      v3867 : Null = null;
                      v3864 : Null = null;
                      const _/3868 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/3860[0];
                      const v3869 : UInt* = returnExpression/3039.offers;
                      const v3870 : UInt* = returnExpression/3039.offers;
                      const v3871 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/3862,
                        borrower = this/3421,
                        offerId = v3870,
                        rejected = false};
                      map0[v3869] = v3871;
                      const v3872 : UInt* = returnExpression/3039.offers;
                      const v3873 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/3862,
                        borrower = this/3421,
                        offerId = v3872,
                        rejected = false};
                      const .api78.rngl/3874 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v3873 );
                      only(Left "user_makeOffer") {
                        const v3875 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                        let v3876 : Null;
                        const didPublish/3877 : Bool* = didPublish/1821;
                        local(Just v3876 : Null) if didPublish/3877 then {
                          const v3878 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/3860[0];
                          const v3879 : UInt* = v3878.amount;
                          const v3880 : Bool* = v3878.shouldPayWithNetworkToken;
                          const v3881 : UInt* = .api78.rngl/3874.amount;
                          const v3882 : Address* = .api78.rngl/3874.borrower;
                          const v3883 : UInt* = .api78.rngl/3874.offerId;
                          const v3884 : Bool* = .api78.rngl/3874.rejected;
                          protect<Null>("user_makeOffer".interact.out(.fork126.msg/3860, .api78.rngl/3874 ));
                           }
                        else {
                           };
                        v3876 : Null = null;
                         };
                      const v3885 : Null* = null;
                      const v3886 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v3887 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v3888 : Bool* = returnExpression/3039.continue;
                      const v3889 : Bool* = returnExpression/3039.freeze;
                      const v3890 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v3891 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3892 : UInt* = returnExpression/3039.offers;
                      const v3893 : UInt* = returnExpression/3039.offers;
                      const v3894 : UInt* = v3893 + 1;
                      const v3895 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3886,
                        config = v3887,
                        continue = v3888,
                        freeze = v3889,
                        loanTerms = v3890,
                        loanTermsAccepted = v3891,
                        offers = v3894};
                      const v3896 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v3886,
                        config = v3887,
                        continue = v3888,
                        freeze = v3889,
                        loanTerms = v3890,
                        loanTermsAccepted = v3891,
                        offers = v3894};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3896,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/3598,
                        netBalance/3047 : UInt = v3562
                        }
                      continue; } } }
                case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/3897 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  let v3898 : Null;
                  v3898 : Null = null;
                  const v3899 : Null* = null;
                  let v3900 : Tuple(UInt, Tuple(UInt, Token));
                  local switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as data_id/3901 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const loanOffer/3902 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/3901[0];
                      const v3903 : Bool* = this/3421 == Admin/3007;
                      const v3904 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3905 : Bool* = (v3903 ? true : v3904);
                      let v3906 : Null;
                      claim(CT_Require)(v3905, Just "The current user trying to access this interface is not Admin");
                      v3906 : Null = null;
                      const x/3907 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3908 : Bool* = (x/3907 ? false : true);
                      let v3909 : Null;
                      claim(CT_Require)(v3908, Just "An offer has already been accepted");
                      v3909 : Null = null;
                      let v3910 : Null;
                      const v3911 : Bool* = returnExpression/3039.freeze;
                      const v3912 : Bool* = (v3911 ? true : false);
                      let v3913 : Null;
                      claim(CT_Require)(v3912, Just "Contract is frozen");
                      v3913 : Null = null;
                      v3910 : Null = null;
                      const v3914 : UInt* = loanOffer/3902.amount;
                      const v3915 : Address* = loanOffer/3902.borrower;
                      const v3916 : UInt* = loanOffer/3902.offerId;
                      const v3917 : Bool* = loanOffer/3902.rejected;
                      const m/3918 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3916];
                      const v3919 : UInt* = dataTag(m/3918);
                      const v3920 : Bool* = v3919 == 1;
                      let v3921 : Null;
                      claim(CT_Require)(v3920, Just "Offer id doesn't exist");
                      v3921 : Null = null;
                      const v3922 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3923 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3922 ];
                      const v3924 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3925 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3924 ];
                      const v3926 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3927 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3926 ];
                      v3900 : Tuple(UInt, Tuple(UInt, Token)) = v3927;
                       }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/3928 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/3929 : UInt* = data_id/3928[0];
                      const v3930 : Bool* = this/3421 == Admin/3007;
                      const v3931 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3932 : Bool* = (v3930 ? true : v3931);
                      let v3933 : Null;
                      claim(CT_Require)(v3932, Just "The current user trying to access this interface is not Admin");
                      v3933 : Null = null;
                      const x/3934 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3935 : Bool* = (x/3934 ? false : true);
                      let v3936 : Null;
                      claim(CT_Require)(v3935, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v3936 : Null = null;
                      let v3937 : Null;
                      const v3938 : Bool* = returnExpression/3039.freeze;
                      const v3939 : Bool* = (v3938 ? true : false);
                      let v3940 : Null;
                      claim(CT_Require)(v3939, Just "Contract is frozen");
                      v3940 : Null = null;
                      v3937 : Null = null;
                      const v3941 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3942 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3941 ];
                      const v3943 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3944 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3943 ];
                      const v3945 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3946 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3945 ];
                      v3900 : Tuple(UInt, Tuple(UInt, Token)) = v3946;
                       }
                    case Admin_api_freeze0_126 as data_id/3947 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const toggle/3948 : Bool* = data_id/3947[0];
                      const v3949 : Bool* = this/3421 == Admin/3007;
                      const v3950 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3951 : Bool* = (v3949 ? true : v3950);
                      let v3952 : Null;
                      claim(CT_Require)(v3951, Just "The current user trying to access this interface is not Admin");
                      v3952 : Null = null;
                      const x/3953 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3954 : Bool* = (x/3953 ? false : true);
                      let v3955 : Null;
                      claim(CT_Require)(v3954, Just "Cannot update config after Loan terms accepted");
                      v3955 : Null = null;
                      const v3956 : Bool* = returnExpression/3039.freeze;
                      const v3957 : Bool* = (v3956 ? false : true);
                      const x/3958 : Bool* = (toggle/3948 ? v3956 : v3957);
                      const v3959 : Bool* = (x/3958 ? false : true);
                      let v3960 : Null;
                      claim(CT_Require)(v3959, Just "The action you are trying to perform has already been done");
                      v3960 : Null = null;
                      const v3961 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3962 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3961 ];
                      const v3963 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3964 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3963 ];
                      const v3965 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3966 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3965 ];
                      v3900 : Tuple(UInt, Tuple(UInt, Token)) = v3966;
                       }
                    case Admin_api_updateConfig0_126 as data_id/3967 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/3968 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/3967[0];
                      const v3969 : Bool* = this/3421 == Admin/3007;
                      const v3970 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3971 : Bool* = (v3969 ? true : v3970);
                      let v3972 : Null;
                      claim(CT_Require)(v3971, Just "The current user trying to access this interface is not Admin");
                      v3972 : Null = null;
                      const x/3973 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3974 : Bool* = (x/3973 ? false : true);
                      let v3975 : Null;
                      claim(CT_Require)(v3974, Just "Cannot update config after Loan terms accepted");
                      v3975 : Null = null;
                      const v3976 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3977 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3976 ];
                      const v3978 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3979 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3978 ];
                      const v3980 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3981 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3980 ];
                      v3900 : Tuple(UInt, Tuple(UInt, Token)) = v3981;
                       }
                    case Admin_api_updateLoanTerms_info0_126 as data_id/3982 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/3983 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/3982[0];
                      const v3984 : Bool* = this/3421 == Admin/3007;
                      const v3985 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v3986 : Bool* = (v3984 ? true : v3985);
                      let v3987 : Null;
                      claim(CT_Require)(v3986, Just "The current user trying to access this interface is not Admin");
                      v3987 : Null = null;
                      const x/3988 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v3989 : Bool* = (x/3988 ? false : true);
                      let v3990 : Null;
                      claim(CT_Require)(v3989, Just "Cannot update loan terms after Loan terms accepted");
                      v3990 : Null = null;
                      const v3991 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3992 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3991 ];
                      const v3993 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3994 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3993 ];
                      const v3995 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v3996 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3995 ];
                      v3900 : Tuple(UInt, Tuple(UInt, Token)) = v3996;
                       }
                    case user_acceptLoan0_126 as data_id/3997 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      let v3998 : Null;
                      const v3999 : Bool* = returnExpression/3039.freeze;
                      const v4000 : Bool* = (v3999 ? true : false);
                      let v4001 : Null;
                      claim(CT_Require)(v4000, Just "Contract is frozen");
                      v4001 : Null = null;
                      v3998 : Null = null;
                      const acceptedAmount/4002 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/4003 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4004 : Bool* = (x/4003 ? false : true);
                      let v4005 : Null;
                      claim(CT_Require)(v4004, Just "Offer already accepted");
                      v4005 : Null = null;
                      const v4006 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4007 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4008 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/4002, v4007 ];
                      const v4009 : Tuple(UInt, Token)* = [acceptedAmount/4002, paymentToken/3019 ];
                      const v4010 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4009 ];
                      const transferData/4011 : Tuple(UInt, Tuple(UInt, Token))* = (v4006 ? v4008 : v4010);
                      v3900 : Tuple(UInt, Tuple(UInt, Token)) = transferData/4011;
                       }
                    case user_makeOffer0_126 as data_id/4012 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const v4013 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/4012[0];
                      const amount/4014 : UInt* = v4013.amount;
                      const shouldPayWithNetworkToken/4015 : Bool* = v4013.shouldPayWithNetworkToken;
                      let v4016 : Null;
                      const v4017 : Bool* = returnExpression/3039.freeze;
                      const v4018 : Bool* = (v4017 ? true : false);
                      let v4019 : Null;
                      claim(CT_Require)(v4018, Just "Contract is frozen");
                      v4019 : Null = null;
                      v4016 : Null = null;
                      const v4020 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4021 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4022 : Tuple(UInt, Tuple(UInt, Token))* = [amount/4014, v4021 ];
                      const v4023 : Tuple(UInt, Token)* = [amount/4014, paymentToken/3019 ];
                      const v4024 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4023 ];
                      const v4025 : Tuple(UInt, Tuple(UInt, Token))* = (v4020 ? v4022 : v4024);
                      v3900 : Tuple(UInt, Tuple(UInt, Token)) = v4025;
                       } }
                  const networkTokenPay/4026 : UInt* = v3900[0];
                  const v4027 : Tuple(UInt, Token)* = v3900[1];
                  const amt0/4028 : UInt* = v4027[0];
                  const nntok0/4029 : Token* = v4027[1];
                  const v4030 : Bool* = nntok0/4029 == paymentToken/3019;
                  claim(CT_Assert)(v4030, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v4031 : Tuple(UInt, Token)* = [amt0/4028, paymentToken/3019 ];
                  const v4032 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/4026, v4031 ];
                  const netBalance/4033 : UInt* = netBalance/3047;
                  const v4034 : UInt* = netBalance/4033 + networkTokenPay/4026;
                  checkPay(networkTokenPay/4026, None);
                  const initAcc/4035 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/4036 : Tuple(Bool, UInt)* = for (acc/4037 : Tuple(Bool, UInt)* = initAcc/4035; [elem/4038 : Token*],arrIdx/4039 : UInt* in [tokens'/3018]) {
                    const isFound/4040 : Bool* = acc/4037[0];
                    const searchIdx/4041 : UInt* = acc/4037[1];
                    const toksEq/4042 : Bool* = elem/4038 == paymentToken/3019;
                    const cnd/4043 : Bool* = (isFound/4040 ? true : toksEq/4042);
                    const searchIdx'/4044 : UInt* = searchIdx/4041 + 1;
                    const failAcc/4045 : Tuple(Bool, UInt)* = [false, searchIdx'/4044 ];
                    const succAcc/4046 : Tuple(Bool, UInt)* = [true, searchIdx/4041 ];
                    const bl/4047 : Tuple(Bool, UInt)* = (cnd/4043 ? succAcc/4046 : failAcc/4045);
                    
                    return bl/4047;}
                  const tokIdx/4048 : UInt* = res/4036[1];
                  const isFound'/4049 : Bool* = res/4036[0];
                  claim(CT_Assert)(isFound'/4049, Just "Token is tracked");
                  const tokInfo/4050 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4048];
                  const v4051 : UInt* = tokInfo/4050[0];
                  const v4052 : UInt* = v4051 + amt0/4028;
                  const initAcc/4053 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/4054 : Tuple(Bool, UInt)* = for (acc/4055 : Tuple(Bool, UInt)* = initAcc/4053; [elem/4056 : Token*],arrIdx/4057 : UInt* in [tokens'/3018]) {
                    const isFound/4058 : Bool* = acc/4055[0];
                    const searchIdx/4059 : UInt* = acc/4055[1];
                    const toksEq/4060 : Bool* = elem/4056 == paymentToken/3019;
                    const cnd/4061 : Bool* = (isFound/4058 ? true : toksEq/4060);
                    const searchIdx'/4062 : UInt* = searchIdx/4059 + 1;
                    const failAcc/4063 : Tuple(Bool, UInt)* = [false, searchIdx'/4062 ];
                    const succAcc/4064 : Tuple(Bool, UInt)* = [true, searchIdx/4059 ];
                    const bl/4065 : Tuple(Bool, UInt)* = (cnd/4061 ? succAcc/4064 : failAcc/4063);
                    
                    return bl/4065;}
                  const tokIdx/4066 : UInt* = res/4054[1];
                  const isFound'/4067 : Bool* = res/4054[0];
                  claim(CT_Assert)(isFound'/4067, Just "Token is tracked");
                  const tokInfo/4068 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4066];
                  const tokInfo'/4069 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/4068, 0, v4052 );
                  const tokInfos'/4070 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/4066, tokInfo'/4069 );
                  checkPay(amt0/4028, Some paymentToken/3019);
                  switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as .fork126.msg/4071 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                      const loanOffer/4072 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/4071[0];
                      const v4073 : Bool* = this/3421 == Admin/3007;
                      const v4074 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4075 : Bool* = (v4073 ? true : v4074);
                      let v4076 : Null;
                      claim(CT_Require)(v4075, Just "The current user trying to access this interface is not Admin");
                      v4076 : Null = null;
                      const x/4077 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4078 : Bool* = (x/4077 ? false : true);
                      let v4079 : Null;
                      claim(CT_Require)(v4078, Just "An offer has already been accepted");
                      v4079 : Null = null;
                      let v4080 : Null;
                      const v4081 : Bool* = returnExpression/3039.freeze;
                      const v4082 : Bool* = (v4081 ? true : false);
                      let v4083 : Null;
                      claim(CT_Require)(v4082, Just "Contract is frozen");
                      v4083 : Null = null;
                      v4080 : Null = null;
                      const v4084 : UInt* = loanOffer/4072.amount;
                      const v4085 : Address* = loanOffer/4072.borrower;
                      const v4086 : UInt* = loanOffer/4072.offerId;
                      const v4087 : Bool* = loanOffer/4072.rejected;
                      const offerInfo/4088 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v4086];
                      const v4089 : UInt* = dataTag(offerInfo/4088);
                      const v4090 : Bool* = v4089 == 1;
                      let v4091 : Null;
                      claim(CT_Require)(v4090, Just "Offer id doesn't exist");
                      v4091 : Null = null;
                      const _/4092 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/4071[0];
                      const v4093 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = 0,
                        borrower = this/3421,
                        offerId = 0,
                        rejected = false};
                      const data/4094 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = fromSome(offerInfo/4088, v4093 );
                      const v4095 : Null* = null;
                      const .api76.rngl/4096 : Null* = emitLog(api("Admin_api_acceptOffer"))(v4095 );
                      only(Left "Admin_api_acceptOffer") {
                        const v4097 : Address* = selfAddress("Admin_api_acceptOffer", True, 1908 )();
                        let v4098 : Null;
                        const didPublish/4099 : Bool* = didPublish/1821;
                        local(Just v4098 : Null) if didPublish/4099 then {
                          const v4100 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/4071[0];
                          const v4101 : UInt* = v4100.amount;
                          const v4102 : Address* = v4100.borrower;
                          const v4103 : UInt* = v4100.offerId;
                          const v4104 : Bool* = v4100.rejected;
                          protect<Null>("Admin_api_acceptOffer".interact.out(.fork126.msg/4071, .api76.rngl/4096 ));
                           }
                        else {
                           };
                        v4098 : Null = null;
                         };
                      const v4105 : Null* = null;
                      const v4106 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4107 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4108 : Bool* = returnExpression/3039.continue;
                      const v4109 : Bool* = returnExpression/3039.freeze;
                      const v4110 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4111 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4112 : UInt* = returnExpression/3039.offers;
                      const v4113 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4106,
                        config = v4107,
                        continue = v4108,
                        freeze = v4109,
                        loanTerms = v4110,
                        loanTermsAccepted = true,
                        offers = v4112};
                      const v4114 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4106,
                        config = v4107,
                        continue = v4108,
                        freeze = v4109,
                        loanTerms = v4110,
                        loanTermsAccepted = true,
                        offers = v4112};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4114,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4070,
                        netBalance/3047 : UInt = v4034
                        }
                      continue; }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as .fork126.msg/4115 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                      const local_config/4116 : UInt* = .fork126.msg/4115[0];
                      const v4117 : Bool* = this/3421 == Admin/3007;
                      const v4118 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4119 : Bool* = (v4117 ? true : v4118);
                      let v4120 : Null;
                      claim(CT_Require)(v4119, Just "The current user trying to access this interface is not Admin");
                      v4120 : Null = null;
                      const x/4121 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4122 : Bool* = (x/4121 ? false : true);
                      let v4123 : Null;
                      claim(CT_Require)(v4122, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v4123 : Null = null;
                      let v4124 : Null;
                      const v4125 : Bool* = returnExpression/3039.freeze;
                      const v4126 : Bool* = (v4125 ? true : false);
                      let v4127 : Null;
                      claim(CT_Require)(v4126, Just "Contract is frozen");
                      v4127 : Null = null;
                      v4124 : Null = null;
                      const _/4128 : UInt* = .fork126.msg/4115[0];
                      const v4129 : Null* = null;
                      const .api75.rngl/4130 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v4129 );
                      only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                        const v4131 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                        let v4132 : Null;
                        const didPublish/4133 : Bool* = didPublish/1821;
                        local(Just v4132 : Null) if didPublish/4133 then {
                          const v4134 : UInt* = .fork126.msg/4115[0];
                          protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(.fork126.msg/4115, .api75.rngl/4130 ));
                           }
                        else {
                           };
                        v4132 : Null = null;
                         };
                      const v4135 : Null* = null;
                      const v4136 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4137 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4138 : Bool* = returnExpression/3039.continue;
                      const v4139 : Bool* = returnExpression/3039.freeze;
                      const v4140 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4141 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4142 : UInt* = returnExpression/3039.offers;
                      const v4143 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4136,
                        config = v4137,
                        continue = false,
                        freeze = v4139,
                        loanTerms = v4140,
                        loanTermsAccepted = v4141,
                        offers = v4142};
                      const v4144 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4136,
                        config = v4137,
                        continue = false,
                        freeze = v4139,
                        loanTerms = v4140,
                        loanTermsAccepted = v4141,
                        offers = v4142};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4144,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4070,
                        netBalance/3047 : UInt = v4034
                        }
                      continue; }
                    case Admin_api_freeze0_126 as .fork126.msg/4145 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                      const toggle/4146 : Bool* = .fork126.msg/4145[0];
                      const v4147 : Bool* = this/3421 == Admin/3007;
                      const v4148 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4149 : Bool* = (v4147 ? true : v4148);
                      let v4150 : Null;
                      claim(CT_Require)(v4149, Just "The current user trying to access this interface is not Admin");
                      v4150 : Null = null;
                      const x/4151 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4152 : Bool* = (x/4151 ? false : true);
                      let v4153 : Null;
                      claim(CT_Require)(v4152, Just "Cannot update config after Loan terms accepted");
                      v4153 : Null = null;
                      const v4154 : Bool* = returnExpression/3039.freeze;
                      const v4155 : Bool* = (v4154 ? false : true);
                      const x/4156 : Bool* = (toggle/4146 ? v4154 : v4155);
                      const v4157 : Bool* = (x/4156 ? false : true);
                      let v4158 : Null;
                      claim(CT_Require)(v4157, Just "The action you are trying to perform has already been done");
                      v4158 : Null = null;
                      const _/4159 : Bool* = .fork126.msg/4145[0];
                      const v4160 : Null* = null;
                      const .api73.rngl/4161 : Null* = emitLog(api("Admin_api_freeze"))(v4160 );
                      only(Left "Admin_api_freeze") {
                        const v4162 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                        let v4163 : Null;
                        const didPublish/4164 : Bool* = didPublish/1821;
                        local(Just v4163 : Null) if didPublish/4164 then {
                          const v4165 : Bool* = .fork126.msg/4145[0];
                          protect<Null>("Admin_api_freeze".interact.out(.fork126.msg/4145, .api73.rngl/4161 ));
                           }
                        else {
                           };
                        v4163 : Null = null;
                         };
                      const v4166 : Null* = null;
                      const v4167 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4168 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4169 : Bool* = returnExpression/3039.continue;
                      const v4170 : Bool* = returnExpression/3039.freeze;
                      const v4171 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4172 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4173 : UInt* = returnExpression/3039.offers;
                      const v4174 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4167,
                        config = v4168,
                        continue = v4169,
                        freeze = toggle/4146,
                        loanTerms = v4171,
                        loanTermsAccepted = v4172,
                        offers = v4173};
                      const v4175 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4167,
                        config = v4168,
                        continue = v4169,
                        freeze = toggle/4146,
                        loanTerms = v4171,
                        loanTermsAccepted = v4172,
                        offers = v4173};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4175,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4070,
                        netBalance/3047 : UInt = v4034
                        }
                      continue; }
                    case Admin_api_updateConfig0_126 as .fork126.msg/4176 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                      const local_config/4177 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/4176[0];
                      const v4178 : Bool* = this/3421 == Admin/3007;
                      const v4179 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4180 : Bool* = (v4178 ? true : v4179);
                      let v4181 : Null;
                      claim(CT_Require)(v4180, Just "The current user trying to access this interface is not Admin");
                      v4181 : Null = null;
                      const x/4182 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4183 : Bool* = (x/4182 ? false : true);
                      let v4184 : Null;
                      claim(CT_Require)(v4183, Just "Cannot update config after Loan terms accepted");
                      v4184 : Null = null;
                      const _/4185 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/4176[0];
                      const v4186 : Null* = null;
                      const .api72.rngl/4187 : Null* = emitLog(api("Admin_api_updateConfig"))(v4186 );
                      only(Left "Admin_api_updateConfig") {
                        const v4188 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                        let v4189 : Null;
                        const didPublish/4190 : Bool* = didPublish/1821;
                        local(Just v4189 : Null) if didPublish/4190 then {
                          const v4191 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/4176[0];
                          const v4192 : Token* = v4191.token;
                          const v4193 : UInt* = v4191.number_of_tokens_to_deposit;
                          const v4194 : Token* = v4191.paymentAsset;
                          const v4195 : Bool* = v4191.shouldPayInOnlyNetworkToken;
                          const v4196 : Bool* = v4191.prefersNetworkToken;
                          protect<Null>("Admin_api_updateConfig".interact.out(.fork126.msg/4176, .api72.rngl/4187 ));
                           }
                        else {
                           };
                        v4189 : Null = null;
                         };
                      const v4197 : Null* = null;
                      const v4198 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4199 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4200 : Bool* = returnExpression/3039.continue;
                      const v4201 : Bool* = returnExpression/3039.freeze;
                      const v4202 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4203 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4204 : UInt* = returnExpression/3039.offers;
                      const v4205 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4198,
                        config = local_config/4177,
                        continue = v4200,
                        freeze = v4201,
                        loanTerms = v4202,
                        loanTermsAccepted = v4203,
                        offers = v4204};
                      const v4206 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4198,
                        config = local_config/4177,
                        continue = v4200,
                        freeze = v4201,
                        loanTerms = v4202,
                        loanTermsAccepted = v4203,
                        offers = v4204};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4206,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4070,
                        netBalance/3047 : UInt = v4034
                        }
                      continue; }
                    case Admin_api_updateLoanTerms_info0_126 as .fork126.msg/4207 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                      const local_config/4208 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/4207[0];
                      const v4209 : Bool* = this/3421 == Admin/3007;
                      const v4210 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4211 : Bool* = (v4209 ? true : v4210);
                      let v4212 : Null;
                      claim(CT_Require)(v4211, Just "The current user trying to access this interface is not Admin");
                      v4212 : Null = null;
                      const x/4213 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4214 : Bool* = (x/4213 ? false : true);
                      let v4215 : Null;
                      claim(CT_Require)(v4214, Just "Cannot update loan terms after Loan terms accepted");
                      v4215 : Null = null;
                      const _/4216 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/4207[0];
                      const v4217 : Null* = null;
                      const .api74.rngl/4218 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v4217 );
                      only(Left "Admin_api_updateLoanTerms_info") {
                        const v4219 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                        let v4220 : Null;
                        const didPublish/4221 : Bool* = didPublish/1821;
                        local(Just v4220 : Null) if didPublish/4221 then {
                          const v4222 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/4207[0];
                          const v4223 : UInt* = v4222.duration_in_blocks;
                          const v4224 : UInt* = v4222.principle;
                          const v4225 : Token* = v4222.interest;
                          protect<Null>("Admin_api_updateLoanTerms_info".interact.out(.fork126.msg/4207, .api74.rngl/4218 ));
                           }
                        else {
                           };
                        v4220 : Null = null;
                         };
                      const v4226 : Null* = null;
                      const v4227 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4228 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4229 : Bool* = returnExpression/3039.continue;
                      const v4230 : Bool* = returnExpression/3039.freeze;
                      const v4231 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4232 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4233 : UInt* = returnExpression/3039.offers;
                      const v4234 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4227,
                        config = v4228,
                        continue = v4229,
                        freeze = v4230,
                        loanTerms = local_config/4208,
                        loanTermsAccepted = v4232,
                        offers = v4233};
                      const v4235 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4227,
                        config = v4228,
                        continue = v4229,
                        freeze = v4230,
                        loanTerms = local_config/4208,
                        loanTermsAccepted = v4232,
                        offers = v4233};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4235,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4070,
                        netBalance/3047 : UInt = v4034
                        }
                      continue; }
                    case user_acceptLoan0_126 as .fork126.msg/4236 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                      let v4237 : Null;
                      const v4238 : Bool* = returnExpression/3039.freeze;
                      const v4239 : Bool* = (v4238 ? true : false);
                      let v4240 : Null;
                      claim(CT_Require)(v4239, Just "Contract is frozen");
                      v4240 : Null = null;
                      v4237 : Null = null;
                      const acceptedAmount/4241 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/4242 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4243 : Bool* = (x/4242 ? false : true);
                      let v4244 : Null;
                      claim(CT_Require)(v4243, Just "Offer already accepted");
                      v4244 : Null = null;
                      const v4245 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4246 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4247 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/4241, v4246 ];
                      const v4248 : Tuple(UInt, Token)* = [acceptedAmount/4241, paymentToken/3019 ];
                      const v4249 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4248 ];
                      const transferData/4250 : Tuple(UInt, Tuple(UInt, Token))* = (v4245 ? v4247 : v4249);
                      const v4251 : Null* = null;
                      const .api77.rngl/4252 : Null* = emitLog(api("user_acceptLoan"))(v4251 );
                      only(Left "user_acceptLoan") {
                        const v4253 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                        let v4254 : Null;
                        const didPublish/4255 : Bool* = didPublish/1821;
                        local(Just v4254 : Null) if didPublish/4255 then {
                          protect<Null>("user_acceptLoan".interact.out(.fork126.msg/4236, .api77.rngl/4252 ));
                           }
                        else {
                           };
                        v4254 : Null = null;
                         };
                      const v4256 : Null* = null;
                      const v4257 : UInt* = transferData/4250[0];
                      const v4258 : Tuple(UInt, Token)* = transferData/4250[1];
                      const v4259 : UInt* = v4258[0];
                      const v4260 : Token* = v4258[1];
                      const netBalance/4261 : UInt* = v4034;
                      const v4262 : Bool* = v4257 <= netBalance/4261;
                      claim(CT_Assert)(v4262, Just "balance sufficient for transfer");
                      const netBalance/4263 : UInt* = v4034;
                      const v4264 : UInt* = netBalance/4263 - v4257;
                      transfer.(v4257, None).to(Admin/3007);
                      const initAcc/4265 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/4266 : Tuple(Bool, UInt)* = for (acc/4267 : Tuple(Bool, UInt)* = initAcc/4265; [elem/4268 : Token*],arrIdx/4269 : UInt* in [tokens'/3018]) {
                        const isFound/4270 : Bool* = acc/4267[0];
                        const searchIdx/4271 : UInt* = acc/4267[1];
                        const toksEq/4272 : Bool* = elem/4268 == v4260;
                        const cnd/4273 : Bool* = (isFound/4270 ? true : toksEq/4272);
                        const searchIdx'/4274 : UInt* = searchIdx/4271 + 1;
                        const failAcc/4275 : Tuple(Bool, UInt)* = [false, searchIdx'/4274 ];
                        const succAcc/4276 : Tuple(Bool, UInt)* = [true, searchIdx/4271 ];
                        const bl/4277 : Tuple(Bool, UInt)* = (cnd/4273 ? succAcc/4276 : failAcc/4275);
                        
                        return bl/4277;}
                      const tokIdx/4278 : UInt* = res/4266[1];
                      const isFound'/4279 : Bool* = res/4266[0];
                      claim(CT_Assert)(isFound'/4279, Just "Token is tracked");
                      const tokInfo/4280 : Tuple(UInt, UInt, Bool)* = tokInfos'/4070[tokIdx/4278];
                      const v4281 : UInt* = tokInfo/4280[0];
                      const v4282 : Bool* = v4259 <= v4281;
                      claim(CT_Assert)(v4282, Just "balance sufficient for transfer");
                      const initAcc/4283 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/4284 : Tuple(Bool, UInt)* = for (acc/4285 : Tuple(Bool, UInt)* = initAcc/4283; [elem/4286 : Token*],arrIdx/4287 : UInt* in [tokens'/3018]) {
                        const isFound/4288 : Bool* = acc/4285[0];
                        const searchIdx/4289 : UInt* = acc/4285[1];
                        const toksEq/4290 : Bool* = elem/4286 == v4260;
                        const cnd/4291 : Bool* = (isFound/4288 ? true : toksEq/4290);
                        const searchIdx'/4292 : UInt* = searchIdx/4289 + 1;
                        const failAcc/4293 : Tuple(Bool, UInt)* = [false, searchIdx'/4292 ];
                        const succAcc/4294 : Tuple(Bool, UInt)* = [true, searchIdx/4289 ];
                        const bl/4295 : Tuple(Bool, UInt)* = (cnd/4291 ? succAcc/4294 : failAcc/4293);
                        
                        return bl/4295;}
                      const tokIdx/4296 : UInt* = res/4284[1];
                      const isFound'/4297 : Bool* = res/4284[0];
                      claim(CT_Assert)(isFound'/4297, Just "Token is tracked");
                      const tokInfo/4298 : Tuple(UInt, UInt, Bool)* = tokInfos'/4070[tokIdx/4296];
                      const v4299 : UInt* = tokInfo/4298[0];
                      const v4300 : UInt* = v4299 - v4259;
                      const initAcc/4301 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/4302 : Tuple(Bool, UInt)* = for (acc/4303 : Tuple(Bool, UInt)* = initAcc/4301; [elem/4304 : Token*],arrIdx/4305 : UInt* in [tokens'/3018]) {
                        const isFound/4306 : Bool* = acc/4303[0];
                        const searchIdx/4307 : UInt* = acc/4303[1];
                        const toksEq/4308 : Bool* = elem/4304 == v4260;
                        const cnd/4309 : Bool* = (isFound/4306 ? true : toksEq/4308);
                        const searchIdx'/4310 : UInt* = searchIdx/4307 + 1;
                        const failAcc/4311 : Tuple(Bool, UInt)* = [false, searchIdx'/4310 ];
                        const succAcc/4312 : Tuple(Bool, UInt)* = [true, searchIdx/4307 ];
                        const bl/4313 : Tuple(Bool, UInt)* = (cnd/4309 ? succAcc/4312 : failAcc/4311);
                        
                        return bl/4313;}
                      const tokIdx/4314 : UInt* = res/4302[1];
                      const isFound'/4315 : Bool* = res/4302[0];
                      claim(CT_Assert)(isFound'/4315, Just "Token is tracked");
                      const tokInfo/4316 : Tuple(UInt, UInt, Bool)* = tokInfos'/4070[tokIdx/4314];
                      const tokInfo'/4317 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/4316, 0, v4300 );
                      const tokInfos'/4318 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/4070, tokIdx/4314, tokInfo'/4317 );
                      transfer.(v4259, Some v4260).to(Admin/3007);
                      const v4319 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4320 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4321 : Bool* = returnExpression/3039.continue;
                      const v4322 : Bool* = returnExpression/3039.freeze;
                      const v4323 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4324 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4325 : UInt* = returnExpression/3039.offers;
                      const v4326 : UInt* = returnExpression/3039.offers;
                      const v4327 : UInt* = v4326 + 1;
                      const v4328 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v4329 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4328,
                        config = v4320,
                        continue = v4321,
                        freeze = v4322,
                        loanTerms = v4323,
                        loanTermsAccepted = true,
                        offers = v4327};
                      const v4330 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v4331 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4330,
                        config = v4320,
                        continue = v4321,
                        freeze = v4322,
                        loanTerms = v4323,
                        loanTermsAccepted = true,
                        offers = v4327};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4331,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4318,
                        netBalance/3047 : UInt = v4264
                        }
                      continue; }
                    case user_makeOffer0_126 as .fork126.msg/4332 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                      const v4333 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/4332[0];
                      const amount/4334 : UInt* = v4333.amount;
                      const shouldPayWithNetworkToken/4335 : Bool* = v4333.shouldPayWithNetworkToken;
                      let v4336 : Null;
                      const v4337 : Bool* = returnExpression/3039.freeze;
                      const v4338 : Bool* = (v4337 ? true : false);
                      let v4339 : Null;
                      claim(CT_Require)(v4338, Just "Contract is frozen");
                      v4339 : Null = null;
                      v4336 : Null = null;
                      const _/4340 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/4332[0];
                      const v4341 : UInt* = returnExpression/3039.offers;
                      const v4342 : UInt* = returnExpression/3039.offers;
                      const v4343 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/4334,
                        borrower = this/3421,
                        offerId = v4342,
                        rejected = false};
                      map0[v4341] = v4343;
                      const v4344 : UInt* = returnExpression/3039.offers;
                      const v4345 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/4334,
                        borrower = this/3421,
                        offerId = v4344,
                        rejected = false};
                      const .api78.rngl/4346 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v4345 );
                      only(Left "user_makeOffer") {
                        const v4347 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                        let v4348 : Null;
                        const didPublish/4349 : Bool* = didPublish/1821;
                        local(Just v4348 : Null) if didPublish/4349 then {
                          const v4350 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/4332[0];
                          const v4351 : UInt* = v4350.amount;
                          const v4352 : Bool* = v4350.shouldPayWithNetworkToken;
                          const v4353 : UInt* = .api78.rngl/4346.amount;
                          const v4354 : Address* = .api78.rngl/4346.borrower;
                          const v4355 : UInt* = .api78.rngl/4346.offerId;
                          const v4356 : Bool* = .api78.rngl/4346.rejected;
                          protect<Null>("user_makeOffer".interact.out(.fork126.msg/4332, .api78.rngl/4346 ));
                           }
                        else {
                           };
                        v4348 : Null = null;
                         };
                      const v4357 : Null* = null;
                      const v4358 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4359 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4360 : Bool* = returnExpression/3039.continue;
                      const v4361 : Bool* = returnExpression/3039.freeze;
                      const v4362 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4363 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4364 : UInt* = returnExpression/3039.offers;
                      const v4365 : UInt* = returnExpression/3039.offers;
                      const v4366 : UInt* = v4365 + 1;
                      const v4367 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4358,
                        config = v4359,
                        continue = v4360,
                        freeze = v4361,
                        loanTerms = v4362,
                        loanTermsAccepted = v4363,
                        offers = v4366};
                      const v4368 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4358,
                        config = v4359,
                        continue = v4360,
                        freeze = v4361,
                        loanTerms = v4362,
                        loanTermsAccepted = v4363,
                        offers = v4366};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4368,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4070,
                        netBalance/3047 : UInt = v4034
                        }
                      continue; } } }
                case Admin_api_freeze0_126 as data_id/4369 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  let v4370 : Null;
                  v4370 : Null = null;
                  const v4371 : Null* = null;
                  let v4372 : Tuple(UInt, Tuple(UInt, Token));
                  local switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as data_id/4373 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const loanOffer/4374 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/4373[0];
                      const v4375 : Bool* = this/3421 == Admin/3007;
                      const v4376 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4377 : Bool* = (v4375 ? true : v4376);
                      let v4378 : Null;
                      claim(CT_Require)(v4377, Just "The current user trying to access this interface is not Admin");
                      v4378 : Null = null;
                      const x/4379 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4380 : Bool* = (x/4379 ? false : true);
                      let v4381 : Null;
                      claim(CT_Require)(v4380, Just "An offer has already been accepted");
                      v4381 : Null = null;
                      let v4382 : Null;
                      const v4383 : Bool* = returnExpression/3039.freeze;
                      const v4384 : Bool* = (v4383 ? true : false);
                      let v4385 : Null;
                      claim(CT_Require)(v4384, Just "Contract is frozen");
                      v4385 : Null = null;
                      v4382 : Null = null;
                      const v4386 : UInt* = loanOffer/4374.amount;
                      const v4387 : Address* = loanOffer/4374.borrower;
                      const v4388 : UInt* = loanOffer/4374.offerId;
                      const v4389 : Bool* = loanOffer/4374.rejected;
                      const m/4390 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v4388];
                      const v4391 : UInt* = dataTag(m/4390);
                      const v4392 : Bool* = v4391 == 1;
                      let v4393 : Null;
                      claim(CT_Require)(v4392, Just "Offer id doesn't exist");
                      v4393 : Null = null;
                      const v4394 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4395 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4394 ];
                      const v4396 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4397 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4396 ];
                      const v4398 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4399 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4398 ];
                      v4372 : Tuple(UInt, Tuple(UInt, Token)) = v4399;
                       }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/4400 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/4401 : UInt* = data_id/4400[0];
                      const v4402 : Bool* = this/3421 == Admin/3007;
                      const v4403 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4404 : Bool* = (v4402 ? true : v4403);
                      let v4405 : Null;
                      claim(CT_Require)(v4404, Just "The current user trying to access this interface is not Admin");
                      v4405 : Null = null;
                      const x/4406 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4407 : Bool* = (x/4406 ? false : true);
                      let v4408 : Null;
                      claim(CT_Require)(v4407, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v4408 : Null = null;
                      let v4409 : Null;
                      const v4410 : Bool* = returnExpression/3039.freeze;
                      const v4411 : Bool* = (v4410 ? true : false);
                      let v4412 : Null;
                      claim(CT_Require)(v4411, Just "Contract is frozen");
                      v4412 : Null = null;
                      v4409 : Null = null;
                      const v4413 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4414 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4413 ];
                      const v4415 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4416 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4415 ];
                      const v4417 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4418 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4417 ];
                      v4372 : Tuple(UInt, Tuple(UInt, Token)) = v4418;
                       }
                    case Admin_api_freeze0_126 as data_id/4419 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const toggle/4420 : Bool* = data_id/4419[0];
                      const v4421 : Bool* = this/3421 == Admin/3007;
                      const v4422 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4423 : Bool* = (v4421 ? true : v4422);
                      let v4424 : Null;
                      claim(CT_Require)(v4423, Just "The current user trying to access this interface is not Admin");
                      v4424 : Null = null;
                      const x/4425 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4426 : Bool* = (x/4425 ? false : true);
                      let v4427 : Null;
                      claim(CT_Require)(v4426, Just "Cannot update config after Loan terms accepted");
                      v4427 : Null = null;
                      const v4428 : Bool* = returnExpression/3039.freeze;
                      const v4429 : Bool* = (v4428 ? false : true);
                      const x/4430 : Bool* = (toggle/4420 ? v4428 : v4429);
                      const v4431 : Bool* = (x/4430 ? false : true);
                      let v4432 : Null;
                      claim(CT_Require)(v4431, Just "The action you are trying to perform has already been done");
                      v4432 : Null = null;
                      const v4433 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4434 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4433 ];
                      const v4435 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4436 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4435 ];
                      const v4437 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4438 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4437 ];
                      v4372 : Tuple(UInt, Tuple(UInt, Token)) = v4438;
                       }
                    case Admin_api_updateConfig0_126 as data_id/4439 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/4440 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/4439[0];
                      const v4441 : Bool* = this/3421 == Admin/3007;
                      const v4442 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4443 : Bool* = (v4441 ? true : v4442);
                      let v4444 : Null;
                      claim(CT_Require)(v4443, Just "The current user trying to access this interface is not Admin");
                      v4444 : Null = null;
                      const x/4445 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4446 : Bool* = (x/4445 ? false : true);
                      let v4447 : Null;
                      claim(CT_Require)(v4446, Just "Cannot update config after Loan terms accepted");
                      v4447 : Null = null;
                      const v4448 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4449 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4448 ];
                      const v4450 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4451 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4450 ];
                      const v4452 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4453 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4452 ];
                      v4372 : Tuple(UInt, Tuple(UInt, Token)) = v4453;
                       }
                    case Admin_api_updateLoanTerms_info0_126 as data_id/4454 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/4455 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/4454[0];
                      const v4456 : Bool* = this/3421 == Admin/3007;
                      const v4457 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4458 : Bool* = (v4456 ? true : v4457);
                      let v4459 : Null;
                      claim(CT_Require)(v4458, Just "The current user trying to access this interface is not Admin");
                      v4459 : Null = null;
                      const x/4460 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4461 : Bool* = (x/4460 ? false : true);
                      let v4462 : Null;
                      claim(CT_Require)(v4461, Just "Cannot update loan terms after Loan terms accepted");
                      v4462 : Null = null;
                      const v4463 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4464 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4463 ];
                      const v4465 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4466 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4465 ];
                      const v4467 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4468 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4467 ];
                      v4372 : Tuple(UInt, Tuple(UInt, Token)) = v4468;
                       }
                    case user_acceptLoan0_126 as data_id/4469 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      let v4470 : Null;
                      const v4471 : Bool* = returnExpression/3039.freeze;
                      const v4472 : Bool* = (v4471 ? true : false);
                      let v4473 : Null;
                      claim(CT_Require)(v4472, Just "Contract is frozen");
                      v4473 : Null = null;
                      v4470 : Null = null;
                      const acceptedAmount/4474 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/4475 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4476 : Bool* = (x/4475 ? false : true);
                      let v4477 : Null;
                      claim(CT_Require)(v4476, Just "Offer already accepted");
                      v4477 : Null = null;
                      const v4478 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4479 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4480 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/4474, v4479 ];
                      const v4481 : Tuple(UInt, Token)* = [acceptedAmount/4474, paymentToken/3019 ];
                      const v4482 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4481 ];
                      const transferData/4483 : Tuple(UInt, Tuple(UInt, Token))* = (v4478 ? v4480 : v4482);
                      v4372 : Tuple(UInt, Tuple(UInt, Token)) = transferData/4483;
                       }
                    case user_makeOffer0_126 as data_id/4484 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const v4485 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/4484[0];
                      const amount/4486 : UInt* = v4485.amount;
                      const shouldPayWithNetworkToken/4487 : Bool* = v4485.shouldPayWithNetworkToken;
                      let v4488 : Null;
                      const v4489 : Bool* = returnExpression/3039.freeze;
                      const v4490 : Bool* = (v4489 ? true : false);
                      let v4491 : Null;
                      claim(CT_Require)(v4490, Just "Contract is frozen");
                      v4491 : Null = null;
                      v4488 : Null = null;
                      const v4492 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4493 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4494 : Tuple(UInt, Tuple(UInt, Token))* = [amount/4486, v4493 ];
                      const v4495 : Tuple(UInt, Token)* = [amount/4486, paymentToken/3019 ];
                      const v4496 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4495 ];
                      const v4497 : Tuple(UInt, Tuple(UInt, Token))* = (v4492 ? v4494 : v4496);
                      v4372 : Tuple(UInt, Tuple(UInt, Token)) = v4497;
                       } }
                  const networkTokenPay/4498 : UInt* = v4372[0];
                  const v4499 : Tuple(UInt, Token)* = v4372[1];
                  const amt0/4500 : UInt* = v4499[0];
                  const nntok0/4501 : Token* = v4499[1];
                  const v4502 : Bool* = nntok0/4501 == paymentToken/3019;
                  claim(CT_Assert)(v4502, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v4503 : Tuple(UInt, Token)* = [amt0/4500, paymentToken/3019 ];
                  const v4504 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/4498, v4503 ];
                  const netBalance/4505 : UInt* = netBalance/3047;
                  const v4506 : UInt* = netBalance/4505 + networkTokenPay/4498;
                  checkPay(networkTokenPay/4498, None);
                  const initAcc/4507 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/4508 : Tuple(Bool, UInt)* = for (acc/4509 : Tuple(Bool, UInt)* = initAcc/4507; [elem/4510 : Token*],arrIdx/4511 : UInt* in [tokens'/3018]) {
                    const isFound/4512 : Bool* = acc/4509[0];
                    const searchIdx/4513 : UInt* = acc/4509[1];
                    const toksEq/4514 : Bool* = elem/4510 == paymentToken/3019;
                    const cnd/4515 : Bool* = (isFound/4512 ? true : toksEq/4514);
                    const searchIdx'/4516 : UInt* = searchIdx/4513 + 1;
                    const failAcc/4517 : Tuple(Bool, UInt)* = [false, searchIdx'/4516 ];
                    const succAcc/4518 : Tuple(Bool, UInt)* = [true, searchIdx/4513 ];
                    const bl/4519 : Tuple(Bool, UInt)* = (cnd/4515 ? succAcc/4518 : failAcc/4517);
                    
                    return bl/4519;}
                  const tokIdx/4520 : UInt* = res/4508[1];
                  const isFound'/4521 : Bool* = res/4508[0];
                  claim(CT_Assert)(isFound'/4521, Just "Token is tracked");
                  const tokInfo/4522 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4520];
                  const v4523 : UInt* = tokInfo/4522[0];
                  const v4524 : UInt* = v4523 + amt0/4500;
                  const initAcc/4525 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/4526 : Tuple(Bool, UInt)* = for (acc/4527 : Tuple(Bool, UInt)* = initAcc/4525; [elem/4528 : Token*],arrIdx/4529 : UInt* in [tokens'/3018]) {
                    const isFound/4530 : Bool* = acc/4527[0];
                    const searchIdx/4531 : UInt* = acc/4527[1];
                    const toksEq/4532 : Bool* = elem/4528 == paymentToken/3019;
                    const cnd/4533 : Bool* = (isFound/4530 ? true : toksEq/4532);
                    const searchIdx'/4534 : UInt* = searchIdx/4531 + 1;
                    const failAcc/4535 : Tuple(Bool, UInt)* = [false, searchIdx'/4534 ];
                    const succAcc/4536 : Tuple(Bool, UInt)* = [true, searchIdx/4531 ];
                    const bl/4537 : Tuple(Bool, UInt)* = (cnd/4533 ? succAcc/4536 : failAcc/4535);
                    
                    return bl/4537;}
                  const tokIdx/4538 : UInt* = res/4526[1];
                  const isFound'/4539 : Bool* = res/4526[0];
                  claim(CT_Assert)(isFound'/4539, Just "Token is tracked");
                  const tokInfo/4540 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4538];
                  const tokInfo'/4541 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/4540, 0, v4524 );
                  const tokInfos'/4542 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/4538, tokInfo'/4541 );
                  checkPay(amt0/4500, Some paymentToken/3019);
                  switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as .fork126.msg/4543 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                      const loanOffer/4544 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/4543[0];
                      const v4545 : Bool* = this/3421 == Admin/3007;
                      const v4546 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4547 : Bool* = (v4545 ? true : v4546);
                      let v4548 : Null;
                      claim(CT_Require)(v4547, Just "The current user trying to access this interface is not Admin");
                      v4548 : Null = null;
                      const x/4549 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4550 : Bool* = (x/4549 ? false : true);
                      let v4551 : Null;
                      claim(CT_Require)(v4550, Just "An offer has already been accepted");
                      v4551 : Null = null;
                      let v4552 : Null;
                      const v4553 : Bool* = returnExpression/3039.freeze;
                      const v4554 : Bool* = (v4553 ? true : false);
                      let v4555 : Null;
                      claim(CT_Require)(v4554, Just "Contract is frozen");
                      v4555 : Null = null;
                      v4552 : Null = null;
                      const v4556 : UInt* = loanOffer/4544.amount;
                      const v4557 : Address* = loanOffer/4544.borrower;
                      const v4558 : UInt* = loanOffer/4544.offerId;
                      const v4559 : Bool* = loanOffer/4544.rejected;
                      const offerInfo/4560 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v4558];
                      const v4561 : UInt* = dataTag(offerInfo/4560);
                      const v4562 : Bool* = v4561 == 1;
                      let v4563 : Null;
                      claim(CT_Require)(v4562, Just "Offer id doesn't exist");
                      v4563 : Null = null;
                      const _/4564 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/4543[0];
                      const v4565 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = 0,
                        borrower = this/3421,
                        offerId = 0,
                        rejected = false};
                      const data/4566 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = fromSome(offerInfo/4560, v4565 );
                      const v4567 : Null* = null;
                      const .api76.rngl/4568 : Null* = emitLog(api("Admin_api_acceptOffer"))(v4567 );
                      only(Left "Admin_api_acceptOffer") {
                        const v4569 : Address* = selfAddress("Admin_api_acceptOffer", True, 1908 )();
                        let v4570 : Null;
                        const didPublish/4571 : Bool* = didPublish/1821;
                        local(Just v4570 : Null) if didPublish/4571 then {
                          const v4572 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/4543[0];
                          const v4573 : UInt* = v4572.amount;
                          const v4574 : Address* = v4572.borrower;
                          const v4575 : UInt* = v4572.offerId;
                          const v4576 : Bool* = v4572.rejected;
                          protect<Null>("Admin_api_acceptOffer".interact.out(.fork126.msg/4543, .api76.rngl/4568 ));
                           }
                        else {
                           };
                        v4570 : Null = null;
                         };
                      const v4577 : Null* = null;
                      const v4578 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4579 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4580 : Bool* = returnExpression/3039.continue;
                      const v4581 : Bool* = returnExpression/3039.freeze;
                      const v4582 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4583 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4584 : UInt* = returnExpression/3039.offers;
                      const v4585 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4578,
                        config = v4579,
                        continue = v4580,
                        freeze = v4581,
                        loanTerms = v4582,
                        loanTermsAccepted = true,
                        offers = v4584};
                      const v4586 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4578,
                        config = v4579,
                        continue = v4580,
                        freeze = v4581,
                        loanTerms = v4582,
                        loanTermsAccepted = true,
                        offers = v4584};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4586,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4542,
                        netBalance/3047 : UInt = v4506
                        }
                      continue; }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as .fork126.msg/4587 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                      const local_config/4588 : UInt* = .fork126.msg/4587[0];
                      const v4589 : Bool* = this/3421 == Admin/3007;
                      const v4590 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4591 : Bool* = (v4589 ? true : v4590);
                      let v4592 : Null;
                      claim(CT_Require)(v4591, Just "The current user trying to access this interface is not Admin");
                      v4592 : Null = null;
                      const x/4593 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4594 : Bool* = (x/4593 ? false : true);
                      let v4595 : Null;
                      claim(CT_Require)(v4594, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v4595 : Null = null;
                      let v4596 : Null;
                      const v4597 : Bool* = returnExpression/3039.freeze;
                      const v4598 : Bool* = (v4597 ? true : false);
                      let v4599 : Null;
                      claim(CT_Require)(v4598, Just "Contract is frozen");
                      v4599 : Null = null;
                      v4596 : Null = null;
                      const _/4600 : UInt* = .fork126.msg/4587[0];
                      const v4601 : Null* = null;
                      const .api75.rngl/4602 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v4601 );
                      only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                        const v4603 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                        let v4604 : Null;
                        const didPublish/4605 : Bool* = didPublish/1821;
                        local(Just v4604 : Null) if didPublish/4605 then {
                          const v4606 : UInt* = .fork126.msg/4587[0];
                          protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(.fork126.msg/4587, .api75.rngl/4602 ));
                           }
                        else {
                           };
                        v4604 : Null = null;
                         };
                      const v4607 : Null* = null;
                      const v4608 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4609 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4610 : Bool* = returnExpression/3039.continue;
                      const v4611 : Bool* = returnExpression/3039.freeze;
                      const v4612 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4613 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4614 : UInt* = returnExpression/3039.offers;
                      const v4615 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4608,
                        config = v4609,
                        continue = false,
                        freeze = v4611,
                        loanTerms = v4612,
                        loanTermsAccepted = v4613,
                        offers = v4614};
                      const v4616 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4608,
                        config = v4609,
                        continue = false,
                        freeze = v4611,
                        loanTerms = v4612,
                        loanTermsAccepted = v4613,
                        offers = v4614};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4616,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4542,
                        netBalance/3047 : UInt = v4506
                        }
                      continue; }
                    case Admin_api_freeze0_126 as .fork126.msg/4617 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                      const toggle/4618 : Bool* = .fork126.msg/4617[0];
                      const v4619 : Bool* = this/3421 == Admin/3007;
                      const v4620 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4621 : Bool* = (v4619 ? true : v4620);
                      let v4622 : Null;
                      claim(CT_Require)(v4621, Just "The current user trying to access this interface is not Admin");
                      v4622 : Null = null;
                      const x/4623 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4624 : Bool* = (x/4623 ? false : true);
                      let v4625 : Null;
                      claim(CT_Require)(v4624, Just "Cannot update config after Loan terms accepted");
                      v4625 : Null = null;
                      const v4626 : Bool* = returnExpression/3039.freeze;
                      const v4627 : Bool* = (v4626 ? false : true);
                      const x/4628 : Bool* = (toggle/4618 ? v4626 : v4627);
                      const v4629 : Bool* = (x/4628 ? false : true);
                      let v4630 : Null;
                      claim(CT_Require)(v4629, Just "The action you are trying to perform has already been done");
                      v4630 : Null = null;
                      const _/4631 : Bool* = .fork126.msg/4617[0];
                      const v4632 : Null* = null;
                      const .api73.rngl/4633 : Null* = emitLog(api("Admin_api_freeze"))(v4632 );
                      only(Left "Admin_api_freeze") {
                        const v4634 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                        let v4635 : Null;
                        const didPublish/4636 : Bool* = didPublish/1821;
                        local(Just v4635 : Null) if didPublish/4636 then {
                          const v4637 : Bool* = .fork126.msg/4617[0];
                          protect<Null>("Admin_api_freeze".interact.out(.fork126.msg/4617, .api73.rngl/4633 ));
                           }
                        else {
                           };
                        v4635 : Null = null;
                         };
                      const v4638 : Null* = null;
                      const v4639 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4640 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4641 : Bool* = returnExpression/3039.continue;
                      const v4642 : Bool* = returnExpression/3039.freeze;
                      const v4643 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4644 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4645 : UInt* = returnExpression/3039.offers;
                      const v4646 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4639,
                        config = v4640,
                        continue = v4641,
                        freeze = toggle/4618,
                        loanTerms = v4643,
                        loanTermsAccepted = v4644,
                        offers = v4645};
                      const v4647 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4639,
                        config = v4640,
                        continue = v4641,
                        freeze = toggle/4618,
                        loanTerms = v4643,
                        loanTermsAccepted = v4644,
                        offers = v4645};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4647,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4542,
                        netBalance/3047 : UInt = v4506
                        }
                      continue; }
                    case Admin_api_updateConfig0_126 as .fork126.msg/4648 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                      const local_config/4649 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/4648[0];
                      const v4650 : Bool* = this/3421 == Admin/3007;
                      const v4651 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4652 : Bool* = (v4650 ? true : v4651);
                      let v4653 : Null;
                      claim(CT_Require)(v4652, Just "The current user trying to access this interface is not Admin");
                      v4653 : Null = null;
                      const x/4654 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4655 : Bool* = (x/4654 ? false : true);
                      let v4656 : Null;
                      claim(CT_Require)(v4655, Just "Cannot update config after Loan terms accepted");
                      v4656 : Null = null;
                      const _/4657 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/4648[0];
                      const v4658 : Null* = null;
                      const .api72.rngl/4659 : Null* = emitLog(api("Admin_api_updateConfig"))(v4658 );
                      only(Left "Admin_api_updateConfig") {
                        const v4660 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                        let v4661 : Null;
                        const didPublish/4662 : Bool* = didPublish/1821;
                        local(Just v4661 : Null) if didPublish/4662 then {
                          const v4663 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/4648[0];
                          const v4664 : Token* = v4663.token;
                          const v4665 : UInt* = v4663.number_of_tokens_to_deposit;
                          const v4666 : Token* = v4663.paymentAsset;
                          const v4667 : Bool* = v4663.shouldPayInOnlyNetworkToken;
                          const v4668 : Bool* = v4663.prefersNetworkToken;
                          protect<Null>("Admin_api_updateConfig".interact.out(.fork126.msg/4648, .api72.rngl/4659 ));
                           }
                        else {
                           };
                        v4661 : Null = null;
                         };
                      const v4669 : Null* = null;
                      const v4670 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4671 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4672 : Bool* = returnExpression/3039.continue;
                      const v4673 : Bool* = returnExpression/3039.freeze;
                      const v4674 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4675 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4676 : UInt* = returnExpression/3039.offers;
                      const v4677 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4670,
                        config = local_config/4649,
                        continue = v4672,
                        freeze = v4673,
                        loanTerms = v4674,
                        loanTermsAccepted = v4675,
                        offers = v4676};
                      const v4678 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4670,
                        config = local_config/4649,
                        continue = v4672,
                        freeze = v4673,
                        loanTerms = v4674,
                        loanTermsAccepted = v4675,
                        offers = v4676};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4678,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4542,
                        netBalance/3047 : UInt = v4506
                        }
                      continue; }
                    case Admin_api_updateLoanTerms_info0_126 as .fork126.msg/4679 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                      const local_config/4680 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/4679[0];
                      const v4681 : Bool* = this/3421 == Admin/3007;
                      const v4682 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4683 : Bool* = (v4681 ? true : v4682);
                      let v4684 : Null;
                      claim(CT_Require)(v4683, Just "The current user trying to access this interface is not Admin");
                      v4684 : Null = null;
                      const x/4685 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4686 : Bool* = (x/4685 ? false : true);
                      let v4687 : Null;
                      claim(CT_Require)(v4686, Just "Cannot update loan terms after Loan terms accepted");
                      v4687 : Null = null;
                      const _/4688 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/4679[0];
                      const v4689 : Null* = null;
                      const .api74.rngl/4690 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v4689 );
                      only(Left "Admin_api_updateLoanTerms_info") {
                        const v4691 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                        let v4692 : Null;
                        const didPublish/4693 : Bool* = didPublish/1821;
                        local(Just v4692 : Null) if didPublish/4693 then {
                          const v4694 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/4679[0];
                          const v4695 : UInt* = v4694.duration_in_blocks;
                          const v4696 : UInt* = v4694.principle;
                          const v4697 : Token* = v4694.interest;
                          protect<Null>("Admin_api_updateLoanTerms_info".interact.out(.fork126.msg/4679, .api74.rngl/4690 ));
                           }
                        else {
                           };
                        v4692 : Null = null;
                         };
                      const v4698 : Null* = null;
                      const v4699 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4700 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4701 : Bool* = returnExpression/3039.continue;
                      const v4702 : Bool* = returnExpression/3039.freeze;
                      const v4703 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4704 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4705 : UInt* = returnExpression/3039.offers;
                      const v4706 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4699,
                        config = v4700,
                        continue = v4701,
                        freeze = v4702,
                        loanTerms = local_config/4680,
                        loanTermsAccepted = v4704,
                        offers = v4705};
                      const v4707 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4699,
                        config = v4700,
                        continue = v4701,
                        freeze = v4702,
                        loanTerms = local_config/4680,
                        loanTermsAccepted = v4704,
                        offers = v4705};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4707,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4542,
                        netBalance/3047 : UInt = v4506
                        }
                      continue; }
                    case user_acceptLoan0_126 as .fork126.msg/4708 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                      let v4709 : Null;
                      const v4710 : Bool* = returnExpression/3039.freeze;
                      const v4711 : Bool* = (v4710 ? true : false);
                      let v4712 : Null;
                      claim(CT_Require)(v4711, Just "Contract is frozen");
                      v4712 : Null = null;
                      v4709 : Null = null;
                      const acceptedAmount/4713 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/4714 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4715 : Bool* = (x/4714 ? false : true);
                      let v4716 : Null;
                      claim(CT_Require)(v4715, Just "Offer already accepted");
                      v4716 : Null = null;
                      const v4717 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4718 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4719 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/4713, v4718 ];
                      const v4720 : Tuple(UInt, Token)* = [acceptedAmount/4713, paymentToken/3019 ];
                      const v4721 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4720 ];
                      const transferData/4722 : Tuple(UInt, Tuple(UInt, Token))* = (v4717 ? v4719 : v4721);
                      const v4723 : Null* = null;
                      const .api77.rngl/4724 : Null* = emitLog(api("user_acceptLoan"))(v4723 );
                      only(Left "user_acceptLoan") {
                        const v4725 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                        let v4726 : Null;
                        const didPublish/4727 : Bool* = didPublish/1821;
                        local(Just v4726 : Null) if didPublish/4727 then {
                          protect<Null>("user_acceptLoan".interact.out(.fork126.msg/4708, .api77.rngl/4724 ));
                           }
                        else {
                           };
                        v4726 : Null = null;
                         };
                      const v4728 : Null* = null;
                      const v4729 : UInt* = transferData/4722[0];
                      const v4730 : Tuple(UInt, Token)* = transferData/4722[1];
                      const v4731 : UInt* = v4730[0];
                      const v4732 : Token* = v4730[1];
                      const netBalance/4733 : UInt* = v4506;
                      const v4734 : Bool* = v4729 <= netBalance/4733;
                      claim(CT_Assert)(v4734, Just "balance sufficient for transfer");
                      const netBalance/4735 : UInt* = v4506;
                      const v4736 : UInt* = netBalance/4735 - v4729;
                      transfer.(v4729, None).to(Admin/3007);
                      const initAcc/4737 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/4738 : Tuple(Bool, UInt)* = for (acc/4739 : Tuple(Bool, UInt)* = initAcc/4737; [elem/4740 : Token*],arrIdx/4741 : UInt* in [tokens'/3018]) {
                        const isFound/4742 : Bool* = acc/4739[0];
                        const searchIdx/4743 : UInt* = acc/4739[1];
                        const toksEq/4744 : Bool* = elem/4740 == v4732;
                        const cnd/4745 : Bool* = (isFound/4742 ? true : toksEq/4744);
                        const searchIdx'/4746 : UInt* = searchIdx/4743 + 1;
                        const failAcc/4747 : Tuple(Bool, UInt)* = [false, searchIdx'/4746 ];
                        const succAcc/4748 : Tuple(Bool, UInt)* = [true, searchIdx/4743 ];
                        const bl/4749 : Tuple(Bool, UInt)* = (cnd/4745 ? succAcc/4748 : failAcc/4747);
                        
                        return bl/4749;}
                      const tokIdx/4750 : UInt* = res/4738[1];
                      const isFound'/4751 : Bool* = res/4738[0];
                      claim(CT_Assert)(isFound'/4751, Just "Token is tracked");
                      const tokInfo/4752 : Tuple(UInt, UInt, Bool)* = tokInfos'/4542[tokIdx/4750];
                      const v4753 : UInt* = tokInfo/4752[0];
                      const v4754 : Bool* = v4731 <= v4753;
                      claim(CT_Assert)(v4754, Just "balance sufficient for transfer");
                      const initAcc/4755 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/4756 : Tuple(Bool, UInt)* = for (acc/4757 : Tuple(Bool, UInt)* = initAcc/4755; [elem/4758 : Token*],arrIdx/4759 : UInt* in [tokens'/3018]) {
                        const isFound/4760 : Bool* = acc/4757[0];
                        const searchIdx/4761 : UInt* = acc/4757[1];
                        const toksEq/4762 : Bool* = elem/4758 == v4732;
                        const cnd/4763 : Bool* = (isFound/4760 ? true : toksEq/4762);
                        const searchIdx'/4764 : UInt* = searchIdx/4761 + 1;
                        const failAcc/4765 : Tuple(Bool, UInt)* = [false, searchIdx'/4764 ];
                        const succAcc/4766 : Tuple(Bool, UInt)* = [true, searchIdx/4761 ];
                        const bl/4767 : Tuple(Bool, UInt)* = (cnd/4763 ? succAcc/4766 : failAcc/4765);
                        
                        return bl/4767;}
                      const tokIdx/4768 : UInt* = res/4756[1];
                      const isFound'/4769 : Bool* = res/4756[0];
                      claim(CT_Assert)(isFound'/4769, Just "Token is tracked");
                      const tokInfo/4770 : Tuple(UInt, UInt, Bool)* = tokInfos'/4542[tokIdx/4768];
                      const v4771 : UInt* = tokInfo/4770[0];
                      const v4772 : UInt* = v4771 - v4731;
                      const initAcc/4773 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/4774 : Tuple(Bool, UInt)* = for (acc/4775 : Tuple(Bool, UInt)* = initAcc/4773; [elem/4776 : Token*],arrIdx/4777 : UInt* in [tokens'/3018]) {
                        const isFound/4778 : Bool* = acc/4775[0];
                        const searchIdx/4779 : UInt* = acc/4775[1];
                        const toksEq/4780 : Bool* = elem/4776 == v4732;
                        const cnd/4781 : Bool* = (isFound/4778 ? true : toksEq/4780);
                        const searchIdx'/4782 : UInt* = searchIdx/4779 + 1;
                        const failAcc/4783 : Tuple(Bool, UInt)* = [false, searchIdx'/4782 ];
                        const succAcc/4784 : Tuple(Bool, UInt)* = [true, searchIdx/4779 ];
                        const bl/4785 : Tuple(Bool, UInt)* = (cnd/4781 ? succAcc/4784 : failAcc/4783);
                        
                        return bl/4785;}
                      const tokIdx/4786 : UInt* = res/4774[1];
                      const isFound'/4787 : Bool* = res/4774[0];
                      claim(CT_Assert)(isFound'/4787, Just "Token is tracked");
                      const tokInfo/4788 : Tuple(UInt, UInt, Bool)* = tokInfos'/4542[tokIdx/4786];
                      const tokInfo'/4789 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/4788, 0, v4772 );
                      const tokInfos'/4790 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/4542, tokIdx/4786, tokInfo'/4789 );
                      transfer.(v4731, Some v4732).to(Admin/3007);
                      const v4791 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4792 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4793 : Bool* = returnExpression/3039.continue;
                      const v4794 : Bool* = returnExpression/3039.freeze;
                      const v4795 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4796 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4797 : UInt* = returnExpression/3039.offers;
                      const v4798 : UInt* = returnExpression/3039.offers;
                      const v4799 : UInt* = v4798 + 1;
                      const v4800 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v4801 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4800,
                        config = v4792,
                        continue = v4793,
                        freeze = v4794,
                        loanTerms = v4795,
                        loanTermsAccepted = true,
                        offers = v4799};
                      const v4802 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v4803 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4802,
                        config = v4792,
                        continue = v4793,
                        freeze = v4794,
                        loanTerms = v4795,
                        loanTermsAccepted = true,
                        offers = v4799};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4803,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4790,
                        netBalance/3047 : UInt = v4736
                        }
                      continue; }
                    case user_makeOffer0_126 as .fork126.msg/4804 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                      const v4805 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/4804[0];
                      const amount/4806 : UInt* = v4805.amount;
                      const shouldPayWithNetworkToken/4807 : Bool* = v4805.shouldPayWithNetworkToken;
                      let v4808 : Null;
                      const v4809 : Bool* = returnExpression/3039.freeze;
                      const v4810 : Bool* = (v4809 ? true : false);
                      let v4811 : Null;
                      claim(CT_Require)(v4810, Just "Contract is frozen");
                      v4811 : Null = null;
                      v4808 : Null = null;
                      const _/4812 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/4804[0];
                      const v4813 : UInt* = returnExpression/3039.offers;
                      const v4814 : UInt* = returnExpression/3039.offers;
                      const v4815 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/4806,
                        borrower = this/3421,
                        offerId = v4814,
                        rejected = false};
                      map0[v4813] = v4815;
                      const v4816 : UInt* = returnExpression/3039.offers;
                      const v4817 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/4806,
                        borrower = this/3421,
                        offerId = v4816,
                        rejected = false};
                      const .api78.rngl/4818 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v4817 );
                      only(Left "user_makeOffer") {
                        const v4819 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                        let v4820 : Null;
                        const didPublish/4821 : Bool* = didPublish/1821;
                        local(Just v4820 : Null) if didPublish/4821 then {
                          const v4822 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/4804[0];
                          const v4823 : UInt* = v4822.amount;
                          const v4824 : Bool* = v4822.shouldPayWithNetworkToken;
                          const v4825 : UInt* = .api78.rngl/4818.amount;
                          const v4826 : Address* = .api78.rngl/4818.borrower;
                          const v4827 : UInt* = .api78.rngl/4818.offerId;
                          const v4828 : Bool* = .api78.rngl/4818.rejected;
                          protect<Null>("user_makeOffer".interact.out(.fork126.msg/4804, .api78.rngl/4818 ));
                           }
                        else {
                           };
                        v4820 : Null = null;
                         };
                      const v4829 : Null* = null;
                      const v4830 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v4831 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v4832 : Bool* = returnExpression/3039.continue;
                      const v4833 : Bool* = returnExpression/3039.freeze;
                      const v4834 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v4835 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4836 : UInt* = returnExpression/3039.offers;
                      const v4837 : UInt* = returnExpression/3039.offers;
                      const v4838 : UInt* = v4837 + 1;
                      const v4839 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4830,
                        config = v4831,
                        continue = v4832,
                        freeze = v4833,
                        loanTerms = v4834,
                        loanTermsAccepted = v4835,
                        offers = v4838};
                      const v4840 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v4830,
                        config = v4831,
                        continue = v4832,
                        freeze = v4833,
                        loanTerms = v4834,
                        loanTermsAccepted = v4835,
                        offers = v4838};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4840,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/4542,
                        netBalance/3047 : UInt = v4506
                        }
                      continue; } } }
                case Admin_api_updateConfig0_126 as data_id/4841 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  let v4842 : Null;
                  v4842 : Null = null;
                  const v4843 : Null* = null;
                  let v4844 : Tuple(UInt, Tuple(UInt, Token));
                  local switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as data_id/4845 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const loanOffer/4846 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/4845[0];
                      const v4847 : Bool* = this/3421 == Admin/3007;
                      const v4848 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4849 : Bool* = (v4847 ? true : v4848);
                      let v4850 : Null;
                      claim(CT_Require)(v4849, Just "The current user trying to access this interface is not Admin");
                      v4850 : Null = null;
                      const x/4851 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4852 : Bool* = (x/4851 ? false : true);
                      let v4853 : Null;
                      claim(CT_Require)(v4852, Just "An offer has already been accepted");
                      v4853 : Null = null;
                      let v4854 : Null;
                      const v4855 : Bool* = returnExpression/3039.freeze;
                      const v4856 : Bool* = (v4855 ? true : false);
                      let v4857 : Null;
                      claim(CT_Require)(v4856, Just "Contract is frozen");
                      v4857 : Null = null;
                      v4854 : Null = null;
                      const v4858 : UInt* = loanOffer/4846.amount;
                      const v4859 : Address* = loanOffer/4846.borrower;
                      const v4860 : UInt* = loanOffer/4846.offerId;
                      const v4861 : Bool* = loanOffer/4846.rejected;
                      const m/4862 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v4860];
                      const v4863 : UInt* = dataTag(m/4862);
                      const v4864 : Bool* = v4863 == 1;
                      let v4865 : Null;
                      claim(CT_Require)(v4864, Just "Offer id doesn't exist");
                      v4865 : Null = null;
                      const v4866 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4867 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4866 ];
                      const v4868 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4869 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4868 ];
                      const v4870 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4871 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4870 ];
                      v4844 : Tuple(UInt, Tuple(UInt, Token)) = v4871;
                       }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/4872 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/4873 : UInt* = data_id/4872[0];
                      const v4874 : Bool* = this/3421 == Admin/3007;
                      const v4875 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4876 : Bool* = (v4874 ? true : v4875);
                      let v4877 : Null;
                      claim(CT_Require)(v4876, Just "The current user trying to access this interface is not Admin");
                      v4877 : Null = null;
                      const x/4878 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4879 : Bool* = (x/4878 ? false : true);
                      let v4880 : Null;
                      claim(CT_Require)(v4879, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v4880 : Null = null;
                      let v4881 : Null;
                      const v4882 : Bool* = returnExpression/3039.freeze;
                      const v4883 : Bool* = (v4882 ? true : false);
                      let v4884 : Null;
                      claim(CT_Require)(v4883, Just "Contract is frozen");
                      v4884 : Null = null;
                      v4881 : Null = null;
                      const v4885 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4886 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4885 ];
                      const v4887 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4888 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4887 ];
                      const v4889 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4890 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4889 ];
                      v4844 : Tuple(UInt, Tuple(UInt, Token)) = v4890;
                       }
                    case Admin_api_freeze0_126 as data_id/4891 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const toggle/4892 : Bool* = data_id/4891[0];
                      const v4893 : Bool* = this/3421 == Admin/3007;
                      const v4894 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4895 : Bool* = (v4893 ? true : v4894);
                      let v4896 : Null;
                      claim(CT_Require)(v4895, Just "The current user trying to access this interface is not Admin");
                      v4896 : Null = null;
                      const x/4897 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4898 : Bool* = (x/4897 ? false : true);
                      let v4899 : Null;
                      claim(CT_Require)(v4898, Just "Cannot update config after Loan terms accepted");
                      v4899 : Null = null;
                      const v4900 : Bool* = returnExpression/3039.freeze;
                      const v4901 : Bool* = (v4900 ? false : true);
                      const x/4902 : Bool* = (toggle/4892 ? v4900 : v4901);
                      const v4903 : Bool* = (x/4902 ? false : true);
                      let v4904 : Null;
                      claim(CT_Require)(v4903, Just "The action you are trying to perform has already been done");
                      v4904 : Null = null;
                      const v4905 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4906 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4905 ];
                      const v4907 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4908 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4907 ];
                      const v4909 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4910 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4909 ];
                      v4844 : Tuple(UInt, Tuple(UInt, Token)) = v4910;
                       }
                    case Admin_api_updateConfig0_126 as data_id/4911 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/4912 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/4911[0];
                      const v4913 : Bool* = this/3421 == Admin/3007;
                      const v4914 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4915 : Bool* = (v4913 ? true : v4914);
                      let v4916 : Null;
                      claim(CT_Require)(v4915, Just "The current user trying to access this interface is not Admin");
                      v4916 : Null = null;
                      const x/4917 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4918 : Bool* = (x/4917 ? false : true);
                      let v4919 : Null;
                      claim(CT_Require)(v4918, Just "Cannot update config after Loan terms accepted");
                      v4919 : Null = null;
                      const v4920 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4921 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4920 ];
                      const v4922 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4923 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4922 ];
                      const v4924 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4925 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4924 ];
                      v4844 : Tuple(UInt, Tuple(UInt, Token)) = v4925;
                       }
                    case Admin_api_updateLoanTerms_info0_126 as data_id/4926 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/4927 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/4926[0];
                      const v4928 : Bool* = this/3421 == Admin/3007;
                      const v4929 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v4930 : Bool* = (v4928 ? true : v4929);
                      let v4931 : Null;
                      claim(CT_Require)(v4930, Just "The current user trying to access this interface is not Admin");
                      v4931 : Null = null;
                      const x/4932 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4933 : Bool* = (x/4932 ? false : true);
                      let v4934 : Null;
                      claim(CT_Require)(v4933, Just "Cannot update loan terms after Loan terms accepted");
                      v4934 : Null = null;
                      const v4935 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4936 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4935 ];
                      const v4937 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4938 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4937 ];
                      const v4939 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4940 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4939 ];
                      v4844 : Tuple(UInt, Tuple(UInt, Token)) = v4940;
                       }
                    case user_acceptLoan0_126 as data_id/4941 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      let v4942 : Null;
                      const v4943 : Bool* = returnExpression/3039.freeze;
                      const v4944 : Bool* = (v4943 ? true : false);
                      let v4945 : Null;
                      claim(CT_Require)(v4944, Just "Contract is frozen");
                      v4945 : Null = null;
                      v4942 : Null = null;
                      const acceptedAmount/4946 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/4947 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v4948 : Bool* = (x/4947 ? false : true);
                      let v4949 : Null;
                      claim(CT_Require)(v4948, Just "Offer already accepted");
                      v4949 : Null = null;
                      const v4950 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4951 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4952 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/4946, v4951 ];
                      const v4953 : Tuple(UInt, Token)* = [acceptedAmount/4946, paymentToken/3019 ];
                      const v4954 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4953 ];
                      const transferData/4955 : Tuple(UInt, Tuple(UInt, Token))* = (v4950 ? v4952 : v4954);
                      v4844 : Tuple(UInt, Tuple(UInt, Token)) = transferData/4955;
                       }
                    case user_makeOffer0_126 as data_id/4956 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const v4957 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/4956[0];
                      const amount/4958 : UInt* = v4957.amount;
                      const shouldPayWithNetworkToken/4959 : Bool* = v4957.shouldPayWithNetworkToken;
                      let v4960 : Null;
                      const v4961 : Bool* = returnExpression/3039.freeze;
                      const v4962 : Bool* = (v4961 ? true : false);
                      let v4963 : Null;
                      claim(CT_Require)(v4962, Just "Contract is frozen");
                      v4963 : Null = null;
                      v4960 : Null = null;
                      const v4964 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v4965 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v4966 : Tuple(UInt, Tuple(UInt, Token))* = [amount/4958, v4965 ];
                      const v4967 : Tuple(UInt, Token)* = [amount/4958, paymentToken/3019 ];
                      const v4968 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4967 ];
                      const v4969 : Tuple(UInt, Tuple(UInt, Token))* = (v4964 ? v4966 : v4968);
                      v4844 : Tuple(UInt, Tuple(UInt, Token)) = v4969;
                       } }
                  const networkTokenPay/4970 : UInt* = v4844[0];
                  const v4971 : Tuple(UInt, Token)* = v4844[1];
                  const amt0/4972 : UInt* = v4971[0];
                  const nntok0/4973 : Token* = v4971[1];
                  const v4974 : Bool* = nntok0/4973 == paymentToken/3019;
                  claim(CT_Assert)(v4974, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v4975 : Tuple(UInt, Token)* = [amt0/4972, paymentToken/3019 ];
                  const v4976 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/4970, v4975 ];
                  const netBalance/4977 : UInt* = netBalance/3047;
                  const v4978 : UInt* = netBalance/4977 + networkTokenPay/4970;
                  checkPay(networkTokenPay/4970, None);
                  const initAcc/4979 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/4980 : Tuple(Bool, UInt)* = for (acc/4981 : Tuple(Bool, UInt)* = initAcc/4979; [elem/4982 : Token*],arrIdx/4983 : UInt* in [tokens'/3018]) {
                    const isFound/4984 : Bool* = acc/4981[0];
                    const searchIdx/4985 : UInt* = acc/4981[1];
                    const toksEq/4986 : Bool* = elem/4982 == paymentToken/3019;
                    const cnd/4987 : Bool* = (isFound/4984 ? true : toksEq/4986);
                    const searchIdx'/4988 : UInt* = searchIdx/4985 + 1;
                    const failAcc/4989 : Tuple(Bool, UInt)* = [false, searchIdx'/4988 ];
                    const succAcc/4990 : Tuple(Bool, UInt)* = [true, searchIdx/4985 ];
                    const bl/4991 : Tuple(Bool, UInt)* = (cnd/4987 ? succAcc/4990 : failAcc/4989);
                    
                    return bl/4991;}
                  const tokIdx/4992 : UInt* = res/4980[1];
                  const isFound'/4993 : Bool* = res/4980[0];
                  claim(CT_Assert)(isFound'/4993, Just "Token is tracked");
                  const tokInfo/4994 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4992];
                  const v4995 : UInt* = tokInfo/4994[0];
                  const v4996 : UInt* = v4995 + amt0/4972;
                  const initAcc/4997 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/4998 : Tuple(Bool, UInt)* = for (acc/4999 : Tuple(Bool, UInt)* = initAcc/4997; [elem/5000 : Token*],arrIdx/5001 : UInt* in [tokens'/3018]) {
                    const isFound/5002 : Bool* = acc/4999[0];
                    const searchIdx/5003 : UInt* = acc/4999[1];
                    const toksEq/5004 : Bool* = elem/5000 == paymentToken/3019;
                    const cnd/5005 : Bool* = (isFound/5002 ? true : toksEq/5004);
                    const searchIdx'/5006 : UInt* = searchIdx/5003 + 1;
                    const failAcc/5007 : Tuple(Bool, UInt)* = [false, searchIdx'/5006 ];
                    const succAcc/5008 : Tuple(Bool, UInt)* = [true, searchIdx/5003 ];
                    const bl/5009 : Tuple(Bool, UInt)* = (cnd/5005 ? succAcc/5008 : failAcc/5007);
                    
                    return bl/5009;}
                  const tokIdx/5010 : UInt* = res/4998[1];
                  const isFound'/5011 : Bool* = res/4998[0];
                  claim(CT_Assert)(isFound'/5011, Just "Token is tracked");
                  const tokInfo/5012 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5010];
                  const tokInfo'/5013 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5012, 0, v4996 );
                  const tokInfos'/5014 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/5010, tokInfo'/5013 );
                  checkPay(amt0/4972, Some paymentToken/3019);
                  switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as .fork126.msg/5015 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                      const loanOffer/5016 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5015[0];
                      const v5017 : Bool* = this/3421 == Admin/3007;
                      const v5018 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5019 : Bool* = (v5017 ? true : v5018);
                      let v5020 : Null;
                      claim(CT_Require)(v5019, Just "The current user trying to access this interface is not Admin");
                      v5020 : Null = null;
                      const x/5021 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5022 : Bool* = (x/5021 ? false : true);
                      let v5023 : Null;
                      claim(CT_Require)(v5022, Just "An offer has already been accepted");
                      v5023 : Null = null;
                      let v5024 : Null;
                      const v5025 : Bool* = returnExpression/3039.freeze;
                      const v5026 : Bool* = (v5025 ? true : false);
                      let v5027 : Null;
                      claim(CT_Require)(v5026, Just "Contract is frozen");
                      v5027 : Null = null;
                      v5024 : Null = null;
                      const v5028 : UInt* = loanOffer/5016.amount;
                      const v5029 : Address* = loanOffer/5016.borrower;
                      const v5030 : UInt* = loanOffer/5016.offerId;
                      const v5031 : Bool* = loanOffer/5016.rejected;
                      const offerInfo/5032 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v5030];
                      const v5033 : UInt* = dataTag(offerInfo/5032);
                      const v5034 : Bool* = v5033 == 1;
                      let v5035 : Null;
                      claim(CT_Require)(v5034, Just "Offer id doesn't exist");
                      v5035 : Null = null;
                      const _/5036 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5015[0];
                      const v5037 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = 0,
                        borrower = this/3421,
                        offerId = 0,
                        rejected = false};
                      const data/5038 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = fromSome(offerInfo/5032, v5037 );
                      const v5039 : Null* = null;
                      const .api76.rngl/5040 : Null* = emitLog(api("Admin_api_acceptOffer"))(v5039 );
                      only(Left "Admin_api_acceptOffer") {
                        const v5041 : Address* = selfAddress("Admin_api_acceptOffer", True, 1908 )();
                        let v5042 : Null;
                        const didPublish/5043 : Bool* = didPublish/1821;
                        local(Just v5042 : Null) if didPublish/5043 then {
                          const v5044 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5015[0];
                          const v5045 : UInt* = v5044.amount;
                          const v5046 : Address* = v5044.borrower;
                          const v5047 : UInt* = v5044.offerId;
                          const v5048 : Bool* = v5044.rejected;
                          protect<Null>("Admin_api_acceptOffer".interact.out(.fork126.msg/5015, .api76.rngl/5040 ));
                           }
                        else {
                           };
                        v5042 : Null = null;
                         };
                      const v5049 : Null* = null;
                      const v5050 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5051 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5052 : Bool* = returnExpression/3039.continue;
                      const v5053 : Bool* = returnExpression/3039.freeze;
                      const v5054 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5055 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5056 : UInt* = returnExpression/3039.offers;
                      const v5057 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5050,
                        config = v5051,
                        continue = v5052,
                        freeze = v5053,
                        loanTerms = v5054,
                        loanTermsAccepted = true,
                        offers = v5056};
                      const v5058 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5050,
                        config = v5051,
                        continue = v5052,
                        freeze = v5053,
                        loanTerms = v5054,
                        loanTermsAccepted = true,
                        offers = v5056};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5058,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5014,
                        netBalance/3047 : UInt = v4978
                        }
                      continue; }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as .fork126.msg/5059 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                      const local_config/5060 : UInt* = .fork126.msg/5059[0];
                      const v5061 : Bool* = this/3421 == Admin/3007;
                      const v5062 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5063 : Bool* = (v5061 ? true : v5062);
                      let v5064 : Null;
                      claim(CT_Require)(v5063, Just "The current user trying to access this interface is not Admin");
                      v5064 : Null = null;
                      const x/5065 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5066 : Bool* = (x/5065 ? false : true);
                      let v5067 : Null;
                      claim(CT_Require)(v5066, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v5067 : Null = null;
                      let v5068 : Null;
                      const v5069 : Bool* = returnExpression/3039.freeze;
                      const v5070 : Bool* = (v5069 ? true : false);
                      let v5071 : Null;
                      claim(CT_Require)(v5070, Just "Contract is frozen");
                      v5071 : Null = null;
                      v5068 : Null = null;
                      const _/5072 : UInt* = .fork126.msg/5059[0];
                      const v5073 : Null* = null;
                      const .api75.rngl/5074 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v5073 );
                      only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                        const v5075 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                        let v5076 : Null;
                        const didPublish/5077 : Bool* = didPublish/1821;
                        local(Just v5076 : Null) if didPublish/5077 then {
                          const v5078 : UInt* = .fork126.msg/5059[0];
                          protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(.fork126.msg/5059, .api75.rngl/5074 ));
                           }
                        else {
                           };
                        v5076 : Null = null;
                         };
                      const v5079 : Null* = null;
                      const v5080 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5081 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5082 : Bool* = returnExpression/3039.continue;
                      const v5083 : Bool* = returnExpression/3039.freeze;
                      const v5084 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5085 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5086 : UInt* = returnExpression/3039.offers;
                      const v5087 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5080,
                        config = v5081,
                        continue = false,
                        freeze = v5083,
                        loanTerms = v5084,
                        loanTermsAccepted = v5085,
                        offers = v5086};
                      const v5088 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5080,
                        config = v5081,
                        continue = false,
                        freeze = v5083,
                        loanTerms = v5084,
                        loanTermsAccepted = v5085,
                        offers = v5086};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5088,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5014,
                        netBalance/3047 : UInt = v4978
                        }
                      continue; }
                    case Admin_api_freeze0_126 as .fork126.msg/5089 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                      const toggle/5090 : Bool* = .fork126.msg/5089[0];
                      const v5091 : Bool* = this/3421 == Admin/3007;
                      const v5092 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5093 : Bool* = (v5091 ? true : v5092);
                      let v5094 : Null;
                      claim(CT_Require)(v5093, Just "The current user trying to access this interface is not Admin");
                      v5094 : Null = null;
                      const x/5095 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5096 : Bool* = (x/5095 ? false : true);
                      let v5097 : Null;
                      claim(CT_Require)(v5096, Just "Cannot update config after Loan terms accepted");
                      v5097 : Null = null;
                      const v5098 : Bool* = returnExpression/3039.freeze;
                      const v5099 : Bool* = (v5098 ? false : true);
                      const x/5100 : Bool* = (toggle/5090 ? v5098 : v5099);
                      const v5101 : Bool* = (x/5100 ? false : true);
                      let v5102 : Null;
                      claim(CT_Require)(v5101, Just "The action you are trying to perform has already been done");
                      v5102 : Null = null;
                      const _/5103 : Bool* = .fork126.msg/5089[0];
                      const v5104 : Null* = null;
                      const .api73.rngl/5105 : Null* = emitLog(api("Admin_api_freeze"))(v5104 );
                      only(Left "Admin_api_freeze") {
                        const v5106 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                        let v5107 : Null;
                        const didPublish/5108 : Bool* = didPublish/1821;
                        local(Just v5107 : Null) if didPublish/5108 then {
                          const v5109 : Bool* = .fork126.msg/5089[0];
                          protect<Null>("Admin_api_freeze".interact.out(.fork126.msg/5089, .api73.rngl/5105 ));
                           }
                        else {
                           };
                        v5107 : Null = null;
                         };
                      const v5110 : Null* = null;
                      const v5111 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5112 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5113 : Bool* = returnExpression/3039.continue;
                      const v5114 : Bool* = returnExpression/3039.freeze;
                      const v5115 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5116 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5117 : UInt* = returnExpression/3039.offers;
                      const v5118 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5111,
                        config = v5112,
                        continue = v5113,
                        freeze = toggle/5090,
                        loanTerms = v5115,
                        loanTermsAccepted = v5116,
                        offers = v5117};
                      const v5119 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5111,
                        config = v5112,
                        continue = v5113,
                        freeze = toggle/5090,
                        loanTerms = v5115,
                        loanTermsAccepted = v5116,
                        offers = v5117};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5119,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5014,
                        netBalance/3047 : UInt = v4978
                        }
                      continue; }
                    case Admin_api_updateConfig0_126 as .fork126.msg/5120 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                      const local_config/5121 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/5120[0];
                      const v5122 : Bool* = this/3421 == Admin/3007;
                      const v5123 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5124 : Bool* = (v5122 ? true : v5123);
                      let v5125 : Null;
                      claim(CT_Require)(v5124, Just "The current user trying to access this interface is not Admin");
                      v5125 : Null = null;
                      const x/5126 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5127 : Bool* = (x/5126 ? false : true);
                      let v5128 : Null;
                      claim(CT_Require)(v5127, Just "Cannot update config after Loan terms accepted");
                      v5128 : Null = null;
                      const _/5129 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/5120[0];
                      const v5130 : Null* = null;
                      const .api72.rngl/5131 : Null* = emitLog(api("Admin_api_updateConfig"))(v5130 );
                      only(Left "Admin_api_updateConfig") {
                        const v5132 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                        let v5133 : Null;
                        const didPublish/5134 : Bool* = didPublish/1821;
                        local(Just v5133 : Null) if didPublish/5134 then {
                          const v5135 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/5120[0];
                          const v5136 : Token* = v5135.token;
                          const v5137 : UInt* = v5135.number_of_tokens_to_deposit;
                          const v5138 : Token* = v5135.paymentAsset;
                          const v5139 : Bool* = v5135.shouldPayInOnlyNetworkToken;
                          const v5140 : Bool* = v5135.prefersNetworkToken;
                          protect<Null>("Admin_api_updateConfig".interact.out(.fork126.msg/5120, .api72.rngl/5131 ));
                           }
                        else {
                           };
                        v5133 : Null = null;
                         };
                      const v5141 : Null* = null;
                      const v5142 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5143 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5144 : Bool* = returnExpression/3039.continue;
                      const v5145 : Bool* = returnExpression/3039.freeze;
                      const v5146 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5147 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5148 : UInt* = returnExpression/3039.offers;
                      const v5149 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5142,
                        config = local_config/5121,
                        continue = v5144,
                        freeze = v5145,
                        loanTerms = v5146,
                        loanTermsAccepted = v5147,
                        offers = v5148};
                      const v5150 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5142,
                        config = local_config/5121,
                        continue = v5144,
                        freeze = v5145,
                        loanTerms = v5146,
                        loanTermsAccepted = v5147,
                        offers = v5148};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5150,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5014,
                        netBalance/3047 : UInt = v4978
                        }
                      continue; }
                    case Admin_api_updateLoanTerms_info0_126 as .fork126.msg/5151 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                      const local_config/5152 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/5151[0];
                      const v5153 : Bool* = this/3421 == Admin/3007;
                      const v5154 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5155 : Bool* = (v5153 ? true : v5154);
                      let v5156 : Null;
                      claim(CT_Require)(v5155, Just "The current user trying to access this interface is not Admin");
                      v5156 : Null = null;
                      const x/5157 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5158 : Bool* = (x/5157 ? false : true);
                      let v5159 : Null;
                      claim(CT_Require)(v5158, Just "Cannot update loan terms after Loan terms accepted");
                      v5159 : Null = null;
                      const _/5160 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/5151[0];
                      const v5161 : Null* = null;
                      const .api74.rngl/5162 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v5161 );
                      only(Left "Admin_api_updateLoanTerms_info") {
                        const v5163 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                        let v5164 : Null;
                        const didPublish/5165 : Bool* = didPublish/1821;
                        local(Just v5164 : Null) if didPublish/5165 then {
                          const v5166 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/5151[0];
                          const v5167 : UInt* = v5166.duration_in_blocks;
                          const v5168 : UInt* = v5166.principle;
                          const v5169 : Token* = v5166.interest;
                          protect<Null>("Admin_api_updateLoanTerms_info".interact.out(.fork126.msg/5151, .api74.rngl/5162 ));
                           }
                        else {
                           };
                        v5164 : Null = null;
                         };
                      const v5170 : Null* = null;
                      const v5171 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5172 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5173 : Bool* = returnExpression/3039.continue;
                      const v5174 : Bool* = returnExpression/3039.freeze;
                      const v5175 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5176 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5177 : UInt* = returnExpression/3039.offers;
                      const v5178 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5171,
                        config = v5172,
                        continue = v5173,
                        freeze = v5174,
                        loanTerms = local_config/5152,
                        loanTermsAccepted = v5176,
                        offers = v5177};
                      const v5179 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5171,
                        config = v5172,
                        continue = v5173,
                        freeze = v5174,
                        loanTerms = local_config/5152,
                        loanTermsAccepted = v5176,
                        offers = v5177};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5179,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5014,
                        netBalance/3047 : UInt = v4978
                        }
                      continue; }
                    case user_acceptLoan0_126 as .fork126.msg/5180 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                      let v5181 : Null;
                      const v5182 : Bool* = returnExpression/3039.freeze;
                      const v5183 : Bool* = (v5182 ? true : false);
                      let v5184 : Null;
                      claim(CT_Require)(v5183, Just "Contract is frozen");
                      v5184 : Null = null;
                      v5181 : Null = null;
                      const acceptedAmount/5185 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/5186 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5187 : Bool* = (x/5186 ? false : true);
                      let v5188 : Null;
                      claim(CT_Require)(v5187, Just "Offer already accepted");
                      v5188 : Null = null;
                      const v5189 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v5190 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5191 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/5185, v5190 ];
                      const v5192 : Tuple(UInt, Token)* = [acceptedAmount/5185, paymentToken/3019 ];
                      const v5193 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5192 ];
                      const transferData/5194 : Tuple(UInt, Tuple(UInt, Token))* = (v5189 ? v5191 : v5193);
                      const v5195 : Null* = null;
                      const .api77.rngl/5196 : Null* = emitLog(api("user_acceptLoan"))(v5195 );
                      only(Left "user_acceptLoan") {
                        const v5197 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                        let v5198 : Null;
                        const didPublish/5199 : Bool* = didPublish/1821;
                        local(Just v5198 : Null) if didPublish/5199 then {
                          protect<Null>("user_acceptLoan".interact.out(.fork126.msg/5180, .api77.rngl/5196 ));
                           }
                        else {
                           };
                        v5198 : Null = null;
                         };
                      const v5200 : Null* = null;
                      const v5201 : UInt* = transferData/5194[0];
                      const v5202 : Tuple(UInt, Token)* = transferData/5194[1];
                      const v5203 : UInt* = v5202[0];
                      const v5204 : Token* = v5202[1];
                      const netBalance/5205 : UInt* = v4978;
                      const v5206 : Bool* = v5201 <= netBalance/5205;
                      claim(CT_Assert)(v5206, Just "balance sufficient for transfer");
                      const netBalance/5207 : UInt* = v4978;
                      const v5208 : UInt* = netBalance/5207 - v5201;
                      transfer.(v5201, None).to(Admin/3007);
                      const initAcc/5209 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/5210 : Tuple(Bool, UInt)* = for (acc/5211 : Tuple(Bool, UInt)* = initAcc/5209; [elem/5212 : Token*],arrIdx/5213 : UInt* in [tokens'/3018]) {
                        const isFound/5214 : Bool* = acc/5211[0];
                        const searchIdx/5215 : UInt* = acc/5211[1];
                        const toksEq/5216 : Bool* = elem/5212 == v5204;
                        const cnd/5217 : Bool* = (isFound/5214 ? true : toksEq/5216);
                        const searchIdx'/5218 : UInt* = searchIdx/5215 + 1;
                        const failAcc/5219 : Tuple(Bool, UInt)* = [false, searchIdx'/5218 ];
                        const succAcc/5220 : Tuple(Bool, UInt)* = [true, searchIdx/5215 ];
                        const bl/5221 : Tuple(Bool, UInt)* = (cnd/5217 ? succAcc/5220 : failAcc/5219);
                        
                        return bl/5221;}
                      const tokIdx/5222 : UInt* = res/5210[1];
                      const isFound'/5223 : Bool* = res/5210[0];
                      claim(CT_Assert)(isFound'/5223, Just "Token is tracked");
                      const tokInfo/5224 : Tuple(UInt, UInt, Bool)* = tokInfos'/5014[tokIdx/5222];
                      const v5225 : UInt* = tokInfo/5224[0];
                      const v5226 : Bool* = v5203 <= v5225;
                      claim(CT_Assert)(v5226, Just "balance sufficient for transfer");
                      const initAcc/5227 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/5228 : Tuple(Bool, UInt)* = for (acc/5229 : Tuple(Bool, UInt)* = initAcc/5227; [elem/5230 : Token*],arrIdx/5231 : UInt* in [tokens'/3018]) {
                        const isFound/5232 : Bool* = acc/5229[0];
                        const searchIdx/5233 : UInt* = acc/5229[1];
                        const toksEq/5234 : Bool* = elem/5230 == v5204;
                        const cnd/5235 : Bool* = (isFound/5232 ? true : toksEq/5234);
                        const searchIdx'/5236 : UInt* = searchIdx/5233 + 1;
                        const failAcc/5237 : Tuple(Bool, UInt)* = [false, searchIdx'/5236 ];
                        const succAcc/5238 : Tuple(Bool, UInt)* = [true, searchIdx/5233 ];
                        const bl/5239 : Tuple(Bool, UInt)* = (cnd/5235 ? succAcc/5238 : failAcc/5237);
                        
                        return bl/5239;}
                      const tokIdx/5240 : UInt* = res/5228[1];
                      const isFound'/5241 : Bool* = res/5228[0];
                      claim(CT_Assert)(isFound'/5241, Just "Token is tracked");
                      const tokInfo/5242 : Tuple(UInt, UInt, Bool)* = tokInfos'/5014[tokIdx/5240];
                      const v5243 : UInt* = tokInfo/5242[0];
                      const v5244 : UInt* = v5243 - v5203;
                      const initAcc/5245 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/5246 : Tuple(Bool, UInt)* = for (acc/5247 : Tuple(Bool, UInt)* = initAcc/5245; [elem/5248 : Token*],arrIdx/5249 : UInt* in [tokens'/3018]) {
                        const isFound/5250 : Bool* = acc/5247[0];
                        const searchIdx/5251 : UInt* = acc/5247[1];
                        const toksEq/5252 : Bool* = elem/5248 == v5204;
                        const cnd/5253 : Bool* = (isFound/5250 ? true : toksEq/5252);
                        const searchIdx'/5254 : UInt* = searchIdx/5251 + 1;
                        const failAcc/5255 : Tuple(Bool, UInt)* = [false, searchIdx'/5254 ];
                        const succAcc/5256 : Tuple(Bool, UInt)* = [true, searchIdx/5251 ];
                        const bl/5257 : Tuple(Bool, UInt)* = (cnd/5253 ? succAcc/5256 : failAcc/5255);
                        
                        return bl/5257;}
                      const tokIdx/5258 : UInt* = res/5246[1];
                      const isFound'/5259 : Bool* = res/5246[0];
                      claim(CT_Assert)(isFound'/5259, Just "Token is tracked");
                      const tokInfo/5260 : Tuple(UInt, UInt, Bool)* = tokInfos'/5014[tokIdx/5258];
                      const tokInfo'/5261 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5260, 0, v5244 );
                      const tokInfos'/5262 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/5014, tokIdx/5258, tokInfo'/5261 );
                      transfer.(v5203, Some v5204).to(Admin/3007);
                      const v5263 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5264 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5265 : Bool* = returnExpression/3039.continue;
                      const v5266 : Bool* = returnExpression/3039.freeze;
                      const v5267 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5268 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5269 : UInt* = returnExpression/3039.offers;
                      const v5270 : UInt* = returnExpression/3039.offers;
                      const v5271 : UInt* = v5270 + 1;
                      const v5272 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v5273 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5272,
                        config = v5264,
                        continue = v5265,
                        freeze = v5266,
                        loanTerms = v5267,
                        loanTermsAccepted = true,
                        offers = v5271};
                      const v5274 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v5275 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5274,
                        config = v5264,
                        continue = v5265,
                        freeze = v5266,
                        loanTerms = v5267,
                        loanTermsAccepted = true,
                        offers = v5271};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5275,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5262,
                        netBalance/3047 : UInt = v5208
                        }
                      continue; }
                    case user_makeOffer0_126 as .fork126.msg/5276 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                      const v5277 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/5276[0];
                      const amount/5278 : UInt* = v5277.amount;
                      const shouldPayWithNetworkToken/5279 : Bool* = v5277.shouldPayWithNetworkToken;
                      let v5280 : Null;
                      const v5281 : Bool* = returnExpression/3039.freeze;
                      const v5282 : Bool* = (v5281 ? true : false);
                      let v5283 : Null;
                      claim(CT_Require)(v5282, Just "Contract is frozen");
                      v5283 : Null = null;
                      v5280 : Null = null;
                      const _/5284 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/5276[0];
                      const v5285 : UInt* = returnExpression/3039.offers;
                      const v5286 : UInt* = returnExpression/3039.offers;
                      const v5287 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/5278,
                        borrower = this/3421,
                        offerId = v5286,
                        rejected = false};
                      map0[v5285] = v5287;
                      const v5288 : UInt* = returnExpression/3039.offers;
                      const v5289 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/5278,
                        borrower = this/3421,
                        offerId = v5288,
                        rejected = false};
                      const .api78.rngl/5290 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v5289 );
                      only(Left "user_makeOffer") {
                        const v5291 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                        let v5292 : Null;
                        const didPublish/5293 : Bool* = didPublish/1821;
                        local(Just v5292 : Null) if didPublish/5293 then {
                          const v5294 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/5276[0];
                          const v5295 : UInt* = v5294.amount;
                          const v5296 : Bool* = v5294.shouldPayWithNetworkToken;
                          const v5297 : UInt* = .api78.rngl/5290.amount;
                          const v5298 : Address* = .api78.rngl/5290.borrower;
                          const v5299 : UInt* = .api78.rngl/5290.offerId;
                          const v5300 : Bool* = .api78.rngl/5290.rejected;
                          protect<Null>("user_makeOffer".interact.out(.fork126.msg/5276, .api78.rngl/5290 ));
                           }
                        else {
                           };
                        v5292 : Null = null;
                         };
                      const v5301 : Null* = null;
                      const v5302 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5303 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5304 : Bool* = returnExpression/3039.continue;
                      const v5305 : Bool* = returnExpression/3039.freeze;
                      const v5306 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5307 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5308 : UInt* = returnExpression/3039.offers;
                      const v5309 : UInt* = returnExpression/3039.offers;
                      const v5310 : UInt* = v5309 + 1;
                      const v5311 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5302,
                        config = v5303,
                        continue = v5304,
                        freeze = v5305,
                        loanTerms = v5306,
                        loanTermsAccepted = v5307,
                        offers = v5310};
                      const v5312 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5302,
                        config = v5303,
                        continue = v5304,
                        freeze = v5305,
                        loanTerms = v5306,
                        loanTermsAccepted = v5307,
                        offers = v5310};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5312,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5014,
                        netBalance/3047 : UInt = v4978
                        }
                      continue; } } }
                case Admin_api_updateLoanTerms_info0_126 as data_id/5313 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  let v5314 : Null;
                  v5314 : Null = null;
                  const v5315 : Null* = null;
                  let v5316 : Tuple(UInt, Tuple(UInt, Token));
                  local switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as data_id/5317 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const loanOffer/5318 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/5317[0];
                      const v5319 : Bool* = this/3421 == Admin/3007;
                      const v5320 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5321 : Bool* = (v5319 ? true : v5320);
                      let v5322 : Null;
                      claim(CT_Require)(v5321, Just "The current user trying to access this interface is not Admin");
                      v5322 : Null = null;
                      const x/5323 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5324 : Bool* = (x/5323 ? false : true);
                      let v5325 : Null;
                      claim(CT_Require)(v5324, Just "An offer has already been accepted");
                      v5325 : Null = null;
                      let v5326 : Null;
                      const v5327 : Bool* = returnExpression/3039.freeze;
                      const v5328 : Bool* = (v5327 ? true : false);
                      let v5329 : Null;
                      claim(CT_Require)(v5328, Just "Contract is frozen");
                      v5329 : Null = null;
                      v5326 : Null = null;
                      const v5330 : UInt* = loanOffer/5318.amount;
                      const v5331 : Address* = loanOffer/5318.borrower;
                      const v5332 : UInt* = loanOffer/5318.offerId;
                      const v5333 : Bool* = loanOffer/5318.rejected;
                      const m/5334 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v5332];
                      const v5335 : UInt* = dataTag(m/5334);
                      const v5336 : Bool* = v5335 == 1;
                      let v5337 : Null;
                      claim(CT_Require)(v5336, Just "Offer id doesn't exist");
                      v5337 : Null = null;
                      const v5338 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5339 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5338 ];
                      const v5340 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5341 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5340 ];
                      const v5342 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5343 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5342 ];
                      v5316 : Tuple(UInt, Tuple(UInt, Token)) = v5343;
                       }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/5344 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/5345 : UInt* = data_id/5344[0];
                      const v5346 : Bool* = this/3421 == Admin/3007;
                      const v5347 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5348 : Bool* = (v5346 ? true : v5347);
                      let v5349 : Null;
                      claim(CT_Require)(v5348, Just "The current user trying to access this interface is not Admin");
                      v5349 : Null = null;
                      const x/5350 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5351 : Bool* = (x/5350 ? false : true);
                      let v5352 : Null;
                      claim(CT_Require)(v5351, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v5352 : Null = null;
                      let v5353 : Null;
                      const v5354 : Bool* = returnExpression/3039.freeze;
                      const v5355 : Bool* = (v5354 ? true : false);
                      let v5356 : Null;
                      claim(CT_Require)(v5355, Just "Contract is frozen");
                      v5356 : Null = null;
                      v5353 : Null = null;
                      const v5357 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5358 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5357 ];
                      const v5359 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5360 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5359 ];
                      const v5361 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5362 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5361 ];
                      v5316 : Tuple(UInt, Tuple(UInt, Token)) = v5362;
                       }
                    case Admin_api_freeze0_126 as data_id/5363 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const toggle/5364 : Bool* = data_id/5363[0];
                      const v5365 : Bool* = this/3421 == Admin/3007;
                      const v5366 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5367 : Bool* = (v5365 ? true : v5366);
                      let v5368 : Null;
                      claim(CT_Require)(v5367, Just "The current user trying to access this interface is not Admin");
                      v5368 : Null = null;
                      const x/5369 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5370 : Bool* = (x/5369 ? false : true);
                      let v5371 : Null;
                      claim(CT_Require)(v5370, Just "Cannot update config after Loan terms accepted");
                      v5371 : Null = null;
                      const v5372 : Bool* = returnExpression/3039.freeze;
                      const v5373 : Bool* = (v5372 ? false : true);
                      const x/5374 : Bool* = (toggle/5364 ? v5372 : v5373);
                      const v5375 : Bool* = (x/5374 ? false : true);
                      let v5376 : Null;
                      claim(CT_Require)(v5375, Just "The action you are trying to perform has already been done");
                      v5376 : Null = null;
                      const v5377 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5378 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5377 ];
                      const v5379 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5380 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5379 ];
                      const v5381 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5382 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5381 ];
                      v5316 : Tuple(UInt, Tuple(UInt, Token)) = v5382;
                       }
                    case Admin_api_updateConfig0_126 as data_id/5383 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/5384 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/5383[0];
                      const v5385 : Bool* = this/3421 == Admin/3007;
                      const v5386 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5387 : Bool* = (v5385 ? true : v5386);
                      let v5388 : Null;
                      claim(CT_Require)(v5387, Just "The current user trying to access this interface is not Admin");
                      v5388 : Null = null;
                      const x/5389 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5390 : Bool* = (x/5389 ? false : true);
                      let v5391 : Null;
                      claim(CT_Require)(v5390, Just "Cannot update config after Loan terms accepted");
                      v5391 : Null = null;
                      const v5392 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5393 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5392 ];
                      const v5394 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5395 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5394 ];
                      const v5396 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5397 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5396 ];
                      v5316 : Tuple(UInt, Tuple(UInt, Token)) = v5397;
                       }
                    case Admin_api_updateLoanTerms_info0_126 as data_id/5398 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/5399 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/5398[0];
                      const v5400 : Bool* = this/3421 == Admin/3007;
                      const v5401 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5402 : Bool* = (v5400 ? true : v5401);
                      let v5403 : Null;
                      claim(CT_Require)(v5402, Just "The current user trying to access this interface is not Admin");
                      v5403 : Null = null;
                      const x/5404 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5405 : Bool* = (x/5404 ? false : true);
                      let v5406 : Null;
                      claim(CT_Require)(v5405, Just "Cannot update loan terms after Loan terms accepted");
                      v5406 : Null = null;
                      const v5407 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5408 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5407 ];
                      const v5409 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5410 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5409 ];
                      const v5411 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5412 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5411 ];
                      v5316 : Tuple(UInt, Tuple(UInt, Token)) = v5412;
                       }
                    case user_acceptLoan0_126 as data_id/5413 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      let v5414 : Null;
                      const v5415 : Bool* = returnExpression/3039.freeze;
                      const v5416 : Bool* = (v5415 ? true : false);
                      let v5417 : Null;
                      claim(CT_Require)(v5416, Just "Contract is frozen");
                      v5417 : Null = null;
                      v5414 : Null = null;
                      const acceptedAmount/5418 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/5419 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5420 : Bool* = (x/5419 ? false : true);
                      let v5421 : Null;
                      claim(CT_Require)(v5420, Just "Offer already accepted");
                      v5421 : Null = null;
                      const v5422 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v5423 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5424 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/5418, v5423 ];
                      const v5425 : Tuple(UInt, Token)* = [acceptedAmount/5418, paymentToken/3019 ];
                      const v5426 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5425 ];
                      const transferData/5427 : Tuple(UInt, Tuple(UInt, Token))* = (v5422 ? v5424 : v5426);
                      v5316 : Tuple(UInt, Tuple(UInt, Token)) = transferData/5427;
                       }
                    case user_makeOffer0_126 as data_id/5428 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const v5429 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/5428[0];
                      const amount/5430 : UInt* = v5429.amount;
                      const shouldPayWithNetworkToken/5431 : Bool* = v5429.shouldPayWithNetworkToken;
                      let v5432 : Null;
                      const v5433 : Bool* = returnExpression/3039.freeze;
                      const v5434 : Bool* = (v5433 ? true : false);
                      let v5435 : Null;
                      claim(CT_Require)(v5434, Just "Contract is frozen");
                      v5435 : Null = null;
                      v5432 : Null = null;
                      const v5436 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v5437 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5438 : Tuple(UInt, Tuple(UInt, Token))* = [amount/5430, v5437 ];
                      const v5439 : Tuple(UInt, Token)* = [amount/5430, paymentToken/3019 ];
                      const v5440 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5439 ];
                      const v5441 : Tuple(UInt, Tuple(UInt, Token))* = (v5436 ? v5438 : v5440);
                      v5316 : Tuple(UInt, Tuple(UInt, Token)) = v5441;
                       } }
                  const networkTokenPay/5442 : UInt* = v5316[0];
                  const v5443 : Tuple(UInt, Token)* = v5316[1];
                  const amt0/5444 : UInt* = v5443[0];
                  const nntok0/5445 : Token* = v5443[1];
                  const v5446 : Bool* = nntok0/5445 == paymentToken/3019;
                  claim(CT_Assert)(v5446, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v5447 : Tuple(UInt, Token)* = [amt0/5444, paymentToken/3019 ];
                  const v5448 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/5442, v5447 ];
                  const netBalance/5449 : UInt* = netBalance/3047;
                  const v5450 : UInt* = netBalance/5449 + networkTokenPay/5442;
                  checkPay(networkTokenPay/5442, None);
                  const initAcc/5451 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/5452 : Tuple(Bool, UInt)* = for (acc/5453 : Tuple(Bool, UInt)* = initAcc/5451; [elem/5454 : Token*],arrIdx/5455 : UInt* in [tokens'/3018]) {
                    const isFound/5456 : Bool* = acc/5453[0];
                    const searchIdx/5457 : UInt* = acc/5453[1];
                    const toksEq/5458 : Bool* = elem/5454 == paymentToken/3019;
                    const cnd/5459 : Bool* = (isFound/5456 ? true : toksEq/5458);
                    const searchIdx'/5460 : UInt* = searchIdx/5457 + 1;
                    const failAcc/5461 : Tuple(Bool, UInt)* = [false, searchIdx'/5460 ];
                    const succAcc/5462 : Tuple(Bool, UInt)* = [true, searchIdx/5457 ];
                    const bl/5463 : Tuple(Bool, UInt)* = (cnd/5459 ? succAcc/5462 : failAcc/5461);
                    
                    return bl/5463;}
                  const tokIdx/5464 : UInt* = res/5452[1];
                  const isFound'/5465 : Bool* = res/5452[0];
                  claim(CT_Assert)(isFound'/5465, Just "Token is tracked");
                  const tokInfo/5466 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5464];
                  const v5467 : UInt* = tokInfo/5466[0];
                  const v5468 : UInt* = v5467 + amt0/5444;
                  const initAcc/5469 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/5470 : Tuple(Bool, UInt)* = for (acc/5471 : Tuple(Bool, UInt)* = initAcc/5469; [elem/5472 : Token*],arrIdx/5473 : UInt* in [tokens'/3018]) {
                    const isFound/5474 : Bool* = acc/5471[0];
                    const searchIdx/5475 : UInt* = acc/5471[1];
                    const toksEq/5476 : Bool* = elem/5472 == paymentToken/3019;
                    const cnd/5477 : Bool* = (isFound/5474 ? true : toksEq/5476);
                    const searchIdx'/5478 : UInt* = searchIdx/5475 + 1;
                    const failAcc/5479 : Tuple(Bool, UInt)* = [false, searchIdx'/5478 ];
                    const succAcc/5480 : Tuple(Bool, UInt)* = [true, searchIdx/5475 ];
                    const bl/5481 : Tuple(Bool, UInt)* = (cnd/5477 ? succAcc/5480 : failAcc/5479);
                    
                    return bl/5481;}
                  const tokIdx/5482 : UInt* = res/5470[1];
                  const isFound'/5483 : Bool* = res/5470[0];
                  claim(CT_Assert)(isFound'/5483, Just "Token is tracked");
                  const tokInfo/5484 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5482];
                  const tokInfo'/5485 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5484, 0, v5468 );
                  const tokInfos'/5486 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/5482, tokInfo'/5485 );
                  checkPay(amt0/5444, Some paymentToken/3019);
                  switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as .fork126.msg/5487 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                      const loanOffer/5488 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5487[0];
                      const v5489 : Bool* = this/3421 == Admin/3007;
                      const v5490 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5491 : Bool* = (v5489 ? true : v5490);
                      let v5492 : Null;
                      claim(CT_Require)(v5491, Just "The current user trying to access this interface is not Admin");
                      v5492 : Null = null;
                      const x/5493 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5494 : Bool* = (x/5493 ? false : true);
                      let v5495 : Null;
                      claim(CT_Require)(v5494, Just "An offer has already been accepted");
                      v5495 : Null = null;
                      let v5496 : Null;
                      const v5497 : Bool* = returnExpression/3039.freeze;
                      const v5498 : Bool* = (v5497 ? true : false);
                      let v5499 : Null;
                      claim(CT_Require)(v5498, Just "Contract is frozen");
                      v5499 : Null = null;
                      v5496 : Null = null;
                      const v5500 : UInt* = loanOffer/5488.amount;
                      const v5501 : Address* = loanOffer/5488.borrower;
                      const v5502 : UInt* = loanOffer/5488.offerId;
                      const v5503 : Bool* = loanOffer/5488.rejected;
                      const offerInfo/5504 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v5502];
                      const v5505 : UInt* = dataTag(offerInfo/5504);
                      const v5506 : Bool* = v5505 == 1;
                      let v5507 : Null;
                      claim(CT_Require)(v5506, Just "Offer id doesn't exist");
                      v5507 : Null = null;
                      const _/5508 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5487[0];
                      const v5509 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = 0,
                        borrower = this/3421,
                        offerId = 0,
                        rejected = false};
                      const data/5510 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = fromSome(offerInfo/5504, v5509 );
                      const v5511 : Null* = null;
                      const .api76.rngl/5512 : Null* = emitLog(api("Admin_api_acceptOffer"))(v5511 );
                      only(Left "Admin_api_acceptOffer") {
                        const v5513 : Address* = selfAddress("Admin_api_acceptOffer", True, 1908 )();
                        let v5514 : Null;
                        const didPublish/5515 : Bool* = didPublish/1821;
                        local(Just v5514 : Null) if didPublish/5515 then {
                          const v5516 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5487[0];
                          const v5517 : UInt* = v5516.amount;
                          const v5518 : Address* = v5516.borrower;
                          const v5519 : UInt* = v5516.offerId;
                          const v5520 : Bool* = v5516.rejected;
                          protect<Null>("Admin_api_acceptOffer".interact.out(.fork126.msg/5487, .api76.rngl/5512 ));
                           }
                        else {
                           };
                        v5514 : Null = null;
                         };
                      const v5521 : Null* = null;
                      const v5522 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5523 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5524 : Bool* = returnExpression/3039.continue;
                      const v5525 : Bool* = returnExpression/3039.freeze;
                      const v5526 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5527 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5528 : UInt* = returnExpression/3039.offers;
                      const v5529 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5522,
                        config = v5523,
                        continue = v5524,
                        freeze = v5525,
                        loanTerms = v5526,
                        loanTermsAccepted = true,
                        offers = v5528};
                      const v5530 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5522,
                        config = v5523,
                        continue = v5524,
                        freeze = v5525,
                        loanTerms = v5526,
                        loanTermsAccepted = true,
                        offers = v5528};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5530,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5486,
                        netBalance/3047 : UInt = v5450
                        }
                      continue; }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as .fork126.msg/5531 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                      const local_config/5532 : UInt* = .fork126.msg/5531[0];
                      const v5533 : Bool* = this/3421 == Admin/3007;
                      const v5534 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5535 : Bool* = (v5533 ? true : v5534);
                      let v5536 : Null;
                      claim(CT_Require)(v5535, Just "The current user trying to access this interface is not Admin");
                      v5536 : Null = null;
                      const x/5537 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5538 : Bool* = (x/5537 ? false : true);
                      let v5539 : Null;
                      claim(CT_Require)(v5538, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v5539 : Null = null;
                      let v5540 : Null;
                      const v5541 : Bool* = returnExpression/3039.freeze;
                      const v5542 : Bool* = (v5541 ? true : false);
                      let v5543 : Null;
                      claim(CT_Require)(v5542, Just "Contract is frozen");
                      v5543 : Null = null;
                      v5540 : Null = null;
                      const _/5544 : UInt* = .fork126.msg/5531[0];
                      const v5545 : Null* = null;
                      const .api75.rngl/5546 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v5545 );
                      only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                        const v5547 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                        let v5548 : Null;
                        const didPublish/5549 : Bool* = didPublish/1821;
                        local(Just v5548 : Null) if didPublish/5549 then {
                          const v5550 : UInt* = .fork126.msg/5531[0];
                          protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(.fork126.msg/5531, .api75.rngl/5546 ));
                           }
                        else {
                           };
                        v5548 : Null = null;
                         };
                      const v5551 : Null* = null;
                      const v5552 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5553 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5554 : Bool* = returnExpression/3039.continue;
                      const v5555 : Bool* = returnExpression/3039.freeze;
                      const v5556 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5557 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5558 : UInt* = returnExpression/3039.offers;
                      const v5559 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5552,
                        config = v5553,
                        continue = false,
                        freeze = v5555,
                        loanTerms = v5556,
                        loanTermsAccepted = v5557,
                        offers = v5558};
                      const v5560 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5552,
                        config = v5553,
                        continue = false,
                        freeze = v5555,
                        loanTerms = v5556,
                        loanTermsAccepted = v5557,
                        offers = v5558};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5560,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5486,
                        netBalance/3047 : UInt = v5450
                        }
                      continue; }
                    case Admin_api_freeze0_126 as .fork126.msg/5561 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                      const toggle/5562 : Bool* = .fork126.msg/5561[0];
                      const v5563 : Bool* = this/3421 == Admin/3007;
                      const v5564 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5565 : Bool* = (v5563 ? true : v5564);
                      let v5566 : Null;
                      claim(CT_Require)(v5565, Just "The current user trying to access this interface is not Admin");
                      v5566 : Null = null;
                      const x/5567 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5568 : Bool* = (x/5567 ? false : true);
                      let v5569 : Null;
                      claim(CT_Require)(v5568, Just "Cannot update config after Loan terms accepted");
                      v5569 : Null = null;
                      const v5570 : Bool* = returnExpression/3039.freeze;
                      const v5571 : Bool* = (v5570 ? false : true);
                      const x/5572 : Bool* = (toggle/5562 ? v5570 : v5571);
                      const v5573 : Bool* = (x/5572 ? false : true);
                      let v5574 : Null;
                      claim(CT_Require)(v5573, Just "The action you are trying to perform has already been done");
                      v5574 : Null = null;
                      const _/5575 : Bool* = .fork126.msg/5561[0];
                      const v5576 : Null* = null;
                      const .api73.rngl/5577 : Null* = emitLog(api("Admin_api_freeze"))(v5576 );
                      only(Left "Admin_api_freeze") {
                        const v5578 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                        let v5579 : Null;
                        const didPublish/5580 : Bool* = didPublish/1821;
                        local(Just v5579 : Null) if didPublish/5580 then {
                          const v5581 : Bool* = .fork126.msg/5561[0];
                          protect<Null>("Admin_api_freeze".interact.out(.fork126.msg/5561, .api73.rngl/5577 ));
                           }
                        else {
                           };
                        v5579 : Null = null;
                         };
                      const v5582 : Null* = null;
                      const v5583 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5584 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5585 : Bool* = returnExpression/3039.continue;
                      const v5586 : Bool* = returnExpression/3039.freeze;
                      const v5587 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5588 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5589 : UInt* = returnExpression/3039.offers;
                      const v5590 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5583,
                        config = v5584,
                        continue = v5585,
                        freeze = toggle/5562,
                        loanTerms = v5587,
                        loanTermsAccepted = v5588,
                        offers = v5589};
                      const v5591 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5583,
                        config = v5584,
                        continue = v5585,
                        freeze = toggle/5562,
                        loanTerms = v5587,
                        loanTermsAccepted = v5588,
                        offers = v5589};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5591,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5486,
                        netBalance/3047 : UInt = v5450
                        }
                      continue; }
                    case Admin_api_updateConfig0_126 as .fork126.msg/5592 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                      const local_config/5593 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/5592[0];
                      const v5594 : Bool* = this/3421 == Admin/3007;
                      const v5595 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5596 : Bool* = (v5594 ? true : v5595);
                      let v5597 : Null;
                      claim(CT_Require)(v5596, Just "The current user trying to access this interface is not Admin");
                      v5597 : Null = null;
                      const x/5598 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5599 : Bool* = (x/5598 ? false : true);
                      let v5600 : Null;
                      claim(CT_Require)(v5599, Just "Cannot update config after Loan terms accepted");
                      v5600 : Null = null;
                      const _/5601 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/5592[0];
                      const v5602 : Null* = null;
                      const .api72.rngl/5603 : Null* = emitLog(api("Admin_api_updateConfig"))(v5602 );
                      only(Left "Admin_api_updateConfig") {
                        const v5604 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                        let v5605 : Null;
                        const didPublish/5606 : Bool* = didPublish/1821;
                        local(Just v5605 : Null) if didPublish/5606 then {
                          const v5607 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/5592[0];
                          const v5608 : Token* = v5607.token;
                          const v5609 : UInt* = v5607.number_of_tokens_to_deposit;
                          const v5610 : Token* = v5607.paymentAsset;
                          const v5611 : Bool* = v5607.shouldPayInOnlyNetworkToken;
                          const v5612 : Bool* = v5607.prefersNetworkToken;
                          protect<Null>("Admin_api_updateConfig".interact.out(.fork126.msg/5592, .api72.rngl/5603 ));
                           }
                        else {
                           };
                        v5605 : Null = null;
                         };
                      const v5613 : Null* = null;
                      const v5614 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5615 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5616 : Bool* = returnExpression/3039.continue;
                      const v5617 : Bool* = returnExpression/3039.freeze;
                      const v5618 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5619 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5620 : UInt* = returnExpression/3039.offers;
                      const v5621 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5614,
                        config = local_config/5593,
                        continue = v5616,
                        freeze = v5617,
                        loanTerms = v5618,
                        loanTermsAccepted = v5619,
                        offers = v5620};
                      const v5622 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5614,
                        config = local_config/5593,
                        continue = v5616,
                        freeze = v5617,
                        loanTerms = v5618,
                        loanTermsAccepted = v5619,
                        offers = v5620};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5622,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5486,
                        netBalance/3047 : UInt = v5450
                        }
                      continue; }
                    case Admin_api_updateLoanTerms_info0_126 as .fork126.msg/5623 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                      const local_config/5624 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/5623[0];
                      const v5625 : Bool* = this/3421 == Admin/3007;
                      const v5626 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5627 : Bool* = (v5625 ? true : v5626);
                      let v5628 : Null;
                      claim(CT_Require)(v5627, Just "The current user trying to access this interface is not Admin");
                      v5628 : Null = null;
                      const x/5629 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5630 : Bool* = (x/5629 ? false : true);
                      let v5631 : Null;
                      claim(CT_Require)(v5630, Just "Cannot update loan terms after Loan terms accepted");
                      v5631 : Null = null;
                      const _/5632 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/5623[0];
                      const v5633 : Null* = null;
                      const .api74.rngl/5634 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v5633 );
                      only(Left "Admin_api_updateLoanTerms_info") {
                        const v5635 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                        let v5636 : Null;
                        const didPublish/5637 : Bool* = didPublish/1821;
                        local(Just v5636 : Null) if didPublish/5637 then {
                          const v5638 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/5623[0];
                          const v5639 : UInt* = v5638.duration_in_blocks;
                          const v5640 : UInt* = v5638.principle;
                          const v5641 : Token* = v5638.interest;
                          protect<Null>("Admin_api_updateLoanTerms_info".interact.out(.fork126.msg/5623, .api74.rngl/5634 ));
                           }
                        else {
                           };
                        v5636 : Null = null;
                         };
                      const v5642 : Null* = null;
                      const v5643 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5644 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5645 : Bool* = returnExpression/3039.continue;
                      const v5646 : Bool* = returnExpression/3039.freeze;
                      const v5647 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5648 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5649 : UInt* = returnExpression/3039.offers;
                      const v5650 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5643,
                        config = v5644,
                        continue = v5645,
                        freeze = v5646,
                        loanTerms = local_config/5624,
                        loanTermsAccepted = v5648,
                        offers = v5649};
                      const v5651 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5643,
                        config = v5644,
                        continue = v5645,
                        freeze = v5646,
                        loanTerms = local_config/5624,
                        loanTermsAccepted = v5648,
                        offers = v5649};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5651,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5486,
                        netBalance/3047 : UInt = v5450
                        }
                      continue; }
                    case user_acceptLoan0_126 as .fork126.msg/5652 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                      let v5653 : Null;
                      const v5654 : Bool* = returnExpression/3039.freeze;
                      const v5655 : Bool* = (v5654 ? true : false);
                      let v5656 : Null;
                      claim(CT_Require)(v5655, Just "Contract is frozen");
                      v5656 : Null = null;
                      v5653 : Null = null;
                      const acceptedAmount/5657 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/5658 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5659 : Bool* = (x/5658 ? false : true);
                      let v5660 : Null;
                      claim(CT_Require)(v5659, Just "Offer already accepted");
                      v5660 : Null = null;
                      const v5661 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v5662 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5663 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/5657, v5662 ];
                      const v5664 : Tuple(UInt, Token)* = [acceptedAmount/5657, paymentToken/3019 ];
                      const v5665 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5664 ];
                      const transferData/5666 : Tuple(UInt, Tuple(UInt, Token))* = (v5661 ? v5663 : v5665);
                      const v5667 : Null* = null;
                      const .api77.rngl/5668 : Null* = emitLog(api("user_acceptLoan"))(v5667 );
                      only(Left "user_acceptLoan") {
                        const v5669 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                        let v5670 : Null;
                        const didPublish/5671 : Bool* = didPublish/1821;
                        local(Just v5670 : Null) if didPublish/5671 then {
                          protect<Null>("user_acceptLoan".interact.out(.fork126.msg/5652, .api77.rngl/5668 ));
                           }
                        else {
                           };
                        v5670 : Null = null;
                         };
                      const v5672 : Null* = null;
                      const v5673 : UInt* = transferData/5666[0];
                      const v5674 : Tuple(UInt, Token)* = transferData/5666[1];
                      const v5675 : UInt* = v5674[0];
                      const v5676 : Token* = v5674[1];
                      const netBalance/5677 : UInt* = v5450;
                      const v5678 : Bool* = v5673 <= netBalance/5677;
                      claim(CT_Assert)(v5678, Just "balance sufficient for transfer");
                      const netBalance/5679 : UInt* = v5450;
                      const v5680 : UInt* = netBalance/5679 - v5673;
                      transfer.(v5673, None).to(Admin/3007);
                      const initAcc/5681 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/5682 : Tuple(Bool, UInt)* = for (acc/5683 : Tuple(Bool, UInt)* = initAcc/5681; [elem/5684 : Token*],arrIdx/5685 : UInt* in [tokens'/3018]) {
                        const isFound/5686 : Bool* = acc/5683[0];
                        const searchIdx/5687 : UInt* = acc/5683[1];
                        const toksEq/5688 : Bool* = elem/5684 == v5676;
                        const cnd/5689 : Bool* = (isFound/5686 ? true : toksEq/5688);
                        const searchIdx'/5690 : UInt* = searchIdx/5687 + 1;
                        const failAcc/5691 : Tuple(Bool, UInt)* = [false, searchIdx'/5690 ];
                        const succAcc/5692 : Tuple(Bool, UInt)* = [true, searchIdx/5687 ];
                        const bl/5693 : Tuple(Bool, UInt)* = (cnd/5689 ? succAcc/5692 : failAcc/5691);
                        
                        return bl/5693;}
                      const tokIdx/5694 : UInt* = res/5682[1];
                      const isFound'/5695 : Bool* = res/5682[0];
                      claim(CT_Assert)(isFound'/5695, Just "Token is tracked");
                      const tokInfo/5696 : Tuple(UInt, UInt, Bool)* = tokInfos'/5486[tokIdx/5694];
                      const v5697 : UInt* = tokInfo/5696[0];
                      const v5698 : Bool* = v5675 <= v5697;
                      claim(CT_Assert)(v5698, Just "balance sufficient for transfer");
                      const initAcc/5699 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/5700 : Tuple(Bool, UInt)* = for (acc/5701 : Tuple(Bool, UInt)* = initAcc/5699; [elem/5702 : Token*],arrIdx/5703 : UInt* in [tokens'/3018]) {
                        const isFound/5704 : Bool* = acc/5701[0];
                        const searchIdx/5705 : UInt* = acc/5701[1];
                        const toksEq/5706 : Bool* = elem/5702 == v5676;
                        const cnd/5707 : Bool* = (isFound/5704 ? true : toksEq/5706);
                        const searchIdx'/5708 : UInt* = searchIdx/5705 + 1;
                        const failAcc/5709 : Tuple(Bool, UInt)* = [false, searchIdx'/5708 ];
                        const succAcc/5710 : Tuple(Bool, UInt)* = [true, searchIdx/5705 ];
                        const bl/5711 : Tuple(Bool, UInt)* = (cnd/5707 ? succAcc/5710 : failAcc/5709);
                        
                        return bl/5711;}
                      const tokIdx/5712 : UInt* = res/5700[1];
                      const isFound'/5713 : Bool* = res/5700[0];
                      claim(CT_Assert)(isFound'/5713, Just "Token is tracked");
                      const tokInfo/5714 : Tuple(UInt, UInt, Bool)* = tokInfos'/5486[tokIdx/5712];
                      const v5715 : UInt* = tokInfo/5714[0];
                      const v5716 : UInt* = v5715 - v5675;
                      const initAcc/5717 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/5718 : Tuple(Bool, UInt)* = for (acc/5719 : Tuple(Bool, UInt)* = initAcc/5717; [elem/5720 : Token*],arrIdx/5721 : UInt* in [tokens'/3018]) {
                        const isFound/5722 : Bool* = acc/5719[0];
                        const searchIdx/5723 : UInt* = acc/5719[1];
                        const toksEq/5724 : Bool* = elem/5720 == v5676;
                        const cnd/5725 : Bool* = (isFound/5722 ? true : toksEq/5724);
                        const searchIdx'/5726 : UInt* = searchIdx/5723 + 1;
                        const failAcc/5727 : Tuple(Bool, UInt)* = [false, searchIdx'/5726 ];
                        const succAcc/5728 : Tuple(Bool, UInt)* = [true, searchIdx/5723 ];
                        const bl/5729 : Tuple(Bool, UInt)* = (cnd/5725 ? succAcc/5728 : failAcc/5727);
                        
                        return bl/5729;}
                      const tokIdx/5730 : UInt* = res/5718[1];
                      const isFound'/5731 : Bool* = res/5718[0];
                      claim(CT_Assert)(isFound'/5731, Just "Token is tracked");
                      const tokInfo/5732 : Tuple(UInt, UInt, Bool)* = tokInfos'/5486[tokIdx/5730];
                      const tokInfo'/5733 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5732, 0, v5716 );
                      const tokInfos'/5734 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/5486, tokIdx/5730, tokInfo'/5733 );
                      transfer.(v5675, Some v5676).to(Admin/3007);
                      const v5735 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5736 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5737 : Bool* = returnExpression/3039.continue;
                      const v5738 : Bool* = returnExpression/3039.freeze;
                      const v5739 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5740 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5741 : UInt* = returnExpression/3039.offers;
                      const v5742 : UInt* = returnExpression/3039.offers;
                      const v5743 : UInt* = v5742 + 1;
                      const v5744 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v5745 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5744,
                        config = v5736,
                        continue = v5737,
                        freeze = v5738,
                        loanTerms = v5739,
                        loanTermsAccepted = true,
                        offers = v5743};
                      const v5746 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v5747 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5746,
                        config = v5736,
                        continue = v5737,
                        freeze = v5738,
                        loanTerms = v5739,
                        loanTermsAccepted = true,
                        offers = v5743};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5747,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5734,
                        netBalance/3047 : UInt = v5680
                        }
                      continue; }
                    case user_makeOffer0_126 as .fork126.msg/5748 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                      const v5749 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/5748[0];
                      const amount/5750 : UInt* = v5749.amount;
                      const shouldPayWithNetworkToken/5751 : Bool* = v5749.shouldPayWithNetworkToken;
                      let v5752 : Null;
                      const v5753 : Bool* = returnExpression/3039.freeze;
                      const v5754 : Bool* = (v5753 ? true : false);
                      let v5755 : Null;
                      claim(CT_Require)(v5754, Just "Contract is frozen");
                      v5755 : Null = null;
                      v5752 : Null = null;
                      const _/5756 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/5748[0];
                      const v5757 : UInt* = returnExpression/3039.offers;
                      const v5758 : UInt* = returnExpression/3039.offers;
                      const v5759 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/5750,
                        borrower = this/3421,
                        offerId = v5758,
                        rejected = false};
                      map0[v5757] = v5759;
                      const v5760 : UInt* = returnExpression/3039.offers;
                      const v5761 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/5750,
                        borrower = this/3421,
                        offerId = v5760,
                        rejected = false};
                      const .api78.rngl/5762 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v5761 );
                      only(Left "user_makeOffer") {
                        const v5763 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                        let v5764 : Null;
                        const didPublish/5765 : Bool* = didPublish/1821;
                        local(Just v5764 : Null) if didPublish/5765 then {
                          const v5766 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/5748[0];
                          const v5767 : UInt* = v5766.amount;
                          const v5768 : Bool* = v5766.shouldPayWithNetworkToken;
                          const v5769 : UInt* = .api78.rngl/5762.amount;
                          const v5770 : Address* = .api78.rngl/5762.borrower;
                          const v5771 : UInt* = .api78.rngl/5762.offerId;
                          const v5772 : Bool* = .api78.rngl/5762.rejected;
                          protect<Null>("user_makeOffer".interact.out(.fork126.msg/5748, .api78.rngl/5762 ));
                           }
                        else {
                           };
                        v5764 : Null = null;
                         };
                      const v5773 : Null* = null;
                      const v5774 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5775 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5776 : Bool* = returnExpression/3039.continue;
                      const v5777 : Bool* = returnExpression/3039.freeze;
                      const v5778 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5779 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5780 : UInt* = returnExpression/3039.offers;
                      const v5781 : UInt* = returnExpression/3039.offers;
                      const v5782 : UInt* = v5781 + 1;
                      const v5783 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5774,
                        config = v5775,
                        continue = v5776,
                        freeze = v5777,
                        loanTerms = v5778,
                        loanTermsAccepted = v5779,
                        offers = v5782};
                      const v5784 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5774,
                        config = v5775,
                        continue = v5776,
                        freeze = v5777,
                        loanTerms = v5778,
                        loanTermsAccepted = v5779,
                        offers = v5782};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5784,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5486,
                        netBalance/3047 : UInt = v5450
                        }
                      continue; } } }
                case user_acceptLoan0_126 as data_id/5785 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  let v5786 : Null;
                  v5786 : Null = null;
                  const v5787 : Null* = null;
                  let v5788 : Tuple(UInt, Tuple(UInt, Token));
                  local switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as data_id/5789 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const loanOffer/5790 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/5789[0];
                      const v5791 : Bool* = this/3421 == Admin/3007;
                      const v5792 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5793 : Bool* = (v5791 ? true : v5792);
                      let v5794 : Null;
                      claim(CT_Require)(v5793, Just "The current user trying to access this interface is not Admin");
                      v5794 : Null = null;
                      const x/5795 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5796 : Bool* = (x/5795 ? false : true);
                      let v5797 : Null;
                      claim(CT_Require)(v5796, Just "An offer has already been accepted");
                      v5797 : Null = null;
                      let v5798 : Null;
                      const v5799 : Bool* = returnExpression/3039.freeze;
                      const v5800 : Bool* = (v5799 ? true : false);
                      let v5801 : Null;
                      claim(CT_Require)(v5800, Just "Contract is frozen");
                      v5801 : Null = null;
                      v5798 : Null = null;
                      const v5802 : UInt* = loanOffer/5790.amount;
                      const v5803 : Address* = loanOffer/5790.borrower;
                      const v5804 : UInt* = loanOffer/5790.offerId;
                      const v5805 : Bool* = loanOffer/5790.rejected;
                      const m/5806 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v5804];
                      const v5807 : UInt* = dataTag(m/5806);
                      const v5808 : Bool* = v5807 == 1;
                      let v5809 : Null;
                      claim(CT_Require)(v5808, Just "Offer id doesn't exist");
                      v5809 : Null = null;
                      const v5810 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5811 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5810 ];
                      const v5812 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5813 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5812 ];
                      const v5814 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5815 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5814 ];
                      v5788 : Tuple(UInt, Tuple(UInt, Token)) = v5815;
                       }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/5816 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/5817 : UInt* = data_id/5816[0];
                      const v5818 : Bool* = this/3421 == Admin/3007;
                      const v5819 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5820 : Bool* = (v5818 ? true : v5819);
                      let v5821 : Null;
                      claim(CT_Require)(v5820, Just "The current user trying to access this interface is not Admin");
                      v5821 : Null = null;
                      const x/5822 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5823 : Bool* = (x/5822 ? false : true);
                      let v5824 : Null;
                      claim(CT_Require)(v5823, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v5824 : Null = null;
                      let v5825 : Null;
                      const v5826 : Bool* = returnExpression/3039.freeze;
                      const v5827 : Bool* = (v5826 ? true : false);
                      let v5828 : Null;
                      claim(CT_Require)(v5827, Just "Contract is frozen");
                      v5828 : Null = null;
                      v5825 : Null = null;
                      const v5829 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5830 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5829 ];
                      const v5831 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5832 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5831 ];
                      const v5833 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5834 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5833 ];
                      v5788 : Tuple(UInt, Tuple(UInt, Token)) = v5834;
                       }
                    case Admin_api_freeze0_126 as data_id/5835 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const toggle/5836 : Bool* = data_id/5835[0];
                      const v5837 : Bool* = this/3421 == Admin/3007;
                      const v5838 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5839 : Bool* = (v5837 ? true : v5838);
                      let v5840 : Null;
                      claim(CT_Require)(v5839, Just "The current user trying to access this interface is not Admin");
                      v5840 : Null = null;
                      const x/5841 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5842 : Bool* = (x/5841 ? false : true);
                      let v5843 : Null;
                      claim(CT_Require)(v5842, Just "Cannot update config after Loan terms accepted");
                      v5843 : Null = null;
                      const v5844 : Bool* = returnExpression/3039.freeze;
                      const v5845 : Bool* = (v5844 ? false : true);
                      const x/5846 : Bool* = (toggle/5836 ? v5844 : v5845);
                      const v5847 : Bool* = (x/5846 ? false : true);
                      let v5848 : Null;
                      claim(CT_Require)(v5847, Just "The action you are trying to perform has already been done");
                      v5848 : Null = null;
                      const v5849 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5850 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5849 ];
                      const v5851 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5852 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5851 ];
                      const v5853 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5854 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5853 ];
                      v5788 : Tuple(UInt, Tuple(UInt, Token)) = v5854;
                       }
                    case Admin_api_updateConfig0_126 as data_id/5855 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/5856 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/5855[0];
                      const v5857 : Bool* = this/3421 == Admin/3007;
                      const v5858 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5859 : Bool* = (v5857 ? true : v5858);
                      let v5860 : Null;
                      claim(CT_Require)(v5859, Just "The current user trying to access this interface is not Admin");
                      v5860 : Null = null;
                      const x/5861 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5862 : Bool* = (x/5861 ? false : true);
                      let v5863 : Null;
                      claim(CT_Require)(v5862, Just "Cannot update config after Loan terms accepted");
                      v5863 : Null = null;
                      const v5864 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5865 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5864 ];
                      const v5866 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5867 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5866 ];
                      const v5868 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5869 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5868 ];
                      v5788 : Tuple(UInt, Tuple(UInt, Token)) = v5869;
                       }
                    case Admin_api_updateLoanTerms_info0_126 as data_id/5870 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/5871 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/5870[0];
                      const v5872 : Bool* = this/3421 == Admin/3007;
                      const v5873 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5874 : Bool* = (v5872 ? true : v5873);
                      let v5875 : Null;
                      claim(CT_Require)(v5874, Just "The current user trying to access this interface is not Admin");
                      v5875 : Null = null;
                      const x/5876 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5877 : Bool* = (x/5876 ? false : true);
                      let v5878 : Null;
                      claim(CT_Require)(v5877, Just "Cannot update loan terms after Loan terms accepted");
                      v5878 : Null = null;
                      const v5879 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5880 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5879 ];
                      const v5881 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5882 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5881 ];
                      const v5883 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5884 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5883 ];
                      v5788 : Tuple(UInt, Tuple(UInt, Token)) = v5884;
                       }
                    case user_acceptLoan0_126 as data_id/5885 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      let v5886 : Null;
                      const v5887 : Bool* = returnExpression/3039.freeze;
                      const v5888 : Bool* = (v5887 ? true : false);
                      let v5889 : Null;
                      claim(CT_Require)(v5888, Just "Contract is frozen");
                      v5889 : Null = null;
                      v5886 : Null = null;
                      const acceptedAmount/5890 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/5891 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5892 : Bool* = (x/5891 ? false : true);
                      let v5893 : Null;
                      claim(CT_Require)(v5892, Just "Offer already accepted");
                      v5893 : Null = null;
                      const v5894 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v5895 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5896 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/5890, v5895 ];
                      const v5897 : Tuple(UInt, Token)* = [acceptedAmount/5890, paymentToken/3019 ];
                      const v5898 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5897 ];
                      const transferData/5899 : Tuple(UInt, Tuple(UInt, Token))* = (v5894 ? v5896 : v5898);
                      v5788 : Tuple(UInt, Tuple(UInt, Token)) = transferData/5899;
                       }
                    case user_makeOffer0_126 as data_id/5900 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const v5901 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/5900[0];
                      const amount/5902 : UInt* = v5901.amount;
                      const shouldPayWithNetworkToken/5903 : Bool* = v5901.shouldPayWithNetworkToken;
                      let v5904 : Null;
                      const v5905 : Bool* = returnExpression/3039.freeze;
                      const v5906 : Bool* = (v5905 ? true : false);
                      let v5907 : Null;
                      claim(CT_Require)(v5906, Just "Contract is frozen");
                      v5907 : Null = null;
                      v5904 : Null = null;
                      const v5908 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v5909 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v5910 : Tuple(UInt, Tuple(UInt, Token))* = [amount/5902, v5909 ];
                      const v5911 : Tuple(UInt, Token)* = [amount/5902, paymentToken/3019 ];
                      const v5912 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5911 ];
                      const v5913 : Tuple(UInt, Tuple(UInt, Token))* = (v5908 ? v5910 : v5912);
                      v5788 : Tuple(UInt, Tuple(UInt, Token)) = v5913;
                       } }
                  const networkTokenPay/5914 : UInt* = v5788[0];
                  const v5915 : Tuple(UInt, Token)* = v5788[1];
                  const amt0/5916 : UInt* = v5915[0];
                  const nntok0/5917 : Token* = v5915[1];
                  const v5918 : Bool* = nntok0/5917 == paymentToken/3019;
                  claim(CT_Assert)(v5918, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v5919 : Tuple(UInt, Token)* = [amt0/5916, paymentToken/3019 ];
                  const v5920 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/5914, v5919 ];
                  const netBalance/5921 : UInt* = netBalance/3047;
                  const v5922 : UInt* = netBalance/5921 + networkTokenPay/5914;
                  checkPay(networkTokenPay/5914, None);
                  const initAcc/5923 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/5924 : Tuple(Bool, UInt)* = for (acc/5925 : Tuple(Bool, UInt)* = initAcc/5923; [elem/5926 : Token*],arrIdx/5927 : UInt* in [tokens'/3018]) {
                    const isFound/5928 : Bool* = acc/5925[0];
                    const searchIdx/5929 : UInt* = acc/5925[1];
                    const toksEq/5930 : Bool* = elem/5926 == paymentToken/3019;
                    const cnd/5931 : Bool* = (isFound/5928 ? true : toksEq/5930);
                    const searchIdx'/5932 : UInt* = searchIdx/5929 + 1;
                    const failAcc/5933 : Tuple(Bool, UInt)* = [false, searchIdx'/5932 ];
                    const succAcc/5934 : Tuple(Bool, UInt)* = [true, searchIdx/5929 ];
                    const bl/5935 : Tuple(Bool, UInt)* = (cnd/5931 ? succAcc/5934 : failAcc/5933);
                    
                    return bl/5935;}
                  const tokIdx/5936 : UInt* = res/5924[1];
                  const isFound'/5937 : Bool* = res/5924[0];
                  claim(CT_Assert)(isFound'/5937, Just "Token is tracked");
                  const tokInfo/5938 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5936];
                  const v5939 : UInt* = tokInfo/5938[0];
                  const v5940 : UInt* = v5939 + amt0/5916;
                  const initAcc/5941 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/5942 : Tuple(Bool, UInt)* = for (acc/5943 : Tuple(Bool, UInt)* = initAcc/5941; [elem/5944 : Token*],arrIdx/5945 : UInt* in [tokens'/3018]) {
                    const isFound/5946 : Bool* = acc/5943[0];
                    const searchIdx/5947 : UInt* = acc/5943[1];
                    const toksEq/5948 : Bool* = elem/5944 == paymentToken/3019;
                    const cnd/5949 : Bool* = (isFound/5946 ? true : toksEq/5948);
                    const searchIdx'/5950 : UInt* = searchIdx/5947 + 1;
                    const failAcc/5951 : Tuple(Bool, UInt)* = [false, searchIdx'/5950 ];
                    const succAcc/5952 : Tuple(Bool, UInt)* = [true, searchIdx/5947 ];
                    const bl/5953 : Tuple(Bool, UInt)* = (cnd/5949 ? succAcc/5952 : failAcc/5951);
                    
                    return bl/5953;}
                  const tokIdx/5954 : UInt* = res/5942[1];
                  const isFound'/5955 : Bool* = res/5942[0];
                  claim(CT_Assert)(isFound'/5955, Just "Token is tracked");
                  const tokInfo/5956 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5954];
                  const tokInfo'/5957 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5956, 0, v5940 );
                  const tokInfos'/5958 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/5954, tokInfo'/5957 );
                  checkPay(amt0/5916, Some paymentToken/3019);
                  switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as .fork126.msg/5959 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                      const loanOffer/5960 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5959[0];
                      const v5961 : Bool* = this/3421 == Admin/3007;
                      const v5962 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v5963 : Bool* = (v5961 ? true : v5962);
                      let v5964 : Null;
                      claim(CT_Require)(v5963, Just "The current user trying to access this interface is not Admin");
                      v5964 : Null = null;
                      const x/5965 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v5966 : Bool* = (x/5965 ? false : true);
                      let v5967 : Null;
                      claim(CT_Require)(v5966, Just "An offer has already been accepted");
                      v5967 : Null = null;
                      let v5968 : Null;
                      const v5969 : Bool* = returnExpression/3039.freeze;
                      const v5970 : Bool* = (v5969 ? true : false);
                      let v5971 : Null;
                      claim(CT_Require)(v5970, Just "Contract is frozen");
                      v5971 : Null = null;
                      v5968 : Null = null;
                      const v5972 : UInt* = loanOffer/5960.amount;
                      const v5973 : Address* = loanOffer/5960.borrower;
                      const v5974 : UInt* = loanOffer/5960.offerId;
                      const v5975 : Bool* = loanOffer/5960.rejected;
                      const offerInfo/5976 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v5974];
                      const v5977 : UInt* = dataTag(offerInfo/5976);
                      const v5978 : Bool* = v5977 == 1;
                      let v5979 : Null;
                      claim(CT_Require)(v5978, Just "Offer id doesn't exist");
                      v5979 : Null = null;
                      const _/5980 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5959[0];
                      const v5981 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = 0,
                        borrower = this/3421,
                        offerId = 0,
                        rejected = false};
                      const data/5982 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = fromSome(offerInfo/5976, v5981 );
                      const v5983 : Null* = null;
                      const .api76.rngl/5984 : Null* = emitLog(api("Admin_api_acceptOffer"))(v5983 );
                      only(Left "Admin_api_acceptOffer") {
                        const v5985 : Address* = selfAddress("Admin_api_acceptOffer", True, 1908 )();
                        let v5986 : Null;
                        const didPublish/5987 : Bool* = didPublish/1821;
                        local(Just v5986 : Null) if didPublish/5987 then {
                          const v5988 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/5959[0];
                          const v5989 : UInt* = v5988.amount;
                          const v5990 : Address* = v5988.borrower;
                          const v5991 : UInt* = v5988.offerId;
                          const v5992 : Bool* = v5988.rejected;
                          protect<Null>("Admin_api_acceptOffer".interact.out(.fork126.msg/5959, .api76.rngl/5984 ));
                           }
                        else {
                           };
                        v5986 : Null = null;
                         };
                      const v5993 : Null* = null;
                      const v5994 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v5995 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v5996 : Bool* = returnExpression/3039.continue;
                      const v5997 : Bool* = returnExpression/3039.freeze;
                      const v5998 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v5999 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6000 : UInt* = returnExpression/3039.offers;
                      const v6001 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5994,
                        config = v5995,
                        continue = v5996,
                        freeze = v5997,
                        loanTerms = v5998,
                        loanTermsAccepted = true,
                        offers = v6000};
                      const v6002 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v5994,
                        config = v5995,
                        continue = v5996,
                        freeze = v5997,
                        loanTerms = v5998,
                        loanTermsAccepted = true,
                        offers = v6000};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6002,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5958,
                        netBalance/3047 : UInt = v5922
                        }
                      continue; }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as .fork126.msg/6003 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                      const local_config/6004 : UInt* = .fork126.msg/6003[0];
                      const v6005 : Bool* = this/3421 == Admin/3007;
                      const v6006 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6007 : Bool* = (v6005 ? true : v6006);
                      let v6008 : Null;
                      claim(CT_Require)(v6007, Just "The current user trying to access this interface is not Admin");
                      v6008 : Null = null;
                      const x/6009 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6010 : Bool* = (x/6009 ? false : true);
                      let v6011 : Null;
                      claim(CT_Require)(v6010, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v6011 : Null = null;
                      let v6012 : Null;
                      const v6013 : Bool* = returnExpression/3039.freeze;
                      const v6014 : Bool* = (v6013 ? true : false);
                      let v6015 : Null;
                      claim(CT_Require)(v6014, Just "Contract is frozen");
                      v6015 : Null = null;
                      v6012 : Null = null;
                      const _/6016 : UInt* = .fork126.msg/6003[0];
                      const v6017 : Null* = null;
                      const .api75.rngl/6018 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v6017 );
                      only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                        const v6019 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                        let v6020 : Null;
                        const didPublish/6021 : Bool* = didPublish/1821;
                        local(Just v6020 : Null) if didPublish/6021 then {
                          const v6022 : UInt* = .fork126.msg/6003[0];
                          protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(.fork126.msg/6003, .api75.rngl/6018 ));
                           }
                        else {
                           };
                        v6020 : Null = null;
                         };
                      const v6023 : Null* = null;
                      const v6024 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6025 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6026 : Bool* = returnExpression/3039.continue;
                      const v6027 : Bool* = returnExpression/3039.freeze;
                      const v6028 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6029 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6030 : UInt* = returnExpression/3039.offers;
                      const v6031 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6024,
                        config = v6025,
                        continue = false,
                        freeze = v6027,
                        loanTerms = v6028,
                        loanTermsAccepted = v6029,
                        offers = v6030};
                      const v6032 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6024,
                        config = v6025,
                        continue = false,
                        freeze = v6027,
                        loanTerms = v6028,
                        loanTermsAccepted = v6029,
                        offers = v6030};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6032,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5958,
                        netBalance/3047 : UInt = v5922
                        }
                      continue; }
                    case Admin_api_freeze0_126 as .fork126.msg/6033 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                      const toggle/6034 : Bool* = .fork126.msg/6033[0];
                      const v6035 : Bool* = this/3421 == Admin/3007;
                      const v6036 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6037 : Bool* = (v6035 ? true : v6036);
                      let v6038 : Null;
                      claim(CT_Require)(v6037, Just "The current user trying to access this interface is not Admin");
                      v6038 : Null = null;
                      const x/6039 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6040 : Bool* = (x/6039 ? false : true);
                      let v6041 : Null;
                      claim(CT_Require)(v6040, Just "Cannot update config after Loan terms accepted");
                      v6041 : Null = null;
                      const v6042 : Bool* = returnExpression/3039.freeze;
                      const v6043 : Bool* = (v6042 ? false : true);
                      const x/6044 : Bool* = (toggle/6034 ? v6042 : v6043);
                      const v6045 : Bool* = (x/6044 ? false : true);
                      let v6046 : Null;
                      claim(CT_Require)(v6045, Just "The action you are trying to perform has already been done");
                      v6046 : Null = null;
                      const _/6047 : Bool* = .fork126.msg/6033[0];
                      const v6048 : Null* = null;
                      const .api73.rngl/6049 : Null* = emitLog(api("Admin_api_freeze"))(v6048 );
                      only(Left "Admin_api_freeze") {
                        const v6050 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                        let v6051 : Null;
                        const didPublish/6052 : Bool* = didPublish/1821;
                        local(Just v6051 : Null) if didPublish/6052 then {
                          const v6053 : Bool* = .fork126.msg/6033[0];
                          protect<Null>("Admin_api_freeze".interact.out(.fork126.msg/6033, .api73.rngl/6049 ));
                           }
                        else {
                           };
                        v6051 : Null = null;
                         };
                      const v6054 : Null* = null;
                      const v6055 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6056 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6057 : Bool* = returnExpression/3039.continue;
                      const v6058 : Bool* = returnExpression/3039.freeze;
                      const v6059 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6060 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6061 : UInt* = returnExpression/3039.offers;
                      const v6062 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6055,
                        config = v6056,
                        continue = v6057,
                        freeze = toggle/6034,
                        loanTerms = v6059,
                        loanTermsAccepted = v6060,
                        offers = v6061};
                      const v6063 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6055,
                        config = v6056,
                        continue = v6057,
                        freeze = toggle/6034,
                        loanTerms = v6059,
                        loanTermsAccepted = v6060,
                        offers = v6061};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6063,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5958,
                        netBalance/3047 : UInt = v5922
                        }
                      continue; }
                    case Admin_api_updateConfig0_126 as .fork126.msg/6064 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                      const local_config/6065 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/6064[0];
                      const v6066 : Bool* = this/3421 == Admin/3007;
                      const v6067 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6068 : Bool* = (v6066 ? true : v6067);
                      let v6069 : Null;
                      claim(CT_Require)(v6068, Just "The current user trying to access this interface is not Admin");
                      v6069 : Null = null;
                      const x/6070 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6071 : Bool* = (x/6070 ? false : true);
                      let v6072 : Null;
                      claim(CT_Require)(v6071, Just "Cannot update config after Loan terms accepted");
                      v6072 : Null = null;
                      const _/6073 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/6064[0];
                      const v6074 : Null* = null;
                      const .api72.rngl/6075 : Null* = emitLog(api("Admin_api_updateConfig"))(v6074 );
                      only(Left "Admin_api_updateConfig") {
                        const v6076 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                        let v6077 : Null;
                        const didPublish/6078 : Bool* = didPublish/1821;
                        local(Just v6077 : Null) if didPublish/6078 then {
                          const v6079 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/6064[0];
                          const v6080 : Token* = v6079.token;
                          const v6081 : UInt* = v6079.number_of_tokens_to_deposit;
                          const v6082 : Token* = v6079.paymentAsset;
                          const v6083 : Bool* = v6079.shouldPayInOnlyNetworkToken;
                          const v6084 : Bool* = v6079.prefersNetworkToken;
                          protect<Null>("Admin_api_updateConfig".interact.out(.fork126.msg/6064, .api72.rngl/6075 ));
                           }
                        else {
                           };
                        v6077 : Null = null;
                         };
                      const v6085 : Null* = null;
                      const v6086 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6087 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6088 : Bool* = returnExpression/3039.continue;
                      const v6089 : Bool* = returnExpression/3039.freeze;
                      const v6090 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6091 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6092 : UInt* = returnExpression/3039.offers;
                      const v6093 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6086,
                        config = local_config/6065,
                        continue = v6088,
                        freeze = v6089,
                        loanTerms = v6090,
                        loanTermsAccepted = v6091,
                        offers = v6092};
                      const v6094 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6086,
                        config = local_config/6065,
                        continue = v6088,
                        freeze = v6089,
                        loanTerms = v6090,
                        loanTermsAccepted = v6091,
                        offers = v6092};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6094,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5958,
                        netBalance/3047 : UInt = v5922
                        }
                      continue; }
                    case Admin_api_updateLoanTerms_info0_126 as .fork126.msg/6095 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                      const local_config/6096 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/6095[0];
                      const v6097 : Bool* = this/3421 == Admin/3007;
                      const v6098 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6099 : Bool* = (v6097 ? true : v6098);
                      let v6100 : Null;
                      claim(CT_Require)(v6099, Just "The current user trying to access this interface is not Admin");
                      v6100 : Null = null;
                      const x/6101 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6102 : Bool* = (x/6101 ? false : true);
                      let v6103 : Null;
                      claim(CT_Require)(v6102, Just "Cannot update loan terms after Loan terms accepted");
                      v6103 : Null = null;
                      const _/6104 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/6095[0];
                      const v6105 : Null* = null;
                      const .api74.rngl/6106 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v6105 );
                      only(Left "Admin_api_updateLoanTerms_info") {
                        const v6107 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                        let v6108 : Null;
                        const didPublish/6109 : Bool* = didPublish/1821;
                        local(Just v6108 : Null) if didPublish/6109 then {
                          const v6110 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/6095[0];
                          const v6111 : UInt* = v6110.duration_in_blocks;
                          const v6112 : UInt* = v6110.principle;
                          const v6113 : Token* = v6110.interest;
                          protect<Null>("Admin_api_updateLoanTerms_info".interact.out(.fork126.msg/6095, .api74.rngl/6106 ));
                           }
                        else {
                           };
                        v6108 : Null = null;
                         };
                      const v6114 : Null* = null;
                      const v6115 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6116 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6117 : Bool* = returnExpression/3039.continue;
                      const v6118 : Bool* = returnExpression/3039.freeze;
                      const v6119 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6120 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6121 : UInt* = returnExpression/3039.offers;
                      const v6122 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6115,
                        config = v6116,
                        continue = v6117,
                        freeze = v6118,
                        loanTerms = local_config/6096,
                        loanTermsAccepted = v6120,
                        offers = v6121};
                      const v6123 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6115,
                        config = v6116,
                        continue = v6117,
                        freeze = v6118,
                        loanTerms = local_config/6096,
                        loanTermsAccepted = v6120,
                        offers = v6121};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6123,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5958,
                        netBalance/3047 : UInt = v5922
                        }
                      continue; }
                    case user_acceptLoan0_126 as .fork126.msg/6124 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                      let v6125 : Null;
                      const v6126 : Bool* = returnExpression/3039.freeze;
                      const v6127 : Bool* = (v6126 ? true : false);
                      let v6128 : Null;
                      claim(CT_Require)(v6127, Just "Contract is frozen");
                      v6128 : Null = null;
                      v6125 : Null = null;
                      const acceptedAmount/6129 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/6130 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6131 : Bool* = (x/6130 ? false : true);
                      let v6132 : Null;
                      claim(CT_Require)(v6131, Just "Offer already accepted");
                      v6132 : Null = null;
                      const v6133 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v6134 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6135 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/6129, v6134 ];
                      const v6136 : Tuple(UInt, Token)* = [acceptedAmount/6129, paymentToken/3019 ];
                      const v6137 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6136 ];
                      const transferData/6138 : Tuple(UInt, Tuple(UInt, Token))* = (v6133 ? v6135 : v6137);
                      const v6139 : Null* = null;
                      const .api77.rngl/6140 : Null* = emitLog(api("user_acceptLoan"))(v6139 );
                      only(Left "user_acceptLoan") {
                        const v6141 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                        let v6142 : Null;
                        const didPublish/6143 : Bool* = didPublish/1821;
                        local(Just v6142 : Null) if didPublish/6143 then {
                          protect<Null>("user_acceptLoan".interact.out(.fork126.msg/6124, .api77.rngl/6140 ));
                           }
                        else {
                           };
                        v6142 : Null = null;
                         };
                      const v6144 : Null* = null;
                      const v6145 : UInt* = transferData/6138[0];
                      const v6146 : Tuple(UInt, Token)* = transferData/6138[1];
                      const v6147 : UInt* = v6146[0];
                      const v6148 : Token* = v6146[1];
                      const netBalance/6149 : UInt* = v5922;
                      const v6150 : Bool* = v6145 <= netBalance/6149;
                      claim(CT_Assert)(v6150, Just "balance sufficient for transfer");
                      const netBalance/6151 : UInt* = v5922;
                      const v6152 : UInt* = netBalance/6151 - v6145;
                      transfer.(v6145, None).to(Admin/3007);
                      const initAcc/6153 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/6154 : Tuple(Bool, UInt)* = for (acc/6155 : Tuple(Bool, UInt)* = initAcc/6153; [elem/6156 : Token*],arrIdx/6157 : UInt* in [tokens'/3018]) {
                        const isFound/6158 : Bool* = acc/6155[0];
                        const searchIdx/6159 : UInt* = acc/6155[1];
                        const toksEq/6160 : Bool* = elem/6156 == v6148;
                        const cnd/6161 : Bool* = (isFound/6158 ? true : toksEq/6160);
                        const searchIdx'/6162 : UInt* = searchIdx/6159 + 1;
                        const failAcc/6163 : Tuple(Bool, UInt)* = [false, searchIdx'/6162 ];
                        const succAcc/6164 : Tuple(Bool, UInt)* = [true, searchIdx/6159 ];
                        const bl/6165 : Tuple(Bool, UInt)* = (cnd/6161 ? succAcc/6164 : failAcc/6163);
                        
                        return bl/6165;}
                      const tokIdx/6166 : UInt* = res/6154[1];
                      const isFound'/6167 : Bool* = res/6154[0];
                      claim(CT_Assert)(isFound'/6167, Just "Token is tracked");
                      const tokInfo/6168 : Tuple(UInt, UInt, Bool)* = tokInfos'/5958[tokIdx/6166];
                      const v6169 : UInt* = tokInfo/6168[0];
                      const v6170 : Bool* = v6147 <= v6169;
                      claim(CT_Assert)(v6170, Just "balance sufficient for transfer");
                      const initAcc/6171 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/6172 : Tuple(Bool, UInt)* = for (acc/6173 : Tuple(Bool, UInt)* = initAcc/6171; [elem/6174 : Token*],arrIdx/6175 : UInt* in [tokens'/3018]) {
                        const isFound/6176 : Bool* = acc/6173[0];
                        const searchIdx/6177 : UInt* = acc/6173[1];
                        const toksEq/6178 : Bool* = elem/6174 == v6148;
                        const cnd/6179 : Bool* = (isFound/6176 ? true : toksEq/6178);
                        const searchIdx'/6180 : UInt* = searchIdx/6177 + 1;
                        const failAcc/6181 : Tuple(Bool, UInt)* = [false, searchIdx'/6180 ];
                        const succAcc/6182 : Tuple(Bool, UInt)* = [true, searchIdx/6177 ];
                        const bl/6183 : Tuple(Bool, UInt)* = (cnd/6179 ? succAcc/6182 : failAcc/6181);
                        
                        return bl/6183;}
                      const tokIdx/6184 : UInt* = res/6172[1];
                      const isFound'/6185 : Bool* = res/6172[0];
                      claim(CT_Assert)(isFound'/6185, Just "Token is tracked");
                      const tokInfo/6186 : Tuple(UInt, UInt, Bool)* = tokInfos'/5958[tokIdx/6184];
                      const v6187 : UInt* = tokInfo/6186[0];
                      const v6188 : UInt* = v6187 - v6147;
                      const initAcc/6189 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/6190 : Tuple(Bool, UInt)* = for (acc/6191 : Tuple(Bool, UInt)* = initAcc/6189; [elem/6192 : Token*],arrIdx/6193 : UInt* in [tokens'/3018]) {
                        const isFound/6194 : Bool* = acc/6191[0];
                        const searchIdx/6195 : UInt* = acc/6191[1];
                        const toksEq/6196 : Bool* = elem/6192 == v6148;
                        const cnd/6197 : Bool* = (isFound/6194 ? true : toksEq/6196);
                        const searchIdx'/6198 : UInt* = searchIdx/6195 + 1;
                        const failAcc/6199 : Tuple(Bool, UInt)* = [false, searchIdx'/6198 ];
                        const succAcc/6200 : Tuple(Bool, UInt)* = [true, searchIdx/6195 ];
                        const bl/6201 : Tuple(Bool, UInt)* = (cnd/6197 ? succAcc/6200 : failAcc/6199);
                        
                        return bl/6201;}
                      const tokIdx/6202 : UInt* = res/6190[1];
                      const isFound'/6203 : Bool* = res/6190[0];
                      claim(CT_Assert)(isFound'/6203, Just "Token is tracked");
                      const tokInfo/6204 : Tuple(UInt, UInt, Bool)* = tokInfos'/5958[tokIdx/6202];
                      const tokInfo'/6205 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/6204, 0, v6188 );
                      const tokInfos'/6206 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/5958, tokIdx/6202, tokInfo'/6205 );
                      transfer.(v6147, Some v6148).to(Admin/3007);
                      const v6207 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6208 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6209 : Bool* = returnExpression/3039.continue;
                      const v6210 : Bool* = returnExpression/3039.freeze;
                      const v6211 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6212 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6213 : UInt* = returnExpression/3039.offers;
                      const v6214 : UInt* = returnExpression/3039.offers;
                      const v6215 : UInt* = v6214 + 1;
                      const v6216 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v6217 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6216,
                        config = v6208,
                        continue = v6209,
                        freeze = v6210,
                        loanTerms = v6211,
                        loanTermsAccepted = true,
                        offers = v6215};
                      const v6218 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v6219 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6218,
                        config = v6208,
                        continue = v6209,
                        freeze = v6210,
                        loanTerms = v6211,
                        loanTermsAccepted = true,
                        offers = v6215};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6219,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6206,
                        netBalance/3047 : UInt = v6152
                        }
                      continue; }
                    case user_makeOffer0_126 as .fork126.msg/6220 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                      const v6221 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/6220[0];
                      const amount/6222 : UInt* = v6221.amount;
                      const shouldPayWithNetworkToken/6223 : Bool* = v6221.shouldPayWithNetworkToken;
                      let v6224 : Null;
                      const v6225 : Bool* = returnExpression/3039.freeze;
                      const v6226 : Bool* = (v6225 ? true : false);
                      let v6227 : Null;
                      claim(CT_Require)(v6226, Just "Contract is frozen");
                      v6227 : Null = null;
                      v6224 : Null = null;
                      const _/6228 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/6220[0];
                      const v6229 : UInt* = returnExpression/3039.offers;
                      const v6230 : UInt* = returnExpression/3039.offers;
                      const v6231 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/6222,
                        borrower = this/3421,
                        offerId = v6230,
                        rejected = false};
                      map0[v6229] = v6231;
                      const v6232 : UInt* = returnExpression/3039.offers;
                      const v6233 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/6222,
                        borrower = this/3421,
                        offerId = v6232,
                        rejected = false};
                      const .api78.rngl/6234 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v6233 );
                      only(Left "user_makeOffer") {
                        const v6235 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                        let v6236 : Null;
                        const didPublish/6237 : Bool* = didPublish/1821;
                        local(Just v6236 : Null) if didPublish/6237 then {
                          const v6238 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/6220[0];
                          const v6239 : UInt* = v6238.amount;
                          const v6240 : Bool* = v6238.shouldPayWithNetworkToken;
                          const v6241 : UInt* = .api78.rngl/6234.amount;
                          const v6242 : Address* = .api78.rngl/6234.borrower;
                          const v6243 : UInt* = .api78.rngl/6234.offerId;
                          const v6244 : Bool* = .api78.rngl/6234.rejected;
                          protect<Null>("user_makeOffer".interact.out(.fork126.msg/6220, .api78.rngl/6234 ));
                           }
                        else {
                           };
                        v6236 : Null = null;
                         };
                      const v6245 : Null* = null;
                      const v6246 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6247 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6248 : Bool* = returnExpression/3039.continue;
                      const v6249 : Bool* = returnExpression/3039.freeze;
                      const v6250 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6251 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6252 : UInt* = returnExpression/3039.offers;
                      const v6253 : UInt* = returnExpression/3039.offers;
                      const v6254 : UInt* = v6253 + 1;
                      const v6255 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6246,
                        config = v6247,
                        continue = v6248,
                        freeze = v6249,
                        loanTerms = v6250,
                        loanTermsAccepted = v6251,
                        offers = v6254};
                      const v6256 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6246,
                        config = v6247,
                        continue = v6248,
                        freeze = v6249,
                        loanTerms = v6250,
                        loanTermsAccepted = v6251,
                        offers = v6254};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6256,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/5958,
                        netBalance/3047 : UInt = v5922
                        }
                      continue; } } }
                case user_makeOffer0_126 as data_id/6257 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  let v6258 : Null;
                  v6258 : Null = null;
                  const v6259 : Null* = null;
                  let v6260 : Tuple(UInt, Tuple(UInt, Token));
                  local switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as data_id/6261 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const loanOffer/6262 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/6261[0];
                      const v6263 : Bool* = this/3421 == Admin/3007;
                      const v6264 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6265 : Bool* = (v6263 ? true : v6264);
                      let v6266 : Null;
                      claim(CT_Require)(v6265, Just "The current user trying to access this interface is not Admin");
                      v6266 : Null = null;
                      const x/6267 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6268 : Bool* = (x/6267 ? false : true);
                      let v6269 : Null;
                      claim(CT_Require)(v6268, Just "An offer has already been accepted");
                      v6269 : Null = null;
                      let v6270 : Null;
                      const v6271 : Bool* = returnExpression/3039.freeze;
                      const v6272 : Bool* = (v6271 ? true : false);
                      let v6273 : Null;
                      claim(CT_Require)(v6272, Just "Contract is frozen");
                      v6273 : Null = null;
                      v6270 : Null = null;
                      const v6274 : UInt* = loanOffer/6262.amount;
                      const v6275 : Address* = loanOffer/6262.borrower;
                      const v6276 : UInt* = loanOffer/6262.offerId;
                      const v6277 : Bool* = loanOffer/6262.rejected;
                      const m/6278 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v6276];
                      const v6279 : UInt* = dataTag(m/6278);
                      const v6280 : Bool* = v6279 == 1;
                      let v6281 : Null;
                      claim(CT_Require)(v6280, Just "Offer id doesn't exist");
                      v6281 : Null = null;
                      const v6282 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6283 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6282 ];
                      const v6284 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6285 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6284 ];
                      const v6286 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6287 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6286 ];
                      v6260 : Tuple(UInt, Tuple(UInt, Token)) = v6287;
                       }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/6288 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/6289 : UInt* = data_id/6288[0];
                      const v6290 : Bool* = this/3421 == Admin/3007;
                      const v6291 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6292 : Bool* = (v6290 ? true : v6291);
                      let v6293 : Null;
                      claim(CT_Require)(v6292, Just "The current user trying to access this interface is not Admin");
                      v6293 : Null = null;
                      const x/6294 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6295 : Bool* = (x/6294 ? false : true);
                      let v6296 : Null;
                      claim(CT_Require)(v6295, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v6296 : Null = null;
                      let v6297 : Null;
                      const v6298 : Bool* = returnExpression/3039.freeze;
                      const v6299 : Bool* = (v6298 ? true : false);
                      let v6300 : Null;
                      claim(CT_Require)(v6299, Just "Contract is frozen");
                      v6300 : Null = null;
                      v6297 : Null = null;
                      const v6301 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6302 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6301 ];
                      const v6303 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6304 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6303 ];
                      const v6305 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6306 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6305 ];
                      v6260 : Tuple(UInt, Tuple(UInt, Token)) = v6306;
                       }
                    case Admin_api_freeze0_126 as data_id/6307 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const toggle/6308 : Bool* = data_id/6307[0];
                      const v6309 : Bool* = this/3421 == Admin/3007;
                      const v6310 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6311 : Bool* = (v6309 ? true : v6310);
                      let v6312 : Null;
                      claim(CT_Require)(v6311, Just "The current user trying to access this interface is not Admin");
                      v6312 : Null = null;
                      const x/6313 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6314 : Bool* = (x/6313 ? false : true);
                      let v6315 : Null;
                      claim(CT_Require)(v6314, Just "Cannot update config after Loan terms accepted");
                      v6315 : Null = null;
                      const v6316 : Bool* = returnExpression/3039.freeze;
                      const v6317 : Bool* = (v6316 ? false : true);
                      const x/6318 : Bool* = (toggle/6308 ? v6316 : v6317);
                      const v6319 : Bool* = (x/6318 ? false : true);
                      let v6320 : Null;
                      claim(CT_Require)(v6319, Just "The action you are trying to perform has already been done");
                      v6320 : Null = null;
                      const v6321 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6322 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6321 ];
                      const v6323 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6324 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6323 ];
                      const v6325 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6326 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6325 ];
                      v6260 : Tuple(UInt, Tuple(UInt, Token)) = v6326;
                       }
                    case Admin_api_updateConfig0_126 as data_id/6327 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/6328 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/6327[0];
                      const v6329 : Bool* = this/3421 == Admin/3007;
                      const v6330 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6331 : Bool* = (v6329 ? true : v6330);
                      let v6332 : Null;
                      claim(CT_Require)(v6331, Just "The current user trying to access this interface is not Admin");
                      v6332 : Null = null;
                      const x/6333 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6334 : Bool* = (x/6333 ? false : true);
                      let v6335 : Null;
                      claim(CT_Require)(v6334, Just "Cannot update config after Loan terms accepted");
                      v6335 : Null = null;
                      const v6336 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6337 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6336 ];
                      const v6338 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6339 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6338 ];
                      const v6340 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6341 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6340 ];
                      v6260 : Tuple(UInt, Tuple(UInt, Token)) = v6341;
                       }
                    case Admin_api_updateLoanTerms_info0_126 as data_id/6342 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const local_config/6343 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/6342[0];
                      const v6344 : Bool* = this/3421 == Admin/3007;
                      const v6345 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6346 : Bool* = (v6344 ? true : v6345);
                      let v6347 : Null;
                      claim(CT_Require)(v6346, Just "The current user trying to access this interface is not Admin");
                      v6347 : Null = null;
                      const x/6348 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6349 : Bool* = (x/6348 ? false : true);
                      let v6350 : Null;
                      claim(CT_Require)(v6349, Just "Cannot update loan terms after Loan terms accepted");
                      v6350 : Null = null;
                      const v6351 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6352 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6351 ];
                      const v6353 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6354 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6353 ];
                      const v6355 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6356 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6355 ];
                      v6260 : Tuple(UInt, Tuple(UInt, Token)) = v6356;
                       }
                    case user_acceptLoan0_126 as data_id/6357 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      let v6358 : Null;
                      const v6359 : Bool* = returnExpression/3039.freeze;
                      const v6360 : Bool* = (v6359 ? true : false);
                      let v6361 : Null;
                      claim(CT_Require)(v6360, Just "Contract is frozen");
                      v6361 : Null = null;
                      v6358 : Null = null;
                      const acceptedAmount/6362 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/6363 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6364 : Bool* = (x/6363 ? false : true);
                      let v6365 : Null;
                      claim(CT_Require)(v6364, Just "Offer already accepted");
                      v6365 : Null = null;
                      const v6366 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v6367 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6368 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/6362, v6367 ];
                      const v6369 : Tuple(UInt, Token)* = [acceptedAmount/6362, paymentToken/3019 ];
                      const v6370 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6369 ];
                      const transferData/6371 : Tuple(UInt, Tuple(UInt, Token))* = (v6366 ? v6368 : v6370);
                      v6260 : Tuple(UInt, Tuple(UInt, Token)) = transferData/6371;
                       }
                    case user_makeOffer0_126 as data_id/6372 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      const v6373 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/6372[0];
                      const amount/6374 : UInt* = v6373.amount;
                      const shouldPayWithNetworkToken/6375 : Bool* = v6373.shouldPayWithNetworkToken;
                      let v6376 : Null;
                      const v6377 : Bool* = returnExpression/3039.freeze;
                      const v6378 : Bool* = (v6377 ? true : false);
                      let v6379 : Null;
                      claim(CT_Require)(v6378, Just "Contract is frozen");
                      v6379 : Null = null;
                      v6376 : Null = null;
                      const v6380 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v6381 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6382 : Tuple(UInt, Tuple(UInt, Token))* = [amount/6374, v6381 ];
                      const v6383 : Tuple(UInt, Token)* = [amount/6374, paymentToken/3019 ];
                      const v6384 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6383 ];
                      const v6385 : Tuple(UInt, Tuple(UInt, Token))* = (v6380 ? v6382 : v6384);
                      v6260 : Tuple(UInt, Tuple(UInt, Token)) = v6385;
                       } }
                  const networkTokenPay/6386 : UInt* = v6260[0];
                  const v6387 : Tuple(UInt, Token)* = v6260[1];
                  const amt0/6388 : UInt* = v6387[0];
                  const nntok0/6389 : Token* = v6387[1];
                  const v6390 : Bool* = nntok0/6389 == paymentToken/3019;
                  claim(CT_Assert)(v6390, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v6391 : Tuple(UInt, Token)* = [amt0/6388, paymentToken/3019 ];
                  const v6392 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/6386, v6391 ];
                  const netBalance/6393 : UInt* = netBalance/3047;
                  const v6394 : UInt* = netBalance/6393 + networkTokenPay/6386;
                  checkPay(networkTokenPay/6386, None);
                  const initAcc/6395 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/6396 : Tuple(Bool, UInt)* = for (acc/6397 : Tuple(Bool, UInt)* = initAcc/6395; [elem/6398 : Token*],arrIdx/6399 : UInt* in [tokens'/3018]) {
                    const isFound/6400 : Bool* = acc/6397[0];
                    const searchIdx/6401 : UInt* = acc/6397[1];
                    const toksEq/6402 : Bool* = elem/6398 == paymentToken/3019;
                    const cnd/6403 : Bool* = (isFound/6400 ? true : toksEq/6402);
                    const searchIdx'/6404 : UInt* = searchIdx/6401 + 1;
                    const failAcc/6405 : Tuple(Bool, UInt)* = [false, searchIdx'/6404 ];
                    const succAcc/6406 : Tuple(Bool, UInt)* = [true, searchIdx/6401 ];
                    const bl/6407 : Tuple(Bool, UInt)* = (cnd/6403 ? succAcc/6406 : failAcc/6405);
                    
                    return bl/6407;}
                  const tokIdx/6408 : UInt* = res/6396[1];
                  const isFound'/6409 : Bool* = res/6396[0];
                  claim(CT_Assert)(isFound'/6409, Just "Token is tracked");
                  const tokInfo/6410 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/6408];
                  const v6411 : UInt* = tokInfo/6410[0];
                  const v6412 : UInt* = v6411 + amt0/6388;
                  const initAcc/6413 : Tuple(Bool, UInt)* = [false, 0 ];
                  reduce res/6414 : Tuple(Bool, UInt)* = for (acc/6415 : Tuple(Bool, UInt)* = initAcc/6413; [elem/6416 : Token*],arrIdx/6417 : UInt* in [tokens'/3018]) {
                    const isFound/6418 : Bool* = acc/6415[0];
                    const searchIdx/6419 : UInt* = acc/6415[1];
                    const toksEq/6420 : Bool* = elem/6416 == paymentToken/3019;
                    const cnd/6421 : Bool* = (isFound/6418 ? true : toksEq/6420);
                    const searchIdx'/6422 : UInt* = searchIdx/6419 + 1;
                    const failAcc/6423 : Tuple(Bool, UInt)* = [false, searchIdx'/6422 ];
                    const succAcc/6424 : Tuple(Bool, UInt)* = [true, searchIdx/6419 ];
                    const bl/6425 : Tuple(Bool, UInt)* = (cnd/6421 ? succAcc/6424 : failAcc/6423);
                    
                    return bl/6425;}
                  const tokIdx/6426 : UInt* = res/6414[1];
                  const isFound'/6427 : Bool* = res/6414[0];
                  claim(CT_Assert)(isFound'/6427, Just "Token is tracked");
                  const tokInfo/6428 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/6426];
                  const tokInfo'/6429 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/6428, 0, v6412 );
                  const tokInfos'/6430 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/6426, tokInfo'/6429 );
                  checkPay(amt0/6388, Some paymentToken/3019);
                  switch (.fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})) {
                    case Admin_api_acceptOffer0_126 as .fork126.msg/6431 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                      const loanOffer/6432 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/6431[0];
                      const v6433 : Bool* = this/3421 == Admin/3007;
                      const v6434 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6435 : Bool* = (v6433 ? true : v6434);
                      let v6436 : Null;
                      claim(CT_Require)(v6435, Just "The current user trying to access this interface is not Admin");
                      v6436 : Null = null;
                      const x/6437 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6438 : Bool* = (x/6437 ? false : true);
                      let v6439 : Null;
                      claim(CT_Require)(v6438, Just "An offer has already been accepted");
                      v6439 : Null = null;
                      let v6440 : Null;
                      const v6441 : Bool* = returnExpression/3039.freeze;
                      const v6442 : Bool* = (v6441 ? true : false);
                      let v6443 : Null;
                      claim(CT_Require)(v6442, Just "Contract is frozen");
                      v6443 : Null = null;
                      v6440 : Null = null;
                      const v6444 : UInt* = loanOffer/6432.amount;
                      const v6445 : Address* = loanOffer/6432.borrower;
                      const v6446 : UInt* = loanOffer/6432.offerId;
                      const v6447 : Bool* = loanOffer/6432.rejected;
                      const offerInfo/6448 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v6446];
                      const v6449 : UInt* = dataTag(offerInfo/6448);
                      const v6450 : Bool* = v6449 == 1;
                      let v6451 : Null;
                      claim(CT_Require)(v6450, Just "Offer id doesn't exist");
                      v6451 : Null = null;
                      const _/6452 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/6431[0];
                      const v6453 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = 0,
                        borrower = this/3421,
                        offerId = 0,
                        rejected = false};
                      const data/6454 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = fromSome(offerInfo/6448, v6453 );
                      const v6455 : Null* = null;
                      const .api76.rngl/6456 : Null* = emitLog(api("Admin_api_acceptOffer"))(v6455 );
                      only(Left "Admin_api_acceptOffer") {
                        const v6457 : Address* = selfAddress("Admin_api_acceptOffer", True, 1908 )();
                        let v6458 : Null;
                        const didPublish/6459 : Bool* = didPublish/1821;
                        local(Just v6458 : Null) if didPublish/6459 then {
                          const v6460 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .fork126.msg/6431[0];
                          const v6461 : UInt* = v6460.amount;
                          const v6462 : Address* = v6460.borrower;
                          const v6463 : UInt* = v6460.offerId;
                          const v6464 : Bool* = v6460.rejected;
                          protect<Null>("Admin_api_acceptOffer".interact.out(.fork126.msg/6431, .api76.rngl/6456 ));
                           }
                        else {
                           };
                        v6458 : Null = null;
                         };
                      const v6465 : Null* = null;
                      const v6466 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6467 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6468 : Bool* = returnExpression/3039.continue;
                      const v6469 : Bool* = returnExpression/3039.freeze;
                      const v6470 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6471 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6472 : UInt* = returnExpression/3039.offers;
                      const v6473 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6466,
                        config = v6467,
                        continue = v6468,
                        freeze = v6469,
                        loanTerms = v6470,
                        loanTermsAccepted = true,
                        offers = v6472};
                      const v6474 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6466,
                        config = v6467,
                        continue = v6468,
                        freeze = v6469,
                        loanTerms = v6470,
                        loanTermsAccepted = true,
                        offers = v6472};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6474,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6430,
                        netBalance/3047 : UInt = v6394
                        }
                      continue; }
                    case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as .fork126.msg/6475 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                      const local_config/6476 : UInt* = .fork126.msg/6475[0];
                      const v6477 : Bool* = this/3421 == Admin/3007;
                      const v6478 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6479 : Bool* = (v6477 ? true : v6478);
                      let v6480 : Null;
                      claim(CT_Require)(v6479, Just "The current user trying to access this interface is not Admin");
                      v6480 : Null = null;
                      const x/6481 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6482 : Bool* = (x/6481 ? false : true);
                      let v6483 : Null;
                      claim(CT_Require)(v6482, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                      v6483 : Null = null;
                      let v6484 : Null;
                      const v6485 : Bool* = returnExpression/3039.freeze;
                      const v6486 : Bool* = (v6485 ? true : false);
                      let v6487 : Null;
                      claim(CT_Require)(v6486, Just "Contract is frozen");
                      v6487 : Null = null;
                      v6484 : Null = null;
                      const _/6488 : UInt* = .fork126.msg/6475[0];
                      const v6489 : Null* = null;
                      const .api75.rngl/6490 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v6489 );
                      only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                        const v6491 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                        let v6492 : Null;
                        const didPublish/6493 : Bool* = didPublish/1821;
                        local(Just v6492 : Null) if didPublish/6493 then {
                          const v6494 : UInt* = .fork126.msg/6475[0];
                          protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(.fork126.msg/6475, .api75.rngl/6490 ));
                           }
                        else {
                           };
                        v6492 : Null = null;
                         };
                      const v6495 : Null* = null;
                      const v6496 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6497 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6498 : Bool* = returnExpression/3039.continue;
                      const v6499 : Bool* = returnExpression/3039.freeze;
                      const v6500 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6501 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6502 : UInt* = returnExpression/3039.offers;
                      const v6503 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6496,
                        config = v6497,
                        continue = false,
                        freeze = v6499,
                        loanTerms = v6500,
                        loanTermsAccepted = v6501,
                        offers = v6502};
                      const v6504 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6496,
                        config = v6497,
                        continue = false,
                        freeze = v6499,
                        loanTerms = v6500,
                        loanTermsAccepted = v6501,
                        offers = v6502};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6504,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6430,
                        netBalance/3047 : UInt = v6394
                        }
                      continue; }
                    case Admin_api_freeze0_126 as .fork126.msg/6505 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                      const toggle/6506 : Bool* = .fork126.msg/6505[0];
                      const v6507 : Bool* = this/3421 == Admin/3007;
                      const v6508 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6509 : Bool* = (v6507 ? true : v6508);
                      let v6510 : Null;
                      claim(CT_Require)(v6509, Just "The current user trying to access this interface is not Admin");
                      v6510 : Null = null;
                      const x/6511 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6512 : Bool* = (x/6511 ? false : true);
                      let v6513 : Null;
                      claim(CT_Require)(v6512, Just "Cannot update config after Loan terms accepted");
                      v6513 : Null = null;
                      const v6514 : Bool* = returnExpression/3039.freeze;
                      const v6515 : Bool* = (v6514 ? false : true);
                      const x/6516 : Bool* = (toggle/6506 ? v6514 : v6515);
                      const v6517 : Bool* = (x/6516 ? false : true);
                      let v6518 : Null;
                      claim(CT_Require)(v6517, Just "The action you are trying to perform has already been done");
                      v6518 : Null = null;
                      const _/6519 : Bool* = .fork126.msg/6505[0];
                      const v6520 : Null* = null;
                      const .api73.rngl/6521 : Null* = emitLog(api("Admin_api_freeze"))(v6520 );
                      only(Left "Admin_api_freeze") {
                        const v6522 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                        let v6523 : Null;
                        const didPublish/6524 : Bool* = didPublish/1821;
                        local(Just v6523 : Null) if didPublish/6524 then {
                          const v6525 : Bool* = .fork126.msg/6505[0];
                          protect<Null>("Admin_api_freeze".interact.out(.fork126.msg/6505, .api73.rngl/6521 ));
                           }
                        else {
                           };
                        v6523 : Null = null;
                         };
                      const v6526 : Null* = null;
                      const v6527 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6528 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6529 : Bool* = returnExpression/3039.continue;
                      const v6530 : Bool* = returnExpression/3039.freeze;
                      const v6531 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6532 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6533 : UInt* = returnExpression/3039.offers;
                      const v6534 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6527,
                        config = v6528,
                        continue = v6529,
                        freeze = toggle/6506,
                        loanTerms = v6531,
                        loanTermsAccepted = v6532,
                        offers = v6533};
                      const v6535 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6527,
                        config = v6528,
                        continue = v6529,
                        freeze = toggle/6506,
                        loanTerms = v6531,
                        loanTermsAccepted = v6532,
                        offers = v6533};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6535,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6430,
                        netBalance/3047 : UInt = v6394
                        }
                      continue; }
                    case Admin_api_updateConfig0_126 as .fork126.msg/6536 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                      const local_config/6537 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/6536[0];
                      const v6538 : Bool* = this/3421 == Admin/3007;
                      const v6539 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6540 : Bool* = (v6538 ? true : v6539);
                      let v6541 : Null;
                      claim(CT_Require)(v6540, Just "The current user trying to access this interface is not Admin");
                      v6541 : Null = null;
                      const x/6542 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6543 : Bool* = (x/6542 ? false : true);
                      let v6544 : Null;
                      claim(CT_Require)(v6543, Just "Cannot update config after Loan terms accepted");
                      v6544 : Null = null;
                      const _/6545 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/6536[0];
                      const v6546 : Null* = null;
                      const .api72.rngl/6547 : Null* = emitLog(api("Admin_api_updateConfig"))(v6546 );
                      only(Left "Admin_api_updateConfig") {
                        const v6548 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                        let v6549 : Null;
                        const didPublish/6550 : Bool* = didPublish/1821;
                        local(Just v6549 : Null) if didPublish/6550 then {
                          const v6551 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .fork126.msg/6536[0];
                          const v6552 : Token* = v6551.token;
                          const v6553 : UInt* = v6551.number_of_tokens_to_deposit;
                          const v6554 : Token* = v6551.paymentAsset;
                          const v6555 : Bool* = v6551.shouldPayInOnlyNetworkToken;
                          const v6556 : Bool* = v6551.prefersNetworkToken;
                          protect<Null>("Admin_api_updateConfig".interact.out(.fork126.msg/6536, .api72.rngl/6547 ));
                           }
                        else {
                           };
                        v6549 : Null = null;
                         };
                      const v6557 : Null* = null;
                      const v6558 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6559 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6560 : Bool* = returnExpression/3039.continue;
                      const v6561 : Bool* = returnExpression/3039.freeze;
                      const v6562 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6563 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6564 : UInt* = returnExpression/3039.offers;
                      const v6565 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6558,
                        config = local_config/6537,
                        continue = v6560,
                        freeze = v6561,
                        loanTerms = v6562,
                        loanTermsAccepted = v6563,
                        offers = v6564};
                      const v6566 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6558,
                        config = local_config/6537,
                        continue = v6560,
                        freeze = v6561,
                        loanTerms = v6562,
                        loanTermsAccepted = v6563,
                        offers = v6564};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6566,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6430,
                        netBalance/3047 : UInt = v6394
                        }
                      continue; }
                    case Admin_api_updateLoanTerms_info0_126 as .fork126.msg/6567 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                      const local_config/6568 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/6567[0];
                      const v6569 : Bool* = this/3421 == Admin/3007;
                      const v6570 : Bool* = ADMIN_WALLET/3012 == this/3421;
                      const v6571 : Bool* = (v6569 ? true : v6570);
                      let v6572 : Null;
                      claim(CT_Require)(v6571, Just "The current user trying to access this interface is not Admin");
                      v6572 : Null = null;
                      const x/6573 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6574 : Bool* = (x/6573 ? false : true);
                      let v6575 : Null;
                      claim(CT_Require)(v6574, Just "Cannot update loan terms after Loan terms accepted");
                      v6575 : Null = null;
                      const _/6576 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/6567[0];
                      const v6577 : Null* = null;
                      const .api74.rngl/6578 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v6577 );
                      only(Left "Admin_api_updateLoanTerms_info") {
                        const v6579 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                        let v6580 : Null;
                        const didPublish/6581 : Bool* = didPublish/1821;
                        local(Just v6580 : Null) if didPublish/6581 then {
                          const v6582 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .fork126.msg/6567[0];
                          const v6583 : UInt* = v6582.duration_in_blocks;
                          const v6584 : UInt* = v6582.principle;
                          const v6585 : Token* = v6582.interest;
                          protect<Null>("Admin_api_updateLoanTerms_info".interact.out(.fork126.msg/6567, .api74.rngl/6578 ));
                           }
                        else {
                           };
                        v6580 : Null = null;
                         };
                      const v6586 : Null* = null;
                      const v6587 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6588 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6589 : Bool* = returnExpression/3039.continue;
                      const v6590 : Bool* = returnExpression/3039.freeze;
                      const v6591 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6592 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6593 : UInt* = returnExpression/3039.offers;
                      const v6594 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6587,
                        config = v6588,
                        continue = v6589,
                        freeze = v6590,
                        loanTerms = local_config/6568,
                        loanTermsAccepted = v6592,
                        offers = v6593};
                      const v6595 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6587,
                        config = v6588,
                        continue = v6589,
                        freeze = v6590,
                        loanTerms = local_config/6568,
                        loanTermsAccepted = v6592,
                        offers = v6593};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6595,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6430,
                        netBalance/3047 : UInt = v6394
                        }
                      continue; }
                    case user_acceptLoan0_126 as .fork126.msg/6596 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                      let v6597 : Null;
                      const v6598 : Bool* = returnExpression/3039.freeze;
                      const v6599 : Bool* = (v6598 ? true : false);
                      let v6600 : Null;
                      claim(CT_Require)(v6599, Just "Contract is frozen");
                      v6600 : Null = null;
                      v6597 : Null = null;
                      const acceptedAmount/6601 : UInt* = config_as_object/3008.number_of_tokens_to_deposit;
                      const x/6602 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6603 : Bool* = (x/6602 ? false : true);
                      let v6604 : Null;
                      claim(CT_Require)(v6603, Just "Offer already accepted");
                      v6604 : Null = null;
                      const v6605 : Bool* = config_as_object/3008.prefersNetworkToken;
                      const v6606 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                      const v6607 : Tuple(UInt, Tuple(UInt, Token))* = [acceptedAmount/6601, v6606 ];
                      const v6608 : Tuple(UInt, Token)* = [acceptedAmount/6601, paymentToken/3019 ];
                      const v6609 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6608 ];
                      const transferData/6610 : Tuple(UInt, Tuple(UInt, Token))* = (v6605 ? v6607 : v6609);
                      const v6611 : Null* = null;
                      const .api77.rngl/6612 : Null* = emitLog(api("user_acceptLoan"))(v6611 );
                      only(Left "user_acceptLoan") {
                        const v6613 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                        let v6614 : Null;
                        const didPublish/6615 : Bool* = didPublish/1821;
                        local(Just v6614 : Null) if didPublish/6615 then {
                          protect<Null>("user_acceptLoan".interact.out(.fork126.msg/6596, .api77.rngl/6612 ));
                           }
                        else {
                           };
                        v6614 : Null = null;
                         };
                      const v6616 : Null* = null;
                      const v6617 : UInt* = transferData/6610[0];
                      const v6618 : Tuple(UInt, Token)* = transferData/6610[1];
                      const v6619 : UInt* = v6618[0];
                      const v6620 : Token* = v6618[1];
                      const netBalance/6621 : UInt* = v6394;
                      const v6622 : Bool* = v6617 <= netBalance/6621;
                      claim(CT_Assert)(v6622, Just "balance sufficient for transfer");
                      const netBalance/6623 : UInt* = v6394;
                      const v6624 : UInt* = netBalance/6623 - v6617;
                      transfer.(v6617, None).to(Admin/3007);
                      const initAcc/6625 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/6626 : Tuple(Bool, UInt)* = for (acc/6627 : Tuple(Bool, UInt)* = initAcc/6625; [elem/6628 : Token*],arrIdx/6629 : UInt* in [tokens'/3018]) {
                        const isFound/6630 : Bool* = acc/6627[0];
                        const searchIdx/6631 : UInt* = acc/6627[1];
                        const toksEq/6632 : Bool* = elem/6628 == v6620;
                        const cnd/6633 : Bool* = (isFound/6630 ? true : toksEq/6632);
                        const searchIdx'/6634 : UInt* = searchIdx/6631 + 1;
                        const failAcc/6635 : Tuple(Bool, UInt)* = [false, searchIdx'/6634 ];
                        const succAcc/6636 : Tuple(Bool, UInt)* = [true, searchIdx/6631 ];
                        const bl/6637 : Tuple(Bool, UInt)* = (cnd/6633 ? succAcc/6636 : failAcc/6635);
                        
                        return bl/6637;}
                      const tokIdx/6638 : UInt* = res/6626[1];
                      const isFound'/6639 : Bool* = res/6626[0];
                      claim(CT_Assert)(isFound'/6639, Just "Token is tracked");
                      const tokInfo/6640 : Tuple(UInt, UInt, Bool)* = tokInfos'/6430[tokIdx/6638];
                      const v6641 : UInt* = tokInfo/6640[0];
                      const v6642 : Bool* = v6619 <= v6641;
                      claim(CT_Assert)(v6642, Just "balance sufficient for transfer");
                      const initAcc/6643 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/6644 : Tuple(Bool, UInt)* = for (acc/6645 : Tuple(Bool, UInt)* = initAcc/6643; [elem/6646 : Token*],arrIdx/6647 : UInt* in [tokens'/3018]) {
                        const isFound/6648 : Bool* = acc/6645[0];
                        const searchIdx/6649 : UInt* = acc/6645[1];
                        const toksEq/6650 : Bool* = elem/6646 == v6620;
                        const cnd/6651 : Bool* = (isFound/6648 ? true : toksEq/6650);
                        const searchIdx'/6652 : UInt* = searchIdx/6649 + 1;
                        const failAcc/6653 : Tuple(Bool, UInt)* = [false, searchIdx'/6652 ];
                        const succAcc/6654 : Tuple(Bool, UInt)* = [true, searchIdx/6649 ];
                        const bl/6655 : Tuple(Bool, UInt)* = (cnd/6651 ? succAcc/6654 : failAcc/6653);
                        
                        return bl/6655;}
                      const tokIdx/6656 : UInt* = res/6644[1];
                      const isFound'/6657 : Bool* = res/6644[0];
                      claim(CT_Assert)(isFound'/6657, Just "Token is tracked");
                      const tokInfo/6658 : Tuple(UInt, UInt, Bool)* = tokInfos'/6430[tokIdx/6656];
                      const v6659 : UInt* = tokInfo/6658[0];
                      const v6660 : UInt* = v6659 - v6619;
                      const initAcc/6661 : Tuple(Bool, UInt)* = [false, 0 ];
                      reduce res/6662 : Tuple(Bool, UInt)* = for (acc/6663 : Tuple(Bool, UInt)* = initAcc/6661; [elem/6664 : Token*],arrIdx/6665 : UInt* in [tokens'/3018]) {
                        const isFound/6666 : Bool* = acc/6663[0];
                        const searchIdx/6667 : UInt* = acc/6663[1];
                        const toksEq/6668 : Bool* = elem/6664 == v6620;
                        const cnd/6669 : Bool* = (isFound/6666 ? true : toksEq/6668);
                        const searchIdx'/6670 : UInt* = searchIdx/6667 + 1;
                        const failAcc/6671 : Tuple(Bool, UInt)* = [false, searchIdx'/6670 ];
                        const succAcc/6672 : Tuple(Bool, UInt)* = [true, searchIdx/6667 ];
                        const bl/6673 : Tuple(Bool, UInt)* = (cnd/6669 ? succAcc/6672 : failAcc/6671);
                        
                        return bl/6673;}
                      const tokIdx/6674 : UInt* = res/6662[1];
                      const isFound'/6675 : Bool* = res/6662[0];
                      claim(CT_Assert)(isFound'/6675, Just "Token is tracked");
                      const tokInfo/6676 : Tuple(UInt, UInt, Bool)* = tokInfos'/6430[tokIdx/6674];
                      const tokInfo'/6677 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/6676, 0, v6660 );
                      const tokInfos'/6678 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/6430, tokIdx/6674, tokInfo'/6677 );
                      transfer.(v6619, Some v6620).to(Admin/3007);
                      const v6679 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6680 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6681 : Bool* = returnExpression/3039.continue;
                      const v6682 : Bool* = returnExpression/3039.freeze;
                      const v6683 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6684 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6685 : UInt* = returnExpression/3039.offers;
                      const v6686 : UInt* = returnExpression/3039.offers;
                      const v6687 : UInt* = v6686 + 1;
                      const v6688 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v6689 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6688,
                        config = v6680,
                        continue = v6681,
                        freeze = v6682,
                        loanTerms = v6683,
                        loanTermsAccepted = true,
                        offers = v6687};
                      const v6690 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                      const v6691 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6690,
                        config = v6680,
                        continue = v6681,
                        freeze = v6682,
                        loanTerms = v6683,
                        loanTermsAccepted = true,
                        offers = v6687};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6691,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6678,
                        netBalance/3047 : UInt = v6624
                        }
                      continue; }
                    case user_makeOffer0_126 as .fork126.msg/6692 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                      setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                      const v6693 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/6692[0];
                      const amount/6694 : UInt* = v6693.amount;
                      const shouldPayWithNetworkToken/6695 : Bool* = v6693.shouldPayWithNetworkToken;
                      let v6696 : Null;
                      const v6697 : Bool* = returnExpression/3039.freeze;
                      const v6698 : Bool* = (v6697 ? true : false);
                      let v6699 : Null;
                      claim(CT_Require)(v6698, Just "Contract is frozen");
                      v6699 : Null = null;
                      v6696 : Null = null;
                      const _/6700 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/6692[0];
                      const v6701 : UInt* = returnExpression/3039.offers;
                      const v6702 : UInt* = returnExpression/3039.offers;
                      const v6703 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/6694,
                        borrower = this/3421,
                        offerId = v6702,
                        rejected = false};
                      map0[v6701] = v6703;
                      const v6704 : UInt* = returnExpression/3039.offers;
                      const v6705 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                        amount = amount/6694,
                        borrower = this/3421,
                        offerId = v6704,
                        rejected = false};
                      const .api78.rngl/6706 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v6705 );
                      only(Left "user_makeOffer") {
                        const v6707 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                        let v6708 : Null;
                        const didPublish/6709 : Bool* = didPublish/1821;
                        local(Just v6708 : Null) if didPublish/6709 then {
                          const v6710 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .fork126.msg/6692[0];
                          const v6711 : UInt* = v6710.amount;
                          const v6712 : Bool* = v6710.shouldPayWithNetworkToken;
                          const v6713 : UInt* = .api78.rngl/6706.amount;
                          const v6714 : Address* = .api78.rngl/6706.borrower;
                          const v6715 : UInt* = .api78.rngl/6706.offerId;
                          const v6716 : Bool* = .api78.rngl/6706.rejected;
                          protect<Null>("user_makeOffer".interact.out(.fork126.msg/6692, .api78.rngl/6706 ));
                           }
                        else {
                           };
                        v6708 : Null = null;
                         };
                      const v6717 : Null* = null;
                      const v6718 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                      const v6719 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
                      const v6720 : Bool* = returnExpression/3039.continue;
                      const v6721 : Bool* = returnExpression/3039.freeze;
                      const v6722 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
                      const v6723 : Bool* = returnExpression/3039.loanTermsAccepted;
                      const v6724 : UInt* = returnExpression/3039.offers;
                      const v6725 : UInt* = returnExpression/3039.offers;
                      const v6726 : UInt* = v6725 + 1;
                      const v6727 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6718,
                        config = v6719,
                        continue = v6720,
                        freeze = v6721,
                        loanTerms = v6722,
                        loanTermsAccepted = v6723,
                        offers = v6726};
                      const v6728 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                        acceptedAddress = v6718,
                        config = v6719,
                        continue = v6720,
                        freeze = v6721,
                        loanTerms = v6722,
                        loanTermsAccepted = v6723,
                        offers = v6726};
                      {
                        returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6728,
                        thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                        lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                        baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                        thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                        lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                        baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                        tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6430,
                        netBalance/3047 : UInt = v6394
                        }
                      continue; } } } } }
             }
        const v6729 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
        const v6730 : Token* = v6729.token;
        const v6731 : UInt* = v6729.number_of_tokens_to_deposit;
        const v6732 : Token* = v6729.paymentAsset;
        const v6733 : Bool* = v6729.shouldPayInOnlyNetworkToken;
        const v6734 : Bool* = v6729.prefersNetworkToken;
        view(Just "info").config.is(Just export (Nothing) => {
        return v6729;})
        const v6735 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
        const v6736 : UInt* = v6735.duration_in_blocks;
        const v6737 : UInt* = v6735.principle;
        const v6738 : Token* = v6735.interest;
        view(Just "info").loanTerms.is(Just export (Nothing) => {
        return v6735;})
        view(Just "info").offer.is(Just export (Just [v6739 : UInt*]) => {const v6740 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[res/6739];
        
        return v6740;})
        commit();
        only(Left "Admin") {
           };
        publish(@thisConsensusTime/3040)
          .case("Admin").send({
            isClass = False,
            msg = [],
            pay = [0, ],
            when = true
            })
          .recv({
            didSend = didPublish/2348 : Bool,
            from = Admin/6741 : Address,
            msg = [],
            secs = thisConsensusSecs/6743 : UInt,
            time = thisConsensusTime/6742 : UInt
            }){
            timeOrder(>, Just thisConsensusTime/3040, thisConsensusTime/6742 : UInt);
            timeOrder(>=, Just thisConsensusSecs/3043, thisConsensusSecs/6743 : UInt);
            checkPay(0, None);
            const v6744 : Bool* = Admin/3007 == Admin/6741;
            claim(CT_Require)(v6744, Just "sender correct");
            const netBalance/6745 : UInt* = netBalance/3047;
            const netBalance/6746 : UInt* = netBalance/3047;
            const v6747 : Bool* = netBalance/6745 <= netBalance/6746;
            claim(CT_Assert)(v6747, Just "balance sufficient for transfer");
            const netBalance/6748 : UInt* = netBalance/3047;
            const v6749 : UInt* = netBalance/6748 - netBalance/6745;
            transfer.(netBalance/6745, None).to(Admin/3007);
            const tokInfo/6750 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[0];
            const v6751 : UInt* = tokInfo/6750[0];
            const tokInfo/6752 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[0];
            const v6753 : UInt* = tokInfo/6752[0];
            const v6754 : Bool* = v6751 <= v6753;
            claim(CT_Assert)(v6754, Just "balance sufficient for transfer");
            const tokInfo/6755 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[0];
            const v6756 : UInt* = tokInfo/6755[0];
            const v6757 : UInt* = v6756 - v6751;
            const tokInfo/6758 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[0];
            const tokInfo'/6759 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/6758, 0, v6757 );
            const tokInfos'/6760 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, 0, tokInfo'/6759 );
            transfer.(v6751, Some deposit_nft/3009).to(Admin/3007);
            const netBalance/6761 : UInt* = v6749;
            const v6762 : Bool* = 0 == netBalance/6761;
            claim(CT_Assert)(v6762, Just "balance zero at application exit");
            const tokInfo/6763 : Tuple(UInt, UInt, Bool)* = tokInfos'/6760[0];
            const v6764 : UInt* = tokInfo/6763[0];
            const v6765 : Bool* = 0 == v6764;
            claim(CT_Assert)(v6765, Just "balance zero at application exit");
            commit();
            exit(); }
           }
       }
  