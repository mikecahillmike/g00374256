import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolkswagenPage } from './volkswagen.page';

describe('VolkswagenPage', () => {
  let component: VolkswagenPage;
  let fixture: ComponentFixture<VolkswagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolkswagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolkswagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
