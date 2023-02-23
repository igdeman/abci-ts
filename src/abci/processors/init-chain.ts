import { RequestType } from "../enums";
import { ResponseInitChain } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function initChain(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.initChain,
			value: new ResponseInitChain()
		}
	});
}
