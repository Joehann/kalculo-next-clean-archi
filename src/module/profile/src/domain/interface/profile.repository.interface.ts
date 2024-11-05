import { Profile } from "../profile.entity"

export interface IProfileRepository {
  save(profile: Profile): Promise<void>
  findOne(uuid: string): Promise<Profile | undefined>
  findAllByUserUuid(userUuid: string): Promise<Profile[]>
}
