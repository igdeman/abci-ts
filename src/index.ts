// Server
import { createServer } from 'net';
import { processMessage } from './abci/message-processor';

const PORT = 26658;
let c = 0;

const server = createServer((socket) => {
	const id = ++c;
	console.log(`create connection ${id}`);

	socket.on('connect', () => {
		console.log(`Socket Connected ${id}`);
	})

	socket.on('close', () => {
		console.log(`Socket Close ${id}`);
	})

	socket.on('ready', () => {
		console.log(`Socket Ready ${id}`);
	})

	socket.on('end', () => {
		console.log(`Socket End ${id}`);
	})

	socket.on('data', (data) => {
		console.log(`Data received on channel - ${id}`);
		console.log('socket.bytesRead', socket.bytesRead);
		socket.write(processMessage(data));
		socket.pipe(socket);
	});

});

server.on('error', (err) => {
	console.log(`Error`, err.message);
});

server.listen(PORT, () => {
	console.log('server bound on', PORT);
});
