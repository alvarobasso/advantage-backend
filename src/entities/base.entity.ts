export class BaseEntity {
    private createdAt: Date;
    private updatedAt: Date;
    private status: Boolean;
  
    constructor() {
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.status = true;
    }
  }