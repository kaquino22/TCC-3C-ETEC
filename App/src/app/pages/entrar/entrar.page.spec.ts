import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrarPage } from './entrar.page';

describe('EntrarPage', () => {
  let component: EntrarPage;
  let fixture: ComponentFixture<EntrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
