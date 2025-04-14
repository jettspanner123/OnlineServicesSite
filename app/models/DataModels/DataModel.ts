import {BaseModel} from "@/app/models/DataModels/BaseModel";
import {v4 as UUID} from "uuid";

export namespace DataModel {

    export enum UserType {
        Customer, Provider, Admin
    }

    export enum RequestState {
        Pending,
        Accepted,
        Rejected,
        Failed
    }

    export enum ServiceState {
        NotStarted,
        OnGoing,
        Ended
    }

    export enum LocationType {
        AtHome,
        Outdoor,
        PersonalSpace
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

    export class ServiceSlot implements BaseModel.ServiceSlot {
        fromDate: string;
        toDate: string;
        fromTime: string;
        toTime: string;

        constructor(fromDate: string, toDate: string, fromTime: string, toTime: string) {
            this.fromDate = fromDate;
            this.toDate = toDate;
            this.fromTime = fromTime;
            this.toTime = toTime;
        }
    }

    export class Service implements BaseModel.Service {
         id: string;
         providerId: string;
         name: string;
         description: string;
         address: ServiceLocation;
         locationType: LocationType;
         perHourRating: number;
         image?: string;
         dateAndTimings: ServiceSlot;
         serviceState: ServiceState;

         // @ts-ignore
        constructor(providerId: string, name: string, description: string, address: ServiceLocation, locationType: LocationType, perHourRating: number, image?: string, dateAndTimings: ServiceSlot, serviceState: ServiceState) {
             this.id = UUID();
             this.providerId = providerId;
             this.name = name;
             this.description = description;
             this.address = address;
             this.locationType = locationType;
             this.perHourRating = perHourRating;
             this.image = image;
             this.dateAndTimings = dateAndTimings;
             this.serviceState = serviceState;
         }
    }

    export class Request implements BaseModel.Request {
        id: string;
        fromUserId: string;
        toUserId: string;
        forServiceId: string;
        requestState: RequestState;

        constructor(fromUserId: string, toUserId: string, forServiceId: string, requestState: RequestState) {
            this.id = UUID();
            this.fromUserId = fromUserId;
            this.toUserId = toUserId;
            this.forServiceId = forServiceId;
            this.requestState = requestState;
        }
    }



}