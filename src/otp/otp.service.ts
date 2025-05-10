import { Injectable } from "@nestjs/common";
import { OtpProviderDao } from "./dao/otp.provider.dao";
import { SendOtpDto } from "./dto/sendOtp.dto";
import { ValidateOtpDto } from "./dto/validateOtp.dto";
import { ValidateOtpResponse } from "./dao/otp.grpc";

@Injectable()
export class OtpService {
    constructor(private readonly otpProviderDao: OtpProviderDao) {}

    async sendOtp(request: SendOtpDto): Promise<void> {
        await this.otpProviderDao.sendOtp(request);
    }

    async validateOtp(request: ValidateOtpDto): Promise<ValidateOtpResponse> {
        return await this.otpProviderDao.validateOtp(request);
    }
}
