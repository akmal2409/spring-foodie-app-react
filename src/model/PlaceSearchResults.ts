export class PlaceSearchResults {
    constructor(public readonly numResults: number,
        public readonly offset: number,
        public readonly totalResults: number,
        public readonly results: PlaceSearchResult[]) { }
}

export class PlaceSearchResult {
    constructor(public readonly type: string,
        public readonly id: string,
        public readonly address: PlaceSearchAddress,
        public readonly location: Location) { }
}

export class PlaceSearchAddress {
    constructor(public readonly streetName: string,
        public readonly municipality: string,
        public readonly countrySubdivision: string,
        public readonly postalCode: string,
        public readonly extendedPostalCode: string,
        public readonly countryCode: string,
        public readonly country: string,
        public readonly freeformAddress: string,
        public readonly localName: string) { }
}

export class Location {
    constructor(public readonly lat: number,
        public readonly lon: number) { }
}