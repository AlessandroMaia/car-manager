import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Brands } from "./Brands";

@Entity("carros")
class Cars {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string

    @Column()
    km_por_galao: string

    @Column()
    cilindros: string

    @Column()
    peso: string

    @Column()
    aceleracao: string

    @Column()
    ano: string

    @Column()
    origem: string

    @Column()
    marca_id: string

    @JoinColumn({ name: "marca_id"})
    @ManyToOne(() => Brands)
    marcaId: string
    
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Cars }