export namespace BaseModel {

    export enum UserType {
        Customer, Provider, Admin
    }

    export enum LocationType {
        AtHome,
        Outdoor,
        PersonalSpace
    }

    export interface UserLocation {
        district: string;
        city: string;
        state: string;
        landMark: string;
        area: string;
        building: string;
        flat: string;
    }

    export interface ServiceLocation {
        state: string;
        district: string;
        city: string;
        area: string;
    }

    export interface User {
        id: string;
        name: string;
        username: string;
        emailId: string;
        phoneNumber: string;
        image?: string;
        role: UserType;
        createdAt: string;
        bookMarkServices: Array<string>;
        location: string;
        rating?: number;
    }

    export interface ServiceSlot {
        date: string;
        fromTime: string;
        toTime: string;
        breakTime: string;
    }

    export enum ServiceState {
        NotStarted,
        OnGoing,
        Ended
    }

    export interface Service {
        id: string;
        providerId: string;
        name: string;
        description: string;
        address: ServiceLocation;
        locationType: LocationType;
        perHourRating: Number;
        image?: string;
        dateAndTimings: ServiceSlot;
        serviceState: ServiceState;
    }

    export enum RequestState {
        Pending,
        Accepted,
        Rejected,
        Failed
    }

    export interface Request {
        fromUserId: string;
        toUserId: string;
        forServiceId: string;
        requestState: RequestState;
    }

    export interface LoginStateObject {
       email: string;
       password: string;
    }

    export interface SignupStateObject {

    }
}
