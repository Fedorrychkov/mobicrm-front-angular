export interface IUser {
    id: string,
    company_id?: string,
    first_name?: string,
    last_name?: string,
    login: string,
    phone?: string,
    email?: string,
    avatar?: string,
    role: string,
    status?: string,
    rate_per_order?: number,
    rate_per_month?: number,
}
