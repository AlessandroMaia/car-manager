import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("usuarios")
class Users {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Exclude()
    @Column()
    senha: string;
    
    @Column()
    email: string;


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Users };