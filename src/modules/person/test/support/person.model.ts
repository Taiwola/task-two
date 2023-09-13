import { Person } from '../../entities/person.entity';
import { MockModel } from '../../entities/test/support/mock.model';
import { personStubs } from '../stubs/person.stub';

export class PersonModel extends MockModel<Person> {
  protected entitystub = personStubs();
}
