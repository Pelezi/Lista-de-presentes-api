import { container } from "tsyringe";

import { UserControllerImpl } from "../../../modules/auth//user/api/controllers/impl/UserControllerImpl";
import { CompanyControllerImpl } from "../../../modules/account/company/api/controllers/impl/CompanyControllerImpl";
import { TypeControllerImpl } from "../../../modules/account/type/api/controllers/impl/TypeControllerImpl";
import { PersonControllerImpl} from "../../../modules/account/person/api/controllers/impl/PersonControllerImpl"
import { PriceControllerImpl } from "../../../modules/catalog/price/api/controllers/impl/PriceControllerImpl";
import { ProductControllerImpl } from "../../../modules/gift/api/controllers/impl/ProductControllerImpl";
import { OfferControllerImpl } from "../../../modules/catalog/offer/api/controllers/impl/OfferControllerImpl";
import { EditUserControllerImpl } from "../../../modules/editUser/api/controllers/impl/EditUserControllerImpl";


import { EditUserServiceImpl } from "../../../modules/editUser/business/services/impl/EditUserServiceImpl";
import { UserServiceImpl } from "../../../modules/auth/user/business/services/impl/UserServiceImpl";
import { CompanyServiceImpl } from "../../../modules/account/company/business/services/impl/CompanyServiceImpl";
import { TypeServiceImpl } from "../../../modules/account/type/business/services/impl/TypeServiceImpl";
import { PersonServiceImpl} from "../../../modules/account/person/business/services/impl/PersonServiceImpl"
import { PriceServiceImpl } from "../../../modules/catalog/price/business/services/impl/PriceServiceImpl";
import { ProductServiceImpl } from "../../../modules/gift/business/services/impl/ProductServiceImpl";
import { ProductService } from "../../../modules/gift/business/services/ProductService";
import { OfferServiceImpl } from "../../../modules/catalog/offer/business/services/impl/OfferServiceImpl";

import { AddressRepositoryImpl } from "../../../modules/account/address/database/repositories/impl/typeorm/repositories/AddressRepositoryImpl";
import { UserRepositoryImpl } from "../../../modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl";
import { TypeRepositoryImpl } from "../../../modules/account/type/database/repositories/impl/typeorm/repositories/TypeRepositoryImpl";
import { CompanyRepositoryImpl } from "../../../modules/account/company/database/repositories/impl/typeorm/repositories/CompanyRepositoryImpl";
import { PersonRepositoryImpl} from "../../../modules/account/person/database/repositories/impl/typeorm/repositories/PersonRepositoryImpl"
import { PriceRepositoryImpl } from "../../../modules/catalog/price/database/repositories/impl/typeorm/repositories/PriceRepositoryImpl";
import { ProductRepositoryImpl } from "../../../modules/gift/database/repositories/impl/typeorm/repositories/ProductRepositoryImpl";
import { OfferRepositoryImpl } from "../../../modules/catalog/offer/database/repositories/impl/typeorm/repositories/OfferRepositoryImpl";


container.register("EditUserController", {useClass: EditUserControllerImpl})
container.register("UserController", {useClass: UserControllerImpl});
container.register("CompanyController", {useClass: CompanyControllerImpl});
container.register("TypeController", {useClass: TypeControllerImpl});
container.register("PersonController", {useClass: PersonControllerImpl});
container.register("PriceController", {useClass: PriceControllerImpl});
container.register("ProductController", {useClass: ProductControllerImpl});
container.register("OfferController", {useClass: OfferControllerImpl});


container.register("EditUserService", {useClass: EditUserServiceImpl})
container.register("UserService", {useClass: UserServiceImpl});
container.register("CompanyService", {useClass: CompanyServiceImpl});
container.register("TypeService", {useClass: TypeServiceImpl});
container.register("PersonService", {useClass: PersonServiceImpl});
container.register("PriceService", {useClass: PriceServiceImpl});
container.register<ProductService>("ProductService", {useClass: ProductServiceImpl});
container.register("OfferService", {useClass: OfferServiceImpl});



container.register("AddressRepository", {useClass: AddressRepositoryImpl})
container.register("UserRepository", {useClass: UserRepositoryImpl});
container.register("TypeRepository", {useClass: TypeRepositoryImpl});
container.register("CompanyRepository", {useClass: CompanyRepositoryImpl});
container.register("PersonRepository", {useClass: PersonRepositoryImpl});
container.register("PriceRepository", {useClass: PriceRepositoryImpl});
container.register("ProductRepository", {useClass: ProductRepositoryImpl});
container.register("OfferRepository", {useClass: OfferRepositoryImpl});



import { AuthControllerImpl } from "../../../modules/auth/auth/api/controllers/impl/AuthControllerImpl";
container.register("AuthController", {useClass: AuthControllerImpl});

import { AuthServiceImpl } from "../../../modules/auth/auth/business/services/impl/AuthServiceImpl";
container.register("AuthService", {useClass: AuthServiceImpl});
