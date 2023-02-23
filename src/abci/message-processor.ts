import { RequestType } from './enums';
import { deserialize, serialize } from './serialization/protobuf';
import { Request, Response } from '../proto/ts/tendermint/abci/types_pb';
import {
	applySnapshotChunk,
	beginBlock,
	checkTx,
	commit,
	deliverTx,
	echo,
	endBlock,
	flush,
	info,
	initChain,
	listSnapshots,
	loadSnapshotChunk,
	offerSnapshot,
	prepareProposal,
	processProposal,
	query,
} from './processors';

type RequestProcessor = (req: Request) => Response;
const processors: Map<string, RequestProcessor> = new Map<string, RequestProcessor>([
	[RequestType.applySnapshotChunk, applySnapshotChunk],
	[RequestType.beginBlock, beginBlock],
	[RequestType.checkTx, checkTx],
	[RequestType.commit, commit],
	[RequestType.deliverTx, deliverTx],
	[RequestType.echo, echo],
	[RequestType.endBlock, endBlock],
	[RequestType.flush, flush],
	[RequestType.info, info],
	[RequestType.initChain, initChain],
	[RequestType.listSnapshots, listSnapshots],
	[RequestType.loadSnapshotChunk, loadSnapshotChunk],
	[RequestType.offerSnapshot, offerSnapshot],
	[RequestType.prepareProposal, prepareProposal],
	[RequestType.processProposal, processProposal],
	[RequestType.query, query],
]);

export function processMessage(proto: Buffer): Buffer {
	const req: Request[] = deserialize(proto);
	console.log("\n");
	console.log("process messages", req);
	const res: Response[] = [];
	for (const r of req) {
		if (processors.has(r.value.case)) {
			console.log(`Processing message ${r.value.case}`, r.value.value);
			const processor = processors.get(r.value.case);
			res.push(processor(r));
		}
	}
	console.log("\n");
	console.log('Return responses', res);
	for (let r of res) {
		console.log(`Response for ${r.value.case}`, r.value.value);
	}
	return serialize(res);
}
