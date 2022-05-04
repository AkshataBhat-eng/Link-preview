import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EventEmitter} from '@angular/core';
import {Link} from 'ngx-linkifyjs';
import {MatLinkPreviewContainerComponent} from './mat-link-preview-container.component';
import {MatLinkPreviewComponent, MatLinkPreviewService} from '../../..';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {FormsModule} from '@angular/forms';

describe('MatLinkPreviewContainerComponent', () => {
  let component: MatLinkPreviewContainerComponent;
  let fixture: ComponentFixture<MatLinkPreviewContainerComponent>;
  const linkPreviewServicePartial: Partial<MatLinkPreviewService> = {
    onLinkFound: new EventEmitter<Array<Link>>(),
    links: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatProgressSpinnerModule, MatButtonModule, FormsModule],
      declarations: [MatLinkPreviewContainerComponent, MatLinkPreviewComponent],
      providers: [{provide: MatLinkPreviewService, useValue: linkPreviewServicePartial}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLinkPreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
