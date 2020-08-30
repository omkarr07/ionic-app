import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocietyjcPage } from './societyjc.page';

describe('SocietyjcPage', () => {
  let component: SocietyjcPage;
  let fixture: ComponentFixture<SocietyjcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyjcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocietyjcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
