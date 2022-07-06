import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { Usertokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";
import { IUsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/IUsersTokensRepository";


class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
    userTokens: Usertokens[] = [];

    async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO): Promise<Usertokens> {
        const userToken = new Usertokens();

        Object.assign(userToken, {
            expires_date,
            refresh_token,
            user_id,
        });

        this.userTokens.push(userToken);

        return userToken;
    }

    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<Usertokens> {
        const userToken = this.userTokens.find((ut) => ut.user_id === user_id && ut.refresh_token && refresh_token);
        return userToken;
    }

    async deleteById(id: string): Promise<void> {
        const userToken = this.userTokens.find((ut) => ut.id === id);
        this.userTokens.splice(this.userTokens.indexOf(userToken));
    }

    async findByRefreshToken(refresh_token: string): Promise<Usertokens> {
        const userToken = this.userTokens.find((ut) => ut.refresh_token === refresh_token);
        return userToken;
    }
}

export { UsersTokensRepositoryInMemory };