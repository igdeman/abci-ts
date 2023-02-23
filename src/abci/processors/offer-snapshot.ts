import { RequestType } from "../enums";
import { ResponseOfferSnapshot } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function offerSnapshot(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.offerSnapshot,
			value: new ResponseOfferSnapshot()
		}
	});
}
