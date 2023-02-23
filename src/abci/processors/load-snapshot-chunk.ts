import { RequestType } from "../enums";
import { ResponseLoadSnapshotChunk } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function loadSnapshotChunk(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.loadSnapshotChunk,
			value: new ResponseLoadSnapshotChunk()
		}
	});
}
