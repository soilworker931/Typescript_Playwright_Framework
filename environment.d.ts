declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BASE_URL: string;
            USER_PASSWORD:string;
        }
    }
}

export { }