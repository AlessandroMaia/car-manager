import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("marcas")
class Brands {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string

    @Column()
    origem: string

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    
}

export { Brands }