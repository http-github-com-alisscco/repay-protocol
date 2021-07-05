// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Accepted extends ethereum.Event {
  get params(): Accepted__Params {
    return new Accepted__Params(this);
  }
}

export class Accepted__Params {
  _event: Accepted;

  constructor(event: Accepted) {
    this._event = event;
  }

  get onBehlafOf(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get gas(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class WhitelistPaymaster__getGasAndDataLimitsResultLimitsStruct extends ethereum.Tuple {
  get acceptanceBudget(): BigInt {
    return this[0].toBigInt();
  }

  get preRelayedCallGasLimit(): BigInt {
    return this[1].toBigInt();
  }

  get postRelayedCallGasLimit(): BigInt {
    return this[2].toBigInt();
  }

  get calldataSizeLimit(): BigInt {
    return this[3].toBigInt();
  }
}

export class WhitelistPaymaster__preRelayedCallResult {
  value0: Bytes;
  value1: boolean;

  constructor(value0: Bytes, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBytes(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }
}

export class WhitelistPaymaster__preRelayedCallInputRelayRequestStruct extends ethereum.Tuple {
  get request(): WhitelistPaymaster__preRelayedCallInputRelayRequestRequestStruct {
    return this[0].toTuple() as WhitelistPaymaster__preRelayedCallInputRelayRequestRequestStruct;
  }

  get relayData(): WhitelistPaymaster__preRelayedCallInputRelayRequestRelayDataStruct {
    return this[1].toTuple() as WhitelistPaymaster__preRelayedCallInputRelayRequestRelayDataStruct;
  }
}

export class WhitelistPaymaster__preRelayedCallInputRelayRequestRequestStruct extends ethereum.Tuple {
  get from(): Address {
    return this[0].toAddress();
  }

  get to(): Address {
    return this[1].toAddress();
  }

  get value(): BigInt {
    return this[2].toBigInt();
  }

  get gas(): BigInt {
    return this[3].toBigInt();
  }

  get nonce(): BigInt {
    return this[4].toBigInt();
  }

  get data(): Bytes {
    return this[5].toBytes();
  }

  get validUntil(): BigInt {
    return this[6].toBigInt();
  }
}

export class WhitelistPaymaster__preRelayedCallInputRelayRequestRelayDataStruct extends ethereum.Tuple {
  get gasPrice(): BigInt {
    return this[0].toBigInt();
  }

  get pctRelayFee(): BigInt {
    return this[1].toBigInt();
  }

  get baseRelayFee(): BigInt {
    return this[2].toBigInt();
  }

  get relayWorker(): Address {
    return this[3].toAddress();
  }

  get paymaster(): Address {
    return this[4].toAddress();
  }

  get forwarder(): Address {
    return this[5].toAddress();
  }

  get paymasterData(): Bytes {
    return this[6].toBytes();
  }

  get clientId(): BigInt {
    return this[7].toBigInt();
  }
}

export class WhitelistPaymaster extends ethereum.SmartContract {
  static bind(address: Address): WhitelistPaymaster {
    return new WhitelistPaymaster("WhitelistPaymaster", address);
  }

  CALLDATA_SIZE_LIMIT(): BigInt {
    let result = super.call(
      "CALLDATA_SIZE_LIMIT",
      "CALLDATA_SIZE_LIMIT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_CALLDATA_SIZE_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "CALLDATA_SIZE_LIMIT",
      "CALLDATA_SIZE_LIMIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  FORWARDER_HUB_OVERHEAD(): BigInt {
    let result = super.call(
      "FORWARDER_HUB_OVERHEAD",
      "FORWARDER_HUB_OVERHEAD():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_FORWARDER_HUB_OVERHEAD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "FORWARDER_HUB_OVERHEAD",
      "FORWARDER_HUB_OVERHEAD():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PAYMASTER_ACCEPTANCE_BUDGET(): BigInt {
    let result = super.call(
      "PAYMASTER_ACCEPTANCE_BUDGET",
      "PAYMASTER_ACCEPTANCE_BUDGET():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PAYMASTER_ACCEPTANCE_BUDGET(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PAYMASTER_ACCEPTANCE_BUDGET",
      "PAYMASTER_ACCEPTANCE_BUDGET():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  POST_RELAYED_CALL_GAS_LIMIT(): BigInt {
    let result = super.call(
      "POST_RELAYED_CALL_GAS_LIMIT",
      "POST_RELAYED_CALL_GAS_LIMIT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_POST_RELAYED_CALL_GAS_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "POST_RELAYED_CALL_GAS_LIMIT",
      "POST_RELAYED_CALL_GAS_LIMIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRE_RELAYED_CALL_GAS_LIMIT(): BigInt {
    let result = super.call(
      "PRE_RELAYED_CALL_GAS_LIMIT",
      "PRE_RELAYED_CALL_GAS_LIMIT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRE_RELAYED_CALL_GAS_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRE_RELAYED_CALL_GAS_LIMIT",
      "PRE_RELAYED_CALL_GAS_LIMIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGasAndDataLimits(): WhitelistPaymaster__getGasAndDataLimitsResultLimitsStruct {
    let result = super.call(
      "getGasAndDataLimits",
      "getGasAndDataLimits():((uint256,uint256,uint256,uint256))",
      []
    );

    return result[0].toTuple() as WhitelistPaymaster__getGasAndDataLimitsResultLimitsStruct;
  }

  try_getGasAndDataLimits(): ethereum.CallResult<
    WhitelistPaymaster__getGasAndDataLimitsResultLimitsStruct
  > {
    let result = super.tryCall(
      "getGasAndDataLimits",
      "getGasAndDataLimits():((uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as WhitelistPaymaster__getGasAndDataLimitsResultLimitsStruct
    );
  }

  getHubAddr(): Address {
    let result = super.call("getHubAddr", "getHubAddr():(address)", []);

    return result[0].toAddress();
  }

  try_getHubAddr(): ethereum.CallResult<Address> {
    let result = super.tryCall("getHubAddr", "getHubAddr():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRelayHubDeposit(): BigInt {
    let result = super.call(
      "getRelayHubDeposit",
      "getRelayHubDeposit():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getRelayHubDeposit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRelayHubDeposit",
      "getRelayHubDeposit():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isWhitelistedSender(_sender: Address): boolean {
    let result = super.call(
      "isWhitelistedSender",
      "isWhitelistedSender(address):(bool)",
      [ethereum.Value.fromAddress(_sender)]
    );

    return result[0].toBoolean();
  }

  try_isWhitelistedSender(_sender: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhitelistedSender",
      "isWhitelistedSender(address):(bool)",
      [ethereum.Value.fromAddress(_sender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isWhitelistedTarget(_target: Address): boolean {
    let result = super.call(
      "isWhitelistedTarget",
      "isWhitelistedTarget(address):(bool)",
      [ethereum.Value.fromAddress(_target)]
    );

    return result[0].toBoolean();
  }

  try_isWhitelistedTarget(_target: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhitelistedTarget",
      "isWhitelistedTarget(address):(bool)",
      [ethereum.Value.fromAddress(_target)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  preRelayedCall(
    relayRequest: WhitelistPaymaster__preRelayedCallInputRelayRequestStruct,
    signature: Bytes,
    approvalData: Bytes,
    maxPossibleGas: BigInt
  ): WhitelistPaymaster__preRelayedCallResult {
    let result = super.call(
      "preRelayedCall",
      "preRelayedCall(((address,address,uint256,uint256,uint256,bytes,uint256),(uint256,uint256,uint256,address,address,address,bytes,uint256)),bytes,bytes,uint256):(bytes,bool)",
      [
        ethereum.Value.fromTuple(relayRequest),
        ethereum.Value.fromBytes(signature),
        ethereum.Value.fromBytes(approvalData),
        ethereum.Value.fromUnsignedBigInt(maxPossibleGas)
      ]
    );

    return new WhitelistPaymaster__preRelayedCallResult(
      result[0].toBytes(),
      result[1].toBoolean()
    );
  }

  try_preRelayedCall(
    relayRequest: WhitelistPaymaster__preRelayedCallInputRelayRequestStruct,
    signature: Bytes,
    approvalData: Bytes,
    maxPossibleGas: BigInt
  ): ethereum.CallResult<WhitelistPaymaster__preRelayedCallResult> {
    let result = super.tryCall(
      "preRelayedCall",
      "preRelayedCall(((address,address,uint256,uint256,uint256,bytes,uint256),(uint256,uint256,uint256,address,address,address,bytes,uint256)),bytes,bytes,uint256):(bytes,bool)",
      [
        ethereum.Value.fromTuple(relayRequest),
        ethereum.Value.fromBytes(signature),
        ethereum.Value.fromBytes(approvalData),
        ethereum.Value.fromUnsignedBigInt(maxPossibleGas)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WhitelistPaymaster__preRelayedCallResult(
        value[0].toBytes(),
        value[1].toBoolean()
      )
    );
  }

  senderWhitelist(param0: Address): boolean {
    let result = super.call(
      "senderWhitelist",
      "senderWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_senderWhitelist(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "senderWhitelist",
      "senderWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  targetWhitelist(param0: Address): boolean {
    let result = super.call(
      "targetWhitelist",
      "targetWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_targetWhitelist(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "targetWhitelist",
      "targetWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  trustedForwarder(): Address {
    let result = super.call(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_trustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  versionPaymaster(): string {
    let result = super.call(
      "versionPaymaster",
      "versionPaymaster():(string)",
      []
    );

    return result[0].toString();
  }

  try_versionPaymaster(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "versionPaymaster",
      "versionPaymaster():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class PostRelayedCallCall extends ethereum.Call {
  get inputs(): PostRelayedCallCall__Inputs {
    return new PostRelayedCallCall__Inputs(this);
  }

  get outputs(): PostRelayedCallCall__Outputs {
    return new PostRelayedCallCall__Outputs(this);
  }
}

export class PostRelayedCallCall__Inputs {
  _call: PostRelayedCallCall;

  constructor(call: PostRelayedCallCall) {
    this._call = call;
  }

  get context(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get success(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get gasUseWithoutPost(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get relayData(): PostRelayedCallCallRelayDataStruct {
    return this._call.inputValues[3].value.toTuple() as PostRelayedCallCallRelayDataStruct;
  }
}

export class PostRelayedCallCall__Outputs {
  _call: PostRelayedCallCall;

  constructor(call: PostRelayedCallCall) {
    this._call = call;
  }
}

export class PostRelayedCallCallRelayDataStruct extends ethereum.Tuple {
  get gasPrice(): BigInt {
    return this[0].toBigInt();
  }

  get pctRelayFee(): BigInt {
    return this[1].toBigInt();
  }

  get baseRelayFee(): BigInt {
    return this[2].toBigInt();
  }

  get relayWorker(): Address {
    return this[3].toAddress();
  }

  get paymaster(): Address {
    return this[4].toAddress();
  }

  get forwarder(): Address {
    return this[5].toAddress();
  }

  get paymasterData(): Bytes {
    return this[6].toBytes();
  }

  get clientId(): BigInt {
    return this[7].toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetRelayHubCall extends ethereum.Call {
  get inputs(): SetRelayHubCall__Inputs {
    return new SetRelayHubCall__Inputs(this);
  }

  get outputs(): SetRelayHubCall__Outputs {
    return new SetRelayHubCall__Outputs(this);
  }
}

export class SetRelayHubCall__Inputs {
  _call: SetRelayHubCall;

  constructor(call: SetRelayHubCall) {
    this._call = call;
  }

  get hub(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRelayHubCall__Outputs {
  _call: SetRelayHubCall;

  constructor(call: SetRelayHubCall) {
    this._call = call;
  }
}

export class SetTrustedForwarderCall extends ethereum.Call {
  get inputs(): SetTrustedForwarderCall__Inputs {
    return new SetTrustedForwarderCall__Inputs(this);
  }

  get outputs(): SetTrustedForwarderCall__Outputs {
    return new SetTrustedForwarderCall__Outputs(this);
  }
}

export class SetTrustedForwarderCall__Inputs {
  _call: SetTrustedForwarderCall;

  constructor(call: SetTrustedForwarderCall) {
    this._call = call;
  }

  get forwarder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTrustedForwarderCall__Outputs {
  _call: SetTrustedForwarderCall;

  constructor(call: SetTrustedForwarderCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WhitelistSenderCall extends ethereum.Call {
  get inputs(): WhitelistSenderCall__Inputs {
    return new WhitelistSenderCall__Inputs(this);
  }

  get outputs(): WhitelistSenderCall__Outputs {
    return new WhitelistSenderCall__Outputs(this);
  }
}

export class WhitelistSenderCall__Inputs {
  _call: WhitelistSenderCall;

  constructor(call: WhitelistSenderCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WhitelistSenderCall__Outputs {
  _call: WhitelistSenderCall;

  constructor(call: WhitelistSenderCall) {
    this._call = call;
  }
}

export class WhitelistTargetCall extends ethereum.Call {
  get inputs(): WhitelistTargetCall__Inputs {
    return new WhitelistTargetCall__Inputs(this);
  }

  get outputs(): WhitelistTargetCall__Outputs {
    return new WhitelistTargetCall__Outputs(this);
  }
}

export class WhitelistTargetCall__Inputs {
  _call: WhitelistTargetCall;

  constructor(call: WhitelistTargetCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WhitelistTargetCall__Outputs {
  _call: WhitelistTargetCall;

  constructor(call: WhitelistTargetCall) {
    this._call = call;
  }
}

export class WithdrawRelayHubDepositToCall extends ethereum.Call {
  get inputs(): WithdrawRelayHubDepositToCall__Inputs {
    return new WithdrawRelayHubDepositToCall__Inputs(this);
  }

  get outputs(): WithdrawRelayHubDepositToCall__Outputs {
    return new WithdrawRelayHubDepositToCall__Outputs(this);
  }
}

export class WithdrawRelayHubDepositToCall__Inputs {
  _call: WithdrawRelayHubDepositToCall;

  constructor(call: WithdrawRelayHubDepositToCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get target(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawRelayHubDepositToCall__Outputs {
  _call: WithdrawRelayHubDepositToCall;

  constructor(call: WithdrawRelayHubDepositToCall) {
    this._call = call;
  }
}
