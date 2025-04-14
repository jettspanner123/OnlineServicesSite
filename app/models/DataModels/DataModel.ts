import {BaseModel} from "@/app/models/DataModels/BaseModel";
import {v4 as UUID} from "uuid";

namespace DataModel {

    enum UserType {
        Customer, Provider, Admin
    }
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

    export class ServiceLocation implements BaseModel.ServiceLocation {
        area: string;
        city: string;
        district: string;
        state: string;

        constructor(state: string, district: string, city: string, area: string) {
            this.area = area;
            this.city = city;
            this.district = district;
            this.state = state;
        }
    }

    export class User implements BaseModel.User {
       id: string;
       name: string;
       username: string;
       emailId: string;
       phoneNumber: string;
       image?: string;
       role: BaseModel.UserType;
       createdAt: string;
       bookMarkServices: Array<string>;
       location: UserLocation;
       rating?: number;

       // @ts-ignore
        constructor(name: string, username: string, emailId: string, phoneNumber: string, image?: string, role: UserType, createdAt: string, bookMarkService: Array<string>, location: UserLocation, rating?: number) {
            this.id = UUID();
            this.name = name;
            this.username = username;
            this.emailId = emailId;
            this.phoneNumber = phoneNumber;
            this.image = image;
            this.role = role;
            this.createdAt = createdAt;
            this.bookMarkServices = bookMarkService;
            this.location = location;
            this.rating = rating;
        }


    }

}