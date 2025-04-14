import {BaseModel} from "@/app/models/DataModels/BaseModel";

namespace DataModel {
    export class UserLocation implements BaseModel.UserLocation {
        public area: string;
        public building: string;
        public city: string;
        public district: string;
        public flat: string;
        public landMark: string;
        public state: string;

        constructor(state: string, district: string, city: string, area: string, landMark: string, building: string, flat: string) {
            this.area = area;
            this.building = building;
            this.city = city;
            this.district = district;
            this.flat = flat;
            this.landMark = landMark;
            this.state = state;
        }
    }

    const UserLocation_T: UserLocation = new UserLocation("WB", "Howrah", "Belur", "BelurMath", "Rangoli Mall", "Maa Shardha Kutir", "3b");
}