import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {
  citiesFormGroup: FormGroup;

  radioFormGroup: FormGroup;

  flightNumberFormGroup: FormGroup;

  flightList = [];

  radioConfig = [
    { label: 'Search by Cities', value: 'searchByCities' },
    { label: 'Search by Flight Number', value: 'searchByFlightNumber' },
  ];

  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.radioFormGroup = this.fb.group({
      option: 'searchByCities',
    });
    this.citiesFormGroup = this.fb.group({
      from: ['Mumbai', Validators.required],
      to: ['Delhi', Validators.required],
    });
    this.flightNumberFormGroup = this.fb.group({
      flightNumber: ['', Validators.required],
    });
  }

  isFormValid(): boolean {
    if (this.radioFormGroup.controls['option'].value === 'searchByCities') {
      return this.citiesFormGroup.invalid;
    }
    return this.flightNumberFormGroup.invalid;
  }

  searchFlight(): void {
    if (this.radioFormGroup.controls['option'].value === 'searchByCities') {
      const data = this.citiesFormGroup.getRawValue();
      this.serviceService
        .searchFlightByCities(data.from, data.to)
        .subscribe((data) => this.createFlightData(data));
    } else if (
      this.radioFormGroup.controls['option'].value === 'searchByFlightNumber'
    ) {
      const data = this.flightNumberFormGroup.getRawValue();
      this.serviceService
        .searchFlightByNumber(data.flightNumber)
        .subscribe((data) => this.createFlightData(data));
    }
  }

  createFlightData(data: any) {
    data.forEach((item: any) => {
      item.startDateTime = formatDate(item.startDateTime, 'HH:mm', 'en');
      item.endDateTime = formatDate(item.endDateTime, 'HH:mm', 'en');
    });
    this.flightList = data;
  }
}
