import { RequestType } from "../enums";
import { ResponseApplySnapshotChunk } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function applySnapshotChunk(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.applySnapshotChunk,
			value: new ResponseApplySnapshotChunk()
		}
	});
}
