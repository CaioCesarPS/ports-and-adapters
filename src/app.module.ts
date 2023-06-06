import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModuleWithoutPorts } from './cats-without-ports-and-adapters/cat.module';
import { CatsModuleWitPortsAndAdapters } from './cats-with-ports-and-adapters/cat.module';

@Module({
  imports: [CatsModuleWithoutPorts, CatsModuleWitPortsAndAdapters],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
