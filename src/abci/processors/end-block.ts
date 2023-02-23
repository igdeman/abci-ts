import { RequestType } from "../enums";
import { ResponseEndBlock } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function endBlock(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.endBlock,
			value: new ResponseEndBlock()
		}
	});
}
