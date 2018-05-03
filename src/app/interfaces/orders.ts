import { ICustomer } from "./customer";

export interface IOrder {
    id?: string;
    company_id?: string;
    customer_id?: string;
    executor_id?: string;
    name: string;
    address: string;
    longitude?: string;
    latitude?: string;
    description?: string;
    customer?: ICustomer;
    status?: string;
    price?: string;
    comment?: string;
    who_created?: string;
    date_complete?: string;
    date_created?: string;
    date_updated?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IOrders {
    order?: IOrder;
    customer?: ICustomer
}

export interface IResOrders {
    body?: IOrder[];
    length?: number;
}
