import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/SpecificationsRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/implementations/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/implementations/ISpecificationsRepository";


container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationsRepository", SpecificationsRepository);