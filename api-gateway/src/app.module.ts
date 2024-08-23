import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_1',
        transport: Transport.TCP,
        options: { host: 'service_1', port: 3000 },
      },
      {
        name: 'SERVICE_2',
        transport: Transport.TCP,
        options: { host: 'service_2', port: 3000 },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
