import { RequestType } from "../enums";
import { ResponseBeginBlock } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function beginBlock(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.beginBlock,
			value: new ResponseBeginBlock()
		}
	});
}
