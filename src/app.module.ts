import { Module } from '@nestjs/common';
import { BoardsController } from './boards/boards.controller';
import { BoardsService } from './boards/boards.service';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class AppModule {}
