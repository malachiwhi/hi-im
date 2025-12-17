export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    location: {
        latitude: number;
        longitude: number;
    };
    profilePicture: string;
    bio: string;
    preferences: {
        
    };
    matches: string[];
    ghostedUsers: string[];
}