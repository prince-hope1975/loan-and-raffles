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
only(Left "Admin") {
  const v2996 : Address* = selfAddress("Admin", False, 34 )();
  const v2997 : Null* = null;
   };
only(Left "Admin") {
  const v3006 : Object({"number_of_tokens_to_deposit": UInt, "paymentAsset": Token, "prefersNetworkToken": Bool, "shouldPayInOnlyNetworkToken": Bool, "token": Token})* = {
    number_of_tokens_to_deposit = v2989,
    paymentAsset = v2990,
    prefersNetworkToken = v2992,
    shouldPayInOnlyNetworkToken = v2991,
    token = v2988};
   };
publish(@0)
  .case("Admin").send({
    isClass = False,
    msg = [v3006, v2988, v2986, v2987, v2984],
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
        const tokInfo'/3029 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/3025, 0, v3027 );
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
          const v3059 : Bool* = netBalance/3047 == 0;
          
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
            const .api72.dom/3085 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* = protect<Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))>("Admin_api_updateConfig".interact.in());
            const v3086 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = .api72.dom/3085[0];
            const v3087 : Token* = v3086.token;
            const v3088 : UInt* = v3086.number_of_tokens_to_deposit;
            const v3089 : Token* = v3086.paymentAsset;
            const v3090 : Bool* = v3086.shouldPayInOnlyNetworkToken;
            const v3091 : Bool* = v3086.prefersNetworkToken;
            const v3093 : Bool* = this/3083 == Admin/3007;
            const v3094 : Bool* = ADMIN_WALLET/3012 == this/3083;
            const v3095 : Bool* = (v3093 ? true : v3094);
            claim(CT_Assume)(v3095, Just "The current user trying to access this interface is not Admin");
            const v3096 : Null* = null;
            const x/3097 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3098 : Bool* = (x/3097 ? false : true);
            claim(CT_Assume)(v3098, Just "Cannot update config after Loan terms accepted");
            const v3099 : Null* = null;
            const v3101 : Null* = null;
            const v3102 : Object({"msg": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))})* = {
              msg = .api72.dom/3085};
            const v3109 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_updateConfig0_127 null>;
            const v3110 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_updateConfig0_126 .api72.dom/3085>;
            const v3111 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3109,
              msg = v3110,
              when = true};
            const v3084 : Null* = null;
             };
          only(Left "Admin_api_freeze") {
            const this/3112 : Address* = selfAddress("Admin_api_freeze", True, 585 )();
            const .api73.dom/3114 : Tuple(Bool)* = protect<Tuple(Bool)>("Admin_api_freeze".interact.in());
            const v3115 : Bool* = .api73.dom/3114[0];
            const v3117 : Bool* = this/3112 == Admin/3007;
            const v3118 : Bool* = ADMIN_WALLET/3012 == this/3112;
            const v3119 : Bool* = (v3117 ? true : v3118);
            claim(CT_Assume)(v3119, Just "The current user trying to access this interface is not Admin");
            const v3120 : Null* = null;
            const x/3121 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3122 : Bool* = (x/3121 ? false : true);
            claim(CT_Assume)(v3122, Just "Cannot update config after Loan terms accepted");
            const v3123 : Null* = null;
            const v3124 : Bool* = returnExpression/3039.freeze;
            const v3125 : Bool* = (v3124 ? false : true);
            const x/3126 : Bool* = (v3115 ? v3124 : v3125);
            const v3127 : Bool* = (x/3126 ? false : true);
            claim(CT_Assume)(v3127, Just "The action you are trying to perform has already been done");
            const v3128 : Null* = null;
            const v3130 : Null* = null;
            const v3131 : Object({"msg": Tuple(Bool)})* = {
              msg = .api73.dom/3114};
            const v3133 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_freeze0_127 null>;
            const v3134 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_freeze0_126 .api73.dom/3114>;
            const v3135 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3133,
              msg = v3134,
              when = true};
            const v3113 : Null* = null;
             };
          only(Left "Admin_api_updateLoanTerms_info") {
            const this/3136 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 656 )();
            const .api74.dom/3138 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* = protect<Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))>("Admin_api_updateLoanTerms_info".interact.in());
            const v3139 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = .api74.dom/3138[0];
            const v3140 : UInt* = v3139.duration_in_blocks;
            const v3141 : UInt* = v3139.principle;
            const v3142 : Token* = v3139.interest;
            const v3144 : Bool* = this/3136 == Admin/3007;
            const v3145 : Bool* = ADMIN_WALLET/3012 == this/3136;
            const v3146 : Bool* = (v3144 ? true : v3145);
            claim(CT_Assume)(v3146, Just "The current user trying to access this interface is not Admin");
            const v3147 : Null* = null;
            const x/3148 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3149 : Bool* = (x/3148 ? false : true);
            claim(CT_Assume)(v3149, Just "Cannot update loan terms after Loan terms accepted");
            const v3150 : Null* = null;
            const v3152 : Null* = null;
            const v3153 : Object({"msg": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))})* = {
              msg = .api74.dom/3138};
            const v3158 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_updateLoanTerms_info0_127 null>;
            const v3159 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_updateLoanTerms_info0_126 .api74.dom/3138>;
            const v3160 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3158,
              msg = v3159,
              when = true};
            const v3137 : Null* = null;
             };
          only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
            const this/3161 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 713 )();
            const .api75.dom/3163 : Tuple(UInt)* = protect<Tuple(UInt)>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.in());
            const v3164 : UInt* = .api75.dom/3163[0];
            const v3166 : Bool* = this/3161 == Admin/3007;
            const v3167 : Bool* = ADMIN_WALLET/3012 == this/3161;
            const v3168 : Bool* = (v3166 ? true : v3167);
            claim(CT_Assume)(v3168, Just "The current user trying to access this interface is not Admin");
            const v3169 : Null* = null;
            const x/3170 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3171 : Bool* = (x/3170 ? false : true);
            claim(CT_Assume)(v3171, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
            const v3172 : Null* = null;
            const v3174 : Bool* = returnExpression/3039.freeze;
            const v3175 : Bool* = v3174;
            claim(CT_Assume)(v3174, Just "Contract is frozen");
            const v3176 : Null* = null;
            const v3173 : Null* = null;
            const v3178 : Null* = null;
            const v3179 : Object({"msg": Tuple(UInt)})* = {
              msg = .api75.dom/3163};
            const v3181 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_cancelLoanOfferandWithdrawCollateral0_127 null>;
            const v3182 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_cancelLoanOfferandWithdrawCollateral0_126 .api75.dom/3163>;
            const v3183 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3181,
              msg = v3182,
              when = true};
            const v3162 : Null* = null;
             };
          only(Left "Admin_api_acceptOffer") {
            const this/3184 : Address* = selfAddress("Admin_api_acceptOffer", True, 782 )();
            const .api76.dom/3186 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* = protect<Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))>("Admin_api_acceptOffer".interact.in());
            const v3187 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = .api76.dom/3186[0];
            const v3188 : UInt* = v3187.amount;
            const v3189 : Address* = v3187.borrower;
            const v3190 : UInt* = v3187.offerId;
            const v3191 : Bool* = v3187.rejected;
            const v3193 : Bool* = this/3184 == Admin/3007;
            const v3194 : Bool* = ADMIN_WALLET/3012 == this/3184;
            const v3195 : Bool* = (v3193 ? true : v3194);
            claim(CT_Assume)(v3195, Just "The current user trying to access this interface is not Admin");
            const v3196 : Null* = null;
            const x/3197 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3198 : Bool* = (x/3197 ? false : true);
            claim(CT_Assume)(v3198, Just "An offer has already been accepted");
            const v3199 : Null* = null;
            const v3201 : Bool* = returnExpression/3039.freeze;
            const v3202 : Bool* = v3201;
            claim(CT_Assume)(v3201, Just "Contract is frozen");
            const v3203 : Null* = null;
            const v3200 : Null* = null;
            const m/3208 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3190];
            const v3209 : UInt* = dataTag(m/3208);
            const v3210 : Bool* = v3209 == 1;
            claim(CT_Assume)(v3210, Just "Offer id doesn't exist");
            const v3211 : Null* = null;
            const v3213 : Null* = null;
            const v3214 : Object({"msg": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))})* = {
              msg = .api76.dom/3186};
            const v3220 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <Admin_api_acceptOffer0_127 null>;
            const v3221 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <Admin_api_acceptOffer0_126 .api76.dom/3186>;
            const v3222 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3220,
              msg = v3221,
              when = true};
            const v3185 : Null* = null;
             };
          only(Left "user_acceptLoan") {
            const v3223 : Address* = selfAddress("user_acceptLoan", True, 882 )();
            const .api77.dom/3225 : Tuple()* = protect<Tuple()>("user_acceptLoan".interact.in());
            const v3227 : Bool* = returnExpression/3039.freeze;
            const v3228 : Bool* = v3227;
            claim(CT_Assume)(v3227, Just "Contract is frozen");
            const v3229 : Null* = null;
            const v3226 : Null* = null;
            const x/3231 : Bool* = returnExpression/3039.loanTermsAccepted;
            const v3232 : Bool* = (x/3231 ? false : true);
            claim(CT_Assume)(v3232, Just "Offer already accepted");
            const v3233 : Null* = null;
            const v3234 : Bool* = config_as_object/3008.prefersNetworkToken;
            const v3235 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3236 : Tuple(UInt, Tuple(UInt, Token))* = [v3024, v3235 ];
            const v3237 : Tuple(UInt, Token)* = [v3024, paymentToken/3019 ];
            const v3238 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3237 ];
            const transferData/3239 : Tuple(UInt, Tuple(UInt, Token))* = (v3234 ? v3236 : v3238);
            const v3240 : Null* = null;
            const v3241 : Object({"msg": Tuple()})* = {
              msg = .api77.dom/3225};
            const v3242 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <user_acceptLoan0_127 null>;
            const v3243 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <user_acceptLoan0_126 .api77.dom/3225>;
            const v3244 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3242,
              msg = v3243,
              when = true};
            const v3224 : Null* = null;
             };
          only(Left "user_makeOffer") {
            const v3245 : Address* = selfAddress("user_makeOffer", True, 936 )();
            const .api78.dom/3247 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* = protect<Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))>("user_makeOffer".interact.in());
            const v3248 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = .api78.dom/3247[0];
            const v3249 : UInt* = v3248.amount;
            const v3250 : Bool* = v3248.shouldPayWithNetworkToken;
            const v3255 : Bool* = returnExpression/3039.freeze;
            const v3256 : Bool* = v3255;
            claim(CT_Assume)(v3255, Just "Contract is frozen");
            const v3257 : Null* = null;
            const v3254 : Null* = null;
            const v3259 : Null* = null;
            const v3260 : Object({"msg": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = {
              msg = .api78.dom/3247};
            const v3264 : Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null})* = <user_makeOffer0_127 null>;
            const v3265 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})* = <user_makeOffer0_126 .api78.dom/3247>;
            const v3266 : Object({"_local": Data({"Admin_api_acceptOffer0_127": Null, "Admin_api_cancelLoanOfferandWithdrawCollateral0_127": Null, "Admin_api_freeze0_127": Null, "Admin_api_updateConfig0_127": Null, "Admin_api_updateLoanTerms_info0_127": Null, "user_acceptLoan0_127": Null, "user_makeOffer0_127": Null}), "msg": Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}), "when": Bool})* = {
              _local = v3264,
              msg = v3265,
              when = true};
            const v3246 : Null* = null;
             };
          only(Left "Admin_api_acceptOffer") {
            claim(CT_Assume)(v3195, Just "The current user trying to access this interface is not Admin");
            const v3272 : Null* = null;
            claim(CT_Assume)(v3198, Just "An offer has already been accepted");
            const v3275 : Null* = null;
            const v3278 : Bool* = v3201;
            claim(CT_Assume)(v3201, Just "Contract is frozen");
            const v3279 : Null* = null;
            const v3276 : Null* = null;
            claim(CT_Assume)(v3210, Just "Offer id doesn't exist");
            const v3287 : Null* = null;
            const v3288 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3289 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3288 ];
            const v3294 : Bool* = true;
            null;
             };
          only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
            claim(CT_Assume)(v3168, Just "The current user trying to access this interface is not Admin");
            const v3302 : Null* = null;
            claim(CT_Assume)(v3171, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
            const v3305 : Null* = null;
            const v3308 : Bool* = v3174;
            claim(CT_Assume)(v3174, Just "Contract is frozen");
            const v3309 : Null* = null;
            const v3306 : Null* = null;
            const v3310 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3311 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3310 ];
            const v3316 : Bool* = true;
            null;
             };
          only(Left "Admin_api_freeze") {
            claim(CT_Assume)(v3119, Just "The current user trying to access this interface is not Admin");
            const v3324 : Null* = null;
            claim(CT_Assume)(v3122, Just "Cannot update config after Loan terms accepted");
            const v3327 : Null* = null;
            claim(CT_Assume)(v3127, Just "The action you are trying to perform has already been done");
            const v3332 : Null* = null;
            const v3333 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3334 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3333 ];
            const v3339 : Bool* = true;
            null;
             };
          only(Left "Admin_api_updateConfig") {
            claim(CT_Assume)(v3095, Just "The current user trying to access this interface is not Admin");
            const v3347 : Null* = null;
            claim(CT_Assume)(v3098, Just "Cannot update config after Loan terms accepted");
            const v3350 : Null* = null;
            const v3351 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3352 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3351 ];
            const v3357 : Bool* = true;
            null;
             };
          only(Left "Admin_api_updateLoanTerms_info") {
            claim(CT_Assume)(v3146, Just "The current user trying to access this interface is not Admin");
            const v3365 : Null* = null;
            claim(CT_Assume)(v3149, Just "Cannot update loan terms after Loan terms accepted");
            const v3368 : Null* = null;
            const v3369 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3370 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3369 ];
            const v3375 : Bool* = true;
            null;
             };
          only(Left "user_acceptLoan") {
            const v3381 : Bool* = v3227;
            claim(CT_Assume)(v3227, Just "Contract is frozen");
            const v3382 : Null* = null;
            const v3379 : Null* = null;
            claim(CT_Assume)(v3232, Just "Offer already accepted");
            const v3386 : Null* = null;
            const networkTokenPay/3393 : UInt* = transferData/3239[0];
            const v3394 : Tuple(UInt, Token)* = transferData/3239[1];
            const amt0/3395 : UInt* = v3394[0];
            const nntok0/3396 : Token* = v3394[1];
            const v3397 : Bool* = nntok0/3396 == paymentToken/3019;
            claim(CT_Assert)(v3397, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
            const v3398 : Tuple(UInt, Token)* = [amt0/3395, paymentToken/3019 ];
            const v3399 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/3393, v3398 ];
             };
          only(Left "user_makeOffer") {
            const v3406 : Bool* = v3255;
            claim(CT_Assume)(v3255, Just "Contract is frozen");
            const v3407 : Null* = null;
            const v3404 : Null* = null;
            const v3408 : Bool* = config_as_object/3008.prefersNetworkToken;
            const v3409 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
            const v3410 : Tuple(UInt, Tuple(UInt, Token))* = [v3249, v3409 ];
            const v3411 : Tuple(UInt, Token)* = [v3249, paymentToken/3019 ];
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
              msg = [v3221],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_cancelLoanOfferandWithdrawCollateral").send({
              isClass = True,
              msg = [v3182],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_freeze").send({
              isClass = True,
              msg = [v3134],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_updateConfig").send({
              isClass = True,
              msg = [v3110],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("Admin_api_updateLoanTerms_info").send({
              isClass = True,
              msg = [v3159],
              pay = [0, (0, paymentToken/3019 ) ],
              when = true
              })
            .case("user_acceptLoan").send({
              isClass = True,
              msg = [v3243],
              pay = [networkTokenPay/3393, (amt0/3395, paymentToken/3019 ) ],
              when = true
              })
            .case("user_makeOffer").send({
              isClass = True,
              msg = [v3265],
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
                  const v3426 : Null* = null;
                  const v3427 : Null* = null;
                  let v3428 : Tuple(UInt, Tuple(UInt, Token));
                  const data_id/3429 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* = data_id/3425;
                  const loanOffer/3430 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/3425[0];
                  const v3431 : Bool* = this/3421 == Admin/3007;
                  const v3432 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v3433 : Bool* = (v3431 ? true : v3432);
                  claim(CT_Require)(v3433, Just "The current user trying to access this interface is not Admin");
                  const v3434 : Null* = null;
                  const x/3435 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v3436 : Bool* = (x/3435 ? false : true);
                  claim(CT_Require)(v3436, Just "An offer has already been accepted");
                  const v3437 : Null* = null;
                  const v3439 : Bool* = returnExpression/3039.freeze;
                  const v3440 : Bool* = v3439;
                  claim(CT_Require)(v3439, Just "Contract is frozen");
                  const v3441 : Null* = null;
                  const v3438 : Null* = null;
                  const v3442 : UInt* = loanOffer/3430.amount;
                  const v3443 : Address* = loanOffer/3430.borrower;
                  const v3444 : UInt* = loanOffer/3430.offerId;
                  const v3445 : Bool* = loanOffer/3430.rejected;
                  const m/3446 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3444];
                  const v3447 : UInt* = dataTag(m/3446);
                  const v3448 : Bool* = v3447 == 1;
                  claim(CT_Require)(v3448, Just "Offer id doesn't exist");
                  const v3449 : Null* = null;
                  const v3450 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v3451 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3450 ];
                  v3428 : Tuple(UInt, Tuple(UInt, Token)) = v3451;
                  const networkTokenPay/3554 : UInt* = v3428[0];
                  const v3555 : Tuple(UInt, Token)* = v3428[1];
                  const amt0/3556 : UInt* = v3555[0];
                  const nntok0/3557 : Token* = v3555[1];
                  const v3558 : Bool* = nntok0/3557 == paymentToken/3019;
                  claim(CT_Assert)(v3558, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v3559 : Tuple(UInt, Token)* = [amt0/3556, paymentToken/3019 ];
                  const v3560 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/3554, v3559 ];
                  const netBalance/3561 : UInt* = netBalance/3047;
                  const v3562 : UInt* = netBalance/3047 + networkTokenPay/3554;
                  checkPay(networkTokenPay/3554, None);
                  const initAcc/3563 : Tuple(Bool, UInt)* = [false, 0 ];
                  const v6766 : Token* = tokens'/3018[0];
                  const acc/6767 : Tuple(Bool, UInt)* = initAcc/3563;
                  const elem/6768 : Token* = v6766;
                  const arrIdx/6769 : UInt* = 0;
                  const isFound/6770 : Bool* = acc/6767[0];
                  const searchIdx/6771 : UInt* = acc/6767[1];
                  const toksEq/6772 : Bool* = elem/6768 == paymentToken/3019;
                  const cnd/6773 : Bool* = (isFound/6770 ? true : toksEq/6772);
                  const searchIdx'/6774 : UInt* = searchIdx/6771 + 1;
                  const failAcc/6775 : Tuple(Bool, UInt)* = [false, searchIdx'/6774 ];
                  const succAcc/6776 : Tuple(Bool, UInt)* = [true, searchIdx/6771 ];
                  const bl/6777 : Tuple(Bool, UInt)* = (cnd/6773 ? succAcc/6776 : failAcc/6775);
                  const res/3564 : Tuple(Bool, UInt)* = bl/6777;
                  const tokIdx/3576 : UInt* = res/3564[1];
                  const isFound'/3577 : Bool* = res/3564[0];
                  claim(CT_Assert)(isFound'/3577, Just "Token is tracked");
                  const tokInfo/3578 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/3576];
                  const v3579 : UInt* = tokInfo/3578[0];
                  const v3580 : UInt* = v3579 + amt0/3556;
                  const v6778 : Token* = tokens'/3018[0];
                  const acc/6779 : Tuple(Bool, UInt)* = initAcc/3563;
                  const elem/6780 : Token* = v6778;
                  const arrIdx/6781 : UInt* = 0;
                  const isFound/6782 : Bool* = acc/6779[0];
                  const searchIdx/6783 : UInt* = acc/6779[1];
                  const toksEq/6784 : Bool* = elem/6780 == paymentToken/3019;
                  const cnd/6785 : Bool* = (isFound/6782 ? true : toksEq/6784);
                  const searchIdx'/6786 : UInt* = searchIdx/6783 + 1;
                  const failAcc/6787 : Tuple(Bool, UInt)* = [false, searchIdx'/6786 ];
                  const succAcc/6788 : Tuple(Bool, UInt)* = [true, searchIdx/6783 ];
                  const bl/6789 : Tuple(Bool, UInt)* = (cnd/6785 ? succAcc/6788 : failAcc/6787);
                  const res/3582 : Tuple(Bool, UInt)* = bl/6789;
                  const tokIdx/3594 : UInt* = res/3582[1];
                  const isFound'/3595 : Bool* = res/3582[0];
                  claim(CT_Assert)(isFound'/3595, Just "Token is tracked");
                  const tokInfo/3596 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/3594];
                  const tokInfo'/3597 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/3596, 0, v3580 );
                  const tokInfos'/3598 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/3594, tokInfo'/3597 );
                  checkPay(amt0/3556, Some paymentToken/3019);
                  const .fork126.msg/3599 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* = data_id/3425;
                  setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                  const loanOffer/3600 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = data_id/3425[0];
                  const v3601 : Bool* = this/3421 == Admin/3007;
                  const v3602 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v3603 : Bool* = (v3601 ? true : v3602);
                  claim(CT_Require)(v3603, Just "The current user trying to access this interface is not Admin");
                  const v3604 : Null* = null;
                  const x/3605 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v3606 : Bool* = (x/3605 ? false : true);
                  claim(CT_Require)(v3606, Just "An offer has already been accepted");
                  const v3607 : Null* = null;
                  const v3609 : Bool* = returnExpression/3039.freeze;
                  const v3610 : Bool* = v3609;
                  claim(CT_Require)(v3609, Just "Contract is frozen");
                  const v3611 : Null* = null;
                  const v3608 : Null* = null;
                  const v3612 : UInt* = loanOffer/3600.amount;
                  const v3613 : Address* = loanOffer/3600.borrower;
                  const v3614 : UInt* = loanOffer/3600.offerId;
                  const v3615 : Bool* = loanOffer/3600.rejected;
                  const offerInfo/3616 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})* = map0[v3614];
                  const v3617 : UInt* = dataTag(offerInfo/3616);
                  const v3618 : Bool* = v3617 == 1;
                  claim(CT_Require)(v3618, Just "Offer id doesn't exist");
                  const v3619 : Null* = null;
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
                    const didPublish/3627 : Bool* = didPublish/1821;
                    local(Just v3626 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_acceptOffer".interact.out(data_id/3425, .api76.rngl/3624 ));
                       }
                    else {
                       };
                    const v3626 : Null* = null;
                     };
                  const v3633 : Null* = null;
                  const v3634 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                  const v3636 : Bool* = returnExpression/3039.continue;
                  const v3640 : UInt* = returnExpression/3039.offers;
                  const v3641 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                    acceptedAddress = v3634,
                    config = v3071,
                    continue = v3636,
                    freeze = v3609,
                    loanTerms = v3077,
                    loanTermsAccepted = true,
                    offers = v3640};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v3641,
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
                case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/3897 : Tuple(UInt)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v3898 : Null* = null;
                  const v3899 : Null* = null;
                  let v3900 : Tuple(UInt, Tuple(UInt, Token));
                  const data_id/3928 : Tuple(UInt)* = data_id/3897;
                  const local_config/3929 : UInt* = data_id/3897[0];
                  const v3930 : Bool* = this/3421 == Admin/3007;
                  const v3931 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v3932 : Bool* = (v3930 ? true : v3931);
                  claim(CT_Require)(v3932, Just "The current user trying to access this interface is not Admin");
                  const v3933 : Null* = null;
                  const x/3934 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v3935 : Bool* = (x/3934 ? false : true);
                  claim(CT_Require)(v3935, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                  const v3936 : Null* = null;
                  const v3938 : Bool* = returnExpression/3039.freeze;
                  const v3939 : Bool* = v3938;
                  claim(CT_Require)(v3938, Just "Contract is frozen");
                  const v3940 : Null* = null;
                  const v3937 : Null* = null;
                  const v3941 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v3942 : Tuple(UInt, Tuple(UInt, Token))* = [0, v3941 ];
                  v3900 : Tuple(UInt, Tuple(UInt, Token)) = v3942;
                  const networkTokenPay/4026 : UInt* = v3900[0];
                  const v4027 : Tuple(UInt, Token)* = v3900[1];
                  const amt0/4028 : UInt* = v4027[0];
                  const nntok0/4029 : Token* = v4027[1];
                  const v4030 : Bool* = nntok0/4029 == paymentToken/3019;
                  claim(CT_Assert)(v4030, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v4031 : Tuple(UInt, Token)* = [amt0/4028, paymentToken/3019 ];
                  const v4032 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/4026, v4031 ];
                  const netBalance/4033 : UInt* = netBalance/3047;
                  const v4034 : UInt* = netBalance/3047 + networkTokenPay/4026;
                  checkPay(networkTokenPay/4026, None);
                  const initAcc/4035 : Tuple(Bool, UInt)* = [false, 0 ];
                  const v6790 : Token* = tokens'/3018[0];
                  const acc/6791 : Tuple(Bool, UInt)* = initAcc/4035;
                  const elem/6792 : Token* = v6790;
                  const arrIdx/6793 : UInt* = 0;
                  const isFound/6794 : Bool* = acc/6791[0];
                  const searchIdx/6795 : UInt* = acc/6791[1];
                  const toksEq/6796 : Bool* = elem/6792 == paymentToken/3019;
                  const cnd/6797 : Bool* = (isFound/6794 ? true : toksEq/6796);
                  const searchIdx'/6798 : UInt* = searchIdx/6795 + 1;
                  const failAcc/6799 : Tuple(Bool, UInt)* = [false, searchIdx'/6798 ];
                  const succAcc/6800 : Tuple(Bool, UInt)* = [true, searchIdx/6795 ];
                  const bl/6801 : Tuple(Bool, UInt)* = (cnd/6797 ? succAcc/6800 : failAcc/6799);
                  const res/4036 : Tuple(Bool, UInt)* = bl/6801;
                  const tokIdx/4048 : UInt* = res/4036[1];
                  const isFound'/4049 : Bool* = res/4036[0];
                  claim(CT_Assert)(isFound'/4049, Just "Token is tracked");
                  const tokInfo/4050 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4048];
                  const v4051 : UInt* = tokInfo/4050[0];
                  const v4052 : UInt* = v4051 + amt0/4028;
                  const v6802 : Token* = tokens'/3018[0];
                  const acc/6803 : Tuple(Bool, UInt)* = initAcc/4035;
                  const elem/6804 : Token* = v6802;
                  const arrIdx/6805 : UInt* = 0;
                  const isFound/6806 : Bool* = acc/6803[0];
                  const searchIdx/6807 : UInt* = acc/6803[1];
                  const toksEq/6808 : Bool* = elem/6804 == paymentToken/3019;
                  const cnd/6809 : Bool* = (isFound/6806 ? true : toksEq/6808);
                  const searchIdx'/6810 : UInt* = searchIdx/6807 + 1;
                  const failAcc/6811 : Tuple(Bool, UInt)* = [false, searchIdx'/6810 ];
                  const succAcc/6812 : Tuple(Bool, UInt)* = [true, searchIdx/6807 ];
                  const bl/6813 : Tuple(Bool, UInt)* = (cnd/6809 ? succAcc/6812 : failAcc/6811);
                  const res/4054 : Tuple(Bool, UInt)* = bl/6813;
                  const tokIdx/4066 : UInt* = res/4054[1];
                  const isFound'/4067 : Bool* = res/4054[0];
                  claim(CT_Assert)(isFound'/4067, Just "Token is tracked");
                  const tokInfo/4068 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4066];
                  const tokInfo'/4069 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/4068, 0, v4052 );
                  const tokInfos'/4070 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/4066, tokInfo'/4069 );
                  checkPay(amt0/4028, Some paymentToken/3019);
                  const .fork126.msg/4115 : Tuple(UInt)* = data_id/3897;
                  setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                  const local_config/4116 : UInt* = data_id/3897[0];
                  const v4117 : Bool* = this/3421 == Admin/3007;
                  const v4118 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v4119 : Bool* = (v4117 ? true : v4118);
                  claim(CT_Require)(v4119, Just "The current user trying to access this interface is not Admin");
                  const v4120 : Null* = null;
                  const x/4121 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v4122 : Bool* = (x/4121 ? false : true);
                  claim(CT_Require)(v4122, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                  const v4123 : Null* = null;
                  const v4125 : Bool* = returnExpression/3039.freeze;
                  const v4126 : Bool* = v4125;
                  claim(CT_Require)(v4125, Just "Contract is frozen");
                  const v4127 : Null* = null;
                  const v4124 : Null* = null;
                  const v4129 : Null* = null;
                  const .api75.rngl/4130 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v4129 );
                  only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                    const v4131 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 1987 )();
                    const didPublish/4133 : Bool* = didPublish/1821;
                    local(Just v4132 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(data_id/3897, .api75.rngl/4130 ));
                       }
                    else {
                       };
                    const v4132 : Null* = null;
                     };
                  const v4135 : Null* = null;
                  const v4136 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                  const v4138 : Bool* = returnExpression/3039.continue;
                  const v4142 : UInt* = returnExpression/3039.offers;
                  const v4143 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                    acceptedAddress = v4136,
                    config = v3071,
                    continue = false,
                    freeze = v4125,
                    loanTerms = v3077,
                    loanTermsAccepted = x/4121,
                    offers = v4142};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4143,
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
                case Admin_api_freeze0_126 as data_id/4369 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v4370 : Null* = null;
                  const v4371 : Null* = null;
                  let v4372 : Tuple(UInt, Tuple(UInt, Token));
                  const data_id/4419 : Tuple(Bool)* = data_id/4369;
                  const toggle/4420 : Bool* = data_id/4369[0];
                  const v4421 : Bool* = this/3421 == Admin/3007;
                  const v4422 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v4423 : Bool* = (v4421 ? true : v4422);
                  claim(CT_Require)(v4423, Just "The current user trying to access this interface is not Admin");
                  const v4424 : Null* = null;
                  const x/4425 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v4426 : Bool* = (x/4425 ? false : true);
                  claim(CT_Require)(v4426, Just "Cannot update config after Loan terms accepted");
                  const v4427 : Null* = null;
                  const v4428 : Bool* = returnExpression/3039.freeze;
                  const v4429 : Bool* = (v4428 ? false : true);
                  const x/4430 : Bool* = (toggle/4420 ? v4428 : v4429);
                  const v4431 : Bool* = (x/4430 ? false : true);
                  claim(CT_Require)(v4431, Just "The action you are trying to perform has already been done");
                  const v4432 : Null* = null;
                  const v4433 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v4434 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4433 ];
                  v4372 : Tuple(UInt, Tuple(UInt, Token)) = v4434;
                  const networkTokenPay/4498 : UInt* = v4372[0];
                  const v4499 : Tuple(UInt, Token)* = v4372[1];
                  const amt0/4500 : UInt* = v4499[0];
                  const nntok0/4501 : Token* = v4499[1];
                  const v4502 : Bool* = nntok0/4501 == paymentToken/3019;
                  claim(CT_Assert)(v4502, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v4503 : Tuple(UInt, Token)* = [amt0/4500, paymentToken/3019 ];
                  const v4504 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/4498, v4503 ];
                  const netBalance/4505 : UInt* = netBalance/3047;
                  const v4506 : UInt* = netBalance/3047 + networkTokenPay/4498;
                  checkPay(networkTokenPay/4498, None);
                  const initAcc/4507 : Tuple(Bool, UInt)* = [false, 0 ];
                  const v6814 : Token* = tokens'/3018[0];
                  const acc/6815 : Tuple(Bool, UInt)* = initAcc/4507;
                  const elem/6816 : Token* = v6814;
                  const arrIdx/6817 : UInt* = 0;
                  const isFound/6818 : Bool* = acc/6815[0];
                  const searchIdx/6819 : UInt* = acc/6815[1];
                  const toksEq/6820 : Bool* = elem/6816 == paymentToken/3019;
                  const cnd/6821 : Bool* = (isFound/6818 ? true : toksEq/6820);
                  const searchIdx'/6822 : UInt* = searchIdx/6819 + 1;
                  const failAcc/6823 : Tuple(Bool, UInt)* = [false, searchIdx'/6822 ];
                  const succAcc/6824 : Tuple(Bool, UInt)* = [true, searchIdx/6819 ];
                  const bl/6825 : Tuple(Bool, UInt)* = (cnd/6821 ? succAcc/6824 : failAcc/6823);
                  const res/4508 : Tuple(Bool, UInt)* = bl/6825;
                  const tokIdx/4520 : UInt* = res/4508[1];
                  const isFound'/4521 : Bool* = res/4508[0];
                  claim(CT_Assert)(isFound'/4521, Just "Token is tracked");
                  const tokInfo/4522 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4520];
                  const v4523 : UInt* = tokInfo/4522[0];
                  const v4524 : UInt* = v4523 + amt0/4500;
                  const v6826 : Token* = tokens'/3018[0];
                  const acc/6827 : Tuple(Bool, UInt)* = initAcc/4507;
                  const elem/6828 : Token* = v6826;
                  const arrIdx/6829 : UInt* = 0;
                  const isFound/6830 : Bool* = acc/6827[0];
                  const searchIdx/6831 : UInt* = acc/6827[1];
                  const toksEq/6832 : Bool* = elem/6828 == paymentToken/3019;
                  const cnd/6833 : Bool* = (isFound/6830 ? true : toksEq/6832);
                  const searchIdx'/6834 : UInt* = searchIdx/6831 + 1;
                  const failAcc/6835 : Tuple(Bool, UInt)* = [false, searchIdx'/6834 ];
                  const succAcc/6836 : Tuple(Bool, UInt)* = [true, searchIdx/6831 ];
                  const bl/6837 : Tuple(Bool, UInt)* = (cnd/6833 ? succAcc/6836 : failAcc/6835);
                  const res/4526 : Tuple(Bool, UInt)* = bl/6837;
                  const tokIdx/4538 : UInt* = res/4526[1];
                  const isFound'/4539 : Bool* = res/4526[0];
                  claim(CT_Assert)(isFound'/4539, Just "Token is tracked");
                  const tokInfo/4540 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4538];
                  const tokInfo'/4541 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/4540, 0, v4524 );
                  const tokInfos'/4542 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/4538, tokInfo'/4541 );
                  checkPay(amt0/4500, Some paymentToken/3019);
                  const .fork126.msg/4617 : Tuple(Bool)* = data_id/4369;
                  setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                  const toggle/4618 : Bool* = data_id/4369[0];
                  const v4619 : Bool* = this/3421 == Admin/3007;
                  const v4620 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v4621 : Bool* = (v4619 ? true : v4620);
                  claim(CT_Require)(v4621, Just "The current user trying to access this interface is not Admin");
                  const v4622 : Null* = null;
                  const x/4623 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v4624 : Bool* = (x/4623 ? false : true);
                  claim(CT_Require)(v4624, Just "Cannot update config after Loan terms accepted");
                  const v4625 : Null* = null;
                  const v4626 : Bool* = returnExpression/3039.freeze;
                  const v4627 : Bool* = (v4626 ? false : true);
                  const x/4628 : Bool* = (toggle/4618 ? v4626 : v4627);
                  const v4629 : Bool* = (x/4628 ? false : true);
                  claim(CT_Require)(v4629, Just "The action you are trying to perform has already been done");
                  const v4630 : Null* = null;
                  const v4632 : Null* = null;
                  const .api73.rngl/4633 : Null* = emitLog(api("Admin_api_freeze"))(v4632 );
                  only(Left "Admin_api_freeze") {
                    const v4634 : Address* = selfAddress("Admin_api_freeze", True, 2064 )();
                    const didPublish/4636 : Bool* = didPublish/1821;
                    local(Just v4635 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_freeze".interact.out(data_id/4369, .api73.rngl/4633 ));
                       }
                    else {
                       };
                    const v4635 : Null* = null;
                     };
                  const v4638 : Null* = null;
                  const v4639 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                  const v4641 : Bool* = returnExpression/3039.continue;
                  const v4645 : UInt* = returnExpression/3039.offers;
                  const v4646 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                    acceptedAddress = v4639,
                    config = v3071,
                    continue = v4641,
                    freeze = toggle/4618,
                    loanTerms = v3077,
                    loanTermsAccepted = x/4623,
                    offers = v4645};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4646,
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
                case Admin_api_updateConfig0_126 as data_id/4841 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v4842 : Null* = null;
                  const v4843 : Null* = null;
                  let v4844 : Tuple(UInt, Tuple(UInt, Token));
                  const data_id/4911 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* = data_id/4841;
                  const local_config/4912 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/4841[0];
                  const v4913 : Bool* = this/3421 == Admin/3007;
                  const v4914 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v4915 : Bool* = (v4913 ? true : v4914);
                  claim(CT_Require)(v4915, Just "The current user trying to access this interface is not Admin");
                  const v4916 : Null* = null;
                  const x/4917 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v4918 : Bool* = (x/4917 ? false : true);
                  claim(CT_Require)(v4918, Just "Cannot update config after Loan terms accepted");
                  const v4919 : Null* = null;
                  const v4920 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v4921 : Tuple(UInt, Tuple(UInt, Token))* = [0, v4920 ];
                  v4844 : Tuple(UInt, Tuple(UInt, Token)) = v4921;
                  const networkTokenPay/4970 : UInt* = v4844[0];
                  const v4971 : Tuple(UInt, Token)* = v4844[1];
                  const amt0/4972 : UInt* = v4971[0];
                  const nntok0/4973 : Token* = v4971[1];
                  const v4974 : Bool* = nntok0/4973 == paymentToken/3019;
                  claim(CT_Assert)(v4974, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v4975 : Tuple(UInt, Token)* = [amt0/4972, paymentToken/3019 ];
                  const v4976 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/4970, v4975 ];
                  const netBalance/4977 : UInt* = netBalance/3047;
                  const v4978 : UInt* = netBalance/3047 + networkTokenPay/4970;
                  checkPay(networkTokenPay/4970, None);
                  const initAcc/4979 : Tuple(Bool, UInt)* = [false, 0 ];
                  const v6838 : Token* = tokens'/3018[0];
                  const acc/6839 : Tuple(Bool, UInt)* = initAcc/4979;
                  const elem/6840 : Token* = v6838;
                  const arrIdx/6841 : UInt* = 0;
                  const isFound/6842 : Bool* = acc/6839[0];
                  const searchIdx/6843 : UInt* = acc/6839[1];
                  const toksEq/6844 : Bool* = elem/6840 == paymentToken/3019;
                  const cnd/6845 : Bool* = (isFound/6842 ? true : toksEq/6844);
                  const searchIdx'/6846 : UInt* = searchIdx/6843 + 1;
                  const failAcc/6847 : Tuple(Bool, UInt)* = [false, searchIdx'/6846 ];
                  const succAcc/6848 : Tuple(Bool, UInt)* = [true, searchIdx/6843 ];
                  const bl/6849 : Tuple(Bool, UInt)* = (cnd/6845 ? succAcc/6848 : failAcc/6847);
                  const res/4980 : Tuple(Bool, UInt)* = bl/6849;
                  const tokIdx/4992 : UInt* = res/4980[1];
                  const isFound'/4993 : Bool* = res/4980[0];
                  claim(CT_Assert)(isFound'/4993, Just "Token is tracked");
                  const tokInfo/4994 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/4992];
                  const v4995 : UInt* = tokInfo/4994[0];
                  const v4996 : UInt* = v4995 + amt0/4972;
                  const v6850 : Token* = tokens'/3018[0];
                  const acc/6851 : Tuple(Bool, UInt)* = initAcc/4979;
                  const elem/6852 : Token* = v6850;
                  const arrIdx/6853 : UInt* = 0;
                  const isFound/6854 : Bool* = acc/6851[0];
                  const searchIdx/6855 : UInt* = acc/6851[1];
                  const toksEq/6856 : Bool* = elem/6852 == paymentToken/3019;
                  const cnd/6857 : Bool* = (isFound/6854 ? true : toksEq/6856);
                  const searchIdx'/6858 : UInt* = searchIdx/6855 + 1;
                  const failAcc/6859 : Tuple(Bool, UInt)* = [false, searchIdx'/6858 ];
                  const succAcc/6860 : Tuple(Bool, UInt)* = [true, searchIdx/6855 ];
                  const bl/6861 : Tuple(Bool, UInt)* = (cnd/6857 ? succAcc/6860 : failAcc/6859);
                  const res/4998 : Tuple(Bool, UInt)* = bl/6861;
                  const tokIdx/5010 : UInt* = res/4998[1];
                  const isFound'/5011 : Bool* = res/4998[0];
                  claim(CT_Assert)(isFound'/5011, Just "Token is tracked");
                  const tokInfo/5012 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5010];
                  const tokInfo'/5013 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5012, 0, v4996 );
                  const tokInfos'/5014 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/5010, tokInfo'/5013 );
                  checkPay(amt0/4972, Some paymentToken/3019);
                  const .fork126.msg/5120 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* = data_id/4841;
                  setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                  const local_config/5121 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = data_id/4841[0];
                  const v5122 : Bool* = this/3421 == Admin/3007;
                  const v5123 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v5124 : Bool* = (v5122 ? true : v5123);
                  claim(CT_Require)(v5124, Just "The current user trying to access this interface is not Admin");
                  const v5125 : Null* = null;
                  const x/5126 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v5127 : Bool* = (x/5126 ? false : true);
                  claim(CT_Require)(v5127, Just "Cannot update config after Loan terms accepted");
                  const v5128 : Null* = null;
                  const v5130 : Null* = null;
                  const .api72.rngl/5131 : Null* = emitLog(api("Admin_api_updateConfig"))(v5130 );
                  only(Left "Admin_api_updateConfig") {
                    const v5132 : Address* = selfAddress("Admin_api_updateConfig", True, 2121 )();
                    const didPublish/5134 : Bool* = didPublish/1821;
                    local(Just v5133 : Null) if didPublish/1821 then {
                      const v5136 : Token* = local_config/5121.token;
                      const v5137 : UInt* = local_config/5121.number_of_tokens_to_deposit;
                      const v5138 : Token* = local_config/5121.paymentAsset;
                      const v5139 : Bool* = local_config/5121.shouldPayInOnlyNetworkToken;
                      const v5140 : Bool* = local_config/5121.prefersNetworkToken;
                      protect<Null>("Admin_api_updateConfig".interact.out(data_id/4841, .api72.rngl/5131 ));
                       }
                    else {
                       };
                    const v5133 : Null* = null;
                     };
                  const v5141 : Null* = null;
                  const v5142 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                  const v5144 : Bool* = returnExpression/3039.continue;
                  const v5145 : Bool* = returnExpression/3039.freeze;
                  const v5148 : UInt* = returnExpression/3039.offers;
                  const v5149 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                    acceptedAddress = v5142,
                    config = local_config/5121,
                    continue = v5144,
                    freeze = v5145,
                    loanTerms = v3077,
                    loanTermsAccepted = x/5126,
                    offers = v5148};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5149,
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
                case Admin_api_updateLoanTerms_info0_126 as data_id/5313 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v5314 : Null* = null;
                  const v5315 : Null* = null;
                  let v5316 : Tuple(UInt, Tuple(UInt, Token));
                  const data_id/5398 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* = data_id/5313;
                  const local_config/5399 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/5313[0];
                  const v5400 : Bool* = this/3421 == Admin/3007;
                  const v5401 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v5402 : Bool* = (v5400 ? true : v5401);
                  claim(CT_Require)(v5402, Just "The current user trying to access this interface is not Admin");
                  const v5403 : Null* = null;
                  const x/5404 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v5405 : Bool* = (x/5404 ? false : true);
                  claim(CT_Require)(v5405, Just "Cannot update loan terms after Loan terms accepted");
                  const v5406 : Null* = null;
                  const v5407 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v5408 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5407 ];
                  v5316 : Tuple(UInt, Tuple(UInt, Token)) = v5408;
                  const networkTokenPay/5442 : UInt* = v5316[0];
                  const v5443 : Tuple(UInt, Token)* = v5316[1];
                  const amt0/5444 : UInt* = v5443[0];
                  const nntok0/5445 : Token* = v5443[1];
                  const v5446 : Bool* = nntok0/5445 == paymentToken/3019;
                  claim(CT_Assert)(v5446, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v5447 : Tuple(UInt, Token)* = [amt0/5444, paymentToken/3019 ];
                  const v5448 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/5442, v5447 ];
                  const netBalance/5449 : UInt* = netBalance/3047;
                  const v5450 : UInt* = netBalance/3047 + networkTokenPay/5442;
                  checkPay(networkTokenPay/5442, None);
                  const initAcc/5451 : Tuple(Bool, UInt)* = [false, 0 ];
                  const v6862 : Token* = tokens'/3018[0];
                  const acc/6863 : Tuple(Bool, UInt)* = initAcc/5451;
                  const elem/6864 : Token* = v6862;
                  const arrIdx/6865 : UInt* = 0;
                  const isFound/6866 : Bool* = acc/6863[0];
                  const searchIdx/6867 : UInt* = acc/6863[1];
                  const toksEq/6868 : Bool* = elem/6864 == paymentToken/3019;
                  const cnd/6869 : Bool* = (isFound/6866 ? true : toksEq/6868);
                  const searchIdx'/6870 : UInt* = searchIdx/6867 + 1;
                  const failAcc/6871 : Tuple(Bool, UInt)* = [false, searchIdx'/6870 ];
                  const succAcc/6872 : Tuple(Bool, UInt)* = [true, searchIdx/6867 ];
                  const bl/6873 : Tuple(Bool, UInt)* = (cnd/6869 ? succAcc/6872 : failAcc/6871);
                  const res/5452 : Tuple(Bool, UInt)* = bl/6873;
                  const tokIdx/5464 : UInt* = res/5452[1];
                  const isFound'/5465 : Bool* = res/5452[0];
                  claim(CT_Assert)(isFound'/5465, Just "Token is tracked");
                  const tokInfo/5466 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5464];
                  const v5467 : UInt* = tokInfo/5466[0];
                  const v5468 : UInt* = v5467 + amt0/5444;
                  const v6874 : Token* = tokens'/3018[0];
                  const acc/6875 : Tuple(Bool, UInt)* = initAcc/5451;
                  const elem/6876 : Token* = v6874;
                  const arrIdx/6877 : UInt* = 0;
                  const isFound/6878 : Bool* = acc/6875[0];
                  const searchIdx/6879 : UInt* = acc/6875[1];
                  const toksEq/6880 : Bool* = elem/6876 == paymentToken/3019;
                  const cnd/6881 : Bool* = (isFound/6878 ? true : toksEq/6880);
                  const searchIdx'/6882 : UInt* = searchIdx/6879 + 1;
                  const failAcc/6883 : Tuple(Bool, UInt)* = [false, searchIdx'/6882 ];
                  const succAcc/6884 : Tuple(Bool, UInt)* = [true, searchIdx/6879 ];
                  const bl/6885 : Tuple(Bool, UInt)* = (cnd/6881 ? succAcc/6884 : failAcc/6883);
                  const res/5470 : Tuple(Bool, UInt)* = bl/6885;
                  const tokIdx/5482 : UInt* = res/5470[1];
                  const isFound'/5483 : Bool* = res/5470[0];
                  claim(CT_Assert)(isFound'/5483, Just "Token is tracked");
                  const tokInfo/5484 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5482];
                  const tokInfo'/5485 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5484, 0, v5468 );
                  const tokInfos'/5486 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/5482, tokInfo'/5485 );
                  checkPay(amt0/5444, Some paymentToken/3019);
                  const .fork126.msg/5623 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* = data_id/5313;
                  setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                  const local_config/5624 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = data_id/5313[0];
                  const v5625 : Bool* = this/3421 == Admin/3007;
                  const v5626 : Bool* = ADMIN_WALLET/3012 == this/3421;
                  const v5627 : Bool* = (v5625 ? true : v5626);
                  claim(CT_Require)(v5627, Just "The current user trying to access this interface is not Admin");
                  const v5628 : Null* = null;
                  const x/5629 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v5630 : Bool* = (x/5629 ? false : true);
                  claim(CT_Require)(v5630, Just "Cannot update loan terms after Loan terms accepted");
                  const v5631 : Null* = null;
                  const v5633 : Null* = null;
                  const .api74.rngl/5634 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v5633 );
                  only(Left "Admin_api_updateLoanTerms_info") {
                    const v5635 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 2183 )();
                    const didPublish/5637 : Bool* = didPublish/1821;
                    local(Just v5636 : Null) if didPublish/1821 then {
                      const v5639 : UInt* = local_config/5624.duration_in_blocks;
                      const v5640 : UInt* = local_config/5624.principle;
                      const v5641 : Token* = local_config/5624.interest;
                      protect<Null>("Admin_api_updateLoanTerms_info".interact.out(data_id/5313, .api74.rngl/5634 ));
                       }
                    else {
                       };
                    const v5636 : Null* = null;
                     };
                  const v5642 : Null* = null;
                  const v5643 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                  const v5645 : Bool* = returnExpression/3039.continue;
                  const v5646 : Bool* = returnExpression/3039.freeze;
                  const v5649 : UInt* = returnExpression/3039.offers;
                  const v5650 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                    acceptedAddress = v5643,
                    config = v3071,
                    continue = v5645,
                    freeze = v5646,
                    loanTerms = local_config/5624,
                    loanTermsAccepted = x/5629,
                    offers = v5649};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5650,
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
                case user_acceptLoan0_126 as data_id/5785 : Tuple()* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v5786 : Null* = null;
                  const v5787 : Null* = null;
                  let v5788 : Tuple(UInt, Tuple(UInt, Token));
                  const data_id/5885 : Tuple()* = data_id/5785;
                  const v5887 : Bool* = returnExpression/3039.freeze;
                  const v5888 : Bool* = v5887;
                  claim(CT_Require)(v5887, Just "Contract is frozen");
                  const v5889 : Null* = null;
                  const v5886 : Null* = null;
                  const x/5891 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v5892 : Bool* = (x/5891 ? false : true);
                  claim(CT_Require)(v5892, Just "Offer already accepted");
                  const v5893 : Null* = null;
                  const v5894 : Bool* = config_as_object/3008.prefersNetworkToken;
                  const v5895 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v5896 : Tuple(UInt, Tuple(UInt, Token))* = [v3024, v5895 ];
                  const v5897 : Tuple(UInt, Token)* = [v3024, paymentToken/3019 ];
                  const v5898 : Tuple(UInt, Tuple(UInt, Token))* = [0, v5897 ];
                  const transferData/5899 : Tuple(UInt, Tuple(UInt, Token))* = (v5894 ? v5896 : v5898);
                  v5788 : Tuple(UInt, Tuple(UInt, Token)) = transferData/5899;
                  const networkTokenPay/5914 : UInt* = v5788[0];
                  const v5915 : Tuple(UInt, Token)* = v5788[1];
                  const amt0/5916 : UInt* = v5915[0];
                  const nntok0/5917 : Token* = v5915[1];
                  const v5918 : Bool* = nntok0/5917 == paymentToken/3019;
                  claim(CT_Assert)(v5918, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v5919 : Tuple(UInt, Token)* = [amt0/5916, paymentToken/3019 ];
                  const v5920 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/5914, v5919 ];
                  const netBalance/5921 : UInt* = netBalance/3047;
                  const v5922 : UInt* = netBalance/3047 + networkTokenPay/5914;
                  checkPay(networkTokenPay/5914, None);
                  const initAcc/5923 : Tuple(Bool, UInt)* = [false, 0 ];
                  const v6886 : Token* = tokens'/3018[0];
                  const acc/6887 : Tuple(Bool, UInt)* = initAcc/5923;
                  const elem/6888 : Token* = v6886;
                  const arrIdx/6889 : UInt* = 0;
                  const isFound/6890 : Bool* = acc/6887[0];
                  const searchIdx/6891 : UInt* = acc/6887[1];
                  const toksEq/6892 : Bool* = elem/6888 == paymentToken/3019;
                  const cnd/6893 : Bool* = (isFound/6890 ? true : toksEq/6892);
                  const searchIdx'/6894 : UInt* = searchIdx/6891 + 1;
                  const failAcc/6895 : Tuple(Bool, UInt)* = [false, searchIdx'/6894 ];
                  const succAcc/6896 : Tuple(Bool, UInt)* = [true, searchIdx/6891 ];
                  const bl/6897 : Tuple(Bool, UInt)* = (cnd/6893 ? succAcc/6896 : failAcc/6895);
                  const res/5924 : Tuple(Bool, UInt)* = bl/6897;
                  const tokIdx/5936 : UInt* = res/5924[1];
                  const isFound'/5937 : Bool* = res/5924[0];
                  claim(CT_Assert)(isFound'/5937, Just "Token is tracked");
                  const tokInfo/5938 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5936];
                  const v5939 : UInt* = tokInfo/5938[0];
                  const v5940 : UInt* = v5939 + amt0/5916;
                  const v6898 : Token* = tokens'/3018[0];
                  const acc/6899 : Tuple(Bool, UInt)* = initAcc/5923;
                  const elem/6900 : Token* = v6898;
                  const arrIdx/6901 : UInt* = 0;
                  const isFound/6902 : Bool* = acc/6899[0];
                  const searchIdx/6903 : UInt* = acc/6899[1];
                  const toksEq/6904 : Bool* = elem/6900 == paymentToken/3019;
                  const cnd/6905 : Bool* = (isFound/6902 ? true : toksEq/6904);
                  const searchIdx'/6906 : UInt* = searchIdx/6903 + 1;
                  const failAcc/6907 : Tuple(Bool, UInt)* = [false, searchIdx'/6906 ];
                  const succAcc/6908 : Tuple(Bool, UInt)* = [true, searchIdx/6903 ];
                  const bl/6909 : Tuple(Bool, UInt)* = (cnd/6905 ? succAcc/6908 : failAcc/6907);
                  const res/5942 : Tuple(Bool, UInt)* = bl/6909;
                  const tokIdx/5954 : UInt* = res/5942[1];
                  const isFound'/5955 : Bool* = res/5942[0];
                  claim(CT_Assert)(isFound'/5955, Just "Token is tracked");
                  const tokInfo/5956 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5954];
                  const tokInfo'/5957 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/5956, 0, v5940 );
                  const tokInfos'/5958 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/5954, tokInfo'/5957 );
                  checkPay(amt0/5916, Some paymentToken/3019);
                  const .fork126.msg/6124 : Tuple()* = data_id/5785;
                  setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                  const v6126 : Bool* = returnExpression/3039.freeze;
                  const v6127 : Bool* = v6126;
                  claim(CT_Require)(v6126, Just "Contract is frozen");
                  const v6128 : Null* = null;
                  const v6125 : Null* = null;
                  const x/6130 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v6131 : Bool* = (x/6130 ? false : true);
                  claim(CT_Require)(v6131, Just "Offer already accepted");
                  const v6132 : Null* = null;
                  const v6133 : Bool* = config_as_object/3008.prefersNetworkToken;
                  const v6134 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v6135 : Tuple(UInt, Tuple(UInt, Token))* = [v3024, v6134 ];
                  const v6136 : Tuple(UInt, Token)* = [v3024, paymentToken/3019 ];
                  const v6137 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6136 ];
                  const transferData/6138 : Tuple(UInt, Tuple(UInt, Token))* = (v6133 ? v6135 : v6137);
                  const v6139 : Null* = null;
                  const .api77.rngl/6140 : Null* = emitLog(api("user_acceptLoan"))(v6139 );
                  only(Left "user_acceptLoan") {
                    const v6141 : Address* = selfAddress("user_acceptLoan", True, 2248 )();
                    const didPublish/6143 : Bool* = didPublish/1821;
                    local(Just v6142 : Null) if didPublish/1821 then {
                      protect<Null>("user_acceptLoan".interact.out(data_id/5785, .api77.rngl/6140 ));
                       }
                    else {
                       };
                    const v6142 : Null* = null;
                     };
                  const v6144 : Null* = null;
                  const v6145 : UInt* = transferData/6138[0];
                  const v6146 : Tuple(UInt, Token)* = transferData/6138[1];
                  const v6147 : UInt* = v6146[0];
                  const v6148 : Token* = v6146[1];
                  const netBalance/6149 : UInt* = v5922;
                  const v6150 : Bool* = v6145 <= v5922;
                  claim(CT_Assert)(v6150, Just "balance sufficient for transfer");
                  const netBalance/6151 : UInt* = v5922;
                  const v6152 : UInt* = v5922 - v6145;
                  transfer.(v6145, None).to(Admin/3007);
                  const v6910 : Token* = tokens'/3018[0];
                  const acc/6911 : Tuple(Bool, UInt)* = initAcc/5923;
                  const elem/6912 : Token* = v6910;
                  const arrIdx/6913 : UInt* = 0;
                  const isFound/6914 : Bool* = acc/6911[0];
                  const searchIdx/6915 : UInt* = acc/6911[1];
                  const toksEq/6916 : Bool* = elem/6912 == v6148;
                  const cnd/6917 : Bool* = (isFound/6914 ? true : toksEq/6916);
                  const searchIdx'/6918 : UInt* = searchIdx/6915 + 1;
                  const failAcc/6919 : Tuple(Bool, UInt)* = [false, searchIdx'/6918 ];
                  const succAcc/6920 : Tuple(Bool, UInt)* = [true, searchIdx/6915 ];
                  const bl/6921 : Tuple(Bool, UInt)* = (cnd/6917 ? succAcc/6920 : failAcc/6919);
                  const res/6154 : Tuple(Bool, UInt)* = bl/6921;
                  const tokIdx/6166 : UInt* = res/6154[1];
                  const isFound'/6167 : Bool* = res/6154[0];
                  claim(CT_Assert)(isFound'/6167, Just "Token is tracked");
                  const tokInfo/6168 : Tuple(UInt, UInt, Bool)* = tokInfos'/5958[tokIdx/6166];
                  const v6169 : UInt* = tokInfo/6168[0];
                  const v6170 : Bool* = v6147 <= v6169;
                  claim(CT_Assert)(v6170, Just "balance sufficient for transfer");
                  const v6922 : Token* = tokens'/3018[0];
                  const acc/6923 : Tuple(Bool, UInt)* = initAcc/5923;
                  const elem/6924 : Token* = v6922;
                  const arrIdx/6925 : UInt* = 0;
                  const isFound/6926 : Bool* = acc/6923[0];
                  const searchIdx/6927 : UInt* = acc/6923[1];
                  const toksEq/6928 : Bool* = elem/6924 == v6148;
                  const cnd/6929 : Bool* = (isFound/6926 ? true : toksEq/6928);
                  const searchIdx'/6930 : UInt* = searchIdx/6927 + 1;
                  const failAcc/6931 : Tuple(Bool, UInt)* = [false, searchIdx'/6930 ];
                  const succAcc/6932 : Tuple(Bool, UInt)* = [true, searchIdx/6927 ];
                  const bl/6933 : Tuple(Bool, UInt)* = (cnd/6929 ? succAcc/6932 : failAcc/6931);
                  const res/6172 : Tuple(Bool, UInt)* = bl/6933;
                  const tokIdx/6184 : UInt* = res/6172[1];
                  const isFound'/6185 : Bool* = res/6172[0];
                  claim(CT_Assert)(isFound'/6185, Just "Token is tracked");
                  const tokInfo/6186 : Tuple(UInt, UInt, Bool)* = tokInfos'/5958[tokIdx/6184];
                  const v6187 : UInt* = tokInfo/6186[0];
                  const v6188 : UInt* = v6187 - v6147;
                  const v6934 : Token* = tokens'/3018[0];
                  const acc/6935 : Tuple(Bool, UInt)* = initAcc/5923;
                  const elem/6936 : Token* = v6934;
                  const arrIdx/6937 : UInt* = 0;
                  const isFound/6938 : Bool* = acc/6935[0];
                  const searchIdx/6939 : UInt* = acc/6935[1];
                  const toksEq/6940 : Bool* = elem/6936 == v6148;
                  const cnd/6941 : Bool* = (isFound/6938 ? true : toksEq/6940);
                  const searchIdx'/6942 : UInt* = searchIdx/6939 + 1;
                  const failAcc/6943 : Tuple(Bool, UInt)* = [false, searchIdx'/6942 ];
                  const succAcc/6944 : Tuple(Bool, UInt)* = [true, searchIdx/6939 ];
                  const bl/6945 : Tuple(Bool, UInt)* = (cnd/6941 ? succAcc/6944 : failAcc/6943);
                  const res/6190 : Tuple(Bool, UInt)* = bl/6945;
                  const tokIdx/6202 : UInt* = res/6190[1];
                  const isFound'/6203 : Bool* = res/6190[0];
                  claim(CT_Assert)(isFound'/6203, Just "Token is tracked");
                  const tokInfo/6204 : Tuple(UInt, UInt, Bool)* = tokInfos'/5958[tokIdx/6202];
                  const tokInfo'/6205 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/6204, 0, v6188 );
                  const tokInfos'/6206 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos'/5958, tokIdx/6202, tokInfo'/6205 );
                  transfer.(v6147, Some v6148).to(Admin/3007);
                  const v6207 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                  const v6209 : Bool* = returnExpression/3039.continue;
                  const v6213 : UInt* = returnExpression/3039.offers;
                  const v6215 : UInt* = v6213 + 1;
                  const v6216 : Data({"None": Null, "Some": Address})* = <Some this/3421>;
                  const v6217 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                    acceptedAddress = v6216,
                    config = v3071,
                    continue = v6209,
                    freeze = v6126,
                    loanTerms = v3077,
                    loanTermsAccepted = true,
                    offers = v6215};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6217,
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
                case user_makeOffer0_126 as data_id/6257 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v6258 : Null* = null;
                  const v6259 : Null* = null;
                  let v6260 : Tuple(UInt, Tuple(UInt, Token));
                  const data_id/6372 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* = data_id/6257;
                  const v6373 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/6257[0];
                  const amount/6374 : UInt* = v6373.amount;
                  const shouldPayWithNetworkToken/6375 : Bool* = v6373.shouldPayWithNetworkToken;
                  const v6377 : Bool* = returnExpression/3039.freeze;
                  const v6378 : Bool* = v6377;
                  claim(CT_Require)(v6377, Just "Contract is frozen");
                  const v6379 : Null* = null;
                  const v6376 : Null* = null;
                  const v6380 : Bool* = config_as_object/3008.prefersNetworkToken;
                  const v6381 : Tuple(UInt, Token)* = [0, paymentToken/3019 ];
                  const v6382 : Tuple(UInt, Tuple(UInt, Token))* = [amount/6374, v6381 ];
                  const v6383 : Tuple(UInt, Token)* = [amount/6374, paymentToken/3019 ];
                  const v6384 : Tuple(UInt, Tuple(UInt, Token))* = [0, v6383 ];
                  const v6385 : Tuple(UInt, Tuple(UInt, Token))* = (v6380 ? v6382 : v6384);
                  v6260 : Tuple(UInt, Tuple(UInt, Token)) = v6385;
                  const networkTokenPay/6386 : UInt* = v6260[0];
                  const v6387 : Tuple(UInt, Token)* = v6260[1];
                  const amt0/6388 : UInt* = v6387[0];
                  const nntok0/6389 : Token* = v6387[1];
                  const v6390 : Bool* = nntok0/6389 == paymentToken/3019;
                  claim(CT_Assert)(v6390, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v6391 : Tuple(UInt, Token)* = [amt0/6388, paymentToken/3019 ];
                  const v6392 : Tuple(UInt, Tuple(UInt, Token))* = [networkTokenPay/6386, v6391 ];
                  const netBalance/6393 : UInt* = netBalance/3047;
                  const v6394 : UInt* = netBalance/3047 + networkTokenPay/6386;
                  checkPay(networkTokenPay/6386, None);
                  const initAcc/6395 : Tuple(Bool, UInt)* = [false, 0 ];
                  const v6946 : Token* = tokens'/3018[0];
                  const acc/6947 : Tuple(Bool, UInt)* = initAcc/6395;
                  const elem/6948 : Token* = v6946;
                  const arrIdx/6949 : UInt* = 0;
                  const isFound/6950 : Bool* = acc/6947[0];
                  const searchIdx/6951 : UInt* = acc/6947[1];
                  const toksEq/6952 : Bool* = elem/6948 == paymentToken/3019;
                  const cnd/6953 : Bool* = (isFound/6950 ? true : toksEq/6952);
                  const searchIdx'/6954 : UInt* = searchIdx/6951 + 1;
                  const failAcc/6955 : Tuple(Bool, UInt)* = [false, searchIdx'/6954 ];
                  const succAcc/6956 : Tuple(Bool, UInt)* = [true, searchIdx/6951 ];
                  const bl/6957 : Tuple(Bool, UInt)* = (cnd/6953 ? succAcc/6956 : failAcc/6955);
                  const res/6396 : Tuple(Bool, UInt)* = bl/6957;
                  const tokIdx/6408 : UInt* = res/6396[1];
                  const isFound'/6409 : Bool* = res/6396[0];
                  claim(CT_Assert)(isFound'/6409, Just "Token is tracked");
                  const tokInfo/6410 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/6408];
                  const v6411 : UInt* = tokInfo/6410[0];
                  const v6412 : UInt* = v6411 + amt0/6388;
                  const v6958 : Token* = tokens'/3018[0];
                  const acc/6959 : Tuple(Bool, UInt)* = initAcc/6395;
                  const elem/6960 : Token* = v6958;
                  const arrIdx/6961 : UInt* = 0;
                  const isFound/6962 : Bool* = acc/6959[0];
                  const searchIdx/6963 : UInt* = acc/6959[1];
                  const toksEq/6964 : Bool* = elem/6960 == paymentToken/3019;
                  const cnd/6965 : Bool* = (isFound/6962 ? true : toksEq/6964);
                  const searchIdx'/6966 : UInt* = searchIdx/6963 + 1;
                  const failAcc/6967 : Tuple(Bool, UInt)* = [false, searchIdx'/6966 ];
                  const succAcc/6968 : Tuple(Bool, UInt)* = [true, searchIdx/6963 ];
                  const bl/6969 : Tuple(Bool, UInt)* = (cnd/6965 ? succAcc/6968 : failAcc/6967);
                  const res/6414 : Tuple(Bool, UInt)* = bl/6969;
                  const tokIdx/6426 : UInt* = res/6414[1];
                  const isFound'/6427 : Bool* = res/6414[0];
                  claim(CT_Assert)(isFound'/6427, Just "Token is tracked");
                  const tokInfo/6428 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/6426];
                  const tokInfo'/6429 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/6428, 0, v6412 );
                  const tokInfos'/6430 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/6426, tokInfo'/6429 );
                  checkPay(amt0/6388, Some paymentToken/3019);
                  const .fork126.msg/6692 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* = data_id/6257;
                  setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                  const v6693 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})* = data_id/6257[0];
                  const amount/6694 : UInt* = v6693.amount;
                  const shouldPayWithNetworkToken/6695 : Bool* = v6693.shouldPayWithNetworkToken;
                  const v6697 : Bool* = returnExpression/3039.freeze;
                  const v6698 : Bool* = v6697;
                  claim(CT_Require)(v6697, Just "Contract is frozen");
                  const v6699 : Null* = null;
                  const v6696 : Null* = null;
                  const v6701 : UInt* = returnExpression/3039.offers;
                  const v6703 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                    amount = amount/6694,
                    borrower = this/3421,
                    offerId = v6701,
                    rejected = false};
                  map0[v6701] = v6703;
                  const .api78.rngl/6706 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v6703 );
                  only(Left "user_makeOffer") {
                    const v6707 : Address* = selfAddress("user_makeOffer", True, 2309 )();
                    const didPublish/6709 : Bool* = didPublish/1821;
                    local(Just v6708 : Null) if didPublish/1821 then {
                      const v6713 : UInt* = .api78.rngl/6706.amount;
                      const v6714 : Address* = .api78.rngl/6706.borrower;
                      const v6715 : UInt* = .api78.rngl/6706.offerId;
                      const v6716 : Bool* = .api78.rngl/6706.rejected;
                      protect<Null>("user_makeOffer".interact.out(data_id/6257, .api78.rngl/6706 ));
                       }
                    else {
                       };
                    const v6708 : Null* = null;
                     };
                  const v6717 : Null* = null;
                  const v6718 : Data({"None": Null, "Some": Address})* = returnExpression/3039.acceptedAddress;
                  const v6720 : Bool* = returnExpression/3039.continue;
                  const v6723 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v6726 : UInt* = v6701 + 1;
                  const v6727 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})* = {
                    acceptedAddress = v6718,
                    config = v3071,
                    continue = v6720,
                    freeze = v6697,
                    loanTerms = v3077,
                    loanTermsAccepted = v6723,
                    offers = v6726};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v6727,
                    thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                    lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                    baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                    thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                    lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                    baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                    tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/6430,
                    netBalance/3047 : UInt = v6394
                    }
                  continue; } } }
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
            const v6747 : Bool* = netBalance/3047 <= netBalance/3047;
            claim(CT_Assert)(v6747, Just "balance sufficient for transfer");
            const netBalance/6748 : UInt* = netBalance/3047;
            const v6749 : UInt* = netBalance/3047 - netBalance/3047;
            transfer.(netBalance/3047, None).to(Admin/3007);
            const tokInfo/6750 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[0];
            const v6751 : UInt* = tokInfo/6750[0];
            const v6754 : Bool* = v6751 <= v6751;
            claim(CT_Assert)(v6754, Just "balance sufficient for transfer");
            const v6757 : UInt* = v6751 - v6751;
            const tokInfo'/6759 : Tuple(UInt, UInt, Bool)* = Tuple.set(tokInfo/6750, 0, v6757 );
            const tokInfos'/6760 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, 0, tokInfo'/6759 );
            transfer.(v6751, Some deposit_nft/3009).to(Admin/3007);
            const netBalance/6761 : UInt* = v6749;
            const v6762 : Bool* = 0 == v6749;
            claim(CT_Assert)(v6762, Just "balance zero at application exit");
            const tokInfo/6763 : Tuple(UInt, UInt, Bool)* = tokInfos'/6760[0];
            const v6764 : UInt* = tokInfo/6763[0];
            const v6765 : Bool* = 0 == v6764;
            claim(CT_Assert)(v6765, Just "balance zero at application exit");
            commit();
            exit(); }
           }
       }
  