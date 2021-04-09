import { Platform } from '../platform/platform.model';

export interface User {
id: number;
first_name: string;
last_name: string;
email: string;
gender: string;
ip_address: string;
username: string;
profile_shared: ProfileShared;
platforms_details: Platform[];
}

export interface ProfileShared {
    shared_on_platform_1: boolean;
    shared_on_platform_2: boolean;
    shared_on_platform_3: boolean;
}
