import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  // Configurar títulos de documnentación
  const options = new DocumentBuilder() 
    // .addBearerAuth()
    .setTitle('ApiGatewat-Example')
    .setDescription('Example')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions:{
      enableImplicitConversion: true
    }
  }))
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

