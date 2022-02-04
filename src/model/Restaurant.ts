import { Image } from './Image';
import { Address } from './Address';

export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public address: Address,
    public averageDeliveryTime: number,
    public deliveryCost: number,
    public minimumOrderValue: number,
    public rating: number,
    public openingTime: string,
    public open: boolean,
    public categories: Array<string>,
    public thumbnailImage: Image,
    public fullImage: Image
  ) { }
}