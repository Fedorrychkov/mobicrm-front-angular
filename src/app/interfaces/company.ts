export interface ICompany {
    address?: string,
    avatar?: string,
    createdAt: string,
    description?: string,
    director_id: number,
    id: number,
    name?: string,
    status?: string,
    tags?: string,
    updatedAt: string
}

export interface ICompanies {
    body?: ICompany[],
    length?: number
}
  