import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VpbillPage } from './vpbill.page';

describe('VpbillPage', () => {
  let component: VpbillPage;
  let fixture: ComponentFixture<VpbillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpbillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VpbillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
