const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

export class Batch {
  id: number;
  token_ids: number[];
  timestamp: number;
  price: number;
  itemsLeft: number;

  constructor(id: number, token_ids: number[], timestamp: number, price: number, itemsLeft: number) {
    this.id = id;
    this.token_ids = token_ids;
    this.timestamp = timestamp;
    this.price = price;
    this.itemsLeft = itemsLeft;
  }

  image_url(): string {
    return IPFS_GATEWAY + this.id.toString() + ".png";
  }
}
