import { RequestType } from "../enums";
import { ResponseCommit } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function commit(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.commit,
			value: new ResponseCommit()
		}
	});
}
