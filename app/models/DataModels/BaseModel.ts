export namespace BaseModel {

    enum UserType {
        Customer, Provider, Admin
    }
    enum LocationType {
        AtHome,
        Outdoor,
        PersonalSpace
    }

    interface UserLocation {
        district: string;
        city: string;
        state: string;
        landMark: string;
        area: string;
        building: string;
        flat: string;
    }

    interface ServiceLocation {
        state: string;
        district: string;
        city: string;
        area: string;
    }

    interface User {
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

    interface ServiceSlot {
        date: string;
        fromTime: string;
        toTime: string;
        breakTime: string;
    }

    interface Service {
        id: string;
        providerId: string;
        name: string;
        description: string;
        address: ServiceLocation;
        locationType: LocationType;
        perHourRating: Number;
        image?: string;
        timings: ServiceSlot;
        
    }
}
