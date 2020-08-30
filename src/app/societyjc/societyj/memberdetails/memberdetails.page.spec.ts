import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberdetailsPage } from './memberdetails.page';

describe('MemberdetailsPage', () => {
  let component: MemberdetailsPage;
  let fixture: ComponentFixture<MemberdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
