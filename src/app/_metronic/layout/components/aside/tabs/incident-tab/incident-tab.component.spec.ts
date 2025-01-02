import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTabComponent } from './incident-tab.component';

describe('IncidentTabComponent', () => {
  let component: IncidentTabComponent;
  let fixture: ComponentFixture<IncidentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
