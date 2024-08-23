"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_service_1 = require("./app.service");
const logger_interceptor_1 = require("./common/interceptor/logger.interceptor");
let AppController = class AppController {
    constructor(appService, service1, service2) {
        this.appService = appService;
        this.service1 = service1;
        this.service2 = service2;
    }
    getHello() {
        return this.appService.getHello();
    }
    getService1() {
        return this.service1.send({ cmd: 'get_hello' }, 'api-gateway');
    }
    getService2() {
        return this.service2.send({ cmd: 'get_hello' }, 'api-gateway');
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('service1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getService1", null);
__decorate([
    (0, common_1.Get)('service2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getService2", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(logger_interceptor_1.LoggingInterceptor),
    __param(1, (0, common_1.Inject)('SERVICE_1')),
    __param(2, (0, common_1.Inject)('SERVICE_2')),
    __metadata("design:paramtypes", [app_service_1.AppService,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], AppController);
//# sourceMappingURL=app.controller.js.map