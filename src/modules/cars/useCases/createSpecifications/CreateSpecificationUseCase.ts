import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private createSpecificationRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description}: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.createSpecificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specification already exists!');
    }

    await this.createSpecificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };