import dataSource from "../../../config/database/typeorm/data-source"
import { Type, TypeUser } from "../../../modules/account/type/database/repositories/impl/typeorm/entities/type.entity";

export const seedUserTypes = async () => {
    const userTypeRepository = dataSource.getRepository(Type);

    await userTypeRepository.upsert(userTypes, {
        conflictPaths: ["id"]
    });
}

const userTypes = [
    {
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
        name: TypeUser.consumidor
    },
    { 
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12",
        name: TypeUser.produtorRuralPF
    },
    { 
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13",
        name: TypeUser.produtorRuralPJ
    },
    { 
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14",
        name: TypeUser.cooperativaAssociacao
    },
    {   
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15",
        name: TypeUser.centralDeAbastecimento
    },
    { 
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16",
        name: TypeUser.agroindustria
    },
    { 
        id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a17",
        name: TypeUser.revendedor
    }
]    
