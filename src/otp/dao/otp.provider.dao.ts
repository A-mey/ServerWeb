import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { OtpServiceClient, SendOtpRequest, SendOtpResponse, ValidateOtpRequest, ValidateOtpResponse } from "./otp.grpc";

@Injectable()
export class OtpProviderDao implements OnModuleInit {
    private otpService: OtpServiceClient;

    constructor(@Inject("OTP_SERVICE") private client: ClientGrpc) {}

    onModuleInit() {
        this.otpService = this.client.getService<OtpServiceClient>("OtpService");
    }

    async sendOtp(sendOtpRequest: SendOtpRequest): Promise<SendOtpResponse> {
        return await firstValueFrom(this.otpService.sendOtp(sendOtpRequest));
    }

    async validateOtp(ValidateOtpRequest: ValidateOtpRequest): Promise<ValidateOtpResponse> {
        return await firstValueFrom(this.otpService.validateOtp(ValidateOtpRequest));
    }
}
