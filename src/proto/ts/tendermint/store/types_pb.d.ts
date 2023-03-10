// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/store/types.proto (package tendermint.store, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message tendermint.store.BlockStoreState
 */
export declare class BlockStoreState extends Message<BlockStoreState> {
  /**
   * @generated from field: int64 base = 1;
   */
  base: bigint;

  /**
   * @generated from field: int64 height = 2;
   */
  height: bigint;

  constructor(data?: PartialMessage<BlockStoreState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tendermint.store.BlockStoreState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockStoreState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockStoreState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockStoreState;

  static equals(a: BlockStoreState | PlainMessage<BlockStoreState> | undefined, b: BlockStoreState | PlainMessage<BlockStoreState> | undefined): boolean;
}

