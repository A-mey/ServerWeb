import { Module } from "@nestjs/common";
import { Config } from "./config.service";

@Module({
    providers: [Config],
    exports: [Config],
})
export class ConfigModule {}
