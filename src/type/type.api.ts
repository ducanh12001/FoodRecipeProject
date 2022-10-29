export type JsonPayloadRequest = {
    baseURL: string;
    url: string;
    method: string;
    withCredentials?: boolean;
    headers: HeadersRes;
    data?: FormData | null;
};

export type JsonPayloadLogin = {
    client_id: string | undefined;
    client_secret: string | undefined;
    grant_type?: string;
    refresh_token?: string | null;
    email?: string;
    password?: string;
    scope?: string;
};

export type HeadersRes = {
    Accept: string;
    'Content-Type': string;
    'Authorization': string | null;
};
