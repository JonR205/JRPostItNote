export class PostItData {
    public title: string
    public message: string 
    public owner: string

    constructor(title:string,message:string,owner:string) {
        this.title = title
        this.message = message
        this.owner = owner
    }
}
