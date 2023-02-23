import { RequestType } from "../enums";
import { RequestPrepareProposal, ResponsePrepareProposal } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function prepareProposal(req: Request): Response {
	const msg = req.value.value as RequestPrepareProposal;
	return new Response({
		value: {
			case: RequestType.prepareProposal,
			value: new ResponsePrepareProposal({ txs: msg.txs })
		}
	});
}
