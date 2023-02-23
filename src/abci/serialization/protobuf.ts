import { Request, Response } from "../../proto/ts/tendermint/abci/types_pb";
import { decode, encode } from "varint";

export function deserialize(data: Buffer): Request[] {
	const result: Request[] = [];
	let index = 0;
	try {
		while (true) {
			const size = decode(data.slice(index));
			const delimiter = encode(size).length;
			const msg = Request.fromBinary(data.slice(index + delimiter, index + delimiter + size));
			index = index + delimiter + size;
			result.push(msg);
			if (index >= data.byteLength) break;
		}
	}
	catch (err) {
		console.log("Deserialize Error:", console.error(err.message));
	}
	return result;
}

export function serialize(data: Response[]): Buffer {
	const buf: Buffer[] = [];
	let size: number = 0;
	try {
		for (let res of data) {
			const msg = Buffer.from(res.toBinary());
			const delimiter = Buffer.from(encode(msg.length));
			buf.push(Buffer.from(delimiter));
			buf.push(Buffer.from(msg));
			size += delimiter.byteLength + msg.byteLength;
		}
	}
	catch (err) {
		console.log("Serialize Error:", console.error(err.message));
	}
	return Buffer.concat(buf, size);
}
