import { Team} from "./team.model"
export class ServiceResponse{
    data:Team[];

    constructor(data:Team[]){
        this.data=data;


    }


}