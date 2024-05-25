import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('сайт PREME')
        .setDescription('Красивый магазин компьютерных девайсов')
        .setVersion('1.5.2')
        .addTag('Vlad Gamal')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    const corsOptions: CorsOptions = {
        origin: '*', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        // preflightContinue: false,
      };
      app.enableCors(corsOptions);

    // app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()
