import { BaseEntity } from "./base.entity";

export class User extends BaseEntity {
    private nameUser: string;
    private dateBirth: Date;
    private email: string;
    private phoneNumber: string;
    private signImage: string;

    constructor(req: any) {
        super();
        this.nameUser = req.nameUser;
        this.dateBirth = req.dateBirth;
        this.email = req.email;
        this.phoneNumber = req.phoneNumber;
        this.signImage = req.signImage;
    }
}

