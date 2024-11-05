import { IProfileRepository } from "../../domain/interface/profile.repository.interface"
import { Profile } from "../../domain/profile.entity"

export class InMemoryProfileRepository implements IProfileRepository {
  private profileCollection: Profile[] = []

  public async save(profile: Profile): Promise<void> {
    this.profileCollection.push(profile)
  }

  public async findOne(uuid: string): Promise<Profile | undefined> {
    return this.profileCollection.find((profile) => profile.uuid === uuid)
  }

  public async findAllByUserUuid(userUuid: string): Promise<Profile[]> {
    return this.profileCollection.filter(
      (profile) => profile.userUuid === userUuid
    )
  }
}
