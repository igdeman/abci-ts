import { RequestType } from "../enums";
import { ResponseFlush } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function flush(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.flush,
			value: new ResponseFlush()
		}
	});
}
