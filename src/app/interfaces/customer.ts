export interface ICustomer {
    id?: string,
    company_id?: string,
    first_name?: string,
    last_name?: string,
    phone?: string,
    email?: string,
    status?: string,
    date_birthday?: string
    createdAt?: string,
    updatedAt?: string
    address?: string,
    avatar?: string,
}
  
export interface ICustomers {
    body?: ICustomer[],
    length?: number
}
  