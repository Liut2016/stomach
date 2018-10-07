import { PersonnelModule } from './personnel.module';

describe('PersonnelModule', () => {
  let personnelModule: PersonnelModule;

  beforeEach(() => {
    personnelModule = new PersonnelModule();
  });

  it('should create an instance', () => {
    expect(personnelModule).toBeTruthy();
  });
});
