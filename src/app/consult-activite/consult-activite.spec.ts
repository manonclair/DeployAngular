import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ConsultActivite } from './consult-activite';

describe("ConsultActivite", () => {
  let component: ConsultActivite;
  let fixture: ComponentFixture<ConsultActivite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultActivite],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {} } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultActivite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
