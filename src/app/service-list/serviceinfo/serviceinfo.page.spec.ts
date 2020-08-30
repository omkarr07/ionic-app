import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceinfoPage } from './serviceinfo.page';

describe('ServiceinfoPage', () => {
  let component: ServiceinfoPage;
  let fixture: ComponentFixture<ServiceinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
