import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocietycPage } from './societyc.page';

describe('SocietycPage', () => {
  let component: SocietycPage;
  let fixture: ComponentFixture<SocietycPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietycPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocietycPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
