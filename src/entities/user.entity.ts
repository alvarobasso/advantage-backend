import { BaseEntity } from "./base.entity";

export class User extends BaseEntity {

    private nameUser: string;
    private dateBirth: string;
    private email: string;
    private phoneNumber: string;

    constructor(req: any) {
        super();
        this.nameUser = req.nameUser;
        this.dateBirth = req.dateBirth;
        this.email = req.email;
        this.phoneNumber = req.phoneNumber;
    }

}