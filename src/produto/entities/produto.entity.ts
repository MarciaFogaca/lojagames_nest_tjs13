import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "../../categoria/entities/categoria.entity"

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100, nullable: false})
    nome: string

    @Column({type: "decimal", precision: 8, scale: 2, nullable: false})
    preco: number

    @Column({length: 5000, nullable: true})
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
}