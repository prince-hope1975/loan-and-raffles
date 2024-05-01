// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

struct T0 {
  uint256 _amount;
  address payable _borrower;
  uint256 _offerId;
  bool _payWithNetworkToken;
  bool _rejected;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  T0 _Some;
  }
struct T2 {
  bool _active;
  uint256 _number_of_tokens_to_deposit;
  address payable _paymentAsset;
  bool _prefersNetworkToken;
  bool _shouldPayInOnlyNetworkToken;
  address payable _token;
  }
struct T3 {
  uint256 _duration_in_blocks;
  address payable _interest;
  uint256 _principle;
  }
struct T4 {
  T0 elem0;
  }
struct T5 {
  uint256 elem0;
  }
struct T6 {
  T3 elem0;
  }
struct T8 {
  uint256 _amount;
  bool _shouldPayWithNetworkToken;
  }
struct T9 {
  T8 elem0;
  }
enum _enum_T10 {Admin_api_acceptOffer0_170, Admin_api_cancelLoanOfferandWithdrawCollateral0_170, Admin_api_updateLoanTerms_info0_170, user_acceptLoan0_170, user_cancelOffer0_170, user_makeOffer0_170}
struct T10 {
  _enum_T10 which;
  T4 _Admin_api_acceptOffer0_170;
  T5 _Admin_api_cancelLoanOfferandWithdrawCollateral0_170;
  T6 _Admin_api_updateLoanTerms_info0_170;
  bool _user_acceptLoan0_170;
  T5 _user_cancelOffer0_170;
  T9 _user_makeOffer0_170;
  }
struct T11 {
  uint256 elem0;
  T10 elem1;
  }
struct T12 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T14 {
  address payable v2933;
  address payable v2935;
  address payable v2939;
  T12[2] v2981;
  uint256 v2982;
  T2 v6481;
  T3 v6488;
  }
enum _enum_T16 {None, Some}
struct T16 {
  _enum_T16 which;
  bool _None;
  address payable _Some;
  }
struct T17 {
  T16 _acceptedAddress;
  uint256 _activeOffers;
  T2 _config;
  bool _continue;
  bool _freeze;
  T3 _loanTerms;
  bool _loanTermsAccepted;
  uint256 _networkTokenBalance;
  uint256 _nonNetworkTokenBalance;
  uint256 _offers;
  }
struct T18 {
  address payable v2933;
  T2 v2934;
  address payable v2935;
  address payable v2938;
  address payable v2939;
  address payable[2] v2949;
  address payable v2953;
  uint256 v2956;
  T17 v2974;
  T12[2] v2981;
  uint256 v2982;
  T2 v3028;
  T3 v3035;
  }
struct T19 {
  uint256 elem0;
  T2 elem1;
  address payable elem2;
  T2 elem3;
  T3 elem4;
  address payable elem5;
  address payable elem6;
  }
struct T20 {
  address payable v2933;
  T2 v2934;
  address payable v2935;
  T2 v2936;
  T3 v2937;
  address payable v2938;
  address payable v2939;
  T12[2] v2948;
  address payable[2] v2949;
  }
struct T21 {
  address payable elem0;
  T2 elem1;
  address payable elem2;
  address payable elem3;
  address payable elem4;
  address payable[2] elem5;
  address payable elem6;
  uint256 elem7;
  T17 elem8;
  uint256 elem9;
  T12[2] elem10;
  uint256 elem11;
  }
struct T22 {
  uint256 elem0;
  address payable elem1;
  }
struct T23 {
  uint256 elem0;
  T22 elem1;
  }
