import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocietyjPage } from './societyj.page';

describe('SocietyjPage', () => {
  let component: SocietyjPage;
  let fixture: ComponentFixture<SocietyjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyjPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocietyjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
