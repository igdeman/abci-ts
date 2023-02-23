import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";

export function echo(req: Request): Response {
	const res = new Response();
	return res;
}