struct T24 {
  bool elem0;
  uint256 elem1;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set13(T12[2] memory arr, uint256 idx, T12 memory val) internal  returns (T12[2] memory arrp) {
    for (uint256 i = 0; i < 2; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  function array_set15(address payable[2] memory arr, uint256 idx, address payable val) internal  returns (address payable[2] memory arrp) {
    for (uint256 i = 0; i < 2; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T19 _a);
  event _reach_e1(address _who, T5 _a);
  event _reach_e3(address _who, T5 _a);
  event _reach_e4(address _who, T11 _a);
  event _reach_oe_v3504(bool v0);
  event _reach_oe_v4067(bool v0);
  event _reach_oe_v4618(bool v0);
  event _reach_oe_v5177(bool v0);
  event _reach_oe_v5807(bool v0);
  event _reach_oe_v6443(T0 v0);
  receive () external payable {}
  fallback () external payable {}
  mapping (uint256 => T1) _reachm_0;
  function __reachm_0Ref(uint256 addr) internal view returns (T1 memory res) {
    if (_reachm_0[addr].which == _enum_T1.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(uint256 addr) external view returns (T1 memory res) {
    res = __reachm_0Ref(addr);
    }
  struct Memory {
    bool nil;
    bool _reachr_Admin_api_acceptOffer;
    bool _reachr_Admin_api_cancelLoanOfferandWithdrawCollateral;
    bool _reachr_Admin_api_updateLoanTerms_info;
    T2 _reachr_info_config;
    T3 _reachr_info_loanTerms;
    T1 _reachr_info_offer;
    bool _reachr_user_acceptLoan;
    bool _reachr_user_cancelOffer;
    T0 _reachr_user_makeOffer;
    }
  struct _F10562 {
    T4 v10518;
    T10 v10519;
    }
  function _reacha_Admin_api_acceptOffer(T0 memory _a, Memory memory _Memory) internal  {
    _F10562 memory _f;
    _f.v10518.elem0 = _a;
    _f.v10519.which = _enum_T10.Admin_api_acceptOffer0_170;
    _f.v10519._Admin_api_acceptOffer0_170 = _f.v10518;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10519;
    _reachi_4(_ja, _Memory);
    }
  struct _F10563 {
    T5 v10524;
    T10 v10525;
    }
  function _reacha_Admin_api_cancelLoanOfferandWithdrawCollateral(uint256 _a, Memory memory _Memory) internal  {
    _F10563 memory _f;
    _f.v10524.elem0 = _a;
    _f.v10525.which = _enum_T10.Admin_api_cancelLoanOfferandWithdrawCollateral0_170;
    _f.v10525._Admin_api_cancelLoanOfferandWithdrawCollateral0_170 = _f.v10524;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10525;
    _reachi_4(_ja, _Memory);
    }
  struct _F10564 {
    T6 v10530;
    T10 v10531;
    }
  function _reacha_Admin_api_updateLoanTerms_info(T3 memory _a, Memory memory _Memory) internal  {
    _F10564 memory _f;
    _f.v10530.elem0 = _a;
    _f.v10531.which = _enum_T10.Admin_api_updateLoanTerms_info0_170;
    _f.v10531._Admin_api_updateLoanTerms_info0_170 = _f.v10530;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10531;
    _reachi_4(_ja, _Memory);
    }
  function _reacha_info_config(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(7) /*'(./index.rsh:49:11:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T14 memory _svs) = abi.decode(current_svbs, (T14));
      _Memory._reachr_info_config = _svs.v6481;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(8) /*'(./index.rsh:49:11:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T18 memory _svs) = abi.decode(current_svbs, (T18));
      _Memory._reachr_info_config = _svs.v3028;
      }
    }
  function _reacha_info_loanTerms(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(9) /*'(./index.rsh:50:14:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T14 memory _svs) = abi.decode(current_svbs, (T14));
      _Memory._reachr_info_loanTerms = _svs.v6488;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(10) /*'(./index.rsh:50:14:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T18 memory _svs) = abi.decode(current_svbs, (T18));
      _Memory._reachr_info_loanTerms = _svs.v3035;
      }
    }
  function _reacha_info_offer(uint256 _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(11) /*'(./index.rsh:51:10:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T14 memory _svs) = abi.decode(current_svbs, (T14));
      _Memory._reachr_info_offer = (__reachm_0Ref((_a)));
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(12) /*'(./index.rsh:51:10:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T18 memory _svs) = abi.decode(current_svbs, (T18));
      _Memory._reachr_info_offer = (__reachm_0Ref((_a)));
      }
    }
  struct _F10568 {
    bool v10535;
    T10 v10536;
    }
  function _reacha_user_acceptLoan(bool _a, Memory memory _Memory) internal  {
    _F10568 memory _f;
    _f.v10536.which = _enum_T10.user_acceptLoan0_170;
    _f.v10536._user_acceptLoan0_170 = _f.v10535;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10536;
    _reachi_4(_ja, _Memory);
    }
  struct _F10569 {
    T5 v10540;
    T10 v10541;
    }
  function _reacha_user_cancelOffer(uint256 _a, Memory memory _Memory) internal  {
    _F10569 memory _f;
    _f.v10540.elem0 = _a;
    _f.v10541.which = _enum_T10.user_cancelOffer0_170;
    _f.v10541._user_cancelOffer0_170 = _f.v10540;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10541;
    _reachi_4(_ja, _Memory);
    }
  struct _F10570 {
    T9 v10546;
    T10 v10547;
    }
  function _reacha_user_makeOffer(T8 memory _a, Memory memory _Memory) internal  {
    _F10570 memory _f;
    _f.v10546.elem0 = _a;
    _f.v10547.which = _enum_T10.user_makeOffer0_170;
    _f.v10547._user_makeOffer0_170 = _f.v10546;
    T11  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10547;
    _reachi_4(_ja, _Memory);
    }
  struct _F10571 {
    T12 v2904;
    T12[2] v2905;
    address payable[2] v2906;
    T12[2] v2944;
    }
  function _reachi_0(T19 memory _a, Memory memory _Memory) internal  {
    _F10571 memory _f;
    reachRequire((! locked), uint256(13) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(14) /*'time check at ./index.rsh:83:5:dot'*/);
    _f.v2904.elem0 = uint256(0);
    _f.v2904.elem1 = uint256(0);
    _f.v2904.elem2 = false;
    _f.v2905[0] = _f.v2904;
    _f.v2905[1] = _f.v2904;
    _f.v2906[0] = payable(address(0));
    _f.v2906[1] = payable(address(0));
    _f.v2944 = array_set13(_f.v2905, uint256(0), (T12({elem0: uint256(0), elem1: (_f.v2905[uint256(0)]).elem1, elem2: (_f.v2905[uint256(0)]).elem2})));
    reachRequire(((((_a.elem6) == (_a.elem2)) ? false : true)), uint256(15) /*'(./index.rsh:83:5:dot,[],Just "non-network tokens distinct")'*/);
    
    
    reachRequire((msg.value == uint256(0)), uint256(16) /*'(./index.rsh:83:5:dot,[],"verify network token pay amount")'*/);
    T20 memory nsvs;
    nsvs.v2933 = payable(msg.sender);
    nsvs.v2934 = (_a.elem1);
    nsvs.v2935 = (_a.elem2);
    nsvs.v2936 = (_a.elem3);
    nsvs.v2937 = (_a.elem4);
    nsvs.v2938 = (_a.elem5);
    nsvs.v2939 = (_a.elem6);
    nsvs.v2948 = (array_set13(_f.v2944, uint256(1), (T12({elem0: uint256(0), elem1: (_f.v2944[uint256(1)]).elem1, elem2: (_f.v2944[uint256(1)]).elem2}))));
    nsvs.v2949 = (array_set15((array_set15(_f.v2906, uint256(0), (_a.elem2))), uint256(1), (_a.elem6)));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F10572 {
    T12[2] v2962;
    T16 v2972;
    T17 v2973;
    }
  function _reachi_1(T5 memory _a, Memory memory _Memory) internal  {
    _F10572 memory _f;
    reachRequire((current_step == uint256(1)), uint256(17) /*'state check at ./index.rsh:93:5:dot'*/);
    (T20 memory _svs) = abi.decode(current_svbs, (T20));
    reachRequire((! locked), uint256(18) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(19) /*'time check at ./index.rsh:93:5:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(20) /*'(./index.rsh:93:5:dot,[],"verify network token pay amount")'*/);
    _f.v2962 = array_set13(_svs.v2948, uint256(0), (T12({elem0: (unsafeAdd(((_svs.v2948[uint256(0)]).elem0), (_svs.v2934._number_of_tokens_to_deposit))), elem1: (_svs.v2948[uint256(0)]).elem1, elem2: (_svs.v2948[uint256(0)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2935, (_svs.v2934._number_of_tokens_to_deposit))), uint256(21) /*'(./index.rsh:93:5:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v2933 == payable(msg.sender))), uint256(22) /*'(./index.rsh:93:5:dot,[],Just "sender correct")'*/);
    _f.v2972.which = _enum_T16.None;
    _f.v2972._None = false;
    _f.v2973._acceptedAddress = _f.v2972;
    _f.v2973._activeOffers = uint256(0);
    _f.v2973._config = _svs.v2936;
    _f.v2973._continue = true;
    _f.v2973._freeze = false;
    _f.v2973._loanTerms = _svs.v2937;
    _f.v2973._loanTermsAccepted = false;
    _f.v2973._networkTokenBalance = uint256(0);
    _f.v2973._nonNetworkTokenBalance = ((_f.v2962[uint256(1)]).elem0);
    _f.v2973._offers = uint256(0);
    T21  memory _ja;
    _ja.elem0 = _svs.v2933;
    _ja.elem1 = _svs.v2934;
    _ja.elem2 = _svs.v2935;
    _ja.elem3 = _svs.v2938;
    _ja.elem4 = _svs.v2939;
    _ja.elem5 = _svs.v2949;
    _ja.elem6 = payable(msg.sender);
    _ja.elem7 = (_svs.v2934._number_of_tokens_to_deposit);
    _ja.elem8 = _f.v2973;
    _ja.elem9 = uint256(block.number);
    _ja.elem10 = _f.v2962;
    _ja.elem11 = uint256(0);
    _reachl_2(_ja, _Memory);
    }
  function _reachi_3(T5 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(3)), uint256(23) /*'state check at ./index.rsh:382:5:dot'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    reachRequire((! locked), uint256(24) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(25) /*'time check at ./index.rsh:382:5:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(26) /*'(./index.rsh:382:5:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v2933 == payable(msg.sender))), uint256(27) /*'(./index.rsh:382:5:dot,[],Just "sender correct")'*/);
    _svs.v2933.transfer(_svs.v2982);
    safeTokenTransfer(_svs.v2935, _svs.v2933, ((_svs.v2981[uint256(0)]).elem0));
    safeTokenTransfer(_svs.v2939, _svs.v2933, (((array_set13(_svs.v2981, uint256(0), (T12({elem0: (unsafeSub(((_svs.v2981[uint256(0)]).elem0), ((_svs.v2981[uint256(0)]).elem0))), elem1: (_svs.v2981[uint256(0)]).elem1, elem2: (_svs.v2981[uint256(0)]).elem2}))))[uint256(1)]).elem0));
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  struct _F10574 {
    T4 v3349;
    T1 v3367;
    T0 v3502;
    T16 v3527;
    T17 v3528;
    T17 v4084;
    T6 v4393;
    T17 v4638;
    T22 v4987;
    T23 v4988;
    T22 v4989;
    T23 v4990;
    T23 v4991;
    T12[2] v5048;
    T24 v5191;
    T24 v5210;
    T24 v5211;
    address payable v5212;
    T24 v5219;
    T24 v5220;
    T24 v5228;
    T24 v5229;
    address payable v5230;
    T24 v5237;
    T24 v5238;
    T16 v5259;
    T17 v5260;
    T5 v5437;
    T1 v5516;
    T0 v5520;
    T0 v5521;
    T22 v5535;
    T23 v5818;
    T22 v5819;
    T23 v5820;
    T23 v5821;
    uint256 v5830;
    T24 v5831;
    T24 v5850;
    T24 v5851;
    address payable v5852;
    T24 v5859;
    T24 v5860;
    T24 v5868;
    T24 v5869;
    address payable v5870;
    T24 v5877;
    T24 v5878;
    T12[2] v5884;
    uint256 v5896;
    T17 v5901;
    T17 v5906;
    T9 v5959;
    bool v6071;
    T22 v6073;
    T23 v6074;
    T22 v6075;
    T23 v6076;
    T23 v6077;
    uint256 v6086;
    T12[2] v6092;
    T0 v6443;
    uint256 v6470;
    uint256 v6472;
    T17 v6475;
    T17 v6479;
    }
  function _reachi_4(T11 memory _a, Memory memory _Memory) internal  {
    _F10574 memory _f;
    reachRequire((current_step == uint256(5)), uint256(28) /*'state check at ./index.rsh:115:42:dot'*/);
    (T18 memory _svs) = abi.decode(current_svbs, (T18));
    reachRequire((! locked), uint256(29) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(30) /*'time check at ./index.rsh:115:42:dot'*/);
    if ((_a.elem1).which == _enum_T10.Admin_api_acceptOffer0_170) {
    _f.v3349 = (_a.elem1)._Admin_api_acceptOffer0_170;
    reachRequire((((payable(msg.sender) == _svs.v2933) ? true : (_svs.v2938 == payable(msg.sender)))), uint256(31) /*'(reach standard library:57:5:application,[at ./index.rsh:221:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "The current user trying to access this interface is not Admin")'*/);
    reachRequire((((_svs.v2974._loanTermsAccepted) ? false : true)), uint256(32) /*'(reach standard library:57:5:application,[at ./index.rsh:225:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "An offer has already been accepted")'*/);
    reachRequire(((_svs.v2974._freeze)), uint256(33) /*'(reach standard library:57:5:application,[at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:229:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp),at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Contract is frozen")'*/);
    _f.v3367 = __reachm_0Ref(((_f.v3349.elem0)._offerId));
    reachRequire((((uint256(_f.v3367.which)) == uint256(1))), uint256(34) /*'(reach standard library:57:5:application,[at ./index.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:220:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:220:42:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Offer id doesn't exist")'*/);
    reachRequire((msg.value == uint256(0)), uint256(35) /*'(./index.rsh:115:42:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2939, uint256(0))), uint256(36) /*'(./index.rsh:115:42:dot,[],"verify non-network token pay amount")'*/);
    _f.v3502._amount = uint256(0);
    _f.v3502._borrower = _svs.v2953;
    _f.v3502._offerId = uint256(0);
    _f.v3502._payWithNetworkToken = false;
    _f.v3502._rejected = false;
    emit _reach_oe_v3504( (false));
    _Memory._reachr_Admin_api_acceptOffer = (false);
    _f.v3527.which = _enum_T16.Some;
    _f.v3527._Some = (((_f.v3367.which == _enum_T1.Some ? _f.v3367._Some : _f.v3502))._borrower);
    _f.v3528._acceptedAddress = _f.v3527;
    _f.v3528._activeOffers = (_svs.v2974._activeOffers);
    _f.v3528._config = _svs.v3028;
    _f.v3528._continue = (_svs.v2974._continue);
    _f.v3528._freeze = true;
    _f.v3528._loanTerms = _svs.v3035;
    _f.v3528._loanTermsAccepted = true;
    _f.v3528._networkTokenBalance = (_svs.v2974._networkTokenBalance);
    _f.v3528._nonNetworkTokenBalance = (_svs.v2974._nonNetworkTokenBalance);
    _f.v3528._offers = (_svs.v2974._offers);
    T21  memory _ja;
    _ja.elem0 = _svs.v2933;
    _ja.elem1 = _svs.v2934;
    _ja.elem2 = _svs.v2935;
    _ja.elem3 = _svs.v2938;
    _ja.elem4 = _svs.v2939;
    _ja.elem5 = _svs.v2949;
    _ja.elem6 = _svs.v2953;
    _ja.elem7 = _svs.v2956;
    _ja.elem8 = _f.v3528;
    _ja.elem9 = uint256(block.number);
    _ja.elem10 = _svs.v2981;
    _ja.elem11 = _svs.v2982;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.Admin_api_cancelLoanOfferandWithdrawCollateral0_170) {
    reachRequire((((payable(msg.sender) == _svs.v2933) ? true : (_svs.v2938 == payable(msg.sender)))), uint256(37) /*'(reach standard library:57:5:application,[at ./index.rsh:201:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "The current user trying to access this interface is not Admin")'*/);
    reachRequire((((_svs.v2974._loanTermsAccepted) ? false : true)), uint256(38) /*'(reach standard library:57:5:application,[at ./index.rsh:205:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Cannot cancel loan or withdraw collateral when loan terms have been accepted")'*/);
    reachRequire(((_svs.v2974._freeze)), uint256(39) /*'(reach standard library:57:5:application,[at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:209:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp),at ./index.rsh:200:70:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:200:70:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Contract is frozen")'*/);
    reachRequire((msg.value == uint256(0)), uint256(40) /*'(./index.rsh:115:42:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2939, uint256(0))), uint256(41) /*'(./index.rsh:115:42:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4067( (false));
    _Memory._reachr_Admin_api_cancelLoanOfferandWithdrawCollateral = (false);
    _f.v4084._acceptedAddress = (_svs.v2974._acceptedAddress);
    _f.v4084._activeOffers = (_svs.v2974._activeOffers);
    _f.v4084._config = _svs.v3028;
    _f.v4084._continue = false;
    _f.v4084._freeze = true;
    _f.v4084._loanTerms = _svs.v3035;
    _f.v4084._loanTermsAccepted = (_svs.v2974._loanTermsAccepted);
    _f.v4084._networkTokenBalance = (_svs.v2974._networkTokenBalance);
    _f.v4084._nonNetworkTokenBalance = (_svs.v2974._nonNetworkTokenBalance);
    _f.v4084._offers = (_svs.v2974._offers);
    T21  memory _ja;
    _ja.elem0 = _svs.v2933;
    _ja.elem1 = _svs.v2934;
    _ja.elem2 = _svs.v2935;
    _ja.elem3 = _svs.v2938;
    _ja.elem4 = _svs.v2939;
    _ja.elem5 = _svs.v2949;
    _ja.elem6 = _svs.v2953;
    _ja.elem7 = _svs.v2956;
    _ja.elem8 = _f.v4084;
    _ja.elem9 = uint256(block.number);
    _ja.elem10 = _svs.v2981;
    _ja.elem11 = _svs.v2982;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.Admin_api_updateLoanTerms_info0_170) {
    _f.v4393 = (_a.elem1)._Admin_api_updateLoanTerms_info0_170;
    reachRequire((((payable(msg.sender) == _svs.v2933) ? true : (_svs.v2938 == payable(msg.sender)))), uint256(42) /*'(reach standard library:57:5:application,[at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "The current user trying to access this interface is not Admin")'*/);
    reachRequire((((_svs.v2974._loanTermsAccepted) ? false : true)), uint256(43) /*'(reach standard library:57:5:application,[at ./index.rsh:187:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:182:54:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:182:54:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Cannot update loan terms after Loan terms accepted")'*/);
    reachRequire((msg.value == uint256(0)), uint256(44) /*'(./index.rsh:115:42:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2939, uint256(0))), uint256(45) /*'(./index.rsh:115:42:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v4618( (false));
    _Memory._reachr_Admin_api_updateLoanTerms_info = (false);
    _f.v4638._acceptedAddress = (_svs.v2974._acceptedAddress);
    _f.v4638._activeOffers = (_svs.v2974._activeOffers);
    _f.v4638._config = _svs.v3028;
    _f.v4638._continue = (_svs.v2974._continue);
    _f.v4638._freeze = (_svs.v2974._freeze);
    _f.v4638._loanTerms = (_f.v4393.elem0);
    _f.v4638._loanTermsAccepted = (_svs.v2974._loanTermsAccepted);
    _f.v4638._networkTokenBalance = (_svs.v2974._networkTokenBalance);
    _f.v4638._nonNetworkTokenBalance = (_svs.v2974._nonNetworkTokenBalance);
    _f.v4638._offers = (_svs.v2974._offers);
    T21  memory _ja;
    _ja.elem0 = _svs.v2933;
    _ja.elem1 = _svs.v2934;
    _ja.elem2 = _svs.v2935;
    _ja.elem3 = _svs.v2938;
    _ja.elem4 = _svs.v2939;
    _ja.elem5 = _svs.v2949;
    _ja.elem6 = _svs.v2953;
    _ja.elem7 = _svs.v2956;
    _ja.elem8 = _f.v4638;
    _ja.elem9 = uint256(block.number);
    _ja.elem10 = _svs.v2981;
    _ja.elem11 = _svs.v2982;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.user_acceptLoan0_170) {
    reachRequire(((_svs.v2974._freeze)), uint256(46) /*'(reach standard library:57:5:application,[at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:247:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp),at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Contract is frozen")'*/);
    reachRequire((((_svs.v2974._loanTermsAccepted) ? false : true)), uint256(47) /*'(reach standard library:57:5:application,[at ./index.rsh:249:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:246:31:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:246:31:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Offer already accepted")'*/);
    _f.v4987.elem0 = uint256(0);
    _f.v4987.elem1 = _svs.v2939;
    _f.v4988.elem0 = _svs.v2956;
    _f.v4988.elem1 = _f.v4987;
    _f.v4989.elem0 = _svs.v2956;
    _f.v4989.elem1 = _svs.v2939;
    _f.v4990.elem0 = uint256(0);
    _f.v4990.elem1 = _f.v4989;
    _f.v4991 = (_svs.v2934._prefersNetworkToken) ? _f.v4988 : _f.v4990;
    reachRequire((msg.value == (_f.v4991.elem0)), uint256(48) /*'(./index.rsh:115:42:dot,[],"verify network token pay amount")'*/);
    _f.v5048 = array_set13(_svs.v2981, uint256(1), (T12({elem0: (unsafeAdd(((_svs.v2981[uint256(1)]).elem0), ((_f.v4991.elem1).elem0))), elem1: (_svs.v2981[uint256(1)]).elem1, elem2: (_svs.v2981[uint256(1)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2939, ((_f.v4991.elem1).elem0))), uint256(49) /*'(./index.rsh:115:42:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v5177( (false));
    _Memory._reachr_user_acceptLoan = (false);
    _svs.v2933.transfer((_f.v4991.elem0));
    _f.v5191.elem0 = false;
    _f.v5191.elem1 = uint256(0);
    _f.v5211 = _f.v5191;
    for (uint256 v5213 = 0; v5213 < 2; v5213++){
      _f.v5212 = _svs.v2949[v5213];
      _f.v5219.elem0 = false;
      _f.v5219.elem1 = (unsafeAdd((_f.v5211.elem1), uint256(1)));
      _f.v5220.elem0 = true;
      _f.v5220.elem1 = (_f.v5211.elem1);
      _f.v5211 = (((_f.v5211.elem0) ? true : (_f.v5212 == ((_f.v4991.elem1).elem1))) ? _f.v5220 : _f.v5219);
      }
    _f.v5210 = _f.v5211;
    _f.v5229 = _f.v5191;
    for (uint256 v5231 = 0; v5231 < 2; v5231++){
      _f.v5230 = _svs.v2949[v5231];
      _f.v5237.elem0 = false;
      _f.v5237.elem1 = (unsafeAdd((_f.v5229.elem1), uint256(1)));
      _f.v5238.elem0 = true;
      _f.v5238.elem1 = (_f.v5229.elem1);
      _f.v5229 = (((_f.v5229.elem0) ? true : (_f.v5230 == ((_f.v4991.elem1).elem1))) ? _f.v5238 : _f.v5237);
      }
    _f.v5228 = _f.v5229;
    safeTokenTransfer(((_f.v4991.elem1).elem1), _svs.v2933, ((_f.v4991.elem1).elem0));
    _f.v5259.which = _enum_T16.Some;
    _f.v5259._Some = payable(msg.sender);
    _f.v5260._acceptedAddress = _f.v5259;
    _f.v5260._activeOffers = (safeAdd((_svs.v2974._activeOffers), uint256(1)));
    _f.v5260._config = _svs.v3028;
    _f.v5260._continue = (_svs.v2974._continue);
    _f.v5260._freeze = true;
    _f.v5260._loanTerms = _svs.v3035;
    _f.v5260._loanTermsAccepted = true;
    _f.v5260._networkTokenBalance = (_svs.v2974._networkTokenBalance);
    _f.v5260._nonNetworkTokenBalance = (_svs.v2974._nonNetworkTokenBalance);
    _f.v5260._offers = (safeAdd((_svs.v2974._offers), uint256(1)));
    T21  memory _ja;
    _ja.elem0 = _svs.v2933;
    _ja.elem1 = _svs.v2934;
    _ja.elem2 = _svs.v2935;
    _ja.elem3 = _svs.v2938;
    _ja.elem4 = _svs.v2939;
    _ja.elem5 = _svs.v2949;
    _ja.elem6 = _svs.v2953;
    _ja.elem7 = _svs.v2956;
    _ja.elem8 = _f.v5260;
    _ja.elem9 = uint256(block.number);
    _ja.elem10 = (array_set13(_f.v5048, (_f.v5228.elem1), (T12({elem0: (unsafeSub(((_f.v5048[(_f.v5210.elem1)]).elem0), ((_f.v4991.elem1).elem0))), elem1: (_f.v5048[(_f.v5228.elem1)]).elem1, elem2: (_f.v5048[(_f.v5228.elem1)]).elem2}))));
    _ja.elem11 = (unsafeSub((unsafeAdd(_svs.v2982, (_f.v4991.elem0))), (_f.v4991.elem0)));
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T10.user_cancelOffer0_170) {
    _f.v5437 = (_a.elem1)._user_cancelOffer0_170;
    _f.v5516 = __reachm_0Ref((_f.v5437.elem0));
    reachRequire((((uint256(_f.v5516.which)) == uint256(1))), uint256(50) /*'(reach standard library:57:5:application,[at ./index.rsh:314:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Offer id doesn't exist!")'*/);
    _f.v5520._amount = uint256(0);
    _f.v5520._borrower = _svs.v2953;
    _f.v5520._offerId = uint256(0);
    _f.v5520._payWithNetworkToken = false;
    _f.v5520._rejected = false;
    _f.v5521 = (_f.v5516.which == _enum_T1.Some ? _f.v5516._Some : _f.v5520);
    reachRequire(((payable(msg.sender) == (_f.v5521._borrower))), uint256(51) /*'(reach standard library:57:5:application,[at ./index.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Loan owner mismatch")'*/);
    reachRequire((((_f.v5521._payWithNetworkToken) ? (_svs.v2982 >= (_f.v5521._amount)) : (((_svs.v2981[uint256(1)]).elem0) >= (_f.v5521._amount)))), uint256(52) /*'(reach standard library:57:5:application,[at ./index.rsh:317:12:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:312:39:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:312:39:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Insufficient contract funds")'*/);
    _f.v5535.elem0 = uint256(0);
    _f.v5535.elem1 = _svs.v2939;
    reachRequire((msg.value == uint256(0)), uint256(53) /*'(./index.rsh:115:42:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v2939, uint256(0))), uint256(54) /*'(./index.rsh:115:42:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v5807( (false));
    _Memory._reachr_user_cancelOffer = (false);
    _f.v5818.elem0 = (_f.v5521._amount);
    _f.v5818.elem1 = _f.v5535;
    _f.v5819.elem0 = (_f.v5521._amount);
    _f.v5819.elem1 = _svs.v2939;
    _f.v5820.elem0 = uint256(0);
    _f.v5820.elem1 = _f.v5819;
    _f.v5821 = (_f.v5521._payWithNetworkToken) ? _f.v5818 : _f.v5820;
    _f.v5830 = unsafeSub(_svs.v2982, (_f.v5821.elem0));
    (_f.v5521._borrower).transfer((_f.v5821.elem0));
    _f.v5831.elem0 = false;
    _f.v5831.elem1 = uint256(0);
    _f.v5851 = _f.v5831;
    for (uint256 v5853 = 0; v5853 < 2; v5853++){
      _f.v5852 = _svs.v2949[v5853];
      _f.v5859.elem0 = false;
      _f.v5859.elem1 = (unsafeAdd((_f.v5851.elem1), uint256(1)));
      _f.v5860.elem0 = true;
      _f.v5860.elem1 = (_f.v5851.elem1);
      _f.v5851 = (((_f.v5851.elem0) ? true : (_f.v5852 == ((_f.v5821.elem1).elem1))) ? _f.v5860 : _f.v5859);
      }
    _f.v5850 = _f.v5851;
    _f.v5869 = _f.v5831;
    for (uint256 v5871 = 0; v5871 < 2; v5871++){
      _f.v5870 = _svs.v2949[v5871];
      _f.v5877.elem0 = false;
      _f.v5877.elem1 = (unsafeAdd((_f.v5869.elem1), uint256(1)));
      _f.v5878.elem0 = true;
      _f.v5878.elem1 = (_f.v5869.elem1);
      _f.v5869 = (((_f.v5869.elem0) ? true : (_f.v5870 == ((_f.v5821.elem1).elem1))) ? _f.v5878 : _f.v5877);
      }
    _f.v5868 = _f.v5869;
    _f.v5884 = array_set13(_svs.v2981, (_f.v5868.elem1), (T12({elem0: (unsafeSub(((_svs.v2981[(_f.v5850.elem1)]).elem0), ((_f.v5821.elem1).elem0))), elem1: (_svs.v2981[(_f.v5868.elem1)]).elem1, elem2: (_svs.v2981[(_f.v5868.elem1)]).elem2})));
    safeTokenTransfer(((_f.v5821.elem1).elem1), (_f.v5521._borrower), ((_f.v5821.elem1).elem0));
    delete _reachm_0[(_f.v5437.elem0)];
    _f.v5896 = safeSub((_svs.v2974._activeOffers), uint256(1));
    if ((_f.v5521._payWithNetworkToken)) {
      _f.v5901._acceptedAddress = (_svs.v2974._acceptedAddress);
      _f.v5901._activeOffers = _f.v5896;
      _f.v5901._config = _svs.v3028;
      _f.v5901._continue = (_svs.v2974._continue);
      _f.v5901._freeze = (_svs.v2974._freeze);
      _f.v5901._loanTerms = _svs.v3035;
      _f.v5901._loanTermsAccepted = (_svs.v2974._loanTermsAccepted);
      _f.v5901._networkTokenBalance = (safeSub((_svs.v2974._networkTokenBalance), (_f.v5521._amount)));
      _f.v5901._nonNetworkTokenBalance = (_svs.v2974._nonNetworkTokenBalance);
      _f.v5901._offers = (_svs.v2974._offers);
      T21  memory _ja;
      _ja.elem0 = _svs.v2933;
      _ja.elem1 = _svs.v2934;
      _ja.elem2 = _svs.v2935;
      _ja.elem3 = _svs.v2938;
      _ja.elem4 = _svs.v2939;
      _ja.elem5 = _svs.v2949;
      _ja.elem6 = _svs.v2953;
      _ja.elem7 = _svs.v2956;
      _ja.elem8 = _f.v5901;
      _ja.elem9 = uint256(block.number);
      _ja.elem10 = _f.v5884;
      _ja.elem11 = _f.v5830;
      _reachl_2(_ja, _Memory);
      }
    else {
      _f.v5906._acceptedAddress = (_svs.v2974._acceptedAddress);
      _f.v5906._activeOffers = _f.v5896;
      _f.v5906._config = _svs.v3028;
      _f.v5906._continue = (_svs.v2974._continue);
      _f.v5906._freeze = (_svs.v2974._freeze);
      _f.v5906._loanTerms = _svs.v3035;
      _f.v5906._loanTermsAccepted = (_svs.v2974._loanTermsAccepted);
      _f.v5906._networkTokenBalance = (_svs.v2974._networkTokenBalance);
      _f.v5906._nonNetworkTokenBalance = (safeSub((_svs.v2974._nonNetworkTokenBalance), (_f.v5521._amount)));
      _f.v5906._offers = (_svs.v2974._offers);
      T21  memory _ja;
      _ja.elem0 = _svs.v2933;
      _ja.elem1 = _svs.v2934;
      _ja.elem2 = _svs.v2935;
      _ja.elem3 = _svs.v2938;
      _ja.elem4 = _svs.v2939;
      _ja.elem5 = _svs.v2949;
      _ja.elem6 = _svs.v2953;
      _ja.elem7 = _svs.v2956;
      _ja.elem8 = _f.v5906;
      _ja.elem9 = uint256(block.number);
      _ja.elem10 = _f.v5884;
      _ja.elem11 = _f.v5830;
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T10.user_makeOffer0_170) {
    _f.v5959 = (_a.elem1)._user_makeOffer0_170;
    reachRequire(((_svs.v2974._freeze)), uint256(55) /*'(reach standard library:57:5:application,[at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./index.rsh:270:16:application call to "runChecks" (defined at: ./index.rsh:117:28:function exp),at ./index.rsh:269:67:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:269:67:function exp),at ./index.rsh:115:42:application call to [unknown function] (defined at: ./index.rsh:115:42:function exp),at ./index.rsh:138:14:application call to [unknown function] (defined at: ./index.rsh:138:14:function exp)],Just "Contract is frozen")'*/);
    _f.v6071 = (_svs.v2934._shouldPayInOnlyNetworkToken) ? true : ((_f.v5959.elem0)._shouldPayWithNetworkToken);
    _f.v6073.elem0 = uint256(0);
    _f.v6073.elem1 = _svs.v2939;
    _f.v6074.elem0 = ((_f.v5959.elem0)._amount);
    _f.v6074.elem1 = _f.v6073;
    _f.v6075.elem0 = ((_f.v5959.elem0)._amount);
    _f.v6075.elem1 = _svs.v2939;
    _f.v6076.elem0 = uint256(0);
    _f.v6076.elem1 = _f.v6075;
    _f.v6077 = _f.v6071 ? _f.v6074 : _f.v6076;
    _f.v6086 = unsafeAdd(_svs.v2982, (_f.v6077.elem0));
    reachRequire((msg.value == (_f.v6077.elem0)), uint256(56) /*'(./index.rsh:115:42:dot,[],"verify network token pay amount")'*/);
    _f.v6092 = array_set13(_svs.v2981, uint256(1), (T12({elem0: (unsafeAdd(((_svs.v2981[uint256(1)]).elem0), ((_f.v6077.elem1).elem0))), elem1: (_svs.v2981[uint256(1)]).elem1, elem2: (_svs.v2981[uint256(1)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v2939, ((_f.v6077.elem1).elem0))), uint256(57) /*'(./index.rsh:115:42:dot,[],"verify non-network token pay amount")'*/);
    _f.v6443._amount = ((_f.v5959.elem0)._amount);
    _f.v6443._borrower = payable(msg.sender);
    _f.v6443._offerId = (_svs.v2974._offers);
    _f.v6443._payWithNetworkToken = _f.v6071;
    _f.v6443._rejected = false;
    _reachm_0[(_svs.v2974._offers)].which = _enum_T1.Some;
    _reachm_0[(_svs.v2974._offers)]._Some = _f.v6443;
    
    emit _reach_oe_v6443( _f.v6443);
    _Memory._reachr_user_makeOffer = _f.v6443;
    _f.v6470 = safeAdd((_svs.v2974._offers), uint256(1));
    _f.v6472 = safeAdd((_svs.v2974._activeOffers), uint256(1));
    if (_f.v6071) {
      _f.v6475._acceptedAddress = (_svs.v2974._acceptedAddress);
      _f.v6475._activeOffers = _f.v6472;
      _f.v6475._config = _svs.v3028;
      _f.v6475._continue = (_svs.v2974._continue);
      _f.v6475._freeze = true;
      _f.v6475._loanTerms = _svs.v3035;
      _f.v6475._loanTermsAccepted = (_svs.v2974._loanTermsAccepted);
      _f.v6475._networkTokenBalance = (safeAdd((_svs.v2974._networkTokenBalance), ((_f.v5959.elem0)._amount)));
      _f.v6475._nonNetworkTokenBalance = (_svs.v2974._nonNetworkTokenBalance);
      _f.v6475._offers = _f.v6470;
      T21  memory _ja;
      _ja.elem0 = _svs.v2933;
      _ja.elem1 = _svs.v2934;
      _ja.elem2 = _svs.v2935;
      _ja.elem3 = _svs.v2938;
      _ja.elem4 = _svs.v2939;
      _ja.elem5 = _svs.v2949;
      _ja.elem6 = _svs.v2953;
      _ja.elem7 = _svs.v2956;
      _ja.elem8 = _f.v6475;
      _ja.elem9 = uint256(block.number);
      _ja.elem10 = _f.v6092;
      _ja.elem11 = _f.v6086;
      _reachl_2(_ja, _Memory);
      }
    else {
      _f.v6479._acceptedAddress = (_svs.v2974._acceptedAddress);
      _f.v6479._activeOffers = _f.v6472;
      _f.v6479._config = _svs.v3028;
      _f.v6479._continue = (_svs.v2974._continue);
      _f.v6479._freeze = true;
      _f.v6479._loanTerms = _svs.v3035;
      _f.v6479._loanTermsAccepted = (_svs.v2974._loanTermsAccepted);
      _f.v6479._networkTokenBalance = (_svs.v2974._networkTokenBalance);
      _f.v6479._nonNetworkTokenBalance = (safeAdd((_svs.v2974._nonNetworkTokenBalance), ((_f.v5959.elem0)._amount)));
      _f.v6479._offers = _f.v6470;
      T21  memory _ja;
      _ja.elem0 = _svs.v2933;
      _ja.elem1 = _svs.v2934;
      _ja.elem2 = _svs.v2935;
      _ja.elem3 = _svs.v2938;
      _ja.elem4 = _svs.v2939;
      _ja.elem5 = _svs.v2949;
      _ja.elem6 = _svs.v2953;
      _ja.elem7 = _svs.v2956;
      _ja.elem8 = _f.v6479;
      _ja.elem9 = uint256(block.number);
      _ja.elem10 = _f.v6092;
      _ja.elem11 = _f.v6086;
      _reachl_2(_ja, _Memory);
      }
    }
    }
  function _reachl_2(T21 memory _a, Memory memory _Memory) internal  {
    if (((_a.elem8._continue) ? true : (((_a.elem8._activeOffers) == uint256(0)) ? false : true))) {
      T18 memory nsvs;
      nsvs.v2933 = _a.elem0;
      nsvs.v2934 = _a.elem1;
      nsvs.v2935 = _a.elem2;
      nsvs.v2938 = _a.elem3;
      nsvs.v2939 = _a.elem4;
      nsvs.v2949 = _a.elem5;
      nsvs.v2953 = _a.elem6;
      nsvs.v2956 = _a.elem7;
      nsvs.v2974 = _a.elem8;
      nsvs.v2981 = _a.elem10;
      nsvs.v2982 = _a.elem11;
      nsvs.v3028 = (_a.elem8._config);
      nsvs.v3035 = (_a.elem8._loanTerms);
      current_step = uint256(5);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      T14 memory nsvs;
      nsvs.v2933 = _a.elem0;
      nsvs.v2935 = _a.elem2;
      nsvs.v2939 = _a.elem4;
      nsvs.v2981 = _a.elem10;
      nsvs.v2982 = _a.elem11;
      nsvs.v6481 = (_a.elem8._config);
      nsvs.v6488 = (_a.elem8._loanTerms);
      current_step = uint256(3);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    }
  function Admin_api_acceptOffer(T0 calldata v10521) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_api_acceptOffer(v10521, _Memory);
    return _Memory._reachr_Admin_api_acceptOffer;
    }
  function Admin_api_cancelLoanOfferandWithdrawCollateral(uint256 v10527) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_api_cancelLoanOfferandWithdrawCollateral(v10527, _Memory);
    return _Memory._reachr_Admin_api_cancelLoanOfferandWithdrawCollateral;
    }
  function Admin_api_updateLoanTerms_info(T3 calldata v10533) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Admin_api_updateLoanTerms_info(v10533, _Memory);
    return _Memory._reachr_Admin_api_updateLoanTerms_info;
    }
  constructor(T19 memory v10552) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v10552, _Memory);
    }
  function _reachp_1(T5 calldata v10555) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v10555, _Memory);
    }
  function _reachp_3(T5 calldata v10558) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v10558, _Memory);
    }
  function _reachp_4(T11 calldata v10561) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v10561, _Memory);
    }
  function info_config() external view returns (T2 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_info_config(_ja, _Memory);
    return _Memory._reachr_info_config;
    }
  function info_loanTerms() external view returns (T3 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_info_loanTerms(_ja, _Memory);
    return _Memory._reachr_info_loanTerms;
    }
  function info_offer(uint256 v10515) external view returns (T1 memory) {
    Memory memory _Memory;
    _reacha_info_offer(v10515, _Memory);
    return _Memory._reachr_info_offer;
    }
  function user_acceptLoan() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_user_acceptLoan(_ja, _Memory);
    return _Memory._reachr_user_acceptLoan;
    }
  function user_cancelOffer(uint256 v10543) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_user_cancelOffer(v10543, _Memory);
    return _Memory._reachr_user_cancelOffer;
    }
  function user_makeOffer(T8 calldata v10549) external payable returns (T0 memory) {
    Memory memory _Memory;
    _reacha_user_makeOffer(v10549, _Memory);
    return _Memory._reachr_user_makeOffer;
    }
  }
