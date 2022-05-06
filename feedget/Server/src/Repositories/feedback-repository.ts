export interface FeedbackCreateData{
    type:string,
    coment:string,
    screenshot?:string
}


export interface FeedbackRepository{
    create:(data:FeedbackCreateData)=> Promise<void>
}