import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { ImagesController } from './images/images.controller';
import { ImagesService } from './images/images.service';

@Module({
  imports: [
    ImagesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
  ],
  controllers: [AppController, ImagesController],
  providers: [AppService, ImagesService],
})
export class AppModule {}
