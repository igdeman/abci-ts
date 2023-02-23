import { RequestType } from "../enums";
import { ResponseInfo } from "../../proto/ts/tendermint/abci/types_pb";
import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function info(req: Request): Response {
	return new Response({
		value: {
			case: RequestType.info,
			value: new ResponseInfo({
				version: '1.0.0',
				lastBlockHeight: 0n,
				lastBlockAppHash: Buffer.from(''),
			})
		}
	})
}
