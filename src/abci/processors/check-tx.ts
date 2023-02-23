import { RequestType } from "../enums";
import { ResponseCheckTx } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function checkTx(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.checkTx,
			value: new ResponseCheckTx()
		}
	});
}
