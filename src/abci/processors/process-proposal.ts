import { RequestType } from "../enums";
import { ResponseProcessProposal } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function processProposal(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.processProposal,
			value: new ResponseProcessProposal()
		}
	});
}
