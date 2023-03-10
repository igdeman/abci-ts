// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/p2p/conn.proto (package tendermint.p2p, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { PublicKey } from "../crypto/keys_pb.js";

/**
 * @generated from message tendermint.p2p.PacketPing
 */
export declare class PacketPing extends Message<PacketPing> {
  constructor(data?: PartialMessage<PacketPing>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.p2p.PacketPing";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketPing;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketPing;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketPing;

  static equals(a: PacketPing | PlainMessage<PacketPing> | undefined, b: PacketPing | PlainMessage<PacketPing> | undefined): boolean;
}

/**
 * @generated from message tendermint.p2p.PacketPong
 */
export declare class PacketPong extends Message<PacketPong> {
  constructor(data?: PartialMessage<PacketPong>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.p2p.PacketPong";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketPong;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketPong;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketPong;

  static equals(a: PacketPong | PlainMessage<PacketPong> | undefined, b: PacketPong | PlainMessage<PacketPong> | undefined): boolean;
}

/**
 * @generated from message tendermint.p2p.PacketMsg
 */
export declare class PacketMsg extends Message<PacketMsg> {
  /**
   * @generated from field: int32 channel_id = 1;
   */
  channelId: number;

  /**
   * @generated from field: bool eof = 2;
   */
  eof: boolean;

  /**
   * @generated from field: bytes data = 3;
   */
  data: Uint8Array;

  constructor(data?: PartialMessage<PacketMsg>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.p2p.PacketMsg";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketMsg;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketMsg;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketMsg;

  static equals(a: PacketMsg | PlainMessage<PacketMsg> | undefined, b: PacketMsg | PlainMessage<PacketMsg> | undefined): boolean;
}

/**
 * @generated from message tendermint.p2p.Packet
 */
export declare class Packet extends Message<Packet> {
  /**
   * @generated from oneof tendermint.p2p.Packet.sum
   */
  sum: {
    /**
     * @generated from field: tendermint.p2p.PacketPing packet_ping = 1;
     */
    value: PacketPing;
    case: "packetPing";
  } | {
    /**
     * @generated from field: tendermint.p2p.PacketPong packet_pong = 2;
     */
    value: PacketPong;
    case: "packetPong";
  } | {
    /**
     * @generated from field: tendermint.p2p.PacketMsg packet_msg = 3;
     */
    value: PacketMsg;
    case: "packetMsg";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Packet>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.p2p.Packet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Packet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Packet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Packet;

  static equals(a: Packet | PlainMessage<Packet> | undefined, b: Packet | PlainMessage<Packet> | undefined): boolean;
}

/**
 * @generated from message tendermint.p2p.AuthSigMessage
 */
export declare class AuthSigMessage extends Message<AuthSigMessage> {
  /**
   * @generated from field: tendermint.crypto.PublicKey pub_key = 1;
   */
  pubKey?: PublicKey;

  /**
   * @generated from field: bytes sig = 2;
   */
  sig: Uint8Array;

  constructor(data?: PartialMessage<AuthSigMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.p2p.AuthSigMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthSigMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthSigMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthSigMessage;

  static equals(a: AuthSigMessage | PlainMessage<AuthSigMessage> | undefined, b: AuthSigMessage | PlainMessage<AuthSigMessage> | undefined): boolean;
}

