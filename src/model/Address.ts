export class Address {
  constructor(
    public country: string,
    public city: string,
    public postCode: string,
    public street: string,
    public addition: string,
    public apartmentNumber: string,
    public location: Location
  ) { }
}

export class Location {
  constructor(
    public lat: number,
    public lon: number
  ) { }
}