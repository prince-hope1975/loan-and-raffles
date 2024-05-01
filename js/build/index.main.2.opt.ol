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
const initialInfo/2978 : Tuple(UInt, UInt, Bool)! = [0, 0, false ];
const tokInfos/2979 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/2978 ]);
const tokens/2980 : Array(Token, 1)! = array(Token, [Token.zero ]);
only(Left "Admin") {
  const intiConfig/2983 : Object({"ADMIN": Address, "comment": Bytes(200), "configuration": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "loanTerms_info": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])})* = "Admin".interact.intiConfig;
  const v2984 : Address! = intiConfig/2983.ADMIN;
  const v2986 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = intiConfig/2983.configuration;
  const v2987 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])! = intiConfig/2983.loanTerms_info;
  const v2988 : Token* = v2986.token;
  const v2989 : UInt! = v2986.number_of_tokens_to_deposit;
  const v2990 : Token! = v2986.paymentAsset;
  const v2991 : Bool! = v2986.shouldPayInOnlyNetworkToken;
  const v2992 : Bool! = v2986.prefersNetworkToken;
   };
only(Left "Admin") {
  const v3006 : Object({"number_of_tokens_to_deposit": UInt, "paymentAsset": Token, "prefersNetworkToken": Bool, "shouldPayInOnlyNetworkToken": Bool, "token": Token})! = {
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
    const tokInfo/3015 : Tuple(UInt, UInt, Bool)! = tokInfos/2979[0];
    const tokInfo'/3016 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/3015, 0, 0 );
    const tokInfos'/3017 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/2979, 0, tokInfo'/3016 );
    const tokens'/3018 : Array(Token, 1)* = Array.set(tokens/2980, 0, deposit_nft/3009 );
    tokenInit(deposit_nft/3009);
    checkPay(0, None);
    const paymentToken/3019 : Token* = config_as_object/3008.paymentAsset;
    commit();
    only(Left "Admin") {
      const v3020 : UInt! = config_as_object/3008.number_of_tokens_to_deposit;
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
        const v3026 : UInt! = tokInfo/3025[0];
        const v3027 : UInt! = v3026 + v3024;
        const tokInfo'/3029 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/3025, 0, v3027 );
        const tokInfos'/3030 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/3017, 0, tokInfo'/3029 );
        checkPay(v3024, Some deposit_nft/3009);
        const v3031 : Bool! = Admin/3007 == Admin/3021;
        claim(CT_Require)(v3031, Just "sender correct");
        view(Just "info").config.is(Just export (Nothing) => {
        return config/3010;})
        const v3037 : Data({"None": Null, "Some": Address})! = <None null>;
        const v3038 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
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
          [invariant(const v3059 : Bool! = netBalance/3047 == 0;
          
          return v3059;, Nothing)] }
        while{
          const v3070 : Bool! = returnExpression/3039.continue;
          
          return v3070; }
        {
          const v3071 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])* = returnExpression/3039.config;
          view(Just "info").config.is(Just export (Nothing) => {
          return v3071;})
          const v3077 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])* = returnExpression/3039.loanTerms;
          view(Just "info").loanTerms.is(Just export (Nothing) => {
          return v3077;})
          view(Just "info").offer.is(Just export (Just [v3081 : UInt!]) => {const v3082 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})! = map0[res/3081];
          
          return v3082;})
          commit();
          only(Left "Admin_api_updateConfig") {
            const this/3083 : Address* = selfAddress("Admin_api_updateConfig", True, 524 )();
            const .api72.dom/3085 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* = protect<Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))>("Admin_api_updateConfig".interact.in());
            const v3093 : Bool! = this/3083 == Admin/3007;
            const v3094 : Bool! = ADMIN_WALLET/3012 == this/3083;
            const v3095 : Bool! = (v3093 ? true : v3094);
            claim(CT_Assume)(v3095, Just "The current user trying to access this interface is not Admin");
            const x/3097 : Bool! = returnExpression/3039.loanTermsAccepted;
            const v3098 : Bool! = (x/3097 ? false : true);
            claim(CT_Assume)(v3098, Just "Cannot update config after Loan terms accepted");
            const v3110 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})! = <Admin_api_updateConfig0_126 .api72.dom/3085>;
             };
          only(Left "Admin_api_freeze") {
            const this/3112 : Address* = selfAddress("Admin_api_freeze", True, 585 )();
            const .api73.dom/3114 : Tuple(Bool)* = protect<Tuple(Bool)>("Admin_api_freeze".interact.in());
            const v3115 : Bool! = .api73.dom/3114[0];
            const v3117 : Bool! = this/3112 == Admin/3007;
            const v3118 : Bool! = ADMIN_WALLET/3012 == this/3112;
            const v3119 : Bool! = (v3117 ? true : v3118);
            claim(CT_Assume)(v3119, Just "The current user trying to access this interface is not Admin");
            const x/3121 : Bool! = returnExpression/3039.loanTermsAccepted;
            const v3122 : Bool! = (x/3121 ? false : true);
            claim(CT_Assume)(v3122, Just "Cannot update config after Loan terms accepted");
            const v3124 : Bool* = returnExpression/3039.freeze;
            const v3125 : Bool! = (v3124 ? false : true);
            const x/3126 : Bool! = (v3115 ? v3124 : v3125);
            const v3127 : Bool! = (x/3126 ? false : true);
            claim(CT_Assume)(v3127, Just "The action you are trying to perform has already been done");
            const v3134 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})! = <Admin_api_freeze0_126 .api73.dom/3114>;
             };
          only(Left "Admin_api_updateLoanTerms_info") {
            const this/3136 : Address* = selfAddress("Admin_api_updateLoanTerms_info", True, 656 )();
            const .api74.dom/3138 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* = protect<Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))>("Admin_api_updateLoanTerms_info".interact.in());
            const v3144 : Bool! = this/3136 == Admin/3007;
            const v3145 : Bool! = ADMIN_WALLET/3012 == this/3136;
            const v3146 : Bool! = (v3144 ? true : v3145);
            claim(CT_Assume)(v3146, Just "The current user trying to access this interface is not Admin");
            const x/3148 : Bool! = returnExpression/3039.loanTermsAccepted;
            const v3149 : Bool! = (x/3148 ? false : true);
            claim(CT_Assume)(v3149, Just "Cannot update loan terms after Loan terms accepted");
            const v3159 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})! = <Admin_api_updateLoanTerms_info0_126 .api74.dom/3138>;
             };
          only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
            const this/3161 : Address* = selfAddress("Admin_api_cancelLoanOfferandWithdrawCollateral", True, 713 )();
            const .api75.dom/3163 : Tuple(UInt)* = protect<Tuple(UInt)>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.in());
            const v3166 : Bool! = this/3161 == Admin/3007;
            const v3167 : Bool! = ADMIN_WALLET/3012 == this/3161;
            const v3168 : Bool! = (v3166 ? true : v3167);
            claim(CT_Assume)(v3168, Just "The current user trying to access this interface is not Admin");
            const x/3170 : Bool! = returnExpression/3039.loanTermsAccepted;
            const v3171 : Bool! = (x/3170 ? false : true);
            claim(CT_Assume)(v3171, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
            const v3174 : Bool! = returnExpression/3039.freeze;
            claim(CT_Assume)(v3174, Just "Contract is frozen");
            const v3182 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})! = <Admin_api_cancelLoanOfferandWithdrawCollateral0_126 .api75.dom/3163>;
             };
          only(Left "Admin_api_acceptOffer") {
            const this/3184 : Address* = selfAddress("Admin_api_acceptOffer", True, 782 )();
            const .api76.dom/3186 : Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))* = protect<Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool}))>("Admin_api_acceptOffer".interact.in());
            const v3187 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})! = .api76.dom/3186[0];
            const v3190 : UInt! = v3187.offerId;
            const v3193 : Bool! = this/3184 == Admin/3007;
            const v3194 : Bool! = ADMIN_WALLET/3012 == this/3184;
            const v3195 : Bool! = (v3193 ? true : v3194);
            claim(CT_Assume)(v3195, Just "The current user trying to access this interface is not Admin");
            const x/3197 : Bool! = returnExpression/3039.loanTermsAccepted;
            const v3198 : Bool! = (x/3197 ? false : true);
            claim(CT_Assume)(v3198, Just "An offer has already been accepted");
            const v3201 : Bool! = returnExpression/3039.freeze;
            claim(CT_Assume)(v3201, Just "Contract is frozen");
            const m/3208 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})! = map0[v3190];
            const v3209 : UInt! = dataTag(m/3208);
            const v3210 : Bool! = v3209 == 1;
            claim(CT_Assume)(v3210, Just "Offer id doesn't exist");
            const v3221 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})! = <Admin_api_acceptOffer0_126 .api76.dom/3186>;
             };
          only(Left "user_acceptLoan") {
            const .api77.dom/3225 : Tuple()* = protect<Tuple()>("user_acceptLoan".interact.in());
            const v3227 : Bool! = returnExpression/3039.freeze;
            claim(CT_Assume)(v3227, Just "Contract is frozen");
            const x/3231 : Bool! = returnExpression/3039.loanTermsAccepted;
            const v3232 : Bool! = (x/3231 ? false : true);
            claim(CT_Assume)(v3232, Just "Offer already accepted");
            const v3234 : Bool! = config_as_object/3008.prefersNetworkToken;
            const v3235 : Tuple(UInt, Token)! = [0, paymentToken/3019 ];
            const v3236 : Tuple(UInt, Tuple(UInt, Token))! = [v3024, v3235 ];
            const v3237 : Tuple(UInt, Token)! = [v3024, paymentToken/3019 ];
            const v3238 : Tuple(UInt, Tuple(UInt, Token))! = [0, v3237 ];
            const transferData/3239 : Tuple(UInt, Tuple(UInt, Token))* = (v3234 ? v3236 : v3238);
            const v3243 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})! = <user_acceptLoan0_126 .api77.dom/3225>;
             };
          only(Left "user_makeOffer") {
            const .api78.dom/3247 : Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))* = protect<Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))>("user_makeOffer".interact.in());
            const v3248 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})! = .api78.dom/3247[0];
            const v3249 : UInt* = v3248.amount;
            const v3255 : Bool! = returnExpression/3039.freeze;
            claim(CT_Assume)(v3255, Just "Contract is frozen");
            const v3265 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})! = <user_makeOffer0_126 .api78.dom/3247>;
             };
          only(Left "user_acceptLoan") {
            const networkTokenPay/3393 : UInt! = transferData/3239[0];
            const v3394 : Tuple(UInt, Token)* = transferData/3239[1];
            const amt0/3395 : UInt! = v3394[0];
            const nntok0/3396 : Token! = v3394[1];
            const v3397 : Bool! = nntok0/3396 == paymentToken/3019;
            claim(CT_Assert)(v3397, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
             };
          only(Left "user_makeOffer") {
            const v3408 : Bool! = config_as_object/3008.prefersNetworkToken;
            const v3409 : Tuple(UInt, Token)! = [0, paymentToken/3019 ];
            const v3410 : Tuple(UInt, Tuple(UInt, Token))! = [v3249, v3409 ];
            const v3411 : Tuple(UInt, Token)! = [v3249, paymentToken/3019 ];
            const v3412 : Tuple(UInt, Tuple(UInt, Token))! = [0, v3411 ];
            const v3413 : Tuple(UInt, Tuple(UInt, Token))* = (v3408 ? v3410 : v3412);
            const networkTokenPay/3414 : UInt! = v3413[0];
            const v3415 : Tuple(UInt, Token)* = v3413[1];
            const amt0/3416 : UInt! = v3415[0];
            const nntok0/3417 : Token! = v3415[1];
            const v3418 : Bool! = nntok0/3417 == paymentToken/3019;
            claim(CT_Assert)(v3418, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
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
                  const loanOffer/3430 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})! = data_id/3425[0];
                  const v3431 : Bool! = this/3421 == Admin/3007;
                  const v3432 : Bool! = ADMIN_WALLET/3012 == this/3421;
                  const v3433 : Bool* = (v3431 ? true : v3432);
                  claim(CT_Require)(v3433, Just "The current user trying to access this interface is not Admin");
                  const x/3435 : Bool! = returnExpression/3039.loanTermsAccepted;
                  const v3436 : Bool* = (x/3435 ? false : true);
                  claim(CT_Require)(v3436, Just "An offer has already been accepted");
                  const v3439 : Bool* = returnExpression/3039.freeze;
                  claim(CT_Require)(v3439, Just "Contract is frozen");
                  const v3444 : UInt! = loanOffer/3430.offerId;
                  const m/3446 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})! = map0[v3444];
                  const v3447 : UInt! = dataTag(m/3446);
                  const v3448 : Bool* = v3447 == 1;
                  claim(CT_Require)(v3448, Just "Offer id doesn't exist");
                  checkPay(0, None);
                  const v6766 : Token! = tokens'/3018[0];
                  const toksEq/6772 : Bool! = v6766 == paymentToken/3019;
                  const failAcc/6775 : Tuple(Bool, UInt)! = [false, 1 ];
                  const succAcc/6776 : Tuple(Bool, UInt)! = [true, 0 ];
                  const bl/6777 : Tuple(Bool, UInt)! = (toksEq/6772 ? succAcc/6776 : failAcc/6775);
                  const isFound'/3577 : Bool* = bl/6777[0];
                  claim(CT_Assert)(isFound'/3577, Just "Token is tracked");
                  null;
                  checkPay(0, Some paymentToken/3019);
                  setApiDetails("Admin_api_acceptOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_acceptOffer0_126, AIC_Case );
                  null;
                  null;
                  null;
                  null;
                  const v3623 : Null* = null;
                  const .api76.rngl/3624 : Null* = emitLog(api("Admin_api_acceptOffer"))(v3623 );
                  only(Left "Admin_api_acceptOffer") {
                    local(Just v3626 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_acceptOffer".interact.out(data_id/3425, .api76.rngl/3624 ));
                       }
                    else {
                       };
                     };
                  const v3634 : Data({"None": Null, "Some": Address})! = returnExpression/3039.acceptedAddress;
                  const v3636 : Bool! = returnExpression/3039.continue;
                  const v3640 : UInt! = returnExpression/3039.offers;
                  const v3641 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
                    acceptedAddress = v3634,
                    config = v3071,
                    continue = v3636,
                    freeze = true,
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
                    tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/3046,
                    netBalance/3047 : UInt = netBalance/3047
                    }
                  continue; }
                case Admin_api_cancelLoanOfferandWithdrawCollateral0_126 as data_id/3897 : Tuple(UInt)! from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v3930 : Bool! = this/3421 == Admin/3007;
                  const v3931 : Bool! = ADMIN_WALLET/3012 == this/3421;
                  const v3932 : Bool* = (v3930 ? true : v3931);
                  claim(CT_Require)(v3932, Just "The current user trying to access this interface is not Admin");
                  const x/3934 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v3935 : Bool* = (x/3934 ? false : true);
                  claim(CT_Require)(v3935, Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted");
                  const v3938 : Bool* = returnExpression/3039.freeze;
                  claim(CT_Require)(v3938, Just "Contract is frozen");
                  checkPay(0, None);
                  const v6790 : Token! = tokens'/3018[0];
                  const toksEq/6796 : Bool! = v6790 == paymentToken/3019;
                  const failAcc/6799 : Tuple(Bool, UInt)! = [false, 1 ];
                  const succAcc/6800 : Tuple(Bool, UInt)! = [true, 0 ];
                  const bl/6801 : Tuple(Bool, UInt)! = (toksEq/6796 ? succAcc/6800 : failAcc/6799);
                  const isFound'/4049 : Bool* = bl/6801[0];
                  claim(CT_Assert)(isFound'/4049, Just "Token is tracked");
                  null;
                  checkPay(0, Some paymentToken/3019);
                  setApiDetails("Admin_api_cancelLoanOfferandWithdrawCollateral", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_cancelLoanOfferandWithdrawCollateral0_126, AIC_Case );
                  null;
                  null;
                  null;
                  const v4129 : Null* = null;
                  const .api75.rngl/4130 : Null* = emitLog(api("Admin_api_cancelLoanOfferandWithdrawCollateral"))(v4129 );
                  only(Left "Admin_api_cancelLoanOfferandWithdrawCollateral") {
                    local(Just v4132 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_cancelLoanOfferandWithdrawCollateral".interact.out(data_id/3897, .api75.rngl/4130 ));
                       }
                    else {
                       };
                     };
                  const v4136 : Data({"None": Null, "Some": Address})! = returnExpression/3039.acceptedAddress;
                  const v4142 : UInt! = returnExpression/3039.offers;
                  const v4143 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
                    acceptedAddress = v4136,
                    config = v3071,
                    continue = false,
                    freeze = true,
                    loanTerms = v3077,
                    loanTermsAccepted = x/3934,
                    offers = v4142};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4143,
                    thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                    lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                    baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                    thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                    lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                    baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                    tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/3046,
                    netBalance/3047 : UInt = netBalance/3047
                    }
                  continue; }
                case Admin_api_freeze0_126 as data_id/4369 : Tuple(Bool)* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const toggle/4420 : Bool* = data_id/4369[0];
                  const v4421 : Bool! = this/3421 == Admin/3007;
                  const v4422 : Bool! = ADMIN_WALLET/3012 == this/3421;
                  const v4423 : Bool* = (v4421 ? true : v4422);
                  claim(CT_Require)(v4423, Just "The current user trying to access this interface is not Admin");
                  const x/4425 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v4426 : Bool* = (x/4425 ? false : true);
                  claim(CT_Require)(v4426, Just "Cannot update config after Loan terms accepted");
                  const v4428 : Bool* = returnExpression/3039.freeze;
                  const v4429 : Bool! = (v4428 ? false : true);
                  const x/4430 : Bool! = (toggle/4420 ? v4428 : v4429);
                  const v4431 : Bool* = (x/4430 ? false : true);
                  claim(CT_Require)(v4431, Just "The action you are trying to perform has already been done");
                  checkPay(0, None);
                  const v6814 : Token! = tokens'/3018[0];
                  const toksEq/6820 : Bool! = v6814 == paymentToken/3019;
                  const failAcc/6823 : Tuple(Bool, UInt)! = [false, 1 ];
                  const succAcc/6824 : Tuple(Bool, UInt)! = [true, 0 ];
                  const bl/6825 : Tuple(Bool, UInt)! = (toksEq/6820 ? succAcc/6824 : failAcc/6823);
                  const isFound'/4521 : Bool* = bl/6825[0];
                  claim(CT_Assert)(isFound'/4521, Just "Token is tracked");
                  null;
                  checkPay(0, Some paymentToken/3019);
                  setApiDetails("Admin_api_freeze", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_freeze0_126, AIC_Case );
                  null;
                  null;
                  null;
                  const v4632 : Null* = null;
                  const .api73.rngl/4633 : Null* = emitLog(api("Admin_api_freeze"))(v4632 );
                  only(Left "Admin_api_freeze") {
                    local(Just v4635 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_freeze".interact.out(data_id/4369, .api73.rngl/4633 ));
                       }
                    else {
                       };
                     };
                  const v4639 : Data({"None": Null, "Some": Address})! = returnExpression/3039.acceptedAddress;
                  const v4641 : Bool! = returnExpression/3039.continue;
                  const v4645 : UInt! = returnExpression/3039.offers;
                  const v4646 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
                    acceptedAddress = v4639,
                    config = v3071,
                    continue = v4641,
                    freeze = toggle/4420,
                    loanTerms = v3077,
                    loanTermsAccepted = x/4425,
                    offers = v4645};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v4646,
                    thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                    lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                    baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                    thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                    lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                    baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                    tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/3046,
                    netBalance/3047 : UInt = netBalance/3047
                    }
                  continue; }
                case Admin_api_updateConfig0_126 as data_id/4841 : Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v4913 : Bool! = this/3421 == Admin/3007;
                  const v4914 : Bool! = ADMIN_WALLET/3012 == this/3421;
                  const v4915 : Bool* = (v4913 ? true : v4914);
                  claim(CT_Require)(v4915, Just "The current user trying to access this interface is not Admin");
                  const x/4917 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v4918 : Bool* = (x/4917 ? false : true);
                  claim(CT_Require)(v4918, Just "Cannot update config after Loan terms accepted");
                  checkPay(0, None);
                  const v6838 : Token! = tokens'/3018[0];
                  const toksEq/6844 : Bool! = v6838 == paymentToken/3019;
                  const failAcc/6847 : Tuple(Bool, UInt)! = [false, 1 ];
                  const succAcc/6848 : Tuple(Bool, UInt)! = [true, 0 ];
                  const bl/6849 : Tuple(Bool, UInt)! = (toksEq/6844 ? succAcc/6848 : failAcc/6847);
                  const isFound'/4993 : Bool* = bl/6849[0];
                  claim(CT_Assert)(isFound'/4993, Just "Token is tracked");
                  null;
                  checkPay(0, Some paymentToken/3019);
                  setApiDetails("Admin_api_updateConfig", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateConfig0_126, AIC_Case );
                  const local_config/5121 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])! = data_id/4841[0];
                  null;
                  null;
                  const v5130 : Null* = null;
                  const .api72.rngl/5131 : Null* = emitLog(api("Admin_api_updateConfig"))(v5130 );
                  only(Left "Admin_api_updateConfig") {
                    local(Just v5133 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_updateConfig".interact.out(data_id/4841, .api72.rngl/5131 ));
                       }
                    else {
                       };
                     };
                  const v5142 : Data({"None": Null, "Some": Address})! = returnExpression/3039.acceptedAddress;
                  const v5144 : Bool! = returnExpression/3039.continue;
                  const v5145 : Bool! = returnExpression/3039.freeze;
                  const v5148 : UInt! = returnExpression/3039.offers;
                  const v5149 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
                    acceptedAddress = v5142,
                    config = local_config/5121,
                    continue = v5144,
                    freeze = v5145,
                    loanTerms = v3077,
                    loanTermsAccepted = x/4917,
                    offers = v5148};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5149,
                    thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                    lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                    baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                    thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                    lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                    baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                    tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/3046,
                    netBalance/3047 : UInt = netBalance/3047
                    }
                  continue; }
                case Admin_api_updateLoanTerms_info0_126 as data_id/5313 : Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]))* from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v5400 : Bool! = this/3421 == Admin/3007;
                  const v5401 : Bool! = ADMIN_WALLET/3012 == this/3421;
                  const v5402 : Bool* = (v5400 ? true : v5401);
                  claim(CT_Require)(v5402, Just "The current user trying to access this interface is not Admin");
                  const x/5404 : Bool* = returnExpression/3039.loanTermsAccepted;
                  const v5405 : Bool* = (x/5404 ? false : true);
                  claim(CT_Require)(v5405, Just "Cannot update loan terms after Loan terms accepted");
                  checkPay(0, None);
                  const v6862 : Token! = tokens'/3018[0];
                  const toksEq/6868 : Bool! = v6862 == paymentToken/3019;
                  const failAcc/6871 : Tuple(Bool, UInt)! = [false, 1 ];
                  const succAcc/6872 : Tuple(Bool, UInt)! = [true, 0 ];
                  const bl/6873 : Tuple(Bool, UInt)! = (toksEq/6868 ? succAcc/6872 : failAcc/6871);
                  const isFound'/5465 : Bool* = bl/6873[0];
                  claim(CT_Assert)(isFound'/5465, Just "Token is tracked");
                  null;
                  checkPay(0, Some paymentToken/3019);
                  setApiDetails("Admin_api_updateLoanTerms_info", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some Admin_api_updateLoanTerms_info0_126, AIC_Case );
                  const local_config/5624 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])! = data_id/5313[0];
                  null;
                  null;
                  const v5633 : Null* = null;
                  const .api74.rngl/5634 : Null* = emitLog(api("Admin_api_updateLoanTerms_info"))(v5633 );
                  only(Left "Admin_api_updateLoanTerms_info") {
                    local(Just v5636 : Null) if didPublish/1821 then {
                      protect<Null>("Admin_api_updateLoanTerms_info".interact.out(data_id/5313, .api74.rngl/5634 ));
                       }
                    else {
                       };
                     };
                  const v5643 : Data({"None": Null, "Some": Address})! = returnExpression/3039.acceptedAddress;
                  const v5645 : Bool! = returnExpression/3039.continue;
                  const v5646 : Bool! = returnExpression/3039.freeze;
                  const v5649 : UInt! = returnExpression/3039.offers;
                  const v5650 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
                    acceptedAddress = v5643,
                    config = v3071,
                    continue = v5645,
                    freeze = v5646,
                    loanTerms = local_config/5624,
                    loanTermsAccepted = x/5404,
                    offers = v5649};
                  {
                    returnExpression/3039 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt}) = v5650,
                    thisConsensusTime/3040 : UInt = thisConsensusTime/3423,
                    lastConsensusTime/3041 : UInt = thisConsensusTime/3040,
                    baseWaitTime/3042 : UInt = thisConsensusTime/3040,
                    thisConsensusSecs/3043 : UInt = thisConsensusSecs/3424,
                    lastConsensusSecs/3044 : UInt = thisConsensusSecs/3043,
                    baseWaitSecs/3045 : UInt = thisConsensusSecs/3043,
                    tokenInfos/3046 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/3046,
                    netBalance/3047 : UInt = netBalance/3047
                    }
                  continue; }
                case user_acceptLoan0_126 as data_id/5785 : Tuple()! from .fork126.msg/3422 : Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))}): {
                  const v5887 : Bool* = returnExpression/3039.freeze;
                  claim(CT_Require)(v5887, Just "Contract is frozen");
                  const x/5891 : Bool! = returnExpression/3039.loanTermsAccepted;
                  const v5892 : Bool* = (x/5891 ? false : true);
                  claim(CT_Require)(v5892, Just "Offer already accepted");
                  const v5894 : Bool! = config_as_object/3008.prefersNetworkToken;
                  const v5895 : Tuple(UInt, Token)! = [0, paymentToken/3019 ];
                  const v5896 : Tuple(UInt, Tuple(UInt, Token))! = [v3024, v5895 ];
                  const v5897 : Tuple(UInt, Token)! = [v3024, paymentToken/3019 ];
                  const v5898 : Tuple(UInt, Tuple(UInt, Token))! = [0, v5897 ];
                  const transferData/5899 : Tuple(UInt, Tuple(UInt, Token))* = (v5894 ? v5896 : v5898);
                  const networkTokenPay/5914 : UInt* = transferData/5899[0];
                  const v5915 : Tuple(UInt, Token)* = transferData/5899[1];
                  const amt0/5916 : UInt* = v5915[0];
                  const nntok0/5917 : Token* = v5915[1];
                  const v5918 : Bool! = nntok0/5917 == paymentToken/3019;
                  claim(CT_Assert)(v5918, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v5922 : UInt* = netBalance/3047 + networkTokenPay/5914;
                  checkPay(networkTokenPay/5914, None);
                  const v6886 : Token* = tokens'/3018[0];
                  const toksEq/6892 : Bool! = v6886 == paymentToken/3019;
                  const failAcc/6895 : Tuple(Bool, UInt)* = [false, 1 ];
                  const succAcc/6896 : Tuple(Bool, UInt)* = [true, 0 ];
                  const bl/6897 : Tuple(Bool, UInt)* = (toksEq/6892 ? succAcc/6896 : failAcc/6895);
                  const tokIdx/5936 : UInt* = bl/6897[1];
                  const isFound'/5937 : Bool* = bl/6897[0];
                  claim(CT_Assert)(isFound'/5937, Just "Token is tracked");
                  const tokInfo/5938 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/5936];
                  const v5939 : UInt! = tokInfo/5938[0];
                  const v5940 : UInt! = v5939 + amt0/5916;
                  null;
                  const tokInfo'/5957 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/5938, 0, v5940 );
                  const tokInfos'/5958 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokenInfos/3046, tokIdx/5936, tokInfo'/5957 );
                  checkPay(amt0/5916, Some paymentToken/3019);
                  setApiDetails("user_acceptLoan", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_acceptLoan0_126, AIC_Case );
                  null;
                  null;
                  const v6139 : Null* = null;
                  const .api77.rngl/6140 : Null* = emitLog(api("user_acceptLoan"))(v6139 );
                  only(Left "user_acceptLoan") {
                    local(Just v6142 : Null) if didPublish/1821 then {
                      protect<Null>("user_acceptLoan".interact.out(data_id/5785, .api77.rngl/6140 ));
                       }
                    else {
                       };
                     };
                  const v6150 : Bool! = networkTokenPay/5914 <= v5922;
                  claim(CT_Assert)(v6150, Just "balance sufficient for transfer");
                  const v6152 : UInt! = v5922 - networkTokenPay/5914;
                  transfer.(networkTokenPay/5914, None).to(Admin/3007);
                  const toksEq/6916 : Bool! = v6886 == nntok0/5917;
                  const bl/6921 : Tuple(Bool, UInt)* = (toksEq/6916 ? succAcc/6896 : failAcc/6895);
                  const tokIdx/6166 : UInt* = bl/6921[1];
                  const isFound'/6167 : Bool* = bl/6921[0];
                  claim(CT_Assert)(isFound'/6167, Just "Token is tracked");
                  const tokInfo/6168 : Tuple(UInt, UInt, Bool)* = tokInfos'/5958[tokIdx/6166];
                  const v6169 : UInt* = tokInfo/6168[0];
                  const v6170 : Bool! = amt0/5916 <= v6169;
                  claim(CT_Assert)(v6170, Just "balance sufficient for transfer");
                  null;
                  const v6188 : UInt! = v6169 - amt0/5916;
                  null;
                  const tokInfo'/6205 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/6168, 0, v6188 );
                  const tokInfos'/6206 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/5958, tokIdx/6166, tokInfo'/6205 );
                  transfer.(amt0/5916, Some nntok0/5917).to(Admin/3007);
                  const v6209 : Bool! = returnExpression/3039.continue;
                  const v6213 : UInt! = returnExpression/3039.offers;
                  const v6215 : UInt! = v6213 + 1;
                  const v6216 : Data({"None": Null, "Some": Address})! = <Some this/3421>;
                  const v6217 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
                    acceptedAddress = v6216,
                    config = v3071,
                    continue = v6209,
                    freeze = true,
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
                  const v6373 : Object({"amount": UInt, "shouldPayWithNetworkToken": Bool})! = data_id/6257[0];
                  const amount/6374 : UInt* = v6373.amount;
                  const v6377 : Bool* = returnExpression/3039.freeze;
                  claim(CT_Require)(v6377, Just "Contract is frozen");
                  const v6380 : Bool! = config_as_object/3008.prefersNetworkToken;
                  const v6381 : Tuple(UInt, Token)! = [0, paymentToken/3019 ];
                  const v6382 : Tuple(UInt, Tuple(UInt, Token))! = [amount/6374, v6381 ];
                  const v6383 : Tuple(UInt, Token)! = [amount/6374, paymentToken/3019 ];
                  const v6384 : Tuple(UInt, Tuple(UInt, Token))! = [0, v6383 ];
                  const v6385 : Tuple(UInt, Tuple(UInt, Token))* = (v6380 ? v6382 : v6384);
                  const networkTokenPay/6386 : UInt* = v6385[0];
                  const v6387 : Tuple(UInt, Token)* = v6385[1];
                  const amt0/6388 : UInt* = v6387[0];
                  const nntok0/6389 : Token! = v6387[1];
                  const v6390 : Bool! = nntok0/6389 == paymentToken/3019;
                  claim(CT_Assert)(v6390, Just "Expected the non-network token at position 1 in `case` payment to be equal to paymentToken as specified in `.paySpec`");
                  const v6394 : UInt! = netBalance/3047 + networkTokenPay/6386;
                  checkPay(networkTokenPay/6386, None);
                  const v6946 : Token! = tokens'/3018[0];
                  const toksEq/6952 : Bool! = v6946 == paymentToken/3019;
                  const failAcc/6955 : Tuple(Bool, UInt)! = [false, 1 ];
                  const succAcc/6956 : Tuple(Bool, UInt)! = [true, 0 ];
                  const bl/6957 : Tuple(Bool, UInt)* = (toksEq/6952 ? succAcc/6956 : failAcc/6955);
                  const tokIdx/6408 : UInt* = bl/6957[1];
                  const isFound'/6409 : Bool* = bl/6957[0];
                  claim(CT_Assert)(isFound'/6409, Just "Token is tracked");
                  const tokInfo/6410 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[tokIdx/6408];
                  const v6411 : UInt! = tokInfo/6410[0];
                  const v6412 : UInt! = v6411 + amt0/6388;
                  null;
                  const tokInfo'/6429 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/6410, 0, v6412 );
                  const tokInfos'/6430 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/3046, tokIdx/6408, tokInfo'/6429 );
                  checkPay(amt0/6388, Some paymentToken/3019);
                  setApiDetails("user_makeOffer", [Data({"Admin_api_acceptOffer0_126": Tuple(Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})), "Admin_api_cancelLoanOfferandWithdrawCollateral0_126": Tuple(UInt), "Admin_api_freeze0_126": Tuple(Bool), "Admin_api_updateConfig0_126": Tuple(Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])), "Admin_api_updateLoanTerms_info0_126": Tuple(Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])), "user_acceptLoan0_126": Tuple(), "user_makeOffer0_126": Tuple(Object({"amount": UInt, "shouldPayWithNetworkToken": Bool}))})], Some user_makeOffer0_126, AIC_Case );
                  null;
                  const v6701 : UInt* = returnExpression/3039.offers;
                  const v6703 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = {
                    amount = amount/6374,
                    borrower = this/3421,
                    offerId = v6701,
                    rejected = false};
                  map0[v6701] = v6703;
                  const .api78.rngl/6706 : Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})* = emitLog(api("user_makeOffer"))(v6703 );
                  only(Left "user_makeOffer") {
                    local(Just v6708 : Null) if didPublish/1821 then {
                      protect<Null>("user_makeOffer".interact.out(data_id/6257, .api78.rngl/6706 ));
                       }
                    else {
                       };
                     };
                  const v6718 : Data({"None": Null, "Some": Address})! = returnExpression/3039.acceptedAddress;
                  const v6720 : Bool! = returnExpression/3039.continue;
                  const v6723 : Bool! = returnExpression/3039.loanTermsAccepted;
                  const v6726 : UInt! = v6701 + 1;
                  const v6727 : Object({"acceptedAddress": Data({"None": Null, "Some": Address}), "config": Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]]), "continue": Bool, "freeze": Bool, "loanTerms": Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]]), "loanTermsAccepted": Bool, "offers": UInt})! = {
                    acceptedAddress = v6718,
                    config = v3071,
                    continue = v6720,
                    freeze = true,
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
        const v6729 : Struct([['"token"', Token], ['"number_of_tokens_to_deposit"', UInt], ['"paymentAsset"', Token], ['"shouldPayInOnlyNetworkToken"', Bool], ['"prefersNetworkToken"', Bool]])! = returnExpression/3039.config;
        view(Just "info").config.is(Just export (Nothing) => {
        return v6729;})
        const v6735 : Struct([['"duration_in_blocks"', UInt], ['"principle"', UInt], ['"interest"', Token]])! = returnExpression/3039.loanTerms;
        view(Just "info").loanTerms.is(Just export (Nothing) => {
        return v6735;})
        view(Just "info").offer.is(Just export (Just [v6739 : UInt!]) => {const v6740 : Data({"None": Null, "Some": Object({"amount": UInt, "borrower": Address, "offerId": UInt, "rejected": Bool})})! = map0[res/6739];
        
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
            const v6744 : Bool! = Admin/3007 == Admin/6741;
            claim(CT_Require)(v6744, Just "sender correct");
            const v6747 : Bool! = netBalance/3047 <= netBalance/3047;
            claim(CT_Assert)(v6747, Just "balance sufficient for transfer");
            const v6749 : UInt! = netBalance/3047 - netBalance/3047;
            transfer.(netBalance/3047, None).to(Admin/3007);
            const tokInfo/6750 : Tuple(UInt, UInt, Bool)* = tokenInfos/3046[0];
            const v6751 : UInt* = tokInfo/6750[0];
            const v6754 : Bool! = v6751 <= v6751;
            claim(CT_Assert)(v6754, Just "balance sufficient for transfer");
            const v6757 : UInt! = v6751 - v6751;
            const tokInfo'/6759 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/6750, 0, v6757 );
            const tokInfos'/6760 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/3046, 0, tokInfo'/6759 );
            transfer.(v6751, Some deposit_nft/3009).to(Admin/3007);
            const v6762 : Bool! = 0 == v6749;
            claim(CT_Assert)(v6762, Just "balance zero at application exit");
            const tokInfo/6763 : Tuple(UInt, UInt, Bool)! = tokInfos'/6760[0];
            const v6764 : UInt! = tokInfo/6763[0];
            const v6765 : Bool! = 0 == v6764;
            claim(CT_Assert)(v6765, Just "balance zero at application exit");
            commit();
            exit(); }
           }
       }
  