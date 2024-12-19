export class ClientModel{
    constructor(
        public id?: String,
        public userId?: String,
        public userName?: String,
        public appId?: String,
        public appSecretKey?: String,
        public appRedirectUrl?: String
    ) { }
}