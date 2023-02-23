export enum RequestType {
	echo = "echo",
	flush = "flush",
	info = "info",
	initChain = "initChain",
	query = "query",
	beginBlock = "beginBlock",
	checkTx = "checkTx",
	deliverTx = "deliverTx",
	endBlock = "endBlock",
	commit = "commit",
	listSnapshots = "listSnapshots",
	offerSnapshot = "offerSnapshot",
	loadSnapshotChunk = "loadSnapshotChunk",
	applySnapshotChunk = "applySnapshotChunk",
	prepareProposal = "prepareProposal",
	processProposal = "processProposal"
}
