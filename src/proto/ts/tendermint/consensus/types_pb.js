// @generated by protoc-gen-es v1.0.0
// @generated from file tendermint/consensus/types.proto (package tendermint.consensus, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { BlockID, Part, PartSetHeader, Proposal as Proposal$1, SignedMsgType, Vote as Vote$1 } from "../types/types_pb.js";
import { BitArray } from "../libs/bits/types_pb.js";

/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 *
 * @generated from message tendermint.consensus.NewRoundStep
 */
export const NewRoundStep = proto3.makeMessageType(
  "tendermint.consensus.NewRoundStep",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "step", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "seconds_since_start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "last_commit_round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 *
 * @generated from message tendermint.consensus.NewValidBlock
 */
export const NewValidBlock = proto3.makeMessageType(
  "tendermint.consensus.NewValidBlock",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "block_part_set_header", kind: "message", T: PartSetHeader },
    { no: 4, name: "block_parts", kind: "message", T: BitArray },
    { no: 5, name: "is_commit", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Proposal is sent when a new block is proposed.
 *
 * @generated from message tendermint.consensus.Proposal
 */
export const Proposal = proto3.makeMessageType(
  "tendermint.consensus.Proposal",
  () => [
    { no: 1, name: "proposal", kind: "message", T: Proposal$1 },
  ],
);

/**
 * ProposalPOL is sent when a previous proposal is re-proposed.
 *
 * @generated from message tendermint.consensus.ProposalPOL
 */
export const ProposalPOL = proto3.makeMessageType(
  "tendermint.consensus.ProposalPOL",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "proposal_pol_round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "proposal_pol", kind: "message", T: BitArray },
  ],
);

/**
 * BlockPart is sent when gossipping a piece of the proposed block.
 *
 * @generated from message tendermint.consensus.BlockPart
 */
export const BlockPart = proto3.makeMessageType(
  "tendermint.consensus.BlockPart",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "part", kind: "message", T: Part },
  ],
);

/**
 * Vote is sent when voting for a proposal (or lack thereof).
 *
 * @generated from message tendermint.consensus.Vote
 */
export const Vote = proto3.makeMessageType(
  "tendermint.consensus.Vote",
  () => [
    { no: 1, name: "vote", kind: "message", T: Vote$1 },
  ],
);

/**
 * HasVote is sent to indicate that a particular vote has been received.
 *
 * @generated from message tendermint.consensus.HasVote
 */
export const HasVote = proto3.makeMessageType(
  "tendermint.consensus.HasVote",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(SignedMsgType) },
    { no: 4, name: "index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes.
 *
 * @generated from message tendermint.consensus.VoteSetMaj23
 */
export const VoteSetMaj23 = proto3.makeMessageType(
  "tendermint.consensus.VoteSetMaj23",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(SignedMsgType) },
    { no: 4, name: "block_id", kind: "message", T: BlockID },
  ],
);

/**
 * VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID.
 *
 * @generated from message tendermint.consensus.VoteSetBits
 */
export const VoteSetBits = proto3.makeMessageType(
  "tendermint.consensus.VoteSetBits",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(SignedMsgType) },
    { no: 4, name: "block_id", kind: "message", T: BlockID },
    { no: 5, name: "votes", kind: "message", T: BitArray },
  ],
);

/**
 * @generated from message tendermint.consensus.Message
 */
export const Message = proto3.makeMessageType(
  "tendermint.consensus.Message",
  () => [
    { no: 1, name: "new_round_step", kind: "message", T: NewRoundStep, oneof: "sum" },
    { no: 2, name: "new_valid_block", kind: "message", T: NewValidBlock, oneof: "sum" },
    { no: 3, name: "proposal", kind: "message", T: Proposal, oneof: "sum" },
    { no: 4, name: "proposal_pol", kind: "message", T: ProposalPOL, oneof: "sum" },
    { no: 5, name: "block_part", kind: "message", T: BlockPart, oneof: "sum" },
    { no: 6, name: "vote", kind: "message", T: Vote, oneof: "sum" },
    { no: 7, name: "has_vote", kind: "message", T: HasVote, oneof: "sum" },
    { no: 8, name: "vote_set_maj23", kind: "message", T: VoteSetMaj23, oneof: "sum" },
    { no: 9, name: "vote_set_bits", kind: "message", T: VoteSetBits, oneof: "sum" },
  ],
);
