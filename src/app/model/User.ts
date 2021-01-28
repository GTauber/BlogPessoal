import { Posts } from "./Posts"

export class User{
    public id: number
    public name: string
    public user: string
    public pass: string
    public photo: string
    public level: string
    public post: Posts[]
}