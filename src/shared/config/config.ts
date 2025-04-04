import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConfigSchema } from "../types/config.type";

@Injectable ()
export class Config extends ConfigService {
    get<K extends keyof ConfigSchema>(key: K): string | undefined {
        return super.get(key);
    }
}