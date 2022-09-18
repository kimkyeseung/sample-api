import {
  SubscribeMessage,
  WebSocketServer,
  WebSocketGateway,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: { emit: (arg0: string, arg1: string) => void };

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log('got message~!');
    this.server.emit('message', message);
  }
}
