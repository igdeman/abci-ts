import { RequestType } from "../enums";
import { ResponseQuery } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function query(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.query,
			value: new ResponseQuery()
		}
	});
}
