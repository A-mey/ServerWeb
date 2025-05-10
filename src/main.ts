import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Config } from "./common/shared/config/config.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(Config);
    const port = config.get("PORT");
    if (!port) {
        process.exit(1);
    }
    await app.listen(port);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
